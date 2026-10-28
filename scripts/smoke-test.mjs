// Smoke test: loads the site in Chromium (desktop + mobile, normal / reduced motion / no WebGL),
// scrolls through every story keyframe, saves screenshots to test-output/ and fails on
// console errors or horizontal overflow.
//   npm start            (in one terminal)
//   npm test             (needs Playwright: npm i -D playwright && npx playwright install chromium)
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright"); // works with a local or global install
import { mkdir } from "node:fs/promises";

const BASE = process.env.BASE_URL || "http://localhost:8080/";
const OUT = new URL("../test-output/", import.meta.url).pathname;
const ONLY = process.env.ONLY ? process.env.ONLY.split(",") : null;
await mkdir(OUT, { recursive: true });

const runs = [
  { name: "desktop", viewport: { width: 1440, height: 900 } },
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
  { name: "desktop-reduced", viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" },
  { name: "mobile-nowebgl", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, noWebgl: true }
].filter(r => !ONLY || ONLY.includes(r.name));

const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const problems = [];

for (const run of runs) {
  const ctx = await browser.newContext({ viewport: run.viewport, isMobile: run.isMobile, hasTouch: run.hasTouch, reducedMotion: run.reducedMotion || "no-preference", deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", e => errors.push(String(e)));
  if (run.noWebgl) await page.addInitScript(() => {
    const orig = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...a) { return /webgl/.test(type) ? null : orig.call(this, type, ...a); };
  });
  await page.goto(BASE, { waitUntil: "load" });
  const has3d = await page.waitForFunction(() => document.documentElement.classList.contains("has-3d"), null, { timeout: 15000 }).then(() => true).catch(() => false);
  const keyframes = await page.evaluate(() => (window.MVSStory?.keyframes || []).map(k => ({ key: k.key, y: Math.round(k.y) })));
  const stops = keyframes.length ? keyframes : (await page.evaluate(() => {
    const ids = ["top", "farmers", "practices", "why", "journey", "closing"];
    return ids.map(id => ({ key: id, y: Math.round(document.getElementById(id).getBoundingClientRect().top + scrollY) }));
  }));
  for (const s of stops) {
    await page.evaluate(y => window.scrollTo({ top: y, behavior: "instant" }), s.y);
    await page.waitForTimeout(run.reducedMotion ? 400 : 2200);
    await page.screenshot({ timeout: 120000, path: `${OUT}${run.name}-${String(stops.indexOf(s)).padStart(2, "0")}-${s.key}.png` });
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  const summary = { run: run.name, has3d, keyframes: stops.length, overflowPx: overflow, errors };
  console.log(JSON.stringify(summary));
  if (errors.length) problems.push(`${run.name}: ${errors.length} console error(s)`);
  if (overflow > 0) problems.push(`${run.name}: horizontal overflow of ${overflow}px`);
  if (!run.noWebgl && !has3d) problems.push(`${run.name}: 3D grain did not start`);
  if (run.noWebgl && has3d) problems.push(`${run.name}: fallback expected but 3D started`);
  await ctx.close();
}
await browser.close();
if (problems.length) { console.error("FAIL\n- " + problems.join("\n- ")); process.exit(1); }
console.log("PASS - screenshots in test-output/");
