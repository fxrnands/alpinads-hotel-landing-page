import { describe, expect, it } from "vitest";

import { countPhoneDigits, personalQuoteFormSchema } from "./schema";

const baseStay = {
  dateRange: {
    from: new Date("2026-06-01"),
    to: new Date("2026-06-05"),
  },
  guests: { adults: 2, children: 0 },
  roomId: "larch-junior-suite",
  services: {
    "airport-transfer": false,
    "spa-package": false,
    "private-dining": false,
    "yacht-excursion": false,
  },
};

describe("countPhoneDigits", () => {
  it("counts only digits", () => {
    expect(countPhoneDigits("+62 812-3456-7890")).toBe(13);
    expect(countPhoneDigits("(021) 1234 5678")).toBe(11);
  });
});

describe("personalQuoteFormSchema", () => {
  it("rejects invalid email formats", () => {
    const result = personalQuoteFormSchema.safeParse({
      firstName: "A",
      lastName: "B",
      email: "not-an-email",
      phone: "+1 2345678901",
      specialRequests: "",
      ...baseStay,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const emailIssue = result.error.issues.find((i) => i.path[0] === "email");
      expect(emailIssue?.message).toBe("Please enter a valid email address");
    }
  });

  it("rejects empty email", () => {
    const result = personalQuoteFormSchema.safeParse({
      firstName: "A",
      lastName: "B",
      email: "   ",
      phone: "+1 2345678901",
      specialRequests: "",
      ...baseStay,
    });
    expect(result.success).toBe(false);
  });

  it("rejects phone with too few digits", () => {
    const result = personalQuoteFormSchema.safeParse({
      firstName: "A",
      lastName: "B",
      email: "a@b.co",
      phone: "+43 123",
      specialRequests: "",
      ...baseStay,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const phoneIssue = result.error.issues.find((i) => i.path[0] === "phone");
      expect(phoneIssue?.message).toContain("8–15");
    }
  });

  it("accepts formatted phone with valid digit count", () => {
    const result = personalQuoteFormSchema.safeParse({
      firstName: "A",
      lastName: "B",
      email: "guest@example.com",
      phone: "+43 664 123 4567",
      specialRequests: "",
      ...baseStay,
    });
    expect(result.success).toBe(true);
  });
});
