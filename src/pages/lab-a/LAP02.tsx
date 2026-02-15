import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-02-zrkadlo");

export default function LAP02() {
  return (
    <PageShell title="1️⃣ AI nie je mozog, je to zrkadlo" prev={nav.prev} next={nav.next}>
      <p>Keď sa s AI rozprávaš, môže to pôsobiť, akoby „rozumela". Vie pekne skladať vety, vie byť sebavedomá, vie znieť múdro. Lenže toto je dôležité: <strong>AI nemyslí ako človek.</strong> Neplánuje si „čo je správne", ale skladá najpravdepodobnejšiu odpoveď podľa toho, čo si vypýtaš.</p>
      <p>🪞 Preto hovorím, že AI je skôr <strong>zrkadlo</strong> než mozog:</p>
      <ul>
        <li>keď jej dáš <strong>nejasnú otázku</strong>, vráti nejasnú odpoveď,</li>
        <li>keď jej dáš <strong>tvoj predpoklad</strong>, často ho len potvrdí,</li>
        <li>keď jej dáš <strong>dobrý rámec</strong>, vie byť prekvapivo užitočná.</li>
      </ul>

      <hr />

      <h3>🧩 Mikropríklad</h3>
      <p><strong>💬 Slabá otázka:</strong></p>
      <p>„Poradíš mi, čo mám spraviť?"</p>
      <p>AI spraví to, čo vie najlepšie – <strong>dá odpoveď</strong>. Lenže ona nevie, čo je pre teba „správne", ak nepozná cieľ, obmedzenia a riziká.</p>
      <p><strong>✅ Lepšia otázka:</strong></p>
      <p>„Pomôž mi premýšľať. Najprv sa ma opýtaj 5 otázok, aby si pochopil cieľ, riziká a možnosti. Až potom navrhni 3 varianty riešenia."</p>
      <p>Zrazu sa zmení dynamika: AI nehrá na „autoritu", ale na <strong>partnera v myslení</strong>.</p>

      <hr />

      <h3>🎯 Čo si z tejto lekcie odnes</h3>
      <p>⚠️ <strong>Presvedčivé ≠ pravdivé.</strong> AI vie znieť presvedčivo aj vtedy, keď si „domýšľa". Preto ju neber ako posledné slovo, ale ako návrh, ktorý si overíš (najmä pri dôležitých veciach).</p>
      <p>🧩 <strong>Kvalita vstupu sa vracia späť.</strong> Ak je tvoja požiadavka bez cieľa, bez kontextu a bez kritérií úspechu, tak si pýtaš skôr „pekný text" než použiteľný výsledok.</p>
      <p>✅ <strong>Zodpovednosť je na tvojej strane.</strong> AI môže asistovať, zhrnúť, navrhnúť možnosti. Ale rozhodnutie a dôsledky sú stále na tebe.</p>

      <hr />

      <PromptBlock>„Pomôž mi premýšľať. Skôr než odpovieš, opýtaj sa ma doplňujúce otázky."</PromptBlock>
    </PageShell>
  );
}
