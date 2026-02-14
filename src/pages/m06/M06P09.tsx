import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M06P09() {
  const nav = getNavContext("m06-09-chyby");
  return (
    <PageShell title={`8\uFE0F\u20E3 Typick\u00E9 chyby pri pou\u017E\u00EDvan\u00ED AI v pr\u00E1ci`} {...nav}>

      <p>(a ako sa im vyhnúť bez stresu)</p>
      <p>AI v práci je ako nový kolega.</p>
      <p>Niekedy ti brutálne pomôže. Niekedy spraví vec priemerne. A občas to znie presvedčivo, aj keď je to mimo.</p>
      <p>👉 Dôležité je vedieť rozpoznať, <strong>kde presne je problém</strong> – a čo spraviť namiesto toho.</p>

      <h3>❌ Chyba 1: Očakávať „wow efekt" pri každom použití 🤯</h3>
      <p><strong>Čo sa stane:</strong></p>
      <p>Skúsiš AI prvýkrát. Urobí „len" 50 % práce. Povieš si: „To nestojí za to, ja som rýchlejší."</p>
      <p><strong>Ako tomu predísť:</strong></p>
      <ul>
        <li>AI nie je génius. Je to <strong>kolega-stážista</strong> — často priemerný, ale rýchly.</li>
        <li>Cieľ nie je, aby písala lepšie než ty. Cieľ je, aby ti <strong>šetrila čas</strong>.</li>
        <li>Úspech = <strong>úspora 30 %</strong>, nie 100 %.</li>
      </ul>
      <p>👉 <strong>Praktické pravidlo:</strong></p>
      <p>Ak AI ušetrí 30 % času pri úlohe, ktorú robíš 20× mesačne, je to cca <strong>6 hodín mesačne</strong>. To sa oplatí.</p>

      <h3>❌ Chyba 2: Zadať príliš málo alebo príliš neurčitý kontext 🧩</h3>
      <p><strong>Čo sa stane:</strong></p>
      <p>Napíšeš: „Napíš mi e-mail." Dostaneš: generický text, ktorý sa nedá použiť.</p>
      <p><strong>Ako tomu predísť:</strong></p>
      <p>Vždy doplň aspoň 4 veci:</p>
      <ul>
        <li><strong>Kto píše</strong> (ty / tím / firma)</li>
        <li><strong>Komu píše</strong> (klient / kolega / manažér)</li>
        <li><strong>Prečo</strong> (cieľ: ospravedlniť sa / informovať / vyžiadať si…)</li>
        <li><strong>Tón</strong> (formálny / ľudský / stručný / urgentný)</li>
      </ul>
      <p>👉 <strong>Praktické pravidlo:</strong></p>
      <p>Keď je výstup generický, 90 % času chýba <strong>publikum + cieľ + formát</strong>.</p>

      <h3>❌ Chyba 3: Slepo veriť výstupu bez kontroly 👀</h3>
      <p><strong>Čo sa stane:</strong></p>
      <p>AI dá odpoveď, ktorá znie dobre. Ty ju skopíruješ a pošleš. Neskôr zistíš chybu: meno, číslo, dátum, alebo nezmysel.</p>
      <p><strong>Ako tomu predísť:</strong></p>
      <ul>
        <li>Vždy si výstup prečítaj — hlavne ak sú tam <strong>čísla, mená, dátumy</strong>.</li>
        <li>Pri dôležitejších veciach over aspoň <strong>1 kľúčový bod</strong>.</li>
        <li>Nezabudni: zodpovednosť je na tebe, nie na AI.</li>
      </ul>
      <p>👉 <strong>Praktické pravidlo:</strong></p>
      <p>Čím viac ide výstup „ďalej" (peniaze, reputácia, právne dopady), tým viac ho kontroluj.</p>

      <h3>❌ Chyba 4: Zdieľať dôverné dáta do verejného AI bez premýšľania 🔐</h3>
      <p><strong>Čo sa stane:</strong></p>
      <p>Skopíruješ do AI konkrétne detaily o klientovi, cene, probléme, interných systémoch.</p>
      <p><strong>Ako tomu predísť:</strong></p>
      <ul>
        <li><strong>Anonymizuj</strong>: mená, čísla, ID, adresy, konkrétne sumy (ak netreba).</li>
        <li><strong>Zovšeobecni</strong>: „veľký klient z priemyslu" namiesto konkrétnej firmy.</li>
        <li>Ak máte interný AI nástroj, je to bezpečnejšie — ale stále kontroluj výstup.</li>
        <li>Ak si nie si istý, radšej sa spýtaj manažéra/právneho.</li>
      </ul>
      <p>👉 <strong>Praktické pravidlo:</strong></p>
      <p>Ak by bolo zle, keby to videl klient, <strong>nedávaj to do verejného AI</strong>.</p>

      <h3>❌ Chyba 5: Zavádzať AI všade naraz („strach, že zaspím dobu") 😅</h3>
      <p><strong>Čo sa stane:</strong></p>
      <p>Chceš AI na všetko: výkazy, zápisy, emaily, analýzy… Výsledok: chaos, chyby, frustrácia.</p>
      <p><strong>Ako tomu predísť:</strong></p>
      <ul>
        <li>Začni s <strong>1 use-casom</strong> s nízkym rizikom (interný email, nie právny text).</li>
        <li>Stabilizuj to <strong>2–3 týždne</strong>.</li>
        <li>Potom pridaj ďalší.</li>
        <li>Prakticky: <strong>max 1 nový use-case za mesiac na osobu</strong>.</li>
      </ul>
      <p>👉 <strong>Praktické pravidlo:</strong></p>
      <p>Pomalé a bezpečné zavádzanie je lepšie než rýchle a problematické.</p>

      <MiniTask title={`\u201ESlepo ver\u00EDm AI\u201C \u2013 \u010Do sprav\u00EDm, ke\u010F sa to stane? (7\u201310 min)`}>
        <p><strong>Situácia</strong></p>
        <p>Si v práci v strese. Máš veľa úloh a príde urgentná požiadavka: Klient reklamuje platbu a chce rýchlu odpoveď. Ty dáš AI prompt typu:</p>
        <p>„Napíš, prosím, odpoveď klientovi na reklamáciu platby. Ospravedlni sa a vysvetli postup."</p>
        <p>AI vráti email, ktorý znie veľmi profesionálne. Ty ho bez kontroly skopíruješ a odošleš.</p>
        <p><strong>Problém</strong></p>
        <p>V texte bolo napríklad:</p>
        <ul>
          <li>nesprávne číslo/suma alebo dátum,</li>
          <li>sľub („vrátime peniaze do 24 hodín"), ktorý nevieš garantovať,</li>
          <li>alebo zavádzajúce tvrdenie („platbu sme už stornovali"), ktoré nie je pravda.</li>
        </ul>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Môže byť klient oprávnene nahnevaný, lebo dostal nepravdivú informáciu?</li>
          <li>Môže mať firma reklamáciu navyše alebo reputačný problém, aj keď to bola „len" chyba v texte?</li>
          <li>Môže vzniknúť právny problém, ak AI do odpovede pridá sľub, ktorý sa potom nedodrží?</li>
          <li>Budem to ja, kto to v praxi „podpísal" a nesie zodpovednosť, hoci to napísala AI?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Aj keď AI znie presvedčivo, stále môže obsahovať nepravdy alebo sľuby, ktoré nemáš potvrdené. Zodpovedné používanie AI znamená, že AI ti pomáha s formuláciou, ale zodpovednosť za fakty a dopady nesieš ty.</p>
      </ExpectedFinding>

      <MiniTest
        question="Použil si AI na prvýkrát, výsledok bol „len OK" a povieš si, že AI je zbytočná. Ktorá chyba to je?"
        options={[
          { label: "🌕", text: "Chyba 1 – očakávať wow efekt" },
          { label: "⭐", text: "Chyba 2 – málo kontextu" },
          { label: "☀️", text: "Chyba 4 – dôverné dáta" },
        ]}
        correct="🌕"
        explanation=""
      />

      <MiniTest
        question={`Zad\u00E1\u0161 \u201ENap\u00ED\u0161 email\u201C a v\u00FDstup je generick\u00FD. \u010Co je najlep\u0161\u00ED \u010Fal\u0161\u00ED krok?`}
        options={[
          { label: "🌕", text: "Skúsiť iný model" },
          { label: "⭐", text: "Doplniť: komu, cieľ, tón a formát" },
          { label: "☀️", text: "Pridať viac emoji" },
        ]}
        correct="⭐"
        explanation=""
      />

      <MiniTest
        question="AI napíše odpoveď klientovi a je tam nesprávna suma. Ktorá chyba to je?"
        options={[
          { label: "🌕", text: "Chyba 2 – málo kontextu" },
          { label: "⭐", text: "Chyba 5 – zavádzanie naraz" },
          { label: "☀️", text: "Chyba 3 – slepá dôvera bez kontroly" },
        ]}
        correct="☀️"
        explanation=""
      />

      <MiniTest
        question={`Chce\u0161 AI zavies\u0165 na v\u0161etky \u00FAlohy naraz, m\u00E1\u0161 10 promptov, ale ni\u010D nepou\u017E\u00EDva\u0161 pravidelne. Ktor\u00E1 chyba to je?`}
        options={[
          { label: "🌕", text: "Chyba 4 – dôverné dáta" },
          { label: "⭐", text: "Chyba 1 – wow efekt" },
          { label: "☀️", text: "Chyba 5 – zavádzanie všade naraz" },
        ]}
        correct="☀️"
        explanation=""
      />

      <MiniTest
        question="Skopíruješ do AI konkrétne údaje o klientovi a interné ID ticketu. Ktorá chyba to je?"
        options={[
          { label: "🌕", text: "Chyba 3 – slepá dôvera" },
          { label: "⭐", text: "Chyba 4 – zdieľanie dôverných dát" },
          { label: "☀️", text: "Chyba 2 – málo kontextu" },
        ]}
        correct="⭐"
        explanation=""
      />
    </PageShell>
  );
}
