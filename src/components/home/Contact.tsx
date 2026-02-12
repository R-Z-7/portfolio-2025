"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import { Mail, MapPin, Send, Phone, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(false);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/xbdobpar", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                // specific type 'HTMLFormElement' gives access to .reset()
                e.currentTarget.reset();
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="bg-gradient-to-b from-background via-primary/5 to-background pb-20 pt-24">
            <SectionWrapper id="contact">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Get in Touch</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Let's Work Together</h3>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            I am currently open to opportunities in <strong className="text-foreground">Cloud & DevOps</strong>.
                            Whether you have a question about my experience or want to discuss a potential role,
                            my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${profile.personal.email}`} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Email</p>
                                    <p className="text-foreground text-lg group-hover:text-primary transition-colors">{profile.personal.email}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Phone</p>
                                    <p className="text-foreground text-lg">{profile.personal.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <GlassCard className="p-8 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-10"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                                    <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-primary text-sm font-medium hover:text-foreground transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-5"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase">Name</label>
                                            <input required name="name" id="name" type="text" className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase">Email</label>
                                            <input required name="email" id="email" type="email" className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase">Message</label>
                                        <textarea required name="message" id="message" rows={4} className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Hi Ramees..." />
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 text-foreground text-sm bg-destructive/10 p-3 rounded-lg border border-destructive/20">
                                            <AlertCircle size={16} className="text-destructive" />
                                            <span>Something went wrong. Please try again.</span>
                                        </div>
                                    )}

                                    <button
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                        ) : (
                                            <>Send Message <Send size={18} /></>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </GlassCard>
                </div>
            </SectionWrapper>
        </div>
    );
}
