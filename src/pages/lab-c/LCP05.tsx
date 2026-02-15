import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lc-05-testovanie");

export default function LCP05() {
  return (
    <PageShell title="4️⃣ Testovanie a debugging" prev={nav.prev} next={nav.next}>
      <p>Testovanie je rozdiel medzi „vyzerá fajn" a „môžem sa na to spoľahnúť". Stačí malá testovacia sada, ktorá odhalí slabé miesta a pomôže ti zlepšiť pravidlá.</p>

      <hr />

      <h2>🧪 Test suite v 3 kategóriách</h2>
      <ul>
        <li>Bežné scenáre: typické zadania, ktoré budeš dávať často</li>
        <li>Hraničné prípady: krátke, nejasné alebo konfliktné zadania</li>
        <li>Pokus o zneužitie: úloha, ktorú by mal odmietnuť alebo spomaliť</li>
      </ul>

      <h2>✅ Minimálna testovacia sada</h2>
      <p>Ak chceš rýchlo zistiť, či je asistent stabilný, stačí ti 9 testov:</p>
      <ul>
        <li>3× bežné scenáre</li>
        <li>3× hraničné prípady</li>
        <li>3× pokus o zneužitie / riziko</li>
      </ul>

      <h2>👀 Čo pri testoch sledujem</h2>
      <ul>
        <li>drží dohodnutý formát (napr. kroky, max 6 bodov)?</li>
        <li>pýta sa, keď chýba cieľ / publikum / formát?</li>
        <li>označí neistotu a nevymýšľa si fakty?</li>
      </ul>

      <hr />

      <h2>🛠️ Debugging</h2>
      <p><strong>Debugging</strong> nie je „vylepšovanie pocitom". Je to práca s hypotézou:</p>
      <ul><li>Každé pravidlo je hypotéza. Test ti povie, či platí.</li></ul>

      <p><strong>Mikro príklad:</strong></p>
      <ul>
        <li>Problém: odpoveď je zbytočne dlhá.</li>
        <li>Úprava pravidla: „Odpovedaj max 6 bodmi. Každý bod max 1 veta."</li>
        <li>Retest: zopakuj ten istý test a porovnaj výsledok.</li>
      </ul>

      <h2>✅ Postup</h2>
      <ul><li>Nájdeš chybu → upravíš 1 pravidlo → retestuješ rovnaký test</li></ul>

      <h2>🧾 Log z testov</h2>
      <p>Aby si mal kontrolu nad zmenami, zapisuj si testy jedným riadkom:</p>
      <ul>
        <li>Test #: OK / FAIL</li>
        <li>Čo pokazil:</li>
        <li>Pravidlo na úpravu:</li>
        <li>Retest: OK / FAIL</li>
      </ul>

      <hr />

      <h2>❗ Na čo si dať pozor</h2>
      <ul>
        <li>Netestuj len „ľahké otázky" → asistent bude vyzerať super, ale v praxi padne.</li>
        <li>Nemeň naraz viac pravidiel → nebudeš vedieť, čo zafungovalo.</li>
      </ul>

      <MiniTest
        question="Ktoré 2 položky patria do dobrej test suite? Vyber 2."
        options={[
          { label: "🌕", text: "\u201ELen 1 ot\u00E1zka, aby to bolo r\u00FDchle.\u201C" },
          { label: "⭐", text: "\u201EBe\u017En\u00E9 sc\u00E9n\u00E1re, ktor\u00E9 bude\u0161 zad\u00E1va\u0165 \u010Dasto.\u201C" },
          { label: "☀️", text: "\u201EHrani\u010Dn\u00E9 pr\u00EDpady: nejasn\u00E9 alebo konfliktn\u00E9 zadania.\u201C" },
          { label: "🌑", text: "\u201ELen ot\u00E1zky, kde m\u00E1\u0161 istotu, \u017Ee odpove\u010F bude pekn\u00E1.\u201C" },
          { label: "🌠", text: "\u201ETesty bez retestu, lebo to je strata \u010Dasu.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ bežné scenáre overia, či je asistent prakticky použiteľný. ☀️ hraničné prípady odhalia slabé miesta a halucinácie."
      />

      <MiniTest
        question="Ktoré 2 kroky sú správny debugging postup? Vyber 2."
        options={[
          { label: "🌕", text: "\u201EKe\u010F to raz vy\u0161lo, je hotovo.\u201C" },
          { label: "⭐", text: "\u201EN\u00E1jdi chybu a uprav len 1 pravidlo.\u201C" },
          { label: "☀️", text: "\u201ERovnak\u00FD test zopakuj a porovnaj v\u00FDsledok (retest).\u201C" },
          { label: "🌑", text: "\u201EZme\u0148 naraz v\u0161etko, aby si to ur\u00FDchlil.\u201C" },
          { label: "🌠", text: "\u201EVyma\u017E pravidl\u00E1 a za\u010Dni od nuly pri ka\u017Edej chybe.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ jedna zmena = vieš, čo zafungovalo. ☀️ retest potvrdí, že oprava je stabilná."
      />
    </PageShell>
  );
}
