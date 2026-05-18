import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { HeroBookingQuotePrefill } from "@/lib/heroBookingPrefill";

type HeroBookingPrefillContextValue = {
  pendingQuotePrefill: Partial<HeroBookingQuotePrefill> | null;
  setQuotePrefill: (prefill: Partial<HeroBookingQuotePrefill>) => void;
  clearQuotePrefill: () => void;
};

const HeroBookingPrefillContext =
  createContext<HeroBookingPrefillContextValue | null>(null);

export function HeroBookingPrefillProvider({ children }: { children: ReactNode }) {
  const [pendingQuotePrefill, setPendingQuotePrefill] =
    useState<Partial<HeroBookingQuotePrefill> | null>(null);

  const setQuotePrefill = useCallback((prefill: Partial<HeroBookingQuotePrefill>) => {
    setPendingQuotePrefill(prefill);
  }, []);

  const clearQuotePrefill = useCallback(() => {
    setPendingQuotePrefill(null);
  }, []);

  const value = useMemo(
    () => ({ pendingQuotePrefill, setQuotePrefill, clearQuotePrefill }),
    [pendingQuotePrefill, setQuotePrefill, clearQuotePrefill],
  );

  return (
    <HeroBookingPrefillContext.Provider value={value}>
      {children}
    </HeroBookingPrefillContext.Provider>
  );
}

export function useHeroBookingPrefill(): HeroBookingPrefillContextValue {
  const context = useContext(HeroBookingPrefillContext);
  if (!context) {
    throw new Error(
      "useHeroBookingPrefill must be used within HeroBookingPrefillProvider",
    );
  }
  return context;
}
