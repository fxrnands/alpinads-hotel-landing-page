import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useBoundedSlider } from "./useBoundedSlider";

describe("useBoundedSlider", () => {
  it("does not loop past the last slide", () => {
    const { result } = renderHook(() =>
      useBoundedSlider(3, { slideWidth: 100, slideHeight: 100, slideGap: 10 }),
    );

    expect(result.current.canGoNext).toBe(true);

    act(() => {
      result.current.goNext();
      result.current.goNext();
    });

    expect(result.current.activeIndex).toBe(2);
    expect(result.current.canGoNext).toBe(false);
    expect(result.current.translatePx).toBe(220);
  });

  it("does not loop before the first slide", () => {
    const { result } = renderHook(() =>
      useBoundedSlider(3, { slideWidth: 100, slideHeight: 100, slideGap: 10 }),
    );

    expect(result.current.canGoPrev).toBe(false);

    act(() => {
      result.current.goPrev();
    });

    expect(result.current.activeIndex).toBe(0);
    expect(result.current.translatePx).toBe(0);
  });
});
