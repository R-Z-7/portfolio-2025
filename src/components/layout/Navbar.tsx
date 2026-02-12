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
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto overflow-visible"
            >
                <div className="bg-background/70 backdrop-blur-lg border border-border/40 rounded-full px-6 py-3 shadow-lg shadow-black/5 dark:shadow-black/20 flex items-center justify-between md:justify-center md:gap-8">
                    <Link to="hero" smooth={true} className="text-xl font-bold font-display cursor-pointer tracking-wider text-foreground mr-4">
                        RK<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
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
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                            </Link>
                        ))}

                        <div className="h-4 w-px bg-border/50 mx-2" />

                        <ThemeToggle />

                        <Link
                            to="contact"
                            smooth={true}
                            className="px-5 py-2 bg-primary text-primary-foreground border border-primary rounded-full text-xs font-bold hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer shadow-sm ml-2"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-4 bg-background/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 flex flex-col gap-4 shadow-2xl origin-top"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-80}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-muted-foreground hover:text-foreground px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-bold text-center bg-primary text-primary-foreground py-3 rounded-xl shadow-sm mt-2"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
}
