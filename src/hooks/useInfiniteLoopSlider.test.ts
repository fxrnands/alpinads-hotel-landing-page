import { act, renderHook } from "@testing-library/react";
import type { TransitionEvent } from "react";
import { describe, expect, it } from "vitest";

import { useInfiniteLoopSlider } from "./useInfiniteLoopSlider";

function createTransformEvent(): TransitionEvent<HTMLDivElement> {
  const track = document.createElement("div");
  return {
    target: track,
    currentTarget: track,
    propertyName: "transform",
  } as unknown as TransitionEvent<HTMLDivElement>;
}

describe("useInfiniteLoopSlider", () => {
  it("triples slides for the loop strip", () => {
    const slides = ["a", "b", "c"] as const;
    const { result } = renderHook(() => useInfiniteLoopSlider(slides));
    expect(result.current.loopSlides).toEqual(["a", "b", "c", "a", "b", "c", "a", "b", "c"]);
  });

  it("steps translate by slide width plus gap", () => {
    const slides = ["a", "b"] as const;
    const { result } = renderHook(() =>
      useInfiniteLoopSlider(slides, { slideWidth: 100, slideHeight: 50, slideGap: 10 }),
    );
    expect(result.current.translatePx).toBe(220);

    act(() => {
      result.current.goNext();
    });
    expect(result.current.translatePx).toBe(330);
  });

  it("keeps the active slide when only centering width changes", () => {
    const slides = ["a", "b", "c"] as const;
    const { result, rerender } = renderHook(
      ({ centerWidth }: { centerWidth: number }) =>
        useInfiniteLoopSlider(slides, {
          slideWidth: 100,
          slideHeight: 100,
          slideGap: 10,
          centerInViewportWidth: centerWidth,
        }),
      { initialProps: { centerWidth: 400 } },
    );

    act(() => {
      result.current.goNext();
      result.current.goNext();
    });
    const translateAfterSteps = result.current.translatePx;
    expect(translateAfterSteps).toBe(400);

    rerender({ centerWidth: 380 });
    expect(result.current.translatePx).toBeGreaterThan(300);
    expect(Math.abs(result.current.translatePx - translateAfterSteps)).toBeLessThan(30);
  });

  it("preserves logical slide when slide width changes", () => {
    const slides = ["a", "b", "c"] as const;
    const { result, rerender } = renderHook(
      ({ width }: { width: number }) =>
        useInfiniteLoopSlider(slides, {
          slideWidth: width,
          slideHeight: 100,
          slideGap: 10,
        }),
      { initialProps: { width: 100 } },
    );

    act(() => {
      result.current.goNext();
    });

    rerender({ width: 120 });
    expect(result.current.translatePx).toBe(520);
  });

  it("re-anchors clone index to the middle copy after transition end", () => {
    const slides = ["a", "b", "c"] as const;
    const { result } = renderHook(() =>
      useInfiniteLoopSlider(slides, {
        slideWidth: 100,
        slideHeight: 100,
        slideGap: 10,
      }),
    );

    act(() => {
      result.current.goNext();
      result.current.goNext();
      result.current.goNext();
    });

    expect(result.current.translatePx).toBe(660);

    act(() => {
      result.current.onTrackTransitionEnd(createTransformEvent());
    });

    expect(result.current.translatePx).toBe(330);
  });

  it("re-anchors on transition cancel when the step is interrupted", () => {
    const slides = ["a", "b", "c"] as const;
    const { result } = renderHook(() =>
      useInfiniteLoopSlider(slides, {
        slideWidth: 100,
        slideHeight: 100,
        slideGap: 10,
      }),
    );

    act(() => {
      result.current.goNext();
      result.current.goNext();
      result.current.goNext();
    });

    expect(result.current.translatePx).toBe(660);

    act(() => {
      result.current.onTrackTransitionCancel(createTransformEvent());
    });

    expect(result.current.translatePx).toBe(330);
  });

  it("wraps backward from the first slide to the last logical slide", () => {
    const slides = ["a", "b", "c"] as const;
    const { result } = renderHook(() =>
      useInfiniteLoopSlider(slides, {
        slideWidth: 100,
        slideHeight: 100,
        slideGap: 10,
      }),
    );

    expect(result.current.translatePx).toBe(330);

    act(() => {
      result.current.goPrev();
    });

    expect(result.current.translatePx).toBe(220);

    act(() => {
      result.current.onTrackTransitionEnd(createTransformEvent());
    });

    expect(result.current.translatePx).toBe(550);
  });
});
