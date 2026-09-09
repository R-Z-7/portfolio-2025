"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { Briefcase, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
    const [showAll, setShowAll] = useState(false);

    return (
        <SectionWrapper id="experience" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Professional Experience</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-foreground">Career History</h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-3">
                    Hands-on engineering experience spanning multi-site network cutovers, infrastructure refreshes, enterprise deskside support, and systems administration.
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-[27px] md:left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-1/2" />

                <div className="space-y-12">
                    {profile.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Identifier Dot */}
                            <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-primary border-4 border-background z-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2 shadow-xl shadow-black/20">
                                <Briefcase className="w-5 h-5 text-primary-foreground" />
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0">
                                <div className="glass-panel p-6 rounded-2xl md:text-left relative group hover:border-primary/40 transition-all">
                                    <div className="flex flex-col mb-4">
                                        <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                                            <h4 className="text-lg md:text-xl font-bold text-foreground leading-snug">{job.role}</h4>
                                            {job.type === "Current" && (
                                                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                                                    Current Role
                                                </span>
                                            )}
                                            {job.type === "Project" && (
                                                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                                                    Active Project
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-1.5 text-primary font-medium text-base">
                                            <span>{job.company}</span>
                                            {job.location && (
                                                <span className="text-muted-foreground text-xs font-normal flex items-center gap-1">
                                                    • {job.location}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wide">
                                            <span>{job.period}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6 text-muted-foreground text-sm leading-relaxed">
                                        {job.achievements.map((item, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-1.5">
                                        {job.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for alternate layout */}
                            <div className="hidden md:block w-[calc(50%-3rem)]" />
                        </motion.div>
                    ))}

                    {/* Additional Experience Toggle */}
                    <div className="relative flex flex-col items-center gap-8 pt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="relative z-20 px-6 py-3 bg-secondary hover:bg-secondary/80 border border-border rounded-full text-foreground text-sm font-bold flex items-center gap-2 transition-all"
                        >
                            {showAll ? "Show Less" : "View Prior Background & Roles"}
                            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {showAll && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-8 overflow-hidden"
                            >
                                {profile.other_experience?.map((job, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-[27px] top-6 w-3 h-3 rounded-full bg-muted-foreground z-10 md:left-1/2 md:-translate-x-1/2 outline outline-4 outline-background" />

                                        {/* Content Half */}
                                        <div className="w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0">
                                            <div className="p-5 rounded-xl border border-border bg-secondary/50 hover:border-primary/50 transition-colors">
                                                <h4 className="text-foreground font-bold text-base">{job.role}</h4>
                                                <p className="text-muted-foreground text-sm mb-1">{job.company}</p>
                                                <p className="text-xs text-muted-foreground font-mono tracking-wide">{job.period}</p>
                                            </div>
                                        </div>

                                        {/* Spacer Half */}
                                        <div className="hidden md:block w-[calc(50%-3rem)]" />
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </SectionWrapper>
    );
}
