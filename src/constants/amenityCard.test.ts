import { describe, expect, it } from "vitest";

import {
  AMENITY_MOBILE_CARD_HEIGHT,
  AMENITY_MOBILE_CARD_WIDTH,
  amenityMobileCardHeightForWidth,
  amenityMobileCardWidthForContainer,
} from "./amenityCard";

describe("amenityMobileCardWidthForContainer", () => {
  it("uses full container width up to the design maximum", () => {
    expect(amenityMobileCardWidthForContainer(320)).toBe(320);
    expect(amenityMobileCardWidthForContainer(358)).toBe(358);
    expect(amenityMobileCardWidthForContainer(400)).toBe(358);
  });
});

describe("amenityMobileCardHeightForWidth", () => {
  it("matches the 358×250 design ratio at full width", () => {
    expect(amenityMobileCardHeightForWidth(AMENITY_MOBILE_CARD_WIDTH)).toBe(
      AMENITY_MOBILE_CARD_HEIGHT,
    );
  });

  it("scales height proportionally for narrower containers", () => {
    expect(amenityMobileCardHeightForWidth(179)).toBe(125);
  });
});
