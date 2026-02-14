import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P05() {
  const nav = getNavContext("m03-05-rola");
  return (
    <PageShell title="4️⃣ ROLA – perspektíva AI" tldr={[
      `Rola určuje, z akých skúseností AI vychádza`,
      `Rola + publikum je silnejšie než samotná rola`,
      `„Si expert" bez publika = odpoveď pre expertov`,
    ]} {...nav}>


      <p>Keď AI povieš len „vysvetli to", odpoveď bude často všeobecná. Rola je spôsob, ako jej povedať: z akých skúseností má vychádzať, čo má uprednostniť a akým jazykom má hovoriť.</p>

      <h3>Čo robí rola</h3>
      <ul>
        <li>čo považuje za dôležité (benefit vs. riziká vs. postup)</li>
        <li>ako hlboko ide do detailu</li>
        <li>aký slovník použije (laicky vs. odborne)</li>
      </ul>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Vysvetli, čo je umelá inteligencia."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Si učiteľ, ktorý vysvetľuje úplným začiatočníkom. Vysvetli, čo je umelá inteligencia tak, aby to pochopil aj niekto, kto nie je technický typ. Použi jednoduché slová a jednu prirovnanie. Max 120–160 slov."
      </div>

      <h3>💡 Použiteľné roly</h3>
      <ul>
        <li>„Si učiteľ pre začiatočníkov, vysvetľuješ jednoducho"</li>
        <li>„Si kamarát, ktorý poradí ľudsky a bez mudrovania."</li>
        <li>„Si redaktor, ktorý skracuje a upratuje text."</li>
      </ul>
      <p>👉 <strong>Tip:</strong> rola + publikum je silnejšie než samotná rola.</p>
      <p>☠ <strong>Typická chyba:</strong> „Si expert…" bez publika = odpoveď pre expertov.</p>

      <MiniTask title="Otestuj 2 prompty (ROLA)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Si miestny sprievodca v Prahe, ktorý pozná mesto a vie poskladať jednoduchý plán pre človeka, čo je v Prahe len na jeden deň. Naplánuj mi jednodňový výlet v Prahe."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 často dá lepší, realistickejší plán, lebo rola nastaví perspektívu: AI sa správa ako miestny sprievodca.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš jednoduché vysvetlenie zdravotnej témy – vysoký krvný tlak. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Vysvetli mi, čo znamená vysoký krvný tlak a čo s tým mám robiť."` },
          { label: "⭐", text: `„Si lekár. Vysvetli vysoký krvný tlak a daj mi odporúčania. Nech je to odborné, ale aby som tomu rozumel."` },
          { label: "☀", text: `„Si všeobecný lekár a vysvetľuješ to pacientovi, ktorý nie je odborník. Vysvetli, čo je vysoký krvný tlak, prečo je dôležité riešiť a čo sú 3 najčastejšie prvé kroky. Píš jednoducho, bez strašenia, max 120–160 slov."` },
        ]}
        correct="☀"
        explanation="Rola + publikum + tón. AI vie, komu hovorí, ako má znieť a čo má byť výsledok."
      />
    </PageShell>
  );
}
