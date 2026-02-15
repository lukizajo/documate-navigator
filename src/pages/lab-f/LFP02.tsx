import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lf-02-scenar");

export default function LFP02() {
  return (
    <PageShell title="1️⃣ Ako písať scenár pre hlas" prev={nav.prev} next={nav.next}>
      <p>Keď píšeš článok alebo text do slidu, môžeš si dovoliť viac detailov. Čitateľ sa zastaví, vráti sa o vetu späť, pozrie sa na odrážku.</p>
      <p>Pri hlase to nefunguje.</p>
      <p>V audiu má poslucháč len jednu šancu. Ak veta trvá príliš dlho alebo je preplnená, mozog ju nestíha „udržať" – a pointa ujde.</p>
      <p>Preto platí jednoduché pravidlo:</p>
      <p>👉 <strong>Text pre uši musí byť jednoduchší než text pre oči.</strong></p>

      <h2>🧠 3 pravidlá scenára, ktoré zlepšia výsledok okamžite</h2>
      <p><strong>1️⃣ Jedna myšlienka = jedna veta</strong></p>
      <p>Dlhé súvetia znejú múdro, ale v audionahrávke často pôsobia ako šum.</p>
      <ul>
        <li>Namiesto: „Keď sa pozrieme na možnosti, ktoré dnes máme, a zohľadníme rôzne scenáre…"</li>
        <li>Skús: „Dnes máš dve možnosti. A každá sa hodí na niečo iné."</li>
      </ul>

      <p><strong>2️⃣ Používaj bežné slová</strong></p>
      <p>Audio je „rozhovor". Keď použiješ úradnícky jazyk, znie to cudzo a neprirodzene.</p>
      <ul>
        <li>Namiesto: „implementovať riešenie"</li>
        <li>Skús: „zaviesť riešenie" alebo „nasadiť riešenie"</li>
      </ul>

      <p><strong>3️⃣ Rob pauzy, nech si text „dýchne"</strong></p>
      <p>V audionahrávke je pauza kamarát. Pauza dá poslucháčovi čas spracovať informáciu.</p>
      <p>Ako si pomôcť:</p>
      <ul>
        <li>krátke odseky (1–2 vety)</li>
        <li>pomlčky na dôraz</li>
        <li>prázdny riadok medzi blokmi</li>
      </ul>

      <h2>🧩 Štruktúra scenára: HOOK → JADRO → ZÁVER</h2>
      <p>Keď máš dobré vety, ešte to neznamená, že voiceover bude zrozumiteľný. V audionahrávke sa poslucháč nevie „vrátiť očami" späť a rýchlo sa stratí, ak text nemá jasnú kostru.</p>
      <p>👉 Preto si dnes nastavíme jednoduchý systém, ktorý funguje takmer vždy: <strong>HOOK → JADRO → ZÁVER</strong>. Je to najrýchlejší spôsob, ako spraviť <strong>krátky, zrozumiteľný a použiteľný</strong> scenár.</p>

      <h3>Ako držať poslucháča v texte: HOOK → JADRO → ZÁVER</h3>
      <p>Tento rámec si predstav ako navigáciu. Najprv povieš, prečo má počúvať. Potom mu dáš jadro v malých kusoch. A na konci mu to uzavrieš.</p>
      <p>👉 <strong>HOOK (1–2 vety)</strong></p>
      <ul>
        <li>povedz <strong>prečo to riešiť</strong> alebo <strong>čo z toho bude mať</strong></li>
        <li>ideálne konkrétne (napr. „ušetríš čas", „prestaneš robiť chybu")</li>
      </ul>
      <p>👉 <strong>JADRO (2–5 viet)</strong></p>
      <ul>
        <li>drž sa <strong>1 hlavnej myšlienky</strong></li>
        <li>pridaj <strong>2–3 podporné body</strong></li>
        <li>žiadne odbočky (jedna vec naraz)</li>
      </ul>
      <p>👉 <strong>ZÁVER (1–2 vety)</strong></p>
      <ul>
        <li>krátke zhrnutie</li>
        <li>alebo jasný ďalší krok: „skús toto dnes"</li>
      </ul>

      <h2>💡 Malá pomôcka, ktorá spraví veľký rozdiel</h2>
      <p>Aby scenár znel prirodzene, pomôže ti robiť v texte „značky pre hlas":</p>
      <ul>
        <li><strong>(pauza)</strong> tam, kde chceš, aby poslucháč stihol spracovať pointu</li>
        <li><strong>— pomlčka</strong> na dôraz</li>
        <li><strong>prázdny riadok</strong> medzi blokmi, aby text „dýchal"</li>
      </ul>
      <p>Pointa: najprv uprav štruktúru a rytmus textu. <strong>Až potom rieš hlas alebo nástroj.</strong></p>

      <h2>❗ Na čo si dať pozor</h2>
      <p>Ak tvoj hlas (alebo AI hlas) znie „divne", často to nie je problém nástroja. Najčastejšie je problém v texte:</p>
      <ul>
        <li><strong>Súvetia</strong> (príliš veľa informácií v jednej vete)</li>
        <li><strong>Odbočky</strong> (zrazu riešiš 3 veci naraz)</li>
        <li><strong>Abstraktné frázy</strong> („v podstate", „vo všeobecnosti", „na základe toho…")</li>
        <li><strong>Text bez slovies</strong> (len pomenovania, nič sa nedeje)</li>
      </ul>

      <h2>🔧 Mini-debugging: keď to znie zle, urob najprv toto</h2>
      <ol>
        <li>Rozdeľ vetu na dve.</li>
        <li>Vyhoď 20–30 % slov (bez straty významu).</li>
        <li>Nahraď 2–3 „ťažké" slová bežnými.</li>
        <li>Pridaj pauzy (odseky).</li>
      </ol>
      <p>A až potom rieš hlas, nastavenia alebo generovanie.</p>

      <MiniTask>
        <p><strong>👉 Premeň &quot;text pre oči&quot; na &quot;text pre uši&quot;</strong></p>
        <p><strong>Situácia</strong></p>
        <p>Máš krátky vysvetľujúci text (napr. do článku alebo slidu). Chceš z neho spraviť voiceover, ktorý bude zrozumiteľný na prvé počutie.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Urob <strong>dve verzie</strong> toho istého textu:</p>
        <ul>
          <li><strong>A) pôvodná verzia</strong> (text pre oči)</li>
          <li><strong>B) prepis pre hlas</strong> (text pre uši)</li>
        </ul>
        <p>Cieľ: aby verzia B znela prirodzene, stručne a jasne — aj keby ju niekto počul len raz.</p>
        <p><strong>✅ Text</strong></p>
        <p>„Umelá inteligencia dokáže zefektívniť rutinné úlohy v práci. Medzi najčastejšie využitia patrí sumarizácia informácií, tvorba návrhov textov a pomoc pri plánovaní. Je však dôležité dávať pozor na nepresnosti a vždy si overiť kľúčové fakty."</p>
        <p><strong>✅ Krok 1: Ulož pôvodný text (A)</strong></p>
        <p>Skopíruj text a ulož si ho ako: <strong>L1_text_A</strong></p>
        <p><strong>✅ Krok 2: Sprav voiceover verziu (B)</strong></p>
        <p>Prepíš text tak, aby platilo:</p>
        <ul>
          <li>max <strong>4 krátke vety</strong></li>
          <li>skrátenie približne o <strong>30 %</strong></li>
          <li>pridaj pauzy (odseky alebo pomlčky)</li>
        </ul>
        <p>Ulož ako: <strong>L1_text_B</strong></p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je verzia B kratšia a jednoduchšia bez straty významu?</li>
          <li>Dá sa verzia B povedať nahlas plynule na jeden nádych?</li>
          <li>Má verzia B jasnejšiu pointu už po prvej vete?</li>
          <li>Sú vo verzii B pauzy/odseky tam, kde ich prirodzene potrebuješ?</li>
          <li>Znie verzia B viac ako reč než ako text do článku?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Najväčší rozdiel v kvalite voiceoveru často neurobí nástroj ani hlas, ale <strong>text</strong>. Keď skrátiš vety, zjednodušíš slovník a pridáš pauzy, hlas (aj AI hlas) začne znieť prirodzenejšie a poslucháč nestráca pointu.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prístup je najlepší, keď chceš, aby voiceover znel prirodzene?"
        options={[
          { label: "🌕", text: "Najprv prepíšem text na krátke vety, pridám pauzy a až potom riešim generovanie hlasu." },
          { label: "⭐", text: "Nechám pôvodný text a budem len skúšať rôzne AI hlasy, kým to nebude znieť lepšie." },
          { label: "☀️", text: "Pridám do textu viac odborných slov, aby to znelo profesionálnejšie." },
        ]}
        correct="🌕"
        explanation="V audionahrávke rozhoduje zrozumiteľnosť a rytmus. Najrýchlejšie to opravíš úpravou textu, nie výmenou hlasu."
      />
    </PageShell>
  );
}
