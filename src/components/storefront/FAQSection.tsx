'use client';

import { Badge } from "@/components/ui/badge";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedList from "../bits/AnimatedList";
import faqAnimation from "../../../public/assets/ecomfaq.json";

// Dynamic import for Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQSection({ faqs: dynamicFaqs }: { faqs?: FAQItem[] }) {
    const faqs: FAQItem[] = [
        {
            question: "What services does SS Ruma International Ltd provide?",
            answer: "We offer a wide range of professional services and solutions tailored to meet your business needs. Please check our 'Services' page for detailed information."
        },
        {
            question: "How can I contact your support team?",
            answer: "You can reach out to us via our 'Contact Us' page, call our official phone number, or send us an email. Our support team is always ready to assist you."
        },
        {
            question: "Where is your head office located?",
            answer: "Our corporate head office is located in Dhaka, Bangladesh. You can find our exact address and Google Maps location on the Contact page."
        },
        {
            question: "Do you offer custom solutions for businesses?",
            answer: "Yes, we specialize in providing tailored B2B solutions. You can schedule a consultation with our team to discuss your specific requirements."
        },
        {
            question: "What are your standard operating hours?",
            answer: "Our office operates from Sunday to Thursday, 9:00 AM to 6:00 PM. However, our online support channels are monitored 24/7 for urgent inquiries."
        }
    ];

    return (
        <section className="py-12 md:py-20 relative overflow-hidden bg-muted/20">

            <div className="container mx-auto px-4 md:px-0 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white">
                            Got Questions? We&apos;ve Got <span className="text-primary italic">Answers</span>
                        </h2>
                    </div>

                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Side: Animation */}
                    <div
                        className="lg:col-span-5 relative group"
                    >
                        <div className="relative z-10 rounded-2xl p-4 md:p-8 overflow-hidden">
                            <Lottie
                                animationData={faqAnimation}
                                loop={true}
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]"
                            />
                        </div>

                        {/* Decorative floating elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-background p-5 rounded-2xl shadow-xl border border-primary/10 hidden md:flex items-center gap-3 z-20"
                        >
                            <div className="bg-primary/10 p-2 rounded-xl text-primary">
                                <MessageCircle className="h-6 w-6" />
                            </div>
                            <div className="pr-4">
                                <p className="text-[10px] font-black uppercase text-muted-foreground leading-none mb-1">Live Chat</p>
                                <p className="text-sm font-bold whitespace-nowrap text-foreground">Always Online</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-background p-5 rounded-2xl shadow-xl border border-primary/10 hidden md:flex items-center gap-3 z-20"
                        >
                            <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-600">
                                <HelpCircle className="h-6 w-6" />
                            </div>
                            <div className="pr-4">
                                <p className="text-[10px] font-black uppercase text-muted-foreground leading-none mb-1">Instant Help</p>
                                <p className="text-sm font-bold whitespace-nowrap text-foreground">Smart FAQ System</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Animated List */}
                    <div
                        className="lg:col-span-7"
                    >
                        <AnimatedList
                            items={faqs}
                            className="bg-transparent"
                            itemClassName="!bg-background !border-border text-foreground"
                            showGradients={false}
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}

