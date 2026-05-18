export function stabilizeMeasuredWidth(
  previousWidth: number,
  nextWidth: number,
  stableDeltaPx: number,
): number {
  if (previousWidth > 0 && Math.abs(previousWidth - nextWidth) < stableDeltaPx) {
    return previousWidth;
  }
  return nextWidth;
}
