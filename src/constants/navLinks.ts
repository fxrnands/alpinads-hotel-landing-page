import { SECTION_IDS, sectionHref } from "@/app/sections";

export const MAIN_NAV_LINKS = [
  { label: "Rooms", href: sectionHref(SECTION_IDS.rooms) },
  { label: "Amenities", href: sectionHref(SECTION_IDS.amenities) },
  { label: "Reserve", href: sectionHref(SECTION_IDS.reserve) },
] as const;
