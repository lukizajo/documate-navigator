import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-04-rozdelenie-krokov");

export default function LIP04() {
  return (
    <PageShell title="3️⃣ Rozdelenie krokov" prev={nav.prev} next={nav.next}>
      <p>Najväčšia chyba pri AI v automatizácii je dať ju všade. Najväčší prínos je dať AI len tam, kde rieši <strong>význam textu</strong>, nie presné pravidlá. A pri krokoch s dopadom (odoslanie, zmena stavu, financie) vždy plánuj kontrolu.</p>
      <p>👉 <strong>Pravidlá robia proces stabilný. AI robí proces {"\u201E"}chytrejší{"\u201C"}. Človek chráni dopad.</strong></p>

      <h3>✅ Rýchle otázky, ktoré ti povedia kam čo patrí</h3>
      <ul>
        <li>🟩 <strong>Dá sa to spraviť presným pravidlom?</strong> → bez AI</li>
        <li>🟨 <strong>Potrebujem pochopiť význam/jazyk?</strong> → AI</li>
        <li>🟥 <strong>Má to dopad alebo riziko?</strong> → človek</li>
      </ul>

      <h3>🧠 Mikropríklady (aby to bolo jasné)</h3>
      <p>🟩 bez AI: presuň súbor, zapíš riadok, skopíruj hodnotu, pošli notifikáciu</p>
      <p>🟨 s AI: z emailu vyber kategóriu A/B/C, z textu vytiahni polia (meno, téma, deadline), zhrň do 3 bodov</p>
      <p>🟥 človek: odoslať ponuku klientovi, zmeniť stav objednávky, pracovať s citlivými údajmi</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>AI v kroku s dopadom bez bŕzd</strong> (napr. AI vygeneruje text a automatizácia ho rovno odošle).</li>
        <li><strong>AI na presné veci</strong>, ktoré sa dajú spraviť pravidlom (zbytočne si pridávaš neistotu).</li>
        <li><strong>Nejasné {"\u201E"}čo má AI vrátiť{"\u201C"}</strong> → ak nemáš formát výstupu, ťažko sa na to napájajú ďalšie kroky.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď sa nevieš rozhodnúť</h3>
      <ol>
        <li>Označ všetko najprv ako 🟩 (pravidlá).</li>
        <li>Len tam, kde to nejde pravidlom, prehoď krok na 🟨 (AI).</li>
        <li>Kroky s dopadom označ 🟥 a doplň kontrolu (STOP/NEED_REVIEW).</li>
      </ol>
      <p><strong>Pravidlo LABu:</strong> vyber <strong>max 1 AI krok</strong> (max 2, ak sú malé a jasné).</p>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš procesnú mapu a teraz potrebuješ rozhodnúť, čo riešiť pravidlami, čo AI a kde musí byť človek.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Prejdi si kroky z <strong>J2_map_v1</strong>.</li>
          <li>Ku každému kroku dopíš štítok: 🟩 bez AI / 🟨 s AI / 🟥 človek</li>
          <li>Vyber <strong>1 AI krok</strong>, ktorý má najväčší prínos (napr. triedenie, sumarizácia, extrakcia).</li>
          <li>Ulož si to ako <strong>J3_labels_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je väčšina krokov 🟩 (pravidlá) a nie 🟨 (AI)?</li>
          <li>Je AI len tam, kde ide o význam/jazyk (nie presné pravidlá)?</li>
          <li>Mám jasne označené miesto, kde má rozhodnutie dopad (🟥)?</li>
          <li>Vybral som len 1 AI krok (max 2 malé)?</li>
        </ul>
        <ExpectedFinding>
          Keď AI použiješ len na 1 konkrétny krok, získaš prínos bez toho, aby si zvýšil chaos a riziko.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={`Kedy je najlepšie zaradiť \u201Ečlovek v slučke\u201C?`}
        options={[
          { label: "🌕", text: "Keď AI generuje akýkoľvek text." },
          { label: "⭐", text: "Len keď nástroj nemá AI." },
          { label: "☀️", text: "Keď ide o krok s dopadom alebo rizikom chybného konania." }
        ]}
        correct="☀️"
        explanation="Pri dopade je lepšie mať kontrolu, než slepo pokračovať."
      />
    </PageShell>
  );
}
