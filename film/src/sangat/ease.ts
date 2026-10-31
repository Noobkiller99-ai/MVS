import { interpolate } from "remotion";

const C = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
/** Clamped interpolation (every time range in this film clamps both sides). */
export const lerpF = (f: number, a: number, b: number, from: number, to: number, ease?: (x: number) => number) => {
  const p = interpolate(f, [a, b], [0, 1], C);
  return from + (to - from) * (ease ? ease(p) : p);
};
export const smooth = (x: number) => x * x * (3 - 2 * x);
export const outCubic = (x: number) => 1 - Math.pow(1 - x, 3);
export const inOutCubic = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
export const inCubic = (x: number) => x * x * x;
