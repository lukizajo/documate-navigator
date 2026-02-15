import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P10() {
  const nav = getNavContext("m08-10-prilezitosti");
  return (
    <PageShell title="9️⃣ Kde hľadať príležitosti na automatizáciu" {...nav}>

      <p>Najčastejšie si ľudia myslia, že automatizácia je niečo „navyše".</p>
      <p>V skutočnosti je to len pomenovanie toho, čo už aj tak robíš — len opakovane.</p>
      <p>A dobrá správa: príležitosti na automatizáciu sa dajú nájsť aj bez toho, aby si mal(a) technické znalosti. Stačí vedieť, kde sa pozerať.</p>

      <h3>✅ 7 signálov, že sa tu oplatí rozmýšľať procesne</h3>
      <p>Ak sa v nejakej činnosti opakuje aspoň 1 z týchto bodov, je to kandidát:</p>
      <ol>
        <li><strong>Opakovanie</strong><br />„Robím to stále dokola rovnako."</li>
        <li><strong>Kopírovanie / prepisovanie</strong><br />„Z e-mailu do tabuľky, z tabuľky do systému, z dokumentu do dokumentu…"</li>
        <li><strong>Kontroly</strong><br />„Stále kontrolujem to isté: či niečo sedí, či niečo nechýba."</li>
        <li><strong>Triedenie a kategórie</strong><br />„Stále rozhodujem, kam to patrí."</li>
        <li><strong>Šablóny a podobné odpovede</strong><br />„Tento text píšem stále takmer rovnako."</li>
        <li><strong>Čakanie a handoffy</strong><br />„Čakám na info od niekoho / posúvam to ďalej / pingujem ľudí."</li>
        <li><strong>Zber a sumarizácia</strong><br />„Zbieram info z viacerých miest a potom to dávam dokopy."</li>
      </ol>
      <p>👉 Keď nájdeš 2–3 signály naraz, je to silný kandidát.</p>

      <h3>🧠 Príklad z osobného života: domáce financie 💳</h3>
      <p>Na domácich financiách je krásne vidieť viacero signálov naraz:</p>
      <ul>
        <li>opakovanie (každý týždeň)</li>
        <li>triedenie do kategórií</li>
        <li>kontrola „či tam nie je niečo divné"</li>
        <li>sumarizácia „koľko a na čo"</li>
      </ul>
      <p>A presne preto sme si túto tému vybrali ako „hlavnú" na mini-úlohy.</p>

      <h3>🧠 Príklad z práce: opakujúce sa e-maily / požiadavky 📩</h3>
      <p>Aj tu sa signály objavia prirodzene:</p>
      <ul>
        <li>šablóny odpovedí</li>
        <li>triedenie (o čo ide)</li>
        <li>kontrola údajov</li>
        <li>zber info a prepis do interných systémov</li>
      </ul>

      <h3>✅ Rýchly „scanner": 3 otázky, ktoré odhalia príležitosť</h3>
      <p>Keď sa nevieš rozhodnúť, polož si:</p>
      <ol>
        <li><strong>Keby som to robil(a) 100×, čo ma bude najviac otravovať?</strong></li>
        <li><strong>Kde najčastejšie vzniká chyba alebo zabudnutie?</strong></li>
        <li><strong>Ktorý krok je mechanický a žerie čas?</strong></li>
      </ol>
      <p>To, čo ti napadne ako prvé, je často najlepší kandidát.</p>

      <h3>🚫 Pozor: nie všetko sa oplatí automatizovať</h3>
      <p>Aj keď niečo vyzerá „automatizovateľne", môže to byť:</p>
      <ul>
        <li>príliš nestabilné,</li>
        <li>príliš rizikové,</li>
        <li>alebo je to tak zriedkavé, že automatizácia je drahšia než manuál.</li>
      </ul>
      <p>Tu nám neskôr pomôže lekcia o chybách a bezpečnosti.</p>

      <MiniTask title="Nájdi 3 príležitosti (a vyber 1 top) 🔎✅">
        <p><strong>Zadanie</strong></p>
        <p>Nájdi 3 činnosti zo svojho života (práca alebo osobný život), ktoré majú aspoň 2 z „7 signálov".</p>
        <p>Potom vyber 1, ktorá má najväčší zmysel riešiť procesne.</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Zapíš 3 činnosti (každá 1 veta).</li>
          <li>Ku každej dopíš, ktoré signály tam vidíš (napr. 2–4).</li>
          <li>Vyber 1 TOP a napíš prečo (1 veta).</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna)</strong></p>
        <p><strong>Činnosť 1:</strong> …</p>
        <p>Signály: …</p>
        <p><strong>Činnosť 2:</strong> …</p>
        <p>Signály: …</p>
        <p><strong>Činnosť 3:</strong> …</p>
        <p>Signály: …</p>
        <p><strong>TOP činnosť:</strong> …</p>
        <p>Prečo: …</p>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> mám 3 činnosti + signály + TOP výber.</li>
          <li><strong>⭐ Dobré:</strong> TOP činnosť sa opakuje často (týždenne/denne).</li>
          <li><strong>🌟 Výborné:</strong> TOP činnosť má jasný vstup a výstup (dá sa z nej spraviť proces).</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
