import type { CSSProperties } from "react";

import type { VisualMemoryImage } from "@/constants/visualMemories";

export function getVisualMemoryTileAspectStyle(
  image: VisualMemoryImage,
  dimensions?: Pick<VisualMemoryImage, "designWidth" | "designHeight">,
): CSSProperties {
  const width = dimensions?.designWidth ?? image.designWidth;
  const height = dimensions?.designHeight ?? image.designHeight;

  return {
    aspectRatio: `${width} / ${height}`,
  };
}
