import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P07() {
  const nav = getNavContext("m03-07-ton");
  return (
    <PageShell title="6️⃣ TÓN – ako to znie" {...nav}>


      <p>Niekedy AI povie správne veci, ale znie to úplne mimo. Buď príliš marketingovo, príliš múdro, alebo ako motivačný kouč z internetu 😄</p>
      <p><strong>Tón neurčuje fakty. Tón určuje, ako to pôsobí</strong> – či to znie dôveryhodne, vecne, ľudsky, alebo „ako reklama".</p>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš vysvetľujúci text."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš vysvetľujúci text v tóne: vecný, pokojný, bez superlatívov. Píš ako interný manuál, nie marketing. Bez dramatizovania a bez strašenia."
      </div>

      <h3>💡 Príklady tónu</h3>
      <ul>
        <li>priateľský, jednoduchý, bez žargónu</li>
        <li>praktický, vecný, žiadny marketing</li>
        <li>motivujúci, ale nie „guru štýl"</li>
      </ul>
      <p>👉 <strong>Tip:</strong> keď chceš „tvoj štýl", je lepšie opísať tón konkrétne než len napísať „profesionálne".</p>

      <MiniTask title="Otestuj 2 prompty (TÓN)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Píš priateľsky a jednoducho, ako keby si to posielal kamarátovi do správy. Žiadne zložité slová, žiadne dlhé odstavce. Max 6 krátkych viet."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 bude pôsobiť prístupnejšie a zrozumiteľnejšie, lebo tón nastaví, ako má odpoveď znieť.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš odmietnuť pozvánku na oslavu. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Odmietni pozvánku na oslavu. Nech je to milé, ale zároveň jasné."` },
          { label: "⭐", text: `„Napíš odmietnutie pozvánky. Nech je to stručné, ale srdečné a trochu formálne aj neformálne."` },
          { label: "☀", text: `„Napíš krátku správu (2–3 vety), ktorou odmietnem pozvánku. Tón: priateľský, slušný, bez výhovoriek. Na konci pridaj 1 vetu, že sa rád stretnem inokedy."` },
        ]}
        correct="☀"
        explanation="Tón je jasný a nie je protichodný. AI presne vie, ako to má znieť."
      />
    </PageShell>
  );
}
