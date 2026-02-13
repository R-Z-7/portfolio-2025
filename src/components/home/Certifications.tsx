"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { Award } from "lucide-react";

export default function Certifications() {
    return (
        <div className="py-12 border-t border-accent/10 bg-accent/5">
            <SectionWrapper className="!py-0">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="shrink-0 flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
                        <Award /> Certifications
                    </div>

                    {/* Marquee-like grid for simplicity on smaller screens, or a simple flex wrap */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {profile.certifications.map((cert) => (
                            <div key={cert} className="px-4 py-2 rounded-full border border-accent/10 bg-accent/5 text-muted-foreground text-sm hover:border-accent/40 hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
