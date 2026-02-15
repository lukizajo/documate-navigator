import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-05-vstupy-pravidla");

export default function LIP05() {
  return (
    <PageShell title="4️⃣ Vstupy a pravidlá" prev={nav.prev} next={nav.next}>
      <p>Nástroj nie je problém. Problém je, že vstupy prídu raz takto a raz inak. Automatizácia potrebuje vstupy ako formulár: buď sú vyplnené, alebo STOP. Keď nevieš pomenovať MUST vstupy, automatizácia nemá na čom stáť.</p>
      <p>👉 <strong>Keď nevieš pomenovať MUST vstupy, automatizácia nemá na čom stáť.</strong></p>

      <h3>✅ 3 typy chaosu, ktoré ti rozbijú automatizáciu</h3>
      <p>1️⃣ <strong>Chýbajúci vstup</strong></p>
      <p>Napr. chýba email, ID, dátum alebo téma → nevieš pokračovať.</p>
      <p>2️⃣ <strong>Zlý formát</strong></p>
      <p>Raz príde dátum ako {"\u201E"}14.2.2026{"\u201C"}, inokedy {"\u201E"}2026-02-14{"\u201C"} → pravidlá sa rozpadnú.</p>
      <p>3️⃣ <strong>Nejednoznačný text</strong></p>
      <p>Nie je jasná priorita/kategória → AI háda alebo proces zle zvolí vetvu.</p>

      <h3>🧾 Input pack = kontrakt</h3>
      <ul>
        <li>✅ <strong>MUST</strong> = bez toho <strong>STOP</strong> alebo NEED_REVIEW</li>
        <li>👍 <strong>SHOULD</strong> = bez toho to ide, ale zvyšuje sa riziko NEED_REVIEW</li>
        <li>🌿 <strong>NICE</strong> = doplnok, ktorý môžeš kedykoľvek vypustiť</li>
      </ul>

      <h3>🧠 Mikropríklad (ako môže vyzerať Input pack)</h3>
      <p>Proces: {"\u201E"}Nový podnet z formulára{"\u201C"}</p>
      <ul>
        <li>✅ MUST: meno, kontakt, téma</li>
        <li>👍 SHOULD: firma, preferovaný termín</li>
        <li>🌿 NICE: poznámka, zdroj</li>
        <li>🔒 Citlivé: email, telefón</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>MUST nech je <strong>malé</strong> (inak bude proces stále stáť).</li>
        <li>SHOULD nech nie je {"\u201E"}len detail{"\u201C"}, ale reálne znižuje riziko omylu.</li>
        <li>Pri citlivých údajoch plánuj kontrolu alebo maskovanie v logu.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď máš priveľa vstupov</h3>
      <ol>
        <li>Najprv si napíš výstup: čo presne chceš na konci.</li>
        <li>Spýtaj sa: {"\u201E"}Bez čoho to nedokážem spraviť?{"\u201C"} → to je ✅ MUST.</li>
        <li>Zvyšok roztrieď na SHOULD/NICE.</li>
      </ol>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Proces už máš zmapovaný, ale automatizácia bude fungovať len vtedy, keď má presne definované vstupy.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Spíš všetky vstupy, ktoré proces potrebuje.</li>
          <li>Rozdeľ ich do 3 skupín: ✅ MUST / 👍 SHOULD / 🌿 NICE</li>
          <li>Označ citlivé polia 🔒.</li>
          <li>Ulož si to ako <strong>J4_inputs_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je jasné, bez ktorých polí to {"\u201E"}nejde{"\u201C"} (MUST)?</li>
          <li>Znižuje SHOULD riziko omylu alebo len {"\u201E"}pridáva detail{"\u201C"}?</li>
          <li>Označil som všetky citlivé údaje 🔒?</li>
          <li>Viem pomenovať, čo sa stane, keď chýba MUST (STOP / NEED_REVIEW)?</li>
        </ul>
        <ExpectedFinding>
          Keď si ujasníš vstupy, prestaneš narážať na situácie, kde automatizácia (alebo AI) háda a vyrába chyby.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Čo je najčastejší dôvod, prečo automatizácie robia chaos?"
        options={[
          { label: "🌕", text: "Nástroj je slabý." },
          { label: "⭐", text: "Chýbajú definované vstupy a pravidlá." },
          { label: "☀️", text: "AI je vždy nepresná." }
        ]}
        correct="⭐"
        explanation={`Keď vstupy nie sú jasné, automatizácia začne \u201Ehádať\u201C a rozpadne sa.`}
      />
    </PageShell>
  );
}
