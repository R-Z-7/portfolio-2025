"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { Award } from "lucide-react";

export default function Certifications() {
    return (
        <div className="py-12 border-t border-white/5 bg-primary/50">
            <SectionWrapper className="!py-0">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="shrink-0 flex items-center gap-3 text-accent/80 font-bold uppercase tracking-widest text-sm">
                        <Award /> Certifications
                    </div>

                    {/* Marquee-like grid for simplicity on smaller screens, or a simple flex wrap */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {profile.certifications.map((cert) => (
                            <div key={cert} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm hover:border-accent/40 hover:text-white transition-colors cursor-default whitespace-nowrap">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
