import { describe, expect, it } from "vitest";

import {
  buildHeroBookingQuotePrefill,
  hasHeroBookingQuotePrefill,
} from "./heroBookingPrefill";

describe("buildHeroBookingQuotePrefill", () => {
  it("prefills date range and guests when both are complete", () => {
    const from = new Date("2026-07-01");
    const to = new Date("2026-07-05");
    const prefill = buildHeroBookingQuotePrefill({
      dateRange: { from, to },
      guests: { adults: 2, children: 1 },
    });

    expect(prefill).toEqual({
      dateRange: { from, to },
      guests: { adults: 2, children: 1 },
    });
    expect(hasHeroBookingQuotePrefill(prefill)).toBe(true);
  });

  it("prefills only guests when dates are incomplete", () => {
    const prefill = buildHeroBookingQuotePrefill({
      dateRange: { from: new Date("2026-07-01") },
      guests: { adults: 1, children: 0 },
    });

    expect(prefill).toEqual({ guests: { adults: 1, children: 0 } });
  });

  it("prefills only dates when guests are empty", () => {
    const from = new Date("2026-07-01");
    const to = new Date("2026-07-05");
    const prefill = buildHeroBookingQuotePrefill({
      dateRange: { from, to },
      guests: { adults: 0, children: 0 },
    });

    expect(prefill).toEqual({ dateRange: { from, to } });
  });

  it("returns empty prefill when nothing was filled", () => {
    const prefill = buildHeroBookingQuotePrefill({
      dateRange: undefined,
      guests: { adults: 0, children: 0 },
    });

    expect(prefill).toEqual({});
    expect(hasHeroBookingQuotePrefill(prefill)).toBe(false);
  });
});
