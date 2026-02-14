import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M02P07() {
  const nav = getNavContext("m02-07-prakticka-uloha");
  return (
    <PageShell title="🎓 Praktická úloha – Porovnanie chatbotov" tldr={[
      "Vyber 3 use-casy a otestuj ich v 3 chatbotoch",
      "Rovnaký prompt + follow-up pre všetkých",
      "Vyplň scorecard a porovnaj výsledky",
    ]} {...nav}>

      <h2>🎓 Praktická úloha – Porovnanie chatbotov v praxi</h2>
      <p><strong>Zadanie:</strong> Vyber si 3 use-casy a otestuj ich v 3 chatbotoch podľa vlastného výberu. Pri každom use-case použiješ rovnaký Prompt a potom rovnaký Follow-up vo všetkých 3 chatbotoch.</p>

      <h3>🅰 Vyber si 3 use-casy:</h3>
      <ol>
        <li>zhrnutie odborného článku pre rôzne publikum (manažér vs. laik),</li>
        <li>návrh marketingového sloganu s obmedzeniami,</li>
        <li>napísanie pracovného e-mailu v citlivej situácii,</li>
        <li>brainstorming 10 nápadov + ich zoradenie podľa potenciálu,</li>
        <li>faktická otázka s požiadavkou na zdroje a dátumy,</li>
        <li>prepis rovnakého textu do rôznych štýlov,</li>
        <li>návrh osnovy prezentácie s jasnou logikou argumentov,</li>
        <li>kritické zhodnotenie textu,</li>
        <li>zjednodušenie komplexnej témy pre začiatočníka,</li>
        <li>návrh riešenia problému s uvedením rizík a obmedzení.</li>
      </ol>

      <h3>🅱 Vyber si 3 chatboty</h3>
      <p>ChatGPT, Claude, Gemini, +1 chatbot podľa vlastného výberu.</p>

      <h3>Tvoja úloha (3 kroky) pre každý use-case</h3>
      <ol>
        <li>Skopíruj Prompt do všetkých 3 chatbotov.</li>
        <li>Po odpovedi skopíruj Follow-up do všetkých 3 chatbotov.</li>
        <li>Vyplň Hodnotiacu kartu.</li>
      </ol>

      <h3>Hodnotiaca scorecard (0–3 body)</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">A) Kvalita výsledku</th>
              <th className="text-center py-2 px-2 font-semibold">0–3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Splnenie zadania (dodržal formát + podmienky)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Štruktúra (prehľadné, ľahko sa porovnáva)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Čitateľnosť (rozumel by tomu aj niekto iný)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Konkrétnosť (dá sa použiť hneď)</td><td className="text-center">___</td></tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">B) Správanie chatbota</th>
              <th className="text-center py-2 px-2 font-semibold">0–3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Proaktivita (ďalší krok / doplňujúca otázka)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Priznanie limitov (nehrá sa na istotu)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">🎭 Vibe (tón vhodný pre úlohu)</td><td className="text-center">___</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Súčet bodov: ____ / 21</strong></p>

      <h3>Hodnotiace kritériá</h3>
      <ul>
        <li><strong>0</strong> = nesplnil / nepoužiteľné</li>
        <li><strong>1</strong> = slabé (veľa by si musel prerábať)</li>
        <li><strong>2</strong> = dobré (len drobné úpravy)</li>
        <li><strong>3</strong> = výborné (takmer „ready-to-send")</li>
      </ul>
      <p>👉 <strong>Dôležité:</strong> hodnotíš rovnakými kritériami všetkých 3 chatbotov.</p>

      <h3>Očakávaný výstup</h3>
      <ul>
        <li>vyplnené scorecardy (min. 3 use-casy × 3 chatboty = 9 hodnotení),</li>
        <li>krátke porovnanie (1–2 odseky),</li>
        <li>jasné odporúčanie: „Na tento typ úlohy sa mi najviac hodil chatbot X, lebo…"</li>
      </ul>
    </PageShell>
  );
}
