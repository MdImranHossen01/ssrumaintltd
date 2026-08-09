import { CompareDemo } from '@/components/CompareDemo';
import SectionFade from './SectionFade';

export default function TransformationSection() {
  return (
    <section id="transformation" className="py-8 md:py-12 bg-background border-b border-border">
      <SectionFade>
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
      </SectionFade>
    </section>
  );
}
