import { useLayoutEffect, useMemo, useRef, useState } from "react";

import {
  SANCTUARY_DESKTOP_CARD_HEIGHT,
  SANCTUARY_DESKTOP_CARD_WIDTH,
} from "@/constants/sanctuaryCard";
import type { InfiniteLoopSliderOptions } from "./useInfiniteLoopSlider";

/** Matches Tailwind `md` (48rem at 16px root). Not used for CSS—slider math needs a px threshold. */
const MD_MIN_PX = 768;

const DESKTOP_SLIDE_GAP = 16;

export function useSanctuarySliderGeometry(
  containerWidth: number,
): InfiniteLoopSliderOptions {
  const isMdUp = containerWidth >= MD_MIN_PX;

  return useMemo(() => {
    if (isMdUp) {
      return {
        slideWidth: SANCTUARY_DESKTOP_CARD_WIDTH,
        slideHeight: SANCTUARY_DESKTOP_CARD_HEIGHT,
        slideGap: DESKTOP_SLIDE_GAP,
      };
    }

    return {
      slideWidth: Math.max(1, Math.floor(containerWidth)),
      slideHeight: 1,
      slideGap: 0,
    };
  }, [isMdUp, containerWidth]);
}

export function useSanctuarySliderViewport() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    const element = viewportRef.current;
    if (!element) return;

    const measure = () => {
      setContainerWidth(Math.floor(element.clientWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { viewportRef, containerWidth };
}
