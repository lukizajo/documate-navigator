import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-05-promptovanie");

export default function LDP05() {
  return (
    <PageShell title="4️⃣ Promptovanie pre obrázky" prev={nav.prev} next={nav.next}>

      <p>Pri obrázkoch je prompt ešte citlivejší než pri texte.</p>
      <p>Keď je nejasný, AI si začne "dotvárať" veci sama. Keď je prepálený, výsledok býva chaotický alebo nepoužiteľný.</p>
      <p>Táto lekcia ti dá jednoduchý systém, aby prompt nebol "želanie", ale <strong>nástroj kontroly</strong>.</p>

      <h3>🧰 Inšpirácia: čo všetko môže byť "scéna"</h3>
      <p>Keď sa zasekneš pri tvorbe obrázka, problém často nie je promptovanie… ale to, že nevieš, aký typ scény vôbec zvoliť. Tu máš rýchle menu možností. Vyber si jednu a až potom ju zapíš do "Scéna (max 3–5 prvkov)".</p>

      <p><strong>Typy scén, ktoré fungujú najčastejšie</strong></p>
      <ul>
        <li>Jedna vec na čistom pozadí (symbol, objekt, produkt)</li>
        <li>Metafora v 3 prvkoch (vstup → spracovanie → výstup)</li>
        <li>Porovnanie (A vs B na jednej ploche)</li>
        <li>Pred/Po (chaos → poriadok, bez → s)</li>
        <li>Proces (3 kroky ako layout bez textu)</li>
        <li>Detail (close-up na jednu vec, aby bola pointa jasná)</li>
        <li>Prostredie ako nálada (kuchyňa/kancelária/lab), ale s jednoduchou scénou</li>
      </ul>

      <p><strong>Typy obrázkov podľa štýlu</strong></p>
      <ul>
        <li>Foto (realistický dojem)</li>
        <li>Vektor/flat (čisté vysvetľovanie)</li>
        <li>3D render (moderný tech look, čistota)</li>
        <li>Digitálna ilustrácia (metafory, mäkkosť)</li>
        <li>Pixel art (hravosť, retro)</li>
        <li>Abstrakt (pocit, myšlienka, nálada)</li>
      </ul>

      <h3>🔧 Rýchle páčky, ktoré vieš meniť</h3>
      <p>Tieto veci vieš v promte meniť po jednej (ideálne pri iterácii), aby si vedel, čo zafungovalo.</p>

      <p><strong>Subjekt (čo je hlavné)</strong></p>
      <ul>
        <li>Objekt (napr. robot, hrniec, puzzle, karta, stroj)</li>
        <li>Jedna postava (radšej ilustrácia než fotoreal)</li>
        <li>Metafora (šéfkuchár, automat, pracovný stôl)</li>
        <li>Abstraktný symbol (tvar, ikona, jednoduchý znak)</li>
      </ul>

      <p><strong>Prostredie (kde sa to deje)</strong></p>
      <ul>
        <li>Čisté pozadie (najpoužiteľnejšie pre slide)</li>
        <li>Kuchyňa / kancelária / laboratórium (ako metafora)</li>
        <li>Minimalistický interiér (čistota)</li>
        <li>Futuristický priestor (tech vibe)</li>
        <li>Exteriér/príroda (nálada, ale pozor na rušivosť)</li>
      </ul>

      <p><strong>Svetlo (najväčší "mood switch")</strong></p>
      <ul>
        <li>Svetlo z okna (jemné, prirodzené)</li>
        <li>Studio/softbox (čisté, produktové)</li>
        <li>Zlatá hodina (teplé, príjemné)</li>
        <li>Modrá hodina (chladné, večerné)</li>
        <li>Silný kontrast svetlo/tieň (dramatické)</li>
        <li>Jemné rozptýlené svetlo (friendly, edukatívne)</li>
      </ul>

      <p><strong>Kompozícia (aby bol obrázok použiteľný)</strong></p>
      <ul>
        <li>Priestor pre text vľavo / hore / dole</li>
        <li>Záber: close-up / medium / wide</li>
        <li>Uhol: zhora / v úrovni očí / zospodu</li>
        <li>Jedno jasné centrum pozornosti (bez "clutter")</li>
      </ul>

      <p>💡 <strong>Tip:</strong> Keď píšeš prompt, vyber si z každého podbloku len 1–2 veci. Ak dáš všetko naraz, prompt sa "prepáli". Toto menu nie je checklist, je to výber.</p>

      <h3>🧠 Ako rozmýšľať nad promptom pri obrázkoch</h3>
      <p>Pri textoch vie AI "dohádať", čo si asi myslel. Pri obrázkoch je to tvrdšie: ak nepovieš jasne <em>čo je hlavné</em>, AI to doplní podľa seba.</p>
      <p>Preto sa oplatí rozdeliť prompt na dve vrstvy:</p>
      <ul>
        <li><strong>ČO má vzniknúť</strong> (účel, scéna, kompozícia)</li>
        <li><strong>AKO to má vyzerať</strong> (štýl, svetlo, farby, médium, negatíva)</li>
      </ul>
      <p>Keď toto zmiešaš do jednej vety alebo vynecháš účel, výsledok bude často "pekne, ale mimo".</p>

      <h3>🧩 Šablóna promptu, ktorá funguje</h3>
      <p>Nemusíš písať romány. Stačí, keď prompt obsahuje tieto bloky:</p>
      <ul>
        <li><strong>Účel & použitie</strong> – Kde sa to použije (slide/IG/web) a čo má vizuál urobiť (zaujať / vysvetliť / dať prehľad).</li>
        <li><strong>Scéna (max 3–5 prvkov)</strong> – Čo presne má byť na obrázku. Pri vysvetľujúcom vizuále platí: <em>menej prvkov = viac jasnosti</em>.</li>
        <li><strong>Štýl (z mini style guide)</strong> – Farby, svetlo, médium, nálada. Toto je tvoje "lepidlo konzistencie".</li>
        <li><strong>Kompozícia & formát</strong> – Pomer strán + kde necháš priestor pre text (negatívny priestor). Toto často rozhoduje, či je obrázok použiteľný.</li>
        <li><strong>Negatíva (DON'T)</strong> – Čo tam určite nechceš (text, logá, fotoreal tváre, clutter, príliš detaily…).</li>
      </ul>
      <p>💡 <strong>Tip:</strong> skopíruj si svoj mini style guide a používaj ho ako "štýlový blok", ktorý len vkladáš do promptu.</p>

      <h3>🧠 Prečo iterácia pri obrázkoch vyhráva</h3>
      <p>Keď ešte nemáš jasný smer, detailný prompt hneď na začiatku je často pasca:</p>
      <ul>
        <li>AI dostane príliš veľa požiadaviek naraz,</li>
        <li>ty nevieš, čo je vlastne problém (štýl? kompozícia? scéna?),</li>
        <li>a celé to pôsobí nasilu poskladané.</li>
      </ul>
      <p>Iterácia je naopak rýchla a čistá:</p>
      <ul>
        <li>najprv si necháš navrhnúť 3 smery,</li>
        <li>vyberieš jeden,</li>
        <li>a až potom ho dolaďuješ.</li>
      </ul>
      <p>To je presne to, čo budeme trénovať.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Prepálený prompt hneď na začiatku</strong>: veľa požiadaviek naraz → AI nevie, čo je priorita.</li>
        <li><strong>Nejasný účel</strong>: keď nepovieš, kde sa to použije, často nedostaneš kompozíciu, ktorá sa dá použiť.</li>
        <li><strong>Zabudnutý štýl</strong>: ak nepoužiješ mini style guide, každý obrázok bude vyzerať inak.</li>
        <li><strong>Text v obrázku príliš skoro</strong>: často zníži kvalitu a čitateľnosť (text riešime neskôr).</li>
        <li><strong>Príliš veľa prvkov v scéne</strong>: pri vysvetľujúcom obrázku sa to rýchlo zmení na chaos.</li>
      </ul>

      <MiniTask title="Otestuj 2 prístupy a porovnaj výsledok">
        <p><strong>Situácia</strong></p>
        <p>Chceš vygenerovať <strong>vysvetľujúci obrázok</strong> na tému z lekcie 2:</p>
        <ul>
          <li>"AI ako pomocník v kuchyni" alebo</li>
          <li>"Prompt = zadanie pre šéfkuchára" alebo</li>
          <li>"Model je ako automat na predikcie".</li>
        </ul>
        <p>Cieľ: aby obrázok bol použiteľný (napr. na slide 16:9) a mal jasnú myšlienku.</p>

        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>❌ Prompt 1 (slabý: krátky, bez účelu a bez štýlu)</strong></p>
        <p>{"\u201EVytvor obrázok o tom, že AI je pomocník v kuchyni.\u201C"}</p>

        <p><strong>✔️ Prompt 2 (silný: podľa šablóny)</strong></p>
        <p>{"\u201EVytvor vysvetľujúci obrázok, ktorý na prvý pohľad ukáže myšlienku: "}<em>AI je pomocník v kuchyni (asistuje, ale nerozhoduje)</em>. Použitie: slide 16:9 (nechaj voľný priestor vľavo pre nadpis). Scéna: max 3–4 prvky, jednoduchá metafora, bez textu. Štýl: použi môj mini style guide: Farby: [doplníš svoje], Svetlo: [doplníš], Médium / materiál: [doplníš], Nálada: [doplníš]. Kompozícia: čisté pozadie, jasné hlavné prvky. DON'T: bez textu, bez fotoreal tvárí, bez preplneného pozadia, bez "logo-like" symbolov.{"\u201C"}</p>

        <p>Ulož ako: L4_v1A a L4_v1B</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je pri Prompte A vidieť, že bez účelu a štýlu si AI veľa vecí domýšľa?</p>
        <p>Je v Prompte B jasné, kde sa vizuál použije (slide 16:9) a že má mať priestor pre text?</p>
        <p>Pôsobí výstup z Promptu B konzistentnejšie so štýlom, ktorý si nastavil v lekcii 3?</p>
        <p>Je výstup z Promptu B zrozumiteľnejší "na prvý pohľad" (menej chaosu, jasnejšia myšlienka)?</p>
        <p>Vieš Prompt B použiť opakovane aj pre ďalšie obrázky v rovnakej sérii?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Krátky prompt bez účelu a štýlu často vedie k náhodnému výsledku, lebo AI si doplní detaily podľa seba.</p>
        <p>Keď dáš promptu štruktúru (účel, scéna, štýl, kompozícia a negatíva), získaš <strong>stabilnejší a použiteľnejší výstup</strong> — a hlavne prompt vieš opakovane použiť ako "master" pre celú sériu.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prompt je najlepší, keď chceš získať konzistentný a použiteľný obrázok bez zbytočného chaosu?"
        options={[
          { label: "🌕", text: "\u201EVymenujem všetky detaily naraz, aby to bolo hotové na prvýkrát.\u201C" },
          { label: "⭐", text: "\u201ENapíšem len tému a budem generovať dookola, kým to náhodou trafí.\u201C" },
          { label: "☀️", text: "\u201ENajprv si nechám navrhnúť 3 koncepty, vyberiem jeden, potom ho doladím podľa mini style guide a spravím malé iterácie.\u201C" },
        ]}
        correct="☀️"
        explanation="je to riadená iterácia + používaš štýlové pravidlá, takže výsledky sú stabilnejšie."
      />
    </PageShell>
  );
}
