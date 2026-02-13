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
                "glass-panel rounded-2xl p-6 transition-all duration-500 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20 border border-border/50 group",
                className
            )}
        >
            {children}
        </div>
    );
}
