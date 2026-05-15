import { describe, expect, it } from "vitest";

import { personalQuoteFormDefaultValues, personalQuoteFormSchema, toSubmitPayload } from "./schema";

const validValues = {
  ...personalQuoteFormDefaultValues,
  firstName: "Anna",
  lastName: "Schmidt",
  email: "anna@example.com",
  phone: "+43 123456789",
  dateRange: {
    from: new Date("2026-06-01"),
    to: new Date("2026-06-05"),
  },
  guests: { adults: 2, children: 0 },
  roomId: "larch-junior-suite",
};

describe("personalQuoteFormSchema", () => {
  it("accepts a valid payload", () => {
    const result = personalQuoteFormSchema.safeParse(validValues);
    expect(result.success).toBe(true);
  });

  it("allows optional special requests", () => {
    const result = personalQuoteFormSchema.safeParse({
      ...validValues,
      specialRequests: "Late check-in please",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing required fields", () => {
    const result = personalQuoteFormSchema.safeParse({
      ...personalQuoteFormDefaultValues,
    });
    expect(result.success).toBe(false);
  });

  it("rejects departure before arrival", () => {
    const result = personalQuoteFormSchema.safeParse({
      ...validValues,
      dateRange: {
        from: new Date("2026-06-10"),
        to: new Date("2026-06-05"),
      },
    });
    expect(result.success).toBe(false);
  });
});

describe("toSubmitPayload", () => {
  it("maps selected services and trims special requests", () => {
    const parsed = personalQuoteFormSchema.parse({
      ...validValues,
      services: {
        ...personalQuoteFormDefaultValues.services,
        "spa-package": true,
      },
      specialRequests: "  ",
    });

    const payload = toSubmitPayload(parsed);
    expect(payload.selectedServices).toEqual([{ id: "spa-package", label: "Spa package" }]);
    expect(payload.specialRequests).toBeUndefined();
  });
});
