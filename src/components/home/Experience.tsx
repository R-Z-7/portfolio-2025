"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
    const [showAll, setShowAll] = useState(false);

    return (
        <SectionWrapper id="experience" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Career Path</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white">Professional History</h3>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line - Extends based on content */}
                <div className="absolute left-[27px] md:left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-accent/50 via-slate-700 to-transparent md:-translate-x-1/2" />

                <div className="space-y-12">
                    {profile.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Identifier Dot */}
                            <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-primary border-4 border-glass-border z-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2 shadow-xl shadow-black">
                                <Briefcase className="w-5 h-5 text-accent" />
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0">
                                <div className="glass-panel p-6 rounded-2xl md:text-left relative group hover:border-accent/30 transition-all">

                                    <div className="flex flex-col mb-4">
                                        <h4 className="text-xl font-bold text-white">{job.role}</h4>
                                        <h5 className="text-accent font-medium text-lg">{job.company}</h5>
                                        <div className="flex flex-wrap gap-2 text-xs text-slate-500 mt-1 font-mono uppercase tracking-wide">
                                            <span>{job.period}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6 text-slate-300 text-sm leading-relaxed">
                                        {job.achievements.map((item, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-slate-400 border border-white/5">
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
                    <div className={`relative flex flex-col items-center gap-8 pt-8`}>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="relative z-20 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-sm font-bold flex items-center gap-2 transition-all"
                        >
                            {showAll ? "Show Less" : "View Additional Experience"}
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
                                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Dot (Smaller) */}
                                        <div className="absolute left-[27px] top-6 w-3 h-3 rounded-full bg-slate-500 z-10 md:left-1/2 md:-translate-x-1/2 outline outline-4 outline-primary"></div>

                                        {/* Content Half */}
                                        <div className="w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0">
                                            <div className="p-5 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
                                                <h4 className="text-white font-bold text-base">{job.role}</h4>
                                                <p className="text-slate-400 text-sm mb-1">{job.company}</p>
                                                <p className="text-xs text-slate-500 font-mono tracking-wide">{job.period}</p>
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
