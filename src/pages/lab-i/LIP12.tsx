import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-12-prakticka-uloha");

export default function LIP12() {
  return (
    <PageShell title="🎓 Praktická úloha – Automatizácia v praxi" prev={nav.prev} next={nav.next}>
      <p>Na záver spojíš všetko z LABu do jednej reálnej úlohy. Cieľom nie je mať {"\u201E"}dokonalú automatizáciu{"\u201C"}, ale vedome použiť stavebné bloky: výber procesu, procesná mapa, rozdelenie krokov (bez AI / s AI / človek), input pack, AI špecifikácia, blueprint, testovanie, brzdy a pilot.</p>

      <h2>Zadanie</h2>
      <p>Vytvor <strong>MVP automatizáciu</strong> pre svoj vybraný proces v <strong>ľubovoľnom nástroji</strong>, ktorý používaš.</p>

      <h3>Požiadavky na výsledok</h3>
      <ul>
        <li>automatizácia má jasný <strong>trigger</strong> a jasný <strong>výstup</strong>,</li>
        <li>má maximálne <strong>1 AI krok</strong> (max 2, ak sú malé a jasné),</li>
        <li>obsahuje <strong>kontrolný bod</strong> (STOP/GO alebo schválenie človekom),</li>
        <li>má <strong>logovanie</strong> (minimálne: vstup, výstup, status, čas),</li>
        <li>má otestovaných aspoň <strong>5 prípadov</strong>,</li>
        <li>vie bezpečne reagovať na neistotu (napr. NEED_REVIEW).</li>
      </ul>

      <h2>Tvoja úloha</h2>

      <h3>1️⃣ Proces</h3>
      <p>Zober si výstup <strong>J1_process_v1</strong> a uprav ho do finálnej verzie.</p>
      <p>Ulož ako: <strong>FINAL_process_v1</strong></p>

      <h3>2️⃣ Procesná mapa</h3>
      <p>Zober si <strong>J2_map_v1</strong> a uisti sa, že má 6–10 krokov a jasné miesto rozhodnutia.</p>
      <p>Ulož ako: <strong>FINAL_map_v1</strong></p>

      <h3>3️⃣ Rozdelenie krokov</h3>
      <p>Zober si <strong>J3_labels_v1</strong> a skontroluj, že:</p>
      <ul>
        <li>AI je len na 1 konkrétnom kroku,</li>
        <li>máš označené miesto, kde musí byť človek (ak je dopad).</li>
      </ul>
      <p>Ulož ako: <strong>FINAL_labels_v1</strong></p>

      <h3>4️⃣ Input pack</h3>
      <p>Zober si <strong>J4_inputs_v1</strong> a dopíš, čo sa stane, keď chýba MUST (STOP / NEED_REVIEW).</p>
      <p>Ulož ako: <strong>FINAL_inputs_v1</strong></p>

      <h3>5️⃣ AI krok</h3>
      <p>Zober si <strong>J5_ai_step_v1</strong> a dolaď:</p>
      <ul>
        <li>výstupný formát (aby bol použiteľný ďalej),</li>
        <li>fallback (NEED_REVIEW + dôvod).</li>
      </ul>
      <p>Ulož ako: <strong>FINAL_ai_step_v1</strong></p>

      <h3>6️⃣ Blueprint</h3>
      <p>Zober si <strong>J6_blueprint_v1</strong> a sprav finálnu verziu 6 blokov (trigger → validácia → AI → kontrola → výstup → log).</p>
      <p>Ulož ako: <strong>FINAL_blueprint_v1</strong></p>

      <h3>7️⃣ Implementácia v nástroji</h3>
      <p>Naklikaj <strong>MVP automatizáciu</strong> v ľubovoľnom nástroji podľa blueprintu.</p>
      <p>👉 Drž sa MVP: jeden trigger, minimum krokov, jeden výstup. Žiadne {"\u201E"}a ešte toto{"\u201C"}, kým neprejdeš testami.</p>
      <p>Dôkaz (vyber 1):</p>
      <ul>
        <li>screenshot flow, alebo</li>
        <li>export, alebo</li>
        <li>share link (ak to nástroj umožňuje).</li>
      </ul>
      <p>Ulož ako: <strong>FINAL_build_proof_v1</strong></p>

      <h3>8️⃣ Testovanie</h3>
      <p>Zober si <strong>J7_tests_v1</strong>, spusti testy a dopíš výsledok (Pass/Fail + poznámka).</p>
      <p>Ulož ako: <strong>FINAL_tests_v1</strong></p>

      <h3>9️⃣ Brzdy + pilot</h3>
      <p><strong>A) Brzdy</strong></p>
      <p>Zober si <strong>J8_guardrails_v1</strong> a dopíš finálne STOP/GO pravidlo + notifikáciu (kto sa dozvie čo a čo má spraviť).</p>
      <p>Ulož ako: <strong>FINAL_guardrails_v1</strong></p>
      <p><strong>B) Pilot report</strong></p>
      <p>Napíš mini pilot report podľa lekcie 9️⃣ (metriky + rozhodnutie GO/TUNE/STOP).</p>
      <p>Ulož ako: <strong>FINAL_pilot_report_v1</strong></p>

      <h2>❓ Sebakontrola (ÁNO/NIE)</h2>
      <ul>
        <li>Je z 1 vety jasné, čo automatizácia robí a aký má výstup?</li>
        <li>Je trigger jednoznačný a opakovateľný?</li>
        <li>Je AI len na jednom kroku a má jasný výstupný formát?</li>
        <li>Existuje fallback (NEED_REVIEW) a je jasné, čo sa stane potom?</li>
        <li>Mám kontrolný bod pred krokom s dopadom (STOP/GO alebo človek)?</li>
        <li>Mám log (vstup, výstup, status, čas), aby som vedel dohľadať chyby?</li>
        <li>Mám otestovaných aspoň 5 prípadov a viem povedať Pass/Fail?</li>
      </ul>

      <ExpectedFinding>
        Budeš mať funkčné MVP, ktoré vieš preniesť aj do iného nástroja, pretože stojí na jasnej logike procesu. Okrem samotnej automatizácie ti ostane uložený balíček {"\u201E"}stavebných blokov{"\u201C"} (process, mapa, labels, inputs, AI krok, blueprint, testy, brzdy), ktorý vieš nabudúce použiť znovu a len vymeniť tému/proces.
      </ExpectedFinding>

      <p><strong>💡 Bonus tip (aby to bolo férové a jasné)</strong></p>
      <p>Ak si nie si istý, kde dať STOP bod alebo ako nastaviť fallback, povedz AI:</p>
      <p>{"\u201E"}Navrhni mi 3 možnosti STOP bodu a fallbacku pre môj proces a vysvetli riziko každej možnosti.{"\u201C"}</p>
    </PageShell>
  );
}
