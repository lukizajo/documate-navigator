import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M02P04() {
  const nav = getNavContext("m02-04-ferove-porovnanie");
  return (
    <PageShell title="3️⃣ Férové porovnanie chatbotov" tldr={[
      "Rovnaké zadanie + rovnaké kritériá = férové porovnanie",
      "3 kroky: prompt → follow-up → scorecard",
      "Hodnoť správanie, nie pocit",
    ]} {...nav}>

      <h2>Ako porovnávať chatboty férovo ⚖</h2>
      <p>Najčastejšia chyba pri porovnávaní chatbotov je, že každému dáme inú otázku… alebo sa spoliehame na prvý dojem. A prvý dojem je zradný.</p>

      <h3>Čo znamená férové porovnanie</h3>
      <ul>
        <li>rovnaké zadanie pre všetky nástroje,</li>
        <li>rovnaké kritériá hodnotenia,</li>
        <li>zápis výsledkov (nie spoliehanie sa na pamäť).</li>
      </ul>

      <h3>Mini-protokol (3 kroky)</h3>
      <ol>
        <li>Skopíruj rovnaký prompt do chatbota.</li>
        <li>Daj rovnaký follow-up (rovnaká zmena podmienky).</li>
        <li>Vyplň scorecard – krátke hodnotenie podľa rovnakých otázok.</li>
      </ol>

      <h3>Scorecard: hodnotím správanie, nie pocit</h3>
      <p>Namiesto „toto sa mi páči" používame scorecard (✅/⚠/❌ alebo 1–5):</p>
      <ul>
        <li><strong>Splnenie zadania</strong> – dodržal formát + fakty?</li>
        <li><strong>Prehľadnosť</strong> – dá sa to čítať rýchlo?</li>
        <li><strong>Konkrétnosť</strong> – je to použiteľné, nie všeobecné?</li>
        <li><strong>Proaktivita</strong> – ponúkne ďalší krok / spýta sa?</li>
        <li><strong>Vibe 🎭</strong> – ako na teba pôsobí?</li>
      </ul>
      <p className="text-sm italic">💡 <strong>Tip:</strong> Ak si po odpovedi povieš „toto sa mi páči", polož si otázku: 👉 Prečo konkrétne? A tú odpoveď si zapíš ako kritérium.</p>

      <MiniTask title="Reklamácia bez stresu (Claude)">
        <p><strong>Inštrukcia:</strong> Použi Claude! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov) a aby znel slušne, nie pasívne agresívne. Zachovaj formát."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Claude – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá uhladeným a „čistým" štýlom, často bez zbytočných emócií,</li>
          <li>má tendenciu byť precízny v štruktúre a držať sa zadania,</li>
          <li>často pôsobí viac „rozvážne" – radšej si niečo spresní alebo zvolí bezpečnejšiu formuláciu,</li>
          <li>emoji/smajlíky používa spravidla menej, výstup pôsobí serióznejšie,</li>
          <li>pri follow-upe prepracuje odpoveď veľmi disciplinovane.</li>
        </ul>
      </ExpectedFinding>
    </PageShell>
  );
}
