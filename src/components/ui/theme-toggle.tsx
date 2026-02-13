"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-full bg-muted/20 animate-pulse" />
        )
    }

    return (
        <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-background/50 backdrop-blur-sm">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("light")}
                className={`w-8 h-8 rounded-full ${theme === 'light' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light</span>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("system")}
                className={`w-8 h-8 rounded-full ${theme === 'system' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="System mode"
            >
                <Monitor className="h-4 w-4" />
                <span className="sr-only">System</span>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("dark")}
                className={`w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark</span>
            </Button>
        </div>
    )
}
