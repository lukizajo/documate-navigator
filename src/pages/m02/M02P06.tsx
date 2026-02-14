import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M02P06() {
  const nav = getNavContext("m02-06-toolbox");
  return (
    <PageShell title="5️⃣ Toolbox" tldr={[
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

    </PageShell>
  );
}
