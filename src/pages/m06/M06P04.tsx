import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask } from "@/components/ContentBlocks";

export default function M06P04() {
  const nav = getNavContext("m06-04-top-use-casy");
  return (
    <PageShell title="3️⃣ Najčastejšie AI use-casy v práci 🧠" {...nav}>

      <p>(a čo v nich ľudia najčastejšie riešia)</p>
      <p>V predchádzajúcich lekciách si si našiel svoj <strong>starter use-case</strong>. Teraz urobíme dôležitý krok navyše:</p>
      <p>👉 <strong>naučíš sa rozpoznať moment, kedy má AI v práci zmysel použiť.</strong></p>
      <p>V praxi totiž AI nepoužívame preto, že existuje nejaký „use-case", ale preto, že sa ocitneme v <strong>konkrétnej pracovnej situácii</strong>.</p>

      <h3>🧭 Mentálna mapa: 5 pracovných situácií</h3>
      <p>Nižšie je 5 situácií, ktoré v práci zažíva takmer každý – bez ohľadu na pozíciu, oddelenie či senioritu. Pri každej uvidíš, <strong>aké typy use-casov sa v nej prirodzene objavujú</strong>.</p>

      <h3>🔹 Situácia 1: „Potrebujem niečo rýchlo pripraviť"</h3>
      <p><em>(málo času, prázdna hlava, potrebujem štart)</em></p>
      <p>Typicky riešiš:</p>
      <ul>
        <li>písanie a úpravu e-mailov (1)</li>
        <li>tvorbu a prepis textov (2)</li>
        <li>preklady a jazykové úpravy (6)</li>
      </ul>
      <p>👉 <strong>Rola AI:</strong> štartér / prvý návrh</p>
      <p>👉 <strong>Čo od nej čakať:</strong> rýchlu kostru, návrh formulácií, tón</p>
      <p>👉 <strong>Na čo si dať pozor:</strong> sľuby, fakty, konkrétne údaje</p>

      <h3>🔹 Situácia 2: „Mám veľa informácií a potrebujem poriadok"</h3>
      <p><em>(poznámky, dokumenty, chaos)</em></p>
      <p>Typicky riešiš:</p>
      <ul>
        <li>zhrnutia dokumentov a PDF (3)</li>
        <li>zápisy zo stretnutí a porád (4)</li>
        <li>administratívu a checklisty (7)</li>
      </ul>
      <p>👉 <strong>Rola AI:</strong> organizátor</p>
      <p>👉 <strong>Čo od nej čakať:</strong> štruktúru, zhrnutie, rozdelenie do bodov</p>
      <p>👉 <strong>Na čo si dať pozor:</strong> vynechané výnimky, domyslené detaily</p>

      <h3>🔹 Situácia 3: „Potrebujem nápady alebo iný pohľad"</h3>
      <p><em>(zaseknutie, hľadanie alternatív)</em></p>
      <p>Typicky riešiš:</p>
      <ul>
        <li>brainstorming a generovanie nápadov (5)</li>
        <li>plánovanie a organizáciu úloh (8)</li>
      </ul>
      <p>👉 <strong>Rola AI:</strong> sparring partner</p>
      <p>👉 <strong>Čo od nej čakať:</strong> varianty, otázky, nové uhly pohľadu</p>
      <p>👉 <strong>Na čo si dať pozor:</strong> kvalita výberu – nápady vyberáš ty</p>

      <h3>🔹 Situácia 4: „Musím niečo vysvetliť alebo interpretovať"</h3>
      <p><em>(odborné → zrozumiteľné, čísla → príbeh)</em></p>
      <p>Typicky riešiš:</p>
      <ul>
        <li>analýzu dát a reportov (9)</li>
        <li>prepis odborných textov do zrozumiteľnej formy (2 / 6)</li>
      </ul>
      <p>👉 <strong>Rola AI:</strong> tlmočník</p>
      <p>👉 <strong>Čo od nej čakať:</strong> vysvetlenie, kontext, štruktúru</p>
      <p>👉 <strong>Na čo si dať pozor:</strong> presnosť, logiku a súvislosti</p>

      <h3>🔹 Situácia 5: „Potrebujem odpovedať rýchlo a konzistentne"</h3>
      <p><em>(rovnaké otázky, rovnaký štýl)</em></p>
      <p>Typicky riešiš:</p>
      <ul>
        <li>zákaznícku podporu a interných chatbotov (10)</li>
        <li>opakované e-maily a odpovede (1)</li>
      </ul>
      <p>👉 <strong>Rola AI:</strong> štandardizátor</p>
      <p>👉 <strong>Čo od nej čakať:</strong> jednotný štýl, rýchlosť, konzistentnosť</p>
      <p>👉 <strong>Na čo si dať pozor:</strong> pravdivosť a aktuálnosť informácií</p>

      <h3>TOP 10 najčastejších use-casov v práci (prehľad)</h3>
      <p>Pre lepšiu orientáciu ešte raz celý zoznam:</p>
      <ol>
        <li>písanie a úprava e-mailov</li>
        <li>tvorba a prepis textov (články, popisy, príspevky)</li>
        <li>zhrnutia dokumentov a PDF</li>
        <li>zápisy zo stretnutí a porád</li>
        <li>brainstorming a generovanie nápadov</li>
        <li>preklady a jazykové úpravy</li>
        <li>administratíva a checklisty</li>
        <li>plánovanie a organizácia úloh</li>
        <li>analýza dát a reportov</li>
        <li>zákaznícka podpora a interní chatboti</li>
      </ol>
      <p>👉 Tento zoznam ber ako <strong>menu</strong>, nie povinný plán.</p>

      <MiniTask title="Situácia → use-case → starter (7–10 min)">
        <p><strong>Zadanie</strong></p>
        <ol>
          <li>Vyber <strong>1 situáciu</strong>, ktorú riešiš v práci najčastejšie.</li>
          <li>Z nej vyber <strong>1 konkrétny use-case</strong> z TOP 10.</li>
          <li>Priprav si ho ako kandidáta na testovanie.</li>
        </ol>
        <p><strong>Kroky</strong></p>
        <ul>
          <li><strong>Situácia:</strong> (napr. „Potrebujem niečo rýchlo pripraviť")</li>
          <li><strong>Use-case:</strong> (napr. písanie e-mailov)</li>
          <li><strong>Vstup:</strong> čo AI dostane</li>
          <li><strong>Výstup:</strong> čo presne má vrátiť</li>
          <li><strong>Kontrola:</strong> 2 veci, ktoré vždy overíš</li>
        </ul>
        <p><strong>Očakávaný výstup</strong></p>
        <p>Krátky popis use-casu, ktorý vieš v ďalšej lekcii rovno použiť.</p>
      </MiniTask>

      <MiniTest
        question="Máš poznámky z porady a potrebuješ ich poslať tímu. Ktorá situácia to je?"
        options={[
          { label: "🌕", text: "Rýchlo niečo pripraviť" },
          { label: "⭐", text: "Potrebujem nápady" },
          { label: "☀️", text: "Mám veľa informácií a potrebujem poriadok" },
        ]}
        correct="☀️"
        explanation="Nejde o tvorbu, ale o štruktúru a prehľadnosť."
      />

      <MiniTest
        question="Potrebuješ vysvetliť manažérovi, prečo čísla vyzerajú inak než minulý mesiac."
        options={[
          { label: "🌕", text: "Potrebujem odpovedať rýchlo" },
          { label: "⭐", text: "Musím niečo vysvetliť alebo interpretovať" },
          { label: "☀️", text: "Potrebujem brainstorming" },
        ]}
        correct="⭐"
        explanation="Ide o interpretáciu, nie o tvorbu ani rýchlu reakciu."
      />

      <MiniTest
        question="Klienti sa pýtajú stále tú istú otázku a ty chceš odpovedať rýchlo, rovnako a bez chaosu. Ktorá situácia to je?"
        options={[
          { label: "🌕", text: "Potrebujem nápady alebo iný pohľad" },
          { label: "⭐", text: "Potrebujem odpovedať rýchlo a konzistentne" },
          { label: "☀️", text: "Musím niečo vysvetliť alebo interpretovať" },
        ]}
        correct="⭐"
        explanation="Cieľ je, aby odpovede mali rovnaký štýl a obsah, aby sa nič dôležité nevynechalo — a aby si nemusel zakaždým písať všetko od nuly."
      />
    </PageShell>
  );
}
