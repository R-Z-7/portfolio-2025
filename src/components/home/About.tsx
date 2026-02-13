"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { GraduationCap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
    return (
        <SectionWrapper id="about" className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left: Bio */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">My Story</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">From Support to <span className="text-gradient">Infrastructure</span></h3>
                        <div className="h-1 w-20 bg-accent/30 rounded-full mb-8" />
                    </div>

                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        {profile.summary.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="pt-6">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                            {profile.learning.map(item => (
                                <span key={item} className="px-3 py-1 bg-secondary/50 text-secondary-foreground border border-border/50 rounded-md text-sm font-medium hover:bg-secondary hover:border-border transition-all cursor-default">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Education */}
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                    <div className="relative z-10 space-y-6">
                        <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education
                        </h4>

                        {profile.education.map((edu, idx) => (
                            <GlassCard key={idx} className="p-6 transition-transform hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-lg text-foreground">{edu.degree}</h5>
                                    <span className="text-xs font-mono py-1 px-2 rounded bg-secondary text-secondary-foreground border border-border">{edu.period}</span>
                                </div>
                                <p className="text-primary font-medium text-sm mb-1">{edu.institution}</p>
                                <p className="text-muted-foreground text-sm">{edu.grade}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
