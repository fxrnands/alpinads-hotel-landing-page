import { useCallback, useEffect, useState } from "react";

import type { InfiniteLoopSliderOptions } from "./useInfiniteLoopSlider";

export function useBoundedSlider(
  slideCount: number,
  {
    slideWidth = 748,
    slideHeight = 519,
    slideGap = 16,
    centerInViewportWidth,
  }: InfiniteLoopSliderOptions = {},
) {
  const slideSpan = slideWidth + slideGap;
  const maxIndex = Math.max(0, slideCount - 1);

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex, slideWidth, slideGap]);

  const goPrev = useCallback(() => {
    setActiveIndex((index) => Math.max(0, index - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((index) => Math.min(maxIndex, index + 1));
  }, [maxIndex]);

  const translatePx =
    centerInViewportWidth != null && centerInViewportWidth > 0
      ? activeIndex * slideSpan + slideWidth / 2 - centerInViewportWidth / 2
      : activeIndex * slideSpan;

  return {
    activeIndex,
    translatePx,
    transitionOn,
    slideWidth,
    slideHeight,
    slideGap,
    goPrev,
    goNext,
    canGoPrev: activeIndex > 0,
    canGoNext: activeIndex < maxIndex,
  };
}
