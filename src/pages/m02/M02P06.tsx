import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M02P06() {
  const nav = getNavContext("m02-06-toolbox");
  return (
    <PageShell title="5️⃣ Toolbox a etika" tldr={[
      "Rôzne úlohy = rôzne chatboty – vytvor si vlastný toolbox",
      "Výstup chatbota nie je pravda, je to návrh",
      "Citlivé údaje do chatbotov nepatria",
    ]} {...nav}>

      <h2>Praktické využitie – Toolbox 🔨</h2>
      <p>Rôzne úlohy si žiadajú rôzne nástroje. Cieľom nie je mať jedného favorita, ale vlastný toolbox chatbotov.</p>
      <ul>
        <li><strong>brainstorming</strong> → skôr kreatívnejší chatbot</li>
        <li><strong>fakty a overovanie</strong> → nástroj, ktorý vie pracovať so zdrojmi</li>
        <li><strong>dlhé texty</strong> → chatbot, ktorý zvláda dlhší kontext</li>
        <li><strong>rýchle prehľady</strong> → stručný a vecný model</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Spoliehanie sa len na jedného chatbota – každý má slepé miesta.</li>
        <li>Neoverovanie faktov – plynulá odpoveď neznamená správna odpoveď.</li>
        <li>Výber nástroja podľa popularity namiesto podľa účelu úlohy.</li>
        <li>Slepá dôvera v prvý výstup bez kontroly.</li>
        <li>Zdieľanie citlivých údajov bez rozmýšľania.</li>
      </ul>
      <p>👉 <strong>Ak by si odpoveď nepoužil bez kontroly od kolegu, nepouži ju bez kontroly ani od chatbota.</strong></p>

      <h3>🔍 Keď vidíš problém… (rýchla oprava)</h3>
      <ul>
        <li>Je to príliš všeobecné → <em>„Daj mi 3 konkrétne návrhy + 1 príklad."</em></li>
        <li>Je to ukecané → <em>„Skráť to na 6 bodov."</em></li>
        <li>Chýba ďalší krok → <em>„Čo mám spraviť ako prvé?"</em></li>
        <li>Nesedí tón → <em>„Prepíš to formálnejšie / priateľskejšie / stručnejšie."</em></li>
      </ul>

      <MiniTask title="Reklamácia bez stresu (Grok)">
        <p><strong>Inštrukcia:</strong> Použi Grok! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov)..."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Grok – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá sebavedomejším a odvážnejším štýlom, menej „uhladeným",</li>
          <li>vibe býva viac neformálny (niekedy až „uťatý"),</li>
          <li>štruktúru vie spraviť, ale občas skĺzne do „voľnejšieho" formátu,</li>
          <li>môže častejšie používať vtip, iróniu alebo ľahký sarkazmus,</li>
          <li>pri follow-upe vie odpoveď upraviť, no niekedy treba dôraznejšie pripomenúť formát.</li>
        </ul>
        <p className="mt-2">👉 Pri Groku si všímaj hlavne 🎭 vibe (tón) a disciplínu v dodržaní formátu.</p>
      </ExpectedFinding>

      <h2>Etika a bezpečnosť 🎓</h2>
      <p>Chatbot vie pôsobiť sebavedomo. Niekedy až tak, že máš pocit: „OK, toto znie správne, idem to použiť."</p>
      <p>👉 <strong>Výstup chatbota nie je pravda. Je to návrh.</strong></p>
      <p>A zodpovednosť za to, čo s tým urobíš, má vždy človek — nie nástroj.</p>

      <h3>❓ „Znie to dobre" ≠ „je to správne"</h3>
      <p>Ak ide o fakty, čísla, pravidlá, zdravie, peniaze alebo právo → <strong>overuj</strong>.</p>
      <p>👉 <em>„Uveď, čo je isté a čo je len odhad. Ak si nie si istý, napíš to."</em></p>

      <h3>Overovanie</h3>
      <p>Nepýtaj sa „Je to pravda?" – pýtaj sa <strong>„Ako to overím?"</strong></p>
      <ul>
        <li><em>„Daj mi 3 spôsoby, ako si to viem overiť."</em></li>
        <li><em>„Kde by som to našiel v oficiálnom zdroji? (bez vymýšľania)"</em></li>
        <li><em>„Ak nevieš, povedz ‚neviem'."</em></li>
      </ul>

      <h3>Citlivé údaje do chatbotov nepatria</h3>
      <p>Za citlivé ber napríklad: rodné číslo, číslo dokladu, čísla kariet, heslá, zdravotné informácie, interné firemné informácie, mená a detaily iných ľudí.</p>
      <p>👉 <strong>Ak by si to neposlal neznámemu človeku na internete, neposielaj to ani chatbotovi.</strong></p>
      <p>👉 <em>„Použi anonymizované údaje. Zmeň mená, čísla, adresy – nech ostane len podstata."</em></p>

      <h3>Zodpovednosť máš ty</h3>
      <p>👉 <strong>AI je ako GPS: pomáha, ale volant držíš ty.</strong></p>

      <h3>🔍 Keď vidíš problém… (rýchla diagnostika)</h3>
      <ul>
        <li>Odpoveď je príliš sebavedomá → <em>„Uveď, čo nevieš / čo je neisté."</em></li>
        <li>Zmiešava fakty a domnienky → <em>„Rozdeľ to na: fakty vs predpoklady."</em></li>
        <li>Potrebuješ dôkaz → <em>„Daj mi zdroje alebo kroky na overenie."</em></li>
        <li>Je tam citlivý údaj → STOP. Prepiš prompt s anonymizáciou.</li>
      </ul>

      <MiniTask title="Reklamácia bez stresu (Meta AI)">
        <p><strong>Inštrukcia:</strong> Použi Metu! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov)..."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Meta AI – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá stručnejšie a viac konverzačne, ako v messengeri,</li>
          <li>ide rovno k veci, ale pôsobí menej „formálne",</li>
          <li>štruktúru (body/kroky) niekedy treba vypýtať explicitne,</li>
          <li>emoji/smajlíky sa môžu objaviť častejšie – kontext je „chat v appke",</li>
          <li>pri citlivých témach sa drží opatrného tónu.</li>
        </ul>
      </ExpectedFinding>
    </PageShell>
  );
}
