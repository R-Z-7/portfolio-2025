import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-panel rounded-xl p-6 transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:shadow-cyan-500/10 hover:shadow-xl hover:border-accent/30",
                className
            )}
        >
            {children}
        </div>
    );
}
