import { SECTION_IDS, type SectionId } from "@/app/sections/section-ids";

export function resolveSectionScrollTarget(sectionId: SectionId): string {
  if (sectionId === SECTION_IDS.reserve) {
    return SECTION_IDS.booking;
  }

  return sectionId;
}
