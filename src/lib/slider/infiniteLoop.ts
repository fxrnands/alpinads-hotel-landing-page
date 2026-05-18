export type SliderTranslateOptions = {
  slideWidth?: number;
  slideGap?: number;
  centerInViewportWidth?: number;
  translateOffset?: number;
};

export type InfiniteLoopSliderOptions = SliderTranslateOptions & {
  slideHeight?: number;
};

const DEFAULT_SLIDE_WIDTH = 748;
const DEFAULT_SLIDE_GAP = 16;

/** Maps any track index to 0..baseLen-1 (which slide the user is viewing). */
export function normalizeLogicalSlideIndex(
  trackIndex: number,
  baseLen: number,
): number {
  if (baseLen <= 0) return 0;
  if (trackIndex >= baseLen && trackIndex < baseLen * 2) {
    return trackIndex - baseLen;
  }
  return ((trackIndex % baseLen) + baseLen) % baseLen;
}

export function isInMiddleCopy(trackIndex: number, baseLen: number): boolean {
  return trackIndex >= baseLen && trackIndex < baseLen * 2;
}

/** Track index in the middle clone strip for a given logical slide. */
export function toMiddleCopyTrackIndex(
  logicalIndex: number,
  baseLen: number,
): number {
  if (baseLen <= 0) return 0;
  return baseLen + normalizeLogicalSlideIndex(logicalIndex, baseLen);
}

/** Re-anchor an out-of-range index to the equivalent middle-copy index. */
export function getSnapTrackIndex(trackIndex: number, baseLen: number): number {
  return toMiddleCopyTrackIndex(trackIndex, baseLen);
}

export function buildLoopSlides<T>(slides: readonly T[]): T[] {
  if (slides.length === 0) return [];
  return [...slides, ...slides, ...slides];
}

export function computeSliderTranslatePx(
  trackIndex: number,
  {
    slideWidth = DEFAULT_SLIDE_WIDTH,
    slideGap = DEFAULT_SLIDE_GAP,
    centerInViewportWidth,
    translateOffset = 0,
  }: SliderTranslateOptions = {},
): number {
  const slideSpan = slideWidth + slideGap;

  const baseTranslate =
    centerInViewportWidth != null && centerInViewportWidth > 0
      ? trackIndex * slideSpan + slideWidth / 2 - centerInViewportWidth / 2
      : trackIndex * slideSpan;

  return baseTranslate + translateOffset;
}
