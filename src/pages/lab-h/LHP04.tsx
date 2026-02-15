import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding, MiniTest, PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-04-generovanie");

export default function LHP04() {
  return (
    <PageShell title="3️⃣ Generovanie hudby: prompt, varianty a kontrolovaná iterácia 🎧" prev={nav.prev} next={nav.next}>
      <p>V predchádzajúcich lekciách si si ujasnil účel hudby (intro vs pozadie) a pripravil brief. Teraz to premeníme na <strong>prompt</strong>, ktorý vieš skopírovať do nástroja a dostať z neho použiteľné výstupy.</p>
      <p>Cieľ tejto lekcie je jednoduchý: generovať kontrolovane — nie "skúšať dookola", kým sa niečo podarí.</p>

      <h3>🧩 Prompt na hudbu = brief v jednej správe</h3>
      <p>Keď AI nedáš jasné mantinely, doplní si ich sama. Preto prompt skladáme z vecí, ktoré už máš hotové z lekcie 2.</p>
      <p><strong>✅ Univerzálna šablóna promptu (minimum):</strong></p>
      <ul>
        <li>účel (intro / pozadie)</li>
        <li>dĺžka (konkrétne sekundy)</li>
        <li>mood (3 slová)</li>
        <li>energia (nízka/stredná/vyššia)</li>
        <li>(voliteľné) štýl/nástroje (1 veta)</li>
        <li>NESMIE (2×)</li>
      </ul>
      <p>💡 <strong>Tip:</strong> Čím je hudba "užitočnejšia" (pod hlas, do videa), tým viac vyhráva <strong>jednoduchosť a obmedzenia</strong>.</p>

      <h3>🧠 Dve vrstvy promptu (aby sa to nemiešalo)</h3>
      <p>Aby prompt nebol chaos, rozdeľ ho na dve časti:</p>
      <p><strong>👉 ČO (účel a použitie)</strong></p>
      <ul>
        <li>kde to použijem (pod hlas / intro)</li>
        <li>čo má hudba robiť (podporiť, nerušiť)</li>
        <li>dĺžka</li>
      </ul>
      <p><strong>👉 AKO (štýl a mantinely)</strong></p>
      <ul>
        <li>mood (3 slová)</li>
        <li>energia</li>
        <li>(voliteľné) štýl/nástroje</li>
        <li>NESMIE (2×)</li>
      </ul>
      <p>Toto rozdelenie ti pomôže hlavne pri iteráciách — vieš, či upravuješ "čo" alebo "ako".</p>

      <h3>🔁 3–1–1 v prompte</h3>
      <p>3–1–1 nie je len rada. Je to spôsob, ako napísať varianty tak, aby si vedel, <strong>prečo</strong> sa výsledok mení.</p>
      <p>✅ Pravidlo: <strong>varianty sa líšia iba v 1 veci.</strong> Inak nevieš, čo pomohlo.</p>
      <p>Príklady "jednej zmeny":</p>
      <ul>
        <li>Variant A: energia nižšia</li>
        <li>Variant B: menej nástrojov / jednoduchšie</li>
        <li>Variant C: ešte viac stabilné (bez zmien)</li>
      </ul>

      <p><strong>✅ Rubrika výberu (3 otázky)</strong></p>
      <p>Keď si pustíš 3 výstupy, nevyberaj "najkrajší". Vyber "najpoužiteľnejší":</p>
      <ol>
        <li><strong>Neruší hlas / pointu?</strong></li>
        <li><strong>Je stabilný (bez dramatických zlomov)?</strong></li>
        <li><strong>Sedí účelu (intro vs pozadie)?</strong></li>
      </ol>
      <p>Ak niektorá odpoveď znie "nie", v ďalšom kroku nemeníš všetko — spravíš <strong>1 iteráciu</strong>.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Prompt bez "NESMIE" → AI často spraví highlighty (drop, zmeny), ktoré rušia</li>
        <li>Varianty meníš naraz v 3 veciach → nevieš, čo zabralo</li>
        <li>Iteruješ bez cieľa → len zbieraš pokusy, ale nelepšie výsledky</li>
        <li>Pozadie pod hlas robíš príliš "hudobné" → znie pekne, ale nepoužiteľne</li>
      </ul>

      <MiniTask title="Prompt → 3 varianty → výber → 1 iterácia">
        <p><strong>Situácia</strong></p>
        <p>Máš pripravený brief z lekcie 2 (intro a/alebo pozadie). Teraz chceš reálne vygenerovať hudbu tak, aby si si vedel vybrať a výsledok doladiť bez chaosu.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Z briefu sprav prompt podľa šablóny. Potom sprav 3 varianty (každý sa líši iba v jednej veci). Vyber 1 a sprav 1 iteráciu (iba jednu zmenu), aby bol výstup použiteľnejší.</p>
        <PromptBlock>{`Správaj sa ako audio producent. Pomôž mi vytvoriť prompt na generovanie hudby a pripraviť 3 kontrolované varianty.
Tu je môj brief:
[vlož brief z lekcie 2 – intro alebo pozadie]

1. Premeň brief na finálny prompt v dvoch blokoch:
• ČO (účel, použitie, dĺžka)
• AKO (mood, energia, voliteľne štýl/nástroje, NESMIE)
2. Urob 3 varianty promptu, kde sa vždy zmení iba 1 vec:
• Variant A: [zmeň iba energiu]
• Variant B: [zmeň iba jednoduchosť/nástroje]
• Variant C: [zmeň iba stabilitu – "bez zmien / bez highlightov"]
3. Daj mi 3-bodovú rubriku výberu (max 3 otázky), podľa ktorej si vyberiem najpoužiteľnejší výsledok.
4. Keď ti poviem, ktorý variant som vybral, navrhni 1 iteráciu: uprav iba jednu vec, aby to bolo ešte použiteľnejšie (napr. "menej výrazné", "nižšia energia", "bez melódie").`}</PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sú všetky 3 varianty rozdielne len v 1 veci?</li>
          <li>Má prompt jasnú dĺžku v sekundách?</li>
          <li>Obsahuje prompt 2× NESMIE?</li>
          <li>Vybral som verziu podľa rubriky (nie podľa "wow")?</li>
          <li>Iterácia mení iba jednu vec?</li>
        </ul>
        <ExpectedFinding>
          Keď prompt postavíš na účele + dĺžke + 3 slovách mood + 2 zákazoch a varianty meníš len po jednej veci, generovanie prestane byť lotéria a začne byť ovládateľný proces.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktorý prompt je najlepší pre pozadie pod hlas?"
        options={[
          { label: "🌕", text: "\u201ESprav mi modernú profesionálnu hudbu, nech je to zaujímavé a má to energiu.\u201C" },
          { label: "⭐", text: "\u201EPozadie 25 s, stabilné a vhodné na loop. Mood: čisté, moderné, pokojné. Energia nízka. NESMIE: výrazná melódia, dramatické zmeny.\u201C" },
          { label: "☀️", text: "\u201EEpické intro 10 s s výrazným refrénom a gradáciou, nech to znie bombovo.\u201C" },
        ]}
        correct="⭐"
        explanation="Má jasný účel, dĺžku, mood, energiu a konkrétne obmedzenia — presne to, čo potrebuje pozadie pod hlas."
      />
    </PageShell>
  );
}
