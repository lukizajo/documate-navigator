import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page08() {
  const nav = getNavContext("08-ako-vznika-model");
  return (
    <PageShell
      title="8️⃣ Ako vzniká AI model: dáta, tréning, parametre"
      tldr={[]}
      {...nav}
    >
      <p><em>Aby si vedel AI používať rozumne, je dobré aspoň rámcovo chápať, ako vzniká. Nie technicky, ale logicky.</em></p>

      <h2>Čo sa skrýva za chatbotom?</h2>
      <p>
        Keď používaš AI nástroj, vidíš len výsledok – odpoveď, text alebo obrázok. V pozadí je však <strong>dlhý a náročný proces</strong>, ktorý premieňa surové dáta na model schopný reagovať.
      </p>
      <p>👉 Táto sekcia vysvetľuje <strong>základný reťazec vzniku AI modelu</strong> – bez matematiky a technických detailov, ale tak, aby bolo jasné, prečo má AI svoje silné stránky aj limity.</p>

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
      <p>👉 Dáta určujú, <strong>čo sa model môže naučiť</strong>.</p>

      <h2>2. Tréning: učenie sa vzorov 🔁</h2>
      <p>Počas tréningu sa model učí jednoduchý princíp:</p>
      <p><strong>Uhádnuť, čo príde ďalej</strong></p>
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

      <h2>3. Doladenie: od textu k chatbotu 🛠️</h2>
      <p>Základný model ešte nie je „asistent".</p>
      <p>Preto nasleduje doladenie:</p>
      <ul>
        <li>učenie na otázkach a odpovediach</li>
        <li>spätná väzba od ľudí</li>
        <li>nastavenie bezpečnosti a správania</li>
      </ul>
      <p>Vďaka tomu:</p>
      <ul>
        <li>model odpovedá zrozumiteľne</li>
        <li>vie, kedy odpoveď odmietnuť</li>
        <li>správa sa konzistentnejšie</li>
      </ul>

      <h2>4. Parametre: prečo je model „veľký"? ⚙️</h2>
      <p>Parametre sú vnútorné nastavenia modelu.</p>
      <ul>
        <li>malé modely → rýchle, lacné, menej presné</li>
        <li>veľké modely → výkonnejšie, ale drahé</li>
      </ul>
      <p>Počet parametrov ovplyvňuje:</p>
      <ul>
        <li>kvalitu odpovedí</li>
        <li>spotrebu energie</li>
        <li>cenu používania</li>
      </ul>
      <p>👉 Väčší model neznamená automaticky lepší pre každú úlohu.</p>

      <h2>🎯 Čo z tohto procesu vyplýva?</h2>
      <ul>
        <li>AI je výsledok štatistiky, nie porozumenia</li>
        <li>chyby sú prirodzenou súčasťou modelu</li>
        <li>kvalita výstupu závisí od dát aj zadania</li>
      </ul>
      <p>👉 Keď rozumieš tomu, ako model vzniká, <strong>ľahšie mu odpustíš chyby a lepšie ho využiješ</strong>.</p>

      <MiniTest
        question="Ktoré tvrdenie o tom, ako AI funguje, je najpresnejšie? Vyber, ktorá možnosť (🌕 /⭐ /☀️) je najlepšia."
        options={[
          { label: "🌕", text: '„AI sa učí zo vzorov v dátach a počas tréningu sa učí predpovedať, čo príde ďalej (token). Nepracuje s pravdou, ale s pravdepodobnosťou, preto môže aj presvedčivo \'vymyslieť\' nesprávnu odpoveď. A ak sú v dátach chyby alebo skreslenia, model ich môže prebrať."' },
          { label: "⭐", text: '„AI sa učí z dát, takže keď má veľa dát, automaticky vždy dá správnu odpoveď. Chyby sú skôr výnimka."' },
          { label: "☀️", text: '„AI rozumie svetu podobne ako človek, len je rýchlejšia. Keď odpovie sebavedomo, zvyčajne to znamená, že je to pravda."' },
        ]}
        correct="🌕"
        explanation="Model neoveruje fakty ako človek, len skladá najpravdepodobnejší text podľa toho, čo sa naučil z dát. Preto je dôležité overovanie a správne nastavené očakávania."
      />
    </PageShell>
  );
}
