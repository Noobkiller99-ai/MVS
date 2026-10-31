import React from "react";
import { AbsoluteFill, Html5Audio, Sequence, interpolate, staticFile } from "remotion";
import { COLORS, FONTS, OVERLAP, SCENE, SCENE_START, TOTAL_FRAMES } from "./tokens";
import { LINES } from "./script";
import { loadSangatFonts } from "./fonts";
import { Caption } from "./components/Caption";
import { FilmGrain } from "./components/FilmGrain";
import { LightLeak } from "./components/LightLeak";
import { Beginning } from "./scenes/Beginning";
import { Land } from "./scenes/Land";
import { People } from "./scenes/People";
import { Journey } from "./scenes/Journey";
import { Reveal } from "./scenes/Reveal";
import { Brand } from "./scenes/Brand";

loadSangatFonts();

export type SangatFilmProps = { farmerClip?: string | null; music?: string | null };

// "A grain. A journey. A Sangat." 25 s, 1080 x 1920, 30 fps.
// Scenes are stacked, not cut: each mounts OVERLAP frames before its start and leaves OVERLAP frames after its
// end, and owns its own entrance and exit, so every handover is continuous (see storyboard.md).
const mount = (name: keyof typeof SCENE) => {
  const from = Math.max(0, SCENE_START[name] - OVERLAP);
  const to = Math.min(TOTAL_FRAMES, SCENE_START[name] + SCENE[name] + OVERLAP);
  return { from, durationInFrames: to - from, offset: SCENE_START[name] - from };
};

const CAPTION_Y = { dark: 1300, light: 330 } as const;

export const SangatFilm: React.FC<SangatFilmProps> = ({ farmerClip = null, music = "sangat/audio/sangat-temp-score.wav" }) => {
  const m = {
    beginning: mount("beginning"), land: mount("land"), people: mount("people"),
    journey: mount("journey"), reveal: mount("reveal"), brand: mount("brand"),
  };
  return (
    <AbsoluteFill style={{ background: COLORS.night }}>
      <Sequence {...m.beginning} name="1 Beginning"><Beginning offset={m.beginning.offset} /></Sequence>
      <Sequence {...m.land} name="2 Land"><Land offset={m.land.offset} /></Sequence>
      <Sequence {...m.people} name="3 People"><People offset={m.people.offset} farmerClip={farmerClip} /></Sequence>
      <Sequence {...m.journey} name="4 Journey"><Journey offset={m.journey.offset} /></Sequence>
      <Sequence {...m.reveal} name="5 Reveal"><Reveal offset={m.reveal.offset} /></Sequence>
      <Sequence {...m.brand} name="6 Brand"><Brand offset={m.brand.offset} /></Sequence>

      {/* the grain's glow becomes the landscape's sunlight */}
      <LightLeak peak={SCENE_START.land + 2} rise={20} fall={26} strength={1} />

      {LINES.map((l) => (
        <Caption key={l.text} from={l.from} to={l.to} text={l.text} emphasis={l.emphasis}
          color={l.tone === "dark" ? COLORS.ivory : COLORS.forest} accent={l.tone === "dark" ? COLORS.goldLight : COLORS.earthUi}
          font={FONTS.display} size={70} y={CAPTION_Y[l.tone]}
          scrim={l.tone === "dark" ? "rgba(6,4,3,0.55)" : "rgba(249,246,238,0.7)"} />
      ))}

      <FilmGrain opacity={0.06} vignette={0.28} />
      {music ? (
        <Html5Audio src={staticFile(music)} volume={(f) =>
          interpolate(f, [0, 12, TOTAL_FRAMES - 30, TOTAL_FRAMES - 1], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      ) : null}
    </AbsoluteFill>
  );
};
