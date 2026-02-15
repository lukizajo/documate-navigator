import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P03() {
  const nav = getNavContext("m08-03-procesny-mindset");
  return (
    <PageShell title="2️⃣ Procesný mindset: najprv proces, až potom nástroj" {...nav}>

      <p>Keď ľudia začnú riešiť automatizáciu, často spravia jednu chybu hneď na začiatku:</p>
      <p>👉 <strong>najprv hľadajú nástroj</strong>.</p>
      <p>„Kde sa to dá naklikať?"</p>
      <p>„Čo mám použiť – Make, Zapier, Power Automate…?"</p>
      <p>„A kde sa tam dá pridať AI?"</p>
      <p>Lenže nástroj je až posledný krok.</p>
      <p><strong>Automatizovať vieš len to, čomu rozumieš.</strong></p>
      <p>A rozumieš tomu vtedy, keď to vieš rozložiť na menšie časti.</p>

      <h3>✅ Čo znamená „procesný mindset"?</h3>
      <p>Procesný mindset znamená, že sa na úlohu nepozeráš ako na jeden veľký balík („urobím report", „odpíšem na emaily", „spracujem objednávky"), ale ako na sériu krokov:</p>
      <ul>
        <li><strong>Vstup</strong> (čo prichádza?)</li>
        <li><strong>Spracovanie</strong> (čo sa deje v hlave alebo v systéme?)</li>
        <li><strong>Výstup</strong> (čo má byť hotové a kde?)</li>
      </ul>
      <p>Až keď máš toto, vieš sa pýtať:</p>
      <ul>
        <li>Kde sa dá niečo zjednodušiť?</li>
        <li>Kde sa dá niečo zautomatizovať?</li>
        <li>Kde dáva zmysel AI (a kde nie)?</li>
      </ul>

      <h3>🔎 3 kontrolné otázky pred automatizáciou</h3>
      <p>Keď chceš niečo automatizovať, polož si tieto otázky:</p>
      <ol>
        <li><strong>Čo je spúšťač?</strong><br />Kedy sa to celé začína? (napr. email, formulár, nový záznam, každý pondelok)</li>
        <li><strong>Čo je „hotovo"?</strong><br />Ako vyzerá výsledok? (napr. odpoveď odoslaná, záznam v tabuľke, report uložený, notifikácia poslaná)</li>
        <li><strong>Kde sa rozhoduje?</strong><br />Ktoré kroky sú jasné pravidlá a ktoré sú „úsudok"?</li>
      </ol>
      <p>👉 Toto je kľúčové, lebo:</p>
      <ul>
        <li><strong>jasné pravidlá</strong> = vhodné na automatizáciu (aj bez AI)</li>
        <li><strong>úsudok</strong> = vhodné na AI copilot (AI navrhne, človek schváli)</li>
        <li><strong>vysoké riziko</strong> = manuál alebo copilot s kontrolou</li>
      </ul>

      <h3>🧩 Rozlož si úlohu na kroky (mini šablóna)</h3>
      <p>Skús si vziať ľubovoľnú činnosť a vypíš ju takto:</p>
      <ul>
        <li><strong>Spúšťač:</strong> čo to spustí?</li>
        <li><strong>Krok 1:</strong> čo urobím ako prvé?</li>
        <li><strong>Krok 2:</strong> čo nasleduje?</li>
        <li><strong>Krok 3:</strong> kde sa rozhodujem?</li>
        <li><strong>Výstup:</strong> čo je výsledok a kam ide?</li>
      </ul>
      <p>Nepotrebuješ dokonalosť. Stačí, aby si to vedel vysvetliť niekomu inému.</p>

      <h3>✅ Príklad z práce: spracovanie emailu od zákazníka</h3>
      <p><strong>Úloha:</strong> odpovedať na otázky zákazníkov.</p>
      <ul>
        <li><strong>Spúšťač:</strong> príde email</li>
        <li><strong>Krok 1 (Extract):</strong> zistiť, o čo ide (billing / technický problém / feedback)</li>
        <li><strong>Krok 2 (Explain):</strong> pochopiť kontext + čo zákazník chce</li>
        <li><strong>Krok 3 (Decision):</strong> je to štandardné alebo výnimka?</li>
        <li><strong>Krok 4 (Edit):</strong> pripraviť odpoveď</li>
        <li><strong>Výstup:</strong> odpoveď odoslaná + prípadne záznam do systému</li>
      </ul>
      <p>A teraz vidíš, kde sa dá čo:</p>
      <ul>
        <li>triedenie emailu = často AI (alebo pravidlá)</li>
        <li>draft odpovede = AI copilot</li>
        <li>odoslanie bez kontroly = len pri nízkom riziku</li>
      </ul>

      <h3>✅ Príklad z osobného života: týždenné plánovanie jedál</h3>
      <p><strong>Úloha:</strong> každý týždeň vymyslieť jedálniček a nákup.</p>
      <ul>
        <li><strong>Spúšťač:</strong> nedeľa večer / prázdna chladnička</li>
        <li><strong>Krok 1:</strong> skontrolovať, čo doma je</li>
        <li><strong>Krok 2:</strong> vybrať jedlá na 5 dní</li>
        <li><strong>Krok 3:</strong> spraviť nákupný zoznam</li>
        <li><strong>Výstup:</strong> zoznam + plán jedál</li>
      </ul>
      <p>Tu je často AI ideálna ako copilot:</p>
      <ul>
        <li>navrhne jedlá podľa preferencií</li>
        <li>vygeneruje nákupný zoznam</li>
      </ul>
      <p>Ale automatizovať „celé" to bude dávať zmysel až vtedy, keď máš jasné pravidlá (preferencie, alergie, rozpočet, čas varenia).</p>

      <h3>🎯 Pointa lekcie</h3>
      <p>Procesný mindset je základ, lebo:</p>
      <ul>
        <li>bez procesu automatizuješ len „pocit"</li>
        <li>s procesom vieš presne určiť, kde je priestor pre:
          <ul>
            <li><strong>bezAI automatizáciu</strong> (pravidlá)</li>
            <li><strong>AI copilot</strong> (AI navrhne, človek schváli)</li>
            <li><strong>agent/viackrokový systém</strong> (až keď máš jasné hranice)</li>
          </ul>
        </li>
      </ul>

      <MiniTask title={"\u201ERozsekaj domáce financie\u201C na kroky"}>
        <p><strong>Situácia</strong></p>
        <p>Predstav si, že si raz týždenne robíš poriadok v osobných financiách (príjmy, výdavky, kategórie).</p>
        <p>Tvoj cieľ teraz nie je nič automatizovať — len <strong>rozložiť činnosť na jasné kroky</strong>.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Napíš si <strong>spúšťač</strong> (kedy sa to začína).<br />napr. „Nedeľa večer" / „Keď mi príde výplata" / „Keď mám 15 minút"</li>
          <li>Napíš si <strong>výstup (čo je hotovo)</strong>.<br />napr. „Všetky výdavky mám zapísané a rozdelené do kategórií"</li>
          <li>Rozlož činnosť na <strong>6–8 konkrétnych krokov</strong>.<br />Každý krok píš ako <strong>sloveso + čo</strong> (napr. „Otvorím banku", „Skontrolujem transakcie"…).</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna na vyplnenie)</strong></p>
        <p><strong>Činnosť:</strong> Týždenný prehľad príjmov a výdavkov</p>
        <p><strong>Spúšťač:</strong> …</p>
        <p><strong>Výstup (hotovo):</strong> …</p>
        <p><strong>Kroky (6–8):</strong></p>
        <ol>
          <li>…</li>
          <li>…</li>
          <li>…</li>
          <li>…</li>
          <li>…</li>
          <li>…</li>
          <li>… <em>(voliteľné)</em></li>
          <li>… <em>(voliteľné)</em></li>
        </ol>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> mám spúšťač, výstup a 6–8 krokov.</li>
          <li><strong>⭐ Dobré:</strong> kroky sú konkrétne (sloveso + čo), nie „veľké balíky".</li>
          <li><strong>🌟 Výborné:</strong> kroky by vedel spraviť aj niekto iný len podľa tvojho zoznamu.</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
