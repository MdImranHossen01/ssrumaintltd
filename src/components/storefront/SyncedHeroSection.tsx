'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideData {
  title: string;
  highlightedTitle: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  image: string;
}

const slides: SlideData[] = [
  {
    title: 'Delivering Premium ',
    highlightedTitle: 'Engineering & Construction',
    description: 'Expert structural planning, foundation piling works, commercial building renovations, and complete civil engineering solutions matching international compliance.',
    primaryBtnText: 'Explore Projects',
    primaryBtnLink: '#projects',
    secondaryBtnText: 'Our Services',
    secondaryBtnLink: '#services',
    image: '/assets/images/Banner/construction-hero.webp'
  },
  {
    title: 'Secure Cross-Border ',
    highlightedTitle: 'Import & Export Solutions',
    description: 'Premier international trade consultancy specializing in custom clearance, freight logistics coordination, global product sourcing, and supply chains.',
    primaryBtnText: 'Trade Consultations',
    primaryBtnLink: '#contact',
    secondaryBtnText: 'Certifications',
    secondaryBtnLink: '#certifications',
    image: '/assets/images/Banner/trade-hero.webp'
  },
  {
    title: 'Bespoke Enterprise Setup & ',
    highlightedTitle: 'Strategic Advisory',
    description: 'End-to-end legal compliance consultation, company incorporation, tax file documentation clearing, and general supply capabilities.',
    primaryBtnText: 'Request Consultation',
    primaryBtnLink: '#contact',
    secondaryBtnText: 'Learn More',
    secondaryBtnLink: '#about',
    image: '/assets/images/Banner/consulting-hero.webp'
  }
];

export function SyncedHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative pt-0 pb-8 md:py-12 px-0 md:px-8 border-b border-border bg-gradient-to-br from-primary/5 via-transparent to-primary/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center relative z-10">
        
        {/* Banner Image Column (Order-1 on Mobile, Edge-to-Edge Non-Rounded like Shahjalal Enterprise) */}
        <div className="order-1 lg:order-2 relative w-full max-w-none md:max-w-lg lg:max-w-none mx-auto group">
          <div className="hidden md:block absolute -inset-1 bg-gradient-to-r from-primary to-primary/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <div className="relative bg-transparent md:bg-card border-0 md:border p-0 md:p-3 rounded-none md:rounded-2xl shadow-none md:shadow-2xl overflow-hidden">
            <div className="aspect-video relative rounded-none md:rounded-xl overflow-hidden bg-muted">
              <AnimatePresence mode="popLayout">
                {slides.map((slide, index) => {
                  const isActive = index === currentIndex;
                  if (!isActive) return null;

                  return (
                    <motion.div
                      key={slide.image}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Left Content Column (Order-2 on Mobile - No Badge, Clean Title & Text) */}
        <div className="order-2 lg:order-1 px-4 md:px-0 space-y-6 text-left max-w-2xl min-h-[300px] md:min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="space-y-6"
            >
              {/* Title (No Badge) */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading leading-tight">
                {currentSlide.title}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {currentSlide.highlightedTitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90 font-bold px-8 py-6 rounded-lg text-md shadow-lg shadow-primary/20">
                  <Link href={currentSlide.primaryBtnLink} className="flex items-center justify-center gap-2">
                    {currentSlide.primaryBtnText} <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-bold px-8 py-6 rounded-lg text-md shadow-md">
                  <Link href={currentSlide.secondaryBtnLink} className="flex items-center justify-center">
                    {currentSlide.secondaryBtnText}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
