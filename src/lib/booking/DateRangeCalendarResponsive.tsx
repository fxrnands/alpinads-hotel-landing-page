import type { DateRange } from "react-day-picker";

import { Calendar } from "@/app/components/ui/calendar";

export type DateRangeCalendarResponsiveProps = {
  selected?: DateRange;
  onSelect?: (range?: DateRange) => void;
  fromDate?: Date;
  initialFocus?: boolean;
  className?: string;
  /** When true, desktop range calendar uses full width of a wide popover (e.g. hero bar). */
  stretchDesktop?: boolean;
};

export function DateRangeCalendarResponsive({
  className,
  stretchDesktop = false,
  ...rest
}: DateRangeCalendarResponsiveProps) {
  return (
    <>
      <div className="md:hidden">
        <Calendar
          className={className}
          {...rest}
          mode="range"
          numberOfMonths={1}
          stretch
        />
      </div>
      <div className="hidden md:block">
        <Calendar
          className={className}
          {...rest}
          mode="range"
          numberOfMonths={2}
          stretch={stretchDesktop}
        />
      </div>
    </>
  );
}
