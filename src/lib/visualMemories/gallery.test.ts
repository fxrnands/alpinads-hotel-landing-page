import { describe, expect, it } from "vitest";

import { VISUAL_MEMORIES_IMAGES } from "@/constants/visualMemories";

import { listVisualMemoriesGalleryImages } from "./gallery";

describe("listVisualMemoriesGalleryImages", () => {
  it("returns every image for All Photos", () => {
    expect(listVisualMemoriesGalleryImages("all")).toHaveLength(VISUAL_MEMORIES_IMAGES.length);
  });

  it("filters by rooms (every image is tagged rooms)", () => {
    const rooms = listVisualMemoriesGalleryImages("rooms");
    expect(rooms.length).toBe(VISUAL_MEMORIES_IMAGES.length);
    expect(rooms.every((img) => img.galleryTags.includes("rooms"))).toBe(true);
  });

  it("filters wellness to a subset", () => {
    const wellness = listVisualMemoriesGalleryImages("wellness");
    expect(wellness.length).toBeGreaterThan(0);
    expect(wellness.length).toBeLessThan(VISUAL_MEMORIES_IMAGES.length);
    expect(wellness.every((img) => img.galleryTags.includes("wellness"))).toBe(true);
  });

  it("filters culinary to a subset", () => {
    const culinary = listVisualMemoriesGalleryImages("culinary");
    expect(culinary.length).toBeGreaterThan(0);
    expect(culinary.every((img) => img.galleryTags.includes("culinary"))).toBe(true);
  });
});
