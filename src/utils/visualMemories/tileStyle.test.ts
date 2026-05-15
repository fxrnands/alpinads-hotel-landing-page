import { describe, expect, it } from "vitest";

import { VISUAL_MEMORIES_IMAGES } from "@/constants/visualMemories";

import { getVisualMemoryTileAspectStyle } from "./tileStyle";

describe("getVisualMemoryTileAspectStyle", () => {
  it("derives aspect ratio from design dimensions", () => {
    const tuscany = VISUAL_MEMORIES_IMAGES.find((image) => image.area === "tuscany");

    expect(tuscany).toBeDefined();
    expect(getVisualMemoryTileAspectStyle(tuscany!)).toEqual({
      aspectRatio: "436 / 608",
    });
  });
});
