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
                "glass-panel rounded-xl p-6 transition-all duration-300 hover:bg-accent/5 hover:shadow-lg dark:hover:shadow-primary/5 border border-border/50",
                className
            )}
        >
            {children}
        </div>
    );
}
