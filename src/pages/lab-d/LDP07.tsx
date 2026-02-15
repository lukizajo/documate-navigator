import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-07-infografika");

export default function LDP07() {
  return (
    <PageShell title="6️⃣ Infografika a text v obrázkoch" prev={nav.prev} next={nav.next}>

      <p>Infografiky sú super, lebo vedia dať rýchly prehľad. Problém je, že pri AI obrázkoch sa text často správa ako… lotéria. 😄</p>
      <p>Raz je to čitateľné, inokedy sú tam preklepy, divné písmená alebo úplne iné slová.</p>
      <p>Cieľ tejto lekcie: aby si mal <strong>workflow, ktorý funguje aj vtedy, keď AI text nezvláda</strong> — a aby si vedel, kedy má zmysel text do obrázka vôbec dávať.</p>
      <p>Tip do praxe: <strong>Infografika má vysvetľovať, nie zdobiť.</strong></p>

      <h3>🧠 Limity AI pri texte</h3>
      <p>AI generátory obrázkov riešia primárne vizuál (tvary, svetlo, štýl). Text často vnímajú skôr ako "ďalší vzor", nie ako presné písmená s významom.</p>
      <p>Preto sa môže stať, že:</p>
      <ul>
        <li>text je nečitateľný alebo "roztečený",</li>
        <li>písmená sú poprehadzované,</li>
        <li>slová sú skomolené,</li>
        <li>pri každej variácii sa zmení aj text.</li>
      </ul>

      <h3>🧾 Kedy použiť a nepoužiť text priamo v obrázku</h3>
      <p><strong>Text priamo v obrázku je OK, keď:</strong></p>
      <ul>
        <li>ide o <strong>1–3 krátke slová</strong> (napr. "AI", "TIP", "STOP", "3 kroky"),</li>
        <li>je to <strong>jednoduchý nápis</strong> na štítku/ikonke a nevadí drobná nepresnosť,</li>
        <li>je to skôr "vizuálny headline", nie kritická informácia.</li>
      </ul>
      <p><strong>Text do obrázka radšej nedávaj, keď:</strong></p>
      <ul>
        <li>potrebuješ presné formulácie (názvy, čísla, dátumy),</li>
        <li>chceš viac viet alebo viac boxov s textom,</li>
        <li>ide o kurzový/firemný obsah, kde musí byť výstup konzistentný.</li>
      </ul>
      <p>Pravidlo: <strong>ak by ťa hnevalo, že tam je preklep → text dávaj mimo obrázka.</strong></p>

      <h3>👀 Čitateľnosť a kontrast: 4 rýchle pravidlá</h3>
      <ul>
        <li><strong>Jednoduché pozadie</strong>: text nikdy nedávaj na rušný vzor.</li>
        <li><strong>Kontrast</strong>: tmavý text na svetlom pozadí alebo naopak (vyhni sa "stredne sivé na stredne sivom").</li>
        <li><strong>Menej slov</strong>: do boxu max <strong>6–10 slov + 1 krátka veta</strong>.</li>
        <li><strong>Priestor</strong>: boxy musia mať "dýchanie" (voľný okraj), inak text pôsobí natlačene.</li>
      </ul>

      <h3>✅ Praktický workflow: layout bez textu + text zvlášť</h3>
      <p>Namiesto toho, aby si AI nútil písať text do obrázka, spravíš to takto:</p>
      <ul>
        <li>najprv si necháš vygenerovať <strong>infografický layout bez textu</strong> (boxy, šípky, poradie),</li>
        <li>potom si necháš pripraviť <strong>text zvlášť</strong> (ako obsah do boxov),</li>
        <li>a text vložíš manuálne (v Canve / Slides / Figma… podľa toho, čo používaš).</li>
      </ul>
      <p>Výhoda: výsledok je čistý, čitateľný a konzistentný.</p>

      <h3>🧩 Čo musí mať dobrý infografický layout</h3>
      <ul>
        <li>jasnú štruktúru (boxy / kroky / šípky),</li>
        <li>dostatok priestoru v boxoch (text sa tam vojde),</li>
        <li>jednoduché pozadie (aby text nezanikol),</li>
        <li>konzistentný štýl podľa mini style guide.</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Nechcieť od AI "dokonalý text" hneď v prvom kroku.</li>
        <li>Nemať príliš veľa krokov naraz (3–5 boxov je ideál).</li>
        <li>Nepoužiť pozadie, ktoré znižuje čitateľnosť.</li>
        <li>Nepchať do boxov dlhé vety (infografika je skôr "nadpis + 1 veta").</li>
      </ul>

      <MiniTask title="Vytvor infografiku v dvoch krokoch (layout + text)">
        <p><strong>Situácia</strong></p>
        <p>Chceš spraviť jednoduchú infografiku na slide 16:9 na tému:</p>
        <p><strong>{"\u201EAko vzniká AI odpoveď (vstup → spracovanie → výstup)\u201C"}</strong></p>
        <p>(alebo použi tvoj koncept z lekcie 2, ak ti to lepšie sedí).</p>

        <p><strong>Inštrukcia</strong></p>
        <p>Najprv sprav layout bez textu. Potom si nechaj pripraviť text zvlášť.</p>

        <p><strong>✅ Krok 1: Infografický layout bez textu</strong></p>
        <p>{"\u201EVytvor infografický layout bez textu s 3 boxami v poradí (vstup → spracovanie → výstup). Chcem čisté pozadie, jasné oddelenie boxov, šípky medzi nimi, dostatok miesta v boxoch. Formát: 16:9. Štýl: použi môj mini style guide (farby, svetlo, médium). DON'T: bez písmen, bez čísiel, bez ikon s textom.\u201C"}</p>
        <p>Ulož ako: L6_layout_v1</p>

        <p><strong>✅ Krok 2: Text do boxov (zvlášť, mimo obrázka)</strong></p>
        <p>{"\u201ENapíš krátky text do 3 boxov pre túto infografiku (každý box max 6–10 slov + 1 krátka veta). Téma: vstup → spracovanie → výstup pri AI odpovedi. Tón: jednoduchý, zrozumiteľný, bez technických detailov.\u201C"}</p>
        <p>Text si ulož ako: L6_text_v1</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je layout bez textu prehľadný aj bez slov (štruktúra je jasná)?</p>
        <p>Je v boxoch dostatok miesta na text (nebude to "natlačené")?</p>
        <p>Je text krátky a vhodný do infografiky (nie dlhé vety)?</p>
        <p>Vieš si predstaviť, že rovnaký layout použiješ aj na inú tému (len vymeníš text)?</p>
        <p>Je toto riešenie použiteľnejšie než snaha tlačiť text priamo do generovaného obrázka?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>AI je výborná na <strong>layout a vizuálnu štruktúru</strong>, ale text v obrázku je nespoľahlivý.</p>
        <p>Keď oddelíš "grafiku" a "text", získaš výsledok, ktorý je čitateľný, konzistentný a dá sa rýchlo upravovať.</p>
        <p>Tento workflow je prakticky vždy rýchlejší než bojovať s textom v obrázku.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý postup je najlepší, keď chceš infografiku s textom, ktorá bude čitateľná a stabilná?"
        options={[
          { label: "🌕", text: "\u201ENechám AI vygenerovať celú infografiku aj s textom, nech je to hotové na prvýkrát.\u201C" },
          { label: "⭐", text: "\u201ENajprv vygenerujem layout bez textu, potom si pripravím text zvlášť a vložím ho manuálne.\u201C" },
          { label: "☀️", text: "\u201EVygenerujem obrázok s textom a keď bude zlý, spravím 10 variácií, kým sa trafí.\u201C" },
        ]}
        correct="⭐"
        explanation="oddelenie layoutu a textu dáva stabilný výsledok a udrží čitateľnosť pod kontrolou."
      />
    </PageShell>
  );
}
