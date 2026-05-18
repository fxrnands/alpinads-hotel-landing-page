import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { toast } from "sonner";

import { personalQuoteFormDefaultValues } from "@/lib/personalQuote/schema";

import { usePersonalQuoteForm } from "./usePersonalQuoteForm";

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

const validValues = {
  ...personalQuoteFormDefaultValues,
  firstName: "Anna",
  lastName: "Schmidt",
  email: "anna@example.com",
  phone: "+43 123456789",
  dateRange: {
    from: new Date("2026-06-01"),
    to: new Date("2026-06-05"),
  },
  guests: { adults: 2, children: 0 },
  roomId: "larch-junior-suite",
};

describe("usePersonalQuoteForm", () => {
  it("calls onSubmitSuccess with mapped payload when valid", async () => {
    const onSubmitSuccess = vi.fn();
    const { result } = renderHook(() => usePersonalQuoteForm({ onSubmitSuccess }));

    Object.entries(validValues).forEach(([key, value]) => {
      result.current.form.setValue(key as keyof typeof validValues, value);
    });

    await result.current.onSubmit();

    await waitFor(() => {
      expect(onSubmitSuccess).toHaveBeenCalledOnce();
    });

    expect(onSubmitSuccess.mock.calls[0][0]).toMatchObject({
      firstName: "Anna",
      roomId: "larch-junior-suite",
      selectedServices: [],
    });
  });

  it("calls onSubmitError when required fields are missing", async () => {
    const onSubmitError = vi.fn();
    const { result } = renderHook(() => usePersonalQuoteForm({ onSubmitError }));

    await result.current.onSubmit();

    await waitFor(() => {
      expect(onSubmitError).toHaveBeenCalledOnce();
    });

    expect(toast.error).toHaveBeenCalled();
  });

  it("shows a toast with validation messages when submit fails without a handler", async () => {
    const { result } = renderHook(() => usePersonalQuoteForm());

    await result.current.onSubmit();

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });

    const [message] = vi.mocked(toast.error).mock.calls[0];
    expect(typeof message).toBe("string");
    expect(String(message).length).toBeGreaterThan(0);
  });
});
