// Sangat launch film: the single source of truth for size, timing and brand values.
// Colours and fonts come from the Sangat brand system (brand/sangat/system/palette.md, typography.md).

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

// Scene durations in frames. TOTAL_FRAMES is computed, never typed.
export const SCENE = {
  beginning: 120, // 00:00 to 00:04  one grain in the dark
  land: 120, //      00:04 to 00:08  the landscape
  people: 150, //    00:08 to 00:13  cultivation
  journey: 150, //   00:13 to 00:18  harvest, milling, the pour
  reveal: 120, //    00:18 to 00:22  the 1 kg and 5 kg packs
  brand: 90, //      00:22 to 00:25  the brand frame
} as const;

export type SceneName = keyof typeof SCENE;
const ORDER: SceneName[] = ["beginning", "land", "people", "journey", "reveal", "brand"];

export const SCENE_START = ORDER.reduce(
  (acc, name, i) => {
    acc[name] = i === 0 ? 0 : acc[ORDER[i - 1]] + SCENE[ORDER[i - 1]];
    return acc;
  },
  {} as Record<SceneName, number>,
);

export const TOTAL_FRAMES = ORDER.reduce((s, n) => s + SCENE[n], 0);

// Scenes hand over to each other: each one mounts OVERLAP frames early and stays OVERLAP frames late,
// so transitions are continuous instead of cuts on the scene boundary.
export const OVERLAP = 18;

export const COLORS = {
  forest: "#0F3D2E",
  forestDeep: "#0A2E22",
  ivory: "#F9F6EE",
  gold: "#C9A96B",
  goldLight: "#E2CB97",
  earth: "#8B6F47",
  earthUi: "#7A5F3B",
  sage: "#A7B89F",
  stone: "#D9D4C8",
  ink: "#13231C",
  night: "#0B0805",
} as const;

export const FONTS = {
  display: "'Playfair Display', Georgia, serif",
  editorial: "'Libre Caslon Text', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
  deva: "'Noto Serif Devanagari', serif",
} as const;
