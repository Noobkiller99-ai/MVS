import React from "react";
import { Composition, Folder } from "remotion";
import { FPS, HEIGHT, SCENE, TOTAL_FRAMES, WIDTH } from "./tokens";
import { SangatFilm } from "./SangatFilm";
import { TestComposition } from "./TestComposition";
import { Scene1Grain } from "./scenes/Scene1Grain";
import { Scene2Land } from "./scenes/Scene2Land";
import { Scene3People } from "./scenes/Scene3People";
import { Scene4Journey } from "./scenes/Scene4Journey";
import { Scene5Product } from "./scenes/Scene5Product";
import { Scene6Reveal } from "./scenes/Scene6Reveal";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Master 25-Second Instagram Launch Film */}
      <Composition
        id="SangatFilm"
        component={SangatFilm}
        durationInFrames={TOTAL_FRAMES} // Exactly 750 frames = 25.0s
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* 5-Second Verification Composition */}
      <Composition
        id="TestComposition"
        component={TestComposition}
        durationInFrames={150}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Individual Scene Compositions for Isolated Preview & Editing */}
      <Folder name="Scenes">
        <Composition
          id="Scene1-Grain"
          component={Scene1Grain}
          durationInFrames={SCENE.grain}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="Scene2-Land"
          component={Scene2Land}
          durationInFrames={SCENE.land}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="Scene3-People"
          component={Scene3People}
          durationInFrames={SCENE.people}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="Scene4-Journey"
          component={Scene4Journey}
          durationInFrames={SCENE.journey}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="Scene5-Product"
          component={Scene5Product}
          durationInFrames={SCENE.product}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="Scene6-Reveal"
          component={Scene6Reveal}
          durationInFrames={SCENE.reveal}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
    </>
  );
};
