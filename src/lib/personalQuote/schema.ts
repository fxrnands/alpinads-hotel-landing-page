import type { DateRange } from "react-day-picker";
import { z } from "zod";

import {
  PERSONAL_QUOTE_ROOM_OPTIONS,
  PERSONAL_QUOTE_SERVICES,
  type PersonalQuoteServiceId,
} from "@/constants/personalQuote";

const roomIds = new Set(PERSONAL_QUOTE_ROOM_OPTIONS.map((room) => room.value));

const guestsSchema = z.object({
  adults: z.number().int().min(1, "At least one adult is required"),
  children: z.number().int().min(0),
});

const servicesShape = Object.fromEntries(
  PERSONAL_QUOTE_SERVICES.map((service) => [service.id, z.boolean()]),
) as Record<PersonalQuoteServiceId, z.ZodBoolean>;

const servicesSchema = z.object(servicesShape);

/** Digits only, for validating international-style numbers with formatting. */
export function countPhoneDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

const dateRangeSchema = z
  .object({
    from: z.date().optional(),
    to: z.date().optional(),
  })
  .superRefine((value, context) => {
    if (!(value.from instanceof Date)) {
      context.addIssue({
        code: "custom",
        message: "Arrival date is required",
        path: ["from"],
      });
    }

    if (!(value.to instanceof Date)) {
      context.addIssue({
        code: "custom",
        message: "Departure date is required",
        path: ["to"],
      });
    }

    if (
      value.from instanceof Date &&
      value.to instanceof Date &&
      value.to < value.from
    ) {
      context.addIssue({
        code: "custom",
        message: "Departure must be on or after arrival",
        path: ["to"],
      });
    }
  });

export const personalQuoteFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .refine(
      (value) => {
        const digits = countPhoneDigits(value);
        return digits >= 8 && digits <= 15;
      },
      "Please enter a valid phone number (8–15 digits)",
    ),
  dateRange: dateRangeSchema,
  guests: guestsSchema,
  roomId: z
    .string()
    .min(1, "Please select a room")
    .refine((id) => roomIds.has(id), "Please select a room"),
  services: servicesSchema,
  specialRequests: z.string().optional(),
});

export type PersonalQuoteFormValues = z.infer<typeof personalQuoteFormSchema>;

export const personalQuoteFormDefaultValues: PersonalQuoteFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateRange: {},
  guests: { adults: 0, children: 0 },
  roomId: "",
  services: Object.fromEntries(
    PERSONAL_QUOTE_SERVICES.map((service) => [service.id, false]),
  ) as PersonalQuoteFormValues["services"],
  specialRequests: "",
};

export type PersonalQuoteSubmitPayload = PersonalQuoteFormValues & {
  dateRange: DateRange;
  selectedServices: { id: PersonalQuoteServiceId; label: string }[];
};

export function toSubmitPayload(
  values: PersonalQuoteFormValues,
): PersonalQuoteSubmitPayload {
  const selectedServices = PERSONAL_QUOTE_SERVICES.filter(
    ({ id }) => values.services[id],
  ).map(({ id, label }) => ({ id, label }));

  return {
    ...values,
    dateRange: {
      from: values.dateRange.from,
      to: values.dateRange.to,
    },
    specialRequests: values.specialRequests?.trim() || undefined,
    selectedServices,
  };
}
