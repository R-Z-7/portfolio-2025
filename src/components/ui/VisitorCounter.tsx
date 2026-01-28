'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Using a unique namespace for the portfolio
        // The 'up' endpoint increments and returns the new count
        const fetchCount = async () => {
            try {
                const response = await fetch('https://api.counterapi.dev/v1/ramees-portfolio-counter/views/up');
                if (!response.ok) throw new Error('Failed to fetch count');

                const data = await response.json();
                setCount(data.count);
            } catch (err) {
                console.error('Visitor counter error:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    if (error) return null;

    return (
        <div className="mt-4 flex flex-col items-center justify-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-widest text-slate-500">Total Visits</span>
            <div className="flex items-center gap-2 font-mono text-sm text-accent/80">
                {loading ? (
                    <span className="animate-pulse">...</span>
                ) : (
                    <span>{count?.toLocaleString()}</span>
                )}
            </div>
        </div>
    );
}
