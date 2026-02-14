export interface NavItem {
  slug: string;
  path: string;
  label: string;
  shortLabel: string;
}

export interface NavModule {
  id: string;
  title: string;
  pages: NavItem[];
}

export const modules: NavModule[] = [
  {
    id: "m01",
    title: 'M01 – Z čoho je AI „uvarená"? 🍲',
    pages: [
      { slug: "00-uvod", path: "/00-uvod", label: "🅾️ Úvod", shortLabel: "Úvod" },
      { slug: "01-co-je-ai", path: "/01-co-je-ai", label: "1️⃣ Čo je AI a prečo ju (ne)využívame", shortLabel: "Čo je AI" },
      { slug: "02-prieskum-vyuzivania", path: "/02-prieskum-vyuzivania", label: "2️⃣ Ako je na tom svet: prieskum využívania AI", shortLabel: "Prieskum" },
      { slug: "03-historia", path: "/03-historia", label: "3️⃣ História umelej inteligencie", shortLabel: "História" },
      { slug: "04-buducnost", path: "/04-buducnost", label: "4️⃣ Budúcnosť AI", shortLabel: "Budúcnosť" },
      { slug: "05-spolupraca", path: "/05-spolupraca", label: "5️⃣ Princíp spolupráce s AI", shortLabel: "Spolupráca" },
      { slug: "06-druhy-modelov-slovnik", path: "/06-druhy-modelov-slovnik", label: "6️⃣ Druhy modelov a mini-slovník AI", shortLabel: "Modely" },
      { slug: "07-mapa-hracov", path: "/07-mapa-hracov", label: "7️⃣ Kto má veľkých chatbotov: mapa hráčov", shortLabel: "Hráči" },
      { slug: "08-ako-vznika-model", path: "/08-ako-vznika-model", label: "8️⃣ Ako vzniká AI model", shortLabel: "Vznik modelu" },
      { slug: "09-halucinacie-teplota", path: "/09-halucinacie-teplota", label: "9️⃣ Výkon, halucinácie a teplota", shortLabel: "Halucinácie" },
      { slug: "10-etika-ai-act", path: "/10-etika-ai-act", label: "🔟 Etika, riziká a EÚ AI Act", shortLabel: "Etika" },
    ],
  },
  {
    id: "m02",
    title: "M02 – Chatboty v praxi 🤖💬",
    pages: [
      { slug: "m02-chatboty", path: "/m02-chatboty", label: "🤖 Chatboty v praxi", shortLabel: "Chatboty" },
    ],
  },
  {
    id: "m03",
    title: "M03 – Promptovanie bez mágie ✍️",
    pages: [
      { slug: "m03-promptovanie", path: "/m03-promptovanie", label: "✍️ Promptovanie bez mágie", shortLabel: "Promptovanie" },
    ],
  },
  {
    id: "m04",
    title: "M04 – Kontext inžiniering 🧩",
    pages: [
      { slug: "m04-kontext", path: "/m04-kontext", label: "🧩 Kontext inžiniering", shortLabel: "Kontext" },
    ],
  },
  {
    id: "m05",
    title: "M05 – Vyhľadávanie s AI 🔍🤔",
    pages: [
      { slug: "m05-vyhladavanie", path: "/m05-vyhladavanie", label: "🔍 Vyhľadávanie s AI", shortLabel: "Vyhľadávanie" },
    ],
  },
  {
    id: "m06",
    title: "M06 – AI v práci 💼⚙️",
    pages: [
      { slug: "m06-ai-v-praci", path: "/m06-ai-v-praci", label: "💼 AI v práci", shortLabel: "AI v práci" },
    ],
  },
  {
    id: "m07",
    title: "M07 – AI v osobnom živote 🏡📱",
    pages: [
      { slug: "m07-osobny-zivot", path: "/m07-osobny-zivot", label: "🏡 AI v osobnom živote", shortLabel: "Osobný život" },
    ],
  },
  {
    id: "m08",
    title: "M08 – Procesy a automatizácia 🔄🤖",
    pages: [
      { slug: "m08-automatizacia", path: "/m08-automatizacia", label: "🔄 Procesy a automatizácia", shortLabel: "Automatizácia" },
    ],
  },
];

// Flat list for backward compatibility
export const pages: NavItem[] = modules.flatMap((m) => m.pages);

export function getNavContext(slug: string) {
  const idx = pages.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? { path: pages[idx - 1].path, label: pages[idx - 1].label } : undefined,
    next: idx < pages.length - 1 ? { path: pages[idx + 1].path, label: pages[idx + 1].label } : undefined,
  };
}
