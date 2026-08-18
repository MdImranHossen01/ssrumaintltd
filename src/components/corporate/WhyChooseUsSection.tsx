import { Users, Shield, Award, Clock, DollarSign, Globe2, CheckCircle, ThumbsUp } from 'lucide-react';
import SectionFade from './SectionFade';

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-8 md:py-12 bg-card/10 border-b border-border">
      <SectionFade>
      <div className="container mx-auto px-4 max-w-6xl space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Why Choose Us
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Users, title: 'Professional Team', desc: 'Expert personnel ensuring execution success.' },
            { icon: Shield, title: 'Government Registered Company', desc: 'Fully government registered and compliant.' },
            { icon: Award, title: 'Quality Assurance', desc: 'Premium materials and execution standards.' },
            { icon: Clock, title: 'Fast Service', desc: 'Strict commitment to timeframes.' },
            { icon: DollarSign, title: 'Competitive Pricing', desc: 'Cost-efficient and budget-friendly operations.' },
            { icon: Globe2, title: 'International Standard', desc: 'Working strictly according to global benchmarks.' },
            { icon: CheckCircle, title: 'Trusted Partner', desc: 'Fostering long-term customer relationships.' },
            { icon: ThumbsUp, title: 'Customer Satisfaction', desc: 'Dedicated support to ensure a seamless experience.' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-background border border-border/80 p-4 md:p-6 rounded-2xl flex flex-col gap-4">
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
      </SectionFade>
    </section>
  );
}
