// SANGAT BRAND LAUNCH FILM — MASTER TOKENS & TIMING SPECIFICATION
// Resolution: 1080 x 1920 (Instagram Reels 9:16) @ 30 FPS
// Total Duration: Exactly 25 seconds = 750 frames

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

// Alternate aspect ratios for multi-format mastering
export const WIDTH_4_5 = 1080;
export const HEIGHT_4_5 = 1350;
export const WIDTH_16_9 = 1920;
export const HEIGHT_16_9 = 1080;

// Sangat Official Color System (from brand/sangat/system/palette.json)
export const COLORS = {
  // Primary
  forest: "#0F3D2E",      // Deep Forest Green
  forestDeep: "#0A2E22",  // Darkest Grounds / Footers
  forestDark: "#061A13",  // Background shadow depth

  // Background & Canvas
  ivory: "#F9F6EE",       // Warm Ivory Canvas
  ivoryLight: "#FCFAF6",  // Pure Highlight Ivory
  stone: "#D9D4C8",       // Neutral Rules & Borders

  // Accents
  gold: "#C9A96B",        // Sunehra Gold
  goldLight: "#E2CB97",   // Rice Ear Highlights
  goldDark: "#9E7B3B",    // Metallic Shadow

  // Earth & Agriculture
  earth: "#8B6F47",       // Earth Brown
  earthUI: "#7A5F3B",     // Earth Brown for high-contrast text
  sage: "#A7B89F",        // Sage Green (Twin leaf companion)

  // Typography
  ink: "#13231C",         // Primary Body Ink
  white: "#FFFFFF",
} as const;

// Typography Hierarchy
export const FONTS = {
  display: "'Playfair Display', Georgia, serif",
  editorial: "'Libre Caslon Text', Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  devanagari: "'Noto Serif Devanagari', serif",
} as const;

// Mobile Safe Zone Margins (Instagram Reels 9:16)
export const SAFE_ZONE = {
  top: 180,       // Avoid Instagram profile header
  bottom: 340,    // Avoid caption, music track, and comment bar
  left: 70,
  right: 120,     // Avoid like, comment, share action buttons
} as const;

// Scene Durations in Frames @ 30 FPS
// S1: The Grain         0:00 - 0:04  (4.0s = 120 frames)
// S2: The Land          0:04 - 0:08  (4.0s = 120 frames)
// S3: The People        0:08 - 0:13  (5.0s = 150 frames)
// S4: The Journey       0:13 - 0:18  (5.0s = 150 frames)
// S5: The Product       0:18 - 0:22  (4.0s = 120 frames)
// S6: The Brand Reveal  0:22 - 0:25  (3.0s = 90 frames)
export const SCENE = {
  grain: 120,
  land: 120,
  people: 150,
  journey: 150,
  product: 120,
  reveal: 90,
} as const;

// Total Frames: Exactly 750 frames = 25.0s
export const TOTAL_FRAMES =
  SCENE.grain +
  SCENE.land +
  SCENE.people +
  SCENE.journey +
  SCENE.product +
  SCENE.reveal;

// Absolute Start Frames for Global Timeline Alignment
export const SCENE_START = {
  grain: 0,
  land: SCENE.grain,
  people: SCENE.grain + SCENE.land,
  journey: SCENE.grain + SCENE.land + SCENE.people,
  product: SCENE.grain + SCENE.land + SCENE.people + SCENE.journey,
  reveal: SCENE.grain + SCENE.land + SCENE.people + SCENE.journey + SCENE.product,
} as const;
