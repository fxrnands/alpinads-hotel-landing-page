import { useLayoutEffect, useMemo, useState } from "react";

import {
  HERITAGE_MD_MIN_PX,
  resolveHeritageSliderGeometry,
} from "@/lib/heritage/geometry";
import { stabilizeMeasuredWidth } from "@/lib/viewport/stabilizeWidth";

import type { InfiniteLoopSliderOptions } from "./useInfiniteLoopSlider";

export const HERITAGE_VIEWPORT_STABLE_DELTA_PX = 4;
export const HERITAGE_RESIZE_DEBOUNCE_MS = 120;

export function useHeritageSliderGeometry(): InfiniteLoopSliderOptions {
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined"
      ? Math.round(window.visualViewport?.width ?? window.innerWidth)
      : 0,
  );

  useLayoutEffect(() => {
    let debounceId: ReturnType<typeof setTimeout> | undefined;

    const commitWidth = (nextWidth: number) => {
      setViewportWidth((prev) =>
        stabilizeMeasuredWidth(prev, nextWidth, HERITAGE_VIEWPORT_STABLE_DELTA_PX),
      );
    };

    const measure = () => {
      commitWidth(Math.round(window.visualViewport?.width ?? window.innerWidth));
    };

    const scheduleMeasure = () => {
      if (debounceId !== undefined) {
        clearTimeout(debounceId);
      }
      debounceId = setTimeout(measure, HERITAGE_RESIZE_DEBOUNCE_MS);
    };

    measure();
    window.addEventListener("resize", scheduleMeasure);
    window.visualViewport?.addEventListener("resize", scheduleMeasure);
    return () => {
      if (debounceId !== undefined) {
        clearTimeout(debounceId);
      }
      window.removeEventListener("resize", scheduleMeasure);
      window.visualViewport?.removeEventListener("resize", scheduleMeasure);
    };
  }, []);

  return useMemo(
    () => resolveHeritageSliderGeometry(viewportWidth),
    [viewportWidth],
  );
}

export { HERITAGE_MD_MIN_PX };
