export default function PartnersSection() {
  return (
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
  );
}
