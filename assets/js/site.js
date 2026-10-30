/* =====================================================================
   Sangat - page behaviour
   Renders assets/js/content.js into the page, runs navigation, the pinned
   farm-to-pack sequence and scroll reveals, and tells the 3D grain scene
   (assets/js/grain-scene.js) where each chapter sits on the page.
   Content lives in content.js - nothing here needs editing for copy changes.
   ===================================================================== */
(function () {
  "use strict";
  const C = window.MVS_CONTENT;
  if (!C) return;

  const SCRIPT_SRC = document.currentScript && document.currentScript.src;
  const root = document.documentElement;
  const RM = matchMedia("(prefers-reduced-motion: reduce)");
  const DESKTOP = matchMedia("(min-width: 900px)");

  const ICONS = {
    water:'<path d="M12 3.5c3 4 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6 5.5-10Z"/><path d="M9.5 14.5c.3 1.3 1.2 2.2 2.5 2.5"/>',
    leaf:'<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14"/><path d="M5 19c3-4 6-7 10-9"/>',
    scout:'<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/><path d="M10.5 13V8.5c1.5 0 2.5 1 2.5 2.5"/>',
    straw:'<path d="M3 19h18"/><path d="M6 19c1-5 2-9 2-13M11 19c0-5 .5-9 1.5-13M16 19c-.5-5-1.5-9-3-12"/><path d="M4 21.5h16"/>',
    calendar:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4M8 14h3M8 17h6"/>',
    sickle:'<path d="M19 5c-6-2-12 2-12 8 0 2 1 3 2 4"/><path d="M9 17 5 21"/><path d="M19 5c-2 5-6 8-10 8"/>',
    hand:'<path d="M12 21c-4-1.5-7-4-7-9V6l7-3 7 3v6c0 5-3 7.5-7 9Z"/><path d="m9 12 2 2 4-4"/>',
    sprout:'<path d="M12 21v-9"/><path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6Z"/><path d="M12 10c0-3 2-5 6-5 0 3-2 5-6 5Z"/>',
    sack:'<path d="M8 4h8l-1.5 3c3 1.5 4.5 5 4.5 8.5C19 19 16 21 12 21s-7-2-7-5.5C5 12 6.5 8.5 9.5 7Z"/><path d="M9.5 7h5"/>',
    mill:'<path d="M4 21V10l5-3v3l5-3v3l6-3v14Z"/><path d="M8 21v-4h3v4"/>',
    pack:'<path d="M6 7h12l-1 14H7Z"/><path d="M8 7c0-2 1.5-4 4-4s4 2 4 4"/><path d="M9 13h6"/>',
    bowl:'<path d="M3 11h18c0 5-4 9-9 9s-9-4-9-9Z"/><path d="M8 8c0-1 1-1 1-2M12 8c0-1 1-1 1-2M16 8c0-1 1-1 1-2"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    share:'<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4.1M8.2 13.2l7.6 4.1"/>'
  };
  const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k] || ""}</svg>`;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const rich = (s) => esc(s).replace(/&lt;(\/?)em&gt;/g, "<$1em>");
  const plain = (s) => String(s ?? "").replace(/<\/?em>/g, "");
  const has = (s) => typeof s === "string" && s.trim() !== "";
  const safeUrl = (u) => /^(https:\/\/|assets\/)/.test(u || "") ? u : "";
  const pad = (n) => String(n).padStart(2, "0");
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), C.chapters || {});

  /* Real photos: only shown when configured, and removed again if they fail to load. */
  function photoHtml(photo, i) {
    const url = safeUrl(photo && photo.src);
    return url ? `<div class="photo"><img src="${esc(url)}" alt="${esc(photo.alt || "")}" loading="lazy" decoding="async" data-photo="${i}"></div>` : "";
  }

  function render() {
    const S = C.site;
    document.querySelectorAll(".brand-name").forEach(el => el.textContent = S.brandName);
    $("navList").innerHTML = C.nav.map(n => `<li><a href="${esc(n.href)}">${esc(n.label)}</a></li>`).join("");
    document.querySelectorAll("[data-ch]").forEach(el => { el.textContent = get(el.dataset.ch) || ""; });

    /* Hero */
    $("heroDeva").textContent = C.hero.deva;
    $("heroTag").textContent = C.hero.kicker || "";
    $("heroTitle").innerHTML = rich(C.hero.headline);
    $("heroLead").textContent = C.hero.lead;
    $("heroCta").querySelector("span").textContent = C.hero.cta;
    $("heroLink").textContent = C.hero.link;

    /* 01 Farmers */
    $("farmersLead").textContent = C.farmersLead;
    $("farmerProfiles").innerHTML = C.farmers.map((f, i) => {
      const facts = (f.facts || []).filter(r => has(r[1]));
      return `<article class="farmer reveal" aria-labelledby="farmerName${i}">
        ${photoHtml(f.photo, i)}
        <div class="farmer-body">
          ${has(f.kicker) ? `<p class="kicker">${esc(f.kicker)}</p>` : ""}
          <h3 id="farmerName${i}">${esc(f.name)}</h3>
          ${has(f.place) ? `<p class="place">${esc(f.place)}</p>` : ""}
          ${has(f.story) ? `<p class="story">${esc(f.story)}</p>` : ""}
          ${facts.length ? `<ul class="facts">${facts.map(r => `<li><span>${esc(r[0])}</span><span>${esc(r[1])}</span></li>`).join("")}</ul>` : ""}
          ${has(f.quote) ? `<blockquote class="quote">“${esc(f.quote)}”${has(f.quoteBy) ? `<cite>${esc(f.quoteBy)}</cite>` : ""}</blockquote>` : ""}
        </div></article>`;
    }).join("");
    document.querySelectorAll("img[data-photo]").forEach(img => img.addEventListener("error", () => img.parentElement.remove(), { once: true }));

    $("mvs").innerHTML = `<h3>${esc(C.mvs.title)}</h3><p class="mvs-intro">${esc(C.mvs.intro)}</p>
      <ul>${C.mvs.items.map(m => `<li>${icon(m.icon)}<b>${esc(m.title)}</b><p>${esc(m.text)}</p></li>`).join("")}</ul>`;

    /* 02 Practices */
    $("practicesLead").textContent = C.practicesLead;
    $("practiceIntro").innerHTML = `<h3>${esc(C.practiceIntro.title)}</h3><p>${esc(C.practiceIntro.text)}</p>`;
    $("practiceList").innerHTML = C.practices.map((p, i) => `
      <article class="p-card reveal" id="practice-${esc(p.id)}" aria-labelledby="ph-${esc(p.id)}">
        <div class="p-top"><span class="p-theme">${icon(p.icon)}${esc(p.theme)}</span><span class="p-num" aria-hidden="true">${pad(i + 1)} / ${pad(C.practices.length)}</span></div>
        <h3 id="ph-${esc(p.id)}">${esc(p.title)}</h3>
        <div class="p-cols">
          <div><p class="p-label">In the field</p><p>${esc(p.does)}</p></div>
          <div class="why"><p class="p-label">Why it matters</p><p>${esc(p.why)}</p></div>
        </div>
      </article>`).join("");

    /* 03 Why */
    $("whyLead").textContent = C.whyLead;
    let dp = 0;
    const num = (v, money) => (money ? "₹" : "") + Number(v).toLocaleString("en-IN", { minimumFractionDigits: dp, maximumFractionDigits: dp });
    const bars = (b) => {
      if (!b) return "";
      dp = Math.max(...[b.srp, b.non].map(v => (String(v).split(".")[1] || "").length));
      const max = Math.max(b.srp, b.non);
      const row = (label, v, cls) => `<div class="cmp-row ${cls}"><span class="cmp-k">${label}</span>` +
        `<span class="cmp-bar"><i style="width:${(v / max * 100).toFixed(1)}%"></i></span><span class="cmp-v">${esc(num(v, b.money))}</span></div>`;
      return `<div class="cmp" role="img" aria-label="${esc(`SRP ${num(b.srp, b.money)}, non-SRP ${num(b.non, b.money)} ${b.unit}`)}">` +
        row("SRP", b.srp, "srp") + row("Non-SRP", b.non, "non") + `<p class="cmp-unit">${esc(b.unit)}</p></div>`;
    };
    $("whyList").innerHTML = C.why.map((w, i) =>
      `<li class="reveal"><span class="n" aria-hidden="true">${pad(i + 1)}</span><div><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p>` +
      (w.stat ? `<div class="stat"><p class="stat-v">${esc(w.stat.value)}</p><p class="stat-l">${esc(w.stat.label)}</p>${bars(w.bars)}` +
        (w.facts && w.facts.length ? `<ul class="stat-facts">${w.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul>` : "") + `</div>` : "") +
      `</div></li>`).join("");
    const S2 = C.srpComparison;
    if (S2 && S2.groups && S2.groups.length) {
      $("srpTable").innerHTML = `<details class="srp-table"><summary><span>${esc(S2.summary)}</span><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M5 8l5 5 5-5"/></svg></summary>` +
        `<h3>${esc(S2.title)}</h3><div class="srp-scroll"><table><thead><tr>${S2.columns.map((c, i) => `<th scope="col"${i > 1 ? ' class="r"' : ""}>${esc(c)}</th>`).join("")}</tr></thead>` +
        S2.groups.map(g => `<tbody><tr class="g"><th scope="rowgroup" colspan="5">${esc(g.name)}</th></tr>` +
          g.rows.map(r => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td class="r srp-v">${esc(r[2])}</td><td class="r">${esc(r[3])}</td><td class="r d">${esc(r[4])}</td></tr>`).join("") + `</tbody>`).join("") +
        `</table></div><p class="srp-src">${esc(S2.source)}</p></details>`;
    }

    /* 04 Journey */
    $("journeyLead").textContent = C.journeyLead;
    $("journeyTotal").textContent = C.journey.length;
    $("steps").innerHTML = C.journey.map((s, i) => `<li class="step" data-step="${i}">
        <div class="rail" aria-hidden="true"><span class="node">${icon(s.icon)}</span><span class="step-bar"><i></i></span></div>
        <div class="step-body"><p class="k">Step ${i + 1}</p><h3><a class="step-link" href="#journey" data-goto="${i}">${esc(s.name)}</a></h3><p>${esc(s.text)}</p></div>
      </li>`).join("");
    const meter = document.createElement("div");
    meter.className = "journey-meter";
    meter.setAttribute("aria-hidden", "true");
    meter.innerHTML = C.journey.map(() => "<span><i></i></span>").join("");
    $("steps").before(meter);

    /* Closing - the heading is revealed word by word as you scroll */
    if (has(C.closing.kicker)) $("closeKicker").textContent = C.closing.kicker; else $("closeKicker").remove();
    const title = $("closeTitle");
    title.setAttribute("aria-label", plain(C.closing.title));
    let em = false;
    title.innerHTML = C.closing.title.split(/(<\/?em>)/).map(part => {
      if (part === "<em>") { em = true; return ""; }
      if (part === "</em>") { em = false; return ""; }
      return part.split(/(\s+)/).map(w => /^\s+$/.test(w) || !w ? w : (em ? `<em class="w" aria-hidden="true">${esc(w)}</em>` : `<span class="w" aria-hidden="true">${esc(w)}</span>`)).join("");
    }).join("");
    $("closeText").textContent = C.closing.text;
    /* Gentle next steps: where to buy and contact appear only once they are filled in. */
    const mail = has(S.contactEmail) ? "mailto:" + S.contactEmail.trim() : "";
    const buy = safeUrl(C.closing.buyUrl);
    $("closeCtas").innerHTML =
      (buy ? `<a class="btn" href="${esc(buy)}" rel="noopener" target="_blank">${icon("pack")}<span>${esc(C.closing.buyLabel || "Where to buy")}</span></a>` : "")
      + `<button class="btn ${buy ? "ghost" : ""}" type="button" id="shareBtn">${icon("share")}<span>${esc(C.closing.shareLabel || "Share this story")}</span></button>`
      + (mail ? `<a class="btn ghost" href="${esc(mail)}">${icon("mail")}<span>Get in touch</span></a>` : "");

    /* Footer: only show contact details that exist */
    const contact = [
      mail ? `<li><a href="${esc(mail)}">${esc(S.contactEmail)}</a></li>` : "",
      has(S.contactPhone) ? `<li><a href="tel:${esc(S.contactPhone.replace(/[^+\d]/g, ""))}">${esc(S.contactPhone)}</a></li>` : "",
      safeUrl(S.website) ? `<li><a href="${esc(S.website)}" rel="noopener">${esc(S.website.replace(/^https:\/\//, ""))}</a></li>` : ""
    ].join("");
    const logo = document.querySelector("#siteHeader .brand .logo").outerHTML;
    $("footerCols").innerHTML = `
      <div><p class="brand">${logo}</p>${has(S.tagline) ? `<p class="tagline">${esc(S.tagline)}</p>` : ""}${has(S.taglineHi) ? `<p class="tagline-hi" lang="hi">${esc(S.taglineHi)}</p>` : ""}<p>${esc(C.footer.about)}</p></div>
      <div><h2>Explore</h2><ul>${C.nav.map(n => `<li><a href="${esc(n.href)}">${esc(n.label)}</a></li>`).join("")}</ul></div>
      <div><h2>${contact ? "Contact" : "In partnership with"}</h2>${contact ? `<ul>${contact}</ul>` : `<p>${esc(S.partnerName)}</p>`}</div>`;
    $("footerFine").innerHTML = `<span>© ${esc(S.year)} ${esc(S.brandName)}</span><span>${esc(C.footer.statutory)}</span>`;
  }

  /* ---------------------------------------------------------------------
     Story map: where each chapter of the 3D story sits on the page.
     The scene interpolates between these keyframes as you scroll.
     --------------------------------------------------------------------- */
  const Story = {
    version: 0,
    keyframes: [],
    content: C,
    reduced: () => RM.matches,
    pinned: () => root.classList.contains("can-3d")
  };
  window.MVSStory = Story;

  const headH = () => $("siteHeader").offsetHeight || 68;
  const docTop = (el) => el.getBoundingClientRect().top + scrollY;
  function stickyAncestor(el) {
    for (let n = el; n && n !== document.body; n = n.parentElement) if (getComputedStyle(n).position === "sticky") return n;
    return null;
  }
  /* Where the grain should sit on screen (0-1) when this keyframe is active, and how much room it has. */
  function focusOf(stage, y) {
    const vw = innerWidth, vh = innerHeight, r = stage.getBoundingClientRect();
    let top;
    const sticky = stickyAncestor(stage);
    if (sticky) top = headH() + (r.top - sticky.getBoundingClientRect().top);
    else top = r.top + scrollY - y;
    const h = r.height || vh * 0.5;
    return {
      fx: clamp((r.left + r.width / 2) / vw, 0.1, 0.9),
      fy: clamp((top + h / 2) / vh, 0.12, 0.88),
      fw: clamp(r.width / vw, 0.25, 1),
      fh: clamp(h / vh, 0.25, 1)
    };
  }
  const centerScroll = (el) => docTop(el) + el.offsetHeight / 2 - innerHeight / 2;

  function journeyGeometry() {
    const track = $("journeyTrack"), pin = track.querySelector(".journey-pin");
    const n = C.journey.length;
    const start = docTop(track) - headH();
    const stepH = Math.max(1, (track.offsetHeight - pin.offsetHeight) / n);
    return { start, stepH, n };
  }

  function computeKeyframes() {
    if (!root.classList.contains("can-3d")) { Story.keyframes = []; Story.version++; return; }
    const desk = DESKTOP.matches, vh = innerHeight, head = headH();
    const maxY = Math.max(1, document.documentElement.scrollHeight - vh);
    const q = (s) => document.querySelector(s);
    const kf = [];
    const add = (key, y, stage, ease) => kf.push(Object.assign({ key, y, ease: ease || "plateau" }, focusOf(stage, y)));
    const chapterY = (id) => {
      const stage = q(`[data-stage="${id}"]`);
      return desk ? docTop(stage.parentElement) - head + vh * 0.12 : centerScroll(stage);
    };

    add("hero", 0, $("heroStage"));
    add("farmers", chapterY("farmers"), q('[data-stage="farmers"]'));
    const cards = document.querySelectorAll(".p-card");
    add("practicesA", chapterY("practices"), q('[data-stage="practices"]'));
    add("practicesB", centerScroll(cards[cards.length - 1]), q('[data-stage="practices"]'), "linear");
    add("why", chapterY("why"), q('[data-stage="why"]'));
    const J = journeyGeometry(), jStage = q('[data-stage="journey"]');
    for (let i = 0; i < J.n; i++) add("journey" + i, J.start + (i + 0.5) * J.stepH, jStage);
    const closingStage = q('[data-stage="closing"]');
    const closeY = centerScroll(closingStage);
    add("closing", closeY, closingStage);
    add("end", Math.max(closeY + vh * 0.3, docTop($("siteFooter")) - vh * 0.55), closingStage);

    /* Keep keyframes inside the scrollable range and strictly increasing. */
    let prev = -Infinity;
    kf.forEach((k, i) => {
      k.y = clamp(k.y, 0, maxY);
      if (i === 0) k.y = 0;
      if (k.y <= prev) k.y = prev + 1;
      prev = k.y;
    });
    Story.keyframes = kf;
    Story.version++;
  }

  /* ---------------------------------------------------------------------
     Navigation, progress, pinned journey and word reveal - one scroll loop
     --------------------------------------------------------------------- */
  function initNav() {
    const header = $("siteHeader"), btn = $("menuBtn");
    const setMenu = (open) => {
      header.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector("span").textContent = open ? "Close" : "Menu";
    };
    btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
    $("mainNav").addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && header.classList.contains("open")) { setMenu(false); btn.focus(); } });
    document.addEventListener("click", (e) => { if (header.classList.contains("open") && !header.contains(e.target)) setMenu(false); });

    $("toTop").addEventListener("click", () => {
      scrollTo({ top: 0, behavior: RM.matches ? "auto" : "smooth" });
      $("top").setAttribute("tabindex", "-1"); $("top").focus({ preventScroll: true });
    });

    /* Highlight the section on screen in the menu */
    if ("IntersectionObserver" in window) {
      const spy = (links, attr) => {
        const targets = links.map(a => document.querySelector(a.getAttribute(attr))).filter(Boolean);
        const io = new IntersectionObserver((entries) => entries.forEach(en => {
          if (en.isIntersecting) links.forEach(a => a.setAttribute("aria-current", String(a.getAttribute(attr) === "#" + en.target.id)));
        }), { rootMargin: "-45% 0px -50% 0px" });
        targets.forEach(t => io.observe(t));
      };
      spy([...document.querySelectorAll("#navList a")], "href");
    }
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (RM.matches || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }

  /* Word reveal (pattern adapted from Motion's "Scroll word reveal" on 21st.dev):
     each word rises from a resting opacity as the heading moves up the screen. */
  const REST = 0.22, SPAN = 0.8, WINDOW = 0.2;
  function updateWords() {
    const title = $("closeTitle"), words = title.querySelectorAll(".w");
    if (RM.matches) { words.forEach(w => w.style.removeProperty("--o")); return; }
    const r = title.getBoundingClientRect(), vh = innerHeight;
    const atEnd = scrollY >= document.documentElement.scrollHeight - vh - 2;   // always finish at the bottom
    const p = atEnd ? 1 : clamp((vh * 0.95 - r.top) / (vh * 0.42), 0, 1);   // fully revealed by mid-screen
    words.forEach((w, i) => {
      const s = words.length <= 1 ? 0 : (i / (words.length - 1)) * SPAN, e = Math.min(1, s + WINDOW);
      const o = p <= s ? REST : p >= e ? 1 : REST + (1 - REST) * ((p - s) / (e - s));
      w.style.setProperty("--o", o.toFixed(3));
    });
  }

  /* Pinned farm-to-pack sequence (pattern adapted from "Scroll Reveal Content A" on 21st.dev):
     numbered steps with a progress line that fills as you scroll through each one. */
  let activeStep = -1;
  function updateJourney() {
    if (!root.classList.contains("can-3d")) return;
    const J = journeyGeometry();
    const p = clamp((scrollY - J.start) / (J.n * J.stepH), 0, 0.99999);
    const idx = Math.floor(p * J.n), local = p * J.n - idx;
    const items = $("steps").children, segs = document.querySelectorAll(".journey-meter i");
    for (let i = 0; i < items.length; i++) {
      const v = i < idx ? 1 : i === idx ? local : 0;
      items[i].querySelector(".step-bar i").style.setProperty("--p", v.toFixed(3));
      if (segs[i]) segs[i].style.setProperty("--p", (i < idx ? 1 : i === idx ? Math.max(0.08, local) : 0).toFixed(3));
    }
    if (idx !== activeStep) {
      activeStep = idx;
      for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle("is-active", i === idx);
        items[i].classList.toggle("is-done", i < idx);
        if (i === idx) items[i].setAttribute("aria-current", "step"); else items[i].removeAttribute("aria-current");
      }
      $("journeyNow").textContent = idx + 1;
    }
  }
  function initJourneyLinks() {
    $("steps").addEventListener("click", (e) => {
      const a = e.target.closest("[data-goto]");
      if (!a || !root.classList.contains("can-3d")) return;
      e.preventDefault();
      const J = journeyGeometry(), i = +a.dataset.goto;
      scrollTo({ top: J.start + (i + 0.5) * J.stepH, behavior: RM.matches ? "auto" : "smooth" });
    });
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
      $("siteHeader").classList.toggle("solid", y > 40);
      $("toTop").classList.toggle("show", y > innerHeight * 0.9);
      $("progress").style.transform = `scaleX(${h > 0 ? clamp(y / h, 0, 1) : 0})`;
      $("heroStage").style.setProperty("--shadow", clamp(1 - y / (innerHeight * 0.3), 0, 1).toFixed(3));
      updateJourney();
      updateWords();
    });
  }

  /* ---------------------------------------------------------------------
     Share: the native share sheet where there is one, otherwise copy the link.
     --------------------------------------------------------------------- */
  function initShare() {
    const btn = $("shareBtn"), status = $("shareStatus");
    if (!btn) return;
    const data = { title: document.title, text: C.closing.shareText || "", url: location.href.split("#")[0] };
    btn.addEventListener("click", async () => {
      try {
        if (navigator.share) { await navigator.share(data); return; }
        await navigator.clipboard.writeText(data.url);
        status.textContent = "Link copied - thank you for sharing.";
      } catch (e) {
        if (e && e.name === "AbortError") return;
        status.textContent = "Copy this link to share: " + data.url;
      }
      setTimeout(() => { status.textContent = ""; }, 5000);
    });
  }

  /* ---------------------------------------------------------------------
     3D grain: loaded after the page is readable; falls back gracefully.
     --------------------------------------------------------------------- */
  function disable3d(reason) {
    if (reason) console.warn("[MVS] 3D grain unavailable:", reason);
    root.classList.remove("can-3d", "has-3d");
    computeKeyframes();
    onScroll();
  }
  function load3d() {
    if (!root.classList.contains("can-3d")) return;
    /* The single-file build (npm run build:standalone) inlines the scene as window.MVSGrainScene. */
    const url = new URL("grain-scene.js", SCRIPT_SRC || location.href).href;
    const scene = window.MVSGrainScene ? Promise.resolve(window.MVSGrainScene) : import(url);
    scene.then((m) => m.start({
      canvas: $("grainCanvas"),
      story: Story,
      onReady: () => root.classList.add("has-3d"),
      onFail: disable3d
    })).catch(disable3d);
  }

  /* ---------------------------------------------------------------------
     Boot
     --------------------------------------------------------------------- */
  render();
  initNav();
  initReveal();
  initJourneyLinks();
  initShare();
  computeKeyframes();
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  let resizeTimer = 0, lastW = innerWidth, lastH = innerHeight;
  addEventListener("resize", () => {
    /* Ignore the small height changes mobile browsers make when the address bar slides. */
    const touch = matchMedia("(pointer: coarse)").matches;
    if (touch && innerWidth === lastW && Math.abs(innerHeight - lastH) < 140) return;
    lastW = innerWidth; lastH = innerHeight;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { computeKeyframes(); onScroll(); }, 120);
  });
  RM.addEventListener && RM.addEventListener("change", () => {
    root.classList.toggle("reduced-motion", RM.matches);
    computeKeyframes(); onScroll();
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { computeKeyframes(); onScroll(); });
  addEventListener("load", () => { computeKeyframes(); onScroll(); });
  if ("ResizeObserver" in window) {
    let raf = 0;
    new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(computeKeyframes); }).observe($("main"));
  }

  /* Start the 3D scene once the browser is idle, so text and layout always come first. */
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
  idle(load3d, { timeout: 1200 });
})();
