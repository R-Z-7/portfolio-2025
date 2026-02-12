'use client';

import { useEffect, useState, useRef } from 'react';

const SESSION_KEY = 'rk_visitor_incremented';

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchCount = async () => {
            try {
                // Check if already visited in this session
                const hasVisited = sessionStorage.getItem(SESSION_KEY);
                const method = hasVisited ? 'GET' : 'POST';

                const response = await fetch('/api/visitors', { method });

                if (!response.ok) {
                    console.error('[VisitorCounter] Response not ok:', response.status, response.statusText);
                    throw new Error('Failed to fetch count');
                }

                const data = await response.json();

                setCount(data.count);

                // Mark as visited in this session (only if POST was successful)
                if (method === 'POST') {
                    sessionStorage.setItem(SESSION_KEY, 'true');
                }
            } catch (err) {
                console.error('Visitor counter error:', err);
                setCount(1000); // Fallback
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    return (
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
            <span className="text-slate-500">Visitors:</span>
            <span className="font-mono text-accent/80">
                {loading ? (
                    <span className="animate-pulse">...</span>
                ) : (
                    count?.toLocaleString()
                )}
            </span>
        </div>
    );
}
