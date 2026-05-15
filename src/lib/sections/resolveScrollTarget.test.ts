import { describe, expect, it } from "vitest";

import { SECTION_IDS } from "@/app/sections/section-ids";

import { resolveSectionScrollTarget } from "./resolveScrollTarget";

describe("resolveSectionScrollTarget", () => {
  it("maps reserve to the booking form", () => {
    expect(resolveSectionScrollTarget(SECTION_IDS.reserve)).toBe(SECTION_IDS.booking);
  });

  it("returns other section ids unchanged", () => {
    expect(resolveSectionScrollTarget(SECTION_IDS.rooms)).toBe(SECTION_IDS.rooms);
  });
});
