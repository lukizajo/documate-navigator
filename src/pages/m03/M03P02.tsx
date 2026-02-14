import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P02() {
  const nav = getNavContext("m03-02-uloha");
  return (
    <PageShell title="1️⃣ ÚLOHA – keď AI nevie, čo má robiť" tldr={[
      `Začni slovesom: navrhni, vysvetli, porovnaj, skontroluj`,
      `Povedz, čo má byť výstup a aké sú kritériá`,
      `„Urob to dobre" bez kritérií = AI si vyberie vlastné „dobre"`,
    ]} {...nav}>


      <p>Keď človek povie „AI mi dala zlú odpoveď", vo väčšine prípadov to neznamená, že by AI nefungovala. Znamená to, že nepochopila, čo má vlastne urobiť.</p>

      <h3>❌ Zlá verzia promptu</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš niečo o novej funkcii produktu."
      </div>
      <p className="text-sm">AI nevie: či má informovať, presviedčať alebo vysvetľovať; komu text patrí; aký má byť výsledok.</p>

      <h3>✔ Dobrá verzia promptu</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš stručný interný návod (cca 120–180 slov) pre kolegov, s cieľom vysvetliť, čo funkcia robí a kedy ju použiť."
      </div>

      <h3>💡 Ako na to (prakticky)</h3>
      <ul>
        <li>začni slovesom: navrhni / vysvetli / porovnaj / skontroluj / prepíš</li>
        <li>povedz „čo má byť výstup": text / checklist / tabuľka / plán</li>
        <li>pridaj kritériá: stručne, prakticky, bez žargónu, pre začiatočníka</li>
      </ul>
      <p>☠ <strong>Typická chyba:</strong> „urob to dobre" bez kritérií = AI si vyberie vlastné „dobre" 🙂</p>

      <MiniTask title="Otestuj 2 prompty (ÚLOHA)">
        <p><strong>Situácia:</strong> Cez víkend ideš na jednodňový výlet do Prahy. Chceš plán, aby si nemusel(a) rozmýšľať „kam teraz".</p>
        <p className="mt-2"><strong>❌ Prompt 1:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>„Naplánuj mi jednodňový výlet v Prahe."</div>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>„Navrhni mi konkrétny plán jednodňového výletu v Prahe."</div>
        <p className="mt-2"><strong>❓ Porovnávacie otázky:</strong></p>
        <ul className="text-xs">
          <li>Je jasné, čo presne mám dostať?</li>
          <li>Dostal(a) si zoznam miest bez smeru, alebo naozaj plán?</li>
          <li>Vieš ten výstup použiť hneď?</li>
          <li>Je vidieť, že AI pochopila úlohu „navrhnúť plán"?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 dá použiteľnejší výstup, lebo jasne hovorí, že má vzniknúť <strong>konkrétny plán</strong>. Prompt 1 často skončí všeobecným zoznamom odporúčaní.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš jednodňový program v Prahe. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Naplánuj mi výlet do Prahy. Chcem, aby to bolo super, zaujímavé, rýchle aj oddychové..."` },
          { label: "⭐", text: `„Vymysli mi program na jeden deň v Prahe. Nech je tam niečo pekné, niečo na jedlo a niečo zaujímavé."` },
          { label: "☀", text: `„Navrhni konkrétny program na 1 deň v Prahe. Cieľ: aby som sa podľa toho vedel riadiť bez ďalších otázok. Zahrň 4–6 zastávok v logickom poradí a pridaj 1 tip na obed."` },
        ]}
        correct="☀"
        explanation="Je jasná úloha (program na deň), jasný cieľ (aby sa dalo hneď použiť) a jasný výsledok (počet zastávok + obed)."
      />
    </PageShell>
  );
}
