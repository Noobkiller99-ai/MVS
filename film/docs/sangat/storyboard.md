# Sangat launch reel: storyboard

"A grain. A journey. A Sangat." 25.0 s, 1080 x 1920, 30 fps, 750 frames. One basmati grain is the protagonist
from the first frame to the pack.

The strip `deliverables/sangat/sangat-launch-reel-storyboard.png` shows the finished film at every half second.
Frame numbers are absolute (frame = seconds x 30). Scene lengths live in `src/sangat/tokens.ts`; every scene mounts
18 frames early and leaves 18 frames late (`OVERLAP`), so no handover is a hard cut.

| # | Time | Frames | Picture | Camera and motion | Words on screen | Handover out | Sound (temp score) |
|---|---|---|---|---|---|---|---|
| 1 | 00:00.0 to 00:04.0 | 0 to 119 | One basmati grain in the dark, lit by a warm key from above left; slow dust in the light | Grain emerges from black (0 to 1.4 s), the camera closes from a wide to a macro frame (3D capture), gold glow behind it | 1.27 to 3.07 s: "Every grain has a *beginning.*" (ivory on dark, lower third) | Push in x3.2 while the grain's glow burns to white; a warm light leak peaks at 4.07 s and hides the change | Tanpura drone breathes in, one low piano note at 1.2 s |
| 2 | 00:04.0 to 00:08.0 | 120 to 239 | The client's master landscape (sky, hills, trees, farmhouse, fields, foliage, rice ears) | Multiplane parallax across seven layers, pan and settle from 1.18x to 1.0x; the layers align as the move ends so the resting frame is the artwork itself; haze and a warm sun | 4.87 to 7.6 s: "Rooted in the *land.*" (forest on ivory, upper third) | The camera pushes through the foreground rice ears (they blur past the lens) into scene 3 | Piano phrase in raga Bhupali, wind and water bed |
| 3 | 00:08.0 to 00:13.0 | 240 to 389 | Rice plants in a flooded paddy, ripples at their feet, ears filling with grain | Slow 3D dolly between two framings, a gentle drift | 9.0 to 12.67 s: "Grown through *shared effort.*" | The ears let go of their grains, which fall into scene 4 | The phrase answers itself, a low string pad enters |
| 4 | 00:13.0 to 00:18.0 | 390 to 539 | Harvest: falling paddy grains gather; milling: the husk falls away and the grains turn white; the pour: polished grain streams down into the pack | Four keyframed 3D framings (j1 to j4), each a match on the grain's position | 14.13 to 17.67 s: "A journey shaped by *care.*" | Match cut: the 3D pack becomes the artwork pack at the same position and size | Strings open into a chord, piano notes quicken |
| 5 | 00:18.0 to 00:22.0 | 540 to 659 | The 5 kg and 1 kg packs, faithful to the packaging-v3 artwork (V1 Ivory Landscape, rice window filled), standing on a warm table | Ease from the match-cut frame into a two-pack product shot, a soft light sheen crosses both packs | none (the packs speak) | The packs dissolve into ivory as the wordmark wipes in over them | The swell peaks under the reveal |
| 6 | 00:22.0 to 00:25.0 | 660 to 749 | Ivory ground, the Sangat wordmark, the gold rice ear, a gold rule, the tagline | Letters wipe in left to right and rise, the ear grows from its stem, the rule draws, the tagline tracks in from wide to its set spacing; held still from 24.0 s (the brand frame holds for over a second) | "Sanjhi Soch, Sunehra Kal" (Libre Caslon Text, Earth Brown) | End | One resolving chord, a high bell note on the ear, decay to silence at 25.0 s |

## Rules the cut follows

- One protagonist: the grain is in every scene until it becomes the product in the pack.
- Continuous transitions only: a hidden cut under a light leak (1 to 2), a push through the foreground (2 to 3),
  falling grain (3 to 4), a match cut on the pack (4 to 5), a dissolve under the wordmark wipe (5 to 6).
- Captions are the brief's four lines, verbatim, at 70 px Playfair Display, each on screen for 1.8 s or more, each in
  the half of the frame the picture leaves empty.
- Nothing on screen claims anything beyond the brief's own words.
