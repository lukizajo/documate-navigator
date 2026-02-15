import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-09-checklist");

export default function LAP09() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>8️⃣ Mysliaci checklist</h2>
      <p>Toto je jednoduchý návyk, ktorý ti ušetrí veľa času a omylov: skôr než požiadaš AI o výstup, prebehni si krátky checklist.</p>
      <p>🧩 Nie preto, aby si bol „perfektný". Ale aby si vedel, či AI ide len generovať text, alebo ti reálne pomáha riešiť problém.</p>

      <hr />

      <h3>✅ Checklist pred použitím AI</h3>
      <p>🎯 <strong>Čo je môj cieľ?</strong></p>
      <p>Čo má byť výsledok a pre koho?</p>
      <p>📌 <strong>Čo už viem a čo neviem?</strong></p>
      <p>Kde mám dieru v informáciách?</p>
      <p>🚧 <strong>Aké mám obmedzenia?</strong></p>
      <p>Čas, rozsah, štýl, pravidlá, formát.</p>
      <p>⚠️ <strong>Aké je riziko, keď to bude zle?</strong></p>
      <p>Čo sa stane, ak bude odpoveď zlá?</p>
      <ul>
        <li>✅ <strong>low-stakes</strong>: môžeš experimentovať, stačí zdravý rozum</li>
        <li>⚠️ <strong>high-stakes</strong>: pýtaj si predpoklady, riziká a čo overiť (AI nie je autorita)</li>
      </ul>
      <p>✅ <strong>Čo presne chcem od AI?</strong></p>
      <p>Otázky? Varianty? Štruktúru? Návrh textu?</p>
      <p>🧠 Keď si toto prejdeš, zistíš, že často nepotrebuješ „odpoveď". Potrebuješ najprv lepšie definovať zadanie.</p>

      <hr />

      <PromptBlock>„Pomôž mi prejsť checklist: cieľ, kontext, obmedzenia, riziko. Najprv sa ma na to spýtaj a až potom navrhni riešenie."</PromptBlock>
    </PageShell>
  );
}
