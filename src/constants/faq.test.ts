import { describe, expect, it } from "vitest";

import {
  FAQ_ACCORDION_GAP_MOBILE_PX,
  FAQ_ACCORDION_GAP_PX,
  FAQ_COLUMN_GAP_PX,
  FAQ_DEFAULT_OPEN_ID,
  FAQ_IMAGE,
  FAQ_ITEMS,
  FAQ_IMAGE_HEIGHT,
  FAQ_IMAGE_WIDTH,
  FAQ_MOBILE_IMAGE_HEIGHT,
  FAQ_MOBILE_IMAGE_WIDTH,
} from "./faq";

describe("FAQ constants", () => {
  it("defines five accordion items with the first expanded by default in UI", () => {
    expect(FAQ_ITEMS).toHaveLength(5);
    expect(FAQ_ITEMS[0]?.id).toBe("check-in-check-out");
    expect(FAQ_DEFAULT_OPEN_ID).toBe(FAQ_ITEMS[0]?.id);
  });

  it("uses the design image dimensions", () => {
    expect(FAQ_IMAGE.width).toBe(FAQ_IMAGE_WIDTH);
    expect(FAQ_IMAGE.height).toBe(FAQ_IMAGE_HEIGHT);
    expect(FAQ_IMAGE_WIDTH).toBe(648);
    expect(FAQ_IMAGE_HEIGHT).toBe(330);
    expect(FAQ_MOBILE_IMAGE_WIDTH).toBe(358);
    expect(FAQ_MOBILE_IMAGE_HEIGHT).toBe(240);
  });

  it("uses design spacing tokens", () => {
    expect(FAQ_COLUMN_GAP_PX).toBe(80);
    expect(FAQ_ACCORDION_GAP_PX).toBe(20);
    expect(FAQ_ACCORDION_GAP_MOBILE_PX).toBe(12);
  });
});
