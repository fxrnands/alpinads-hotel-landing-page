import type { DateRange } from "react-day-picker";

import { Calendar } from "@/app/components/ui/calendar";

export type DateRangeCalendarResponsiveProps = {
  selected?: DateRange;
  onSelect?: (range?: DateRange) => void;
  fromDate?: Date;
  initialFocus?: boolean;
  className?: string;
  stretchDesktop?: boolean;
  singleMonthLayout?: boolean;
};

export function DateRangeCalendarResponsive({
  className,
  stretchDesktop = false,
  singleMonthLayout = false,
  ...rest
}: DateRangeCalendarResponsiveProps) {
  if (singleMonthLayout) {
    return (
      <Calendar
        className={className}
        {...rest}
        mode="range"
        numberOfMonths={1}
        stretch
      />
    );
  }

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
