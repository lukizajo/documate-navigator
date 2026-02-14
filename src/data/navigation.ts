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
