import { useLayoutEffect, useMemo, useRef, useState } from "react";

import {
  SANCTUARY_DESKTOP_CARD_HEIGHT,
  SANCTUARY_DESKTOP_CARD_WIDTH,
} from "@/constants/sanctuaryCard";
import type { InfiniteLoopSliderOptions } from "./useInfiniteLoopSlider";
import { useMatchMedia } from "./useMatchMedia";

const MD_BREAKPOINT_QUERY = "(min-width: 768px)";
const DESKTOP_SLIDE_GAP = 16;

export function useSanctuarySliderGeometry(
  containerWidth: number,
): InfiniteLoopSliderOptions {
  const isDesktop = useMatchMedia(MD_BREAKPOINT_QUERY);

  return useMemo(() => {
    if (isDesktop) {
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
  }, [isDesktop, containerWidth]);
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
