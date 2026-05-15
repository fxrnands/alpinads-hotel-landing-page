import { useMatchMedia } from "@/hooks/useMatchMedia";

/** Popover content matches trigger width on mobile (hero bar + form fields). */
export const DATE_RANGE_POPOVER_CONTENT_CLASS =
  "w-[var(--radix-popover-trigger-width)] max-w-none md:w-auto";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

export function useDateRangeCalendarLayout() {
  const isMobile = useMatchMedia(MOBILE_MEDIA_QUERY);

  return {
    isMobile,
    numberOfMonths: isMobile ? 1 : 2,
    stretch: isMobile,
  } as const;
}
