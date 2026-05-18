import type { DateRange } from "react-day-picker";

import type { Guests } from "@/app/components/BookingFields";
import type { PersonalQuoteFormValues } from "@/lib/personalQuote/schema";

export type HeroBookingDraft = {
  dateRange?: DateRange;
  guests: Guests;
};

export type HeroBookingQuotePrefill = Pick<
  PersonalQuoteFormValues,
  "dateRange" | "guests"
>;

function isCompleteDateRange(
  dateRange?: DateRange,
): dateRange is { from: Date; to: Date } {
  return (
    dateRange?.from instanceof Date &&
    dateRange.to instanceof Date
  );
}

function hasGuestSelection(guests: Guests): boolean {
  return guests.adults + guests.children > 0;
}

/** Maps hero booking fields to quote form values only when the user filled them. */
export function buildHeroBookingQuotePrefill(
  draft: HeroBookingDraft,
): Partial<HeroBookingQuotePrefill> {
  const prefill: Partial<HeroBookingQuotePrefill> = {};

  if (isCompleteDateRange(draft.dateRange)) {
    prefill.dateRange = {
      from: draft.dateRange.from,
      to: draft.dateRange.to,
    };
  }

  if (hasGuestSelection(draft.guests)) {
    prefill.guests = {
      adults: draft.guests.adults,
      children: draft.guests.children,
    };
  }

  return prefill;
}

export function hasHeroBookingQuotePrefill(
  prefill: Partial<HeroBookingQuotePrefill>,
): boolean {
  return prefill.dateRange !== undefined || prefill.guests !== undefined;
}
