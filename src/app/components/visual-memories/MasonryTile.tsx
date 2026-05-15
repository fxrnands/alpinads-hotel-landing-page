import type { VisualMemoryImage } from "@/constants/visualMemories";
import type { VisualMemoryMobileMetrics } from "@/lib/visualMemories";
import { getVisualMemoryTileAspectStyle } from "@/utils/visualMemories";

import { Button } from "../ui/button";
import { cn } from "../ui/utils";
import { MasonryImage } from "./MasonryImage";
import { MasonrySeeAllOverlay } from "./MasonrySeeAllOverlay";

type MasonryTileProps = {
  image: VisualMemoryImage;
  metrics?: VisualMemoryMobileMetrics;
  seeAllOverlay?: boolean;
};

export function MasonryTile({
  image,
  metrics,
  seeAllOverlay = false,
}: MasonryTileProps) {
  const tileStyle = getVisualMemoryTileAspectStyle(
    image,
    metrics
      ? { designWidth: metrics.designWidth, designHeight: metrics.designHeight }
      : undefined,
  );
  const aspectClass = metrics?.aspectClass ?? image.aspectClass;

  if (image.area === "seeAll" || seeAllOverlay) {
    return (
      <Button
        type="button"
        className={cn(
          "group relative block h-auto w-full min-w-0 overflow-hidden rounded-none p-0",
          aspectClass,
        )}
        style={tileStyle}
        aria-label="See all photos"
      >
        <MasonryImage image={image} alt={seeAllOverlay ? "" : undefined} />
        <MasonrySeeAllOverlay />
      </Button>
    );
  }

  return (
    <div
      className={cn("relative w-full min-w-0 overflow-hidden", aspectClass)}
      style={tileStyle}
    >
      <MasonryImage image={image} />
    </div>
  );
}
