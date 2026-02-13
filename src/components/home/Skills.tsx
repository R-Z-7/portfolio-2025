"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Skills() {

    // Animation variants for staggered entrance
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-gradient-to-b from-primary/5 to-background py-24 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <SectionWrapper id="skills">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Technical Proficiency</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-foreground">My Toolkit</h3>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {profile.skills.grouped.map((group, idx) => {
                        const Icon = group.icon;
                        return (
                            <motion.div key={idx} variants={item}>
                                <GlassCard className="h-full p-8 group hover:border-accent/30 transition-colors">
                                    <div className="mb-6 w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors px-1 border border-border">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>

                                    <h4 className="text-xl font-bold text-foreground mb-6">{group.title}</h4>

                                    <ul className="space-y-3">
                                        {group.items.map((skill) => (
                                            <li key={skill} className="flex items-center gap-3 text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
