import { describe, expect, it } from "vitest";

import { sanitizePhoneInput } from "./phoneInput";

describe("sanitizePhoneInput", () => {
  it("strips letters and punctuation except leading +", () => {
    expect(sanitizePhoneInput("abc+62 812-xxx")).toBe("+62812");
  });

  it("keeps digits only when there is no leading +", () => {
    expect(sanitizePhoneInput("0812 3456 7890")).toBe("081234567890");
  });

  it("normalizes + to a single leading prefix", () => {
    expect(sanitizePhoneInput("+43 664 / 12")).toBe("+4366412");
  });

  it("allows lone + while typing", () => {
    expect(sanitizePhoneInput("+")).toBe("+");
  });
});
