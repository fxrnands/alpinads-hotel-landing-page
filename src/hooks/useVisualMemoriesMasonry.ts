import { useMemo } from "react";
import type { CSSProperties } from "react";

import { VISUAL_MEMORIES_DESKTOP_ZOOM } from "@/constants/visualMemories";
import { VISUAL_MEMORIES_BY_AREA } from "@/lib/visualMemories";

export function useVisualMemoriesMasonry() {
  const desktopGalleryStyle = useMemo(
    () =>
      ({
        "--visual-memories-zoom": VISUAL_MEMORIES_DESKTOP_ZOOM,
      }) as CSSProperties,
    [],
  );

  return {
    imagesByArea: VISUAL_MEMORIES_BY_AREA,
    desktopGalleryStyle,
  };
}
