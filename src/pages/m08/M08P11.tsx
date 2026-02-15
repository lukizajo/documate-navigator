import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest } from "@/components/ContentBlocks";

export default function M08P11() {
  const nav = getNavContext("m08-11-chyby-bezpecnost");
  return (
    <PageShell title="🔟 Chyby, čo neautomatizovať a bezpečnosť 🚫🔐" {...nav}>

      <p>Automatizácia vie ušetriť čas… ale vie aj zrýchliť problémy.</p>
      <p>Preto si tu nastavíme 3 veci:</p>
      <ul>
        <li>najčastejšie <strong>chyby</strong> pri automatizácii,</li>
        <li><strong>čo radšej neautomatizovať</strong>,</li>
        <li>a základné <strong>bezpečnostné pravidlá</strong> (aby si mal kontrolu).</li>
      </ul>

      <h3>❌ Najčastejšie chyby pri automatizácii</h3>
      <p><strong>👉 Automatizujem chaos</strong></p>
      <p>Ak proces nie je jasný, automatizácia ho nezlepší – iba zrýchli chaos.</p>
      <p><strong>Signál:</strong> „Každý to robí trochu inak."</p>
      <p>➡️ Najprv proces (kroky, vstup, výstup), až potom automatizácia.</p>

      <p><strong>👉 Chcem automatizovať všetko naraz</strong></p>
      <p>Veľký „mega-flow" sa rozbije pri prvej výnimke.</p>
      <p>➡️ Začni mini-verziou (1 krok), pilot 5–10 prípadov, potom rozširuj.</p>

      <p><strong>👉 Nemám kontrolný bod</strong></p>
      <p>Automatizácia niečo urobí… a ty to zistíš až keď je neskoro.</p>
      <p>➡️ Nastav „stopku": kde sa kontroluje výstup (aspoň pri rizikových krokoch).</p>

      <p><strong>👉 Neviem, čo je „správne"</strong></p>
      <p>Keď nemáš definíciu „hotovo" a príklady správneho výsledku, nedá sa to dobre testovať.</p>
      <p>➡️ Definuj výstup + ukážky správneho výsledku (aspoň 3).</p>

      <p><strong>👉 Zlá granularita</strong></p>
      <p>Buď príliš veľký krok (krehké), alebo príliš malé kroky (zložité).</p>
      <p>➡️ Sweet spot: <strong>1 vstup → 1 kontrolovateľný výstup</strong>.</p>

      <h3>🚫 Čo radšej neautomatizovať (alebo len veľmi opatrne)</h3>
      <p>Automatizácia sa nehodí, ak:</p>
      <ul>
        <li><strong>Pravidlá sú nestabilné</strong> a je veľa výnimiek (proces sa mení podľa situácie).</li>
        <li><strong>Riziko chyby je vysoké</strong> (peniaze, zákazník, reputácia, citlivé údaje).</li>
        <li>Výstup ide „von" bez možnosti opravy (napr. automatické odoslanie zákazníkovi).</li>
        <li>Nemáš spôsob, ako chybu rýchlo zachytiť a zastaviť.</li>
      </ul>
      <p>👉 V týchto prípadoch je často lepší <strong>AI copilot</strong>: AI navrhne, človek schváli.</p>

      <h3>🔐 Bezpečnostné pravidlá (guardrails), ktoré stačia aj pre začiatočníka</h3>
      <p><strong>👉 Človek v slučke (Human-in-the-loop)</strong></p>
      <p>Pri citlivých veciach nech AI/automat pripraví návrh, ale človek schváli.</p>
      <p><strong>👉 Fallback (čo sa stane, keď to zlyhá?)</strong></p>
      <p>Keď automatizácia nevie, nech:</p>
      <ul>
        <li>označí „NEJASNÉ"</li>
        <li>pošle to na kontrolu</li>
        <li>alebo sa zastaví</li>
      </ul>
      <p><strong>👉 Log (aspoň jednoduchá stopa)</strong></p>
      <p>Maj prehľad:</p>
      <ul>
        <li>čo sa spustilo,</li>
        <li>čo to spravilo,</li>
        <li>čo bolo nejasné.</li>
      </ul>
      <p><strong>👉 Kill switch (možnosť vypnúť)</strong></p>
      <p>Jedno tlačidlo/setting, ktorým to zastavíš, keď sa deje blbosť.</p>
      <p><strong>👉 Minimálne dáta</strong></p>
      <p>Do AI nedávaj viac, než potrebuje.</p>
      <p>Keď stačí suma a popis, netreba celé výpisy s osobnými poznámkami.</p>

      <h3>🧠 Príklad z osobného života: domáce financie 💳</h3>
      <ul>
        <li><strong>OK automatizovať:</strong> pravidelné platby do kategórií (stabilné pravidlá).</li>
        <li><strong>Opatrne:</strong> nejasné transakcie → radšej AI copilot (navrhne kategóriu, ty potvrdíš).</li>
        <li><strong>Nechať manuálne:</strong> podozrivá platba alebo niečo, čo môže byť podvod (vysoké riziko).</li>
      </ul>

      <h3>🧠 Príklad z práce: opakujúce sa e-maily 📩</h3>
      <ul>
        <li><strong>OK:</strong> triedenie emailov do typov (billing/technické/iné) + návrh odpovede ako draft.</li>
        <li><strong>Opatrne:</strong> automatické odoslanie odpovede zákazníkovi bez kontroly (riziko reputácie).</li>
        <li><strong>Bezpečné nastavenie:</strong> AI pripraví draft + povinný kontrolný bod pred odoslaním.</li>
      </ul>

      <MiniTest
        question={"Ktorý signál najviac naznačuje \u201Eautomatizujem chaos\u201C?"}
        options={[
          { label: "🌕", text: "Je to opakované každý týždeň." },
          { label: "⭐", text: "Každý to robí trochu inak a nemáme jasné kroky." },
          { label: "☀️", text: "Je to mechanické a stabilné." },
        ]}
        correct="⭐"
        explanation="Ak neexistuje jasný proces, automatizácia len zrýchli nejasnosti a chyby."
      />

      <MiniTest
        question="Čo je najlepšie spraviť ako prvé, keď chcem automatizovať veľký proces?"
        options={[
          { label: "🌕", text: "Rozbiť ho na mini-verziu a automatizovať 1 krok." },
          { label: "⭐", text: "Automatizovať celý proces naraz, aby to malo efekt." },
          { label: "☀️", text: "Najprv vybrať nástroj a až potom riešiť proces." },
        ]}
        correct="🌕"
        explanation="Mini-verzia sa dá rýchlo otestovať a opraviť, veľký flow sa pri výnimkách rozpadne."
      />

      <MiniTest
        question="Ktoré nastavenie je najbezpečnejšie pri výstupe smerom k zákazníkovi?"
        options={[
          { label: "🌕", text: "AI-first bez kontroly (nech to ide rýchlo)." },
          { label: "⭐", text: "AI copilot: AI pripraví draft, človek schváli." },
          { label: "☀️", text: "BezAI automatizácia bez logu." },
        ]}
        correct="⭐"
        explanation={"Keď ide výstup \u201Evon\u201C, chceš človeka v slučke – znižuješ riziko reputačnej chyby."}
      />

      <MiniTest
        question={"Čo je \u201Ekill switch\u201C?"}
        options={[
          { label: "🌕", text: "Pravidlo, ktoré vždy vyberie kategóriu." },
          { label: "⭐", text: "Možnosť rýchlo vypnúť automatizáciu, keď sa deje chyba." },
          { label: "☀️", text: "Prompt, ktorý zlepší odpoveď." },
        ]}
        correct="⭐"
        explanation="Kill switch je poistka – keď automatizácia zlyháva, vieš ju okamžite zastaviť."
      />

      <MiniTest
        question="Kedy je rozumné nechať krok manuálne (alebo len copilot)?"
        options={[
          { label: "🌕", text: "Keď pravidlá sú stabilné a dopad chyby nízky." },
          { label: "⭐", text: "Keď je veľa výnimiek a dopad chyby vysoký (peniaze/citlivé údaje)." },
          { label: "☀️", text: "Keď je to mechanický presun súboru." },
        ]}
        correct="⭐"
        explanation="Nestabilné pravidlá + vysoké riziko je najnebezpečnejšia kombinácia – tam je kontrola kľúčová."
      />
    </PageShell>
  );
}
