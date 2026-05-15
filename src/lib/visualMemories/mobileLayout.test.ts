import { describe, expect, it } from "vitest";

import {
  VISUAL_MEMORIES_MOBILE_FRAME_WIDTH,
  VISUAL_MEMORIES_MOBILE_GAP_PX,
  VISUAL_MEMORIES_MOBILE_METRICS,
} from "./mobileLayout";

describe("VISUAL_MEMORIES_MOBILE_METRICS", () => {
  it("uses a two-column frame width with 8px gutter", () => {
    const columnWidth =
      (VISUAL_MEMORIES_MOBILE_FRAME_WIDTH - VISUAL_MEMORIES_MOBILE_GAP_PX) / 2;

    expect(columnWidth).toBe(175);
    expect(VISUAL_MEMORIES_MOBILE_METRICS.florence.designWidth).toBe(columnWidth);
    expect(VISUAL_MEMORIES_MOBILE_METRICS.tuscany.designWidth).toBe(columnWidth);
  });

  it("stacks two square tiles to the tuscany column height", () => {
    const { florence, tuscany } = VISUAL_MEMORIES_MOBILE_METRICS;

    expect(florence.designHeight * 2 + VISUAL_MEMORIES_MOBILE_GAP_PX).toBe(
      tuscany.designHeight,
    );
  });

  it("sizes the terrace across the full mobile frame width", () => {
    expect(VISUAL_MEMORIES_MOBILE_METRICS.terrace.designWidth).toBe(
      VISUAL_MEMORIES_MOBILE_FRAME_WIDTH,
    );
  });
});
