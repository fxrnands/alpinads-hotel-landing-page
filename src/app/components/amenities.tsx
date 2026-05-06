import { Waves, UtensilsCrossed, Sparkles, Wine, Sailboat, Dumbbell } from "lucide-react";

const items = [
  { icon: Waves, title: "Two Infinity Pools", desc: "Heated, sea-facing, open year round." },
  { icon: UtensilsCrossed, title: "Three Restaurants", desc: "Including a Michelin-starred terrace." },
  { icon: Sparkles, title: "Cliffside Spa", desc: "Holistic treatments and a hammam." },
  { icon: Wine, title: "Wine Cellar", desc: "Tastings of regional Campanian vintages." },
  { icon: Sailboat, title: "Private Yacht", desc: "Half-day excursions along the coast." },
  { icon: Dumbbell, title: "Wellness Studio", desc: "Daily yoga, pilates, and trainers." },
];

export function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <div className="mb-3 tracking-widest uppercase text-muted-foreground">Amenities</div>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Everything you'd hope for, and more.</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="space-y-2">
            <it.icon className="h-7 w-7" />
            <h3>{it.title}</h3>
            <p className="text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
