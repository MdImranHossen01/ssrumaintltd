'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, HardHat, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DomeGallery from '@/components/ui/DomeGallery';

interface SlideData {
  badgeText: string;
  badgeIcon: React.ReactNode;
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
    badgeText: 'Construction & Engineering',
    badgeIcon: <HardHat className="w-4 h-4" />,
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
    badgeText: 'Global Sourcing & Trade',
    badgeIcon: <Globe className="w-4 h-4" />,
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
    badgeText: 'Corporate Consulting',
    badgeIcon: <Briefcase className="w-4 h-4" />,
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
    }, 8500); // 8.5 seconds interval for ample reading time
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative pt-0 pb-8 md:pt-4 md:pb-12 px-0 md:px-8 border-b border-border bg-gradient-to-br from-primary/5 via-transparent to-primary/5 overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center relative z-10">
        
        {/* Left Content Column with Framer Motion for Synced Transitions */}
        <div className="order-2 lg:order-1 px-4 md:px-0 space-y-8 text-left max-w-2xl min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="space-y-6"
            >
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading leading-tight">
                {currentSlide.title}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {currentSlide.highlightedTitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href={currentSlide.primaryBtnLink}>
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 font-bold px-8 py-6 rounded-lg text-md shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5">
                    {currentSlide.primaryBtnText} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href={currentSlide.secondaryBtnLink}>
                  <Button variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted transition-all duration-300 font-bold px-8 py-6 rounded-lg text-md shadow-md hover:-translate-y-0.5">
                    {currentSlide.secondaryBtnText}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right DomeGallery Column */}
        <div className="order-1 lg:order-2 relative w-full h-[400px] sm:h-[450px] lg:h-[500px] mx-auto bg-transparent">
          <DomeGallery 
            images={[
              { src: '/assets/images/Banner/construction-hero.webp', alt: 'Construction Services' },
              { src: '/assets/images/Banner/trade-hero.webp', alt: 'Global Trade' },
              { src: '/assets/images/Banner/consulting-hero.webp', alt: 'Business Consulting' },
              { src: '/assets/images/Banner/gallery-workspace.webp', alt: 'Corporate Workspace' },
              { src: '/assets/images/Banner/gallery-team.webp', alt: 'Our Team' },
              { src: '/assets/images/Banner/gallery-meetings.webp', alt: 'Corporate Meetings' },
              { src: '/assets/images/Banner/gallery-piling.webp', alt: 'Structural Piling' },
              { src: '/assets/images/Banner/gallery-expo.webp', alt: 'Business Expo' },
              { src: '/assets/images/Banner/gallery-boardroom.webp', alt: 'Boardroom' },
              { src: '/assets/images/Banner/gallery-slab.webp', alt: 'Construction Slab' },
              { src: '/assets/images/Banner/gallery-consultation.webp', alt: 'Consultation' }
            ]}
            fit={0.55}
            minRadius={400}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotateSpeed={0.03}
            overlayBlurColor="transparent"
            imageBorderRadius="12px"
            openedImageBorderRadius="20px"
          />
        </div>

      </div>
    </section>
  );
}
