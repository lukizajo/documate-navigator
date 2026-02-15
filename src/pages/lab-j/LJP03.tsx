import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP03() {
  const nav = getNavContext("lj-03-framing");
  return (
    <PageShell title="2\uFE0F\u20E3 Framing: zl\u00E1 ot\u00E1zka \u2192 zl\u00E1 odpove\u010F" prev={nav.prev} next={nav.next}>
      <p>
        Pri rozhodovaní je framing všetko. Keď nevieš jasne povedať <strong>cieľ, kritériá a obmedzenia</strong>, AI ti síce odpovie{"\u2026"} ale bude to skôr hádanie než pomoc.
      </p>

      <hr />

      <h3>🔎 Mikro-príklad</h3>
      <p><strong>Zlá otázka:</strong> {"\u201E"}Ktorú možnosť mám vybrať?{"\u201C"}</p>
      <p><strong>Dobrá otázka:</strong> {"\u201E"}Cieľ je X, kritériá sú A/B/C, obmedzenia D/E, riziko F. Navrhni 3 možnosti a trade-offs.{"\u201C"}</p>
      <p>Najjednoduchší rámec:</p>
      <ul>
        <li><strong>Cieľ</strong> (čo chcem dosiahnuť),</li>
        <li><strong>Kritériá úspechu</strong> (podľa čoho spoznám dobré riešenie),</li>
        <li><strong>Obmedzenia</strong> (čas, peniaze, pravidlá),</li>
        <li><strong>Riziko</strong> (čo sa môže pokaziť + čo sa stane, ak sa to stane),</li>
        <li><strong>Kto to pocíti</strong> (1–2 skupiny / stakeholderi).</li>
      </ul>
      <p>
        💡 <strong>Mini-heuristika na kritériá:</strong> nech sú <strong>porovnateľné</strong> (aj keď nie sú číselné).
      </p>
      <p>Príklady: čas do výsledku, náklady, riziko chyby, dopad na ľudí, zrozumiteľnosť, reverzibilita.</p>
      <p><strong>💡 Tip do praxe:</strong> Najprv sa pýtaj na otázky. Až potom na riešenia.</p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>{"\u201E"}Čo je najlepšie?{"\u201C"} bez kritérií = lotéria.</li>
        <li>Keď nezadáš obmedzenia, AI si ich domyslí.</li>
        <li>Ak nemáš pomenované riziko a dopad, AI často navrhne príliš odvážne riešenie.</li>
      </ul>

      <hr />

      <MiniTask title="Framing v 60 sekund\u00E1ch">
        <p><strong>Situácia</strong></p>
        <p>Máš svoj scenár z mini-úlohy 1.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Nechaj AI navrhnúť rámec, ty doplníš odpovede a AI ho prepíše do {"\u201E"}čistej verzie{"\u201C"}, ktorú použiješ v lekcii 3.</p>
        <PromptBlock>
          {"\u201E"}Pomôž mi zarámovať problém, aby sme nerobili rozhodnutie naslepo.<br />
          Môj scenár: [___]<br />
          Krok 1: Navrhni mi rámec (stručne):<br />
          • Cieľ (1 veta)<br />
          • 3 kritériá úspechu (body)<br />
          • 2 obmedzenia (body)<br />
          • Riziko (čo sa môže pokaziť + dopad) (1 veta)<br />
          • Kto to pocíti (1–2 skupiny)<br /><br />
          Krok 2: Polož mi 3 otázky, ktoré zlepšia presnosť rámca.<br />
          Krok 3: Keď ti odpoviem, prepíš rámec do finálnej verzie (max 10 riadkov) tak, aby som ho vedel použiť v ďalšej lekcii.{"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je cieľ konkrétny (nie {"\u201E"}zlepšiť{"\u201C"}, ale {"\u201E"}čo presne{"\u201C"})?</li>
          <li>Sú kritériá porovnateľné (viem podľa nich vybrať A/B/C)?</li>
          <li>Sú obmedzenia reálne (čas/peniaze/pravidlá)?</li>
          <li>Je riziko napísané ako hrozba + dopad?</li>
          <li>Je jasné, kto to pocíti (stakeholderi)?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že 80 % kvality rozhodnutia je v tom, ako presne vieš pomenovať problém — a že dobrý framing znižuje {"\u201E"}domýšľanie{"\u201C"} zo strany AI.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 \u010Co je najlep\u0161\u00ED prv\u00FD krok, ke\u010F chce\u0161 \u201Enajlep\u0161ie rie\u0161enie\u201C od AI?"}
        options={[
          { label: "🌕", text: "Doplniť len cieľ a hneď si pýtať verdikt." },
          { label: "⭐", text: "Najprv doplniť cieľ, kritériá, obmedzenia a riziko (framing)." },
          { label: "☀️", text: "Nechať AI vybrať riešenie podľa \u201Enajčastejšieho\u201C postupu." },
        ]}
        correct="⭐"
        explanation="Bez r\u00E1mca AI nevie, \u010Do pre teba znamen\u00E1 \u201Enajlep\u0161ie\u201C \u2014 a za\u010Dne si dop\u013A\u0148a\u0165 kontext sama."
      />
    </PageShell>
  );
}
