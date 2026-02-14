export interface NavItem {
  slug: string;
  path: string;
  label: string;
  shortLabel: string;
}

export const pages: NavItem[] = [
  { slug: "00-uvod", path: "/00-uvod", label: "00 – Úvod", shortLabel: "Úvod" },
  { slug: "01-co-je-ai", path: "/01-co-je-ai", label: "01 – Čo je AI", shortLabel: "Čo je AI" },
  { slug: "02-prieskum-vyuzivania", path: "/02-prieskum-vyuzivania", label: "02 – Prieskum využívania", shortLabel: "Prieskum" },
  { slug: "03-historia", path: "/03-historia", label: "03 – História", shortLabel: "História" },
  { slug: "04-buducnost", path: "/04-buducnost", label: "04 – Budúcnosť", shortLabel: "Budúcnosť" },
  { slug: "05-spolupraca", path: "/05-spolupraca", label: "05 – Spolupráca", shortLabel: "Spolupráca" },
  { slug: "06-druhy-modelov-slovnik", path: "/06-druhy-modelov-slovnik", label: "06 – Druhy modelov & slovník", shortLabel: "Modely" },
  { slug: "07-mapa-hracov", path: "/07-mapa-hracov", label: "07 – Mapa hráčov", shortLabel: "Hráči" },
  { slug: "08-ako-vznika-model", path: "/08-ako-vznika-model", label: "08 – Ako vzniká model", shortLabel: "Vznik modelu" },
  { slug: "09-halucinacie-teplota", path: "/09-halucinacie-teplota", label: "09 – Halucinácie & teplota", shortLabel: "Halucinácie" },
  { slug: "10-etika-ai-act", path: "/10-etika-ai-act", label: "10 – Etika & AI Act", shortLabel: "Etika" },
];

export function getNavContext(slug: string) {
  const idx = pages.findIndex(p => p.slug === slug);
  return {
    prev: idx > 0 ? { path: pages[idx - 1].path, label: pages[idx - 1].label } : undefined,
    next: idx < pages.length - 1 ? { path: pages[idx + 1].path, label: pages[idx + 1].label } : undefined,
  };
}
