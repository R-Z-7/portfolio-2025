"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";
import { ArrowDown, Github, Linkedin, FileText, ChevronRight } from "lucide-react";
import { profile } from "@/data/profile";
import Magnetic from "@/components/Magnetic";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero3D = dynamic(() => import("@/components/home/Hero3D"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
});

export default function Hero() {
    return (
        <div id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <Hero3D />
            {/* Gradient Mask for smooth blending into next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />

            {/* Overlay Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-foreground font-semibold text-xs md:text-sm tracking-wide uppercase">
                        Network Support & Infrastructure Engineer
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-6 font-display">
                        {profile.personal.name}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed font-light"
                >
                    Supporting, configuring, and deploying <span className="text-primary font-semibold">network infrastructure</span> across live multi-site client environments. Hands-on with routers, switches, wireless APs, migrations, and live cutovers. Preparing for <span className="text-foreground font-semibold">Cisco CCNA</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 text-xs md:text-sm font-mono text-muted-foreground"
                >
                    <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border">📍 Leeds, West Yorkshire</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border">🚗 Full UK Driving Licence</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border">🎯 Cisco CCNA (In Progress)</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-5 justify-center items-center"
                >
                    <Magnetic strength={0.2} springOptions={{ stiffness: 200, damping: 20 }}>
                        <Link
                            to="experience"
                            smooth={true}
                            offset={-100}
                        >
                            <div className={cn(buttonVariants({ size: "lg" }), "text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all cursor-pointer")}>
                                View My Journey <ChevronRight size={18} className="ml-2" />
                            </div>
                        </Link>
                    </Magnetic>

                    <div className="flex gap-4">
                        {[
                            { href: profile.personal.githubUrl, icon: Github, label: "GitHub" },
                            { href: profile.personal.linkedinUrl, icon: Linkedin, label: "LinkedIn" }
                        ].map(({ href, icon: Icon, label }) => (
                            <a key={label} href={href} target="_blank" rel="noreferrer">
                                <Button variant="secondary" size="icon" className="rounded-full shadow-md border border-border/50 hover:-translate-y-1 hover:shadow-lg transition-all" aria-label={label}>
                                    <Icon size={20} />
                                </Button>
                            </a>
                        ))}
                        <a href={profile.personal.resumeUrl} >
                            <Button variant="outline" size="lg" className="font-medium hover:bg-secondary border-border/50 hover:-translate-y-1 hover:shadow-md transition-all">
                                <FileText size={18} className="mr-2" /> Download CV
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
            >
                <ArrowDown size={24} />
            </motion.div>
        </div>
    );
}
