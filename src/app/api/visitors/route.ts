import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const COUNTER_KEY = 'portfolio:visitors';
const ABACUS_NAMESPACE = 'ramees-kallan-portfolio';
const ABACUS_KEY = 'visitors';
const BASELINE_COUNT = 1000;

// Initialize Redis client - will be null if env vars are missing or placeholders
function getRedisClient(): Redis | null {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token || url.includes('your-upstash-db') || token === 'your_token_here') {
        return null;
    }

    return new Redis({ url, token });
}

// Fallback counter service using Abacus API when Upstash Redis is unconfigured or unreachable
async function getAbacusCount(): Promise<number | null> {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const res = await fetch(`https://abacus.jasoncameron.dev/get/${ABACUS_NAMESPACE}/${ABACUS_KEY}`, {
            cache: 'no-store',
            signal: controller.signal,
            headers: {
                'User-Agent': 'RameesPortfolio/1.0'
            }
        });
        clearTimeout(timeoutId);

        if (res.ok) {
            const data = await res.json();
            if (typeof data.value === 'number') {
                return BASELINE_COUNT + data.value;
            }
        } else if (res.status === 404) {
            // First time initialization
            return await incrementAbacusCount();
        }
    } catch (e) {
        console.error('[Visitor Counter] Abacus GET error:', e);
    }
    return null;
}

async function incrementAbacusCount(): Promise<number | null> {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const res = await fetch(`https://abacus.jasoncameron.dev/hit/${ABACUS_NAMESPACE}/${ABACUS_KEY}`, {
            cache: 'no-store',
            signal: controller.signal,
            headers: {
                'User-Agent': 'RameesPortfolio/1.0'
            }
        });
        clearTimeout(timeoutId);

        if (res.ok) {
            const data = await res.json();
            if (typeof data.value === 'number') {
                return BASELINE_COUNT + data.value;
            }
        }
    } catch (e) {
        console.error('[Visitor Counter] Abacus INCR error:', e);
    }
    return null;
}

export async function GET() {
    try {
        const redis = getRedisClient();

        if (redis) {
            let count = await redis.get<number>(COUNTER_KEY);

            if (count === null) {
                await redis.set(COUNTER_KEY, BASELINE_COUNT);
                count = BASELINE_COUNT;
            }

            return NextResponse.json({ count, source: 'upstash' });
        }
    } catch (error) {
        console.warn('[Visitor Counter] Upstash Redis unavailable, using Abacus.');
    }

    const count = await getAbacusCount();
    if (count !== null) {
        return NextResponse.json({ count, source: 'abacus' });
    }

    return NextResponse.json({ count: BASELINE_COUNT + 15, source: 'baseline' });
}

export async function POST() {
    try {
        const redis = getRedisClient();

        if (redis) {
            const exists = await redis.exists(COUNTER_KEY);

            if (!exists) {
                await redis.set(COUNTER_KEY, BASELINE_COUNT - 1);
            }

            const newCount = await redis.incr(COUNTER_KEY);
            return NextResponse.json({ count: newCount, source: 'upstash' });
        }
    } catch (error) {
        console.warn('[Visitor Counter] Upstash Redis unavailable, using Abacus.');
    }

    const count = await incrementAbacusCount();
    if (count !== null) {
        return NextResponse.json({ count, source: 'abacus' });
    }

    return NextResponse.json({ count: BASELINE_COUNT + 16, source: 'baseline' });
}
