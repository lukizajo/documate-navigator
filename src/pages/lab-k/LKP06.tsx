import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP06() {
  const nav = getNavContext("lk-06-workflow");
  return (
    <PageShell title="5\u20E3\uFE0F Workflow: od my\u0161lienky po v\u00FDsledok" prev={nav.prev} next={nav.next}>
      <p>Toto je tvoj {"\u201E"}chodník{"\u201C"}, aby si nechodil dokola.</p>

      <p><strong>Default workflow (5 krokov):</strong></p>
      <ol>
        <li><strong>Zámer</strong> (pre koho, prečo, formát)</li>
        <li><strong>Kontext</strong> (čo AI musí vedieť + čo nesmie)</li>
        <li><strong>Prvý návrh</strong></li>
        <li><strong>Iterácia</strong> (spresnenie, formát, varianty)</li>
        <li><strong>Kontrola</strong> (fakty, tón, riziká, overenie/zdroje)</li>
      </ol>

      <p><strong>🧠 Mini-pravidlo</strong></p>
      <p><strong>Keď sa zasekneš, problém je zvyčajne v kroku 1 alebo 2.</strong></p>

      <hr />

      <p><strong>⚡ Rýchly scenár (workflow na jednej úlohe)</strong></p>
      <p>{"\u201E"}Chcem pripraviť email klientovi.{"\u201C"}</p>
      <ul>
        <li>Zámer: čo má email dosiahnuť + aký tón</li>
        <li>Kontext: čo AI musí vedieť + čo nesmie napísať</li>
        <li>Prvý návrh: prvá verzia emailu</li>
        <li>Iterácia: skráť, uprav štruktúru, doplň varianty</li>
        <li>Kontrola: faktická správnosť, tón, riziká, prípadné overenie</li>
      </ul>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Ak iteruješ do nekonečna:</p>
      <ul>
        <li>vráť sa na <strong>Zámer</strong> (čo presne má byť výsledok?)</li>
        <li>alebo doplň <strong>kritériá kontroly</strong> (čo je {"\u201E"}dobré{"\u201C"}?)</li>
      </ul>
      <p>Stop pravidlo: ak po <strong>3 iteráciách</strong> nie si bližšie k výsledku, vráť sa na <strong>Zámer</strong> a dopíš <strong>2 kritériá</strong>, podľa ktorých to posúdiš.</p>

      <hr />

      <MiniTask title="Môj workflow">
        <p><strong>Inštrukcia</strong> Napíš výstup v tomto formáte:</p>
        <ul>
          <li>1 veta: môj default workflow (5 krokov)</li>
          <li>3 kontrolné otázky (odrážky)</li>
        </ul>
        <PromptBlock>
          {"\u201E"}Pomôž mi poskladať môj default workflow pri práci s AI.{"\u201C"}
          <br />Moja top situácia: [___]
          <br /><br />
          1. Navrhni mi 5-krokový workflow (stručne).<br />
          2. Navrhni 3 kontrolné otázky na konci (kvalita/bezpečnosť/zmysel).<br />
          3. Prepíš to do finálnej podoby tak, aby sa to dalo uložiť ako môj osobný postup.
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je workflow krátky a opakovateľný?</li>
          <li>Mám 3 kontrolné otázky?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Workflow je rozdiel medzi {"\u201E"}pomohlo mi to raz{"\u201C"} a {"\u201E"}pomáha mi to stále{"\u201C"}.</p>
      </ExpectedFinding>

      <MiniTest
        question={"\uD83D\uDC49 V ktorom kroku m\u00E1\u0161 doplni\u0165, \u010Do AI nesmie urobi\u0165?"}
        options={[
          { label: "🌕", text: "Iterácia." },
          { label: "⭐", text: "Kontext." },
          { label: "☀️", text: "Prvý návrh." },
        ]}
        correct="⭐"
        explanation="Do kontextu patrí aj negatívny rámec – čo vynechať, čo nepoužiť a kam AI nepúšťať."
      />
      <p><em>(Ulož si výstup ako: <strong>K5_workflow_v1</strong>.)</em></p>
    </PageShell>
  );
}
