/** Figma desktop amenity card frame (width × height). */
export const AMENITY_CARD_DESIGN_WIDTH = 441;
export const AMENITY_CARD_DESIGN_HEIGHT = 238;

/**
 * Min viewport width for fixed Figma card ratio (3-col grid + line-clamp).
 * Below this, cards grow with content so descriptions are not clipped.
 */
export const AMENITY_CARD_FIXED_LAYOUT_MIN_PX = 1385;

/** Fixed Figma ratio at {@link AMENITY_CARD_FIXED_LAYOUT_MIN_PX}+. */
export const AMENITY_CARD_ASPECT_CLASS = "min-[1385px]:aspect-[441/238]" as const;

export const AMENITY_CARD_GRID_COLS_CLASS = "min-[1385px]:grid-cols-3" as const;

export const AMENITY_CARD_OVERFLOW_CLASS = "min-[1385px]:overflow-hidden" as const;

export const AMENITY_CARD_CONTENT_FLEX_CLASS =
  "min-[1385px]:min-h-0 min-[1385px]:flex-1" as const;

export const AMENITY_CARD_TITLE_CLASS =
  "text-[24px] min-[1385px]:line-clamp-2 min-[1385px]:text-[28px]" as const;

export const AMENITY_CARD_DESCRIPTION_CLASS =
  "text-[14px] min-[1385px]:line-clamp-3 min-[1385px]:text-[16px]" as const;

/** Figma mobile amenity card frame (width × height). */
export const AMENITY_MOBILE_CARD_WIDTH = 358;
export const AMENITY_MOBILE_CARD_HEIGHT = 250;

export const AMENITY_CARD_BG = "#F4F3F0";

export function amenityMobileCardWidthForContainer(containerWidth: number): number {
  return Math.min(Math.max(1, containerWidth), AMENITY_MOBILE_CARD_WIDTH);
}

export function amenityMobileCardHeightForWidth(cardWidth: number): number {
  return Math.round(
    cardWidth * (AMENITY_MOBILE_CARD_HEIGHT / AMENITY_MOBILE_CARD_WIDTH),
  );
}

export function amenityMobileCardScale(cardWidth: number): number {
  return cardWidth / AMENITY_MOBILE_CARD_WIDTH;
}
