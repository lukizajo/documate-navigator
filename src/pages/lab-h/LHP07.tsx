import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding, MiniTest, PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-07-balik");

export default function LHP07() {
  return (
    <PageShell title="6️⃣ Zvukový balík: aby si mal audio pripravené na použitie" prev={nav.prev} next={nav.next}>
      <p>Keď máš hotové intro, pozadie a SFX, ešte to neznamená, že to vieš rýchlo použiť. Väčšina chaosu vzniká až potom: súbory sú rozhádzané, názvy sú nejasné, nevieš čo je posledná verzia a po mesiaci si nepamätáš, ktorý zvuk bol na čo.</p>
      <p>Táto lekcia je o tom, ako z "náhodných výstupov" spraviť <strong>zvukový balík</strong>, ktorý je konzistentný, zrozumiteľný a pripravený na reálne použitie.</p>

      <h3>🎯 Prečo vôbec robiť zvukový balík</h3>
      <p>Zvukový balík je tvoj malý "brand kit" pre audio. Pomôže ti, aby:</p>
      <ul>
        <li>si mal všetko na jednom mieste,</li>
        <li>si vedel rýchlo vybrať správny súbor,</li>
        <li>projekt znel konzistentne (nie ako mix náhodných štýlov),</li>
        <li>a vedel si sa k tomu vrátiť aj o mesiac bez hľadania.</li>
      </ul>

      <h3>✅ Minimum balíka (80 % prípadov)</h3>
      <p>Na väčšinu obsahu ti stačí:</p>
      <ul>
        <li><strong>intro</strong> (7–10 s)</li>
        <li><strong>background loop</strong> (20–30 s)</li>
        <li><strong>transition SFX</strong> (prechod)</li>
        <li><strong>confirm SFX</strong> (potvrdenie)</li>
      </ul>
      <p>Ak toto máš a znie to konzistentne, máš vyhrané.</p>

      <h3>🎛️ Konzistentnosť: čo má držať pokope</h3>
      <p>Aby to pôsobilo ako jeden projekt, drž tieto tri veci:</p>
      <ul>
        <li><strong>mood</strong> (rovnaké 3 slová)</li>
        <li><strong>energia</strong> (podobná intenzita)</li>
        <li><strong>zvuková povaha</strong> (organické / digitálne / kinematické – nemixovať bez dôvodu)</li>
      </ul>
      <p>💡 <strong>Tip do praxe:</strong> Intro môže byť o trochu výraznejšie, ale stále musí znieť ako "z rovnakého sveta" ako pozadie.</p>

      <h3>🗂️ Štruktúra priečinkov (jednoduchá a funkčná)</h3>
      <p>Odporúčam jednu jednoduchú šablónu:</p>
      <ul>
        <li>ProjectName_SoundPack/
          <ul>
            <li>music/ (intro + background)</li>
            <li>sfx/ (transition + confirm)</li>
            <li>export/ (len finálne vybrané súbory)</li>
          </ul>
        </li>
      </ul>
      <p>Prečo export/? Aby si vždy vedel, čo je "hotové na použitie", bez hľadania medzi verziami.</p>

      <h3>🏷️ Názvy súborov: aby si hneď vedel, čo držíš v ruke</h3>
      <p>Dobrý názov súboru ti povie:</p>
      <ul>
        <li><strong>typ</strong> (intro / bg_loop / sfx_transition / sfx_confirm)</li>
        <li><strong>dĺžku</strong> (pri hudbe)</li>
        <li><strong>charakter</strong> (napr. calm/clean/soft)</li>
        <li><strong>verziu alebo kus</strong></li>
      </ul>
      <p>👉 Zjednotená konvencia:</p>
      <ul>
        <li>pre <strong>hudbu</strong> používaj verzie: v1 / v2 / v3</li>
        <li>pre <strong>SFX</strong> používaj kusy: 01 / 02 / 03 (rôzne varianty)</li>
      </ul>
      <p>Príklady:</p>
      <ul>
        <li>intro_08s_clean_v1.wav</li>
        <li>bg_loop_30s_calm_v2.wav</li>
        <li>sfx_transition_soft_01.wav</li>
        <li>sfx_confirm_clean_01.wav</li>
      </ul>

      <h3>✅ "FINAL" pravidlo (aby sa ti to nerozsypalo)</h3>
      <p>Vyber si jednu z možností a drž sa jej:</p>
      <ul>
        <li>buď dáš finálne súbory do export/</li>
        <li>alebo do názvu pridáš FINAL</li>
      </ul>
      <p>Napr.: bg_loop_30s_calm_v2_FINAL.wav</p>
      <p>💡 <strong>Tip:</strong> Najčistejšie je mať export/ a v názvoch ponechať len verzie/kusy bez "final_final".</p>

      <h3>✅ Kontrola konzistentnosti (5 rýchlych otázok)</h3>
      <p>Predtým než balík označíš ako hotový, prebehni si:</p>
      <ul>
        <li>Znie <strong>intro</strong> a <strong>pozadie</strong> ako rovnaký projekt? (mood/energia)</li>
        <li>Je pozadie stabilné a vhodné na loop (bez "momentov")?</li>
        <li>Sú SFX v rovnakej zvukovej povahe ako hudba?</li>
        <li>Nie je nič zbytočne ostré, dlhé alebo rušivé?</li>
        <li>Viem do 10 sekúnd nájsť správny súbor podľa názvu?</li>
      </ul>

      <MiniTask title="Zabaľ svoj projekt do zvukového balíka">
        <p><strong>Situácia</strong></p>
        <p>Máš hotové intro, loop pozadie a 2 SFX. Teraz to chceš uložiť tak, aby si to vedel okamžite použiť v hocijakom nástroji (video, prezentácia, podcast) a nestratil sa v tom.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vytvor štruktúru priečinka, pomenuj súbory, sprav export/ a dopíš krátku "readme" poznámku. Potom sprav kontrolu konzistentnosti.</p>
        <PromptBlock>{`Správaj sa ako audio producent. Pomôž mi zorganizovať môj zvukový balík tak, aby bol pripravený na použitie a konzistentný.
Môj projekt: [1 veta]
Mood (3 slová): [___, ___, ___]
Zvuková povaha: [organické / digitálne / kinematické]
Navrhni:
1. štruktúru priečinkov: ProjectName_SoundPack/ + music/ + sfx/ + export/
2. názvy súborov pre:
• intro (7–10 s) vo verziách v1/v2
• bg_loop (20–30 s) vo verziách v1/v2
• sfx_transition (varianty 01/02)
• sfx_confirm (varianty 01/02)
3. krátku "README" poznámku (3–5 odrážok):
• kde používam intro
• kde používam loop
• kedy používam transition
• kedy používam confirm
4. 5-bodový checklist konzistentnosti (áno/nie)`}</PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Viem hneď z názvu súboru, čo to je a či je to verzia alebo kus?</li>
          <li>Mám finálne súbory oddelené v export/?</li>
          <li>Znie intro a pozadie ako rovnaký projekt (mood/energia)?</li>
          <li>SFX sedia "povahou" k hudbe?</li>
          <li>Viem to nájsť o mesiac bez hľadania?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že rozdiel medzi "hrám sa s AI" a "mám použiteľný výstup" je najmä organizácia a konzistentnosť — nie ďalšie generovanie.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktorý názov súboru je najlepší pre pozadie v zvukovom balíku?"
        options={[
          { label: "🌕", text: "final_mix_new.wav" },
          { label: "⭐", text: "hudba_pozadie.wav" },
          { label: "☀️", text: "bg_loop_30s_calm_v2.wav" },
        ]}
        correct="☀️"
        explanation="Z názvu hneď vidíš typ, dĺžku, charakter aj verziu."
      />
    </PageShell>
  );
}
