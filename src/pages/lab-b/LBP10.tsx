import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-10-kritik");

export default function LBP10() {
  return (
    <PageShell title="9️⃣ AI ako textový kritik" prev={nav.prev} next={nav.next}>
      <p>V tejto lekcii použijeme AI v role, v ktorej je často <strong>najlepšia a najbezpečnejšia</strong>: nie ako autor, ale ako <strong>kritik kvality textu</strong>.</p>
      <p>Keď AI píše celý text od nuly alebo ho „prepíše", môže:</p>
      <ul>
        <li>zmeniť význam,</li>
        <li>pridať nové informácie,</li>
        <li>alebo uhladiť text tak, že stratí pointu.</li>
      </ul>
      <p>👉 Keď je AI kritik, ty máš kontrolu: <strong>AI označí problém, ty rozhodneš, čo upravíš.</strong></p>

      <hr />

      <h3>✅ Pravidlo tejto lekcie: kritik ≠ autor</h3>
      <p>AI má:</p>
      <ol>
        <li>označiť problematickú vetu / úsek,</li>
        <li>povedať, prečo je to problém,</li>
        <li>navrhnúť 1–2 konkrétne opravy tej istej vety.</li>
      </ol>
      <p>AI nemá:</p>
      <ul>
        <li>písať novú verziu celého textu,</li>
        <li>dopĺňať fakty,</li>
        <li>meniť obsah bez tvojho rozhodnutia.</li>
      </ul>

      <hr />

      <h3>🧾 Scorecard (rýchle hodnotenie kvality 0–2)</h3>
      <p>Použi túto mini-scorecard pred a po úprave textu:</p>
      <ul>
        <li><strong>Jasnosť (0–2)</strong>: rozumiem na prvý raz?</li>
        <li><strong>Konkrétnosť (0–2)</strong>: je jasné čo / kto / dokedy / prvý krok?</li>
        <li><strong>Stručnosť (0–2)</strong>: je tam vata alebo opakovanie?</li>
        <li><strong>Riziko (0–2)</strong>: sú tam sľuby, absolútne tvrdenia, sporné fakty?</li>
        <li><strong>Použiteľnosť (0–2)</strong>: je to „na konanie", nie len „na čítanie"?</li>
      </ul>
      <p>👉 Cieľ: po úprave mať aspoň <strong>8/10</strong>.</p>

      <hr />

      <h3>🚩 Čo má kritik vždy hľadať (najčastejšie chyby)</h3>
      <ul>
        <li>neurčité slová: „čoskoro", „priebežne", „neskôr"</li>
        <li>pasívum: „bude riešené" (kto?)</li>
        <li>prázdne sľuby: „urobíme maximum", „čo najskôr"</li>
        <li>viac tém v jednej vete</li>
        <li>AI vata: „je dôležité si uvedomiť…"</li>
      </ul>

      <hr />

      <MiniTask title="Audit textu + oprava vybraných viet">
        <p><strong>Situácia</strong></p>
        <p>Máš text, ktorý znie „OK", ale keď sa naň pozrieš bližšie, je nejasný a má vatu. Chceš ho spraviť použiteľný.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI nasledujúci <strong>Text</strong> a potom <strong>Prompt</strong>. Výstup si ulož a následne si vyber 3 návrhy opráv, ktoré zapracuješ.</p>

        <p><strong>Text (vstup do AI)</strong></p>
        <p>„Ahojte, v najbližšej dobe plánujeme upraviť spôsob, akým posielame požiadavky, aby sa veci riešili efektívnejšie. Prosím, skúste posielať nové požiadavky cez dohodnutý kanál a doplniť potrebné informácie, aby to bolo jasné. Ak niečo nebude jasné, tak sa ozvite a nejako to spolu vyriešime. Ďakujeme za spoluprácu a pochopenie."</p>

        <p><strong>Prompt</strong></p>
        <p>„Správaj sa ako <strong>textový kritik</strong>. Nepíš novú verziu celého textu.</p>
        <ol>
          <li>Ohodnoť text scorecardom (0–2) v oblastiach: jasnosť, konkrétnosť, stručnosť, riziko, použiteľnosť.</li>
          <li>Označ <strong>5 konkrétnych problémov</strong> tak, že vždy:
            <ul>
              <li>cituj vetu alebo úsek,</li>
              <li>pomenuj problém (napr. neurčité slovo, chýba zodpovednosť, vata…),</li>
              <li>navrhni 1–2 konkrétne opravy tej istej vety (krátko).</li>
            </ul>
          </li>
          <li>Napíš sekciu <strong>'Chýbajúce informácie'</strong>: polož 3–5 doplňujúcich otázok (čo/kto/dokedy/prvý krok/výnimky).</li>
          <li>Na konci sprav 'Mini-check': vypíš 3 najdôležitejšie zmeny, ktoré spravia text použiteľný na konanie.</li>
        </ol>
        <p>Pravidlá:</p>
        <ul>
          <li>Nepridávaj nové fakty.</li>
          <li>Nezmeň význam, iba zvyšuj jasnosť a použiteľnosť."</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Označil kritik <strong>konkrétne vety</strong>, nie všeobecné rady?</li>
          <li>Našiel chýbajúce <strong>čo/kto/dokedy/prvý krok</strong>?</li>
          <li>Sú návrhy opráv <strong>krátke a konkrétne</strong> (nie prepis celého textu)?</li>
          <li>Neobjavili sa nové informácie alebo sľuby?</li>
          <li>Po zapracovaní 3 opráv je text viac <strong>na konanie</strong>?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>AI je mimoriadne užitočná ako kritik: vie rýchlo odhaliť nejasnosti, vatu a chýbajúce informácie. Keď ju používaš ako auditora (nie autora), minimalizuješ riziko, že ti „prepíše realitu" a zároveň získaš jasnejší a použiteľnejší text.</p>
      </ExpectedFinding>

      <hr />

      <MiniTest
        question="Ktorý prompt je najlepší, keď chceš kritiku textu bez toho, aby AI prepísala celý text?"
        options={[
          { label: "🌕", text: "\u201EOzna\u010D konkr\u00E9tne problematick\u00E9 vety, vysvetli pre\u010Do s\u00FA probl\u00E9m a navrhni 1\u20132 opravy len pre tieto vety. Nep\u00ED\u0161 nov\u00FA verziu cel\u00E9ho textu.\u201C" },
          { label: "⭐", text: "\u201EPrep\u00ED\u0161 mi cel\u00FD text tak, aby bol lep\u0161\u00ED a profesion\u00E1lnej\u0161\u00ED.\u201C" },
          { label: "☀️", text: "\u201ENap\u00ED\u0161 tri \u00FAplne nov\u00E9 verzie textu v r\u00F4znych \u0161t\u00FDloch a ja si vyberiem.\u201C" },
        ]}
        correct="🌕"
        explanation="Získaš konkrétnu spätnú väzbu a návrhy opráv bez rizika, že AI zmení význam alebo doplní nové informácie."
      />
    </PageShell>
  );
}
