import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-3 tracking-widest uppercase text-muted-foreground">About the resort</div>
          <h2 className="mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            A timeless hideaway carved into the cliffs of Praiano.
          </h2>
          <p className="mb-4 text-muted-foreground">
            Built around a 17th-century villa, Azure Bay blends old-world Mediterranean charm
            with modern comfort. Twenty-eight suites, three restaurants, two infinity pools,
            and a private cove — all yours to discover.
          </p>
          <p className="text-muted-foreground">
            Our concierge curates everything from sailing day-trips along the coast to
            private truffle dinners in our seaside grotto.
          </p>
        </div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200"
          alt="Resort terrace"
          className="h-[460px] w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
