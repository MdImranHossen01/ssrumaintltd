import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';

export default function TestimonialsSection() {
  return (
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
  );
}
