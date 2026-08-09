import { Building2, Globe, FileSpreadsheet, Truck, Anchor, Plane } from 'lucide-react';
import SectionFade from './SectionFade';

export default function ServicesSection() {
  return (
    <section id="services" className="py-8 md:py-12 bg-background border-b border-border">
      <SectionFade>
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
      </SectionFade>
    </section>
  );
}
