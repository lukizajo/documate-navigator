import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-10-pilot");

export default function LIP10() {
  return (
    <PageShell title="9️⃣ Pilot a vyhodnotenie" prev={nav.prev} next={nav.next}>
      <p>Pilot nie je nasadenie {"\u201E"}navždy{"\u201C"}. Je to kontrolovaná skúška, kde zbieraš dáta a dôkazy. Cieľ pilotu je zistiť, či to šetrí čas <strong>bez toho</strong>, aby si si vytvoril nový problém (tichý chaos a neviditeľné chyby).</p>
      <p>👉 <strong>Pilot je zber dôkazov, nie pocitov.</strong></p>

      <h3>✅ 4 metriky pilotu (aby to bolo merateľné)</h3>
      <p>1️⃣ <strong>Úspora času</strong></p>
      <p>Koľko minút/hodín to ušetrilo za týždeň (aj odhad stačí).</p>
      <p>2️⃣ <strong>Spoľahlivosť</strong></p>
      <p>Koľko behov bolo OK vs NEED_REVIEW vs Fail.</p>
      <p>3️⃣ <strong>Kvalita výstupu</strong></p>
      <p>Koľko výstupov bolo použiteľných bez úprav (napr. 3/5).</p>
      <p>4️⃣ <strong>Cena chyby</strong></p>
      <p>Čo je najhoršie, čo sa môže stať, keď to zlyhá — a či to brzdy kryjú.</p>

      <h3>✅ Rozhodnutie po pilote</h3>
      <ul>
        <li>✅ <strong>GO</strong> = funguje stabilne</li>
        <li>🛠️ <strong>TUNE</strong> = funguje, ale treba 1–2 úpravy (vstupy / prompt / brzdy)</li>
        <li>⛔ <strong>STOP</strong> = riziko je väčšie než prínos</li>
      </ul>

      <h3>🧾 Mini-šablóna pilot reportu</h3>
      <ul>
        <li>Cieľ automatizácie (1 veta): …</li>
        <li>Výsledky: OK / NEED_REVIEW / Fail (počty): …</li>
        <li>Najčastejšia príčina NEED_REVIEW alebo Fail: …</li>
        <li>1 úprava, ktorú spravím najbližšie: …</li>
        <li>Rozhodnutie: GO / TUNE / STOP + prečo: …</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Vyhodnocovať bez logu (potom je to len dojem).</li>
        <li>Riešiť 10 úprav naraz (nevieš, čo pomohlo).</li>
        <li>Pilotovať na {"\u201E"}nerealisticky čistých{"\u201C"} vstupoch (realita ťa dobehne).</li>
      </ul>

      <h3>🔧 Mini-debugging, keď pilot ukáže problémy</h3>
      <ol>
        <li>Ak je veľa NEED_REVIEW → zlepši Input pack alebo sprísni AI výstup.</li>
        <li>Ak sú Fail chyby → pridaj validáciu alebo STOP bod pred dopadom.</li>
        <li>Ak je prínos malý → zmeň proces (možno automatizuješ zlú vec).</li>
      </ol>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Po testoch prichádza pilot: krátke nasadenie alebo skúška na reálnych vstupoch, aby si vedel rozhodnúť, či pokračovať.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Napíš mini report (5–8 viet): čo fungovalo, čo zlyhalo, 1 najdôležitejšia úprava, STOP alebo GO a prečo.</li>
          <li>Dopíš, čo bude tvoj najbližší {"\u201E"}ďalší krok{"\u201C"} (ale ešte ho nerob).</li>
          <li>Ulož si to ako <strong>J9_pilot_report_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Viem povedať konkrétne, čo fungovalo (nie {"\u201E"}bolo to fajn{"\u201C"})?</li>
          <li>Viem pomenovať jednu hlavnú príčinu zlyhania?</li>
          <li>Mám jasnú 1 úpravu, ktorú spravím ako prvú?</li>
          <li>Je moje STOP/GO rozhodnutie podložené testami a logom?</li>
        </ul>
        <ExpectedFinding>
          Pilot ti dá realitu: ukáže prínos aj slabé miesta a pomôže rozhodnúť, či automatizáciu rozšíriť alebo zastaviť.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Ktorý výsledok po pilote je najzdravší?"
        options={[
          { label: "🌕", text: "Automatizácia je dokonalá, už netreba nič." },
          { label: "⭐", text: "Nechám to bežať bez logovania." },
          { label: "☀️", text: "Viem, čo treba upraviť a mám plán ďalšieho kroku." }
        ]}
        correct="☀️"
        explanation={`Pilot má dať istotu a jasné úpravy \u2014 nie pocit \u201Enejako to ide\u201C.`}
      />
    </PageShell>
  );
}
