import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-08-testovanie");

export default function LIP08() {
  return (
    <PageShell title="7️⃣ Testovanie" prev={nav.prev} next={nav.next}>
      <p>{"\u201E"}Raz mi to prešlo{"\u201C"} nie je test. Testovanie nie je len hľadanie chýb — je to overenie pravidiel: kedy má ísť proces <strong>GO</strong> a kedy sa má zastaviť na <strong>STOP/NEED_REVIEW</strong>. Cieľ nie je dokonalosť, ale stabilné hranice.</p>
      <p>👉 <strong>Testy ti nastavia hranice, nie dokonalosť.</strong></p>

      <h3>✅ 3 typy testov (5/2/1)</h3>
      <p><strong>1️⃣ Bežné prípady (5×)</strong> – typická realita</p>
      <p>Napr. kompletný formulár, bežný email, štandardný riadok v tabuľke.</p>
      <p><strong>2️⃣ Hraničné (2×)</strong> – zvládne to bez paniky?</p>
      <p>Napr. príliš dlhý text, chýba SHOULD, neštandardný formát dátumu.</p>
      <p><strong>3️⃣ Rozbité (1×)</strong> – má brzdy?</p>
      <p>Napr. prázdny vstup, spam, nezmyselný text → musí skončiť na STOP/NEED_REVIEW.</p>

      <h3>🧾 Mini šablóna jedného testu</h3>
      <ul>
        <li>Test #: …</li>
        <li>Vstup: …</li>
        <li>Očakávaný výstup: …</li>
        <li>Očakávaný status: OK | NEED_REVIEW | STOP</li>
        <li>Výsledok: Pass/Fail</li>
        <li>Poznámka: čo upraviť</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Netestuj len {"\u201E"}happy path{"\u201C"}.</li>
        <li>Bez jasného Pass/Fail kritéria nevieš, či je to OK.</li>
        <li>Otestuj aj fallback (NEED_REVIEW) — často je to najdôležitejší scenár.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď testy padajú</h3>
      <ol>
        <li>Ak padá veľa testov → zmenši MVP (menej krokov).</li>
        <li>Ak padá AI krok → sprísni výstupný formát + pridaj NEED_REVIEW.</li>
        <li>Ak padá validácia → uprav MUST/SHOULD (možno máš MUST príliš veľké).</li>
      </ol>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Blueprint vyzerá dobre {"\u201E"}na papieri{"\u201C"}, ale prax ho preverí až na reálnych vstupoch.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Priprav si test plan: 5 bežných prípadov, 2 hraničné, 1 rozbitý.</li>
          <li>Ku každému dopíš očakávaný výsledok a Pass/Fail.</li>
          <li>Ulož si to ako <strong>J7_tests_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Mám testy aj na situácie, keď chýba MUST?</li>
          <li>Mám aspoň 2 hraničné prípady, ktoré by sa v praxi stali?</li>
          <li>Mám 1 rozbitý vstup (spam/nezmysel/prázdne)?</li>
          <li>Viem pri každom prípade povedať, čo je Pass a čo Fail?</li>
        </ul>
        <ExpectedFinding>
          Výnimky a rozbité vstupy ti odhalia, kde treba validáciu, fallback alebo STOP bod.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Prečo testujeme aj hraničné a rozbité prípady?"
        options={[
          { label: "🌕", text: "Lebo to znie profesionálne." },
          { label: "⭐", text: "Lebo práve výnimky najčastejšie rozbijú automatizáciu v praxi." },
          { label: "☀️", text: "Lebo AI inak nebude fungovať." }
        ]}
        correct="⭐"
        explanation="Realita má výnimky — a tie ti ukážu, kde treba brzdy alebo validáciu."
      />
    </PageShell>
  );
}
