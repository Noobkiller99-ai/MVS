/* =====================================================================
   Sangat - the 3D grain that guides the story.
   Source file: bundled to assets/js/grain-scene.js with `npm run build`.

   One basmati grain travels through every chapter:
     hero      a single milled grain, close up
     farmers   the camera pulls back: the grain sits in its husk on a panicle
     practices the panicle grows above paddy water and ripens green -> gold
     why       the same panicle at dusk
     journey   harvest (grains fall) -> collection (heap) -> milling (husk opens,
               grains graded) -> packing (grains pour into the pack) -> kitchen
     closing   the grain alone again

   Everything is procedural (no model files). The page (site.js) supplies a
   list of keyframes - scroll positions plus where on screen the grain should
   sit - and this module interpolates the scene between them.
   ===================================================================== */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Vector3, Quaternion, Matrix4, Group, Fog,
  BufferGeometry, Float32BufferAttribute, Mesh, InstancedMesh, MeshPhysicalMaterial, MeshStandardMaterial,
  MeshBasicMaterial, DoubleSide, CanvasTexture, RepeatWrapping, SRGBColorSpace, ACESFilmicToneMapping,
  PMREMGenerator, HemisphereLight, DirectionalLight, TubeGeometry, CatmullRomCurve3, QuadraticBezierCurve3,
  CircleGeometry, PlaneGeometry, BoxGeometry, ShaderMaterial, Points, DynamicDrawUsage, Vector2, LatheGeometry, SplineCurve
} from "three";
import { WORDMARK, GRAINS } from "./brand-paths.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const TAU = Math.PI * 2;
const Y = new Vector3(0, 1, 0);
const GRAIN = 0.34;                       // world length of one grain
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (t) => t * t * (3 - 2 * t);
const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const v3 = (x, y, z) => new Vector3(x, y, z);
const qDir = (dir, twist = 0) => {
  const q = new Quaternion().setFromUnitVectors(Y, dir.clone().normalize());
  return twist ? q.multiply(new Quaternion().setFromAxisAngle(Y, twist)) : q;
};
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------------------------------------------------------------
   Geometry
   --------------------------------------------------------------------- */
/* A basmati grain (or its husk) as a parametric surface along Y, length 1.
   Milled grain: long near-parallel sides, a tapered tip, a blunter base with the
   angled facet where the germ was milled away, a flattened section with shallow
   grooves along both faces, a slight bow and twist, and gentle unevenness - no
   two real grains are perfectly smooth. Husk: pointed, ribbed, with a keel.
   `aThick` (0 at the thin edges/tips, 1 in the body) drives the translucency. */
const angDist = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));
const bell = (d, w) => Math.exp(-(d / w) * (d / w));
function grainGeometry({ segs, rings, husk = false, thetaStart = 0, thetaLen = TAU, seed = 1 }) {
  const L = husk ? 0.535 : 0.5;
  const R = husk ? 0.106 : 0.091;
  const ph = seed * 1.7;
  const cols = segs + 1;
  const pos = new Float32Array((rings + 1) * cols * 3);
  const uv = new Float32Array((rings + 1) * cols * 2);
  const thick = new Float32Array((rings + 1) * cols);
  let k = 0, m = 0, t = 0;
  for (let i = 0; i <= rings; i++) {
    const u = Math.sin((i / rings - 0.5) * Math.PI);          // rings bunch up at the tips
    const au = Math.abs(u);
    let r;
    if (husk) r = R * Math.pow(Math.max(0, 1 - Math.pow(au, 2.1)), 0.7);
    else {
      r = u > 0
        ? R * Math.pow(Math.max(0, 1 - Math.pow(au, 2.7)), 0.66)
        : R * Math.pow(Math.max(0, 1 - Math.pow(au, 3.1)), 0.56);
      r *= 1 + 0.03 * Math.sin(u * 2.4 + ph) + 0.012 * Math.sin(u * 7.3 + ph * 2);
    }
    for (let j = 0; j <= segs; j++) {
      const th0 = thetaStart + (thetaLen * j) / segs;
      const th = husk ? th0 : th0 + 0.1 * u;
      let rr = r;
      if (husk) {
        rr *= 0.985 + 0.05 * Math.pow(Math.abs(Math.cos(th * 2.5)), 14);
        rr *= 1 + 0.05 * bell(angDist(th, 0), 0.22);
      } else {
        const germ = smooth(clamp01((-0.7 - u) / 0.26));
        rr *= 1 - 0.5 * germ * Math.pow(Math.max(0, Math.cos(th - 0.35)), 1.3);
        rr *= 1 - 0.04 * bell(angDist(th, Math.PI / 2), 0.2) - 0.04 * bell(angDist(th, -Math.PI / 2), 0.2);
        rr *= 1 - 0.02 * bell(angDist(th, 1.0), 0.1) - 0.02 * bell(angDist(th, -2.1), 0.1);
        rr *= 1 + 0.012 * Math.sin(th * 3 + u * 5 + ph) * Math.cos(u * 1.3);
      }
      const bow = 0.024 * (1 - u * u) + 0.006 * Math.sin(u * 3 + ph);
      pos[k++] = rr * Math.cos(th) + bow;
      pos[k++] = u * L;
      pos[k++] = rr * Math.sin(th) * (husk ? 0.84 : 0.76);
      uv[m++] = j / segs; uv[m++] = (u + 1) / 2;
      thick[t++] = clamp01(rr / R);
    }
  }
  const idx = [];
  for (let i = 0; i < rings; i++) for (let j = 0; j < segs; j++) {
    const a = i * cols + j, b = a + cols;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new BufferGeometry();
  g.setIndex(idx);
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setAttribute("aThick", new Float32BufferAttribute(thick, 1));
  g.computeVertexNormals();
  const n = g.attributes.normal.array;
  if (thetaLen >= TAU - 1e-6) {
    for (let i = 0; i <= rings; i++) {         // weld the seam
      const a = i * cols * 3, b = (i * cols + segs) * 3;
      for (let c = 0; c < 3; c++) { const q = (n[a + c] + n[b + c]) / 2; n[a + c] = n[b + c] = q; }
    }
  }
  for (let j = 0; j <= segs; j++) {            // clean tips
    n.set([0, -1, 0], j * 3);
    n.set([0, 1, 0], (rings * cols + j) * 3);
  }
  g.attributes.normal.needsUpdate = true;
  return g;
}

/* Light passing through the grain: wrap lighting plus back-light transmission,
   stronger where the grain is thin (edges and tips) - what makes raw basmati
   look pearly rather than painted. */
function addTranslucency(mat, color, strength) {
  const c = new Color(color);
  const vec = `vec3(${c.r.toFixed(3)}, ${c.g.toFixed(3)}, ${c.b.toFixed(3)})`;
  mat.customProgramCacheKey = () => "sss-" + color + strength;
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float aThick;\nvarying float vThick;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvThick = aThick;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vThick;")
      .replace("#include <lights_fragment_end>", `#include <lights_fragment_end>
      {
        vec3 V = normalize(vViewPosition);
        float thin = clamp(1.0 - vThick, 0.0, 1.0);
        vec3 sss = vec3(0.0);
        #if NUM_DIR_LIGHTS > 0
        for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
          vec3 Ld = directionalLights[i].direction;
          float back = pow(clamp(dot(V, -normalize(Ld + normal * 0.5)), 0.0, 1.0), 3.0);
          float ndl = dot(normal, Ld);
          float wrap = clamp((ndl + 0.55) / 1.55, 0.0, 1.0) - clamp(ndl, 0.0, 1.0);
          sss += directionalLights[i].color * (back * (0.35 + 1.7 * thin) + wrap * 0.7);
        }
        #endif
        float fres = pow(1.0 - clamp(dot(V, normal), 0.0, 1.0), 2.2);
        reflectedLight.directDiffuse += sss * ${vec} * diffuseColor.rgb * ${strength.toFixed(3)};
        reflectedLight.indirectDiffuse += ${vec} * fres * (0.25 + 0.5 * thin) * ${strength.toFixed(3)};
      }`);
  };
  return mat;
}

/* A leaf blade: a ribbon along a curve, widest a third of the way up. */
function ribbon(curve, width, segs = 48) {
  const pos = [], idx = [], uv = [];
  const side = new Vector3(), ref = v3(0, 0, 1);
  for (let i = 0; i <= segs; i++) {
    const s = i / segs, p = curve.getPointAt(s), t = curve.getTangentAt(s);
    side.crossVectors(t, ref).normalize();
    const w = width * Math.pow(Math.sin(Math.PI * Math.min(1, s * 1.15 + 0.02)), 0.55) * (1 - 0.55 * s);
    pos.push(p.x - side.x * w, p.y - side.y * w, p.z - side.z * w, p.x + side.x * w, p.y + side.y * w, p.z + side.z * w);
    uv.push(0, s, 1, s);
    if (i < segs) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new BufferGeometry();
  g.setIndex(idx);
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}

/* The panicle: a drooping main stem with branches carrying the grains. */
function buildPanicle(rand, branches, perBranch) {
  const rachis = new CatmullRomCurve3([
    v3(-0.06, -8, 0), v3(0, -3.2, 0.05), v3(0.1, -0.8, 0.1), v3(0.38, 0.85, 0.12),
    v3(0.92, 1.72, 0.07), v3(1.5, 1.78, 0), v3(1.92, 1.25, -0.06), v3(2.08, 0.55, -0.1)
  ], false, "centripetal");
  const slots = [], curves = [];
  for (let k = 0; k < branches; k++) {
    const a = k / (branches - 1);
    const t = lerp(0.47, 0.955, a);
    const p0 = rachis.getPointAt(t), tan = rachis.getTangentAt(t);
    const ref = Math.abs(tan.y) > 0.9 ? v3(1, 0, 0) : Y;
    const n1 = new Vector3().crossVectors(tan, ref).normalize();
    const n2 = new Vector3().crossVectors(tan, n1).normalize();
    const ang = k * 2.39996 + rand() * 0.5;
    const out = n1.clone().multiplyScalar(Math.cos(ang)).addScaledVector(n2, Math.sin(ang));
    const len = lerp(1.2, 0.45, a) * (0.85 + rand() * 0.3);
    const dir = tan.clone().multiplyScalar(0.6).addScaledVector(out, 0.8).normalize();
    const end = p0.clone().addScaledVector(dir, len); end.y -= 0.24 * len;
    const mid = p0.clone().addScaledVector(dir, len * 0.55); mid.y -= 0.02;
    const bc = new QuadraticBezierCurve3(p0, mid, end);
    curves.push(bc);
    const n = Math.max(3, Math.round(perBranch * (0.55 + len * 0.6)));
    for (let g = 0; g < n; g++) {
      const s = lerp(0.3, 1, n === 1 ? 1 : g / (n - 1));
      const bp = bc.getPointAt(s), bt = bc.getTangentAt(s);
      let pr = new Vector3().crossVectors(bt, out);
      if (pr.lengthSq() < 1e-4) pr = n1.clone();
      pr.normalize();
      const axis = bt.clone().addScaledVector(pr, (g % 2 ? 1 : -1) * 0.45).addScaledVector(out, 0.2).normalize();
      slots.push({ p: bp.clone().addScaledVector(axis, GRAIN * 0.48), q: qDir(axis, rand() * TAU) });
    }
  }
  const tipT = rachis.getTangentAt(1);
  const tip = { p: rachis.getPointAt(1).addScaledVector(tipT, GRAIN * 0.5), q: qDir(tipT, 0.6) };
  return { rachis, curves, slots, tip };
}

/* ---------------------------------------------------------------------
   Procedural textures (tiny canvases - no image downloads)
   --------------------------------------------------------------------- */
function canvasTex(w, h, draw, srgb) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  if (srgb) t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
/* Turn a greyscale height canvas into a tangent-space normal map. */
function normalFromHeight(src, strength) {
  const w = src.width, h = src.height;
  const hd = src.getContext("2d").getImageData(0, 0, w, h).data;
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const ctx = c.getContext("2d"), out = ctx.createImageData(w, h), o = out.data;
  const H = (x, y) => hd[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength, dy = (H(x, y + 1) - H(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1), i = (y * w + x) * 4;
    o[i] = (-dx / l * 0.5 + 0.5) * 255; o[i + 1] = (dy / l * 0.5 + 0.5) * 255; o[i + 2] = (1 / l * 0.5 + 0.5) * 255; o[i + 3] = 255;
  }
  ctx.putImageData(out, 0, 0);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = 4;
  return t;
}
function grainTextures() {
  const r = rng(3);
  /* Height: fine wavy striations along the length, faint fissures across it, tiny pits. */
  const hc = document.createElement("canvas"); hc.width = 256; hc.height = 512;
  const x = hc.getContext("2d"), w = 256, h = 512;
  x.fillStyle = "#808080"; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 140; i++) {
    const px = r() * w, a = 0.04 + r() * 0.12, wob = 0.6 + r() * 1.8, f = 2 + r() * 5;
    x.strokeStyle = r() < 0.5 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
    x.lineWidth = 0.6 + r() * 2.2;
    x.beginPath();
    for (let y = 0; y <= h; y += 8) { const xx = px + Math.sin((y / h) * f * TAU + i) * wob; y ? x.lineTo(xx, y) : x.moveTo(xx, y); }
    x.stroke();
  }
  for (let i = 0; i < 9; i++) {
    x.strokeStyle = `rgba(0,0,0,${0.08 + r() * 0.1})`; x.lineWidth = 0.7;
    const y = r() * h, x0 = r() * w;
    x.beginPath(); x.moveTo(x0, y); x.quadraticCurveTo(x0 + 10, y + (r() - 0.5) * 6, x0 + 18 + r() * 30, y + (r() - 0.5) * 4); x.stroke();
  }
  for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(0,0,0,${0.05 + r() * 0.12})`; x.beginPath(); x.arc(r() * w, r() * h, 0.4 + r() * 0.9, 0, TAU); x.fill(); }
  const normal = normalFromHeight(hc, 2.2);

  /* Colour: creamy translucent body, a soft chalky-white belly, warmer tips, faint bran traces. */
  const map = canvasTex(256, 512, (x, w, h) => {
    x.fillStyle = "#ECE3CF"; x.fillRect(0, 0, w, h);
    const belly = x.createRadialGradient(w * 0.5, h * 0.52, 4, w * 0.5, h * 0.52, h * 0.3);
    belly.addColorStop(0, "rgba(255,253,247,.6)"); belly.addColorStop(1, "rgba(255,253,247,0)");
    x.save(); x.scale(1, 1.6); x.fillStyle = belly; x.fillRect(0, 0, w, h); x.restore();
    const ends = x.createLinearGradient(0, 0, 0, h);
    ends.addColorStop(0, "rgba(196,170,120,.7)"); ends.addColorStop(0.1, "rgba(214,194,150,.25)"); ends.addColorStop(0.24, "rgba(230,214,180,0)");
    ends.addColorStop(0.8, "rgba(230,214,180,0)"); ends.addColorStop(0.93, "rgba(214,194,150,.3)"); ends.addColorStop(1, "rgba(190,162,112,.75)");
    x.fillStyle = ends; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) { x.fillStyle = `rgba(176,150,104,${0.03 + r() * 0.06})`; x.fillRect(r() * w, r() * h * 0.3, 0.8 + r() * 1.5, h * (0.3 + r() * 0.6)); }
    for (let i = 0; i < 25; i++) { x.fillStyle = `rgba(120,96,60,${0.08 + r() * 0.12})`; x.beginPath(); x.arc(r() * w, r() * h, 0.6 + r() * 0.8, 0, TAU); x.fill(); }
  }, true);
  return { normal, map };
}
function huskTextures() {
  const r = rng(11);
  const bump = canvasTex(128, 256, (x, w, h) => {
    x.fillStyle = "#7a7a7a"; x.fillRect(0, 0, w, h);
    for (let row = 0; row < h; row += 5) for (let col = 0; col < w; col += 4) {   // rice-hull tubercles
      x.fillStyle = `rgba(255,255,255,${0.18 + r() * 0.2})`;
      x.beginPath(); x.arc(col + ((row / 5) % 2) * 2, row + 2, 1.3, 0, TAU); x.fill();
    }
    for (let i = 0; i < 5; i++) { x.fillStyle = "rgba(255,255,255,.55)"; x.fillRect((i / 5) * w, 0, 3, h); }
  });
  const map = canvasTex(128, 256, (x, w, h) => {
    x.fillStyle = "#f2f2f2"; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 5; i++) { x.fillStyle = "rgba(120,90,50,.28)"; x.fillRect((i / 5) * w + 1, 0, 2, h); }
    for (let i = 0; i < 260; i++) { x.fillStyle = `rgba(${r() < 0.5 ? "90,70,40" : "255,255,255"},${0.05 + r() * 0.08})`; x.fillRect(r() * w, r() * h, 1 + r() * 2, 2 + r() * 8); }
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(110,80,45,.22)"); g.addColorStop(0.12, "rgba(110,80,45,0)"); g.addColorStop(0.9, "rgba(110,80,45,0)"); g.addColorStop(1, "rgba(110,80,45,.25)");
    x.fillStyle = g; x.fillRect(0, 0, w, h);
  }, true);
  return { bump, map };
}
function softDot() {
  return canvasTex(64, 64, (x, w) => {
    const g = x.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = g; x.fillRect(0, 0, w, w);
  });
}

/* The pack label: the Sangat V1 "Forest Line" front (brand/sangat/packaging), drawn with the real logo outlines. */
async function labelTexture(C) {
  const fonts = ['400 120px "Tiro Devanagari Hindi"', '600 40px "Mukta"'];
  try {
    await Promise.race([Promise.all(fonts.map(f => document.fonts.load(f))), new Promise(r => setTimeout(r, 1500))]);
  } catch (e) { /* fall back to system fonts */ }
  const S = C.site;
  return canvasTex(600, 848, (x, w, h) => {
    const bg = x.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, "#21402F"); bg.addColorStop(1, "#1A3328");
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    const r = rng(5);
    for (let i = 0; i < 2400; i++) { x.fillStyle = `rgba(255,255,255,${r() * 0.022})`; x.fillRect(r() * w, r() * h, 1, 1); }
    // The hanging line runs edge to edge; three grains hang from it.
    x.fillStyle = "#C9A35A"; x.fillRect(0, 118, w, 22);
    x.save(); x.translate(w / 2 - 75, 105); x.scale(1.5, 1.5);
    x.fillStyle = "#F6F1E5"; x.fill(new Path2D(GRAINS.d)); x.restore();
    // Wordmark (outlined), centred.
    const ww = 380, k = ww / WORDMARK.w;
    x.save(); x.translate(w / 2 - ww / 2 - WORDMARK.x * k, 330); x.scale(k, k);
    x.fillStyle = "#F6F1E5"; x.fill(new Path2D(WORDMARK.d)); x.restore();
    x.textAlign = "center"; x.textBaseline = "alphabetic";
    x.fillStyle = "#8E9F86"; x.font = '600 17px "Mukta", sans-serif'; x.letterSpacing = "5px";
    x.fillText("PREMIUM BASMATI RICE", w / 2 + 2, 420); x.letterSpacing = "0px";
    if (S.tagline) { x.fillStyle = "#F6F1E5"; x.font = '400 36px "Tiro Devanagari Hindi", Georgia, serif'; x.fillText(S.tagline, w / 2, 492); }
    if (S.taglineHi) { x.fillStyle = "#C9A35A"; x.font = '400 27px "Tiro Devanagari Hindi", serif'; x.fillText(S.taglineHi, w / 2, 538); }
    if (S.partnerName) {
      x.fillStyle = "#8E9F86"; x.font = '600 13px "Mukta", sans-serif'; x.letterSpacing = "3.5px";
      x.fillText(("In partnership with " + S.partnerName).toUpperCase(), w / 2 + 2, 700); x.letterSpacing = "0px";
    }
    x.textAlign = "left"; x.fillStyle = "#F6F1E5"; x.font = '600 44px "Mukta", sans-serif'; x.fillText("1 kg", 52, 790);
    x.fillStyle = "#C9A35A"; x.beginPath(); x.arc(w - 64, 774, 9, 0, TAU); x.fill();
  }, true);
}

/* ---------------------------------------------------------------------
   Shaders: paddy water and floating motes
   --------------------------------------------------------------------- */
const waterMaterial = () => new ShaderMaterial({
  transparent: true, depthWrite: false,
  uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uDeep: { value: new Color("#7E8F6B") }, uShallow: { value: new Color("#C9CFB4") }, uSky: { value: new Color("#FFF6E2") } },
  vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
  fragmentShader: `
    uniform float uTime, uOpacity; uniform vec3 uDeep, uShallow, uSky; varying vec2 vUv;
    float ring(vec2 p, vec2 c, float f, float s, float d){ float r = length(p - c); return sin(r * f - uTime * s) * exp(-r * d); }
    void main(){
      vec2 p = vUv * 2.0 - 1.0; float r = length(p);
      float h = ring(p, vec2(-0.2, 0.0), 42.0, 1.4, 3.0) + 0.7 * ring(p, vec2(0.45, 0.3), 34.0, 1.1, 3.6) + 0.5 * ring(p, vec2(-0.5, -0.4), 50.0, 1.7, 4.2);
      float sheen = smoothstep(0.35, 1.0, h * 0.5 + 0.5);
      vec3 col = mix(uDeep, uShallow, smoothstep(1.0, 0.0, r));
      col = mix(col, uSky, sheen * 0.45 + smoothstep(0.2, -0.8, p.y) * 0.18);
      float a = smoothstep(1.0, 0.45, r) * uOpacity;
      gl_FragColor = vec4(col, a * 0.92);
      #include <colorspace_fragment>
    }`
});

const motesMaterial = (tex) => new ShaderMaterial({
  transparent: true, depthWrite: false,
  uniforms: { uTime: { value: 0 }, uSize: { value: 26 }, uOpacity: { value: 0.5 }, uColor: { value: new Color("#FFF4DC") }, uMap: { value: tex }, uBox: { value: new Vector3(9, 7, 6) } },
  vertexShader: `
    attribute float aSeed; uniform float uTime, uSize; uniform vec3 uBox; varying float vA;
    void main(){
      vec3 p = position;
      p.y = mod(p.y + uTime * (0.05 + 0.08 * aSeed) + uBox.y * 0.5, uBox.y) - uBox.y * 0.5;
      p.x += sin(uTime * 0.27 + aSeed * 6.283) * 0.18;
      p.z += cos(uTime * 0.21 + aSeed * 4.0) * 0.12;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;
      gl_PointSize = uSize * (0.35 + aSeed) / -mv.z;
      vA = 0.35 + 0.65 * fract(aSeed * 7.31);
    }`,
  fragmentShader: `
    uniform float uOpacity; uniform vec3 uColor; uniform sampler2D uMap; varying float vA;
    void main(){ float a = texture2D(uMap, gl_PointCoord).r * uOpacity * vA; if (a < 0.003) discard; gl_FragColor = vec4(uColor, a);
      #include <colorspace_fragment>
    }`
});

/* ---------------------------------------------------------------------
   Keyframes: how the scene looks at each point of the story
   --------------------------------------------------------------------- */
/* The bowl in "Your kitchen" - a real-sized bowl of rice, so the grains read at true scale. */
const BOWL = { x: 6.2, y: -3.2, z: 0.2, rim: 2.3, fill: 2.16, depth: 1.25 };
const riceY = (rr) => BOWL.y + 1.25 + 0.5 * (1 - (rr / BOWL.fill) ** 2);
const C_IVORY = "#F6F1E5", C_FIELD = "#EDEADB", C_DARK = "#1E3A2F", C_SAND = "#E7DCC4";

function makeKeyframes(P) {
  const tip = P.tip;
  const pose = (p, dir, twist = 0) => ({ p, q: qDir(dir, twist) });
  /* A pose square to the camera, leaning by `lean` radians - for the close-ups. */
  const facing = (p, yaw, lean, twist) => {
    const right = v3(Math.cos(yaw), 0, -Math.sin(yaw));
    return pose(p, Y.clone().multiplyScalar(Math.cos(lean)).addScaledVector(right, Math.sin(lean)), twist);
  };
  const kitchenP = v3(BOWL.x - 0.15, riceY(0.2) + 0.03, BOWL.z + 0.35);
  const poses = {
    tip,
    studio: facing(tip.p.clone(), 0.35, -0.42, 1.25),
    fall: { p: tip.p.clone().add(v3(-0.35, -1.95, 0.45)), q: tip.q.clone().multiply(new Quaternion().setFromAxisAngle(v3(1, 0, 0), 1.25)) },
    heap: pose(v3(0.98, -2.16, 0.22), v3(1, 0.12, 0.35), 0.4),
    mill: pose(v3(0.95, -1.9, 0.95), v3(1, 0.32, 0.12), 1.1),
    pack: pose(v3(0.95, -0.42, -0.12), v3(0.2, 1, 0.08), 0.3),
    kitchen: pose(kitchenP, v3(1, 0.07, 0.62), 2.2)
  };
  const base = {
    target: tip.p, yaw: 0, pitch: 0.1, frame: [3, 3],
    hero: "tip", husk: 0, huskVis: 1, ripe: 0.5, milled: 0, layout: "panicle", stem: 1, leaves: 1, bgP: 1,
    water: 0, pack: 0, packAt: 0, floor: 0, bowl: 0, motes: 0.45, gold: 0, spin: 0, opacity: 1,
    key: 2.6, keyColor: "#FFF1DA", rim: 1.2, rimColor: "#FFE2B0", hemi: 0.55, env: 0.75, exposure: 1.0, fog: C_IVORY
  };
  const k = (o) => Object.assign({}, base, o);
  return {
    poses,
    hero:       k({ hero: "studio", target: tip.p, yaw: 0.35, pitch: 0.06, frame: [0.4, 0.4], husk: 1, huskVis: 0, ripe: 0.45, milled: 1, layout: "seed", stem: 0, leaves: 0, bgP: 0, motes: 0.55, spin: 1,
                    key: 4.2, keyColor: "#FFF3E0", rim: 3.4, rimColor: "#FFC98A", hemi: 0.14, env: 0.32, exposure: 1.02 }),
    farmers:    k({ target: v3(1.0, 0.85, 0), yaw: 0.18, pitch: 0.05, frame: [3.0, 3.1], ripe: 0.32 }),
    practicesA: k({ target: v3(0.75, -0.05, 0.1), yaw: -0.3, pitch: 0.22, frame: [3.7, 4.3], ripe: 0.38, water: 1, fog: C_FIELD, motes: 0.35 }),
    practicesB: k({ target: v3(0.85, 0.1, 0.1), yaw: 0.4, pitch: 0.17, frame: [3.5, 4.1], ripe: 0.92, water: 1, fog: C_FIELD, motes: 0.4 }),
    why:        k({ target: v3(1.05, 0.9, 0), yaw: -0.55, pitch: 0.03, frame: [2.8, 3.1], ripe: 1, fog: C_DARK, motes: 0.9, gold: 1,
                    key: 1.1, keyColor: "#FFD8A8", rim: 3.4, rimColor: "#FFC27A", hemi: 0.22, env: 0.35, exposure: 0.95 }),
    journey0:   k({ target: v3(1.05, 0.8, 0), yaw: 0.12, pitch: 0.08, frame: [3.0, 3.3], ripe: 1, fog: C_SAND }),
    journey1:   k({ target: v3(1.1, -0.75, 0.15), yaw: 0.22, pitch: 0.1, frame: [3.3, 4.4], ripe: 1, hero: "fall", layout: "fall", stem: 0.3, leaves: 0.15, bgP: 0, fog: C_SAND, floor: 0.3 }),
    journey2:   k({ target: v3(0.95, -2.35, 0.1), yaw: 0.3, pitch: 0.42, frame: [2.9, 2.1], ripe: 1, hero: "heap", layout: "heap", stem: 0, leaves: 0, bgP: 0, fog: C_SAND, floor: 1, motes: 0.25 }),
    journey3:   k({ target: v3(0.95, -2.35, 0.2), yaw: -0.12, pitch: 0.36, frame: [2.5, 2.0], ripe: 1, hero: "mill", husk: 1, huskVis: 0.6, milled: 1, layout: "graded", stem: 0, leaves: 0, bgP: 0, fog: C_SAND, floor: 1, motes: 0.25 }),
    journey4:   k({ target: v3(0.95, -1.5, 0), yaw: 0.28, pitch: 0.12, frame: [2.6, 3.4], ripe: 1, hero: "pack", husk: 1, huskVis: 0, milled: 1, layout: "packed", stem: 0, leaves: 0, bgP: 0, pack: 1, fog: C_SAND, floor: 1, motes: 0.25 }),
    journey5:   k({ target: v3(BOWL.x - 1.25, BOWL.y + 1.9, BOWL.z - 0.5), yaw: -0.18, pitch: 0.3, frame: [7.6, 5.4], ripe: 1, hero: "kitchen", husk: 1, huskVis: 0, milled: 1, layout: "bowl", stem: 0, leaves: 0, bgP: 0, pack: 1, packAt: 1, bowl: 1, fog: C_SAND, motes: 0.3, key: 3.0, rim: 2.2 }),
    closing:    k({ target: v3(BOWL.x - 1.0, BOWL.y + 2.4, BOWL.z - 0.4), yaw: 0.28, pitch: 0.18, frame: [7.8, 6.3], ripe: 1, hero: "kitchen", husk: 1, huskVis: 0, milled: 1, layout: "bowl", stem: 0, leaves: 0, bgP: 0, pack: 1, packAt: 1, bowl: 1, motes: 0.35, key: 3.2, keyColor: "#FFF3E0", rim: 2.6, rimColor: "#FFC98A", hemi: 0.4, env: 0.6 }),
    end:        k({ target: v3(BOWL.x - 1.0, BOWL.y + 2.4, BOWL.z - 0.4), yaw: 0.4, pitch: 0.18, frame: [8.6, 6.9], ripe: 1, hero: "kitchen", husk: 1, huskVis: 0, milled: 1, layout: "bowl", stem: 0, leaves: 0, bgP: 0, pack: 1, packAt: 1, bowl: 1, motes: 0.3, opacity: 0, key: 3.2, keyColor: "#FFF3E0", rim: 2.6, rimColor: "#FFC98A", hemi: 0.4, env: 0.6 })
  };
}

/* ---------------------------------------------------------------------
   Instance layouts: where the many grains sit in each scene
   --------------------------------------------------------------------- */
function makeLayouts(P, count, rand) {
  const L = {};
  const mk = () => ({ p: new Float32Array(count * 3), q: new Float32Array(count * 4), s: new Float32Array(count) });
  const set = (lay, i, p, q, s) => { p.toArray(lay.p, i * 3); q.toArray(lay.q, i * 4); lay.s[i] = s; };
  const randQ = () => new Quaternion().setFromAxisAngle(v3(rand() - 0.5, rand() - 0.5, rand() - 0.5).normalize(), rand() * TAU);

  L.panicle = mk(); L.seed = mk(); L.fall = mk(); L.heap = mk(); L.graded = mk(); L.packed = mk(); L.bowl = mk();
  const lanes = 7, packMouth = v3(0.95, -0.82, -0.22);
  for (let i = 0; i < count; i++) {
    const sl = P.slots[i];
    set(L.panicle, i, sl.p, sl.q, 0.97);
    set(L.seed, i, sl.p, sl.q, 0);
    set(L.fall, i, sl.p.clone().add(v3((rand() - 0.5) * 1.3, -1.4 - rand() * 2.4, (rand() - 0.5) * 1.3)), randQ(), 0.97);
    const rr = 0.72 * Math.pow(rand(), 0.6), a = rand() * TAU;
    const hy = 0.46 * Math.pow(1 - rr / 0.72, 1.3) + rand() * 0.05;
    set(L.heap, i, v3(0.95 + Math.cos(a) * rr, -2.6 + hy, 0.05 + Math.sin(a) * rr * 0.85), qDir(v3(Math.cos(a + 1.3), (rand() - 0.5) * 0.5, Math.sin(a + 1.3)), rand() * TAU), 0.95);
    const lane = i % lanes, n = Math.floor(i / lanes);
    set(L.graded, i, v3(0.95 + (lane - (lanes - 1) / 2) * 0.17, -2.6, 1.3 - n * 0.39 - (lane % 2) * 0.19),
      qDir(v3((rand() - 0.5) * 0.03, 0, -1), Math.PI / 2 + (rand() - 0.5) * 0.2), 0.95);
    set(L.packed, i, packMouth, qDir(v3(0.1, 1, 0)), 0);
    const br = BOWL.fill * 0.85 * Math.sqrt(rand()), ba = rand() * TAU;
    set(L.bowl, i, v3(BOWL.x + Math.cos(ba) * br, riceY(br) + 0.035 + rand() * 0.02, BOWL.z + Math.sin(ba) * br), qDir(v3(Math.cos(ba * 3 + i), (rand() - 0.5) * 0.25, Math.sin(ba * 3 + i)), rand() * TAU), 0.95);
  }
  L.packed.arc = 1;
  return L;
}

/* ---------------------------------------------------------------------
   Scene
   --------------------------------------------------------------------- */
export function start({ canvas, story, onReady, onFail }) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch (e) { onFail && onFail(e.message); return; }

  const C = story.content;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const small = Math.min(innerWidth, innerHeight) < 700;
  const lowEnd = small || (navigator.hardwareConcurrency || 8) <= 4;
  let dprCap = lowEnd ? 1.5 : 2;
  let dpr = Math.min(devicePixelRatio || 1, dprCap);
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;

  let needsRender = true;
  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.05, 80);
  const pmrem = new PMREMGenerator(renderer);
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envRT.texture;
  pmrem.dispose();
  scene.fog = new Fog(new Color(C_IVORY), 10, 30);

  const hemi = new HemisphereLight(0xFFF7E6, 0x6E7F55, 0.55);
  const key = new DirectionalLight(0xFFF1DA, 2.6); key.position.set(-3.5, 5, 6);
  const rim = new DirectionalLight(0xFFE2B0, 1.2); rim.position.set(5, 2.5, -4);
  scene.add(hemi, key, rim, key.target, rim.target);

  const rand = rng(2024);
  const P = buildPanicle(rand, lowEnd ? 10 : 13, lowEnd ? 5 : 6);
  const COUNT = P.slots.length;
  const LAY = makeLayouts(P, COUNT, rand);
  const KF = makeKeyframes(P);
  const delays = Float32Array.from({ length: COUNT }, () => rand());

  /* Materials */
  const husk = huskTextures();
  const grainTex = grainTextures();
  /* Raw milled basmati: satin rather than glossy, faintly translucent, creamy rather than white. */
  const heroGrainMat = addTranslucency(new MeshPhysicalMaterial({
    color: 0xFFFFFF, map: grainTex.map, normalMap: grainTex.normal, normalScale: new Vector2(0.9, 0.9),
    roughness: 0.34, specularIntensity: 0.7, clearcoat: 0.3, clearcoatRoughness: 0.16,
    sheen: 0.18, sheenColor: new Color(0xFFF3DE), sheenRoughness: 0.5
  }), "#FFDDB0", 0.6);
  const milledMat = addTranslucency(new MeshStandardMaterial({
    color: 0xFFFFFF, map: grainTex.map, normalMap: grainTex.normal, normalScale: new Vector2(0.45, 0.45), roughness: 0.42
  }), "#FFDDB0", 0.45);
  const huskColor = new Color();
  const heroHuskMat = new MeshPhysicalMaterial({ color: 0xC9984F, roughness: 0.62, map: husk.map, bumpMap: husk.bump, bumpScale: 1.4, sheen: 0.6, sheenColor: new Color(0xFFE6B8), sheenRoughness: 0.6, side: DoubleSide, transparent: true });
  const grainsMat = new MeshStandardMaterial({ color: 0xC9984F, roughness: 0.6, map: husk.map, bumpMap: husk.bump, bumpScale: 1.0 });
  const stemMat = new MeshStandardMaterial({ color: 0x7A8F48, roughness: 0.7, transparent: true });
  const leafMat = new MeshStandardMaterial({ color: 0x6F8A45, roughness: 0.55, side: DoubleSide, transparent: true });
  const bgMat = new MeshStandardMaterial({ color: 0xB5A05A, roughness: 0.7, transparent: true, map: husk.map });
  const bgStemMat = new MeshStandardMaterial({ color: 0x8E9A55, roughness: 0.7, transparent: true });

  /* Hero grain + its two husk halves (they swing open on hinges at the base) */
  const hq = lowEnd ? { segs: 40, rings: 64 } : { segs: 72, rings: 120 };
  const hero = new Group();
  const heroGrain = new Mesh(grainGeometry(hq), heroGrainMat);
  hero.add(heroGrain);
  const hinges = [0, 1].map((i) => {
    const hinge = new Group(); hinge.position.y = -0.535;
    const half = new Mesh(grainGeometry({ ...hq, husk: true, thetaStart: i ? Math.PI : 0, thetaLen: Math.PI }), heroHuskMat);
    half.position.y = 0.535;
    hinge.add(half); hero.add(hinge);
    return hinge;
  });
  hero.scale.setScalar(GRAIN);
  scene.add(hero);

  /* Panicle: stem, branches, leaves, grains */
  const stemGeo = mergeGeometries([
    new TubeGeometry(P.rachis, 160, 0.024, 7, false),
    ...P.curves.map(c => new TubeGeometry(c, 20, 0.009, 5, false))
  ]);
  const stem = new Mesh(stemGeo, stemMat);
  const leafGeo = mergeGeometries([
    ribbon(new CatmullRomCurve3([v3(0, -2.7, 0.05), v3(-0.45, -1.4, 0.3), v3(-0.95, 0.0, 0.42), v3(-1.2, 0.9, 0.3), v3(-1.05, 1.45, 0.2)]), 0.13),
    ribbon(new CatmullRomCurve3([v3(0.02, -3.7, 0), v3(0.6, -2.6, 0.4), v3(1.3, -1.75, 0.62), v3(1.9, -1.45, 0.55), v3(2.3, -1.6, 0.45)]), 0.12),
    ribbon(new CatmullRomCurve3([v3(-0.03, -4.6, 0), v3(-0.7, -3.4, -0.4), v3(-1.5, -2.6, -0.5), v3(-2.1, -2.5, -0.3)]), 0.12)
  ]);
  const leaves = new Mesh(leafGeo, leafMat);
  /* The travelling grains: paddy (husked) until milling, then milled grain. Both meshes share the
     same transforms; each grain gets a slightly different tone, as no two grains are identical. */
  const instGeo = grainGeometry({ segs: lowEnd ? 12 : 16, rings: lowEnd ? 14 : 20, husk: true });
  const grains = new InstancedMesh(instGeo, grainsMat, COUNT);
  const milledGrains = new InstancedMesh(grainGeometry({ segs: lowEnd ? 12 : 16, rings: lowEnd ? 18 : 26, seed: 3 }), milledMat, COUNT);
  const tint = new Color();
  for (let i = 0; i < COUNT; i++) {
    const v = 0.9 + rand() * 0.18;
    grains.setColorAt(i, tint.setRGB(v, v * (0.96 + rand() * 0.06), v * (0.9 + rand() * 0.12)));
    const w = 0.95 + rand() * 0.07;
    milledGrains.setColorAt(i, tint.setRGB(w, w, w * (0.97 + rand() * 0.04)));
  }
  for (const im of [grains, milledGrains]) { im.instanceMatrix.setUsage(DynamicDrawUsage); im.frustumCulled = false; }
  scene.add(stem, leaves, grains, milledGrains);

  /* Background panicles for depth (static, fade with the field) */
  const bg = new Group();
  const bgGrainsGeo = grainGeometry({ segs: 8, rings: 10, husk: true });
  [[-2.4, -0.5, -3.4, 0.9, 1.0], [4.1, -0.9, -4.6, -0.6, 1.05], [-0.6, -0.3, -7.2, 2.2, 1.1]].forEach(([x, y, z, ry, s]) => {
    const g = new Group();
    g.add(new Mesh(stemGeo, bgStemMat));
    const im = new InstancedMesh(bgGrainsGeo, bgMat, COUNT);
    const m = new Matrix4(), sc = v3(GRAIN, GRAIN, GRAIN);
    P.slots.forEach((sl, i) => im.setMatrixAt(i, m.compose(sl.p, sl.q, sc)));
    g.add(im); g.position.set(x, y, z); g.rotation.y = ry; g.scale.setScalar(s);
    bg.add(g);
  });
  scene.add(bg);

  /* Paddy water */
  const water = new Mesh(new CircleGeometry(2.6, 72), waterMaterial());
  water.rotation.x = -Math.PI / 2; water.position.set(0.45, -1.7, 0.2);
  scene.add(water);

  /* Soft floor shadow for the heap, the graded grains and the pack */
  const floor = new Mesh(new PlaneGeometry(4.2, 3.2), new MeshBasicMaterial({ map: softDot(), color: 0x6B5434, transparent: true, depthWrite: false, opacity: 0 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0.95, -2.66, 0.05);
  scene.add(floor);

  /* Your kitchen: a glazed bowl filled with rice at true scale (hundreds of grains) */
  const bowlGroup = new Group();
  const prof = new SplineCurve([
    [0, 0.07], [0.9, 0.1], [1.6, 0.32], [2.08, 0.75], [2.27, 1.2], [2.31, 1.27], [2.38, 1.22],
    [2.25, 0.8], [1.85, 0.32], [1.2, 0.06], [1.08, 0], [0.95, -0.02], [0, -0.02]
  ].map(([a, b]) => new Vector2(a, b))).getPoints(90);
  const bowlMat = new MeshPhysicalMaterial({ color: 0x1E3A2F, roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.12, side: DoubleSide, transparent: true });
  const bowlGeo = new LatheGeometry(prof, lowEnd ? 64 : 110);
  bowlGeo.scale(1, BOWL.depth, 1);
  bowlGroup.add(new Mesh(bowlGeo, bowlMat));

  /* A bed of rice under the loose grains, so the bowl reads as full rather than sprinkled. */
  const bedProf = [];
  for (let i = 0; i <= 24; i++) { const rr = (i / 24) * (BOWL.fill + 0.06); bedProf.push(new Vector2(rr, riceY(Math.min(rr, BOWL.fill)) - BOWL.y - 0.07 - (rr > BOWL.fill ? 0.12 : 0))); }
  const bedGeo = new LatheGeometry(bedProf, lowEnd ? 48 : 80);
  { const pa = bedGeo.attributes.position, uvA = bedGeo.attributes.uv;
    for (let i = 0; i < pa.count; i++) uvA.setXY(i, pa.getX(i) / BOWL.fill * 1.6, pa.getZ(i) / BOWL.fill * 1.6); }
  const bedTex = canvasTex(512, 512, (x, w, h) => {
    const r = rng(21);
    x.fillStyle = "#B9AD93"; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) {
      const cx = r() * w, cy = r() * h, a = r() * Math.PI, l = 9 + r() * 4;
      x.save(); x.translate(cx, cy); x.rotate(a);
      x.fillStyle = "rgba(90,78,58,.35)"; x.beginPath(); x.ellipse(1, 1.2, l, 1.9, 0, 0, TAU); x.fill();
      const v = 205 + r() * 45;
      x.fillStyle = `rgb(${v},${v - 6},${v - 22})`; x.beginPath(); x.ellipse(0, 0, l, 1.8, 0, 0, TAU); x.fill();
      x.restore();
    }
  }, true);
  const bed = new Mesh(bedGeo, new MeshStandardMaterial({ map: bedTex, roughness: 0.7, transparent: true, side: DoubleSide }));
  bed.position.set(BOWL.x, BOWL.y, BOWL.z);
  bowlGroup.add(bed);
  const RICE = lowEnd ? 420 : 800;
  const riceGrains = new InstancedMesh(grainGeometry({ segs: 8, rings: 12, seed: 5 }), milledMat, RICE);
  const riceDelay = new Float32Array(RICE), riceSize = new Float32Array(RICE);
  const riceP = [], riceQ = [];
  for (let i = 0; i < RICE; i++) {
    const rr = BOWL.fill * Math.sqrt(rand()), a = rand() * TAU, layer = rand() * 0.02;
    riceP.push(v3(BOWL.x + Math.cos(a) * rr, riceY(rr) - layer, BOWL.z + Math.sin(a) * rr));
    riceQ.push(qDir(v3(Math.cos(a * 5 + i), (rand() - 0.5) * 0.35, Math.sin(a * 5 + i)), rand() * TAU));
    riceSize[i] = GRAIN * (0.9 + rand() * 0.12);
    riceDelay[i] = rand();
    const w = 0.93 + rand() * 0.09;
    riceGrains.setColorAt(i, tint.setRGB(w, w * 0.995, w * (0.96 + rand() * 0.05)));
  }
  riceGrains.frustumCulled = false;
  bowlGroup.add(riceGrains);
  const bowlShadow = new Mesh(new PlaneGeometry(7, 7), new MeshBasicMaterial({ map: softDot(), color: 0x6B5434, transparent: true, depthWrite: false, opacity: 0 }));
  bowlShadow.rotation.x = -Math.PI / 2; bowlShadow.position.set(BOWL.x, BOWL.y - 0.03, BOWL.z);
  scene.add(bowlShadow);
  bowlGroup.children[0].position.set(BOWL.x, BOWL.y, BOWL.z);   // the lathe is built around the origin
  scene.add(bowlGroup);

  /* The pack: a stand-up pouch with a label drawn from the content */
  const packGroup = new Group();
  const sideMat = new MeshStandardMaterial({ color: 0x1E3A2F, roughness: 0.5, metalness: 0.05, transparent: true });
  const labelMat = new MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, transparent: true });
  const pack = new Mesh(new RoundedBoxGeometry(1.45, 2.05, 0.5, 4, 0.09), [sideMat, sideMat, sideMat, sideMat, labelMat, sideMat]);
  const seal = new Mesh(new BoxGeometry(1.47, 0.09, 0.2), new MeshStandardMaterial({ color: 0xA07A35, roughness: 0.45, metalness: 0.25, transparent: true }));
  seal.position.y = 1.0;
  packGroup.add(pack, seal);
  packGroup.position.set(0.95, -1.85, -0.25);
  scene.add(packGroup);
  const packMats = [sideMat, labelMat, seal.material];
  labelTexture(C).then((t) => { labelMat.map = t; labelMat.needsUpdate = true; needsRender = true; });

  /* Floating motes / pollen */
  const MOTES = lowEnd ? 110 : 240;
  const mp = new Float32Array(MOTES * 3), ms = new Float32Array(MOTES);
  for (let i = 0; i < MOTES; i++) { mp[i * 3] = (rand() - 0.5) * 9; mp[i * 3 + 1] = (rand() - 0.5) * 7; mp[i * 3 + 2] = (rand() - 0.5) * 6; ms[i] = rand(); }
  const motesGeo = new BufferGeometry();
  motesGeo.setAttribute("position", new Float32BufferAttribute(mp, 3));
  motesGeo.setAttribute("aSeed", new Float32BufferAttribute(ms, 1));
  const motes = new Points(motesGeo, motesMaterial(softDot()));
  motes.frustumCulled = false;
  scene.add(motes);

  /* -------------------------------------------------------------------
     State interpolation
     ------------------------------------------------------------------- */
  const S = {
    target: new Vector3(), heroP: new Vector3(), heroQ: new Quaternion(), fog: new Color(), keyColor: new Color(), rimColor: new Color(),
    frame: [1, 1], fx: 0.5, fy: 0.5, fw: 1, fh: 1
  };
  const NUM = ["yaw", "pitch", "husk", "huskVis", "ripe", "milled", "stem", "leaves", "bgP", "water", "pack", "packAt", "floor", "bowl", "motes", "gold", "spin", "opacity", "key", "rim", "hemi", "env", "exposure"];
  const ca = new Color(), cb = new Color();
  function sample(t, kfs) {
    const n = kfs.length;
    const i = Math.min(n - 2, Math.max(0, Math.floor(t)));
    const f = n < 2 ? 0 : clamp01(t - i);
    const A = kfs[i], B = kfs[Math.min(n - 1, i + 1)];
    const a = KF[A.key] || KF.hero, b = KF[B.key] || KF.hero;
    for (const k of NUM) S[k] = lerp(a[k], b[k], f);
    S.target.lerpVectors(a.target, b.target, f);
    S.frame[0] = lerp(a.frame[0], b.frame[0], f); S.frame[1] = lerp(a.frame[1], b.frame[1], f);
    const pa = KF.poses[a.hero], pb = KF.poses[b.hero];
    S.heroP.lerpVectors(pa.p, pb.p, f);
    S.heroQ.slerpQuaternions(pa.q, pb.q, f);
    S.fog.copy(ca.set(a.fog)).lerp(cb.set(b.fog), f);
    S.keyColor.copy(ca.set(a.keyColor)).lerp(cb.set(b.keyColor), f);
    S.rimColor.copy(ca.set(a.rimColor)).lerp(cb.set(b.rimColor), f);
    S.fx = lerp(A.fx, B.fx, f); S.fy = lerp(A.fy, B.fy, f); S.fw = lerp(A.fw, B.fw, f); S.fh = lerp(A.fh, B.fh, f);
    S.layoutA = a.layout; S.layoutB = b.layout; S.f = f;
  }

  const GREEN = new Color("#8AA552"), YELLOW = new Color("#BDB15E"), GOLD = new Color("#CB9A52");
  const STEM_G = new Color("#6E8C43"), STEM_S = new Color("#B8925A");
  const MOTE_IVORY = new Color("#FFF6E3"), MOTE_GOLD = new Color("#FFC978");
  const tmpM = new Matrix4(), tmpP = new Vector3(), tmpQ = new Quaternion(), qa = new Quaternion(), qb = new Quaternion(), tmpS = new Vector3();
  const spinQ = new Quaternion(), spinAxis = v3(0.3, 1, 0.2).normalize();

  let lastLayoutKey = "";
  function updateInstances() {
    const A = LAY[S.layoutA], B = LAY[S.layoutB], f = S.f;
    const k = S.layoutA + S.layoutB + f.toFixed(4) + (S.milled < 0.5 ? "h" : "m");
    if (k === lastLayoutKey) return;
    lastLayoutKey = k;
    const arc = (A.arc || B.arc) ? 1 : 0;
    grains.visible = S.milled < 0.5; milledGrains.visible = !grains.visible;
    const target = grains.visible ? grains : milledGrains;
    for (let i = 0; i < COUNT; i++) {
      const d = delays[i] * 0.42;
      const fi = A === B ? 1 : smooth(clamp01((f - d) / 0.58));
      tmpP.set(lerp(A.p[i * 3], B.p[i * 3], fi), lerp(A.p[i * 3 + 1], B.p[i * 3 + 1], fi), lerp(A.p[i * 3 + 2], B.p[i * 3 + 2], fi));
      if (arc) {
        const dx = B.p[i * 3] - A.p[i * 3], dz = B.p[i * 3 + 2] - A.p[i * 3 + 2];
        tmpP.y += Math.sin(Math.PI * fi) * (0.8 + 0.25 * Math.hypot(dx, dz));
      }
      qa.fromArray(A.q, i * 4); qb.fromArray(B.q, i * 4);
      tmpQ.slerpQuaternions(qa, qb, fi);
      const s = lerp(A.s[i], B.s[i], arc && B.arc ? smooth(clamp01((fi - 0.55) / 0.45)) : fi) * GRAIN;
      target.setMatrixAt(i, tmpM.compose(tmpP, tmpQ, tmpS.set(s, s, s)));
    }
    target.instanceMatrix.needsUpdate = true;
  }

  /* The bowl fades in and fills grain by grain as "bowl" goes from 0 to 1. */
  let lastBowl = -1;
  const bm = new Matrix4(), bs = new Vector3();
  function updateBowl() {
    const b = S.bowl;
    setVis(bowlGroup, b); setVis(bowlShadow, b);
    bowlMat.opacity = smooth(clamp01(b * 2)); bowlMat.depthWrite = b > 0.6;
    bed.material.opacity = smooth(clamp01((b - 0.35) * 2.5));
    bowlShadow.material.opacity = b * 0.4;
    if (Math.abs(b - lastBowl) < 1e-4) return;
    lastBowl = b;
    for (let i = 0; i < RICE; i++) {
      const g = smooth(clamp01((b - 0.3 - riceDelay[i] * 0.5) / 0.2));
      riceGrains.setMatrixAt(i, bm.compose(riceP[i], riceQ[i], bs.setScalar(riceSize[i] * g)));
    }
    riceGrains.instanceMatrix.needsUpdate = true;
  }

  function ripeColor(r, out) {
    return r < 0.5 ? out.copy(GREEN).lerp(YELLOW, r / 0.5) : out.copy(YELLOW).lerp(GOLD, (r - 0.5) / 0.5);
  }
  const setVis = (obj, v) => { obj.visible = v > 0.01; };

  function apply(time) {
    ripeColor(S.ripe, huskColor);
    heroHuskMat.color.copy(huskColor);
    heroHuskMat.opacity = S.huskVis;
    grainsMat.color.copy(huskColor);
    /* Squared opacities: the plant fades in late and out early, so transitions stay uncluttered. */
    stemMat.color.copy(STEM_G).lerp(STEM_S, S.ripe); stemMat.opacity = S.stem * S.stem; setVis(stem, S.stem);
    leafMat.color.copy(STEM_G).lerp(STEM_S, S.ripe * 0.85); leafMat.opacity = S.leaves * S.leaves; setVis(leaves, S.leaves);
    bgMat.color.copy(huskColor); bgMat.opacity = S.bgP * S.bgP; bgStemMat.color.copy(stemMat.color); bgStemMat.opacity = S.bgP * S.bgP; setVis(bg, S.bgP);
    water.material.uniforms.uOpacity.value = S.water; water.material.uniforms.uTime.value = time; setVis(water, S.water);
    floor.material.opacity = S.floor * 0.32; setVis(floor, S.floor);
    updateBowl();
    const po = S.pack * S.pack;
    packMats.forEach(m => { m.opacity = po; m.depthWrite = po > 0.95; });
    setVis(packGroup, S.pack);
    const at = smooth(S.packAt), ps = lerp(1, 2.35, at);
    packGroup.scale.setScalar(ps);
    packGroup.position.set(
      lerp(0.95, BOWL.x - 2.75, at),
      lerp(-1.85 - (1 - S.pack) * 0.5, BOWL.y + 1.025 * ps, at),
      lerp(-0.25, BOWL.z - 2.1, at));
    packGroup.rotation.y = lerp(-0.35, 0, S.pack) + at * 0.32;

    motes.material.uniforms.uTime.value = time;
    motes.material.uniforms.uOpacity.value = S.motes * 0.55;
    motes.material.uniforms.uColor.value.copy(MOTE_IVORY).lerp(MOTE_GOLD, S.gold);
    motes.material.uniforms.uSize.value = (26 + 30 * S.gold) * dpr;
    motes.position.copy(S.target);

    key.color.copy(S.keyColor); key.intensity = S.key;
    rim.color.copy(S.rimColor); rim.intensity = S.rim;
    hemi.intensity = S.hemi;
    scene.environmentIntensity = S.env;
    renderer.toneMappingExposure = S.exposure;
    scene.fog.color.copy(S.fog);
    canvas.style.opacity = S.opacity.toFixed(3);

    /* Hero: pose + a gentle turn when it is shown alone */
    hero.position.copy(S.heroP);
    spinQ.setFromAxisAngle(spinAxis, Math.sin(time * 0.32) * 0.55 * S.spin);
    hero.quaternion.copy(S.heroQ).multiply(spinQ);
    const open = smooth(S.husk);
    hinges[0].rotation.x = open * 1.25; hinges[1].rotation.x = -open * 1.25;
    hinges[0].position.z = open * 0.35; hinges[1].position.z = -open * 0.35;
    hinges[0].visible = hinges[1].visible = S.huskVis > 0.01;

    updateInstances();
  }

  /* Camera: orbit the target, fit the framed size into the stage, then shift
     the frame so the target lands where the page's stage column is. */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let W = 1, H = 1;
  function placeCamera(time, ambient) {
    const tanH = Math.tan((camera.fov * Math.PI) / 360);
    const aspect = W / H;
    const dist = Math.max(S.frame[1] / (2 * tanH * S.fh), S.frame[0] / (2 * tanH * aspect * S.fw));
    const yaw = S.yaw + pointer.x * 0.08 + (ambient ? Math.sin(time * 0.13) * 0.03 : 0);
    const pitch = S.pitch + pointer.y * 0.05;
    camera.position.set(
      S.target.x + dist * Math.cos(pitch) * Math.sin(yaw),
      S.target.y + dist * Math.sin(pitch),
      S.target.z + dist * Math.cos(pitch) * Math.cos(yaw)
    );
    camera.lookAt(S.target);
    camera.near = Math.max(0.02, dist * 0.05); camera.far = dist + 40;
    camera.setViewOffset(W, H, (0.5 - S.fx) * W, (0.5 - S.fy) * H, W, H);
    camera.updateProjectionMatrix();
    const size = Math.max(S.frame[0], S.frame[1]);
    scene.fog.near = dist + size * 0.6;
    scene.fog.far = dist + size * 0.6 + Math.max(6, dist * 2.4);
    updateMask();
  }

  /* Keep the scene inside its stage column on wide layouts: fade the canvas out
     towards the text column (never at the screen edge the stage sits against). */
  let lastMask = "";
  function updateMask() {
    let m = "none";
    if (S.fw < 0.7) {
      const a = S.fx - S.fw / 2 - 0.03 - Math.max(0, 0.5 - S.fx) * 2;
      const d = S.fx + S.fw / 2 + 0.03 + Math.max(0, S.fx - 0.5) * 2;
      const pc = (v) => (v * 100).toFixed(1) + "%";
      m = `linear-gradient(90deg, transparent ${pc(a)}, #000 ${pc(a + 0.1)}, #000 ${pc(d - 0.1)}, transparent ${pc(d)})`;
    }
    if (m !== lastMask) { lastMask = m; canvas.style.webkitMaskImage = m; canvas.style.maskImage = m; }
  }

  /* -------------------------------------------------------------------
     Scroll -> story position
     ------------------------------------------------------------------- */
  function storyT() {
    const kf = story.keyframes, n = kf.length, y = scrollY;
    if (n < 2 || y <= kf[0].y) return 0;
    for (let i = 0; i < n - 1; i++) {
      const a = kf[i], b = kf[i + 1];
      if (y < b.y) {
        const f = (y - a.y) / (b.y - a.y);
        return i + (b.ease === "linear" ? f : smoother(clamp01((f - 0.16) / 0.68)));
      }
    }
    return n - 1;
  }

  /* -------------------------------------------------------------------
     Size, input, loop
     ------------------------------------------------------------------- */
  function resize() {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    if (coarse && Math.abs(w - W) < 1 && Math.abs(h - H) < 140 && W > 1) return;
    W = w; H = h;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    needsRender = true;
  }
  addEventListener("resize", resize);
  resize();

  if (!coarse) {
    addEventListener("pointermove", (e) => {
      pointer.tx = (e.clientX / innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / innerHeight) * 2 - 1;
    }, { passive: true });
  }

  /* Ambient motion (the slow turn, drifting motes, water ripples) runs while the reader is active
     and eases to a stop 5 seconds after they stop - nothing moves on its own indefinitely
     (WCAG 2.2.2), and the GPU rests while someone reads. */
  const IDLE_MS = 5000;
  let activeUntil = performance.now() + IDLE_MS, ambW = 1;
  const wake = () => { activeUntil = performance.now() + IDLE_MS; };
  ["scroll", "pointermove", "pointerdown", "touchstart", "keydown", "wheel"].forEach((ev) => addEventListener(ev, wake, { passive: true }));

  canvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); cancelAnimationFrame(raf); onFail && onFail("WebGL context lost"); });

  let raf = 0, last = performance.now(), time = 0, t = storyT(), ready = false;
  let lastVersion = -1, slowFrames = 0, sampled = 0;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    const reduced = story.reduced();
    const ambient = !reduced && now < activeUntil;
    ambW += ((ambient ? 1 : 0) - ambW) * (1 - Math.exp(-dt * 2.5));
    if (ambW < 0.002) ambW = 0;
    const animating = !reduced && ambW > 0;
    const kfs = story.keyframes;
    if (kfs.length < 2) return;
    if (story.version !== lastVersion) { lastVersion = story.version; needsRender = true; }

    const target = storyT();
    const prevT = t;
    if (reduced) t = Math.round(target);            // reduced motion: calm, discrete states
    else {
      if (Math.abs(target - t) > 2.5) t = target - Math.sign(target - t) * 2.5;
      t += (target - t) * (1 - Math.exp(-dt * 5));
      if (Math.abs(target - t) < 1e-4) t = target;
    }
    const prevPx = pointer.x, prevPy = pointer.y;
    if (reduced) pointer.x = pointer.y = 0;
    else if (animating) {
      pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 3)) * ambW;
      pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 3)) * ambW;
      time += dt * ambW;
    }

    const moved = t !== prevT || pointer.x !== prevPx || pointer.y !== prevPy;
    if (!animating && !moved && !needsRender) return;   // render on demand when nothing animates
    needsRender = false;

    sample(t, kfs);
    apply(time);
    placeCamera(time, !reduced);
    if (S.opacity > 0.001) renderer.render(scene, camera);

    if (!ready) { ready = true; onReady && onReady(); }

    /* Adaptive quality: step the resolution down if frames are consistently slow. */
    if (ambient && ambW > 0.99 && sampled < 600) {
      sampled++;
      slowFrames = dt > 0.026 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
      if (slowFrames > 45 && dpr > 1) { dpr = Math.max(1, dpr - 0.25); renderer.setPixelRatio(dpr); renderer.setSize(W, H, false); slowFrames = 0; }
    }
  }
  if (/[?&]debug\b/.test(location.search)) window.__mvs = { scene, hero, grains, stem, leaves, packGroup, S, LAY };
  raf = requestAnimationFrame(frame);
  return { stop: () => cancelAnimationFrame(raf) };
}
