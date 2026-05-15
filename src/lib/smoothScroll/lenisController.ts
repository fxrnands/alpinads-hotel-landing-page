import { prefersReducedMotion } from "@/utils/motionPreference";

type LenisInstance = InstanceType<(typeof import("lenis"))["default"]>;

let lenisInstance: LenisInstance | null = null;
let animationFrameId = 0;
let lenisLoadPromise: Promise<typeof import("lenis")> | null = null;

function loadLenis() {
  lenisLoadPromise ??= import("lenis");
  return lenisLoadPromise;
}

export function getLenisInstance(): LenisInstance | null {
  return lenisInstance;
}

export function isLenisActive(): boolean {
  return lenisInstance !== null;
}

export async function initLenisScroll(): Promise<() => void> {
  if (prefersReducedMotion() || lenisInstance) {
    return () => undefined;
  }

  const { default: Lenis } = await loadLenis();

  const lenisOptions: ConstructorParameters<typeof Lenis>[0] = {
    duration: 1.15,
    smoothWheel: true,
    touchMultiplier: 1.1,
    easing: (value) => Math.min(1, 1.001 - 2 ** (-10 * value)),
  };

  lenisInstance = new Lenis(lenisOptions);

  const onFrame = (time: number) => {
    lenisInstance?.raf(time);
    animationFrameId = requestAnimationFrame(onFrame);
  };

  animationFrameId = requestAnimationFrame(onFrame);

  return () => {
    cancelAnimationFrame(animationFrameId);
    lenisInstance?.destroy();
    lenisInstance = null;
  };
}

export function lenisScrollTo(
  target: string | number | HTMLElement,
  options?: Parameters<LenisInstance["scrollTo"]>[1],
): boolean {
  if (!lenisInstance) {
    return false;
  }

  lenisInstance.scrollTo(target, options);
  return true;
}
