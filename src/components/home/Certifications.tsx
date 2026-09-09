"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { Award, CheckCircle2, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function Certifications() {
    const highlightedCert = profile.certifications.find((c) => c.highlight);
    const standardCerts = profile.certifications.filter((c) => !c.highlight);

    return (
        <div className="py-16 border-y border-border/50 bg-secondary/30 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <SectionWrapper className="!py-0">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-2">
                                <Award className="w-4 h-4" /> Certifications & Continuous Learning
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                Professional Credentials
                            </h3>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground max-w-md">
                            Industry-standard certifications validating hands-on proficiency across routing, switching, cloud architecture, and IT operations.
                        </p>
                    </div>

                    {/* Featured Certification Card (CCNA) */}
                    {highlightedCert && (
                        <div className="p-6 md:p-8 rounded-2xl border-2 border-primary/40 bg-gradient-to-r from-primary/10 via-background to-secondary/40 relative overflow-hidden shadow-lg shadow-primary/5">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                <div className="space-y-2 max-w-2xl">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                        <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                                        {highlightedCert.status}
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-foreground">
                                        {highlightedCert.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {highlightedCert.description}
                                    </p>
                                </div>
                                <div className="shrink-0 flex items-center gap-3">
                                    <span className="px-4 py-2 rounded-xl bg-background border border-border text-xs font-mono text-foreground font-semibold">
                                        Issuer: {highlightedCert.issuer}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Certifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {standardCerts.map((cert, index) => (
                            <GlassCard
                                key={index}
                                className="p-4 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <span className="text-[11px] font-mono text-primary font-semibold">
                                            {cert.issuer}
                                        </span>
                                        {cert.year && (
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                                                {cert.year}
                                            </span>
                                        )}
                                    </div>
                                    <h5 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                                        {cert.title}
                                    </h5>
                                </div>
                                <div className="mt-4 pt-2 border-t border-border/40 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                    <span>{cert.status || "Verified"}</span>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
