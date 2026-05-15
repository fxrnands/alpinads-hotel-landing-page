import { format } from "date-fns";
import { Calendar as CalendarIcon, CalendarDays, ChevronDown, Minus, Plus, Users } from "lucide-react";
import type { ReactNode } from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "./ui/utils";

type FieldShellProps = {
  label: string;
  value: ReactNode;
  icon: ReactNode;
  appearance?: "pill" | "bar";
  showChevron?: boolean;
};

export function FieldShell({
  label,
  value,
  icon,
  appearance = "pill",
  showChevron = false,
}: FieldShellProps) {
  const isBar = appearance === "bar";

  return (
    <div
      className={cn(
        "flex w-full items-center gap-3",
        isBar
          ? "h-full w-full items-center rounded-none border-0 bg-transparent px-4 py-3 text-white md:py-0"
          : "rounded-full border border-border bg-background px-4 py-2.5",
      )}
    >
      <div
        className={cn(
          "shrink-0",
          isBar ? "text-white" : "text-muted-foreground",
        )}
      >
        {icon}
      </div>
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col items-start text-left",
          isBar ? "justify-center gap-1 md:gap-2" : "leading-tight",
        )}
      >
        <span
          className={cn(
            "font-manrope uppercase",
            isBar
              ? "text-[14px] font-normal leading-[100%] tracking-normal text-white/70"
              : "tracking-widest text-muted-foreground",
          )}
          style={!isBar ? { fontSize: 10 } : undefined}
        >
          {label}
        </span>
        <span
          className={cn(
            "font-manrope",
            isBar
              ? "min-w-0 truncate text-base font-normal leading-normal tracking-normal text-white"
              : "truncate text-base font-normal text-foreground",
          )}
        >
          {value}
        </span>
      </div>
      {showChevron ? (
        <ChevronDown
          className={cn("size-5 shrink-0 text-white/70")}
          aria-hidden
        />
      ) : null}
    </div>
  );
}

export function DateField({
  label,
  date,
  onChange,
  fromDate,
}: {
  label: string;
  date?: Date;
  onChange: (d?: Date) => void;
  fromDate?: Date;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="block w-full">
          <FieldShell
            label={label}
            icon={<CalendarIcon className="h-4 w-4" />}
            value={date ? format(date, "EEE, MMM d") : <span className="opacity-60">Select date</span>}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          fromDate={fromDate ?? new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export function DateRangeField({
  dateRange,
  onChange,
  hero = false,
}: {
  dateRange?: DateRange;
  onChange: (range?: DateRange) => void;
  hero?: boolean;
}) {
  const formatRange = () => {
    if (!dateRange?.from) {
      if (hero) {
        return "Select Date";
      }
      return <span className="opacity-60">Select dates</span>;
    }
    if (!dateRange.to) {
      return format(dateRange.from, "MMM d");
    }
    return `${format(dateRange.from, "MMM d")} – ${format(dateRange.to, "MMM d")}`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            hero
              ? "flex h-[70px] min-h-[70px] w-full min-w-0 items-stretch md:h-full md:min-h-0 md:flex-1 md:basis-0"
              : "block w-full",
          )}
        >
          <FieldShell
            label={hero ? "Arrival & departure" : "Check-in – Check-out"}
            icon={
              hero ? (
                <CalendarDays className="size-6" strokeWidth={1.75} aria-hidden />
              ) : (
                <CalendarIcon className="h-4 w-4" aria-hidden />
              )
            }
            appearance={hero ? "bar" : "pill"}
            showChevron={hero}
            value={formatRange()}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={onChange}
          fromDate={new Date()}
          numberOfMonths={2}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export type Guests = { adults: number; children: number };

export function GuestsField({
  value,
  onChange,
  hero = false,
}: {
  value: Guests;
  onChange: (g: Guests) => void;
  hero?: boolean;
}) {
  const total = value.adults + value.children;
  const summary = `${total} ${total === 1 ? "guest" : "guests"}`;
  const displayValue = hero && total === 0 ? "Number of Guests" : summary;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            hero
              ? "flex h-[70px] min-h-[70px] w-full min-w-0 items-stretch md:h-full md:min-h-0 md:flex-1 md:basis-0"
              : "block w-full",
          )}
        >
          <FieldShell
            label="Guests"
            icon={<Users className={hero ? "size-6" : "h-4 w-4"} />}
            appearance={hero ? "bar" : "pill"}
            showChevron={hero}
            value={displayValue}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4" align="start">
        <Stepper
          label="Adults"
          sublabel="Ages 13+"
          value={value.adults}
          min={0}
          max={8}
          onChange={(v) => onChange({ ...value, adults: v })}
        />
        <div className="my-3 h-px bg-border" />
        <Stepper
          label="Children"
          sublabel="Ages 0–12"
          value={value.children}
          min={0}
          max={6}
          onChange={(v) => onChange({ ...value, children: v })}
        />
      </PopoverContent>
    </Popover>
  );
}

function Stepper({
  label,
  sublabel,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  sublabel: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div>{label}</div>
        <div className="text-muted-foreground" style={{ fontSize: 12 }}>
          {sublabel}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-5 text-center tabular-nums">{value}</span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
