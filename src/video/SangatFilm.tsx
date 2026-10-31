import React from "react";
import {
  AbsoluteFill,
  Audio,
  Series,
  staticFile,
} from "remotion";
import { SCENE, TOTAL_FRAMES } from "./tokens";
import { fontStyles } from "./fonts";
import { Scene1Grain } from "./scenes/Scene1Grain";
import { Scene2Land } from "./scenes/Scene2Land";
import { Scene3People } from "./scenes/Scene3People";
import { Scene4Journey } from "./scenes/Scene4Journey";
import { Scene5Product } from "./scenes/Scene5Product";
import { Scene6Reveal } from "./scenes/Scene6Reveal";

export const SangatFilm: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#061A13",
        width: 1080,
        height: 1920,
        overflow: "hidden",
      }}
    >
      {/* Global Brand Typography */}
      <style>{fontStyles}</style>

      {/* Master 48kHz Stereo Soundtrack & Foley Audio */}
      <Audio
        src={staticFile("audio/sangat_launch_soundtrack.wav")}
        volume={1.0}
      />

      {/* Deterministic Scene Sequence */}
      <Series>
        {/* Scene 1: The Grain (0s - 4s | F0 - F119) */}
        <Series.Sequence durationInFrames={SCENE.grain}>
          <Scene1Grain />
        </Series.Sequence>

        {/* Scene 2: The Land (4s - 8s | F120 - F239) */}
        <Series.Sequence durationInFrames={SCENE.land}>
          <Scene2Land />
        </Series.Sequence>

        {/* Scene 3: The People (8s - 13s | F240 - F389) */}
        <Series.Sequence durationInFrames={SCENE.people}>
          <Scene3People />
        </Series.Sequence>

        {/* Scene 4: The Journey (13s - 18s | F390 - F539) */}
        <Series.Sequence durationInFrames={SCENE.journey}>
          <Scene4Journey />
        </Series.Sequence>

        {/* Scene 5: The Product (18s - 22s | F540 - F659) */}
        <Series.Sequence durationInFrames={SCENE.product}>
          <Scene5Product />
        </Series.Sequence>

        {/* Scene 6: The Brand Reveal (22s - 25s | F660 - F749) */}
        <Series.Sequence durationInFrames={SCENE.reveal}>
          <Scene6Reveal />
        </Series.Sequence>
      </Series>

      {/* Cinematic Film Grain & Micro-Texture Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.035,
          pointerEvents: "none",
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0) 1px, rgba(201, 169, 107, 0.4) 1px)`,
          backgroundSize: "4px 4px",
          mixBlendMode: "overlay",
          zIndex: 90,
        }}
      />
    </AbsoluteFill>
  );
};
