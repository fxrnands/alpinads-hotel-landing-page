import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin } from "lucide-react";
import { DateRangeField, GuestsField, type Guests } from "./booking-fields";
import type { DateRange } from "react-day-picker";

export function Hero() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState<Guests>({ adults: 2, children: 0 });

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=2000"
        alt="Azure Bay Resort"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-between px-6 py-10 text-white">
        <nav className="flex items-center justify-between">
          <div className="tracking-[0.3em]">AZURE BAY</div>
          <div className="hidden gap-8 md:flex">
            <a href="#rooms" className="hover:opacity-70">Rooms</a>
            <a href="#amenities" className="hover:opacity-70">Amenities</a>
            <a href="#reserve" className="hover:opacity-70">Reserve</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>

        <div className="mt-24 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 opacity-90">
            <MapPin className="h-4 w-4" />
            <span className="tracking-widest uppercase">Amalfi Coast, Italy</span>
          </div>
          <h1 className="mb-6 text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}>
            Where the sea meets serenity.
          </h1>
          <p className="max-w-lg opacity-90">
            A boutique cliffside retreat with sun-soaked terraces, Mediterranean cuisine,
            and a private cove just steps from your suite.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-12 grid grid-cols-1 gap-2 rounded-full border border-white/15 bg-white/10 p-2 text-white shadow-2xl backdrop-blur-md md:grid-cols-[1fr_1fr_auto] md:items-center"
        >
          <DateRangeField dateRange={dateRange} onChange={setDateRange} variant="dark" />
          <GuestsField value={guests} onChange={setGuests} variant="dark" />
          <Button type="submit" className="h-11 rounded-full px-6">Check availability</Button>
        </form>
      </div>
    </section>
  );
}
