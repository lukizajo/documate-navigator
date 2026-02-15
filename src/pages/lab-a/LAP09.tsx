import { PageShell } from "@/components/PageShell";
import { PromptBlock, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-09-checklist");

export default function LAP09() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>8️⃣ Mysliaci checklist</h2>
      <p>Toto je jednoduchý návyk, ktorý ti ušetrí veľa času a omylov: skôr než požiadaš AI o výstup, prebehni si krátky checklist.</p>
      <p>🧩 Nie preto, aby si bol „perfektný". Ale aby si vedel, či AI ide len generovať text, alebo ti reálne pomáha riešiť problém.</p>

      <hr />

      <h3>✅ Checklist pred použitím AI</h3>
      <p>🎯 <strong>Čo je môj cieľ?</strong></p>
      <p>Čo má byť výsledok a pre koho?</p>
      <p>📌 <strong>Čo už viem a čo neviem?</strong></p>
      <p>Kde mám dieru v informáciách?</p>
      <p>🚧 <strong>Aké mám obmedzenia?</strong></p>
      <p>Čas, rozsah, štýl, pravidlá, formát.</p>
      <p>⚠️ <strong>Aké je riziko, keď to bude zle?</strong></p>
      <p>Čo sa stane, ak bude odpoveď zlá?</p>
      <ul>
        <li>✅ <strong>low-stakes</strong>: môžeš experimentovať, stačí zdravý rozum</li>
        <li>⚠️ <strong>high-stakes</strong>: pýtaj si predpoklady, riziká a čo overiť (AI nie je autorita)</li>
      </ul>
      <p>✅ <strong>Čo presne chcem od AI?</strong></p>
      <p>Otázky? Varianty? Štruktúru? Návrh textu?</p>
      <p>🧠 Keď si toto prejdeš, zistíš, že často nepotrebuješ „odpoveď". Potrebuješ najprv lepšie definovať zadanie.</p>

      <hr />

      <PromptBlock>„Pomôž mi prejsť checklist: cieľ, kontext, obmedzenia, riziko. Najprv sa ma na to spýtaj a až potom navrhni riešenie."</PromptBlock>

      <hr />

      <MiniTask title="Myslenie pred odpoveďou">
        <p><strong>Situácia</strong></p>
        <p>Chceš vyriešiť problém alebo rozhodnutie tak, aby ti AI <strong>pomohla premýšľať</strong>, nie len rýchlo vygenerovala odpoveď. Vyskúšaš si rozdiel medzi „daj mi riešenie" a „najprv si ujasnime, čo vlastne riešim".</p>

        <p><strong>Inštrukcia</strong></p>
        <p><strong>1️⃣ Vyber si 1 scenár (jeden stačí)</strong></p>
        <p>🧑‍💼 <strong>Scenár A – práca:</strong></p>
        <p>Chcem zlepšiť svoj pracovný deň, lebo mi uteká čas na operatívu a večer mám pocit chaosu.</p>
        <p>🏠 <strong>Scenár B – osobný život:</strong></p>
        <p>Chcem zmeniť návyk (spánok / pohyb / strava), ale vždy to vydržím len pár dní.</p>
        <p>📌 <strong>Scenár C – rozhodnutie:</strong></p>
        <p>Zvažujem dôležité rozhodnutie (napr. kúpa veci, zmena služby, výber kurzu, investícia času/peňazí) a chcem si ujasniť možnosti a riziká.</p>
        <p>💡 Keď nevieš, čo vybrať, použi scenár A a napíš: „Mám veľa meetingov a večer mám pocit, že som nič nedotiahol."</p>
        <p>✅ Do AI napíš 1–2 vety o svojom konkrétnom prípade (podľa scenára).</p>

        <p><strong>2️⃣ Prvý pokus: rýchla otázka (bez rozkladu)</strong></p>
        <p>Skopíruj do AI tento prompt a doplň svoj problém:</p>
        <p>„Mám tento problém: <strong>[doplň 1–2 vety]</strong>. Navrhni mi riešenie a konkrétne kroky, čo mám spraviť."</p>
        <p>Výsledok si ulož vedľa seba.</p>

        <p><strong>3️⃣ Druhý pokus: AI ako partner v myslení (s rozkladom + variantmi)</strong></p>
        <p>Skopíruj do AI tento prompt (copy–paste) a doplň svoj problém:</p>
        <p>„Mám tento problém: <strong>[doplň 1–2 vety]</strong>. Pomôž mi premýšľať, nie len dať odpoveď.</p>
        <ol>
          <li>Najprv sa ma opýtaj 6 otázok, aby si pochopil:
            <ul>
              <li>môj cieľ (čo chcem dosiahnuť),</li>
              <li>kontext (čo sa deje a prečo),</li>
              <li>obmedzenia (čas, peniaze, energia, pravidlá),</li>
              <li>priority (čo je najdôležitejšie),</li>
              <li>riziká (čo sa môže pokaziť),</li>
              <li>deal-breaker (čo nechcem, aby sa stalo).</li>
            </ul>
          </li>
          <li>Až potom navrhni 3 varianty riešenia:
            <ul>
              <li>konzervatívny,</li>
              <li>realistický,</li>
              <li>odvážny.</li>
            </ul>
          </li>
        </ol>
        <p>Ku každému variantu daj:</p>
        <ul>
          <li>2 dôvody „prečo áno",</li>
          <li>1 dôvod „prečo nie",</li>
          <li>1 riziko (kde sa to môže rozpadnúť),</li>
          <li>1 ďalší krok na najbližších 24 hodín.</li>
        </ul>
        <p>Formát: krátke odrážky + na konci 1 otázka, ktorá mi pomôže vybrať si variant."</p>
        <p>Aj tento výsledok si ulož vedľa seba.</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Rozumie druhý výsledok lepšie tomu, <strong>čo vlastne riešim</strong> (cieľ, kontext, obmedzenia)?</p>
        <p>Dá mi druhý výsledok <strong>varianty a kompromisy</strong>, nie len jednu univerzálnu radu?</p>
        <p>Obsahuje druhý výsledok aj <strong>riziká a slabé miesta</strong>, alebo je iba pozitívny?</p>
        <p>Je druhý výsledok <strong>použiteľnejší hneď</strong>, bez toho aby som ho musel dopĺňať?</p>
        <p>Mám po druhom výsledku väčší pocit kontroly nad rozhodnutím?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď AI najprv pomôže problém rozložiť (cieľ, kontext, obmedzenia, priority, riziká, deal-breaker), výstup je presnejší a praktickejší. Rozdiel nie je v tom, že by AI bola „múdrejšia", ale v tom, že si ju viedol lepšie – a tým si získal kontrolu nad výsledkom.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
