import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-07-blueprint");

export default function LIP07() {
  return (
    <PageShell title="6️⃣ Blueprint" prev={nav.prev} next={nav.next}>
      <p>Blueprint je preklad procesnej mapy do logiky automatizácie. Je to návod pre nástroj (nie pre človeka). Keď ho spravíš dobre, vieš ho naklikať v ľubovoľnom nástroji bez {"\u201E"}domýšľania{"\u201C"}.</p>
      <p>👉 <strong>Blueprint je mapa + pravidlá + brzdy v jednej kostre.</strong></p>

      <h3>✅ 6 blokov blueprintu (a na čo si dať pozor)</h3>
      <p>1️⃣ <strong>Trigger</strong> – čo to spúšťa</p>
      <p>Typická chyba: spúšťam to príliš často alebo bez filtra.</p>
      <p>2️⃣ <strong>Validácia (MUST)</strong> – čo musí byť vyplnené</p>
      <p>Typická chyba: validujem až po akcii.</p>
      <p>3️⃣ <strong>AI krok (ak je)</strong> – len tam, kde treba význam/jazyk</p>
      <p>Typická chyba: AI bez formátu výstupu.</p>
      <p>4️⃣ <strong>Vetvenie + kontrola</strong> – NEED_REVIEW / STOP / človek</p>
      <p>Typická chyba: žiadna brzda, flow ide ďalej {"\u201E"}naslepo{"\u201C"}.</p>
      <p>5️⃣ <strong>Výstup</strong> – kde to skončí (zápis/odoslanie/notifikácia)</p>
      <p>Typická chyba: nejasný výstup alebo viac výstupov naraz.</p>
      <p>6️⃣ <strong>Log</strong> – dôkaz a diagnostika (čas, status, vstup, výstup)</p>
      <p>Typická chyba: žiadny log alebo logovanie citlivých údajov.</p>

      <h3>🧩 Mini-šablóna blueprintu (copy/paste)</h3>
      <ul>
        <li>Trigger: …</li>
        <li>Filter (voliteľné): …</li>
        <li>Validate MUST: … → ak chýba → STOP / NEED_REVIEW</li>
        <li>AI: vstup → výstupný formát → fallback</li>
        <li>Route: ak NEED_REVIEW → človek / STOP, inak pokračuj</li>
        <li>Action: zapíš/pošli/ulož</li>
        <li>Log: status + timestamp + výstup</li>
      </ul>
      <p>👉 <strong>Najprv nastav STOP/NEED_REVIEW, až potom rieš optimalizáciu a ďalšie kroky.</strong></p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Bez validácie MUST je blueprint deravý.</li>
        <li>Bez vetvenia bude AI robiť chyby potichu.</li>
        <li>Bez logu nevieš rýchlo zistiť, čo sa pokazilo.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď je blueprint dlhý</h3>
      <ol>
        <li>Vyhoď všetko, čo nie je MVP (nechaj len 1 výstup).</li>
        <li>Spoj kroky, ktoré len presúvajú dáta bez pridanej hodnoty.</li>
        <li>Pridaj filter na trigger (aby sa to nespúšťalo zbytočne).</li>
      </ol>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš proces, vstupy aj AI krok. Teraz to poskladáš do univerzálneho plánu, ktorý prenesieš do ľubovoľného nástroja.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Vypíš svoj blueprint podľa 6 blokov: Trigger / Validácia (MUST) / AI krok (výstup) / Vetvenie (NEED_REVIEW → človek/STOP) / Výstup / Log</li>
          <li>Pri validácii dopíš, čo sa stane, keď chýba MUST.</li>
          <li>Ulož si to ako <strong>J6_blueprint_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Dá sa blueprint naklikať bez toho, aby som {"\u201E"}dohádal{"\u201C"} chýbajúce kroky?</li>
          <li>Je tam jasná validácia MUST pred akciami s dopadom?</li>
          <li>Mám vetvenie pre NEED_REVIEW?</li>
          <li>Mám log (čas, vstup, výstup, status)?</li>
        </ul>
        <ExpectedFinding>
          Blueprint ti dá kontrolu: aj keď sa zmení nástroj, logika procesu ostáva rovnaká.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Čo je dobrý log?"
        options={[
          { label: "🌕", text: "Ukladám vstup + výstup + status + čas, aby som vedel dohľadať chyby." },
          { label: "⭐", text: "Ukladám len finálny výsledok." },
          { label: "☀️", text: "Log netreba, keď mám AI." }
        ]}
        correct="🌕"
        explanation="Bez logu nevieš rýchlo nájsť príčinu chyby ani ju opraviť."
      />
    </PageShell>
  );
}
