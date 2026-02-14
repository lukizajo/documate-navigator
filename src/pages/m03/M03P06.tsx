import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P06() {
  const nav = getNavContext("m03-06-format");
  return (
    <PageShell title="5️⃣ FORMÁT – tvar výstupu" tldr={[
      "Zlý formát = pekná odpoveď, ale nepoužiteľná",
      "Konkrétne formáty fungujú najlepšie: odrážky, tabuľky, kroky",
      "Povedz AI presne, ako má výstup vyzerať",
    ]} {...nav}>


      <p>Niekedy AI odpovie „múdro" a znie to pekne… ale ty z toho nevieš nič použiť. Nie preto, že by odpoveď bola zlá, ale preto, že má zlý tvar.</p>

      <h3>Čo robí formát</h3>
      <ul>
        <li>či sa to dá hneď vložiť do dokumentácie / prezentácie / webu</li>
        <li>či sa v tom človek rýchlo zorientuje</li>
        <li>či je výstup konzistentný</li>
      </ul>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš návod, ako sa pripraviť na výlet."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš návod na jednodňový výlet v tomto formáte: 1) 3 kroky: príprava doma. Potom checklist (max 8 bodov): čo si zbaliť. Potom 2 odrážky: na čo si dať pozor. Na konci 1 veta: ‚Ak si nie si istý, napíš mi, čo máš v pláne a doplním to.'"
      </div>

      <h3>💡 Najlepšie fungujú konkrétne formáty</h3>
      <ul>
        <li>„Vráť 7 odrážok + 1 varovanie + 1 príklad"</li>
        <li>„Sprav tabuľku: Situácia | Čo spraviť | Prečo"</li>
        <li>„Nadpisy H2 + krátke bloky (max 3 odrážky v bloku)"</li>
      </ul>

      <MiniTask title="Otestuj 2 prompty (FORMÁT)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Výstup daj v tomto formáte: Ráno (2–3 aktivity), Obed (1 tip), Poobede (2–3 aktivity), Večer (1 tip na záver). Na konci pridaj krátky checklist: ‚Čo si vziať so sebou' (max 5 bodov)."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 je použiteľnejší, lebo formát donúti AI odpovedať prehľadne a štruktúrovane.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Chceš recept a nechceš „stenu textu". Ktorý prompt je najlepší?`}
        options={[
          { label: "🌕", text: `„Navrhni mi recept na rýchlu večeru."` },
          { label: "⭐", text: `„Navrhni mi recept na večeru a sprav to prehľadne. Môžeš použiť odrážky alebo kroky."` },
          { label: "☀", text: `„Navrhni mi 1 recept na večeru do 20 minút. Formát: 1) Ingrediencie (s množstvom), 2) Postup v 6 krokoch, 3) 2 tipy na obmenu."` },
        ]}
        correct="☀"
        explanation="Formát je presný, takže výsledok je hneď použiteľný."
      />
    </PageShell>
  );
}
