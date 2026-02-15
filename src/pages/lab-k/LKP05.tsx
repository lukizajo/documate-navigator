import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP05() {
  const nav = getNavContext("lk-05-hranice");
  return (
    <PageShell title="4\u20E3\uFE0F Hranice a zodpovednos\u0165" prev={nav.prev} next={nav.next}>
      <p>Rozdeľ si použitie AI do 3 košov:</p>
      <ul>
        <li><strong>NIKDY</strong></li>
        <li><strong>S KONTROLOU</strong></li>
        <li><strong>BEZ OBÁV</strong></li>
      </ul>

      <p><strong>🧠 Mini-pravidlo</strong></p>
      <p><strong>Keď váhaš, automaticky je to {"\u201E"}S KONTROLOU{"\u201C"} alebo STOP.</strong></p>

      <hr />

      <p><strong>⚡ Rýchly scenár (ten istý typ úlohy v 3 košoch)</strong></p>
      <ul>
        <li>{"\u201E"}Zhrnutie interného dokumentu{"\u201C"} → <strong>S KONTROLOU</strong></li>
        <li>{"\u201E"}Rozhodnutie o investícii/úvere{"\u201C"} → <strong>NIKDY</strong> (AI nerobí rozhodnutie)</li>
        <li>{"\u201E"}Prepis textu do jednoduchšej slovenčiny{"\u201C"} → <strong>BEZ OBÁV</strong></li>
      </ul>

      <hr />

      <p><strong>⚠️ Typická chyba</strong></p>
      <p>Delegovanie rozhodnutia: {"\u201E"}AI povedala, že…{"\u201C"}</p>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Kto nesie následky, keď je to zle?</p>
      <p>Ak ty (alebo firma), tak to nie je {"\u201E"}bez obáv{"\u201C"}.</p>

      <hr />

      <MiniTask title="Moje hranice">
        <p><strong>Inštrukcia</strong> Napíš výstup v tomto formáte:</p>
        <ul>
          <li>3 koše (NIKDY / S KONTROLOU / BEZ OBÁV) + ku každému <strong>2 príklady</strong></li>
          <li>3 vlastné pravidlá (každé <strong>1 veta</strong>) – tvoje {"\u201E"}brzdy{"\u201C"}</li>
        </ul>
        <PromptBlock>
          {"\u201E"}Pomôž mi nastaviť hranice používania AI.{"\u201C"}
          <br />Moje situácie: [___]
          <br /><br />
          Navrhni rozdelenie: NIKDY / S KONTROLOU / BEZ OBÁV. Ku každému košu dopíš 2 príklady. Potom mi pomôž napísať 3 moje vlastné pravidlá (1 veta každé), ktoré budem dodržiavať.
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Mám jasné 3 koše?</li>
          <li>Mám 3 vlastné pravidlá – krátke a použiteľné?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Hranice ti šetria čas aj nervy – lebo znižujú {"\u201E"}cleanup{"\u201C"} po chybách.</p>
      </ExpectedFinding>

      <MiniTest
        question={"\uD83D\uDC49 Ktor\u00FD krok je najlep\u0161\u00ED, ke\u010F v\u00E1ha\u0161, \u010Di je \u00FAloha bezpe\u010Dn\u00E1 pre AI?"}
        options={[
          { label: "🌕", text: "Dám AI všetko, nech sa snaží." },
          { label: "⭐", text: "Ignorujem riziko, hlavne nech je to rýchle." },
          { label: "☀️", text: "Zaradím to do \u201ES KONTROLOU\u201C/STOP a zúžim vstup." },
        ]}
        correct="☀️"
        explanation="Keď váhaš, potrebuješ znížiť riziko – zúžiť vstup a pridať kontrolu."
      />
      <p><em>(Ulož si výstup ako: <strong>K4_hranice_v1</strong>.)</em></p>
    </PageShell>
  );
}
