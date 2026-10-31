/* The film's 3D shots, as story positions in the website's grain scene. Each shot lists keyframe names (the site's
   own, or ones defined here from a base), a background painted behind the transparent canvas, a frame count at
   30 fps and an easing for the move. Positions are fractions of the frame (fx, fy). */
const smooth = (u) => u * u * (3 - 2 * u);
const inOut = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);

export const SHOTS = {
  /* Scene 1: one milled grain in the dark, golden key light, slow push in. */
  beginning: {
    frames: 150, time0: 0.6, timeRate: 0.55, fx: 0.5, fy: 0.47, ease: smooth,
    background: "radial-gradient(60% 42% at 50% 46%, #2a1c10 0%, #120c07 55%, #060403 100%)",
    keys: ["darkWide", "darkClose"],
    define: {
      darkWide: { base: "hero", fog: "#0b0805", frame: [0.44, 0.44], yaw: 0.05, pitch: 0.04, motes: 0.32,
        key: 3.4, keyColor: "#FFC98A", rim: 4.4, rimColor: "#FFB45C", hemi: 0.04, env: 0.12, exposure: 0.78 },
      darkClose: { base: "hero", fog: "#0b0805", frame: [0.27, 0.27], yaw: 0.6, pitch: 0.1, motes: 0.38,
        key: 3.8, keyColor: "#FFD39A", rim: 4.8, rimColor: "#FFBA66", hemi: 0.06, env: 0.16, exposure: 0.84 }
    }
  },
  /* Scene 3: the panicle over paddy water, ripening from green to gold as the camera drifts. */
  cultivation: {
    frames: 165, time0: 2, timeRate: 1, fx: 0.5, fy: 0.5, ease: smooth,
    background: "linear-gradient(180deg, #f3efe2 0%, #e6e4d2 45%, #cfd3bd 100%)",
    keys: ["fieldA", "fieldB"],
    define: {
      fieldA: { base: "practicesA", frame: [3.2, 5.0], yaw: -0.42, ripe: 0.3, fog: "#E7E6D6" },
      fieldB: { base: "practicesB", frame: [2.6, 4.2], yaw: 0.32, ripe: 0.95, fog: "#E7E2CC" }
    }
  },
  /* Scene 4: harvest, the heap, milling and the pour into the pack. */
  journey: {
    frames: 165, time0: 4, timeRate: 1, fx: 0.5, fy: 0.5, ease: inOut,
    background: "linear-gradient(180deg, #f4efe3 0%, #e9e1cf 60%, #dccfb3 100%)",
    keys: ["j1", "j2", "j3", "j4"],
    define: {
      j1: { base: "journey1", frame: [3.0, 5.0] },
      j2: { base: "journey2", frame: [1.8, 2.8] },
      j3: { base: "journey3", frame: [1.5, 2.4] },
      j4: { base: "journey4", frame: [2.4, 4.0] }
    }
  }
};
