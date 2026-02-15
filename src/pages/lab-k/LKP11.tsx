import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP11() {
  const nav = getNavContext("lk-11-prakticka-uloha");
  return (
    <PageShell title="\uD83C\uDF93 Praktick\u00E1 \u00FAloha \u2013 AI operating model v praxi (A/B test)" prev={nav.prev} next={nav.next}>
      <p>Na záver si všetko z LABu spojíš do jednej reálnej úlohy. Cieľ nie je {"\u201E"}dokonalý výsledok{"\u201C"}, ale vedome použiť systém.</p>

      <h3>Zadanie</h3>
      <p>Vyber si 1 reálnu úlohu (pracovnú alebo osobnú) a sprav ju 2×:</p>
      <ul>
        <li><strong>A verzia:</strong> {"\u201E"}na divoko{"\u201C"} (bez režimu/roly/hraníc)</li>
        <li><strong>B verzia:</strong> cez systém (režim + rola + hranice + workflow + kontrola)</li>
      </ul>

      <h3>Požiadavky na výsledok</h3>
      <p>Pri B verzii musí byť:</p>
      <ul>
        <li>jasne uvedený <strong>režim + rola</strong></li>
        <li>zadefinované <strong>hranice</strong> (čo si AI nedal)</li>
        <li>použité aspoň <strong>4 kroky workflow</strong></li>
        <li>urobená <strong>kontrola kvality</strong> (min. 3 otázky)</li>
        <li>krátke porovnanie A vs B: čo bolo lepšie a prečo</li>
      </ul>

      <h3>Tvoja úloha (postup)</h3>
      <ol>
        <li>Napíš úlohu jednou vetou (čo chcem a aký výstup).</li>
        <li>Sprav <strong>A verziu</strong> (rýchlo, bez systému).</li>
        <li>Sprav <strong>B verziu</strong> cez systém:
          <ul>
            <li>vyber režim (Think/Create/Operate)</li>
            <li>nastav rolu (sparring/editor/operátor/kontrolór)</li>
            <li>dopíš hranice (čo AI nedávaš)</li>
            <li>prejdi workflow (zámer → kontext → návrh → iterácia → kontrola)</li>
          </ul>
        </li>
        <li>Porovnaj A vs B (3 vety).</li>
        <li>Aktualizuj operating model (1 veta: čo zmeníš nabudúce).</li>
      </ol>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Ak by si mal tento systém vysvetliť kolegovi/kamarátovi za 30 sekúnd – vedel by si? Ak nie, skráť ho. Systém má byť ľahký, nie dokonalý.</p>

      <h3>❓ Sebakontrola (ÁNO/NIE)</h3>
      <ul>
        <li>Je z 1 vety jasné, čo je cieľ a aký má byť výstup?</li>
        <li>Je pri B verzii jasný režim (Think/Create/Operate) a rola AI?</li>
        <li>Sú hranice jasné (čo som AI nedal / čo nesmie urobiť)?</li>
        <li>Použil som aspoň 4 kroky workflow (zámer → kontext → návrh → iterácia → kontrola)?</li>
        <li>Urobil som kontrolu kvality pred finále (min. 3 otázky)?</li>
        <li>Mám porovnanie A vs B (3 vety) a viem povedať prečo?</li>
        <li>Aktualizoval som operating model aspoň o 1 vetu?</li>
      </ul>

      <ExpectedFinding>
        <p>Budeš mať funkčné {"\u201E"}MVP{"\u201C"} svojho systému, ktorý vieš preniesť aj do inej úlohy – pretože stojí na jasnej logike (režim, rola, hranice, workflow, kontrola). Okrem samotného výsledku ti ostane uložený balíček {"\u201E"}stavebných blokov{"\u201C"} (K1–K7 + 1-stranový operating model + checklist), ktorý nabudúce len vytiahneš a vymeníš tému.</p>
      </ExpectedFinding>

      <hr />

      <p><strong>💡 Bonus tip</strong></p>
      <p>Sprav si z toho šablónu: keď nabudúce začneš nový chat, prvá veta nech je <strong>režim + rola + výstup</strong>, až potom kontext.</p>
    </PageShell>
  );
}
