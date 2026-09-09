"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { GraduationCap, ShieldCheck, MapPin, Car, Radio, Network } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
    return (
        <SectionWrapper id="about" className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left: Bio & Focus Areas */}
                <div className="lg:col-span-7 space-y-8">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Professional Profile</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Network Support & <span className="text-gradient">Infrastructure Engineering</span>
                        </h3>
                        <div className="h-1 w-20 bg-primary/40 rounded-full mb-8" />
                    </div>

                    <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                        {profile.summary.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="pt-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Multi-Vendor & Target Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {profile.targetTechnologies.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1.5 bg-secondary/70 text-secondary-foreground border border-border/70 rounded-lg text-sm font-medium hover:border-primary/50 transition-all cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Operational Highlights from CV */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {profile.personal.additionalInfo.map((info, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-secondary/40 border border-border/60 text-sm text-foreground">
                                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                                <span>{info}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Education & Credentials */}
                <div className="lg:col-span-5 relative space-y-6">
                    <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education
                        </h4>

                        {profile.education.map((edu, idx) => (
                            <GlassCard key={idx} className="p-6 transition-transform hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-base md:text-lg text-foreground">{edu.degree}</h5>
                                    <span className="text-xs font-mono py-1 px-2 rounded bg-secondary text-secondary-foreground border border-border shrink-0 ml-2">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-primary font-medium text-sm mb-1">{edu.institution}</p>
                                <p className="text-muted-foreground text-xs font-semibold mb-2">{edu.grade}</p>
                                {edu.details && (
                                    <p className="text-muted-foreground text-xs leading-relaxed border-t border-border/50 pt-2 mt-2">
                                        {edu.details}
                                    </p>
                                )}
                            </GlassCard>
                        ))}

                        {/* CCNA Focus Card */}
                        <GlassCard className="p-6 border-primary/30 bg-primary/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                            <div className="flex items-center gap-3 mb-2">
                                <Network className="w-5 h-5 text-primary" />
                                <h5 className="font-bold text-foreground">Cisco CCNA (In Progress)</h5>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Actively studying for the CCNA certification, deepening expertise across routing protocols, switching, VLAN segmentation, subnetting, network services, and structured troubleshooting.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
