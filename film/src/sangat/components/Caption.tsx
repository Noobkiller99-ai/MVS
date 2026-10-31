import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

// The film's captions: one serif line, word by word (rise, blur, fade), the emphasis in gold, a soft out.
// Takes explicit colours and sizes; knows nothing about the film's tokens.
type Props = {
  from: number; to: number; text: string; emphasis?: string;
  color: string; accent: string; font: string; size: number; y: number; scrim?: string;
};

const STAGGER = 3;
const WORD_IN = 14;
const OUT = 14;

export const Caption: React.FC<Props> = ({ from, to, text, emphasis, color, accent, font, size, y, scrim }) => {
  const frame = useCurrentFrame();
  if (frame < from - 2 || frame > to + OUT + 2) return null;
  const words = text.split(" ");
  const emph = new Set<number>();
  if (emphasis) {
    const ew = emphasis.split(" ");
    const start = words.findIndex((_, i) => ew.every((w, j) => words[i + j] === w));
    if (start >= 0) ew.forEach((_, j) => emph.add(start + j));
  }
  const out = interpolate(frame, [to, to + OUT], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const outY = interpolate(frame, [to, to + OUT], [0, -10], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: 0, right: 0, top: y, display: "flex", justifyContent: "center", opacity: out, transform: `translateY(${outY}px)` }}>
      {scrim ? (
        <div style={{ position: "absolute", left: "50%", top: "50%", width: 1100, height: size * 3.2, transform: "translate(-50%,-50%)",
          background: `radial-gradient(closest-side, ${scrim}, transparent)` }} />
      ) : null}
      <div style={{ position: "relative", fontFamily: font, fontSize: size, lineHeight: 1.15, color, textAlign: "center",
        maxWidth: 900, letterSpacing: "-0.005em", fontWeight: 400 }}>
        {words.map((w, i) => {
          const f0 = from + i * STAGGER;
          const p = interpolate(frame, [f0, f0 + WORD_IN], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const e = 1 - Math.pow(1 - p, 3);
          return (
            <span key={i} style={{ display: "inline-block", whiteSpace: "pre", opacity: e, color: emph.has(i) ? accent : color,
              fontStyle: emph.has(i) ? "italic" : "normal",
              transform: `translateY(${(1 - e) * 22}px)`, filter: `blur(${(1 - e) * 8}px)` }}>
              {w}{i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
};
