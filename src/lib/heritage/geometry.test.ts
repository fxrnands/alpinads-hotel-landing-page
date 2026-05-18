import { describe, expect, it } from "vitest";

import { HERITAGE_SLIDE_MAX_WIDTH_PX } from "./layout";
import { HERITAGE_MD_MIN_PX, resolveHeritageSliderGeometry } from "./geometry";

describe("resolveHeritageSliderGeometry", () => {
  it("returns centered mobile geometry below md breakpoint", () => {
    const geometry = resolveHeritageSliderGeometry(390);

    expect(geometry.centerInViewportWidth).toBe(390);
    expect(geometry.slideWidth).toBeGreaterThanOrEqual(240);
    expect(geometry.slideHeight).toBe(geometry.slideWidth);
    expect(geometry.translateOffset).toBe(0);
  });

  it("returns bleed-based desktop geometry at md and above", () => {
    const geometry = resolveHeritageSliderGeometry(HERITAGE_MD_MIN_PX);

    expect(geometry.centerInViewportWidth).toBeUndefined();
    expect(geometry.slideWidth).toBeLessThanOrEqual(HERITAGE_SLIDE_MAX_WIDTH_PX);
    expect(geometry.slideHeight).toBeLessThanOrEqual(519);
  });

  it("uses a fallback width when viewport is zero", () => {
    const geometry = resolveHeritageSliderGeometry(0);

    expect(geometry.centerInViewportWidth).toBe(390);
  });
});
