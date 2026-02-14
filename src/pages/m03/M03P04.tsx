import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P04() {
  const nav = getNavContext("m03-04-priklady");
  return (
    <PageShell title="3️⃣ PRÍKLADY – referenčná fotka pre AI" {...nav}>


      <p>Keď AI povieš „napíš úvodný odsek", ona úvod napíše… ale každý z nás si pod tým predstaví niečo iné. Príklady sú ako „referenčná fotka".</p>

      <h3>Čo robia príklady</h3>
      <ul>
        <li>štýl (jednoduchý vs. odborný vs. marketing),</li>
        <li>formát (nadpisy, dĺžka, štruktúra),</li>
        <li>úroveň detailu (čo je ešte ok a čo je už omáčka).</li>
      </ul>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš popis na bazár."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš popis na bazár (2–3 vety) v štýle tohto príkladu: ‚Predám vec v dobrom stave, používaná len občas. Všetko funguje, dôvod predaja: už ju nevyužijem. Osobný odber alebo pošlem.' Téma: Predávam mobil."
      </div>

      <h3>💡 Kedy príklady najviac pomáhajú</h3>
      <ul>
        <li>keď chceš konzistentný štýl</li>
        <li>keď AI „píše inak", než chceš</li>
        <li>stačia 1–2 typy príkladov</li>
      </ul>
      <p>☠ <strong>Typická chyba:</strong> Príliš veľa príkladov spôsobí, že AI začne viac kopírovať než tvoriť.</p>
      <p className="text-sm italic">👉 1–2 relevantné príklady môžu zvýšiť kvalitu výstupu až o 45 %.</p>

      <MiniTask title="Otestuj 2 prompty (PRÍKLADY)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Chcem to napísať v štýle tohto príkladu (krátko, konkrétne, po častiach): ‚09:00 príchod – krátka káva blízko stanice. 10:00–12:00 prechádzka po centre (2–3 zastávky, ktoré sú blízko seba). 12:30 obed – niečo rýchle, bez rezervácie.' Teraz mi takto navrhni celý deň od rána do večera."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 trafí lepší štýl a štruktúru, lebo AI dostane ukážku, podľa ktorej sa má naladiť.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš napísať popis k inzerátu na predaj mobilu. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Napíš popis k inzerátu na mobil. Nech to znie dobre, profesionálne a ľudia to chcú kúpiť."` },
          { label: "⭐", text: `„Napíš krátky popis na bazár k predaju mobilu. Nech je to stručné a jasné."` },
          { label: "☀", text: `„Napíš popis na bazár (2–3 vety) v štýle tohto príkladu: ‚Predám vec v dobrom stave...' Téma: Predávam mobil."` },
        ]}
        correct="☀"
        explanation="Dáva AI konkrétnu vzorku štýlu, takže model drží stručnosť."
      />
    </PageShell>
  );
}
