// The film's on-screen words, frame-timed in ABSOLUTE frames (they are drawn above the scene stack).
// Copy is the brief's, verbatim. No claim is made beyond it.
import { SCENE_START } from "./tokens";

export type Line = { from: number; to: number; text: string; emphasis?: string; tone: "dark" | "light" };

export const LINES: Line[] = [
  { from: SCENE_START.beginning + 38, to: SCENE_START.beginning + 92, text: "Every grain has a beginning.", emphasis: "beginning.", tone: "dark" },
  { from: SCENE_START.land + 26, to: SCENE_START.land + 108, text: "Rooted in the land.", emphasis: "land.", tone: "light" },
  { from: SCENE_START.people + 30, to: SCENE_START.people + 140, text: "Grown through shared effort.", emphasis: "shared effort.", tone: "light" },
  { from: SCENE_START.journey + 34, to: SCENE_START.journey + 140, text: "A journey shaped by care.", emphasis: "care.", tone: "light" },
];
