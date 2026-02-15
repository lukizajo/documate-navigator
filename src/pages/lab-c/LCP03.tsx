import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lc-03-specifikacia");

export default function LCP03() {
  return (
    <PageShell title="2️⃣ Špecifikácia asistenta: čo má robiť a ako sa má správať" prev={nav.prev} next={nav.next}>
      <p>Aby bol asistent prenositeľný medzi nástrojmi, potrebuje jasnú špecifikáciu: <strong>čo robí, ako odpovedá a kde má hranice</strong>. Nie je to o dĺžke. Je to o presnosti.</p>

      <hr />

      <h2>🧬 Z čoho sa skladá špecifikácia</h2>
      <ul>
        <li>Rola: kto je asistent (napr. editor, analytik, tréner, konzultant)</li>
        <li>Cieľ: čo má prinášať (výstup a výsledok)</li>
        <li>Publikum: pre koho píše/odpovedá</li>
        <li>Formát odpovedí: body / kroky / tabuľka / checklist</li>
        <li>Postup práce: ako má postupovať (kroky, kontrolné body)</li>
        <li>Hranice: čo nerobiť a kedy sa pýtať</li>
        <li>Kvalita: čo je „dobrá odpoveď" (kritériá)</li>
      </ul>

      <hr />

      <h2>👉 Dobrá vs zlá špecifikácia</h2>
      <p><strong>✅ Dobrá špecifikácia:</strong></p>
      <ul>
        <li>je stručná (5–7 pravidiel), konkrétna a má jasný formát</li>
        <li>obsahuje „čo spraviť pri nejasnosti" (pýtať sa, nie hádať)</li>
        <li>má hranice a kvalitu (čo kontrolovať pred odovzdaním)</li>
      </ul>
      <p><strong>❌ Zlá špecifikácia:</strong></p>
      <ul>
        <li>je vágna („buď užitočný", „odpovedaj pekne")</li>
        <li>je prepálená (20+ pravidiel bez priority)</li>
        <li>nemá formát a nemá pravidlo pre neistotu → AI začne tipovať</li>
      </ul>

      <hr />

      <h2>🎛️ Priority pravidiel</h2>
      <ul>
        <li><strong>MUST HAVE</strong>: bezpečnosť, neistota, formát výstupu</li>
        <li><strong>SHOULD HAVE</strong>: tón a štýl (stručne, vecne, priateľsky…)</li>
        <li><strong>NICE TO HAVE</strong>: bonus tipy, extra varianty, doplnky</li>
      </ul>

      <hr />

      <h2>✅ Rýchla kontrola kvality</h2>
      <ul>
        <li>drží odpoveď dohodnutý formát?</li>
        <li>je to bez vaty a bez „AI rečí"?</li>
        <li>neobsahuje domnienky bez označenia neistoty?</li>
        <li>pýta sa, keď chýbajú vstupy?</li>
      </ul>

      <h2>🔐 Default správanie pri nejasnosti</h2>
      <ul>
        <li>Ak chýba cieľ / publikum / formát alebo podklady, spýtaj sa max 2 otázky a počkaj. Nehádaj.</li>
      </ul>

      <h2>🚫 Stop list</h2>
      <ul>
        <li>Nehalucinuj: ak si nie si istý, označ neistotu a navrhni overenie.</li>
        <li>Nepíš vatu a frázy typu „Ako AI model…".</li>
        <li>Nedávaj 10 možností, keď pýtam 3.</li>
      </ul>

      <MiniTest
        question="Ktoré 2 položky patria do dobrého Assistant Spec? Vyber 2."
        options={[
          { label: "🌕", text: "\u201EOb\u013E\u00FAben\u00E1 farba asistenta\u201C" },
          { label: "⭐", text: "\u201EForm\u00E1t odpoved\u00ED (napr. kroky, body, checklist)\u201C" },
          { label: "☀️", text: "\u201EPublikum (pre koho to je)\u201C" },
          { label: "🌑", text: "\u201EN\u00E1hodn\u00E9 zauj\u00EDmavosti, aby p\u00F4sobil \u013Eudskej\u0161ie\u201C" },
          { label: "🌠", text: "\u201EPo\u010Det emotikonov na konci ka\u017Edej vety\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ formát ti stabilizuje výstup (ako má odpoveď vyzerať). ☀️ publikum určuje tón, hĺbku a slovník."
      />

      <MiniTest
        question="Ktoré 2 formulácie sú najlepšie napísané ako pravidlo správania (nie ako želanie)? Vyber 2."
        options={[
          { label: "🌕", text: "\u201EBu\u010F pros\u00EDm m\u00FAdr\u00FD a kreat\u00EDvny.\u201C" },
          { label: "⭐", text: "\u201EAk je zadanie nejasn\u00E9, sp\u00FDtaj sa 2 dop\u013E\u0148uj\u00FAce ot\u00E1zky.\u201C" },
          { label: "☀️", text: "\u201ENepou\u017E\u00EDvaj v\u00FDmysly. Ak si nie si ist\u00FD, ozna\u010D neistotu a navrhni overenie.\u201C" },
          { label: "🌑", text: "\u201EChcem, aby si bol lep\u0161\u00ED.\u201C" },
          { label: "🌠", text: "\u201EOdpovedaj pekne.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ je to konkrétne správanie v jasnej situácii. ☀️ je to kontrola kvality: čo robiť pri neistote."
      />
    </PageShell>
  );
}
