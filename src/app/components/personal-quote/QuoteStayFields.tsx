import { format } from "date-fns";
import { Bed, Minus, Plus } from "lucide-react";
import type { DateRange } from "react-day-picker";

import type { Guests } from "@/app/components/BookingFields";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import {
  DATE_RANGE_POPOVER_MATCH_TRIGGER_CLASS,
  DateRangeCalendarResponsive,
} from "@/lib/booking/dateRangePicker";
import {
  PERSONAL_QUOTE_FIELD_ICONS,
  PERSONAL_QUOTE_ROOM_OPTIONS,
} from "@/constants/personalQuote";
import {
  PERSONAL_QUOTE_FIELD_ICON_CLASS,
  PERSONAL_QUOTE_INPUT_CLASS,
  PERSONAL_QUOTE_SELECT_TRIGGER_CLASS,
} from "@/lib/personalQuote/layout";

import { QuoteFieldIcon, QuoteFieldShell } from "./QuoteField";
import { cn } from "../ui/utils";

type QuoteDateRangeValue = DateRange | { from?: Date; to?: Date };

function toDateRange(dateRange?: QuoteDateRangeValue): DateRange | undefined {
  if (!dateRange?.from && !dateRange?.to) {
    return undefined;
  }

  return { from: dateRange.from, to: dateRange.to };
}

function formatDateRange(dateRange?: QuoteDateRangeValue): string {
  if (!dateRange?.from) {
    return "Arrival & Departure";
  }
  if (!dateRange.to) {
    return format(dateRange.from, "MMM d");
  }
  return `${format(dateRange.from, "MMM d")} – ${format(dateRange.to, "MMM d")}`;
}

type QuoteDateRangeFieldProps = {
  dateRange?: QuoteDateRangeValue;
  onChange: (range?: DateRange) => void;
};

export function QuoteDateRangeField({ dateRange, onChange }: QuoteDateRangeFieldProps) {
  const selectedRange = toDateRange(dateRange);
  const hasSelection = Boolean(dateRange?.from);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" className="h-auto w-full p-0 text-left">
          <QuoteFieldShell icon={<QuoteFieldIcon src={PERSONAL_QUOTE_FIELD_ICONS.calendar} />}>
            <span
              className={cn(
                PERSONAL_QUOTE_INPUT_CLASS,
                !hasSelection && "text-[#323232]/40",
              )}
            >
              {formatDateRange(dateRange)}
            </span>
          </QuoteFieldShell>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("p-0", DATE_RANGE_POPOVER_MATCH_TRIGGER_CLASS)}
        align="start"
      >
        <DateRangeCalendarResponsive
          selected={selectedRange}
          onSelect={onChange}
          fromDate={new Date()}
          initialFocus
          singleMonthLayout
        />
      </PopoverContent>
    </Popover>
  );
}

type QuoteGuestsFieldProps = {
  value: Guests;
  onChange: (guests: Guests) => void;
};

export function QuoteGuestsField({ value, onChange }: QuoteGuestsFieldProps) {
  const total = value.adults + value.children;
  const displayValue = total === 0 ? "Guests" : `${total} ${total === 1 ? "guest" : "guests"}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" className="h-auto w-full p-0 text-left">
          <QuoteFieldShell icon={<QuoteFieldIcon src={PERSONAL_QUOTE_FIELD_ICONS.users} />}>
            <span
              className={cn(
                PERSONAL_QUOTE_INPUT_CLASS,
                total === 0 && "text-[#323232]/40",
              )}
            >
              {displayValue}
            </span>
          </QuoteFieldShell>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] max-w-none p-4"
        align="start"
      >
        <GuestStepper
          label="Adults"
          sublabel="Ages 13+"
          value={value.adults}
          min={0}
          max={8}
          onChange={(adults) => onChange({ ...value, adults })}
        />
        <div className="my-3 h-px bg-border" />
        <GuestStepper
          label="Children"
          sublabel="Ages 0–12"
          value={value.children}
          min={0}
          max={6}
          onChange={(children) => onChange({ ...value, children })}
        />
      </PopoverContent>
    </Popover>
  );
}

function GuestStepper({
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
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-[#323232]">{label}</div>
        <div className="text-xs text-[#323232]/60">{sublabel}</div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          appearance="iconControl"
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
        >
          <Minus className="size-4" />
        </Button>
        <span className="w-5 text-center tabular-nums">{value}</span>
        <Button
          type="button"
          appearance="iconControl"
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
        >
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  );
}

type QuoteRoomSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function QuoteRoomSelect({ value, onChange }: QuoteRoomSelectProps) {
  const selectedRoom = PERSONAL_QUOTE_ROOM_OPTIONS.find((room) => room.value === value);
  const roomSelectAriaLabel = selectedRoom
    ? `Selected room: ${selectedRoom.label}`
    : "Select room";

  return (
    <Select value={value || undefined} onValueChange={onChange}>
      <SelectTrigger
        aria-label={roomSelectAriaLabel}
        className={cn(PERSONAL_QUOTE_SELECT_TRIGGER_CLASS, !value && "text-[#323232]/40")}
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Bed className={PERSONAL_QUOTE_FIELD_ICON_CLASS} strokeWidth={1.75} aria-hidden />
          <SelectValue placeholder="Select Room" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {PERSONAL_QUOTE_ROOM_OPTIONS.map((room) => (
          <SelectItem key={room.value} value={room.value}>
            {room.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
