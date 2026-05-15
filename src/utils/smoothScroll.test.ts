import { describe, expect, it } from "vitest";

import { parseHashTargetId } from "./smoothScroll";

describe("parseHashTargetId", () => {
  it("returns null for empty or root hash", () => {
    expect(parseHashTargetId("")).toBeNull();
    expect(parseHashTargetId("#")).toBeNull();
  });

  it("strips the leading hash", () => {
    expect(parseHashTargetId("#amenities")).toBe("amenities");
    expect(parseHashTargetId("faq")).toBe("faq");
  });
});
