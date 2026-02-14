import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M02P05() {
  const nav = getNavContext("m02-05-kriteria");
  return (
    <PageShell title="4️⃣ Kritériá hodnotenia a scorecard" {...nav}>

      <h2>Kritériá hodnotenia</h2>

      <h3>Kvalita výsledku (čo si odnášam)</h3>
      <ul>
        <li><strong>Splnenie zadania</strong> – dodržal formát a to, čo som chcel?</li>
        <li><strong>Štruktúra</strong> – je odpoveď prehľadná (body, kroky, tabuľka)?</li>
        <li><strong>Čitateľnosť</strong> – rozumel by tomu aj niekto iný bez kontextu?</li>
        <li><strong>Konkrétnosť</strong> – dá sa podľa toho konať, alebo sú to len všeobecné frázy?</li>
        <li>(Voliteľné) <strong>Fakty a overiteľnosť</strong> – ak sú tam tvrdenia, viem ich overiť?</li>
      </ul>

      <h3>Správanie chatbota (ako sa s ním pracuje)</h3>
      <ul>
        <li><strong>Proaktivitu</strong> – položí doplňujúcu otázku / navrhne ďalší krok?</li>
        <li><strong>Priznanie limitov</strong> – povie, keď niečo nevie alebo keď si domýšľa?</li>
        <li><strong>🎭 Vibe</strong> – je príjemný, vecný, ukecaný, strohý… a sedí mi to na úlohu?</li>
      </ul>

      <h3>Ako to hodnotiť rýchlo</h3>
      <ul>
        <li>✅ = splnené</li>
        <li>⚠ = čiastočne / potrebuje úpravu</li>
        <li>❌ = nesplnené</li>
      </ul>
      <p>👉 <strong>Tie isté kritériá používaj pre všetkých chatbotov rovnako.</strong></p>

      <h2>Scorecard – šablóna na porovnávanie</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">Kvalita výsledku</th>
              <th className="text-center py-2 px-2 font-semibold">Hodnotenie</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Splnenie zadania: dodržal formát + to, čo som chcel?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Štruktúra: je to prehľadné (body/kroky/tabuľka)?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Čitateľnosť: rozumel by tomu aj niekto iný?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Konkrétnosť: dá sa podľa toho konať hneď?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">Správanie chatbota</th>
              <th className="text-center py-2 px-2 font-semibold">Hodnotenie</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Proaktivita: navrhol ďalší krok / spýtal sa?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Priznanie limitov: priznal neistotu?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Vibe: pôsobí mi štýl vhodne na túto úlohu?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
          </tbody>
        </table>
      </div>

      <MiniTask title="Reklamácia bez stresu (Mistral)">
        <p><strong>Inštrukcia:</strong> Použi Mistral! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov)..."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Mistral – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá stručnejšie a priamo, s menším „omáčkovým" vysvetľovaním,</li>
          <li>pôsobí menej konverzačne než ChatGPT (viac vecný),</li>
          <li>štruktúru vie dať dobrú, ale občas ju treba výslovne vypýtať,</li>
          <li>emoji/smajlíky používa málo alebo vôbec,</li>
          <li>pri follow-upe reaguje rýchlo, ale nie vždy automaticky pridá „ďalší krok".</li>
        </ul>
      </ExpectedFinding>
    </PageShell>
  );
}
