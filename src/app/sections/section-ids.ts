/** In-page anchors shared by layout, navbar, and section components. */
export const SECTION_IDS = {
  rooms: "rooms",
  amenities: "amenities",
  visualMemories: "visual-memories",
  reserve: "reserve",
  heritage: "heritage",
  booking: "booking",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export function sectionHref(id: SectionId): string {
  return `#${id}`;
}
