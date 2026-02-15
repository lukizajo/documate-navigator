import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP09() {
  const nav = getNavContext("lj-09-checklist");
  return (
    <PageShell title="8\uFE0F\u20E3 Checklist pred rozhodnut\u00EDm" prev={nav.prev} next={nav.next}>
      <p>
        Finálny filter pred rozhodnutím. Krátky, opakovateľný, bez filozofie.
      </p>
      <p>Zmeň si to na {"\u201E"}tick-box{"\u201C"} (aby sa to dalo prebehnúť za 60 sekúnd):</p>
      <ul>
        <li>Viem cieľ jednou vetou? (nie {"\u201E"}zlepšiť{"\u201C"}, ale čo presne)</li>
        <li>Viem povedať A/B/C jednou vetou? (naozaj odlišné možnosti)</li>
        <li>Viem pri každom variante povedať 1 výhoda + 1 nevýhoda? (trade-off)</li>
        <li>Mám 2 kritické tvrdenia + kde som ich overil? (kontrola reality)</li>
        <li>Viem pomenovať 1 najväčšie riziko + mitigáciu?</li>
        <li>Je jasné, kto nesie zodpovednosť za rozhodnutie?</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Tento checklist vytiahni aj vtedy, keď sa ponáhľaš — práve vtedy najviac pomáha.</p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Preskočiť checklist {"\u201E"}lebo už to viem{"\u201C"}.</li>
        <li>Overovať až po finálnom rozhodnutí.</li>
        <li>Rozhodnúť bez toho, aby si vedel povedať {"\u201E"}prečo{"\u201C"}.</li>
      </ul>

      <hr />

      <MiniTask title="Fin\u00E1lne rozhodnutie v 4 vet\u00E1ch">
        <p><strong>Situácia</strong></p>
        <p>Si na konci procesu a chceš rozhodnúť.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Prejdi checklist a napíš rozhodnutie tak, aby si ho vedel obhájiť.</p>
        <PromptBlock>
          {"\u201E"}Pomôž mi prejsť checklist pred rozhodnutím a dotiahnuť rozhodnutie.<br />
          Scenár: [___] Moja finálna voľba: [A/B/C alebo vlastná]<br /><br />
          1. Prejdi checklist (áno/nie) a povedz, čo mi chýba doplniť.<br />
          2. Pomôž mi napísať rozhodnutie v 4 vetách:<br />
          • 1 veta: čo robím<br />
          • 1 veta: prečo (najdôležitejšie kritérium)<br />
          • 1 veta: najväčšie riziko + mitigácia<br />
          • 1 veta: čo by zmenilo môj názor{"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je rozhodnutie napísané jednoducho a zrozumiteľne?</li>
          <li>Je tam jasné {"\u201E"}prečo{"\u201C"} (kritérium)?</li>
          <li>Je tam riziko + mitigácia?</li>
          <li>Mám napísané, čo by zmenilo môj názor?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že dobré rozhodnutie nie je len voľba — je to schopnosť ho stručne obhájiť.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 Kedy m\u00E1 najv\u00E4\u010D\u0161\u00ED zmysel pou\u017Ei\u0165 checklist pred rozhodnut\u00EDm?"}
        options={[
          { label: "🌕", text: "Len pri úplne veľkých strategických rozhodnutiach." },
          { label: "⭐", text: "Vždy, keď má rozhodnutie reálny dopad a chceš znížiť chyby." },
          { label: "☀️", text: "Len keď si nie som istý, inak to zbytočne spomaľuje." },
        ]}
        correct="⭐"
        explanation="Je to lacn\u00E1 poistka proti un\u00E1hlen\u00FDm rozhodnutiam."
      />
    </PageShell>
  );
}
