export type VisualMemoryGridArea =
  | "florence"
  | "cinque"
  | "tuscany"
  | "colosseum"
  | "terrace"
  | "seeAll";

/** Gallery filter tabs (excluding "all", which is implicit). */
export type VisualMemoryGalleryTag = "rooms" | "wellness" | "culinary";

export type VisualMemoryGalleryFilterId = "all" | VisualMemoryGalleryTag;

export const VISUAL_MEMORIES_GALLERY_FILTERS: readonly {
  id: VisualMemoryGalleryFilterId;
  label: string;
}[] = [
  { id: "all", label: "All Photos" },
  { id: "rooms", label: "Rooms" },
  { id: "wellness", label: "Wellness" },
  { id: "culinary", label: "Culinary" },
] as const;

export const VISUAL_MEMORIES_GAP_PX = 16;

export const VISUAL_MEMORY_COLUMN_WIDTHS = [436, 436, 456] as const;

/** Figma frame width: 436 + 16 + 436 + 16 + 456 */
export const VISUAL_MEMORIES_DESIGN_WIDTH =
  VISUAL_MEMORY_COLUMN_WIDTHS[0] +
  VISUAL_MEMORIES_GAP_PX +
  VISUAL_MEMORY_COLUMN_WIDTHS[1] +
  VISUAL_MEMORIES_GAP_PX +
  VISUAL_MEMORY_COLUMN_WIDTHS[2];

/** Desktop masonry zoom (images + gaps scale together). */
export const VISUAL_MEMORIES_DESKTOP_ZOOM = 0.92;

export type VisualMemoryImage = {
  id: string;
  alt: string;
  src: string;
  area: VisualMemoryGridArea;
  designWidth: number;
  designHeight: number;
  /** Static Tailwind class (must be a string literal for JIT). */
  aspectClass: string;
  /** Shown when the given filter tab is active ("All Photos" includes every image). */
  galleryTags: readonly VisualMemoryGalleryTag[];
};

export const VISUAL_MEMORIES_IMAGES: VisualMemoryImage[] = [
  {
    id: "florence",
    alt: "Florence skyline with the Duomo at sunset",
    src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80",
    area: "florence",
    designWidth: 436,
    designHeight: 296,
    aspectClass: "aspect-[436/296]",
    galleryTags: ["rooms", "culinary"],
  },
  {
    id: "cinque-terre",
    alt: "Colorful coastal village on the Italian Riviera",
    src: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
    area: "cinque",
    designWidth: 436,
    designHeight: 296,
    aspectClass: "aspect-[436/296]",
    galleryTags: ["rooms", "wellness"],
  },
  {
    id: "tuscany",
    alt: "Rolling Tuscan hills with cypress trees at golden hour",
    src: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80",
    area: "tuscany",
    designWidth: 436,
    designHeight: 608,
    aspectClass: "aspect-[436/608]",
    galleryTags: ["rooms", "wellness"],
  },
  {
    id: "colosseum",
    alt: "Arches of the Colosseum in Rome",
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80",
    area: "colosseum",
    designWidth: 456,
    designHeight: 335,
    aspectClass: "aspect-[456/335]",
    galleryTags: ["rooms", "culinary"],
  },
  {
    id: "terrace",
    alt: "Hotel terrace with umbrellas overlooking the sea",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80",
    area: "terrace",
    designWidth: 888,
    designHeight: 292,
    aspectClass: "aspect-[888/292]",
    galleryTags: ["rooms", "wellness"],
  },
  {
    id: "hills",
    alt: "Green rolling hills in the countryside",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    area: "seeAll",
    designWidth: 456,
    designHeight: 565,
    aspectClass: "aspect-[456/565]",
    galleryTags: ["rooms", "wellness"],
  },
];
