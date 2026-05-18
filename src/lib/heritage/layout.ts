/** Matches `max-w-[1920px]` on the section shell. */
export const HERITAGE_CONTAINER_MAX_PX = 1920;

/** Matches `md:px-10` / `px-6` horizontal padding on the intro row. */
export const HERITAGE_HORIZONTAL_PADDING_MD_PX = 40;
export const HERITAGE_HORIZONTAL_PADDING_MOBILE_PX = 24;

export const HERITAGE_SLIDE_MAX_WIDTH_PX = 748;
export const HERITAGE_SLIDE_MAX_HEIGHT_PX = 519;
export const HERITAGE_SLIDE_GAP_MD_PX = 16;
export const HERITAGE_SLIDE_GAP_MOBILE_PX = 12;

export const HERITAGE_SLIDE_ASPECT =
  HERITAGE_SLIDE_MAX_HEIGHT_PX / HERITAGE_SLIDE_MAX_WIDTH_PX;

/** Left inset of intro + first slide (px), aligned with `md:px-10` inside centered max-width shell. */
export function heritageContentLeftInsetPx(viewportWidth: number): number {
  const containerWidth = Math.min(viewportWidth, HERITAGE_CONTAINER_MAX_PX);
  const sideMargin = (viewportWidth - containerWidth) / 2;
  return sideMargin + HERITAGE_HORIZONTAL_PADDING_MD_PX;
}

/** Width from aligned left edge to the viewport right — carousel bleed area on desktop. */
export function heritageCarouselBleedWidthPx(viewportWidth: number): number {
  return Math.max(0, viewportWidth - heritageContentLeftInsetPx(viewportWidth));
}

/**
 * Slide width for md+ viewports: scales with bleed width, capped at design max.
 * Tuned for ~2 full slides plus a partial peek without harsh clipping at the right edge.
 */
export function computeHeritageSlideWidthPx(bleedWidthPx: number): number {
  const gap = HERITAGE_SLIDE_GAP_MD_PX;
  const targetVisibleSpans = 2.25;
  const minWidth = 300;
  const computed = Math.floor((bleedWidthPx - gap) / targetVisibleSpans - gap);
  return Math.min(
    HERITAGE_SLIDE_MAX_WIDTH_PX,
    Math.max(minWidth, computed),
  );
}

export function computeHeritageSlideHeightPx(slideWidthPx: number): number {
  return Math.round(slideWidthPx * HERITAGE_SLIDE_ASPECT);
}
