/* ============================================================
   MCRANKED — SITE DATA  (v2)
   ------------------------------------------------------------
   v3 changes (per user request):
   - REMOVED kits: SMP, Bow, Shield (on top of the v2 removals)
   - Kept kits: Vanilla, UHC, Pot, Sword, Axe, Mace, Diamond SMP, Cart
   - All demo PLAYERS removed (empty — add via admin.html)
   - LIVE_MATCHES / NEWS / SERVER_REGIONS / TOURNEYS emptied
   - Every other original field & kit kept intact
   ============================================================ */

/* ---------- SITE CONFIG ---------- */
const SITE = {
  siteName: "MCRANKED",
  tagline: "The #1 Cracked & Premium Minecraft PvP Tierlist",
  discordUrl: "https://discord.gg/ubX4GH3qg4",
  serverIp: "play.mcranked.gg",
  serverIpLegacy: "join our discord",
  logoUrl: "PASTE_YOUR_TIERLIST_LOGO_LINK_HERE",
  twitter: "https://twitter.com/mcranked",
  youtube: "https://youtube.com/@mcranked",
  twitch: "https://twitch.tv/mcranked",
  tiktok: "https://tiktok.com/@mcranked",
  storeUrl: "#",
  clientUrl: "#",
  nextReveal: "2026-11-15T11:00:00-05:00",
  nextRevealLabel: "Sunday · November 15 · 11:00 AM EST",
  announcement: "Player rankings will appear here once players are added.",
  /* Global stats are derived from real data in app.js (no fake numbers). */
  stats: {
    playersRanked: 0,
    testsCompleted: 0,
    activeTesters: 0,
    kitsTracked: 0,
    matchesToday: 0,
    countries: 0
  }
};

/* ---------- REGIONS (kept) ---------- */
const REGIONS = {
  AS: { code: "AS", name: "Asia",          flag: "🌏", color: "#e7d34b" },
  EU: { code: "EU", name: "Europe",        flag: "🇪🇺", color: "#55d98c" },
  NA: { code: "NA", name: "North America", flag: "🌎", color: "#ff647c" },
  ME: { code: "ME", name: "Middle East",   flag: "🌍", color: "#7fb2ff" },
  SA: { code: "SA", name: "South America", flag: "🌎", color: "#ffa94d" },
  OC: { code: "OC", name: "Oceania",       flag: "🌊", color: "#4dd0e1" },
  AF: { code: "AF", name: "Africa",        flag: "🌍", color: "#c792ea" }
};

/* ---------- TIER DEFINITIONS (kept) ---------- */
const TIER_DEFS = [
  { code: "HT1", label: "High Tier 1", min: 400, color: "#ffd83f", bg: "#473b1b" },
  { code: "MT1", label: "Mid Tier 1",  min: 350, color: "#ffd83f", bg: "#473b1b" },
  { code: "LT1", label: "Low Tier 1",  min: 300, color: "#e8c84a", bg: "#493b20" },
  { code: "HT2", label: "High Tier 2", min: 250, color: "#bfc9d8", bg: "#343d4d" },
  { code: "MT2", label: "Mid Tier 2",  min: 200, color: "#bfc9d8", bg: "#343d4d" },
  { code: "LT2", label: "Low Tier 2",  min: 150, color: "#aeb9c9", bg: "#303a49" },
  { code: "HT3", label: "High Tier 3", min: 125, color: "#ff9c51", bg: "#4a3021" },
  { code: "MT3", label: "Mid Tier 3",  min: 100, color: "#ff9c51", bg: "#4a3021" },
  { code: "LT3", label: "Low Tier 3",  min: 75,  color: "#e58a49", bg: "#483021" },
  { code: "HT4", label: "High Tier 4", min: 50,  color: "#9fb0c6", bg: "#2b3546" },
  { code: "MT4", label: "Mid Tier 4",  min: 30,  color: "#9fb0c6", bg: "#2b3546" },
  { code: "LT4", label: "Low Tier 4",  min: 15,  color: "#8fa0b6", bg: "#28313f" },
  { code: "HT5", label: "High Tier 5", min: 5,   color: "#8b98ab", bg: "#232c39" },
  { code: "MT5", label: "Mid Tier 5",  min: 1,   color: "#8b98ab", bg: "#232c39" },
  { code: "LT5", label: "Low Tier 5",  min: 0.75,color: "#858d9c", bg: "#202834" },
  { code: "HT6", label: "High Tier 6", min: 0.5, color: "#7c8798", bg: "#1e2530" },
  { code: "MT6", label: "Mid Tier 6",  min: 0.25,color: "#7c8798", bg: "#1e2530" },
  { code: "LT6", label: "Low Tier 6",  min: 0.125,color:"#767f8e", bg: "#1c222c" },
  { code: "ST6", label: "Starter",     min: 0,   color: "#6f7887", bg: "#1a1f28" }
];

/* ---------- MODES / KITS ----------
   Kept: vanilla, uhc, pot, smp, sword, axe, mace (original)
   Kept new: shield, diamond-smp, cart, bow
   Removed: nethop, crystal, spear, early, late, netherite-pot,
            creeper, end-game
*/
const MODES = [
  { id: "overall",      n: "Overall",       i: "🏆", icon: "images/crown.png",  group: "core" },
  { id: "vanilla",      n: "Vanilla",       i: "🟪", icon: "",                 group: "core" },
  { id: "uhc",          n: "UHC",           i: "❤️", icon: "",                 group: "core" },
  { id: "pot",          n: "Pot",           i: "🧪", icon: "",                 group: "core" },
  { id: "sword",        n: "Sword",         i: "🗡️", icon: "",                 group: "core" },
  { id: "axe",          n: "Axe",           i: "🪓", icon: "",                 group: "core" },
  { id: "mace",         n: "Mace",          i: "🔨", icon: "",                 group: "core" },
  /* ---- kept new kits ---- */
  { id: "diamond-smp",  n: "Diamond SMP",   i: "🔷", icon: "",                 group: "new" },
  { id: "cart",         n: "Cart",          i: "🛒", icon: "",                 group: "new" }
];

/* ---------- PLAYERS ----------
   Empty by design. Add players from admin.html.
   Each player keeps the original fields (id, name, region, skinUrl,
   namemc, results{...}, totalPoints, position) plus the new fields.
*/
/* PLAYERS are loaded from players.js (generated by admin.html).
   data.js merges MCRANKED_PLAYERS so the site shows what the admin saved. */
const PLAYERS = (typeof MCRANKED_PLAYERS !== "undefined" && Array.isArray(MCRANKED_PLAYERS)) ? MCRANKED_PLAYERS : [];

/* ---------- LIVE MATCHES (removed — section deleted from home) ---------- */
const LIVE_MATCHES = [];

/* ---------- RECENT NEWS (emptied — section shows empty state) ---------- */
const NEWS = [];

/* ---------- SERVER REGIONS (emptied — user adds own servers) ---------- */
const SERVER_REGIONS = [];

/* ---------- TOURNEYS (emptied — section shows empty state) ---------- */
const TOURNEYS = [];

/* ---------- BADGE CATALOG (kept — used for badge colours) ---------- */
const BADGE_CATALOG = {
  "Rising Star": "#7fb2ff", "Cracked Verified": "#55d98c", "#1 Overall": "#ffd83f",
  "#2 Overall": "#d8e0ea", "#3 Overall": "#d8873d", "Veteran Tester": "#c792ea",
  "Multi-Kit Master": "#ff9c51", "UHC Specialist": "#ff647c",
  "Mace Main": "#ffa94d", "Vanilla Specialist": "#9fb0c6",
  "Tester": "#c792ea", "All-Rounder": "#7fb2ff", "Pot Threat": "#ff9c51",
  "Aggressive Duelist": "#ff647c", "Pot Main": "#ff9c51",
  "Grinder": "#9fb0c6", "Oceania Top": "#4dd0e1", "Duelist": "#9fb0c6",
  "Sword Grinder": "#9fb0c6", "Sword Main": "#9fb0c6", "Mace Specialist": "#ffa94d"
};

/* ---------- ICONS (only kept kits) ---------- */
const ICONS = {
  overall: "images/crown.png",
  vanilla: "https://www.mctiers.it/modes/vanilla.svg",
  uhc: "https://www.mctiers.it/modes/uhc.svg",
  pot: "https://www.mctiers.it/modes/diapot.svg",
  sword: "https://www.mctiers.it/modes/sword.svg",
  axe: "https://tiermaker.com/images/media/template_images/2024/18026725/all-marlow-mctiers-and-subtiers-pvp-gamemodes-18026725/axe.png",
  mace: "https://tiermaker.com/images/media/template_images/2024/18026725/all-marlow-mctiers-and-subtiers-pvp-gamemodes-18026725/mace.png",
  "diamond-smp": "https://www.mctiers.it/modes/diasmp.svg",
  cart: "https://www.mctiers.it/modes/cart.svg"
};

/* ---------- EXPORT (global) ---------- */
window.MCRANKED = { SITE, REGIONS, TIER_DEFS, MODES, PLAYERS, LIVE_MATCHES, NEWS, SERVER_REGIONS, TOURNEYS, BADGE_CATALOG, ICONS };
