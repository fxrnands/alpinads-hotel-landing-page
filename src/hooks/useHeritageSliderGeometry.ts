import { useLayoutEffect, useMemo, useState } from "react";

import type { InfiniteLoopSliderOptions } from "./useInfiniteLoopSlider";

/** Matches Tailwind `md` (48rem at 16px root). Not used for CSS—slider math needs a px threshold. */
const MD_MIN_PX = 768;

export function useHeritageSliderGeometry(): InfiniteLoopSliderOptions {
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined"
      ? Math.round(window.visualViewport?.width ?? window.innerWidth)
      : 0,
  );

  useLayoutEffect(() => {
    const measure = () => {
      setViewportWidth(Math.round(window.visualViewport?.width ?? window.innerWidth));
    };

    measure();
    window.addEventListener("resize", measure);
    window.visualViewport?.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.visualViewport?.removeEventListener("resize", measure);
    };
  }, []);

  return useMemo(() => {
    const isMdUp = viewportWidth >= MD_MIN_PX;

    if (isMdUp) {
      return {
        slideWidth: 748,
        slideHeight: 519,
        slideGap: 16,
        translateOffset: 0,
      };
    }

    const vw = viewportWidth > 0 ? viewportWidth : 390;
    const slideGap = 12;
    const slideSide = Math.round(Math.max(240, Math.min(vw * 0.82, vw - 24)));

    return {
      slideWidth: slideSide,
      slideHeight: slideSide,
      slideGap,
      centerInViewportWidth: vw,
    };
  }, [viewportWidth]);
}
