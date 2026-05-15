import { describe, expect, it } from "vitest";

import {
  VISUAL_MEMORIES_DESIGN_WIDTH,
  VISUAL_MEMORIES_GAP_PX,
  VISUAL_MEMORIES_IMAGES,
  VISUAL_MEMORY_COLUMN_WIDTHS,
} from "./visualMemories";

describe("VISUAL_MEMORIES_DESIGN_WIDTH", () => {
  it("matches column widths plus 16px gaps", () => {
    const expected =
      VISUAL_MEMORY_COLUMN_WIDTHS[0] +
      VISUAL_MEMORIES_GAP_PX +
      VISUAL_MEMORY_COLUMN_WIDTHS[1] +
      VISUAL_MEMORIES_GAP_PX +
      VISUAL_MEMORY_COLUMN_WIDTHS[2];

    expect(VISUAL_MEMORIES_DESIGN_WIDTH).toBe(expected);
    expect(VISUAL_MEMORIES_DESIGN_WIDTH).toBe(1360);
  });
});

describe("VISUAL_MEMORIES_IMAGES layout proportions", () => {
  it("stacks two left images to the center column height", () => {
    const left = VISUAL_MEMORIES_IMAGES.find((image) => image.area === "florence");
    const center = VISUAL_MEMORIES_IMAGES.find((image) => image.area === "tuscany");

    expect(left).toBeDefined();
    expect(center).toBeDefined();
    expect(left!.designHeight * 2 + VISUAL_MEMORIES_GAP_PX).toBe(center!.designHeight);
  });

  it("sizes the wide terrace across the first two columns", () => {
    const terrace = VISUAL_MEMORIES_IMAGES.find((image) => image.area === "terrace");

    expect(terrace!.designWidth).toBe(
      VISUAL_MEMORY_COLUMN_WIDTHS[0] +
        VISUAL_MEMORIES_GAP_PX +
        VISUAL_MEMORY_COLUMN_WIDTHS[1],
    );
  });
});
