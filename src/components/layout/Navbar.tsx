"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Experience", to: "experience" },
        { name: "Projects", to: "projects" },
    ];

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
                style={{ scaleX }}
            />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-5xl"
            >
                <div className="bg-background/80 backdrop-blur-xl border border-border/40 rounded-full px-5 py-2.5 shadow-lg shadow-black/5 dark:shadow-black/20 flex items-center justify-between md:justify-center gap-4 md:gap-8">
                    <Link to="hero" smooth={true} className="text-xl font-bold font-display cursor-pointer tracking-wider text-foreground hover:opacity-80 transition-opacity pl-2">
                        RK<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 px-4 py-2 rounded-full cursor-pointer transition-all relative group"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="h-4 w-px bg-border/50 mx-2" />

                        <ThemeToggle />

                        <Link
                            to="contact"
                            smooth={true}
                            className="ml-2 px-5 py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-3 md:hidden pr-1">
                        <ThemeToggle />
                        <button className="text-foreground p-1 hover:bg-muted/50 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown - Detached & Floating */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-3 bg-card/90 backdrop-blur-xl border border-border/50 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl origin-top"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-80}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-foreground/80 hover:text-foreground px-4 py-3 hover:bg-muted/50 rounded-xl transition-all flex items-center justify-between group"
                            >
                                {link.name}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </Link>
                        ))}
                        <div className="h-px bg-border/50 my-2" />
                        <Link
                            to="contact"
                            smooth={true}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-bold text-center bg-primary text-primary-foreground py-3.5 rounded-xl shadow-lg shadow-primary/20"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
}
