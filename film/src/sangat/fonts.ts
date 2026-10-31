// Brand fonts, self-hosted (SIL OFL, licences in public/sangat/fonts). Loaded once, before the first frame.
import { continueRender, delayRender, staticFile } from "remotion";

const FACES: [string, string, string, string][] = [
  ["Playfair Display", "playfair-display-latin-400-normal.woff2", "400", "normal"],
  ["Playfair Display", "playfair-display-latin-400-italic.woff2", "400", "italic"],
  ["Playfair Display", "playfair-display-latin-600-normal.woff2", "600", "normal"],
  ["Libre Caslon Text", "libre-caslon-text-latin-400-normal.woff2", "400", "normal"],
  ["Inter", "inter-latin-400-normal.woff2", "400", "normal"],
  ["Inter", "inter-latin-500-normal.woff2", "500", "normal"],
  ["Noto Serif Devanagari", "noto-serif-devanagari-devanagari-400-normal.woff2", "400", "normal"],
];

let started = false;
export const loadSangatFonts = () => {
  if (started || typeof document === "undefined") return;
  started = true;
  const handle = delayRender("Sangat fonts");
  Promise.all(
    FACES.map(([family, file, weight, style]) => {
      const f = new FontFace(family, `url(${staticFile(`sangat/fonts/${file}`)}) format("woff2")`, { weight, style });
      return f.load().then((loaded) => document.fonts.add(loaded));
    }),
  )
    .then(() => continueRender(handle))
    .catch((e) => {
      console.error(e);
      continueRender(handle);
    });
};
