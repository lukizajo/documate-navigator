import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lc-04-iteracia");

export default function LCP04() {
  return (
    <PageShell title="3️⃣ Iterácia z praxe → extrakcia → upratanie" prev={nav.prev} next={nav.next}>
      <p>Najlepší asistent často nevznikne na prvý pokus. Vznikne tak, že ho necháš spraviť reálnu úlohu, z výsledku vytiahneš pravidlá a potom ich upraceš do krátkej, stabilnej verzie.</p>

      <hr />

      <h2>🔁 Tok práce</h2>
      <ol>
        <li>Najprv rieš reálnu úlohu (čo najbližšie praxi)</li>
        <li>Označ, čo bolo dobré a čo zlé (tón, štruktúra, presnosť)</li>
        <li>Z toho vytiahni pravidlá (čo má robiť nabudúce)</li>
        <li>Uprac pravidlá: odstráň duplicity, zoraď podľa priority, skráť</li>
      </ol>

      <hr />

      <h2>🧠 Prompt vs pravidlo</h2>
      <ul>
        <li>Prompt = zadanie pre konkrétnu úlohu.</li>
        <li>Pravidlo = správanie, ktoré má platiť stále (default).</li>
      </ul>

      <h2>🧩 Z chyby na pravidlo</h2>
      <ul>
        <li><strong>Chyba:</strong> „Asistent mi vždy dá 10 odrážok a je to dlhé."<br /><strong>👉 Pravidlo:</strong> „Odpovedaj max 6 bodmi. Ak je téma široká, navrhni 2 možné štruktúry a nechaj ma vybrať."</li>
        <li><strong>Chyba:</strong> „Keď niečo chýba, domyslí si detaily."<br /><strong>👉 Pravidlo:</strong> „Ak chýbajú vstupy, spýtaj sa max 2 otázky. Nehádaj."</li>
        <li><strong>Chyba:</strong> „Raz píše stroho, inokedy rozvláčne."<br /><strong>👉 Pravidlo:</strong> „Drž rovnaký tón: stručne, vecne, bez vaty. Každý bod max 1 veta."</li>
      </ul>

      <hr />

      <h2>✅ Upratanie pravidiel</h2>
      <ul>
        <li>odstráň duplicity (2 pravidlá s rovnakým významom)</li>
        <li>zoraď podľa priority (čo je dôležitejšie, keď sa pravidlá bijú)</li>
        <li>premeň pravidlá na „ak…, tak…" (aby boli vykonateľné)</li>
      </ul>

      <hr />

      <h2>🧾 Meta-prompt na extrakciu pravidiel</h2>
      <p>„Z tejto konverzácie vytiahni 5–9 pravidiel správania asistenta (tón, formát, postup, hranice, kvalita). Odstráň duplicity. Rozdeľ ich na: MUST / SHOULD / NICE. Pravidlá píš krátko a konkrétne v tvare 'ak…, tak…'."</p>

      <hr />

      <h2>❗ Na čo si dať pozor</h2>
      <ul>
        <li>Nepíš pravidlo za každú drobnú chybu → vznikne chaos. Radšej oprav 1–2 najväčšie problémy.</li>
        <li>Nemeň naraz veľa vecí → nebudeš vedieť, čo zafungovalo.</li>
      </ul>

      <MiniTest
        question={`Ktor\u00E9 2 kroky patria do toku \u201Eiter\u00E1cia z praxe \u2192 extrakcia \u2192 upratanie\u201C? Vyber 2.`}
        options={[
          { label: "🌕", text: "\u201ENajprv nap\u00ED\u0161 3-stranov\u00FD prompt, aby sa u\u017E nikdy ni\u010D nepokazilo.\u201C" },
          { label: "⭐", text: "\u201ENechaj asistenta spravi\u0165 re\u00E1lnu \u00FAlohu a ozna\u010D, \u010Do bolo dobr\u00E9/zl\u00E9.\u201C" },
          { label: "☀️", text: "\u201EZ v\u00FDsledku vytiahni pravidl\u00E1 a odstr\u00E1\u0148 duplicity.\u201C" },
          { label: "🌑", text: "\u201EIgnoruj chyby, ke\u010F to znie presved\u010Divo.\u201C" },
          { label: "🌠", text: "\u201EZme\u0148 naraz 10 pravidiel a d\u00FAfaj, \u017Ee to pom\u00F4\u017Ee.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ iterácia začína reálnym výstupom a spätnou väzbou. ☀️ extrakcia + upratanie robí pravidlá krátke a stabilné."
      />

      <MiniTest
        question="Ktoré 2 chyby najčastejšie opravuješ pomocou pravidiel pri stabilizácii? Vyber 2."
        options={[
          { label: "🌕", text: "\u201EAsistent odpoved\u00E1 pr\u00EDli\u0161 stru\u010Dne v\u017Edy.\u201C" },
          { label: "⭐", text: "\u201EAsistent prid\u00E1va vatu a zbyto\u010Dne dlh\u00E9 odpovede.\u201C" },
          { label: "☀️", text: "\u201EAsistent si dom\u00FD\u0161\u013Ea detaily, ke\u010F ch\u00FDbaj\u00FA vstupy.\u201C" },
          { label: "🌑", text: "\u201EAsistent nepou\u017E\u00EDva dos\u0165 emoji.\u201C" },
          { label: "🌠", text: "\u201EAsistent nikdy nepovie \u201Eahoj\u201C.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ vata a dĺžka sa riešia pravidlami pre formát a stručnosť. ☀️ domýšľanie sa rieši pravidlom: pýtať sa / označiť neistotu."
      />
    </PageShell>
  );
}
