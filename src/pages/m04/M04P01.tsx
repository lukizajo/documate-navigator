import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M04P01() {
  const nav = getNavContext("m04-01-uvod");
  return (
    <PageShell title="🅾️ Úvod do kontext inžinieringu" {...nav}>

      <p>V predchádzajúcom module (M02) sme sa naučili, <strong>ako AI jasne povedať, čo má robiť</strong>. Možno si si však všimol jednu vec: aj pri dobrom prompte vie byť výstup príliš všeobecný, mimo reality alebo jednoducho „nepoužiteľný".</p>
      <p>To neznamená, že prompt bol zlý. Znamená to, že <strong>AI chýbali súvislosti</strong>.</p>
      <p>Presne preto vzniká tento modul. <strong>Kontext inžiniering</strong> rieši situácie, keď jednoduchý prompt už nestačí – nie preto, že by bol nesprávny, ale preto, že úloha je zložitejšia, má viac obmedzení, viac zdrojov alebo konkrétne prostredie.</p>
      <p>Ešte predtým, než pôjdeme do detailov, si poďme hneď na začiatku jasne povedať:</p>

      <h2>🧭 Prehľad modulu</h2>
      <p>V tomto module sa pozrieme na:</p>
      <ul>
        <li>z čoho sa skladá dobrý kontext (rola, pravidlá, zdroje, úloha, formát),</li>
        <li>ako pracovať s kontextovým oknom a dlhšími textami,</li>
        <li>prečo sú chunking a citácie kľúčové,</li>
        <li>ako sa vyhnúť zahlteniu AI zbytočnými informáciami,</li>
        <li>typické chyby pri práci s kontextom.</li>
      </ul>

      <h2>🎯 Čo sa v tomto module naučíš</h2>
      <p>Po absolvovaní tohto modulu budeš vedieť:</p>
      <ul>
        <li>rozlíšiť, kedy má zmysel riešiť kontext a kedy nie,</li>
        <li>poskladať kontext tak, aby AI nemusela hádať,</li>
        <li>pracovať s dlhšími vstupmi a limitom kontextu,</li>
        <li>chrániť citlivé informácie pomocou princípu minimal disclosure,</li>
        <li>zlepšiť kvalitu výstupov bez zmeny nástroja.</li>
      </ul>

      <h2>1️⃣ „Kontext kompas": rýchla karta, ktorá ti ušetrí nervy</h2>
      <p>Toto je tvoja pomôcka pre M3. Keď nevieš, ako začať, otvor si ju a len doplň prázdne miesta. 😉</p>

      <h3>🧩 5 vrstiev kontextu (tvoj základný layout)</h3>
      <p>Toto je M3 ekvivalent k M2 stavebnici. Nie vždy potrebuješ všetkých 5, ale keď sa odpovede kazia, práve tu býva problém.</p>
      <ol>
        <li>👤 <strong>Rola</strong> – kto má AI byť a z akej optiky odpovedá</li>
        <li>📏 <strong>Pravidlá</strong> – čo musí dodržať / čo nesmie (hranice, citlivosť, štýl)</li>
        <li>📚 <strong>Zdroje / režim faktov</strong> – z čoho môže čerpať a čo spraví, keď nevie</li>
        <li>🎯 <strong>Úloha</strong> – čo presne má spraviť (1 jasná veta)</li>
        <li>🧾 <strong>Formát</strong> – ako má vyzerať výstup, aby sa dal hneď použiť</li>
      </ol>

      <h3>🧱 Stabilné vs 🎯 Aktuálne (trik kontext inžinieringu, ktorý robí odpovede konzistentné)</h3>
      <p>Rozdeľ kontext na dva košíky. Je to jednoduché, ale brutálne účinné:</p>
      <p><strong>🧱 Stabilné (platí stále)</strong></p>
      <ul>
        <li>štýl: „stručne, prakticky, bez žargónu"</li>
        <li>pravidlá: „nevymýšľaj, radšej sa opýtaj"</li>
        <li>citlivosť: „bez osobných údajov, používaj placeholdery"</li>
        <li>zdroje: „bez webu" / „len z textu"</li>
      </ul>
      <p><strong>🎯 Aktuálne (platí len teraz)</strong></p>
      <ul>
        <li>situácia + podmienky (rozpočet, čas, preferencie)</li>
        <li>priority (1–3)</li>
        <li>deal-breaker (čo nechceš)</li>
        <li>konkrétna úloha + výstup</li>
      </ul>

      <h3>✍️ Šablóna „Kontext karta" (kopíruj a doplň)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`👤 Rola: …
📏 Pravidlá: …
📚 Zdroje / režim faktov: … (bez webu / len z textu / ak nevieš, povedz neviem alebo polož 1 otázku)
🎯 Úloha: …
🧾 Formát: …
🧱 Stabilné: …
🎯 Aktuálne: …
Priority (1–3): …
Deal-breaker: …`}
      </div>

      <h3>🧱 3 typické šablóny (hotové copy-paste)</h3>

      <h3>🧩 Šablóna A: Výber / rozhodovanie (mobil, výlet, služba…)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`👤 Rola: Si praktický poradca, ktorý vysvetľuje jednoducho.
📏 Pravidlá: Žiadne marketingové frázy. Uveď aj 1 riziko.
📚 Zdroje: Bez webu. Ak niečo nevieš, povedz neviem alebo polož 1 otázku.
🎯 Úloha: Navrhni 3 možnosti a pomôž mi vybrať.
🧾 Formát: tabuľka (možnosť / prečo áno / prečo nie / riziko) + na konci 1 otázka na spresnenie.
🎯 Aktuálne: [moja situácia].
Priority (1–3): …
Deal-breaker: …`}
      </div>

      <h3>🧩 Šablóna B: Práca so zdrojom (zhrnutie bez domýšľania)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`👤 Rola: Si presný sumarizátor.
📏 Pravidlá: Nevymýšľaj. Ak to v texte nie je, napíš 'nie je uvedené'.
📚 Zdroje: Použi iba text, ktorý ti vložím.
🎯 Úloha: Zhrň text do 5 bodov a ku každému napíš, z ktorej časti textu vychádza.
🧾 Formát: 5 odrážok + na konci 2 otázky, čo by bolo dobré doplniť.`}
      </div>

      <h3>🧩 Šablóna C: Plán / postup (krok za krokom)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`👤 Rola: Si praktický kouč.
📏 Pravidlá: Krok za krokom, realisticky, bez preháňania.
📚 Zdroje: Bez webu. Keď chýba kľúčový detail, polož 1 otázku.
🎯 Úloha: Navrhni plán na [X dní/týždňov] podľa mojich podmienok.
🧾 Formát: kroky 1–7 + 'čo robiť, keď nestíham'.
🎯 Aktuálne: [moja situácia].
Priority (1–3): …
Deal-breaker: …`}
      </div>

      <h3>🔍 Keď vidíš problém...</h3>
      <p><strong>1) Pomenuj problém jednou vetou</strong></p>
      <p>Vyber si, čo sa stalo (stačí 1):</p>
      <ul>
        <li>„Je to <strong>príliš všeobecné</strong>."</li>
        <li>„Ignoruje to <strong>moje obmedzenie</strong>."</li>
        <li>„Zle pochopilo <strong>cieľ</strong>."</li>
        <li>„Vymýšľa si fakty / je to <strong>nedôveryhodné</strong>."</li>
        <li>„Formát je zlý / je to <strong>nepoužiteľné</strong>."</li>
      </ul>
      <p>👉 Toto je dôležité: AI potrebuje vedieť <em>čo presne opravuje</em>.</p>

      <p><strong>2) Zisti, či je to CHÝBA / ŠUM / KONFLIKT</strong></p>
      <ul>
        <li><strong>Chýba</strong> (niečo podstatné tam nie je) – typicky: priority, deal-breaker, zdrojový režim, publikum</li>
        <li><strong>Šum</strong> (je tam priveľa nepodstatných detailov) – AI sa chytí nesprávnej veci</li>
        <li><strong>Konflikt</strong> (v zadaní sa bijú pravidlá) – napr. „stručne" vs „podrobne", „bez webu" vs „daj presné fakty"</li>
      </ul>

      <p><strong>3) Urob jednu z 5 rýchlych opráv (vyber 1–2)</strong></p>
      <ul>
        <li>🎯 <strong>Daj priority (1–3)</strong></li>
        <li>🚫 <strong>Daj deal-breaker</strong> (čo nesmie spraviť / čomu sa vyhnúť)</li>
        <li>📚 <strong>Nastav režim faktov</strong>: „bez webu / len z textu / ak nevieš, povedz neviem"</li>
        <li>🧾 <strong>Zmeň formát</strong>: tabuľka / kroky / 5 bodov</li>
        <li>❓ <strong>Nech sa opýta 1 otázku</strong> namiesto domýšľania</li>
      </ul>

      <p><strong>4) Použi "opravný prompt" (kopíruj)</strong></p>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`„Stop. Výstup je [príliš všeobecný / ignoruje X / …].
Uprav to tak, aby platilo:
• Priority: 1) … 2) … 3) …
• Deal-breaker: …
• Režim faktov: … (bez webu / len z textu / ak nevieš, povedz neviem)
• Formát: …
Ak ti chýba kľúčová informácia, polož 1 otázku."`}
      </div>

      <h3>Mini príklady (aby si videl, ako to vyzerá)</h3>
      <p><strong>Príliš všeobecné</strong></p>
      <p>„Stop. Je to príliš všeobecné. Priority: 1) fotky večer 2) batéria 3) veľkosť. Deal-breaker: nesmie sa sekať po roku. Daj 3 možnosti + prečo áno/nie + riziko."</p>
      <p><strong>Vymýšľa fakty</strong></p>
      <p>„Stop. Nevymýšľaj. Režim faktov: bez webu, ak nevieš, povedz neviem. Zhrň len to, čo vieme, a polož 1 otázku, čo treba doplniť."</p>
    </PageShell>
  );
}
