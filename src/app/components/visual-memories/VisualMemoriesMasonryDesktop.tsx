import type { CSSProperties } from "react";

import {
  VISUAL_MEMORIES_DESKTOP_COL_1_FLEX,
  VISUAL_MEMORIES_DESKTOP_COL_2_FLEX,
  VISUAL_MEMORIES_DESKTOP_COL_3_FLEX,
  VISUAL_MEMORIES_DESKTOP_LEFT_FLEX,
  VISUAL_MEMORIES_MASONRY_GAP_CLASS,
  type VisualMemoriesImagesByArea,
} from "@/lib/visualMemories";

import { cn } from "../ui/utils";
import { MasonryTile } from "./MasonryTile";

type VisualMemoriesMasonryDesktopProps = {
  imagesByArea: VisualMemoriesImagesByArea;
  galleryStyle: CSSProperties;
};

export function VisualMemoriesMasonryDesktop({
  imagesByArea,
  galleryStyle,
}: VisualMemoriesMasonryDesktopProps) {
  return (
    <div
      className={cn(
        "hidden w-full md:flex md:[zoom:var(--visual-memories-zoom)]",
        VISUAL_MEMORIES_MASONRY_GAP_CLASS,
      )}
      style={galleryStyle}
      aria-label="Visual memories photo gallery"
    >
      <div
        className={cn(
          "flex flex-col",
          VISUAL_MEMORIES_MASONRY_GAP_CLASS,
          VISUAL_MEMORIES_DESKTOP_LEFT_FLEX,
        )}
      >
        <div className={cn("flex", VISUAL_MEMORIES_MASONRY_GAP_CLASS)}>
          <div
            className={cn(
              "flex flex-col",
              VISUAL_MEMORIES_MASONRY_GAP_CLASS,
              VISUAL_MEMORIES_DESKTOP_COL_1_FLEX,
            )}
          >
            <MasonryTile image={imagesByArea.florence} />
            <MasonryTile image={imagesByArea.cinque} />
          </div>
          <div className={VISUAL_MEMORIES_DESKTOP_COL_2_FLEX}>
            <MasonryTile image={imagesByArea.tuscany} />
          </div>
        </div>
        <MasonryTile image={imagesByArea.terrace} />
      </div>

      <div
        className={cn(
          "flex flex-col",
          VISUAL_MEMORIES_MASONRY_GAP_CLASS,
          VISUAL_MEMORIES_DESKTOP_COL_3_FLEX,
        )}
      >
        <MasonryTile image={imagesByArea.colosseum} />
        <MasonryTile image={imagesByArea.seeAll} />
      </div>
    </div>
  );
}
