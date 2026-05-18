import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type TransitionEvent,
} from "react";
import { flushSync } from "react-dom";

import {
  buildLoopSlides,
  computeSliderTranslatePx,
  getSnapTrackIndex,
  isInMiddleCopy,
  type InfiniteLoopSliderOptions,
} from "@/lib/slider/infiniteLoop";

export {
  normalizeLogicalSlideIndex,
  type InfiniteLoopSliderOptions,
} from "@/lib/slider/infiniteLoop";

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

  const loopSlides = useMemo(() => buildLoopSlides(slides), [slides]);

  const [trackIndex, setTrackIndex] = useState(() => (baseLen > 0 ? baseLen : 0));
  const [transitionOn, setTransitionOn] = useState(true);

  const trackIndexRef = useRef(trackIndex);
  const transitionOnRef = useRef(transitionOn);
  const pendingStepRef = useRef(false);
  const resumeTransitionAfterSnapRef = useRef(false);

  trackIndexRef.current = trackIndex;
  transitionOnRef.current = transitionOn;

  const translateOptions = useMemo(
    () => ({
      slideWidth,
      slideGap,
      centerInViewportWidth,
      translateOffset,
    }),
    [slideWidth, slideGap, centerInViewportWidth, translateOffset],
  );

  useEffect(() => {
    if (baseLen === 0) {
      setTrackIndex(0);
      return;
    }
    setTrackIndex((current) => {
      if (isInMiddleCopy(current, baseLen)) return current;
      return getSnapTrackIndex(current, baseLen);
    });
  }, [baseLen]);

  useEffect(() => {
    if (baseLen === 0) {
      setTrackIndex(0);
      return;
    }
    setTrackIndex((current) => getSnapTrackIndex(current, baseLen));
  }, [slideWidth, slideGap, baseLen]);

  const snapToMiddleCopy = useCallback(() => {
    if (baseLen === 0) return false;

    const current = trackIndexRef.current;
    if (isInMiddleCopy(current, baseLen)) return false;

    const nextIndex = getSnapTrackIndex(current, baseLen);

    flushSync(() => {
      setTransitionOn(false);
      setTrackIndex(nextIndex);
    });

    resumeTransitionAfterSnapRef.current = true;
    return true;
  }, [baseLen]);

  useLayoutEffect(() => {
    if (!resumeTransitionAfterSnapRef.current) return;
    resumeTransitionAfterSnapRef.current = false;
    setTransitionOn(true);
  }, [trackIndex]);

  const finishAnimatedStep = useCallback(() => {
    pendingStepRef.current = false;
    snapToMiddleCopy();
  }, [snapToMiddleCopy]);

  const onTrackTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget) return;
      if (event.propertyName !== "transform") return;
      if (!pendingStepRef.current) return;
      if (!transitionOnRef.current) return;

      finishAnimatedStep();
    },
    [finishAnimatedStep],
  );

  const onTrackTransitionCancel = useCallback(
    (event: TransitionEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget) return;
      if (event.propertyName !== "transform") return;
      if (!pendingStepRef.current) return;

      pendingStepRef.current = false;
      snapToMiddleCopy();
    },
    [snapToMiddleCopy],
  );

  const stepTrackIndex = useCallback(
    (delta: number) => {
      if (baseLen === 0) return;

      pendingStepRef.current = true;
      setTransitionOn(true);
      setTrackIndex((current) => current + delta);
    },
    [baseLen],
  );

  const goPrev = useCallback(() => {
    stepTrackIndex(-1);
  }, [stepTrackIndex]);

  const goNext = useCallback(() => {
    stepTrackIndex(1);
  }, [stepTrackIndex]);

  const translatePx = computeSliderTranslatePx(trackIndex, translateOptions);

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
    onTrackTransitionCancel,
  };
}
