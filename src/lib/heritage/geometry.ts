import type { InfiniteLoopSliderOptions } from "@/lib/slider/infiniteLoop";

import {
  computeHeritageSlideHeightPx,
  computeHeritageSlideWidthPx,
  heritageCarouselBleedWidthPx,
  HERITAGE_HORIZONTAL_PADDING_MOBILE_PX,
  HERITAGE_SLIDE_GAP_MD_PX,
  HERITAGE_SLIDE_GAP_MOBILE_PX,
} from "./layout";

/** Matches Tailwind `md` (48rem at 16px root). */
export const HERITAGE_MD_MIN_PX = 768;

const MOBILE_FALLBACK_WIDTH_PX = 390;

export function resolveHeritageSliderGeometry(
  viewportWidth: number,
): InfiniteLoopSliderOptions {
  const isMdUp = viewportWidth >= HERITAGE_MD_MIN_PX;

  if (isMdUp) {
    const bleedWidth = heritageCarouselBleedWidthPx(viewportWidth);
    const slideWidth = computeHeritageSlideWidthPx(bleedWidth);
    const slideHeight = computeHeritageSlideHeightPx(slideWidth);

    return {
      slideWidth,
      slideHeight,
      slideGap: HERITAGE_SLIDE_GAP_MD_PX,
      translateOffset: 0,
    };
  }

  const vw = viewportWidth > 0 ? viewportWidth : MOBILE_FALLBACK_WIDTH_PX;
  const slideGap = HERITAGE_SLIDE_GAP_MOBILE_PX;
  const slideSide = Math.round(
    Math.max(
      240,
      Math.min(vw * 0.82, vw - HERITAGE_HORIZONTAL_PADDING_MOBILE_PX * 2),
    ),
  );

  return {
    slideWidth: slideSide,
    slideHeight: slideSide,
    slideGap,
    centerInViewportWidth: vw,
    translateOffset: 0,
  };
}
