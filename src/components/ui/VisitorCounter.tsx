'use client';

import { useEffect, useState, useRef } from 'react';

const SESSION_KEY = 'rk_visitor_session_recorded';

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchCount = async () => {
            try {
                // Check if already counted in this browser session
                const hasVisited = typeof window !== 'undefined' ? sessionStorage.getItem(SESSION_KEY) : null;
                const method = hasVisited ? 'GET' : 'POST';

                const response = await fetch('/api/visitors', {
                    method,
                    cache: 'no-store'
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch count: ${response.status}`);
                }

                const data = await response.json();

                if (typeof data.count === 'number') {
                    setCount(data.count);
                    if (method === 'POST' && typeof window !== 'undefined') {
                        sessionStorage.setItem(SESSION_KEY, 'true');
                    }
                } else {
                    setCount(1015);
                }
            } catch (err) {
                console.error('[VisitorCounter] Error:', err);
                setCount(1015);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    return (
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-xs">
            <span className="text-muted-foreground">Visitors:</span>
            <span className="font-mono text-primary font-bold">
                {loading ? (
                    <span className="animate-pulse">...</span>
                ) : (
                    count?.toLocaleString()
                )}
            </span>
        </div>
    );
}
