import { describe, expect, it } from "vitest";

import {
  computeHeritageSlideWidthPx,
  heritageCarouselBleedWidthPx,
  heritageContentLeftInsetPx,
  HERITAGE_SLIDE_MAX_WIDTH_PX,
} from "./layout";

describe("heritage layout", () => {
  it("aligns left inset with centered 1920 shell and md:px-10", () => {
    expect(heritageContentLeftInsetPx(1920)).toBe(40);
    expect(heritageContentLeftInsetPx(2560)).toBe(360);
  });

  it("bleeds carousel to the viewport right on wide screens", () => {
    expect(heritageCarouselBleedWidthPx(1920)).toBe(1880);
    expect(heritageCarouselBleedWidthPx(2560)).toBe(2200);
  });

  it("caps slide width at the design maximum", () => {
    expect(computeHeritageSlideWidthPx(heritageCarouselBleedWidthPx(2560))).toBe(
      HERITAGE_SLIDE_MAX_WIDTH_PX,
    );
  });

  it("scales slide width down on narrower md viewports", () => {
    const width = computeHeritageSlideWidthPx(heritageCarouselBleedWidthPx(900));
    expect(width).toBeLessThan(HERITAGE_SLIDE_MAX_WIDTH_PX);
    expect(width).toBeGreaterThanOrEqual(300);
  });
});
