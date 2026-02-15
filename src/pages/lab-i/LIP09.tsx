import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-09-brzdy-stop-go");

export default function LIP09() {
  return (
    <PageShell title="8️⃣ Brzdy a STOP/GO" prev={nav.prev} next={nav.next}>
      <p>Brzdy nie sú pesimizmus. Sú to poistky proti realite: výnimky, chýbajúce dáta a neistota AI. Bez bŕzd automatizácia nerobí len chyby — robí ich <strong>potichu</strong>.</p>
      <p>👉 <strong>Brzdy chránia dopad, nie nástroj.</strong></p>

      <h3>✅ 3 otázky, ktoré ti nastavia brzdy</h3>
      <p>1️⃣ <strong>Kedy sa to musí zastaviť?</strong> (STOP bod)</p>
      <p>2️⃣ <strong>Kto to musí potvrdiť?</strong> (človek v slučke)</p>
      <p>3️⃣ <strong>Kto sa o tom dozvie hneď?</strong> (notifikácia)</p>
      <p>👉 Notifikácia má obsahovať: <strong>čo sa stalo + link/ID + čo má človek spraviť</strong>.</p>

      <h3>🛑 2 typy STOP bodov, ktoré v praxi fungujú</h3>
      <ul>
        <li><strong>STOP pred dopadom</strong> – pred odoslaním / zápisom / zmenou stavu.</li>
        <li><strong>STOP pri neistote</strong> – keď chýba MUST alebo AI vráti NEED_REVIEW (prípadne nízku istotu).</li>
      </ul>
      <p>👉 <strong>Mini pravidlo pre AI krok:</strong> ak AI nie je istá, nesmie sa pokračovať automaticky.</p>

      <h3>✅ STOP/GO kritériá</h3>
      <p>✅ <strong>GO</strong>, keď:</p>
      <ul>
        <li>prešlo 5/2/1 testami,</li>
        <li>máš STOP bod,</li>
        <li>máš log,</li>
        <li>máš notifikáciu pri chybe aj pri NEED_REVIEW.</li>
      </ul>
      <p>⛔ <strong>STOP</strong>, keď:</p>
      <ul>
        <li>nevieš povedať, čo sa stane pri chybe,</li>
        <li>nemáš log,</li>
        <li>AI krok nemá fallback.</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>STOP bod až po dopade (neskoro).</li>
        <li>Notifikácie len na {"\u201E"}error{"\u201C"}, ale nie na NEED_REVIEW (bude to visieť).</li>
        <li>Loguješ citlivé údaje bez maskovania.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď máš pocit, že je toho veľa</h3>
      <ol>
        <li>Začni jedným STOP bodom: chýba MUST → STOP.</li>
        <li>Pridaj druhý: AI vráti NEED_REVIEW → STOP/človek.</li>
        <li>Až potom rieš ďalšie {"\u201E"}komfort{"\u201C"} brzdy.</li>
      </ol>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš plán aj testy, ale potrebuješ nastaviť brzdy tak, aby automatizácia nerobila nevratné kroky bez kontroly.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Definuj STOP bod (kedy sa automatizácia zastaví).</li>
          <li>Urči, kto a čo schvaľuje.</li>
          <li>Navrhni notifikáciu pri chybe (kto sa o tom dozvie a ako).</li>
          <li>Ulož si to ako <strong>J8_guardrails_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je STOP bod pred krokom s dopadom (odoslanie, zápis, zmena stavu)?</li>
          <li>Je jasné, čo presne človek schvaľuje?</li>
          <li>Dozviem sa o chybe hneď (nie o týždeň)?</li>
          <li>Zastaví sa proces pri NEED_REVIEW alebo sa aspoň presmeruje na človeka?</li>
        </ul>
        <ExpectedFinding>
          Brzdy robia z automatizácie bezpečný pilot: radšej STOP a kontrola, než tichá chyba v pozadí.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Kde je najlepší moment na STOP bod?"
        options={[
          { label: "🌕", text: "Pred krokom, ktorý má dopad (odoslanie, zápis, zmena stavu)." },
          { label: "⭐", text: "Až po odoslaní výstupu." },
          { label: "☀️", text: "STOP bod netreba, stačí testovanie." }
        ]}
        correct="🌕"
        explanation="Najlacnejšie je zastaviť to skôr, než sa spraví nevratná akcia."
      />
    </PageShell>
  );
}
