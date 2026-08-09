/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { getCachedSettings, getCachedFAQs } from '@/lib/data-fetching';

import { SyncedHeroSection } from '@/components/storefront/SyncedHeroSection';
import { MediaGallerySection } from '@/components/corporate/MediaGallerySection';
import { FAQSection } from '@/components/storefront/FAQSection';

import AboutSection from '@/components/corporate/AboutSection';
import ServicesSection from '@/components/corporate/ServicesSection';
import WhyChooseUsSection from '@/components/corporate/WhyChooseUsSection';
import CertificationsSection from '@/components/corporate/CertificationsSection';
import ProjectsSection from '@/components/corporate/ProjectsSection';
import TransformationSection from '@/components/corporate/TransformationSection';
import TestimonialsSection from '@/components/corporate/TestimonialsSection';
import PartnersSection from '@/components/corporate/PartnersSection';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getCachedSettings();
  const brandName = settings?.brandName || 'SS Ruma International Ltd';
  const metaTitle = settings?.metaTitle || brandName;
  const description = settings?.metaDescription || 'Your Trusted Partner in Construction, International Trade, Import & Export, Business Consultancy and Global Solutions.';

  const headersList = await headers();
  const hostname = headersList.get('host') || 'localhost';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${hostname}`;

  return {
    title: {
      default: metaTitle,
      template: `%s | ${brandName}`,
    },
    description,
    openGraph: {
      title: brandName,
      description,
      url: baseUrl,
      siteName: brandName,
      type: 'website',
    },
  };
}

export default async function HomePage() {
  const settings = await getCachedSettings();
  const brandName = settings?.brandName || 'SS Ruma International Ltd';

  const faqs = await getCachedFAQs();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section */}
      <SyncedHeroSection />

      {/* 2. About Us */}
      <AboutSection brandName={brandName} />

      {/* 3. Our Services */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 5. Our Certifications */}
      <CertificationsSection />

      {/* 6. Our Projects */}
      <ProjectsSection />

      {/* 7. Project Transformation (Compare) */}
      <TransformationSection />

      {/* 8. Media Gallery (Interactive 3D Globe) */}
      <MediaGallerySection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ Accordion Section */}
      <FAQSection faqs={faqs} />

      {/* 11. Clients & Partners */}
      <PartnersSection />
    </div>
  );
}
