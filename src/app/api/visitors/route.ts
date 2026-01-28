import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'portfolio:visitors';
const INITIAL_COUNT = 1000;

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
            return NextResponse.json({ count: INITIAL_COUNT, fallback: true });
        }

        let count = await redis.get<number>(COUNTER_KEY);

        // Initialize if missing
        if (count === null) {
            await redis.set(COUNTER_KEY, INITIAL_COUNT);
            count = INITIAL_COUNT;
        }

        return NextResponse.json({ count });
    } catch (error) {
        console.error('[Visitor Counter] Error fetching count:', error);
        return NextResponse.json({ count: INITIAL_COUNT, fallback: true });
    }
}

export async function POST() {
    try {
        const redis = getRedisClient();

        if (!redis) {
            return NextResponse.json({ count: INITIAL_COUNT, fallback: true });
        }

        // Check if key exists
        const exists = await redis.exists(COUNTER_KEY);

        if (!exists) {
            // Initialize to 1000 (first visit will show 1000)
            await redis.set(COUNTER_KEY, INITIAL_COUNT);
            return NextResponse.json({ count: INITIAL_COUNT });
        }

        // Increment and return new value
        const newCount = await redis.incr(COUNTER_KEY);

        return NextResponse.json({ count: newCount });
    } catch (error) {
        console.error('[Visitor Counter] Error incrementing count:', error);
        return NextResponse.json({ count: INITIAL_COUNT, fallback: true });
    }
}
