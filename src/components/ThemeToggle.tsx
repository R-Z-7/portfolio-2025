"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-full bg-muted/20 animate-pulse" />
        )
    }

    return (
        <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-background/50 backdrop-blur-sm">
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all relative group ${theme === 'light' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light</span>
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`p-2 rounded-full transition-all relative group ${theme === 'system' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="System mode"
            >
                <Monitor className="h-4 w-4" />
                <span className="sr-only">System</span>
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all relative group ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark</span>
            </button>
        </div>
    )
}
