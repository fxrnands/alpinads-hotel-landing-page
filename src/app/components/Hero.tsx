import { useState, type FormEvent } from "react";
import type { DateRange } from "react-day-picker";

import { useHeroBookingPrefill } from "@/contexts/HeroBookingPrefillContext";
import {
  buildHeroBookingQuotePrefill,
  hasHeroBookingQuotePrefill,
} from "@/lib/heroBookingPrefill";
import { scrollToElementId } from "@/utils/smoothScroll";

import { SECTION_IDS } from "../sections";
import { Button } from "./ui/button";
import { DateRangeField, GuestsField, type Guests } from "./BookingFields";
import { HeroCarousel } from "./HeroCarousel";
import { Navbar } from "./Navbar";

export function Hero() {
  const { setQuotePrefill } = useHeroBookingPrefill();
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState<Guests>({ adults: 0, children: 0 });

  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const prefill = buildHeroBookingQuotePrefill({ dateRange, guests });
    if (hasHeroBookingQuotePrefill(prefill)) {
      setQuotePrefill(prefill);
    }

    scrollToElementId(SECTION_IDS.personalQuote);
  };

  return (
    <section className="relative min-h-[100vh] w-full overflow-x-hidden">
      <HeroCarousel />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[557px] backdrop-blur-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 15.51%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="pointer-events-auto absolute bottom-2 left-0 right-0 z-30 flex justify-center px-2 md:bottom-5 md:px-6">
        <div className="flex w-full max-w-[885px] flex-col items-center gap-6 text-white">
          <p className="text-center text-[20px] font-normal leading-[120%] tracking-normal md:text-[36px]">
            The Silence of the Alps, Redefined.
          </p>
          <form
            id={SECTION_IDS.booking}
            onSubmit={handleRequestSubmit}
            className="flex w-full flex-col gap-2 overflow-hidden rounded-[12px] border border-white/10 bg-black/25 p-0 text-white backdrop-blur-[100px] md:h-[72px] md:min-h-0 md:flex-row md:items-stretch md:gap-3 md:rounded-[8px]"
          >
            <div className="order-1 min-w-0 md:order-3 md:flex-1 md:basis-0">
              <GuestsField hero value={guests} onChange={setGuests} />
            </div>
            <div
              className="order-2 hidden shrink-0 bg-white/20 md:block md:h-[50px] md:w-px md:self-center"
              aria-hidden
            />
            <div className="order-3 min-w-0 md:order-1 md:flex-1 md:basis-0">
              <DateRangeField hero dateRange={dateRange} onChange={setDateRange} />
            </div>
            <Button
              type="submit"
              className="order-4 flex h-[48px] w-full shrink-0 items-center justify-center rounded-none bg-[#A49781] px-6 py-0 text-base font-normal uppercase leading-[150%] tracking-[5%] text-white hover:bg-[#A49781]/90 md:h-full md:min-h-0 md:w-[240px] md:min-w-[240px] md:max-w-[240px] md:shrink-0"
            >
              Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
