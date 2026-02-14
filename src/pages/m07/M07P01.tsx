import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M07P01() {
  const nav = getNavContext("m07-01-uvod");
  return (
    <PageShell title="🅾️ Úvod" {...nav}>

      <p>Doteraz sme sa v kurze venovali tomu, <strong>ako AI funguje</strong>, ako ju používať v práci a ako si overovať jej výstupy. Teraz sa presúvame do priestoru, kde sa s AI stretávaš možno ešte častejšie – <strong>do osobného života</strong>.</p>
      <p>👉 <strong>Ako môže AI zlepšiť môj každodenný život, bez toho, aby som sa na ňu stal závislý?</strong></p>
      <p>AI dnes nie je len pracovný nástroj. Pomáha ľuďom plánovať čas, učiť sa nové veci, rozvíjať kreativitu, tráviť viac kvalitného času s rodinou a dokonca si ujasňovať vlastné ciele. Zároveň však platí, že v osobnom živote sú <strong>hranice, bezpečnosť a zdravý odstup ešte dôležitejšie</strong> než v práci.</p>
      <p>V tomto module sa naučíš používať AI ako <strong>osobného asistenta a pomocníka</strong>, nie ako náhradu rodiča, učiteľa, terapeuta či zdravého rozumu.</p>

      <h3>🧭 Prehľad modulu</h3>
      <p>V tomto module sa pozrieme na:</p>
      <ul>
        <li>využitie AI v každodenných osobných úlohách,</li>
        <li>AI ako pomoc pri učení a sebarozvoji,</li>
        <li>kreatívne využitie AI vo voľnom čase,</li>
        <li>zásady bezpečného používania AI s deťmi,</li>
        <li>digitálnu rovnováhu a zdravé hranice,</li>
        <li>najčastejšie chyby v osobnom používaní AI.</li>
      </ul>

      <h3>🎯 Čo sa v tomto module naučíš</h3>
      <p>Po absolvovaní tohto modulu budeš vedieť:</p>
      <ul>
        <li>nájsť si aspoň 2–3 osobné use-casy pre AI,</li>
        <li>využiť AI na plánovanie, učenie a voľný čas,</li>
        <li>nastaviť si bezpečné hranice používania AI doma,</li>
        <li>rozpoznať situácie, kde AI pomáha a kde škodí,</li>
        <li>vytvoriť si zdravý „AI návyk" v osobnom živote.</li>
      </ul>
    </PageShell>
  );
}
