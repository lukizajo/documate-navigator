import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-03-typy-obrazkov");

export default function LDP03() {
  return (
    <PageShell title="2️⃣ Typy obrázkov podľa použitia" prev={nav.prev} next={nav.next}>

      <p>Keď povieš "sprav mi obrázok", AI ti spraví <strong>nejaký</strong> obrázok.</p>
      <p>Ale keď chceš obrázok, ktorý je <strong>použiteľný</strong>, potrebuješ si najprv ujasniť jednu vec:</p>
      <p>👉 <strong>Čo má ten vizuál urobiť?</strong></p>
      <p>Má zaujať? Vysvetliť? Alebo zhrnúť informácie?</p>
      <p>V praxi sa ti budú opakovať tri typy obrázkov. Keď ich rozlíšiš, ušetríš si veľa pokusov — a hlavne budeš vedieť, čo od obrázka čakať.</p>

      <h3>🧩 3 typy obrázkov, ktoré sa najviac oplatia</h3>

      <p>👉 <strong>Ilustračný obrázok (atmosféra / "cover")</strong></p>
      <p>Použi, keď chceš navodiť pocit alebo pritiahnuť pozornosť.</p>
      <ul>
        <li>Hodí sa na: titulky epizód, úvodné slidy, hero sekcie na webe, vizuály na sociálne siete.</li>
        <li>Typická chyba: "pekný wallpaper bez pointy" (krásne, ale nič nekomunikuje).</li>
      </ul>

      <p>👉 <strong>Vysvetľujúci obrázok (metafora / princíp)</strong></p>
      <p>Použi, keď chceš, aby človek pochopil myšlienku "na prvý pohľad".</p>
      <ul>
        <li>Hodí sa na: vysvetlenie pojmu, jednoduchý proces, porovnanie dvoch vecí.</li>
        <li>Typická chyba: príliš veľa prvkov naraz → výsledok je chaos.</li>
      </ul>

      <p>👉 <strong>Infografický obrázok (štruktúra / kroky)</strong></p>
      <p>Použi, keď chceš zobraziť informácie prehľadne (kroky, bloky, poradie, porovnanie).</p>
      <ul>
        <li>Hodí sa na: postupy, checklisty, rámce, "mapy" tém.</li>
        <li>Typická chyba: text v obrázku je nečitateľný alebo pokazený (to vyriešime v samostatnej lekcii).</li>
      </ul>

      <h3>🔍 Ako si vybrať správny typ</h3>
      <p>Keď nevieš, čo zvoliť, pomôže táto otázka:</p>
      <ul>
        <li>Chcem, aby človek <strong>cítil</strong> / zastavil sa? → <strong>ilustračný</strong></li>
        <li>Chcem, aby človek <strong>pochopil</strong> princíp? → <strong>vysvetľujúci</strong></li>
        <li>Chcem, aby človek <strong>získal prehľad</strong> (kroky, body)? → <strong>infografický</strong></li>
      </ul>

      <h3>🧠 Čo sa zmení v promte podľa typu</h3>
      <p>Nemusíš písať "dokonalý prompt", stačí myslieť na rozdiely:</p>
      <ul>
        <li>Pri <strong>ilustračnom</strong> je najdôležitejšia atmosféra, štýl a kompozícia.</li>
        <li>Pri <strong>vysvetľujúcom</strong> je najdôležitejšia jedna jasná myšlienka a jednoduché prvky.</li>
        <li>Pri <strong>infografickom</strong> je najdôležitejšia štruktúra (bloky, priestor, poradie) a čitateľnosť.</li>
      </ul>

      <h3>🧰 Banka typov obrázkov a scén</h3>
      <p>Keď chceš generovať obrázok, najprv si vyber {"\u201Erodinu\u201C"} obrázka. Až potom rieš štýl a detaily.</p>
      <p>V praxi sa ti bude opakovať pár typov stále dokola – tu máš prehľad, aby si sa mal od čoho odraziť. 👇</p>

      <p><strong>📸 Fotografické typy (realistické použitie)</strong></p>
      <p>Tieto typy fungujú super, keď chceš {"\u201Ereálny dojem\u201C"}, produkt, priestor alebo situáciu.</p>
      <p><strong>👤 Portrét / headshot</strong> – profilovka, cover, "človek v situácii"</p>
      <ul><li>tipy do promptu: <em>natural light, 85mm lens, shallow depth of field, bokeh</em></li></ul>
      <p><strong>📦 Produktová fotografia</strong> – e-shop, slide, promo vizuál</p>
      <ul><li>tipy: <em>studio lighting, clean background, product shot</em></li></ul>
      <p><strong>🏠 Interiér / architektúra</strong> – miestnosti, kancelárie, "scéna"</p>
      <ul><li>tipy: <em>minimalist interior / industrial loft / cozy room</em></li></ul>
      <p><strong>🏞️ Krajina / panoráma</strong> – atmosféra, pozadie, "hero" na web</p>
      <ul><li>tipy: <em>wide shot, panoramic, dramatic sky</em></li></ul>
      <p><strong>🔎 Makro / detail</strong> – textúry, materiály, detaily predmetov</p>
      <ul><li>tipy: <em>macro shot, texture, close-up</em></li></ul>
      <p>👉 <strong>Mini pravidlo:</strong> pri foto typoch pomáhajú "fotografické pojmy" (objektív, svetlo, DOF), lebo modely na ne dobre reagujú.</p>

      <p><strong>🎨 Ilustračné typy (edukácia, metafory, konzistentný štýl)</strong></p>
      <p>Super do kurzu, prezentácie a vysvetľovania (ľahšie udržíš sériu).</p>
      <ul>
        <li><strong>Digitálna maľba</strong> – metafory, príbehové scény, "concept" feeling</li>
        <li><strong>Vektor / flat design</strong> – čisté vysvetľujúce vizuály, jednoduchý štýl</li>
        <li><strong>Pixel art</strong> – retro, hravosť, gamifikácia</li>
        <li><strong>3D render / CGI</strong> – moderný tech look, produkty, čisté scény</li>
        <li><strong>Concept art</strong> – filmový "wow" (pozor, aby to nebolo zbytočne prehnané)</li>
        <li><strong>Abstrakt / surreal</strong> – nálada, myšlienka, kreatívne vizualizácie</li>
      </ul>

      <p><strong>🧠 Edu typy</strong></p>
      <p>Toto sú typy, ktoré reálne používaš ako lektor/autor kurzu:</p>
      <ul>
        <li><strong>Cover (atmosféra)</strong> – 1 hlavný prvok + priestor pre nadpis (bez textu v AI)</li>
        <li><strong>Vysvetľujúci obrázok (princíp)</strong> – max 3–4 prvky, pointa na 1 pohľad</li>
        <li><strong>Infografický layout (bez textu)</strong> – boxy + šípky, text ide mimo obrázka</li>
        <li><strong>Porovnanie A vs B</strong> – dve polovice / dve karty (napr. "slabý prompt vs silný prompt")</li>
        <li><strong>Pred/Po</strong> – verzia v1 vs v2 (iterácie)</li>
        <li><strong>Mini-séria</strong> – cover + princíp + layout (balík, ktorý drží spolu)</li>
      </ul>

      <h3>✅ Rýchly výber: {"\u201Ečo má obrázok urobiť?\u201C"}</h3>
      <p>Aby si sa nestratil:</p>
      <ul>
        <li><strong>Chceš zaujať?</strong> → cover / atmosféra</li>
        <li><strong>Chceš vysvetliť?</strong> → princíp / A vs B</li>
        <li><strong>Chceš štruktúru?</strong> → layout (boxy/šípky)</li>
        <li><strong>Chceš "značkovosť"?</strong> → séria s rovnakým štýlom</li>
      </ul>

      <MiniTask title="Jeden koncept, tri typy vizuálu">
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber si <strong>jednu tému</strong>, ktorú poznajú všetci (aby sme neriešili odborný obsah). Odporúčam jednu z týchto:</p>
        <ul>
          <li>"AI je ako pomocník v kuchyni"</li>
          <li>"Prompt = zadanie pre šéfkuchára"</li>
          <li>"Model je ako automat na predikcie"</li>
        </ul>
        <p>Tvoj cieľ: vygeneruj <strong>3 obrázky</strong> — každý iným typom. Nemusí to byť dokonalé. Ide o porovnanie.</p>

        <p><strong>🖼️ Ilustračný obrázok</strong></p>
        <p><strong>Prompt (príklad):</strong></p>
        <p>{"\u201EVytvor ilustračný cover obrázok na tému: "}<em>AI ako pomocník v kuchyni</em>. Štýl: moderná, čistá ilustrácia, príjemné svetlo, jednoduché tvary, bez textu. Kompozícia: nechaj voľný priestor vľavo pre nadpis. Pomer strán: 16:9.{"\u201C"}</p>
        <p><strong>Ulož ako:</strong> L2_cover_v1</p>

        <p><strong>🧠 Vysvetľujúci obrázok</strong></p>
        <p><strong>Prompt (príklad):</strong></p>
        <p>{"\u201EVytvor vysvetľujúci obrázok, ktorý na prvý pohľad ukáže myšlienku: "}<em>AI ako pomocník v kuchyni</em>. Zobraz jednoduchú metaforu (napr. človek + AI asistent + výsledné jedlo), max 3–4 prvky, bez textu. Štýl: rovnaký ako predtým. Pomer strán: 16:9.{"\u201C"}</p>
        <p><strong>Ulož ako:</strong> L2_explain_v1</p>

        <p><strong>🧩 Infografický layout</strong></p>
        <p><strong>Prompt (príklad):</strong></p>
        <p>{"\u201EVytvor infografický layout bez textu na tému: "}<em>AI ako pomocník v kuchyni</em>. Chcem 3 prázdne bloky/boxy (vstup → spracovanie → výstup), jasné oddelenie, čisté pozadie, bez písmen a bez čísiel. Štýl: rovnaký ako predtým. Pomer strán: 16:9.{"\u201C"}</p>
        <p><strong>Ulož ako:</strong> L2_layout_v1</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je na <strong>ilustračnom coveri</strong> jasné "o čom to je" do 2 sekúnd?</p>
        <p>Je <strong>vysvetľujúci obrázok</strong> zrozumiteľný aj bez textu?</p>
        <p>Je <strong>infografický layout</strong> použiteľný ako podklad pre slide (má priestor a štruktúru)?</p>
        <p>Pôsobí niektorý výstup ako "pekne, ale nič nekomunikuje"?</p>
        <p>Je medzi tvojimi tromi výstupmi vidieť, že <strong>typ obrázka mení výsledok viac než samotná téma</strong>?</p>
        <p>Pomohlo ti spraviť 3 typy obrázku, rýchlo zistiť, <strong>ktorý smer je pre tvoj cieľ najlepší</strong>?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Ilustračný obrázok je super na "wow" a atmosféru, ale často nepovie princíp.</p>
        <p>Vysvetľujúci obrázok je najlepší na pochopenie myšlienky.</p>
        <p>Infografika je top na štruktúru, ale text sa oplatí riešiť zvlášť (preto layout bez textu).</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktorý z tvojich troch výstupov je najlepší, keď chceš, aby človek pochopil myšlienku "AI pomáha, ale nerozhoduje" na prvý pohľad?`}
        options={[
          { label: "🌕", text: "Ilustračný cover – atmosféra, pekný vizuál, ale bez jasnej myšlienky." },
          { label: "⭐", text: "Vysvetľujúci obrázok – jednoduchá metafora/princíp s pár prvkami." },
          { label: "☀️", text: "Infografický layout – štruktúra krokov, ale bez textu nemusí byť jasné, čo znamenajú bloky." },
        ]}
        correct="⭐"
        explanation="najlepšie prenesie princíp \u201Ena prvý pohľad\u201C bez potreby textu a bez rizika, že sa čitateľ stratí."
      />
    </PageShell>
  );
}
