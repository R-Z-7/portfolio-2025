import VisitorCounter from "@/components/ui/VisitorCounter";

export default function Footer() {
    return (
        <footer className="w-full py-8 text-center text-muted-foreground text-sm border-t border-border bg-background/50 backdrop-blur-sm">
            <p>&copy; {new Date().getFullYear()} Ramees Kallan. Built with Next.js, Three.js & Tailwind.</p>
            <VisitorCounter />
        </footer>
    );
}
