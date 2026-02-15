import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-08-low-high");

export default function LAP08() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>7️⃣ Kedy AI pomáha a kedy škodí</h2>
      <p>AI je skvelá na veľa vecí, ale nie na všetko. Problém nie je v tom, že by bola „zlá". Problém je, že vie znieť presvedčivo aj tam, kde by mala radšej povedať „neviem".</p>
      <p>⚠️ Preto si potrebuješ vedieť rýchlo odpovedať na jednu otázku: <strong>Je to low-stakes alebo high-stakes?</strong></p>
      <p>Teda: čo sa stane, ak bude odpoveď čiastočne mimo?</p>

      <hr />

      <h3>🧩 Low-stakes vs High-stakes</h3>
      <p>✅ <strong>Low-stakes (AI pomáha)</strong></p>
      <ul>
        <li>brainstorming, nápady, texty, štruktúry</li>
        <li>zhrnutie, prepis, formátovanie</li>
        <li>návrhy variantov a možností</li>
        <li>pomoc pri učení a vysvetľovaní</li>
      </ul>
      <p>⚠️ <strong>High-stakes (AI môže škodiť, ak jej veríš bez kontroly)</strong></p>
      <ul>
        <li>zdravie, lieky, diagnózy</li>
        <li>právo, zmluvy, povinnosti</li>
        <li>financie, investície, veľké záväzky</li>
        <li>bezpečnosť, citlivé osobné údaje</li>
      </ul>
      <p>🧠 Pri high-stakes úlohách AI môže byť stále užitočná – ale skôr ako <strong>asistent na prípravu</strong>, nie ako rozhodca.</p>

      <hr />

      <PromptBlock>„Uveď, čo je v tvojej odpovedi predpoklad, čo je neisté a čo by som mal overiť v dôveryhodnom zdroji alebo u odborníka."</PromptBlock>
    </PageShell>
  );
}
