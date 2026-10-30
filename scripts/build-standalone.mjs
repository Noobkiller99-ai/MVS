// Builds dist/index.html: the whole site in ONE file (styles, content, scripts, fonts and the
// 3D scene inlined). It opens straight from disk or attaches to an email - handy for review.
// The multi-file site in the repo root stays the version to deploy.
//   npm run build:standalone
import { build } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (p) => readFile(root + p, "utf8");
const safe = (js) => js.replace(/<\/script/gi, "<\\/script");   // never close the inline tag early

const scene = await build({
  entryPoints: [root + "src/grain-scene.js"], bundle: true, minify: true, write: false,
  format: "iife", globalName: "MVSGrainScene", target: "es2020", legalComments: "inline"
});

let css = await read("assets/css/site.css");
for (const [, file] of css.matchAll(/url\(\.\.\/fonts\/([^)]+\.woff2)\)/g)) {
  const b64 = (await readFile(root + "assets/fonts/" + file)).toString("base64");
  css = css.replace(`url(../fonts/${file})`, () => `url(data:font/woff2;base64,${b64})`);
}

// Replacements use functions so "$&", "$'" etc. inside the inlined code are never treated as patterns.
const content = safe(await read("assets/js/content.js"));
const site = safe(await read("assets/js/site.js"));
const sceneJs = safe(scene.outputFiles[0].text);
const favicon = (await readFile(root + "assets/brand/icons/favicon.svg")).toString("base64");
let html = await read("index.html");
html = html
  .replace('<html lang="en-IN" class="no-js">', '<html lang="en-IN" class="no-js" data-standalone>')
  .replace(/^<link rel="preload"[^\n]*\n/gm, "")
  .replace(/^<link rel="(icon|apple-touch-icon|manifest)"[^\n]*\n/gm, "")
  .replace("</title>", () => `</title>\n<link rel="icon" href="data:image/svg+xml;base64,${favicon}">`)
  .replace('<link rel="stylesheet" href="assets/css/site.css">', () => `<style>\n${css}\n</style>`)
  .replace(/^<script src="assets\/js\/(content|site)\.js" defer><\/script>\n/gm, "")
  .replace("</body>", () => [
    `<script>\n${content}\n</script>`,
    `<script>\n${sceneJs}\n</script>`,
    `<script>\n${site}\n</script>`,
    "</body>"
  ].join("\n"));

if (/<(link|script)[^>]+(href|src)="assets\//.test(html)) throw new Error("A file reference was not inlined");
await mkdir(root + "dist", { recursive: true });
await writeFile(root + "dist/index.html", html);
console.log(`dist/index.html  ${(html.length / 1024).toFixed(0)} KB (single file)`);
