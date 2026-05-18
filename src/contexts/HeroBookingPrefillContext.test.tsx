import { renderHook, act } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

import {
  HeroBookingPrefillProvider,
  useHeroBookingPrefill,
} from "./HeroBookingPrefillContext";

function wrapper({ children }: { children: ReactNode }) {
  return <HeroBookingPrefillProvider>{children}</HeroBookingPrefillProvider>;
}

describe("HeroBookingPrefillContext", () => {
  it("stores and clears pending prefill", () => {
    const { result } = renderHook(() => useHeroBookingPrefill(), { wrapper });

    expect(result.current.pendingQuotePrefill).toBeNull();

    act(() => {
      result.current.setQuotePrefill({
        guests: { adults: 2, children: 0 },
      });
    });

    expect(result.current.pendingQuotePrefill).toEqual({
      guests: { adults: 2, children: 0 },
    });

    act(() => {
      result.current.clearQuotePrefill();
    });

    expect(result.current.pendingQuotePrefill).toBeNull();
  });

  it("throws when used outside the provider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => {
      renderHook(() => useHeroBookingPrefill());
    }).toThrow(/HeroBookingPrefillProvider/);

    consoleError.mockRestore();
  });
});
