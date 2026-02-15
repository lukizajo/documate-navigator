import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-02-vyber-procesu");

export default function LIP02() {
  return (
    <PageShell title="1️⃣ Výber procesu" prev={nav.prev} next={nav.next}>
      <p>Automatizácia zlyháva najčastejšie nie kvôli nástroju, ale kvôli tomu, že proces nemá jasný začiatok a koniec. Preto začíname výberom procesu, ktorý je <strong>malý, opakovateľný a testovateľný</strong> — a až potom ho rozšírime.</p>
      <p>👉 <strong>Najlepší prvý proces je ten, ktorý vieš vysvetliť jednou vetou a otestovať hneď dnes.</strong></p>

      <h3>✅ 3 filtre, ktoré ti uľahčia výber</h3>
      <p>1️⃣ <strong>Opakovanie</strong> - proces sa deje často a podobne (napr. denne / týždenne)</p>
      <p>2️⃣ <strong>Jasný trigger + jasný výstup</strong> - vieš presne povedať, čo ho spustí a čo je {"\u201E"}hotovo{"\u201C"}</p>
      <p>3️⃣ <strong>Predvídateľný vstup</strong> - aspoň v 80 % prípadov prichádzajú vstupy v podobnej forme</p>

      <h3>🧠 Mikropríklady</h3>
      <p>✅ <strong>Dobré MVP:</strong> {"\u201E"}Keď príde nový lead z formulára, zapíšem ho do tabuľky a pošlem potvrdzovací email.{"\u201C"}</p>
      <p>❌ <strong>Zlé MVP:</strong> {"\u201E"}Keď príde lead, AI ho vyhodnotí, pripraví personalizovaný follow-up, nastaví segmenty a spustí kampaň.{"\u201C"}</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Priveľa výnimiek</strong> hneď na začiatku ({"\u201E"}a čo ak…{"\u201C"}) → sprav verziu pre 80 % prípadov.</li>
        <li><strong>Nejasný výstup</strong> ({"\u201E"}spracovať{"\u201C"} ≠ hotovo) → pomôž si vetou {"\u201E"}hotovo je, keď…{"\u201C"}.</li>
        <li><strong>AI v prvom kroku bez bŕzd</strong> → najprv MVP, až potom pridávaj AI tam, kde dáva zmysel.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď nevieš vybrať proces</h3>
      <ol>
        <li>Napíš 3 veci, ktoré robíš opakovane (týždenne alebo častejšie).</li>
        <li>Ku každej dopíš: <strong>trigger + výstup</strong> (1 veta).</li>
        <li>Vyber tú, kde je najmenej výnimiek a dá sa otestovať hneď dnes.</li>
      </ol>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Vyberáš si prvý proces na automatizáciu. Cieľom je zvoliť taký, ktorý je bezpečný, malý a dá sa otestovať bez stresu.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Vyber 1 proces, ktorý sa ti opakuje (aspoň raz za týždeň).</li>
          <li>Doplň tieto 3 vety:
            <ul>
              <li>Proces (1 veta): {"\u201E"}Keď sa stane X, automaticky urobím Y pre Z.{"\u201C"}</li>
              <li>Trigger: čo je presný signál, že proces začína?</li>
              <li>Výstup: čo je {"\u201E"}hotovo{"\u201C"} a kde to uvidím?</li>
            </ul>
          </li>
          <li>Ulož si to ako <strong>J1_process_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je trigger taký jasný, že by ho pochopil aj človek mimo tvojej práce?</li>
          <li>Viem presne povedať, čo je {"\u201E"}hotovo{"\u201C"} (výstup) bez ďalších podmienok?</li>
          <li>Dá sa tento proces otestovať dnes na 1–2 testovacích vstupoch?</li>
          <li>Je to naozaj MVP (nie 10 krokov a 5 výnimiek)?</li>
        </ul>
        <ExpectedFinding>
          Keď si proces zmenšíš na MVP, automatizácia sa ľahšie testuje, menej sa kazí a vieš ju bezpečne rozširovať.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Ktorá voľba je najlepšia pre prvé MVP?"
        options={[
          { label: "🌕", text: "Najprv spravím 10 krokov, nech je to kompletné." },
          { label: "⭐", text: "Najprv spravím 1 trigger + 1\u20132 kroky + kontrolu." },
          { label: "☀️", text: "Najprv pridám AI do viacerých krokov, aby to bolo \u201Esmart\u201C." }
        ]}
        correct="⭐"
        explanation="MVP má byť malé, aby si ho rýchlo otestoval a bezpečne upravil."
      />
    </PageShell>
  );
}
