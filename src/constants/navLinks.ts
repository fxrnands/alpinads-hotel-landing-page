import { SECTION_IDS, type SectionId } from "@/app/sections";

export const MAIN_NAV_LINKS = [
  { label: "Rooms", sectionId: SECTION_IDS.rooms },
  { label: "Amenities", sectionId: SECTION_IDS.amenities },
  { label: "Reserve", sectionId: SECTION_IDS.reserve },
] as const satisfies ReadonlyArray<{ label: string; sectionId: SectionId }>;
