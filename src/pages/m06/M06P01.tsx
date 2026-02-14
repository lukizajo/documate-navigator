import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M06P01() {
  const nav = getNavContext("m06-01-uvod");
  return (
    <PageShell title="🅾️ Úvod" {...nav}>

      <p>V predchádzajúcich moduloch sme sa učili, <strong>ako AI funguje</strong>, ako sa jej správne pýtať a ako si <strong>overovať jej odpovede</strong>. Teraz prichádza najdôležitejšia otázka z celého kurzu:</p>
      <p>👉 <strong>Ako mi môže AI reálne pomôcť v mojej práci?</strong></p>
      <p>Pre mnohých ľudí je AI stále buď hračka, alebo strašiak. V realite je to však najmä <strong>pracovný nástroj</strong> – podobne ako Excel, e-mail či internet. Nezmení všetko zo dňa na deň, ale dokáže ti ušetriť desiatky minút denne, ak ju použiješ na správnych miestach.</p>
      <p>V tomto module sa pozrieme na AI bez hype. Ukážeme si, <strong>kde má zmysel ju používať, kde nie</strong>, ako si nájsť vlastné pracovné use-casy a ako si ich jednoducho otestovať a zmerať.</p>

      <h3>🧭 Prehľad modulu</h3>
      <p>V tomto module sa pozrieme na:</p>
      <ul>
        <li>prečo AI v práci dáva (alebo nedáva) zmysel,</li>
        <li>ako identifikovať úlohy vhodné pre AI,</li>
        <li>najčastejšie pracovné use-casy naprieč profesiami,</li>
        <li>jednoduchý postup testovania „pred / po",</li>
        <li>meranie reálneho prínosu AI,</li>
        <li>bezpečné a postupné zavádzanie do praxe.</li>
      </ul>

      <h3>🎯 Čo sa v tomto module naučíš</h3>
      <p>Po absolvovaní tohto modulu budeš vedieť:</p>
      <ul>
        <li>rozpoznať úlohy, kde ti AI ušetrí čas alebo zvýši kvalitu,</li>
        <li>nájsť svoje vlastné 2–3 pracovné use-casy,</li>
        <li>objektívne zmerať prínos AI (čas, kvalita, náklady),</li>
        <li>rozhodnúť sa, kedy sa AI oplatí používať,</li>
        <li>zavádzať AI postupne a bezpečne.</li>
      </ul>
    </PageShell>
  );
}
