import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-07-vizual");

export default function LEP07() {
  return (
    <PageShell title="6️⃣ Vizuálna stratégia a Style DNA" prev={nav.prev} next={nav.next}>
      <p>Keď má prezentácia dobrý obsah, ale slabý vizuál, ľudia si odnesú dve veci: „bolo toho veľa" a „nepamätám si nič".</p>
      <p>Cieľ vizuálu nie je byť pekný. Cieľ vizuálu je <strong>urobiť pointu ľahšou na pochopenie</strong>.</p>
      <p>V tejto lekcii si nastavíš jednoduché pravidlá, aby deck pôsobil <strong>konzistentne</strong> a aby si vedel rýchlo vybrať, kedy použiť graf, diagram, obrázok alebo nič.</p>

      <h2>🧠 Vizuál nie je dekorácia</h2>
      <p>Vizuál má robiť aspoň jednu z týchto vecí:</p>
      <ul>
        <li>zjednodušiť zložité</li>
        <li>ukázať porovnanie</li>
        <li>ukázať proces</li>
        <li>zvýrazniť jednu pointu</li>
      </ul>
      <p>Ak vizuál nerobí nič z toho, je to najčastejšie len rušenie.</p>

      <h2>✅ Pravidlo jedného vizuálneho sveta</h2>
      <p>Jedna prezentácia má vyzerať, akoby ju robil jeden človek v jeden deň. Vyber si jeden „vizuálny svet" a drž ho:</p>
      <ul>
        <li>buď jednoduché diagramy a ikonky</li>
        <li>alebo fotografie</li>
        <li>alebo ilustrácie</li>
        <li>alebo dátové grafy</li>
      </ul>
      <p>Miešanie štýlov je najrýchlejší spôsob, ako získať deck, ktorý pôsobí ako zlepenec.</p>

      <h2>🧭 Kedy použiť čo</h2>
      <p>Použi tieto jednoduché spúšťače:</p>
      <ul>
        <li><strong>Graf</strong> – Keď máš čísla a chceš ukázať trend alebo rozdiel.</li>
        <li><strong>Diagram</strong> – Keď vysvetľuješ proces, tok, kroky alebo systém.</li>
        <li><strong>Porovnanie A vs B</strong> – Keď chceš, aby publikum okamžite videlo rozdiel.</li>
        <li><strong>Obrázok</strong> – Keď chceš emóciu alebo rýchly kontext, ale neodovzdávaš fakty.</li>
        <li><strong>Nič</strong> – Keď má pointa silný headline a nepotrebuje podpierku.</li>
      </ul>

      <h2>🧬 Style DNA</h2>
      <p>Style DNA je krátky „prepis pravidiel", aby AI aj ty robili vizuály konzistentne. Obsahuje:</p>
      <ul>
        <li>typ vizuálov, ktoré používaš</li>
        <li>čo je zakázané</li>
        <li>tón dizajnu</li>
        <li>2–3 pravidlá kompozície</li>
      </ul>
      <p>Keď máš Style DNA, vieš AI povedať: „navrhuj mi vizuály takto" a výsledky prestanú skákať.</p>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš L4_slide_map_v1 a chceš, aby vizuály podporovali pointy bez chaosu.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Vyber si jeden vizuálny svet pre celý deck.</li>
          <li>Vytvor Style DNA v tomto formáte:
            <ul>
              <li>Typ vizuálov</li>
              <li>Tón dizajnu</li>
              <li>3 pravidlá</li>
              <li>2 zákazy</li>
            </ul>
          </li>
          <li>Aplikuj to na 4 slidy z mapy: pri každom slide dopíš návrh vizuálu jednou vetou, aby to bolo jasné.</li>
        </ol>
        <p>Ulož si výsledok ako <strong>L6_style_dna_v1</strong>.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je z môjho Style DNA jasné, aký typ vizuálov používam?</li>
          <li>Mám tam aspoň dva jasné zákazy, ktoré zabránia chaosu?</li>
          <li>Viem pri každom z tých 4 slidov povedať, prečo je navrhnutý vizuál užitočný?</li>
          <li>Držím jeden vizuálny svet, alebo mi to uteká do mixu štýlov?</li>
          <li>Je vizuál podpora pointy, nie dekorácia?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď si nastavíš Style DNA, prestaneš riešiť vizuál „od nuly" pri každom slide. Vizuály sa začnú správať konzistentne a deck zrazu pôsobí profesionálnejšie aj bez extra efektov.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktoré rozhodnutie najviac podporí konzistentný vizuál prezentácie?"
        options={[
          { label: "🌕", text: "Vyberiem jeden štýl vizuálov a 2 zákazy, a držím ich v celom decku." },
          { label: "⭐", text: "Každý slide spravím inak, aby to nebolo nudné." },
          { label: "☀️", text: "Do každého slidu dám aspoň jeden obrázok, nech je to živšie." },
        ]}
        correct="🌕"
        explanation="Konzistentný vizuálny svet zvyšuje čitateľnosť a dôveryhodnosť."
      />
    </PageShell>
  );
}
