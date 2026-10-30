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
    kicker: "Sangat premium basmati · with Manav Vikas Sansthan",
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

  whyLead: "Behind each practice is a simple reason, and the field numbers show what it adds up to. These figures compare farms following Sustainable Rice Platform (SRP) practices with farms that do not.",

  /* Why it matters. Figures come ONLY from MVS's SRP vs non-SRP comparison (srpComparison below).
     stat: the headline; bars: SRP vs non-SRP; facts: supporting lines. Remove any figure MVS cannot stand behind. */
  why: [
    { title: "Water", text: "Rice needs a lot of water, and the water a farm draws on is shared with its neighbours. Irrigating with care aims to make every watering count.",
      stat: { value: "19.7%", label: "less water for every kilo of rice" },
      bars: { unit: "litres per kg of rice", srp: 1490, non: 1855 },
      facts: ["2.6 fewer irrigations per acre: 14.6 instead of 17.2", "About 5.26 lakh litres of water saved per acre"] },
    { title: "Crop protection", text: "Checking fields before acting, and using crop-protection products only when they are needed, protects the crop, beneficial insects and the people in the field.",
      stat: { value: "36.8%", label: "less insecticide per acre" },
      bars: { unit: "ml-g of insecticide per acre", srp: 96, non: 152 },
      facts: ["30% fewer insecticide sprays: 1.4 instead of 2.0", "11.9% less pesticide in total for every quintal of rice"] },
    { title: "Fertiliser", text: "Feeding the crop what it needs, when it needs it, means less fertiliser lost to the soil and water around the field.",
      stat: { value: "21.8%", label: "less nitrogen for every kilo of rice" },
      bars: { unit: "g of nitrogen per kg of rice", srp: 27.4, non: "35.0" },
      facts: ["No DAP used, against 20 kg per acre on non-SRP farms", "17.2% less fertiliser in total for every kilo of rice"] },
    { title: "Soil and air", text: "Returning straw to the land instead of burning it keeps organic matter in the soil and smoke out of the air that villages breathe." },
    { title: "Livelihoods", text: "Spending less on fertiliser and sprays, while harvesting a little more, leaves more with the farming family at the end of the season.",
      stat: { value: "₹5,323", label: "more net return per acre for the farmer" },
      bars: { unit: "net return, ₹ per acre", srp: 60130, non: 54807, money: true },
      facts: ["5.7% more paddy per acre: 29.6 quintals instead of 28.0", "12.5% lower cost to grow a kilo of rice: ₹7.30 instead of ₹8.34"] }
  ],

  /* The comparison table under "Why it matters" (selected rows of MVS's SRP vs non-SRP data).
     Each row: [parameter, unit, SRP, non-SRP, change]. */
  srpComparison: {
    title: "SRP and non-SRP farms, side by side",
    summary: "See the full comparison",
    columns: ["", "Unit", "SRP", "Non-SRP", "Difference"],
    groups: [
      { name: "Water", rows: [
        ["Irrigations", "per acre", "14.6", "17.2", "15.1% fewer"],
        ["Water used", "litres per kg rice", "1,490", "1,855", "19.7% less"],
        ["Water productivity", "kg rice per m³", "0.671", "0.539", "24.5% higher"] ] },
      { name: "Crop protection", rows: [
        ["Insecticide", "ml-g per acre", "96", "152", "36.8% less"],
        ["Insecticide sprays", "number", "1.4", "2.0", "30.0% fewer"],
        ["Total pesticide", "ml-g per quintal rice", "38.1", "43.3", "11.9% less"] ] },
      { name: "Fertiliser", rows: [
        ["Nitrogen (N)", "g per kg rice", "27.4", "35.0", "21.8% less"],
        ["Phosphorus (P₂O₅)", "kg per acre", "2.6", "9.2", "72.2% less"],
        ["DAP", "kg per acre", "0", "20", "none used"],
        ["Total fertiliser", "g per kg rice", "75.6", "91.3", "17.2% less"] ] },
      { name: "Yield and income", rows: [
        ["Paddy yield", "quintals per acre", "29.6", "28.0", "5.7% more"],
        ["Cost of cultivation", "₹ per kg rice", "7.30", "8.34", "12.5% lower"],
        ["Net return", "₹ per acre", "60,130", "54,807", "9.7% higher"],
        ["Benefit : cost", "ratio", "5.16", "4.52", "14.4% higher"] ] }
    ],
    source: "Source: SRP vs non-SRP field comparison by Manav Vikas Sansthan (MVS). Milled rice assumes 67% recovery (FCI out-turn ratio); water = irrigations × 5 cm × 1 acre (2,02,343 litres per irrigation). SRP: the Sustainable Rice Platform standard for sustainable rice cultivation."
  },

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
