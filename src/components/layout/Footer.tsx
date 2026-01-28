import VisitorCounter from "@/components/ui/VisitorCounter";

export default function Footer() {
    return (
        <footer className="w-full py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-primary/50 backdrop-blur-sm">
            <p>&copy; {new Date().getFullYear()} Ramees Kallan. Built with Next.js, Three.js & Tailwind.</p>
            <VisitorCounter />
        </footer>
    );
}
