'use client';

import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { AnimatedList } from '@/components/ui/animated-list';

// Dynamic import for Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import faqAnimation from '../../../public/assets/ecomfaq.json';

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQSection({ faqs: dynamicFaqs }: { faqs?: FAQItem[] }) {


    const staticFaqs: FAQItem[] = [
        {
            question: "What services does SS Ruma International Ltd provide?",
            answer: "We offer a wide range of professional services and solutions tailored to meet your business needs, including construction, international trade, import & export, and business consultancy."
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

    const validFaqs = dynamicFaqs?.filter(f => f && f.question) || [];
    const faqs = validFaqs.length > 0 ? validFaqs : staticFaqs;

    return (
        <section className="py-8 md:py-12 relative overflow-hidden bg-muted">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
                        Got Questions? We&apos;ve Got{' '}
                        <span className="text-primary italic">Answers</span>
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground">
                        Everything you need to know about our services and operations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Lottie Animation */}
                    <div className="relative flex flex-col items-center lg:sticky lg:top-8">
                        <div className="relative w-full max-w-sm mx-auto">
                            <Lottie
                                animationData={faqAnimation}
                                loop={true}
                                className="w-full h-auto"
                            />

                            {/* Floating badge - Live Chat */}
                            <motion.div
                                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 hidden md:flex items-center gap-3 p-4 rounded-2xl shadow-lg border bg-card border-border"
                            >
                                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase leading-none mb-1 text-muted-foreground">Live Chat</p>
                                    <p className="text-sm font-bold whitespace-nowrap text-foreground">Always Online</p>
                                </div>
                            </motion.div>

                            {/* Floating badge - Instant Help */}
                            <motion.div
                                animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-3 p-4 rounded-2xl shadow-lg border bg-card border-border"
                            >
                                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                                    <HelpCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase leading-none mb-1 text-muted-foreground">Instant Help</p>
                                    <p className="text-sm font-bold whitespace-nowrap text-foreground">Smart FAQ System</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Animated List FAQs */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col gap-3"
                    >
                        <AnimatedList
                            items={faqs}
                            className="bg-transparent"
                            itemClassName="!bg-card !backdrop-blur-md border-border"
                            showGradients={false}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

