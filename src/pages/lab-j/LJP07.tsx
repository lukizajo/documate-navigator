import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP07() {
  const nav = getNavContext("lj-07-etika");
  return (
    <PageShell title="6\uFE0F\u20E3 Etick\u00FD radar v praxi" prev={nav.prev} next={nav.next}>
      <p>
        Etiku už riešite v moduloch — tu ju použijeme len ako <strong>praktický radar</strong> na tvoj scenár.
      </p>
      <p>
        Keď už máš varianty + riziká, etický radar ti povie, či je niektorý variant reputačne toxický aj keď je {"\u201E"}logicky správny{"\u201C"}.
      </p>
      <p>Tri rýchle otázky, ktoré často zachránia reputáciu:</p>
      <ul>
        <li>Koho to môže poškodiť (konkrétne kto + ako)?</li>
        <li>Viem to vysvetliť jednou vetou bez výhovoriek?</li>
        <li>Ako by vyzerala najhoršia interpretácia, keby sa to dostalo von (headline test)?</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak by si to nechcel vidieť na titulke, zvoľ opatrnejší postup.</p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>{"\u201E"}Je to legálne{"\u201C"} ≠ {"\u201E"}je to férové{"\u201C"}.</li>
        <li>Krátkodobý zisk môže zničiť dôveru.</li>
        <li>Keď to nevieš vysvetliť jednoducho, bude problém.</li>
      </ul>

      <hr />

      <MiniTask title="Headline test + mitig\u00E1cia">
        <p><strong>Situácia</strong></p>
        <p>Máš preferovanú možnosť A/B/C.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Sprav headline test a navrhni 1 mitigáciu (čo urobíš, aby si znížil riziko).</p>
        <PromptBlock>
          {"\u201E"}Pomôž mi spraviť rýchly etický radar na moje rozhodnutie.<br />
          Scenár: [***] Moja preferovaná možnosť: [***]<br /><br />
          1. Headline test: napíš 1 vetu titulku, ako by to mohlo vyzerať v negatívnej interpretácii.<br />
          2. Povedz, koho to môže najviac ovplyvniť (1–2 skupiny) a ako.<br />
          3. Navrhni 1 mitigáciu: konkrétny krok (proces/komunikácia/limit/transparentnosť), ktorý zníži reputačné/etické riziko.<br />
          4. Navrhni 1 vetu vysvetlenia rozhodnutia {"\u201E"}pre normálneho človeka{"\u201C"}.<br />
          5. Signál: ako spoznám, že mitigácia funguje (1 veta).{"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je headline test nepríjemne realistický (nie zjemnený)?</li>
          <li>Je mitigácia konkrétna (nie {"\u201E"}budem opatrný{"\u201C"})?</li>
          <li>Viem to vysvetliť jednoducho jednou vetou?</li>
          <li>Mám 1 signál, že mitigácia funguje?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že {"\u201E"}dobre rozhodnuté{"\u201C"} je aj to, čo vieš obhájiť pred ľuďmi, nie len v Exceli.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 \u010Co je cie\u013E \u201Eheadline testu\u201C?"}
        options={[
          { label: "🌕", text: "Otestovať reputačné riziko a slabé miesta rozhodnutia." },
          { label: "⭐", text: "Otestovať, či sa rozhodnutie dá pekne odkomunikovať." },
          { label: "☀️", text: "Zistiť, či AI píše pekné titulky." },
        ]}
        correct="🌕"
        explanation="Je to r\u00FDchla kontrola dopadov a vn\u00EDmania."
      />
    </PageShell>
  );
}
