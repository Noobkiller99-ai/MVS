/* Capture the film's 3D shots from the website scene: node film/capture/capture.mjs [shot ...]
   Needs the site server (npm start, port 8080). Writes film/public/sangat/footage/<shot>.mp4 (H.264, 30 fps). */
import { createRequire } from "node:module";
import { mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
// Playwright is preinstalled globally here; createRequire honours NODE_PATH (ESM imports do not).
const { chromium } = createRequire(import.meta.url)("playwright");
const OUT = join(HERE, "..", "public", "sangat", "footage");
const names = process.argv.slice(2).length ? process.argv.slice(2) : ["beginning", "cultivation", "journey"];
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"] });
for (const name of names) {
  const tmp = join(HERE, ".frames", name);
  rmSync(tmp, { recursive: true, force: true });
  mkdirSync(tmp, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto(`http://localhost:8080/film/capture/capture.html?shot=${name}`);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });
  const n = await page.evaluate(() => window.__frames);
  for (let f = 0; f < n; f++) {
    await page.evaluate((fr) => window.__render(fr), f);
    await page.screenshot({ path: join(tmp, String(f).padStart(4, "0") + ".png") });
    if (f % 15 === 0) console.log(name, f, "/", n);
  }
  await page.close();
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", "30", "-i", join(tmp, "%04d.png"),
    "-c:v", "libx264", "-crf", "14", "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart", join(OUT, `${name}.mp4`)]);
  console.log("wrote", join(OUT, `${name}.mp4`));
}
await browser.close();
