import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page08() {
  const nav = getNavContext("08-ako-vznika-model");
  return (
    <PageShell
      title="8️⃣ Ako vzniká AI model: dáta, tréning, parametre"
      tldr={[
        "AI sa učí z obrovského množstva dát – kvalita dát je dôležitejšia než množstvo",
        "Tréning = učenie predpovedať ďalší token (slovo) miliardykrát",
        "Model nepracuje s pravdou, ale s pravdepodobnosťou",
        'Doladenie mení surový model na „asistenta" – so spätnou väzbou od ľudí',
        "Väčší model neznamená automaticky lepší pre každú úlohu",
      ]}
      {...nav}
    >
      <h2>🔍 Čo sa skrýva za chatbotom?</h2>
      <p>
        Keď používaš AI nástroj, vidíš len výsledok – odpoveď, text alebo obrázok. V pozadí
        je však dlhý a náročný proces, ktorý premieňa surové dáta na model schopný reagovať.
      </p>

      <h2>1. Dáta: základ všetkého 📚</h2>
      <p>AI sa neučí zo skúseností ako človek, ale z obrovského množstva dát.</p>
      <p>Typické zdroje dát:</p>
      <ul>
        <li>verejný web</li>
        <li>knihy a články</li>
        <li>kód a technická dokumentácia</li>
        <li>otázky a odpovede</li>
      </ul>
      <p>Dôležité fakty:</p>
      <ul>
        <li>kvalita dát je dôležitejšia než ich množstvo</li>
        <li>chyby, skreslenia a predsudky v dátach sa prenášajú do modelu</li>
        <li>AI nevie rozlíšiť pravdu od nepravdy – len vzory</li>
      </ul>
      <p>👉 Dáta určujú, čo sa model môže naučiť.</p>

      <h2>2. Tréning: učenie sa vzorov 🔁</h2>
      <p>Počas tréningu sa model učí jednoduchý princíp: uhádnuť, čo príde ďalej.</p>
      <ul>
        <li>učí sa predpovedať ďalšie slovo (token)</li>
        <li>robí to miliardy krát</li>
        <li>postupne si vytvára štatistický obraz jazyka</li>
      </ul>
      <p>Výsledok:</p>
      <ul>
        <li>model vie plynulo generovať text</li>
        <li>nerozumie významu ako človek</li>
        <li>pracuje s pravdepodobnosťou, nie s istotou</li>
      </ul>

      <h2>3. Doladenie: od textu k chatbotu 🎛️</h2>
      <p>Základný model ešte nie je „asistent". Preto nasleduje doladenie:</p>
      <ul>
        <li>učenie na otázkach a odpovediach</li>
        <li>spätná väzba od ľudí</li>
        <li>nastavenie bezpečnosti a správania</li>
      </ul>
      <p>Vďaka tomu model odpovedá zrozumiteľne, vie kedy odpoveď odmietnuť a správa sa konzistentnejšie.</p>

      <h2>4. Parametre: prečo je model „veľký"? 📐</h2>
      <p>Parametre sú vnútorné nastavenia modelu.</p>
      <ul>
        <li>malé modely → rýchle, lacné, menej presné</li>
        <li>veľké modely → výkonnejšie, ale drahé</li>
      </ul>
      <p>Počet parametrov ovplyvňuje kvalitu odpovedí, spotrebu energie aj cenu používania.</p>
      <p>👉 Väčší model neznamená automaticky lepší pre každú úlohu.</p>

      <h2>🎯 Čo z tohto procesu vyplýva?</h2>
      <ul>
        <li>AI je výsledok štatistiky, nie porozumenia</li>
        <li>chyby sú prirodzenou súčasťou modelu</li>
        <li>kvalita výstupu závisí od dát aj zadania</li>
      </ul>
      <p>👉 Keď rozumieš tomu, ako model vzniká, ľahšie mu odpustíš chyby a lepšie ho využiješ.</p>

      <MiniTest
        question="Ktoré tvrdenie o tom, ako AI funguje, je najpresnejšie?"
        options={[
          { label: "🌕", text: '„AI sa učí zo vzorov v dátach a predpovedá, čo príde ďalej. Nepracuje s pravdou, ale s pravdepodobnosťou, preto môže aj presvedčivo \'vymyslieť\' nesprávnu odpoveď."' },
          { label: "⭐", text: '„AI sa učí z dát, takže keď má veľa dát, automaticky vždy dá správnu odpoveď."' },
          { label: "🔵", text: '„AI rozumie svetu podobne ako človek, len je rýchlejšia."' },
        ]}
        correct="🌕"
        explanation="Model neoveruje fakty ako človek, len skladá najpravdepodobnejší text podľa toho, čo sa naučil z dát."
      />
    </PageShell>
  );
}
