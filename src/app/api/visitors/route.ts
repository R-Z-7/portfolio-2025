import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'portfolio:visitors';
const INITIAL_COUNT = 999; // Start at 999 so first increment is 1000

// Initialize Redis client - will be null if env vars are missing
function getRedisClient(): Redis | null {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
        console.warn('[Visitor Counter] Missing Upstash Redis credentials. Using fallback.');
        return null;
    }

    return new Redis({ url, token });
}

export async function GET() {
    try {
        const redis = getRedisClient();

        if (!redis) {
            return NextResponse.json({ count: 1000, fallback: true });
        }

        let count = await redis.get<number>(COUNTER_KEY);

        // Initialize if missing
        if (count === null) {
            // If we are just getting, we don't want to increment, but we need a base.
            // If it's never been set, seeing "1000" is better than null.
            await redis.set(COUNTER_KEY, 1000);
            count = 1000;
        }

        return NextResponse.json({ count });
    } catch (error) {
        console.error('[Visitor Counter] Error fetching count:', error);
        return NextResponse.json({ count: 1000, fallback: true });
    }
}

export async function POST() {
    try {
        const redis = getRedisClient();

        if (!redis) {
            return NextResponse.json({ count: 1000, fallback: true });
        }

        // Check if key exists
        const exists = await redis.exists(COUNTER_KEY);

        if (!exists) {
            // Initialize to INITIAL_COUNT (999) then increment to return 1000
            await redis.set(COUNTER_KEY, INITIAL_COUNT);
        }

        // Increment and return new value
        const newCount = await redis.incr(COUNTER_KEY);

        return NextResponse.json({ count: newCount });
    } catch (error) {
        console.error('[Visitor Counter] Error incrementing count:', error);
        return NextResponse.json({ count: 1000, fallback: true });
    }
}
