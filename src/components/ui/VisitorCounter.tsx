'use client';

import { useEffect, useState } from 'react';

const VISITED_KEY = 'portfolio_visited_date';

function getToday(): string {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
}

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const today = getToday();
                const lastVisit = localStorage.getItem(VISITED_KEY);

                // Determine method: POST if first visit today, GET otherwise
                const method = lastVisit === today ? 'GET' : 'POST';

                const response = await fetch('/api/visitors', { method });

                if (!response.ok) throw new Error('Failed to fetch count');

                const data = await response.json();
                setCount(data.count);

                // Mark as visited today (only if POST was successful)
                if (method === 'POST') {
                    localStorage.setItem(VISITED_KEY, today);
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
