import { Metadata } from 'next';
import ServicesSection from '@/components/corporate/ServicesSection';
import { CounterSection } from '@/components/corporate/CounterSection';

export const metadata: Metadata = {
  title: 'Our Services | S S Ruma International Ltd',
  description: 'Explore the corporate solutions, engineering, construction, import-export, logistics, and general supply services offered by S S Ruma International Ltd.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Banner / Header Hero */}
      <section className="relative text-foreground py-12 md:py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering excellence in engineering, international trade, supply chain management, and customized global business solutions.
          </p>
        </div>
      </section>


      {/* Services Component Section */}
      <ServicesSection />
      {/* Counter Section */}
      <CounterSection />

    </div>
  );
}
