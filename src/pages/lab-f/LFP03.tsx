import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lf-03-generovanie");

export default function LFP03() {
  return (
    <PageShell title="2️⃣ Generovanie hlasu a debugging zlého čítania" prev={nav.prev} next={nav.next}>
      <p>Keď vygeneruješ hlas prvýkrát, často to znie &quot;takmer dobre&quot;. A presne to je pasca. Jedno zle prečítané slovo, skratka alebo číslo a celý výstup pôsobí neprofesionálne.</p>
      <p>Cieľ tejto lekcie je jednoduchý: <strong>vedieť rýchlo zistiť, čo je zle, a opraviť to kontrolovane</strong>.</p>

      <h2>🎛️ Ako pracovať s generovaním hlasu</h2>
      <p>Pri hlasoch sa neoplatí vyrábať hneď dlhý výstup.</p>
      <ul>
        <li>rob najprv <strong>10–15 sekúnd</strong></li>
        <li>vypočuj a označ problémové miesta</li>
        <li>oprav text alebo výslovnosť</li>
        <li>až potom exportuj finál</li>
      </ul>
      <p>Toto je najrýchlejšia cesta k stabilnému výsledku.</p>

      <h2>⭕ Čo AI najčastejšie pokazí pri čítaní</h2>
      <p>Najčastejšie problémy sú tieto:</p>
      <ul>
        <li><strong>skratky</strong> (NPS, KPI, B2B, AI)</li>
        <li><strong>čísla a formáty</strong> (2026, 3:30, 1 250 €, 10 %)</li>
        <li><strong>cudzie slová a názvy</strong> (značky, mená, angličtina v slovenskom texte)</li>
      </ul>
      <p>Keď to necháš bez opravy, poslucháč si zapamätá práve tú chybu.</p>

      <h2>👉 Debugging: keď výsledok znie zle, čo spraviť ako prvé</h2>
      <p>Najčastejšie problémy nie sú v &quot;hlase&quot;, ale v texte.</p>

      <h3>Skratky</h3>
      <ul>
        <li>AI často nevie, či to má čítať ako slovo alebo po písmenách</li>
        <li>riešenie: prepíš na spôsob čítania, ktorý chceš počuť</li>
      </ul>

      <h3>Čísla a formáty</h3>
      <ul>
        <li>2026, 3:30, 1 250 €, 10 % často znejú neprirodzene</li>
        <li>riešenie: prepíš do slov alebo zjednoduš formát</li>
      </ul>

      <h3>Cudzie slová a názvy</h3>
      <ul>
        <li>značky, mená a angličtina v slovenskom texte sa často komolia</li>
        <li>riešenie: fonetický prepis alebo zmena slova na jednoduchší ekvivalent</li>
      </ul>

      <h3>&quot;Tempo je divné&quot;</h3>
      <ul>
        <li>v týchto nástrojoch ho často nevieš riadiť priamo</li>
        <li>riešenie: tempo riadiš cez text – kratšie vety, viac odsekov, menej vsuviek, prirodzené pauzy</li>
      </ul>
      <p>👉 Najdôležitejšia veta z tejto lekcie: <strong>najprv oprav text, až potom rieš hlas</strong>.</p>

      <MiniTask title="Generovanie hlasu bez úprav a s úpravami">
        <p><strong>Situácia</strong></p>
        <p>Máš krátky voiceover, ktorý obsahuje skratky a čísla. Bez úprav ho AI často prečíta zvláštne alebo nejednoznačne.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vytvor dve verzie v ElevenLabs:</p>
        <ul>
          <li>A: verzia bez úprav</li>
          <li>B: verzia s opravou čítania</li>
        </ul>
        <p><strong>Text</strong></p>
        <p>„Dnes ti ukážem 3 rýchle tipy, ako použiť AI v praxi. V mBank sme riešili NPS a KPI reporty za rok 2026. A keď máš meeting o 3:30, vieš si to pripraviť za 10 % času."</p>
        <p><strong>Postup</strong></p>
        <ul>
          <li>vygeneruj A a ulož ako <strong>L2_A</strong></li>
          <li>označ si 2–3 miesta, ktoré AI prečítala zle</li>
          <li>uprav text tak, aby to AI prečítala správne:
            <ul>
              <li>skratky prepíš na spôsob čítania</li>
              <li>čísla prepíš na slovný tvar alebo jednoduchší formát</li>
              <li>problémové slovo uprav foneticky alebo zmeň slovo</li>
            </ul>
          </li>
          <li>vygeneruj B a ulož ako <strong>L2_B</strong></li>
        </ul>
        <p><strong>❓ Porovnávacie otázky</strong></p>
        <ul>
          <li>Znie verzia B prirodzenejšie než verzia A?</li>
          <li>Sú skratky a čísla vo verzii B zrozumiteľné na prvé počutie?</li>
          <li>Nezhoršil sa rytmus textu po úpravách?</li>
          <li>Vieš jasne pomenovať, čo si upravil a prečo?</li>
          <li>Je verzia B použiteľná bez toho, aby si sa pri tom cítil trápne?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Najväčší posun v kvalite spravíš tým, že upravíš problémové miesta v texte. Skratky, čísla a cudzie slová sú najčastejší dôvod, prečo voiceover znie &quot;divne&quot;.</p>
      </ExpectedFinding>

      <MiniTest
        question="Čo je najlepší postup, keď AI zle číta skratky alebo čísla?"
        options={[
          { label: "🌕", text: "Spravím krátku ukážku, označím problémové miesta a opravím ich v texte alebo fonetike." },
          { label: "⭐", text: "Vygenerujem celý voiceover a keď sa mi niečo nepáči, skúsim iný hlas." },
          { label: "☀️", text: "Nechám to tak, lebo väčšina ľudí to pochopí z kontextu." },
        ]}
        correct="🌕"
        explanation="Krátke iterácie a oprava problémových miest je najrýchlejšia cesta k použiteľnému výsledku."
      />
    </PageShell>
  );
}
