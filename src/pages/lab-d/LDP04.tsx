import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-04-styl");

export default function LDP04() {
  return (
    <PageShell title="3️⃣ Štýl a vizuálna konzistencia" prev={nav.prev} next={nav.next}>

      <p>Najčastejší problém AI obrázkov nie je, že sú škaredé.</p>
      <p>Je to to, že <strong>každý vyzerá inak</strong>. A potom:</p>
      <ul>
        <li>séria postov pôsobí chaoticky,</li>
        <li>prezentácia vyzerá ako z troch rôznych šablón,</li>
        <li>web má vizuály, ktoré spolu neladia.</li>
      </ul>
      <p>Cieľ tejto lekcie je jednoduchý: aby si vedel spraviť <strong>sadu obrázkov, ktoré držia spolu</strong> — aj keď ich generuješ postupne.</p>

      <h3>🧩 Čo tvorí štýl</h3>
      <p>Štýl nie je "umelecký talent". Štýl je pár rozhodnutí, ktoré opakuješ.</p>
      <ul>
        <li><strong>Farby</strong> (2–3 hlavné + 1 zvýrazňovacia)</li>
        <li><strong>Svetlo</strong> (mäkké vs. tvrdé, teplé vs. studené)</li>
        <li><strong>Médium / materiál</strong> (flat ilustrácia, 3D, papier, skica, foto…)</li>
        <li><strong>Kompozícia</strong> (centrálne vs. s negatívnym priestorom pre text)</li>
        <li><strong>Úroveň detailu</strong> (minimal vs. bohatá scéna)</li>
        <li><strong>Opakujúci prvok</strong> (rámik, gradient, zrno, tieň, ikonky, "podpisový" tvar)</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>"V každom obrázku skúsim nový štýl." → séria nemá identitu.</li>
        <li>"Dám tam všetko, čo sa mi páči." → preplácané a nepoužiteľné.</li>
        <li>"Štýl neriešim, potom to nejako zjednotím." → väčšinou to stojí 3× viac času.</li>
      </ul>

      <h3>✅ Ako spraviť konzistenciu v praxi</h3>
      <ul>
        <li>Drž sa <strong>2–3 farieb</strong> a jedného typu svetla.</li>
        <li>Drž sa <strong>jedného média</strong> (napr. čistá ilustrácia alebo 3D).</li>
        <li>Opakuj <strong>kompozíciu</strong> (napr. vždy priestor vľavo pre text).</li>
        <li>Pri ďalších obrázkoch <strong>nemeníš štýl</strong>, meníš iba scénu.</li>
      </ul>

      <MiniTask title="Mini style guide">
        <p><strong>Inštrukcia</strong></p>
        <p>Vytvor si svoj "štýlový kľúč", ktorý budeš používať v celom LABe:</p>
        <ul>
          <li><strong>Farby:</strong> (2 hlavné + 1 akcent)</li>
          <li><strong>Nálada (3 slová):</strong></li>
          <li><strong>Svetlo:</strong> (mäkké/tvrdé, teplé/studené)</li>
          <li><strong>Médium / materiál:</strong> (flat/3D/paper/sketch/foto…)</li>
          <li><strong>Kompozícia:</strong> (kde nechávaš priestor pre text, čo je v centre)</li>
          <li><strong>DON'T:</strong> 3 veci, ktoré nechceš (napr. žiadny text v obrázku, žiadne fotoreal tváre, žiadne preplnené pozadie)</li>
        </ul>
      </MiniTask>

      <MiniTask title="Zjednoť 2 obrázky">
        <p><strong>Zadanie</strong></p>
        <p>Zober si 2 výstupy z lekcie 2 (napr. L2_cover_v1 a L2_explain_v1) a sprav z nich dvojicu, ktorá vyzerá ako jedna séria.</p>
        <p><strong>Inštrukcia</strong></p>
        <ul>
          <li>uprav len <strong>štýl</strong> (farby / svetlo / médium), nie obsah,</li>
          <li>cieľ: aby mali rovnaký "vizuálny jazyk",</li>
          <li>ulož si verzie ako: L3_unify_v1, L3_unify_v2</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je v tvojom mini style guide jasné, čo budeš opakovať pri každom ďalšom obrázku?</p>
        <p>Sú tvoje 2 zjednotené výstupy vizuálne bližšie k sebe než pôvodné verzie?</p>
        <p>Pomohol ti mini style guide znížiť počet rozhodnutí pri ďalšom obrázku?</p>
        <p>Vieš si predstaviť, že podľa tohto štýlu spravíš 5 obrázkov bez toho, aby každý vyzeral inak?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Konzistencia nevzniká tým, že "AI to trafí".</p>
        <p>Vzniká tým, že si nastavíš pár jasných pravidiel (farby, svetlo, médium, kompozícia) a tie potom opakuješ.</p>
        <p>Keď ich máš, AI sa správa stabilnejšie a ty rýchlejšie rozpoznáš, čo je "mimo štýl".</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prístup je najlepší, keď chceš, aby 5 AI obrázkov vyzeralo ako jedna séria?"
        options={[
          { label: "🌕", text: "\u201ENajprv si nastavím mini style guide (farby, svetlo, médium, kompozícia, don't) a potom ho opakujem pri každom obrázku. Mením len scénu.\u201C" },
          { label: "⭐", text: "\u201EPri každom obrázku skúšam iný štýl, nech je to zaujímavejšie. Potom to nejako zjednotím úpravami.\u201C" },
          { label: "☀️", text: "\u201EDám do promptu veľa detailov, aby to bolo originálne. Konzistenciu neriešim, lebo AI to nejako trafí.\u201C" },
        ]}
        correct="🌕"
        explanation="konzistencia vzniká opakovaním pár rozhodnutí. Bez toho bude každý výstup \u201Einý\u201C, aj keď téma ostáva rovnaká."
      />
    </PageShell>
  );
}
