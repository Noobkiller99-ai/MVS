/* =====================================================================
   EDIT CONTENT HERE
   Everything shown on the page comes from this object.
   Leave a field as "" and it is hidden on the page.
   Only add facts you can stand behind (see claims_and_evidence_register.csv).
   ===================================================================== */
window.MVS_CONTENT = {
  site: {
    brandName: "Sangat",
    tagline: "Sanjhi Soch, Sunehra Kal",          // always exactly this; never in capitals
    taglineHi: "साँझी सोच, सुनहरा कल",
    partnerName: "Manav Vikas Sansthan",
    contactEmail: "",     // e.g. "hello@example.org" - adds "Get in touch" buttons and a footer link
    contactPhone: "",     // e.g. "+91 00000 00000"
    website: "",          // e.g. "https://www.example.org"
    year: "2026"
  },

  nav: [
    { label: "The farmers", href: "#farmers" },
    { label: "Practices", href: "#practices" },
    { label: "Why it matters", href: "#why" },
    { label: "Farm to pack", href: "#journey" }
  ],

  hero: {
    kicker: "Sangat premium basmati",
    deva: "हर दाने की अपनी कहानी",
    headline: "Every grain <em>has a story.</em>",
    lead: "Meet the farmers behind your rice. Discover the cultivation practices they follow and the people working alongside them.",
    cta: "Explore the journey",
    link: "See the practices"
  },

  /* Chapter headings (eyebrow number, eyebrow label, heading) */
  chapters: {
    farmers:   { num: "01", label: "The people",   title: "Meet the farmers" },
    practices: { num: "02", label: "In the field", title: "Practices that matter" },
    why:       { num: "03", label: "The reasons",  title: "Why these practices matter" },
    journey:   { num: "04", label: "The journey",  title: "From farm to pack" }
  },

  farmersLead: "This rice is grown by farming families who work alongside Manav Vikas Sansthan (MVS). Their knowledge of the land, the season and the crop is where every grain begins.",

  /* Farmer profiles. Add real farmers only with their consent; empty fields are hidden.
     Example:
     { kicker: "Farmer", name: "Full name", place: "Village, District",
       story: "Two or three sentences, approved by the farmer.",
       quote: "Their own words.", quoteBy: "Name, Village",
       photo: { src: "assets/photos/farmer-01.jpg", alt: "Name in their field" },
       facts: [["Grows basmati on", "2 acres"], ["Working with MVS since", "2024"]] } */
  farmers: [
    {
      kicker: "Our farming families",
      name: "The families behind the harvest",
      place: "",
      story: "Basmati asks a lot of the people who grow it: careful water through the season, patience while the long grain matures, and close attention at harvest. The families who grow this rice bring that care to every field.",
      quote: "",
      quoteBy: "",
      photo: { src: "", alt: "" },
      facts: [
        ["Crop", "Basmati paddy"],
        ["Growing season", "Kharif - sown with the monsoon, harvested in autumn"],
        ["Working with", "Manav Vikas Sansthan (MVS)"],
        ["Region", ""]
      ]
    }
  ],

  mvs: {
    title: "How MVS works with farmers",
    intro: "Manav Vikas Sansthan (MVS) works alongside farming families, bringing practical support to the field and helping their rice reach your table.",
    items: [
      { icon: "sprout",   title: "Guidance in the field", text: "Practical advice on water, soil, crop care and harvest, shared in the field through the season." },
      { icon: "calendar", title: "Planning the season",   text: "Support with crop calendars and simple season records, so decisions are easier to make." },
      { icon: "pack",     title: "A route to market",     text: "Bringing the harvest to a brand that tells the story of the people who grew it." }
    ]
  },

  practicesLead: "Seven practices shape how this rice is grown. Each one is practical, and each has a clear reason behind it.",
  practiceIntro: {
    title: "Good basmati starts in the field.",
    text: "From the first irrigation to the last bag of paddy, small decisions add up. These are the practices we work on with farmers, season after season."
  },

  practices: [
    { id: "water", theme: "Water", icon: "water", title: "Irrigating with care",
      does: "We work with farmers to level their plots, keep field bunds strong and, where the field allows, let the soil dry between irrigations instead of keeping it flooded all season.",
      why: "It aims to make every watering count, using a resource the whole farming community shares." },
    { id: "nutrients", theme: "Nutrients", icon: "leaf", title: "Fertiliser matched to need",
      does: "Fertiliser is timed and measured to the crop's stage and local advice, guided by soil tests where available, with farmyard or green manure used where conditions allow.",
      why: "Feeding the crop when it needs it helps nutrients reach the plant rather than being lost to soil and water." },
    { id: "ipm", theme: "Pest care", icon: "scout", title: "Looking before spraying",
      does: "Farmers walk their fields regularly to check for pests and disease, use preventive methods first, and turn to registered crop-protection products only when needed, following the label.",
      why: "It supports more considered pest control that protects the crop, beneficial insects and the people doing the work." },
    { id: "residue", theme: "Soil", icon: "straw", title: "Straw back to the soil",
      does: "After harvest, we encourage farmers to manage rice straw and stubble without burning: working it into the soil, using it as mulch or collecting it for other uses.",
      why: "Straw returns organic matter to the soil, and avoiding field fires keeps smoke out of the air." },
    { id: "records", theme: "Planning", icon: "calendar", title: "A plan for every season",
      does: "Farmers keep a crop calendar and a simple season record covering field size, seed variety, inputs, irrigations and harvest, with help from the MVS team.",
      why: "Good records help farmers plan inputs and labour, and see what is working from one season to the next." },
    { id: "harvest", theme: "Harvest", icon: "sickle", title: "Harvest and storage done well",
      does: "Grain is harvested when it is mature, using clean equipment, then dried and stored so it stays protected from moisture, pests and contamination.",
      why: "Careful handling protects the long grain and aroma basmati is known for, and keeps varieties from being mixed." },
    { id: "safety", theme: "Safety", icon: "hand", title: "Keeping people safe",
      does: "Farmers and workers receive guidance on handling crop-protection products safely, wearing protective equipment when spraying, and storing chemicals away from food and children.",
      why: "It helps protect the health of farming families and the people they work with." }
  ],

  whyLead: "Farms that follow Sustainable Rice Platform (SRP) practices, compared with farms that do not.",

  /* Why it matters: one figure per reason, from MVS's SRP vs non-SRP comparison only
     (brand/sangat/sources/srp-vs-non-srp.md). Keep it to what a buyer will read; remove a reason to hide it. */
  why: [
    { title: "Water", stat: "19.7%", label: "less water for every kilo of rice",
      bars: { unit: "litres per kg of rice", srp: 1490, non: 1855 },
      note: "Fewer irrigations: 14.6 per acre instead of 17.2." },
    { title: "Crop protection", stat: "36.8%", label: "less insecticide",
      bars: { unit: "ml-g per acre", srp: 96, non: 152 },
      note: "Fields are checked before spraying: 1.4 sprays instead of 2.0." },
    { title: "Fertiliser", stat: "21.8%", label: "less nitrogen for every kilo of rice",
      bars: { unit: "g of nitrogen per kg of rice", srp: 27.4, non: "35.0" },
      note: "And no DAP at all, against 20 kg per acre." },
    { title: "Livelihoods", stat: "₹5,323", label: "more net return per acre for the farmer",
      bars: { unit: "net return, ₹ per acre", srp: 60130, non: 54807, money: true },
      note: "With 5.7% more paddy from every acre." }
  ],
  whySource: "Source: MVS field comparison of SRP and non-SRP farms.",

  journeyLead: "From a field in the growing season to a bowl on your table, this is how the rice travels.",
  journey: [
    { name: "Farm",         icon: "sprout", text: "Grown by farming families who work alongside MVS." },
    { name: "Harvest",      icon: "sickle", text: "Cut when the grain is mature, then dried to protect its quality." },
    { name: "Collection",   icon: "sack",   text: "Paddy from the farms is gathered and brought for milling." },
    { name: "Milling",      icon: "mill",   text: "Hulled, cleaned and graded so the long grains go forward." },
    { name: "Packing",      icon: "pack",   text: "Packed and sealed, ready for the shelf." },
    { name: "Your kitchen", icon: "bowl",   text: "You open the pack and meet the people behind it." }
  ],

  closing: {
    kicker: "Your part of the story",
    title: "Every grain carries <em>someone's season of work.</em>",
    text: "Thank you for taking a moment to meet the people and practices behind your rice.",
    shareLabel: "Share this story",
    shareText: "Meet the farming families behind Sangat basmati.",   // used when sharing the page
    buyLabel: "Where to buy",
    buyUrl: ""            // e.g. "https://www.example.org/shop" - adds a "Where to buy" button
  },

  footer: {
    about: "Sangat premium basmati is brought to you with Manav Vikas Sansthan (MVS), working alongside the farming families who grow it.",
    statutory: "Ingredients, nutrition and other statutory information are printed on the pack."
  }
};
/* ============================ END OF CONTENT ============================ */
