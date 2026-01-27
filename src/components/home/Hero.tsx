"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";
import { ArrowDown, Github, Linkedin, FileText, ChevronRight } from "lucide-react";
import { profile } from "@/data/profile";

const Hero3D = dynamic(() => import("./Hero3D"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-black" />
});

export default function Hero() {
    return (
        <div id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
            <Hero3D />

            {/* Overlay Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md"
                >
                    <span className="text-accent font-medium text-sm tracking-wide uppercase">
                        {profile.personal.headline.split("→")[0]}
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 font-display">
                        {profile.personal.name}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Transitioning to <span className="text-accent font-semibold">Cloud & DevOps</span> by bridging the gap between Support and Infrastructure.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-5 justify-center items-center"
                >
                    <Link
                        to="experience"
                        smooth={true}
                        offset={-100}
                        className="group relative px-8 py-4 bg-accent text-primary font-bold rounded-lg overflow-hidden cursor-pointer hover:shadow-glow transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Journey <ChevronRight size={20} />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>

                    <div className="flex gap-4">
                        <a href={profile.personal.githubUrl} target="_blank" rel="noreferrer" className="p-4 glass-panel rounded-lg hover:bg-white/5 transition-colors text-slate-300 hover:text-white">
                            <Github size={20} />
                        </a>
                        <a href={profile.personal.linkedinUrl} target="_blank" rel="noreferrer" className="p-4 glass-panel rounded-lg hover:bg-white/5 transition-colors text-slate-300 hover:text-white">
                            <Linkedin size={20} />
                        </a>
                        <a href={profile.personal.resumeUrl} className="px-6 py-4 glass-panel rounded-lg hover:bg-white/5 transition-colors text-slate-300 hover:text-white flex items-center gap-2 font-medium">
                            <FileText size={20} /> Download CV
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
            >
                <ArrowDown size={24} />
            </motion.div>
        </div>
    );
}
