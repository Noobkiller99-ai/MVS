# Sangat launch reel

"A grain. A journey. A Sangat." A 25 second vertical brand film for Instagram Reels, built as code in Remotion.

| | |
|---|---|
| Composition | `SangatLaunchReel` (Remotion Studio folder "Sangat") |
| Format | 1080 x 1920, 30 fps, 750 frames, 25.0 s, H.264 High, yuv420p, BT.709, AAC 48 kHz stereo |
| Final film | `deliverables/sangat/sangat-launch-reel-9x16.mp4` |
| Poster | `deliverables/sangat/sangat-launch-reel-poster.png` (2160 x 3840) and `-poster-1080.jpg` |
| Storyboard | `docs/sangat/storyboard.md` and `deliverables/sangat/sangat-launch-reel-storyboard.png` |
| Assets | `docs/sangat/asset-inventory.md` (what is used, its source and licence, what is missing) |

## How it was made

The production method is [sub-level/marketing-videos](https://github.com/sub-level/marketing-videos) (MIT): this
`film/` folder is its Remotion scaffold, and its five skills are installed in `.claude/skills/`. The shot and
transition grammar comes from [video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) (Apache-2.0,
installed in `.claude/skills/video-shotcraft`): the multiplane depth move (scene 2), the hidden cut under a warm
light leak (scene 1 to 2), light play on the packs (scene 5), the wordmark lockup and the rule to hold the brand
frame for at least a second (scene 6).

The grain is the same 3D grain as the website. `src/grain-scene.js` gained a capture mode (`story.capture`) that
renders exact camera positions on demand, and `capture/capture.mjs` films it frame by frame. So the film's
protagonist, light and materials are the brand's own, and no AI footage was needed.

## Layout

```
film/
  src/sangat/
    tokens.ts            FPS, size, SCENE lengths (TOTAL_FRAMES is computed), OVERLAP, brand colours and fonts
    script.ts            the four on-screen lines, frame-timed
    SangatFilm.tsx       the stack of six scenes, the light leak, captions, grain, music
    fonts.ts, ease.ts    font loading, clamped easing helpers
    components/          Caption, FilmGrain, LightLeak, Pouch (reusable)
    scenes/              Beginning, Land, People, Journey, Reveal, Brand
  capture/               capture.html + shots.js + capture.mjs: films the website's 3D scene
  scripts/
    prepare_assets.py    copies the brand assets in from brand/sangat (landscape layers, packs, logo, fonts)
    score.py             writes the original temporary score
    review-stills.sh     renders stills at given frames and tiles them for review
    render-supersampled.sh  the delivery render: 2x, Lanczos down, BT.709
  public/sangat/         footage, landscape, packs, logo, fonts, audio
  docs/sangat/           this README, the storyboard, the asset inventory
  deliverables/sangat/   the final MP4, poster and storyboard strip
```

## Set up

Needs Node 20 or later, ffmpeg, Python 3 with `cairosvg`, `numpy` and `Pillow`.

```bash
cd film
npm install
```

Optional: rebuild the assets (they are committed, so this is only needed after the brand files change).

```bash
python3 scripts/prepare_assets.py
python3 scripts/score.py
```

Re-film the 3D shots: start the website server from the repository root (`npm start`, port 8080), then

```bash
NODE_PATH=$(npm root -g) node capture/capture.mjs beginning cultivation journey
```

## Preview and render

```bash
npm run dev
```

Open the "Sangat" folder, composition `SangatLaunchReel`. Review stills at chosen frames:

```bash
scripts/review-stills.sh 20 170 330 470 600 745
```

The delivery render (supersampled, about 15 minutes on 4 cores):

```bash
scripts/render-supersampled.sh SangatLaunchReel
```

It writes `out/masters/sangat-launch-reel-9x16.mp4`; copy it to `deliverables/sangat/` when approved.

On a machine behind a TLS-intercepting proxy (Remotion's browser fails with `ERR_CERT_AUTHORITY_INVALID`), or to use
a particular Chrome, pass the extra flags through the environment:

```bash
REMOTION_EXTRA_FLAGS="--ignore-certificate-errors --browser-executable=/path/to/chrome-headless-shell" scripts/render-supersampled.sh SangatLaunchReel
```

## Swapping in the missing pieces

Both are props on the composition, so neither needs a code change.

Real farmer footage (scene 3). Put the clip in `public/sangat/footage/`; it plays first and dissolves into the paddy:

```bash
npx remotion render SangatLaunchReel out/with-farmers.mp4 --props='{"farmerClip":"sangat/footage/farmers.mp4"}'
```

A licensed music track instead of the temporary score. Licensed audio stays in `public/audio/`, which git ignores:

```bash
npx remotion render SangatLaunchReel out/licensed.mp4 --props='{"music":"audio/sangat-licensed.wav"}'
```

Pass the same `--props` to `render-supersampled.sh` by adding them to `REMOTION_EXTRA_FLAGS`.

## Changing the film

- Retime a scene: edit `SCENE` in `tokens.ts`. Everything else, including caption timing, follows from it.
- Change a line: `script.ts`. Keep each line on screen for at least its reading time plus a beat.
- Colours and fonts: `tokens.ts` only.

## Checks run on the final render

- ffprobe: 1080 x 1920, 30/1 fps, 750 video frames, 25.000 s, yuv420p, BT.709; AAC 48 kHz stereo; -16.3 LUFS integrated, -3.0 dBFS peak.
- A half-second frame strip of the finished file reviewed beat by beat (the storyboard strip).
- `npm run typecheck` passes.
- No em-dashes in on-screen copy, code or docs; every time interpolation clamps; TOTAL_FRAMES computed.

## Known limits of this cut

- Scene 3 shows cultivation, not the farmers, because no authentic footage was supplied (see the asset inventory).
- The music is an original temporary score, not a licensed Indian instrumental.
- No sound effects.
- Portrait only (the brief asked for a Reel); marketing-videos normally ships a 16:9 edition too.
