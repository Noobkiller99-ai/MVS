# Audio files not committed here

This skill is a copy of https://github.com/Vincentwei1021/video-shotcraft (Apache-2.0, see `LICENSE`), with every
file preserved except its 16 MP3s:

- `assets/audio/bgm/*.mp3` (5 music beds, Mixkit Stock Music Free License)
- `template/public/audio/*.mp3` (11 sound effects, Mixkit SFX Free License or unverified)

Their own `ATTRIBUTION.md` files (kept) say they are not covered by the repository's Apache-2.0 licence, and some
sources could not be verified, so this repository does not redistribute them. The Sangat film does not use them.

To restore them for the Ink Press template or the beat-sync references:

    git clone --depth 1 https://github.com/Vincentwei1021/video-shotcraft /tmp/video-shotcraft
    cp /tmp/video-shotcraft/assets/audio/bgm/*.mp3 .claude/skills/video-shotcraft/assets/audio/bgm/
    cp /tmp/video-shotcraft/template/public/audio/*.mp3 .claude/skills/video-shotcraft/template/public/audio/
