import { useEffect } from "react";

import { resolveSectionScrollTarget } from "@/lib/sections/resolveScrollTarget";
import type { SectionId } from "@/app/sections";
import {
  initSmoothScrolling,
  parseHashTargetId,
  scrollToElementId,
} from "@/utils/smoothScroll";

function stripHashFromUrl(): void {
  const { pathname, search } = window.location;
  history.replaceState(null, "", `${pathname}${search}`);
}

function scrollFromLegacyHash(hash: string): void {
  const sectionId = parseHashTargetId(hash) as SectionId | null;
  if (!sectionId) {
    return;
  }

  const run = () => scrollToElementId(resolveSectionScrollTarget(sectionId));

  requestAnimationFrame(() => {
    requestAnimationFrame(run);
  });
}

export function useSmoothScroll(): void {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      scrollFromLegacyHash(hash);
      stripHashFromUrl();
    }

    return initSmoothScrolling();
  }, []);
}
