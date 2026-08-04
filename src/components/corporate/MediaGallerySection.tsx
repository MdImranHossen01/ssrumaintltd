'use client';

import React, { useEffect, useState } from 'react';
import DomeGallery from '@/components/ui/DomeGallery';

const galleryImages = [
  '/assets/images/Banner/construction-hero.webp',
  '/assets/images/Banner/consulting-hero.webp',
  '/assets/images/Banner/trade-hero.webp',
  '/assets/images/Banner/gallery-boardroom.webp',
  '/assets/images/Banner/gallery-consultation.webp',
  '/assets/images/Banner/gallery-expo.webp',
  '/assets/images/Banner/gallery-meetings.webp',
  '/assets/images/Banner/gallery-piling.webp',
  '/assets/images/Banner/gallery-slab.webp',
  '/assets/images/Banner/gallery-team.webp',
  '/assets/images/Banner/gallery-workspace.webp',
  '/assets/images/Banner/project-compliance.webp',
  '/assets/images/Banner/project-electronics.webp',
  '/assets/images/Banner/project-foundation.webp',
  '/assets/images/Banner/project-logistics.webp',
  '/assets/images/Banner/project-machinery.webp',
  '/assets/images/Banner/project-renovation.webp',
  '/ceo.webp'
];

export function MediaGallerySection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="media-gallery" className="py-12 md:py-24 bg-transparent border-none shadow-none w-full relative">
      <div className="w-full space-y-2 md:space-y-12">

        {/* Section Title with Proper Spacing */}
        <div className="text-center max-w-2xl mx-auto space-y-3 px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Media Gallery
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* 3D Sphere Container - Perfectly balanced for mobile */}
        <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] bg-transparent border-none shadow-none outline-none flex items-center justify-center overflow-visible">
          <div className="w-full h-full flex items-center justify-center">
            <DomeGallery
              images={galleryImages}
              fit={isMobile ? 0.65 : 0.9}
              fitBasis="min"
              minRadius={isMobile ? 150 : 300}
              maxRadius={900}
              segments={isMobile ? 18 : 35} // Fewer segments on mobile = larger images
              imageBorderRadius={isMobile ? '8px' : '16px'} // Less rounded border on mobile
              overlayBlurColor="transparent"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
