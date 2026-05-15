import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useInfiniteLoopSlider } from "./useInfiniteLoopSlider";

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

  it("centers the active slide when centerInViewportWidth is set", () => {
    const slides = ["a", "b"] as const;
    const { result } = renderHook(() =>
      useInfiniteLoopSlider(slides, {
        slideWidth: 100,
        slideHeight: 100,
        slideGap: 10,
        centerInViewportWidth: 400,
      }),
    );
    expect(result.current.translatePx).toBe(70);

    act(() => {
      result.current.goNext();
    });
    expect(result.current.translatePx).toBe(180);
  });
});
