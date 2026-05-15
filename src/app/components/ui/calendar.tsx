"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { calendarDayButtonClass, iconControlButtonClass } from "./button";

const CALENDAR_RANGE_CELL_CLASS = cn(
  "[&:has([aria-selected])]:bg-[#A49781]/20",
  "[&:has(>.day-range-start)]:rounded-l-md",
  "[&:has(>.day-range-end)]:rounded-r-md",
  "first:[&:has([aria-selected])]:rounded-l-md",
  "last:[&:has([aria-selected])]:rounded-r-md",
);

const CALENDAR_RANGE_DAY_BASE =
  "h-full w-full p-0 font-normal hover:bg-transparent focus:bg-transparent aria-selected:opacity-100";

const CALENDAR_RANGE_ENDPOINT_CLASS = cn(
  CALENDAR_RANGE_DAY_BASE,
  "rounded-md bg-[#A49781] text-white hover:bg-[#A49781] hover:text-white focus:bg-[#A49781] focus:text-white aria-selected:bg-[#A49781] aria-selected:text-white",
);

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  /** Spread day columns evenly when the popover is wider than the default calendar. */
  stretch?: boolean;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  stretch = false,
  ...props
}: CalendarProps) {
  const isRange = props.mode === "range";

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", stretch && "w-full", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: cn("flex flex-col gap-4", stretch && "w-full"),
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: iconControlButtonClass,
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: stretch ? "grid w-full grid-cols-7" : "flex",
        head_cell: cn(
          "text-muted-foreground rounded-md font-normal text-[0.8rem]",
          stretch ? "flex items-center justify-center" : "w-8",
        ),
        row: stretch ? "mt-2 grid w-full grid-cols-7" : "mt-2 flex w-full",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          stretch ? "flex min-h-9 items-stretch" : "h-9 w-8",
          isRange && CALENDAR_RANGE_CELL_CLASS,
          !isRange && "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          calendarDayButtonClass,
          isRange ? CALENDAR_RANGE_DAY_BASE : undefined,
          stretch ? "min-h-9" : isRange ? "h-9" : "size-8",
          !isRange && "aria-selected:opacity-100",
        ),
        day_range_start: cn("day-range-start", CALENDAR_RANGE_ENDPOINT_CLASS),
        day_range_end: cn("day-range-end", CALENDAR_RANGE_ENDPOINT_CLASS),
        day_selected: isRange
          ? ""
          : cn(
              CALENDAR_RANGE_ENDPOINT_CLASS,
              "hover:bg-[#A49781] hover:text-white focus:bg-[#A49781] focus:text-white",
            ),
        day_today: "text-foreground font-medium",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: cn(
          CALENDAR_RANGE_DAY_BASE,
          "day-range-middle rounded-none bg-transparent text-foreground",
          "aria-selected:bg-transparent aria-selected:text-foreground",
        ),
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
