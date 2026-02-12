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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "py-4 bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/5 dark:shadow-black/20"
                    : "py-6 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="hero" smooth={true} className="text-2xl font-bold font-display cursor-pointer tracking-wider text-foreground">
                        RK<span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
                            </Link>
                        ))}

                        <div className="h-6 w-px bg-border/50 mx-2" />

                        <ThemeToggle />

                        <Link
                            to="contact"
                            smooth={true}
                            className="px-6 py-2 bg-primary text-primary-foreground border border-primary rounded-full text-sm font-medium hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer shadow-sm"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-2xl"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-100}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-muted-foreground hover:text-foreground"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-accent"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
}
