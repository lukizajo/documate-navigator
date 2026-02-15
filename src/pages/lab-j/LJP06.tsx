import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP06() {
  const nav = getNavContext("lj-06-kontrola");
  return (
    <PageShell title="5\uFE0F\u20E3 Mini-kontrola reality" prev={nav.prev} next={nav.next}>
      <p>
        Pri citlivých rozhodnutiach (najmä <strong>high-risk</strong>) sa neoplatí veriť na {"\u201E"}AI povedala{"\u201C"}.
      </p>
      <p>Stačí jednoduché minimum:</p>
      <ul>
        <li>čo sú <strong>fakty</strong> a čo sú <strong>predpoklady</strong>,</li>
        <li>čo treba <strong>overiť</strong>,</li>
        <li>kde je {"\u201E"}bod, kde sa to láme{"\u201C"}.</li>
      </ul>

      <hr />

      <h3>🔎 Mikro-príklad</h3>
      <p>
        Kritické tvrdenie je také, že ak neplatí, celé rozhodnutie padá. Napríklad: {"\u201E"}Toto riešenie je legálne v našej krajine{"\u201C"} alebo {"\u201E"}Tento nástroj vieme nasadiť do 2 týždňov{"\u201C"}.
      </p>
      <p><strong>💡 Tip do praxe:</strong> Overuj aspoň <strong>2 nezávislé zdroje</strong>, ak ide o fakty/dátumy/pravidlá.</p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Overovanie {"\u201E"}po rozhodnutí{"\u201C"} (neskoro).</li>
        <li>Prehliadnuté dátumy a kontext (staré pravidlá, iný trh, iná krajina).</li>
        <li>Zámenu {"\u201E"}odporúčanie{"\u201C"} za {"\u201E"}garanciu{"\u201C"}.</li>
      </ul>

      <hr />

      <MiniTask title="2 veci, ktor\u00E9 over\u00ED\u0161 hne\u010F">
        <p><strong>Situácia</strong></p>
        <p>Zvažuješ jednu z možností A/B/C.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber 2 kritické tvrdenia, ktoré musia byť pravdivé, aby rozhodnutie dávalo zmysel. Naplánuj mini-overenie.</p>
        <PromptBlock>
          {"\u201E"}Pomôž mi spraviť mini-kontrolu reality pred rozhodnutím.<br />
          Scenár: [___] Moja preferovaná možnosť: [A/B/C + 1 veta prečo]<br /><br />
          1. Vypíš 5 tvrdení, na ktorých táto možnosť stojí.<br />
          2. Pri každom tvrdení označ: FAKT alebo PREDPOKLAD.<br />
          3. Označ 2 z nich ako {"\u201E"}kritické{"\u201C"} (ak sú zlé, celé rozhodnutie padá).<br />
          4. Pre každé kritické tvrdenie navrhni minimálne overenie do 15 minút (konkrétne: dokument, človek, zdroj).<br />
          5. Napíš mi 1 vetu: {"\u201E"}Ak sa ukáže X, zmením rozhodnutie na Y.{"\u201C"}<br />
          6. Navrhni aj najbližšiu bezpečnú alternatívu (plan B), ak sa X potvrdí.{"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Mám 2 kritické tvrdenia, ktoré viem reálne overiť?</li>
          <li>Viem presne, kde ich overím?</li>
          <li>Mám dopredu napísané, čo by zmenilo rozhodnutie?</li>
          <li>Mám pripravený plan B?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že kvalitné rozhodnutie má {"\u201E"}exit podmienky{"\u201C"} — nie slepú dôveru.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 Kedy je overovanie faktov najd\u00F4le\u017Eitej\u0161ie?"}
        options={[
          { label: "🌕", text: "Keď ide o high-risk dopad (právo, HR, financie, reputácia)." },
          { label: "⭐", text: "Overovať vždy všetko do detailu, aj keď je to low-risk." },
          { label: "☀️", text: "Nikdy, lebo AI už \u201Espracovala internet\u201C." },
        ]}
        correct="🌕"
        explanation="Pri high-risk sa chyba neodp\u00FA\u0161\u0165a \u2014 minimum je kontrola reality."
      />
    </PageShell>
  );
}
