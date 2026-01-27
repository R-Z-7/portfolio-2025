import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-white">
            <SectionWrapper className="text-center">
                <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
                <p className="text-slate-400 mb-8">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-glow transition-colors"
                >
                    Return Home
                </Link>
            </SectionWrapper>
        </div>
    );
}
