import React from "react";
import { Img } from "remotion";

// A stand-up pouch built from the real pack front artwork (never redrawn): the artwork clipped to a pouch
// silhouette, then curvature shading, a crimped top seal, a paper grain and a contact shadow.
// Ported from brand/sangat/tools/pouch.py so the film's packs match the brand mockups.
type Props = { src: string; width: number; height: number; kind: "1kg" | "5kg"; sheen?: number; behind?: string };

const clip = (w: number, h: number) => {
  const b = w * 0.018, r = w * 0.05;
  return `M0 0 L${w} 0 C${w + b} ${h * 0.35} ${w + b} ${h * 0.7} ${w - r * 0.2} ${h - r} Q${w - r * 0.6} ${h} ${w - r * 1.6} ${h} ` +
    `L${r * 1.6} ${h} Q${r * 0.6} ${h} ${r * 0.2} ${h - r} C${-b} ${h * 0.7} ${-b} ${h * 0.35} 0 0 Z`;
};

export const Pouch: React.FC<Props> = ({ src, width: w, height: h, kind, sheen = -1, behind = "#d9c3a0" }) => {
  const mm = kind === "1kg" ? h / 280 : h / 450;
  const cp = `path('${clip(w, h)}')`;
  return (
    <div style={{ position: "relative", width: w, height: h }}>
      <div style={{ position: "absolute", left: "4%", right: "4%", bottom: -h * 0.02, height: h * 0.05, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(40,25,10,0.55), rgba(40,25,10,0))", filter: "blur(6px)" }} />
      <div style={{ position: "absolute", inset: 0, clipPath: cp, overflow: "hidden",
        filter: "drop-shadow(0 30px 30px rgba(30,18,6,0.28))" }}>
        <Img src={src} style={{ position: "absolute", inset: 0, width: w, height: h }} />
        <div style={{ position: "absolute", inset: 0, mixBlendMode: "multiply", background:
          "linear-gradient(90deg, rgba(0,0,0,.30) 0%, rgba(0,0,0,.06) 9%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 70%, rgba(0,0,0,.08) 88%, rgba(0,0,0,.34) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, mixBlendMode: "screen", background:
          "linear-gradient(100deg, rgba(255,255,255,0) 18%, rgba(255,255,255,.12) 30%, rgba(255,255,255,0) 42%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 12 * mm, mixBlendMode: "overlay",
          background: "repeating-linear-gradient(90deg, rgba(255,255,255,.12) 0 2px, rgba(0,0,0,.16) 2px 4px)" }} />
        {kind === "1kg" ? (
          <div style={{ position: "absolute", left: "3%", right: "3%", top: 30 * mm, height: 3, borderRadius: 2,
            background: "linear-gradient(180deg, rgba(255,255,255,.2), rgba(0,0,0,.25))" }} />
        ) : (
          <div style={{ position: "absolute", left: "50%", top: 22 * mm, width: 80 * mm, height: 22 * mm, transform: "translateX(-50%)",
            borderRadius: 999, background: behind, boxShadow: "inset 0 4px 6px rgba(0,0,0,.35)" }} />
        )}
        {sheen >= 0 && sheen <= 1 ? (
          <div style={{ position: "absolute", top: 0, bottom: 0, width: w * 0.6, left: -w * 0.7 + sheen * w * 1.8,
            transform: "skewX(-18deg)", mixBlendMode: "screen",
            background: "linear-gradient(90deg, rgba(255,246,225,0) 0%, rgba(255,246,225,.22) 45%, rgba(255,250,235,.38) 50%, rgba(255,246,225,.22) 55%, rgba(255,246,225,0) 100%)" }} />
        ) : null}
      </div>
    </div>
  );
};
