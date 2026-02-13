"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Magnetic from "@/components/Magnetic";
import { profile } from "@/data/profile";
import { Github, ExternalLink, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Cloud", "DevOps", "Automation"];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = profile.projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <SectionWrapper id="projects" className="py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Portfolio</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-foreground font-display">Featured Projects</h3>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 p-1.5 bg-muted/50 rounded-full border border-border/50 backdrop-blur-sm">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeCategory === cat
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Magnetic strength={0.05}>
                                <GlassCard className="group h-full flex flex-col hover:border-accent/40 hover:shadow-glow transition-all duration-500">
                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-2 py-1 bg-background/80 backdrop-blur border border-accent/10 rounded text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="mb-6 pt-2">
                                        <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{project.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-accent/10 flex justify-between items-center">
                                        <div className="flex gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-xs font-mono text-muted-foreground group-hover:text-primary/80 transition-colors">#{t}</span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                                    <Github size={18} />
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </GlassCard>
                            </Magnetic>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
}
