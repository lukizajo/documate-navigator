import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-06-hlas-titulky");

export default function LGP06() {
  return (
    <PageShell title="5️⃣ Hlas, hudba a titulky" prev={nav.prev} next={nav.next}>
      <p>Keď máš scenár a zábery, ďalšia vec, ktorá rozhoduje o kvalite, je <strong>zvuk a čitateľnosť</strong>.</p>
      <p>Krátke video ľudia často pozerajú <strong>bez zvuku</strong> — a zároveň, ak zvuk majú, tak hlas musí byť <strong>zrozumiteľný</strong> a nesmie ho „zožrať" hudba.</p>
      <p>Preto v tejto lekcii nastavíme tri veci:</p>
      <ul>
        <li>🎙️ <strong>hlas</strong> (čo sa hovorí a ako to znie),</li>
        <li>🎵 <strong>hudbu</strong> (len ako podpora, nie konkurencia),</li>
        <li>💬 <strong>titulky</strong> (aby video fungovalo aj potichu).</li>
      </ul>

      <h2>🎙️ Hlas (voiceover): aby znel prirodzene</h2>
      <p>AI hlas vie znieť super, ale iba vtedy, keď má dobrý vstup.</p>
      <p><strong>✅ Funguje:</strong></p>
      <ul>
        <li>krátke vety (ľahšie sa čítajú aj titulkujú),</li>
        <li>bežné slová, konkrétne slovesá,</li>
        <li>prirodzený rytmus (striedaj krátke a dlhšie vety),</li>
        <li>1 veta = 1 myšlienka.</li>
      </ul>
      <p><strong>⚠️ Pozor:</strong></p>
      <ul>
        <li>preplnené súvetia → AI znie „roboticky",</li>
        <li>príliš rýchle tempo → titulky nestíhajú,</li>
        <li>cudzie mená / skratky → výslovnosť býva mimo (treba prepísať foneticky alebo upraviť).</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Prečítaj scenár nahlas. Ak to neznie prirodzene tebe, nebude to prirodzené ani v AI hlase.</p>

      <h2>🎵 Hudba: podpora, nie hlavný hrdina</h2>
      <p>Hudba má robiť jednu vec: <strong>podporiť energiu</strong> videa.</p>
      <p><strong>✅ Funguje:</strong></p>
      <ul>
        <li>tichá hudba ako „podklad",</li>
        <li>jednoduchý rytmus (neprebíja hlas),</li>
        <li>konzistentná nálada (neprepína každé 3 sekundy).</li>
      </ul>
      <p><strong>⚠️ Pozor:</strong></p>
      <ul>
        <li>hudba prehluší hlas (najčastejšia chyba),</li>
        <li>dramatická hudba pri jednoduchom tipe pôsobí lacno,</li>
        <li>licencie (najmä pri komerčnom použití).</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak musíš zvyšovať hlasitosť videa, problém je často v hudbe, nie v hlase.</p>

      <h2>💬 Titulky: aby video fungovalo aj bez zvuku</h2>
      <p>Titulky nie sú „doplnok". Pre krátke video sú často <strong>hlavná vrstva</strong>.</p>
      <p><strong>✅ Funguje:</strong></p>
      <ul>
        <li>max <strong>2 riadky</strong> naraz,</li>
        <li>krátke segmenty (neprepisuj celé odseky),</li>
        <li>titulok musí byť čitateľný do 1–2 sekúnd,</li>
        <li>nechaj miesto pre „safe area" (UI prvky Reels/Shorts).</li>
      </ul>
      <p><strong>⚠️ Pozor:</strong></p>
      <ul>
        <li>titulky, ktoré bežia rýchlejšie než reč,</li>
        <li>príliš malé písmo / slabý kontrast,</li>
        <li>titulky cez tvár alebo kľúčový objekt.</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Radšej menej slov, ale čitateľne. Divák si má odniesť pointu, nie prečítať román. 😄</p>

      <h2>✅ MUST / SHOULD / NICE</h2>
      <p>Aby video fungovalo, nemusíš mať dokonalý zvukový dizajn. Musíš mať <strong>zrozumiteľnosť</strong>.</p>
      <ul>
        <li><strong>MUST HAVE:</strong><br />🎙️ <strong>hlas je zrozumiteľný</strong> (tempo, výslovnosť, bez preplácaných viet)<br />💬 <strong>titulky sú čitateľné</strong> (krátke, v safe area, s dobrým kontrastom)</li>
        <li><strong>SHOULD HAVE:</strong><br />🔊 <strong>rovnaká hlasitosť</strong> v celom videu (žiadne skoky medzi scénami)<br />🧱 <strong>titulky na rovnakom mieste</strong> (divák sa nemusí adaptovať)</li>
        <li><strong>NICE TO HAVE:</strong><br />🎵 <strong>hudba</strong> a „vibe" (až keď hlas + titulky fungujú)<br />✨ jemné zvukové efekty (ak pomáhajú, nie ak rušia)</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak sa musíš rozhodovať medzi „hudba pekná" a „hlas jasný", vždy vyhrá <strong>hlas</strong>.</p>

      <h2>🔊 3 pravidlá audio mixu (jednoduché, ale účinné)</h2>
      <ul>
        <li>🎙️ Hlas je vždy <strong>hlavný prvok</strong> (vždy musí byť jasný).</li>
        <li>🎵 Hudba je <strong>podklad</strong>, nie konkurent (má podporovať, nie prehlušiť).</li>
        <li>🔁 Hlasitosť je <strong>konzistentná</strong> (divák nesmie mať chuť stále pridávať/uberať).</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Pozri si 10 sekúnd videa a sleduj, či máš nutkanie meniť hlasitosť. Ak áno, mix ešte nesedí.</p>

      <h2>💬 Titulky, ktoré robia 80 % kvality</h2>
      <ul>
        <li>max <strong>2 riadky</strong> naraz</li>
        <li>segmenty krátke, „po dychu" (neprepisuj odseky)</li>
        <li>zvýrazni max <strong>1–2 kľúčové slová</strong> (nie celé vety)</li>
        <li>titulky nesmú byť rýchlejšie než reč</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Titulky nie sú stenografický prepis. Titulky sú <strong>navigácia</strong> pre diváka.</p>

      <h2>❗ Na čo si dať pozor</h2>
      <ul>
        <li>💬 <strong>Doslovné titulky = príliš veľa textu.</strong> Divák nestíha čítať a prestane počúvať/pozerať.</li>
        <li>📱 <strong>Titulky príliš dole.</strong> UI prvky (Reels/Shorts) ti ich prekryjú a pointa zmizne.</li>
        <li>🎵 <strong>Hudba prehluší hlas.</strong> Video môže byť „cool", ale je nepočúvateľné.</li>
        <li>⚡ <strong>Rýchly hlas + pomalý strih.</strong> Rytmus nesedí a pôsobí to amatérsky.</li>
        <li>🗣️ <strong>Neprirodzené formulácie.</strong> AI hlas zvýrazní každú „papierovú vetu" a znie to roboticky.</li>
      </ul>

      <h2>✅ Mini-check pred exportom (20–30 sekúnd)</h2>
      <ul>
        <li>🔇 Pozri 10 sekúnd <strong>bez zvuku</strong> → rozumieš pointe len z titulkov?</li>
        <li>👂 Pusť 10 sekúnd <strong>len zvuk</strong> (nepozeraj) → znie to prirodzene?</li>
        <li>🎵 Skontroluj, že hudba je pod hlasom a nič „nebije".</li>
      </ul>

      <MiniTask title="Hovorová verzia + titulky k 10 sekundám">
        <p><strong>Situácia</strong></p>
        <p>Máš scenár a chceš, aby hlas znel prirodzene a titulky boli čitateľné. Potrebuješ upraviť text tak, aby sa dal použiť na voiceover aj titulky bez toho, aby to pôsobilo preplnene.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber si 10 sekúnd zo scenára (zvyčajne hook + prvý bod jadra). Prepíš ho do <strong>hovorovej verzie</strong> a priprav titulky tak, aby boli čitateľné.</p>
        <PromptBlock hideLabel>
          <p>„Tu je úsek môjho scenára (cca 10 sekúnd):<br />
          [sem vlož text]</p>
          <ol>
            <li>Prepíš to do hovorovej, prirodzenej slovenčiny (kratšie vety, bežné slová).</li>
            <li>Navrhni titulky: rozdeľ text na segmenty, max 2 riadky, čitateľné tempo.</li>
            <li>Skontroluj, že 1 titulok sa dá prečítať do 1–2 sekúnd.</li>
          </ol>
          <p>Výstup formátuj takto:</p>
          <ul>
            <li>Hovorová verzia: …</li>
            <li>Titulky (po segmentoch):<br />1. …<br />2. …<br />3. …"</li>
          </ul>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Znie hovorová verzia prirodzene, ako keby som to povedal kamarátovi?</li>
          <li>Sú titulky krátke a čitateľné (max 2 riadky)?</li>
          <li>Stíha divák titulky prečítať bez stresu?</li>
          <li>Je v titulkoch zachovaná pointa (nie vata)?</li>
        </ul>
        <ExpectedFinding>
          <p>Keď upravíš text na reč a titulky, video zrazu pôsobí profesionálnejšie aj bez drahej produkcie. Najväčší rozdiel robí <strong>tempo a čitateľnosť</strong>, nie efekty.</p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktoré titulky sú najpoužiteľnejšie pre krátke video?"
        options={[
          { label: "🌕", text: "\u201EV dnešnej dobe je umelá inteligencia veľmi dôležitá a mení spôsob, akým pracujeme.\u201C" },
          { label: "⭐", text: "\u201EAI ti vie ušetriť čas. Ukážem ti ako.\u201C" },
          { label: "☀️", text: "\u201EUmelá inteligencia je technológia, ktorá využíva dáta, modely a algoritmy\u2026\u201C" },
        ]}
        correct="⭐"
        explanation="je krátka, čitateľná a ide priamo k pointe."
      />
    </PageShell>
  );
}
