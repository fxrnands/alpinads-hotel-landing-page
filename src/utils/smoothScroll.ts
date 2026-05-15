import {
  initLenisScroll,
  isLenisActive,
  lenisScrollTo,
} from "@/lib/smoothScroll";

import { prefersReducedMotion } from "./motionPreference";

export { prefersReducedMotion } from "./motionPreference";

export function getScrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

export function parseHashTargetId(hash: string): string | null {
  if (!hash || hash === "#") {
    return null;
  }

  return hash.startsWith("#") ? hash.slice(1) : hash;
}

export function initSmoothScrolling(): () => void {
  let disposed = false;
  let destroyLenis: (() => void) | undefined;

  void initLenisScroll().then((destroy) => {
    if (disposed) {
      destroy();
      return;
    }

    destroyLenis = destroy;
  });

  return () => {
    disposed = true;
    destroyLenis?.();
  };
}

export function scrollToTop(): void {
  if (lenisScrollTo(0)) {
    return;
  }

  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}

export function scrollToElement(
  element: HTMLElement,
  options?: ScrollIntoViewOptions,
): void {
  if (lenisScrollTo(element, { offset: 0 })) {
    return;
  }

  element.scrollIntoView({
    behavior: getScrollBehavior(),
    block: "start",
    ...options,
  });
}

export function scrollToElementId(
  id: string,
  options?: ScrollIntoViewOptions,
): boolean {
  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  scrollToElement(element, options);
  return true;
}

export function scrollToHash(
  hash: string,
  options?: ScrollIntoViewOptions,
): boolean {
  const targetId = parseHashTargetId(hash);

  if (!targetId) {
    scrollToTop();
    return true;
  }

  if (lenisScrollTo(`#${targetId}`, { offset: 0 })) {
    return true;
  }

  return scrollToElementId(targetId, options);
}

function isSamePageHashLink(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute("href");
  if (!href?.startsWith("#")) {
    return false;
  }

  const url = new URL(href, window.location.href);
  return url.pathname === window.location.pathname;
}

export function setupSmoothScrollAnchors(
  root: HTMLElement | Document = document,
): () => void {
  const handleClick = (event: Event) => {
    const anchor = (event.target as Element | null)?.closest("a[href^='#']");
    if (!(anchor instanceof HTMLAnchorElement) || !isSamePageHashLink(anchor)) {
      return;
    }

    const href = anchor.getAttribute("href");
    if (!href) {
      return;
    }

    const targetId = parseHashTargetId(href);
    if (targetId && !document.getElementById(targetId)) {
      return;
    }

    event.preventDefault();
    scrollToHash(href);
    history.pushState(null, "", href);
  };

  root.addEventListener("click", handleClick);
  return () => root.removeEventListener("click", handleClick);
}

export function scrollToInitialHash(): void {
  const { hash } = window.location;
  if (!hash) {
    return;
  }

  const scroll = () => {
    scrollToHash(hash);
  };

  if (isLenisActive()) {
    requestAnimationFrame(() => {
      requestAnimationFrame(scroll);
    });
    return;
  }

  requestAnimationFrame(scroll);
}
