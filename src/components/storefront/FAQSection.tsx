'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, HelpCircle, Plus, Minus } from 'lucide-react';

// Dynamic import for Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import faqAnimation from '../../../public/assets/ecomfaq.json';

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQSection({ faqs: dynamicFaqs }: { faqs?: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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

    const faqs = (dynamicFaqs && dynamicFaqs.length > 0) ? dynamicFaqs : staticFaqs;

    return (
        <section className="py-8 md:py-12 relative overflow-hidden" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter" style={{ color: 'var(--foreground)' }}>
                        Got Questions? We&apos;ve Got{' '}
                        <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Answers</span>
                    </h2>
                    <p className="mt-4 text-base" style={{ color: 'var(--muted-foreground)' }}>
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
                                className="absolute -top-4 -right-4 hidden md:flex items-center gap-3 p-4 rounded-2xl shadow-lg border"
                                style={{
                                    backgroundColor: 'var(--card)',
                                    borderColor: 'var(--border)'
                                }}
                            >
                                <div className="p-2 rounded-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)' }}>
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase leading-none mb-1" style={{ color: 'var(--muted-foreground)' }}>Live Chat</p>
                                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: 'var(--foreground)' }}>Always Online</p>
                                </div>
                            </motion.div>

                            {/* Floating badge - Instant Help */}
                            <motion.div
                                animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-3 p-4 rounded-2xl shadow-lg border"
                                style={{
                                    backgroundColor: 'var(--card)',
                                    borderColor: 'var(--border)'
                                }}
                            >
                                <div className="p-2 rounded-xl" style={{ backgroundColor: 'color-mix(in srgb, #10b981 10%, transparent)', color: '#10b981' }}>
                                    <HelpCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase leading-none mb-1" style={{ color: 'var(--muted-foreground)' }}>Instant Help</p>
                                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: 'var(--foreground)' }}>Smart FAQ System</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Accordion FAQs */}
                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-xl border overflow-hidden transition-all duration-300"
                                    style={{
                                        backgroundColor: 'var(--card)',
                                        borderColor: isOpen ? 'var(--primary)' : 'var(--border)',
                                        boxShadow: isOpen
                                            ? '0 4px 20px color-mix(in srgb, var(--primary) 15%, transparent)'
                                            : '0 1px 4px rgba(0,0,0,0.06)'
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        <span className="font-semibold text-sm md:text-base leading-snug pr-2">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="shrink-0 rounded-full p-1"
                                            style={{
                                                backgroundColor: isOpen
                                                    ? 'color-mix(in srgb, var(--primary) 10%, transparent)'
                                                    : 'color-mix(in srgb, var(--foreground) 8%, transparent)',
                                                color: isOpen ? 'var(--primary)' : 'var(--muted-foreground)'
                                            }}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div
                                                    className="px-5 pb-5 text-sm leading-relaxed border-t pt-4"
                                                    style={{
                                                        color: 'var(--muted-foreground)',
                                                        borderColor: 'var(--border)'
                                                    }}
                                                >
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
