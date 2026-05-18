import { describe, expect, it } from "vitest";

import {
  buildLoopSlides,
  computeSliderTranslatePx,
  getSnapTrackIndex,
  isInMiddleCopy,
  normalizeLogicalSlideIndex,
  toMiddleCopyTrackIndex,
} from "./infiniteLoop";

describe("normalizeLogicalSlideIndex", () => {
  it("reads index from the middle copy", () => {
    expect(normalizeLogicalSlideIndex(7, 5)).toBe(2);
  });

  it("normalizes clone copies", () => {
    expect(normalizeLogicalSlideIndex(1, 5)).toBe(1);
    expect(normalizeLogicalSlideIndex(11, 5)).toBe(1);
  });
});

describe("isInMiddleCopy", () => {
  it("is true only for the middle strip", () => {
    expect(isInMiddleCopy(4, 5)).toBe(false);
    expect(isInMiddleCopy(5, 5)).toBe(true);
    expect(isInMiddleCopy(9, 5)).toBe(true);
    expect(isInMiddleCopy(10, 5)).toBe(false);
  });
});

describe("getSnapTrackIndex", () => {
  it("maps clone indices back to the middle copy", () => {
    expect(getSnapTrackIndex(10, 5)).toBe(5);
    expect(getSnapTrackIndex(4, 5)).toBe(9);
  });
});

describe("toMiddleCopyTrackIndex", () => {
  it("offsets logical index by baseLen", () => {
    expect(toMiddleCopyTrackIndex(2, 5)).toBe(7);
  });
});

describe("buildLoopSlides", () => {
  it("returns an empty array for no slides", () => {
    expect(buildLoopSlides([])).toEqual([]);
  });

  it("triples the input strip", () => {
    expect(buildLoopSlides(["a", "b"])).toEqual(["a", "b", "a", "b", "a", "b"]);
  });
});

describe("computeSliderTranslatePx", () => {
  it("steps by slide width plus gap", () => {
    expect(
      computeSliderTranslatePx(2, { slideWidth: 100, slideGap: 10 }),
    ).toBe(220);
  });

  it("centers the active slide when centerInViewportWidth is set", () => {
    expect(
      computeSliderTranslatePx(2, {
        slideWidth: 100,
        slideGap: 10,
        centerInViewportWidth: 400,
      }),
    ).toBe(70);
  });

  it("applies translateOffset", () => {
    expect(
      computeSliderTranslatePx(2, {
        slideWidth: 100,
        slideGap: 10,
        translateOffset: 30,
      }),
    ).toBe(250);
  });
});
