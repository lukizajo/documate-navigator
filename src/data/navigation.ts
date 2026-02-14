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
      { slug: "m02-01-uvod", path: "/m02-01-uvod", label: "🅾️ Úvod do chatbotov", shortLabel: "Úvod" },
      { slug: "m02-02-preco-porovnavat", path: "/m02-02-preco-porovnavat", label: "1️⃣ Prečo porovnávať chatboty", shortLabel: "Prečo porovnávať" },
      { slug: "m02-03-hlavni-hraci", path: "/m02-03-hlavni-hraci", label: "2️⃣ Hlavní hráči na trhu", shortLabel: "Hráči" },
      { slug: "m02-04-ferove-porovnanie", path: "/m02-04-ferove-porovnanie", label: "3️⃣ Férové porovnanie", shortLabel: "Porovnanie" },
      { slug: "m02-05-kriteria", path: "/m02-05-kriteria", label: "4️⃣ Kritériá a scorecard", shortLabel: "Kritériá" },
      { slug: "m02-06-toolbox", path: "/m02-06-toolbox", label: "5️⃣ Toolbox", shortLabel: "Toolbox" },
      { slug: "m02-07-etika", path: "/m02-07-etika", label: "6️⃣ Etika a bezpečnosť", shortLabel: "Etika" },
      { slug: "m02-08-prakticka-uloha", path: "/m02-08-prakticka-uloha", label: "🎓 Praktická úloha", shortLabel: "Úloha" },
    ],
  },
  {
    id: "m03",
    title: "M03 – Promptovanie bez mágie ✍️",
    pages: [
      { slug: "m03-01-uvod", path: "/m03-01-uvod", label: "🅾️ Úvod do promptovania", shortLabel: "Úvod" },
      { slug: "m03-02-uloha", path: "/m03-02-uloha", label: "1️⃣ Úloha – čo má AI spraviť", shortLabel: "Úloha" },
      { slug: "m03-03-kontext", path: "/m03-03-kontext", label: "2️⃣ Kontext – prostredie odpovede", shortLabel: "Kontext" },
      { slug: "m03-04-priklady", path: "/m03-04-priklady", label: "3️⃣ Príklady – referenčná fotka", shortLabel: "Príklady" },
      { slug: "m03-05-rola", path: "/m03-05-rola", label: "4️⃣ Rola – perspektíva AI", shortLabel: "Rola" },
      { slug: "m03-06-format", path: "/m03-06-format", label: "5️⃣ Formát – tvar výstupu", shortLabel: "Formát" },
      { slug: "m03-07-ton", path: "/m03-07-ton", label: "6️⃣ Tón – ako to znie", shortLabel: "Tón" },
      { slug: "m03-08-zlozeny-prompt", path: "/m03-08-zlozeny-prompt", label: "7️⃣ Zložený prompt a iterácia", shortLabel: "Zložený prompt" },
      { slug: "m03-09-reverzne", path: "/m03-09-reverzne", label: "8️⃣ Reverzné promptovanie", shortLabel: "Reverzné" },
      { slug: "m03-10-prakticka-uloha", path: "/m03-10-prakticka-uloha", label: "🎓 Praktická úloha", shortLabel: "Úloha" },
    ],
  },
  {
    id: "m04",
    title: "M04 – Kontext inžiniering 🧩",
    pages: [
      { slug: "m04-01-uvod", path: "/m04-01-uvod", label: "🅾️ Úvod do kontext inžinieringu", shortLabel: "Úvod" },
      { slug: "m04-02-kedy-kontext", path: "/m04-02-kedy-kontext", label: "1️⃣ Kedy stačí prompt a kedy kontext", shortLabel: "Kedy kontext" },
      { slug: "m04-03-struktura", path: "/m04-03-struktura", label: "2️⃣ Štruktúra kontextu", shortLabel: "Štruktúra" },
      { slug: "m04-04-chunking", path: "/m04-04-chunking", label: "3️⃣ Kontextové okno a chunking", shortLabel: "Chunking" },
      { slug: "m04-05-citacie", path: "/m04-05-citacie", label: "4️⃣ Citácie a odkazy", shortLabel: "Citácie" },
      { slug: "m04-06-minimal-disclosure", path: "/m04-06-minimal-disclosure", label: "5️⃣ Minimal disclosure", shortLabel: "Minimal disclosure" },
      { slug: "m04-07-systemove-pokyny", path: "/m04-07-systemove-pokyny", label: "6️⃣ Stabilné systémové pokyny", shortLabel: "Systémové pokyny" },
      { slug: "m04-08-mini-pamat", path: "/m04-08-mini-pamat", label: "7️⃣ Mini-pamäť a zhrnutia", shortLabel: "Mini-pamäť" },
      { slug: "m04-09-rag-light", path: "/m04-09-rag-light", label: "8️⃣ RAG-light bez infraštruktúry", shortLabel: "RAG-light" },
      { slug: "m04-10-chyby", path: "/m04-10-chyby", label: "9️⃣ Najčastejšie chyby", shortLabel: "Chyby" },
      { slug: "m04-11-prakticka-uloha", path: "/m04-11-prakticka-uloha", label: "🎓 Praktická úloha", shortLabel: "Úloha" },
    ],
  },
  {
    id: "m05",
    title: "M05 – Vyhľadávanie s AI 🔍🤔",
    pages: [
      { slug: "m05-01-uvod", path: "/m05-01-uvod", label: "🅾️ Úvod do vyhľadávania", shortLabel: "Úvod" },
      { slug: "m05-02-ai-vs-google", path: "/m05-02-ai-vs-google", label: "1️⃣ AI vs. klasický vyhľadávač", shortLabel: "AI vs Google" },
      { slug: "m05-03-ako-sa-pytat", path: "/m05-03-ako-sa-pytat", label: "2️⃣ Ako sa pýtať AI správne", shortLabel: "Ako sa pýtať" },
      { slug: "m05-04-limity", path: "/m05-04-limity", label: "3️⃣ Limity aktuálnych informácií", shortLabel: "Limity" },
      { slug: "m05-05-triangulacia", path: "/m05-05-triangulacia", label: "4️⃣ Triangulácia", shortLabel: "Triangulácia" },
      { slug: "m05-06-halucinacie", path: "/m05-06-halucinacie", label: "5️⃣ Halucinácie a sebaisté klamstvá", shortLabel: "Halucinácie" },
      { slug: "m05-07-deep-research", path: "/m05-07-deep-research", label: "6️⃣ Deep Research", shortLabel: "Deep Research" },
      { slug: "m05-08-web-vs-deep", path: "/m05-08-web-vs-deep", label: "7️⃣ Web Search vs Deep Research", shortLabel: "Web vs Deep" },
      { slug: "m05-09-prakticka-uloha", path: "/m05-09-prakticka-uloha", label: "🎓 Praktická úloha", shortLabel: "Úloha" },
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
