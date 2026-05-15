import { useLayoutEffect, useMemo, useState } from "react";

import type { InfiniteLoopSliderOptions } from "./useInfiniteLoopSlider";
import { useMatchMedia } from "./useMatchMedia";

const MD_BREAKPOINT_QUERY = "(min-width: 768px)";

export function useHeritageSliderGeometry(): InfiniteLoopSliderOptions {
  const isDesktop = useMatchMedia(MD_BREAKPOINT_QUERY);
  const [mobileViewportWidth, setMobileViewportWidth] = useState(390);

  useLayoutEffect(() => {
    if (isDesktop) return;

    const measure = () => {
      const vw = window.visualViewport?.width ?? window.innerWidth;
      setMobileViewportWidth(Math.round(vw));
    };

    measure();
    window.addEventListener("resize", measure);
    window.visualViewport?.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.visualViewport?.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  return useMemo(() => {
    if (isDesktop) {
      return {
        slideWidth: 748,
        slideHeight: 519,
        slideGap: 16,
        translateOffset: 0,
      };
    }

    const vw = mobileViewportWidth;
    const slideGap = 12;
    const slideSide = Math.round(Math.max(240, Math.min(vw * 0.82, vw - 24)));

    return {
      slideWidth: slideSide,
      slideHeight: slideSide,
      slideGap,
      centerInViewportWidth: vw,
    };
  }, [isDesktop, mobileViewportWidth]);
}
