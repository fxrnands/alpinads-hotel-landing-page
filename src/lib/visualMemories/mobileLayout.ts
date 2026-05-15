/** Figma mobile frame content width (px). */
export const VISUAL_MEMORIES_MOBILE_FRAME_WIDTH = 358;

/** Mobile masonry gutter — 8px (`gap-2`). */
export const VISUAL_MEMORIES_MOBILE_GAP_PX = 8;

export const VISUAL_MEMORIES_MOBILE_GAP_CLASS = "gap-2" as const;

const MOBILE_COLUMN_WIDTH =
  (VISUAL_MEMORIES_MOBILE_FRAME_WIDTH - VISUAL_MEMORIES_MOBILE_GAP_PX) / 2;

const MOBILE_SQUARE_SIZE = MOBILE_COLUMN_WIDTH;

const MOBILE_TUSCANY_HEIGHT =
  MOBILE_SQUARE_SIZE + VISUAL_MEMORIES_MOBILE_GAP_PX + MOBILE_SQUARE_SIZE;

const MOBILE_TERRACE_HEIGHT = Math.round(
  (VISUAL_MEMORIES_MOBILE_FRAME_WIDTH * 292) / 888,
);

export type VisualMemoryMobileMetrics = {
  designWidth: number;
  designHeight: number;
  aspectClass: string;
};

export const VISUAL_MEMORIES_MOBILE_METRICS = {
  florence: {
    designWidth: MOBILE_SQUARE_SIZE,
    designHeight: MOBILE_SQUARE_SIZE,
    aspectClass: "aspect-square",
  },
  cinque: {
    designWidth: MOBILE_SQUARE_SIZE,
    designHeight: MOBILE_SQUARE_SIZE,
    aspectClass: "aspect-square",
  },
  tuscany: {
    designWidth: MOBILE_COLUMN_WIDTH,
    designHeight: MOBILE_TUSCANY_HEIGHT,
    aspectClass: "aspect-[175/358]",
  },
  terrace: {
    designWidth: VISUAL_MEMORIES_MOBILE_FRAME_WIDTH,
    designHeight: MOBILE_TERRACE_HEIGHT,
    aspectClass: "aspect-[358/118]",
  },
} as const satisfies Record<
  "florence" | "cinque" | "tuscany" | "terrace",
  VisualMemoryMobileMetrics
>;

export const VISUAL_MEMORIES_MOBILE_COL_FLEX = "min-w-0 flex-1" as const;
