import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP02() {
  const nav = getNavContext("lk-02-inventura");
  return (
    <PageShell title="1\u20E3\uFE0F Invent\u00FAra: Ako AI pou\u017E\u00EDvam dnes" prev={nav.prev} next={nav.next}>
      <p>Keď nemáš inventúru, nevieš zlepšiť systém – len pridávaš ďalšie prompty.</p>

      <p><strong>🧠 Mini-pravidlo</strong></p>
      <p><strong>Ak nevieš pomenovať situácie, AI ti ich začne {"\u201E"}vymýšľať{"\u201C"} namiesto teba.</strong></p>

      <p><strong>⚠️ Typická chyba</strong></p>
      <p>{"\u201E"}Používam AI na všetko{"\u201C"} = v skutočnosti nevieš pomenovať nič konkrétne.</p>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Ak nevieš dať 3 situácie, pozri si posledný týždeň a vyber:</p>
      <ul>
        <li>1× <strong>email / text</strong>,</li>
        <li>1× <strong>rozhodnutie</strong>,</li>
        <li>1× <strong>rutinu</strong>.</li>
      </ul>

      <hr />

      <p><strong>🧪 Rýchly test v praxi (30–60 s)</strong></p>
      <p>Skús povedať jednou vetou: <strong>{"\u201E"}Používam AI na _____, aby som dosiahol _____.{"\u201C"}</strong> Ak nevieš doplniť, inventúra je nutná.</p>

      <p><strong>💡 Tip do praxe:</strong> Nehľadaj dokonalosť. Hľadaj <strong>3 najčastejšie situácie</strong> + <strong>3 rizikové miesta (STOP alebo s kontrolou)</strong>.</p>

      <hr />

      <MiniTask title="Inventúra v 5 min">
        <p><strong>Situácia</strong> Chceš vedieť, kde má AI reálny prínos a kde ti robí chaos.</p>
        <p><strong>Inštrukcia</strong> Napíš výstup ako <strong>6 odrážok</strong>:</p>
        <ul>
          <li>3× ✅ <strong>POUŽÍVAM</strong> (najčastejšie situácie)</li>
          <li>3× 🛑 <strong>STOP</strong> alebo ⚠️ <strong>S KONTROLOU</strong> (rizikové miesta)</li>
        </ul>
        <PromptBlock>
          {"\u201E"}Pomôž mi spraviť inventúru používania AI. Najprv sa ma spýtaj 5 krátkych otázok, aby si pochopil môj kontext. Potom spolu vyberieme moje situácie.{"\u201C"}
          <br /><br />
          1. Navrhni 10 typických situácií, kde ľudia používajú AI (mix práca + osobný život).<br />
          2. Pomôž mi vybrať moje 3 situácie, ktoré používam najčastejšie.<br />
          3. Pomôž mi doplniť 3 rizikové miesta (STOP alebo S KONTROLOU) a ku každému 1 vetu prečo.
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je každá situácia napísaná konkrétne (nie {"\u201E"}na všetko{"\u201C"})?</li>
          <li>Je pri každej situácii jasný výstup alebo cieľ (čo presne chcem dostať)?</li>
          <li>Mám 3 miesta, kde je AI riziko alebo STOP?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Zistíš, že tvoj problém nie je {"\u201E"}málo promptov{"\u201C"}, ale {"\u201E"}málo jasných situácií a pravidiel{"\u201C"}.</p>
      </ExpectedFinding>

      <MiniTest
        question={"\uD83D\uDC49 \u010Co je prv\u00FD krok, ke\u010F chce\u0161 pou\u017E\u00EDva\u0165 AI \u201Esyst\u00E9movo\u201C?"}
        options={[
          { label: "🌕", text: "Naučiť sa nové nástroje." },
          { label: "⭐", text: "Spraviť inventúru: kde AI používam a kde je riziko." },
          { label: "☀️", text: "Vytvoriť si 50 promptov do knižnice." },
        ]}
        correct="⭐"
        explanation="Bez inventúry nevieš, kde má AI hodnotu a kde vzniká riziko – systém by si skladal naslepo."
      />
      <p><em>(Ulož si výstup ako: <strong>K1_inventura_v1</strong>.)</em></p>
    </PageShell>
  );
}
