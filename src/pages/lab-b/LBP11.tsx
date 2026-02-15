import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-11-zhrnutie");

export default function LBP11() {
  return (
    <PageShell title="🧾 Zhrnutie LABu" prev={nav.prev} next={nav.next}>
      <p><strong>Najprv si ujasni cieľ textu</strong>: informovať / vysvetliť / požiadať + pre koho to je + aký formát chceš (email, návod, FAQ…).</p>
      <p><strong>Najprv štruktúra, až potom vety</strong>: vypýtaj si osnovu (max 6 bodov) a hierarchiu (MUST HAVE vs detail).</p>
      <p><strong>Zrozumiteľnosť vyhráva</strong>: krátke vety, bežné slová, konkrétne slovesá. Píš tak, aby tomu rozumel „nový človek v prvý deň".</p>
      <p><strong>Skracuj kontrolovane</strong>: odstráň vatu/opakovanie, nechaj podstatu, premeň odseky na body/kroky. Vždy: „zachovaj význam".</p>
      <p><strong>Tón mení dopad, nie fakty</strong>: vieš si vyrobiť vecnú, priateľskú, empatickú, pevnú aj formálnu verziu toho istého obsahu (bez vyhrážania).</p>
      <p><strong>Formát robí text použiteľným</strong>: z jedného obsahu sprav email, návod, FAQ alebo TL;DR — ale nepridávaj nové informácie.</p>
      <p><strong>Pri faktoch spomaľ</strong>: rozdeľ text na tvrdenia, označ rizikové (čísla, dátumy, pravidlá), vyžiadaj zdroj alebo označ NEISTÉ a sprav bezpečný prepis.</p>
      <p><strong>Bezpečnosť</strong>: nedávaj do AI citlivé údaje; anonymizuj placeholdermi a minimalizuj dáta. Najprv šablóna, potom doplnenie mimo AI.</p>
      <p><strong>Najbezpečnejšia rola AI je kritik</strong>: nech označí konkrétne problematické vety, povie prečo a navrhne 1–2 opravy — ty rozhoduješ.</p>
      <p>👉 <strong>Pointa</strong>: najlepší výsledok vzniká v krokoch (štruktúra → zrozumiteľnosť → tón → formát → kontrola faktov/bezpečnosti → audit).</p>
    </PageShell>
  );
}
