/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  Globe, 
  FileSpreadsheet, 
  Truck, 
  Anchor, 
  Plane, 
  Shield, 
  Award, 
  Clock, 
  Users, 
  DollarSign, 
  Milestone,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Globe2
} from 'lucide-react';
import { headers } from 'next/headers';
import { getCachedSettings } from '@/lib/data-fetching';

import CertificationsList from '@/components/corporate/CertificationsList';
import ProjectsGallery from '@/components/corporate/ProjectsGallery';
import ContactForm from '@/components/corporate/ContactForm';
import { SyncedHeroSection } from '@/components/storefront/SyncedHeroSection';
import { MediaGallerySection } from '@/components/corporate/MediaGallerySection';
import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';
import { CompareDemo } from '@/components/CompareDemo';

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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section */}
      <SyncedHeroSection />

      {/* 2. About Us */}
      <section id="about" className="py-20 md:py-28 bg-card/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              About Us
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {brandName} is a Bangladesh-based company committed to delivering reliable, innovative, and professional business solutions. We focus on quality, transparency, and long-term partnerships with clients both locally and internationally.
              </p>
              
              <div className="p-6 bg-card/50 border border-border/80 rounded-2xl space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                  <Milestone className="h-4 w-4" /> Our Vision
                </h4>
                <p className="text-sm text-foreground font-semibold italic">
                  &ldquo;To become one of the most trusted international business groups in South Asia.&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Mission & Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-background border border-border/80 rounded-2xl p-5 space-y-3">
                  <h4 className="text-sm font-bold text-foreground">Our Mission</h4>
                  <ul className="space-y-2 text-xs text-muted-foreground font-medium">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" /> Deliver quality services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" /> Build long-term partnerships
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" /> Ensure customer satisfaction
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" /> Expand globally
                    </li>
                  </ul>
                </div>

                <div className="bg-background border border-border/80 rounded-2xl p-5 space-y-3">
                  <h4 className="text-sm font-bold text-foreground">Core Values</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Integrity', 'Innovation', 'Quality', 'Commitment', 'Excellence'].map((val) => (
                      <span key={val} className="text-xs px-2.5 py-1 rounded-full font-bold bg-primary/10 text-primary border border-primary/20">
                        ✓ {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section id="services" className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Our Services
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-card/40 border border-border/80 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Construction & Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building construction, renovation and project management services matching international standards.
              </p>
            </div>

            <div className="group bg-card/40 border border-border/80 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Import & Export</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Global sourcing and international trade solutions facilitating reliable import and export pipelines.
              </p>
            </div>

            <div className="group bg-card/40 border border-border/80 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Business Consultancy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strategic business setup support, comprehensive documentation, and commercial growth consultation.
              </p>
            </div>

            <div className="group bg-card/40 border border-border/80 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">General Supply</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reliable corporate and government supply services sourcing high-quality products efficiently.
              </p>
            </div>

            <div className="group bg-card/40 border border-border/80 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Anchor className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Logistics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Seamless freight forwarding, shipping routing, and supply chain logistics administration.
              </p>
            </div>

            <div className="group bg-card/40 border border-border/80 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Plane className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Tours & Travels <span className="text-xs text-muted-foreground italic">(Optional)</span></h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional visa assistance, ticketing, and custom global travel packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section id="why-choose-us" className="py-20 md:py-28 bg-card/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Why Choose Us
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Professional Team', desc: 'Expert personnel ensuring execution success.' },
              { icon: Shield, title: 'Government Registered Company', desc: 'Fully government registered and compliant.' },
              { icon: Award, title: 'Quality Assurance', desc: 'Premium materials and execution standards.' },
              { icon: Clock, title: 'Fast Service', desc: 'Strict commitment to timeframes.' },
              { icon: DollarSign, title: 'Competitive Pricing', desc: 'Cost-efficient and budget-friendly operations.' },
              { icon: Globe2, title: 'International Standard', desc: 'Working strictly according to global benchmarks.' },
              { icon: CheckCircle, title: 'Trusted Partner', desc: 'Fostering long-term customer relationships.' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-background border border-border/80 p-6 rounded-2xl flex flex-col gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Certifications */}
      <section id="certifications" className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Our Certifications
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <CertificationsList />
        </div>
      </section>

      {/* 6. Our Projects */}
      <section id="projects" className="py-20 md:py-28 bg-card/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Our Projects
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <ProjectsGallery />
        </div>
      </section>

      {/* 7. Project Transformation (Compare) */}
      <section id="transformation" className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Project Transformation
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground">See the difference we make, from start to finish.</p>
          </div>

          <CompareDemo />
        </div>
      </section>

      {/* 8. Media Gallery (Interactive 3D Globe) */}
      <MediaGallerySection />

      {/* 8. Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              What Our Clients Say
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>

          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* 9. Clients & Partners */}
      <section id="partners" className="py-12 border-b border-border bg-card/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h4 className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by Leaders & Corporate Partners
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            {['Apex Group', 'Jaman Commercials', 'National Infra', 'Global Trade Corp', 'Chittagong Shipping'].map((partner) => (
              <span key={partner} className="text-lg font-black tracking-widest text-muted-foreground font-mono">
                {partner.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
