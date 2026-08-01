import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'portfolio:visitors';
const FALLBACK_KEY = 'rameesk-portfolio-visitors-v1';
const BASELINE_COUNT = 1000;

// Initialize Redis client - will be null if env vars are missing
function getRedisClient(): Redis | null {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
        return null;
    }

    return new Redis({ url, token });
}

// Fallback counter service using CountAPI when Upstash Redis is unconfigured or unreachable
async function getFallbackCount(): Promise<number> {
    try {
        const res = await fetch(`https://countapi.mileshilliard.com/api/v1/get/${FALLBACK_KEY}`, {
            cache: 'no-store'
        });
        if (res.ok) {
            const data = await res.json();
            return BASELINE_COUNT + (data.value || 0);
        }
    } catch (e) {
        console.error('[Visitor Counter] Fallback GET error:', e);
    }
    return BASELINE_COUNT;
}

async function incrementFallbackCount(): Promise<number> {
    try {
        const res = await fetch(`https://countapi.mileshilliard.com/api/v1/hit/${FALLBACK_KEY}`, {
            cache: 'no-store'
        });
        if (res.ok) {
            const data = await res.json();
            return BASELINE_COUNT + (data.value || 0);
        }
    } catch (e) {
        console.error('[Visitor Counter] Fallback INCR error:', e);
    }
    return BASELINE_COUNT;
}

export async function GET() {
    try {
        const redis = getRedisClient();

        if (redis) {
            let count = await redis.get<number>(COUNTER_KEY);

            if (count === null) {
                await redis.set(COUNTER_KEY, 1000);
                count = 1000;
            }

            return NextResponse.json({ count, source: 'upstash' });
        }
    } catch (error) {
        console.warn('[Visitor Counter] Upstash Redis unavailable, using fallback counter.');
    }

    const count = await getFallbackCount();
    return NextResponse.json({ count, source: 'fallback' });
}

export async function POST() {
    try {
        const redis = getRedisClient();

        if (redis) {
            const exists = await redis.exists(COUNTER_KEY);

            if (!exists) {
                await redis.set(COUNTER_KEY, 999);
            }

            const newCount = await redis.incr(COUNTER_KEY);
            return NextResponse.json({ count: newCount, source: 'upstash' });
        }
    } catch (error) {
        console.warn('[Visitor Counter] Upstash Redis unavailable, using fallback counter.');
    }

    const count = await incrementFallbackCount();
    return NextResponse.json({ count, source: 'fallback' });
}

