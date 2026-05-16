import {
  VISUAL_MEMORIES_MOBILE_COL_FLEX,
  VISUAL_MEMORIES_MOBILE_GAP_CLASS,
  VISUAL_MEMORIES_MOBILE_METRICS,
  type VisualMemoriesImagesByArea,
} from "@/lib/visualMemories";

import { cn } from "../ui/utils";
import { MasonryTile } from "./MasonryTile";

type VisualMemoriesMasonryMobileProps = {
  imagesByArea: VisualMemoriesImagesByArea;
  onOpenSeeAllGallery: () => void;
};

export function VisualMemoriesMasonryMobile({
  imagesByArea,
  onOpenSeeAllGallery,
}: VisualMemoriesMasonryMobileProps) {
  return (
    <div
      className={cn("flex w-full flex-col md:hidden", VISUAL_MEMORIES_MOBILE_GAP_CLASS)}
      aria-label="Visual memories photo gallery"
    >
      <div className={cn("flex", VISUAL_MEMORIES_MOBILE_GAP_CLASS)}>
        <div
          className={cn(
            "flex flex-col",
            VISUAL_MEMORIES_MOBILE_GAP_CLASS,
            VISUAL_MEMORIES_MOBILE_COL_FLEX,
          )}
        >
          <MasonryTile
            image={imagesByArea.florence}
            metrics={VISUAL_MEMORIES_MOBILE_METRICS.florence}
          />
          <MasonryTile
            image={imagesByArea.cinque}
            metrics={VISUAL_MEMORIES_MOBILE_METRICS.cinque}
          />
        </div>
        <div className={VISUAL_MEMORIES_MOBILE_COL_FLEX}>
          <MasonryTile
            image={imagesByArea.tuscany}
            metrics={VISUAL_MEMORIES_MOBILE_METRICS.tuscany}
          />
        </div>
      </div>
      <MasonryTile
        image={imagesByArea.terrace}
        metrics={VISUAL_MEMORIES_MOBILE_METRICS.terrace}
        seeAllOverlay
        onSeeAllPhotos={onOpenSeeAllGallery}
      />
    </div>
  );
}
