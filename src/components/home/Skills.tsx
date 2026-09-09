"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-gradient-to-b from-primary/5 via-background to-background py-24 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <SectionWrapper id="skills">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Core Networking Skills</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-foreground">Technical Capabilities</h3>
                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-4">
                        Structured hands-on experience spanning physical infrastructure, network protocols, multi-site deployments, and enterprise systems support.
                    </p>

                    {/* Skill Badges Bar */}
                    <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-3xl mx-auto">
                        {profile.skills.highlight.map((h) => (
                            <span
                                key={h}
                                className="px-3.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/25"
                            >
                                {h}
                            </span>
                        ))}
                    </div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {profile.skills.grouped.map((group, idx) => {
                        const Icon = group.icon;
                        return (
                            <motion.div key={idx} variants={item}>
                                <GlassCard className="h-full p-6 flex flex-col group hover:border-primary/40 transition-all duration-300">
                                    <div className="mb-5 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <h4 className="text-lg font-bold text-foreground mb-4 leading-snug">{group.title}</h4>

                                    <ul className="space-y-2.5 mt-auto">
                                        {group.items.map((skill) => (
                                            <li key={skill} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-snug">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
