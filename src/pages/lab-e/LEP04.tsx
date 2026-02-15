import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-04-dokument");

export default function LEP04() {
  return (
    <PageShell title="3️⃣ Prezentácia ≠ dokument" prev={nav.prev} next={nav.next}>
      <p>Dokument chce byť kompletný. Prezentácia chce byť pochopená <strong>na prvý pohľad</strong>.</p>
      <p>Keď sa prezentácia zmení na dokument, stane sa toto:</p>
      <ul>
        <li>publikum číta → prestáva počúvať,</li>
        <li>ty čítaš slidy → pôsobíš neistý,</li>
        <li>pointa sa stratí v texte.</li>
      </ul>
      <p>👉 <strong>Slide nie je miesto, kde "odovzdáš všetky informácie".</strong> Slide je miesto, kde publiku ukážeš <strong>pointu</strong>.</p>

      <h2>✅ 3 pravidlá, ktoré ťa zachránia</h2>
      <ol>
        <li><strong>1 slide = 1 myšlienka</strong><br />Ak má slide dva rôzne odseky, sú to dva slidy.</li>
        <li><strong>Headline musí byť pointa, nie názov kapitoly</strong><br />Zlé: „Plánovanie týždňa"<br />Dobré: „3 kroky plánovania znížia stres už zajtra"</li>
        <li><strong>Text na slide = minimum. Vysvetlenie patrí do notes.</strong><br />Slide má byť čitateľný z diaľky a pochopiteľný za 3–5 sekúnd.</li>
      </ol>

      <h2>🎤 Slide vs speaker notes</h2>
      <p>Keď nevieš, kam čo patrí, použi toto:</p>
      <h3>Na SLIDE dávaj:</h3>
      <ul>
        <li>headline (pointa)</li>
        <li>1–2 krátke body (max 8–12 slov)</li>
        <li>kľúčové číslo alebo graf (ak je dôležitý)</li>
      </ul>
      <h3>Do SPEAKER NOTES dávaj:</h3>
      <ul>
        <li>vysvetlenie (3–5 viet)</li>
        <li>príklad alebo krátky príbeh</li>
        <li>„čo poviem nahlas", aby to dávalo zmysel</li>
      </ul>
      <p>💡 <strong>Rýchly test:</strong> Ak to potrebuješ čítať, je to pravdepodobne do notes.</p>

      <h2>🧩 Mini príklad pred a po</h2>
      <h3>Pred (dokumentový slide)</h3>
      <p><strong>Plánovanie týždňa</strong></p>
      <p>„Plánovanie týždňa je dôležité, pretože nám pomáha organizovať úlohy, znižovať stres a lepšie pracovať s časom. Odporúča sa vybrať si priority, rozložiť úlohy do dní a nechať si rezervu…"</p>
      <h3>Po (prezentačný slide)</h3>
      <p><strong>3 kroky plánovania znížia stres už zajtra</strong></p>
      <ul>
        <li>Vyber 3 priority</li>
        <li>Daj ich do týždňa ako bloky</li>
        <li>Nechaj 20 % rezervu</li>
      </ul>
      <p><strong>Speaker notes (príklad):</strong></p>
      <p>„Nejde o to naplánovať všetko. Ide o to, aby si vedel, čo je najdôležitejšie. Najprv si vyberiem tri priority na týždeň. Potom ich dám do kalendára ako reálne bloky času. A nakoniec nechám rezervu, lebo vždy príde niečo nečakané."</p>

      <MiniTask title={`Premeň text na \u201Eslide + notes\u201C`}>
        <p><strong>Situácia</strong></p>
        <p>Máš hotový L1_brief_v1. Teraz chceš, aby AI neprodukovala "odseky do slidov", ale čisté slidy s dobrými notes.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Vezmi si svoju mapu/štruktúru (ak ju ešte nemáš, vezmi aspoň 2 hlavné body z input packu).</li>
          <li>Vyber 2 slidy, ktoré by ľudia bežne prepísali ako odsek (najtextovejšie).</li>
          <li>Pre každý urob:
            <ul>
              <li><strong>SLIDE:</strong> headline (max 8 slov) + 1–2 body (max 8–12 slov)</li>
              <li><strong>NOTES:</strong> 3–5 viet vysvetlenia + 1 mini-príklad</li>
            </ul>
          </li>
        </ol>
        <p>Ulož si výsledok ako: <strong>L2_slide_notes_v1</strong></p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Má každý slide <strong>jednu myšlienku</strong>?</li>
          <li>Je headline <strong>pointa</strong>, nie názov kapitoly?</li>
          <li>Dá sa slide pochopiť za <strong>3–5 sekúnd</strong>?</li>
          <li>Je text na slide <strong>krátky</strong> (žiadne odseky)?</li>
          <li>Sú notes naozaj „to, čo poviem nahlas" (nie to isté zopakované)?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď oddelíš slide a notes, prezentácia prestane byť dokument. Zrazu máš slidy, ktoré sa dajú čítať aj sledovať – a ty máš pripravené, čo presne povieš.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktorý slide je najviac \u201Eprezentačný\u201C (nie dokumentový)?`}
        options={[
          { label: "🌕", text: `Headline: \u201E\u00DAvod\u201C Text: 6 viet, čo je obsah prezentácie` },
          { label: "⭐", text: `Headline: \u201EPlánovanie týždňa\u201C Body: 8 odrážok, každá na 2 riadky` },
          { label: "☀️", text: `Headline: \u201E3 kroky, ako plánovať týždeň\u201C Body: 3 krátke odrážky Notes: 4 vety + príklad` },
        ]}
        correct="☀️"
        explanation="Headline je pointa, text je stručný a vysvetlenie je v notes."
      />
    </PageShell>
  );
}
