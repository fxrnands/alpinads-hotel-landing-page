import { useCallback, useEffect, useMemo, useRef, useState, type TransitionEvent } from "react";

export type InfiniteLoopSliderOptions = {
  /** Slide width in px (used for transform math and layout). */
  slideWidth?: number;
  /** Slide height in px. */
  slideHeight?: number;
  /** Gap between slides in px (must match flex `gap` visually). */
  slideGap?: number;
  /**
   * When set, the track is translated so the active slide is horizontally centered
   * in this viewport width (peek of neighbors on both sides).
   */
  centerInViewportWidth?: number;
  /** Extra translate (px) to tuck the track left and reduce the previous-slide peek. */
  translateOffset?: number;
};

export function useInfiniteLoopSlider(
  slides: readonly string[],
  {
    slideWidth = 748,
    slideHeight = 519,
    slideGap = 16,
    centerInViewportWidth,
    translateOffset = 0,
  }: InfiniteLoopSliderOptions = {},
) {
  const baseLen = slides.length;
  const slideSpan = slideWidth + slideGap;

  const loopSlides = useMemo(() => {
    if (slides.length === 0) return [];
    return [...slides, ...slides, ...slides];
  }, [slides]);

  const [trackIndex, setTrackIndex] = useState(() => (baseLen > 0 ? baseLen : 0));
  const [transitionOn, setTransitionOn] = useState(true);
  const trackIndexRef = useRef(trackIndex);
  const resumeTransitionRafRef = useRef<number | null>(null);

  trackIndexRef.current = trackIndex;

  useEffect(() => {
    if (baseLen === 0) {
      setTrackIndex(0);
      return;
    }
    setTrackIndex((i) => Math.min(Math.max(i, baseLen), baseLen * 2 - 1));
  }, [baseLen]);

  useEffect(
    () => () => {
      if (resumeTransitionRafRef.current !== null) {
        cancelAnimationFrame(resumeTransitionRafRef.current);
        resumeTransitionRafRef.current = null;
      }
    },
    [],
  );

  useEffect(() => {
    if (baseLen === 0) {
      setTrackIndex(0);
      return;
    }
    setTrackIndex(baseLen);
  }, [slideWidth, slideHeight, slideGap, centerInViewportWidth, translateOffset, baseLen]);

  const scheduleResumeTransition = useCallback(() => {
    if (resumeTransitionRafRef.current !== null) {
      cancelAnimationFrame(resumeTransitionRafRef.current);
    }
    const outerId = requestAnimationFrame(() => {
      resumeTransitionRafRef.current = requestAnimationFrame(() => {
        resumeTransitionRafRef.current = null;
        setTransitionOn(true);
      });
    });
    resumeTransitionRafRef.current = outerId;
  }, []);

  const loopAdjust = useCallback(() => {
    if (baseLen === 0) return;

    let i = trackIndexRef.current;
    const outUpper = i >= baseLen * 2;
    const outLower = i < baseLen;
    if (!outUpper && !outLower) return;

    setTransitionOn(false);
    if (outUpper) {
      while (i >= baseLen * 2) i -= baseLen;
    } else {
      while (i < baseLen) i += baseLen;
    }
    setTrackIndex(i);
    scheduleResumeTransition();
  }, [baseLen, scheduleResumeTransition]);

  const onTrackTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget) return;
      if (event.propertyName !== "transform") return;
      loopAdjust();
    },
    [loopAdjust],
  );

  const stepTrackIndex = useCallback(
    (delta: number) => {
      if (baseLen === 0) return;
      setTrackIndex((i) => i + delta);
    },
    [baseLen],
  );

  const goPrev = useCallback(() => {
    stepTrackIndex(-1);
  }, [stepTrackIndex]);

  const goNext = useCallback(() => {
    stepTrackIndex(1);
  }, [stepTrackIndex]);

  const translatePx =
    (centerInViewportWidth != null && centerInViewportWidth > 0
      ? trackIndex * slideSpan + slideWidth / 2 - centerInViewportWidth / 2
      : trackIndex * slideSpan) + translateOffset;

  return {
    loopSlides,
    translatePx,
    transitionOn,
    slideWidth,
    slideHeight,
    slideGap,
    goPrev,
    goNext,
    onTrackTransitionEnd,
  };
}
