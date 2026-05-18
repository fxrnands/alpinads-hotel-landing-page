import { describe, expect, it } from "vitest";

import { stabilizeMeasuredWidth } from "./stabilizeWidth";

describe("stabilizeMeasuredWidth", () => {
  it("returns the next width when there is no previous measurement", () => {
    expect(stabilizeMeasuredWidth(0, 390, 4)).toBe(390);
  });

  it("keeps the previous width when the change is within the delta", () => {
    expect(stabilizeMeasuredWidth(800, 802, 4)).toBe(800);
  });

  it("accepts the next width when the change exceeds the delta", () => {
    expect(stabilizeMeasuredWidth(800, 820, 4)).toBe(820);
  });
});
