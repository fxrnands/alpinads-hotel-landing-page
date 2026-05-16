import type { FieldErrors } from "react-hook-form";
import { describe, expect, it } from "vitest";

import type { PersonalQuoteFormValues } from "./schema";
import { collectFormErrorMessages } from "./formErrorMessages";

describe("collectFormErrorMessages", () => {
  it("flattens nested react-hook-form errors", () => {
    const messages = collectFormErrorMessages({
      email: { type: "required", message: "Email address is required" },
      dateRange: {
        from: { type: "custom", message: "Arrival date is required" },
      },
    } as FieldErrors<PersonalQuoteFormValues>);
    expect(messages).toEqual([
      "Email address is required",
      "Arrival date is required",
    ]);
  });

  it("deduplicates identical messages", () => {
    const messages = collectFormErrorMessages({
      firstName: { message: "Same" },
      lastName: { message: "Same" },
    } as FieldErrors<PersonalQuoteFormValues>);
    expect(messages).toEqual(["Same"]);
  });
});
