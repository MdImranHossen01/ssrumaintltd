import { Milestone } from 'lucide-react';
import SectionFade from './SectionFade';

export default function AboutSection({ brandName = 'SS Ruma International Ltd' }: { brandName?: string }) {
  return (
    <section id="about" className="py-8 md:py-12 bg-card/10 border-b border-border">
      <SectionFade>
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
      </SectionFade>
    </section>
  );
}
