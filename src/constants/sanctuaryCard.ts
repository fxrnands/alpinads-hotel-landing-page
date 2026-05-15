/** Horizontal inset for the sanctuary slider on mobile (matches `px-4`). */
export const SANCTUARY_MOBILE_SLIDER_PADDING_X = 16;

/** Figma reference frame (width × height). */
const SANCTUARY_CARD_DESIGN_WIDTH = 465;
const SANCTUARY_CARD_DESIGN_HEIGHT = 545;
export const SANCTUARY_CARD_DESIGN_IMAGE_HEIGHT = 327;

/** Desktop display scale vs Figma (mobile uses full viewport width). */
export const SANCTUARY_DESKTOP_CARD_SCALE = 1.05;

export const SANCTUARY_DESKTOP_CARD_WIDTH = Math.round(
  SANCTUARY_CARD_DESIGN_WIDTH * SANCTUARY_DESKTOP_CARD_SCALE,
);
export const SANCTUARY_DESKTOP_CARD_HEIGHT = Math.round(
  SANCTUARY_CARD_DESIGN_HEIGHT * SANCTUARY_DESKTOP_CARD_SCALE,
);

export const SANCTUARY_CARD_WIDTH = SANCTUARY_DESKTOP_CARD_WIDTH;
export const SANCTUARY_CARD_HEIGHT = SANCTUARY_DESKTOP_CARD_HEIGHT;

export const SANCTUARY_CARD_CONTENT_DESIGN_HEIGHT =
  SANCTUARY_CARD_DESIGN_HEIGHT - SANCTUARY_CARD_DESIGN_IMAGE_HEIGHT;

/** Tailwind arbitrary aspect-ratio (design width / design height). */
export const SANCTUARY_CARD_ASPECT_CLASS = "aspect-[465/545]" as const;
export const SANCTUARY_CARD_IMAGE_ASPECT_CLASS = "aspect-[465/327]" as const;

/** Grid row split: image 327fr + content 218fr = 545fr total. */
export const SANCTUARY_CARD_GRID_ROWS_CLASS = "grid-rows-[327fr_218fr]" as const;

export function sanctuaryImageHeightForWidth(cardWidth: number): number {
  return Math.round(
    cardWidth * (SANCTUARY_CARD_DESIGN_IMAGE_HEIGHT / SANCTUARY_CARD_DESIGN_WIDTH),
  );
}
