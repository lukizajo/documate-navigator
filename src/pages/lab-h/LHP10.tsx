import { PageShell } from "@/components/PageShell";
import { ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-10-prakticka-uloha");

export default function LHP10() {
  return (
    <PageShell title="🎓 Praktická úloha – AI hudba v praxi (tvoj vlastný sound pack)" prev={nav.prev} next={nav.next}>
      <p>Cieľom nie je spraviť "dokonalú skladbu", ale vedome použiť stavebné bloky z LABu: <strong>účel, brief, generovanie (3–1–1), loop, SFX, balík, licencia</strong>.</p>

      <h2>Zadanie</h2>
      <p>Priprav <strong>mini sound pack</strong> pre jeden konkrétny projekt (vyber si jednu tému/use-case):</p>
      <ol type="a">
        <li>Podcast epizóda (intro + pozadie pod hlas)</li>
        <li>Reels / krátke video (pozadie + prechody)</li>
        <li>Prezentácia / web (intro + UI zvuky)</li>
      </ol>

      <h3>Požiadavky na výsledok</h3>
      <ul>
        <li>všetky zvuky musia pôsobiť <strong>konzistentne</strong> (rovnaký mood, podobná energia, rovnaká "povaha" zvuku)</li>
        <li>výsledok musí byť <strong>použiteľný</strong> (nie len "pekný")</li>
        <li>pozadie musí byť <strong>vhodné na loop</strong> (bez počuteľného "švu")</li>
        <li>musíš mať minimálne <strong>2 SFX</strong> (transition + confirm), ideálne s A/B variantami</li>
        <li>musíš mať pripravený priečinok sound packu: music/, sfx/, export/</li>
        <li>musíš mať licenčný checkpoint: LICENSE_NOTE.txt (STOP-rule)</li>
      </ul>

      <h2>Tvoja úloha</h2>

      <h3>1️⃣ Ujasni účel (1–2 min)</h3>
      <ul>
        <li>Budeš robiť <strong>intro</strong>, <strong>pozadie</strong>, alebo <strong>oboje</strong>?</li>
        <li>Je v obsahu <strong>hlas</strong>? (ak áno: hlas je šéf)</li>
      </ul>

      <h3>2️⃣ Napíš brief (MUST HAVE)</h3>
      <p>Napíš si brief v jednej správe:</p>
      <ul>
        <li>účel</li>
        <li>dĺžka (intro 7–10 s / pozadie 20–30 s)</li>
        <li>mood (3 slová)</li>
        <li>energia (nízka/stredná/vyššia)</li>
        <li>NESMIE (2 zákazy)</li>
        <li>(voliteľne) štýl/nástroje (1 veta)</li>
      </ul>

      <h3>3️⃣ Vygeneruj 3 varianty (3–1–1)</h3>
      <ul>
        <li>sprav <strong>3 varianty</strong>, ktoré sa líšia vždy len v <strong>1 veci</strong></li>
        <li>vyber <strong>1 najpoužiteľnejší</strong> podľa rubriky:
          <ul>
            <li>neruší hlas/pointu?</li>
            <li>je stabilný (bez highlightov)?</li>
            <li>sedí účelu?</li>
          </ul>
        </li>
      </ul>

      <h3>4️⃣ Sprav 1 iteráciu (len 1 zmena)</h3>
      <ul>
        <li>uprav iba jednu vec (napr. "nižšia energia" alebo "menej melódie")</li>
      </ul>

      <h3>5️⃣ Urob loop a otestuj "šev"</h3>
      <ul>
        <li>priprav pozadie 20–30 s vhodné na loop</li>
        <li>otestuj: pusti 2× za sebou, či "šev" počuť</li>
        <li>ak áno, uprav iba 1 vec: stabilita / menej highlightov / hladší koniec</li>
      </ul>

      <h3>6️⃣ Vytvor SFX (transition + confirm)</h3>
      <ul>
        <li>vytvor 2 typy: <strong>transition</strong> (0.3–0.8 s) a <strong>confirm</strong> (0.1–0.4 s)</li>
        <li>sprav A/B varianty: <strong>soft</strong> vs <strong>clear</strong></li>
        <li>vyber z každého typu 1 variant do exportu</li>
      </ul>

      <h3>7️⃣ Zabaľ to do sound packu</h3>
      <p>Vytvor priečinok:</p>
      <ul>
        <li>ProjectName_SoundPack/
          <ul>
            <li>music/</li>
            <li>sfx/</li>
            <li>export/</li>
          </ul>
        </li>
      </ul>
      <p>Pomenuj súbory jasne (typ + dĺžka + charakter + verzia/kus), napr.:</p>
      <ul>
        <li>intro_08s_clean_v1.wav</li>
        <li>bg_loop_30s_calm_v2.wav</li>
        <li>sfx_transition_soft_01.wav</li>
        <li>sfx_confirm_clean_01.wav</li>
      </ul>
      <p>Do export/ daj len finálne vybrané súbory.</p>

      <h3>8️⃣ Licencia (STOP-rule)</h3>
      <p>Vytvor LICENSE_NOTE.txt a odpíš si:</p>
      <ul>
        <li>komerčné použitie</li>
        <li>atribúcia</li>
        <li>redistribúcia súborov (zdieľanie)</li>
        <li>úpravy (edit/loop/mix)</li>
      </ul>
      <p>Bez jasnej licencie → nepoužívam.</p>

      <h2>✅ Výstup</h2>
      <p>V export/ máš minimálne:</p>
      <ul>
        <li>1× intro (7–10 s) <strong>alebo</strong> aspoň 1× pozadie (20–30 s loop)</li>
        <li>1× pozadie loop (ak máš hlas, odporúčané)</li>
        <li>1× transition SFX</li>
        <li>1× confirm SFX</li>
        <li>v priečinku: LICENSE_NOTE.txt</li>
      </ul>

      <h3>❓ Sebakontrola (ÁNO/NIE)</h3>
      <ul>
        <li>Znie intro a pozadie ako jeden projekt (mood/energia)?</li>
        <li>Pozadie viem pustiť 2× za sebou bez počuteľného "švu"?</li>
        <li>SFX sú krátke, jemné a nerušivé?</li>
        <li>Názvy súborov sú zrozumiteľné a verzované?</li>
        <li>Mám export/ a viem okamžite použiť finálne súbory?</li>
        <li>Mám LICENSE_NOTE.txt a som si istý použitím?</li>
      </ul>

      <ExpectedFinding>
        Na konci nebudeš mať len "AI hudbu", ale <strong>hotový zvukový balík</strong> pre konkrétny projekt: konzistentný, loopovateľný, so SFX, dobre pomenovaný a s licenčnou istotou.
      </ExpectedFinding>
    </PageShell>
  );
}
