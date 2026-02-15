import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-05-varianty");

export default function LAP05() {
  return (
    <PageShell title="4️⃣ Práca s neistotou a variantmi" prev={nav.prev} next={nav.next}>
      <p>Veľa ľudí používa AI tak, akoby existovala jedna správna odpoveď. Lenže v reálnom živote to tak často nie je. Máš neúplné informácie, časový tlak, rôzne priority… a preto existuje viac možností, ako to spraviť.</p>
      <p>🔄 Najväčší upgrade v práci s AI je toto: <strong>nepýtaj si jednu odpoveď – pýtaj si varianty.</strong></p>
      <p>Varianty ti pomôžu zistiť, čo je vôbec na výber, čo sú kompromisy a kde sú slepé miesta.</p>

      <hr />

      <h3>🧩 Prečo sú varianty také silné</h3>
      <p>🎯 <strong>Znižujú riziko „prvej peknej odpovede"</strong></p>
      <p>AI často trafí prvú odpoveď tak, aby znela dobre. Varianty ju prinútia ukázať aj iné cesty.</p>
      <p>🧠 <strong>Pomáhajú ti myslieť v možnostiach, nie v jednom riešení</strong></p>
      <p>Keď vidíš 3 prístupy, ľahšie si vyberieš ten, ktorý sedí tvojej situácii.</p>
      <p>⚖️ <strong>Odhalia kompromisy</strong></p>
      <p>Každý variant má niečo za niečo: rýchlosť vs kvalita, jednoduchosť vs presnosť, istota vs experiment.</p>

      <hr />

      <h3>✅ Ako si pýtať varianty (jednoduchý vzorec)</h3>
      <p>🧭 Požiadaj o 3 varianty a pomenuj ich štýlom:</p>
      <ul>
        <li>🟢 <strong>konzervatívny</strong> (bezpečný, overený)</li>
        <li>🟡 <strong>realistický</strong> (vyvážený)</li>
        <li>🔴 <strong>odvážny</strong> (rýchly, kreatívny, experiment)</li>
      </ul>
      <p>📌 Potom si vypýtaj ku každému:</p>
      <ul>
        <li>2 výhody</li>
        <li>2 riziká</li>
        <li>1 odporúčanie „kedy sa to hodí"</li>
      </ul>

      <hr />

      <h3>🧩 Mikropríklad</h3>
      <p><strong>💬 Slabé zadanie:</strong></p>
      <p>„Ako mám zlepšiť onboarding?"</p>
      <p><strong>✅ Lepšie zadanie:</strong></p>
      <p>„Navrhni mi 3 varianty zlepšenia onboardingu: konzervatívny, realistický a odvážny. Ku každému daj 2 výhody, 2 riziká a kedy je vhodný. Na konci sa ma opýtaj 3 otázky, ktoré rozhodnú, ktorý variant vybrať."</p>
      <p>🧠 Týmto AI „nepovie odpoveď", ale vytvorí ti mapu možností – a ty sa rozhoduješ.</p>

      <hr />

      <PromptBlock>„Navrhni ešte 2 úplne odlišné varianty. Ku každému napíš, v čom je lepší a v čom je rizikovejší."</PromptBlock>
    </PageShell>
  );
}
