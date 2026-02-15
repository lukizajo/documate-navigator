import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-07-sparring");

export default function LAP07() {
  return (
    <PageShell title="6️⃣ AI ako sparring partner" prev={nav.prev} next={nav.next}>
      <p>Najlepšie využitie AI často nie je „daj mi odpoveď", ale „pomôž mi odhaliť slabé miesta".</p>
      <p>🥊 Sparring partner je niekto, kto s tebou trénuje – nie preto, aby ťa pochválil, ale aby ti ukázal, kde máš dieru v obrane.</p>
      <p>🕵️ Keď použiješ AI ako sparring partnera, vypýtaš si:</p>
      <ul>
        <li>čo je na mojom nápade slabé,</li>
        <li>čo som prehliadol,</li>
        <li>aké predpoklady robím,</li>
        <li>čo by som mal overiť, kým sa rozhodnem.</li>
      </ul>

      <hr />

      <h3>🧩 Ako na to (jednoducho)</h3>
      <p>✅ Namiesto: „Je to dobrý nápad?"</p>
      <p>Použi: „Správaj sa ako kritik. Nájd 5 slabých miest a 3 veci, ktoré musím overiť."</p>
      <p>✅ Namiesto: „Napíš mi plán."</p>
      <p>Použi: „Navrhni plán a potom ho sám skritizuj: kde sa rozpadne a ako to opraviť."</p>

      <hr />

      <PromptBlock>„Skús ma presvedčiť, že to nie je dobrý nápad. Čo by mi povedal skeptik?"</PromptBlock>
    </PageShell>
  );
}
