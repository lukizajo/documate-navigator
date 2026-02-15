import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-08-sablona");

export default function LEP08() {
  return (
    <PageShell title="7️⃣ Šablóna a konektory" prev={nav.prev} next={nav.next}>
      <p>Keď máš hotový obsah, najväčšia brzda nie je AI — je to práca „ručné kopírovanie do šablóny" a nekonečné dolaďovanie formátu.</p>
      <p>V tejto lekcii si ukážeme, ako pracovať tak, aby:</p>
      <ul>
        <li>si <strong>nezničil šablónu</strong> (layout, fonty, rozostupy),</li>
        <li>AI ti pomohla s obsahom, nie s chaosom,</li>
        <li>a aby si vedel použiť konektory/AI nástroje rozumne bez toho, že stratíš kontrolu.</li>
      </ul>

      <h2>🧠 2 pracovné režimy so šablónou</h2>
      <h3>Režim 1: Šablóna je svätá</h3>
      <p>Používaš firemný template a platí:</p>
      <ul>
        <li>nemeníš layout,</li>
        <li>nemeníš fonty,</li>
        <li>nemeníš veľkosti a štýly nadpisov,</li>
        <li>iba dopĺňaš texty, obrázky a grafy.</li>
      </ul>
      <p>Toto je najčastejší reálny scenár.</p>

      <h3>Režim 2: Šablóna je len štart</h3>
      <p>Používaš template ako základ, ale môžeš:</p>
      <ul>
        <li>pridávať nové layouty,</li>
        <li>meniť vizuálne prvky,</li>
        <li>prispôsobiť štýl podľa publika.</li>
      </ul>
      <p>V LABe sa budeme držať primárne Režimu 1, lebo je praktickejší.</p>

      <h2>✅ Ako nezabiť šablónu</h2>
      <p>Najväčšia chyba je povedať AI: „sprav prezentáciu" a potom ju nútiť do template. Správny postup je opačný:</p>
      <ol>
        <li>Najprv obsah v štruktúre (mapa slidov, texty, notes)</li>
        <li>Potom "naplnenie" do šablóny</li>
        <li>Nakoniec kontrola čitateľnosti a pretekajúce texty</li>
      </ol>
      <p>Ak chceš, aby AI šablónu nerozbila, musíš to povedať explicitne:</p>
      <ul>
        <li><strong>nemen layout ani fonty</strong></li>
        <li><strong>doplň iba obsah do existujúcich textových polí</strong></li>
        <li><strong>ak je text dlhý, skráť ho, nie zväčšuj písmo</strong></li>
      </ul>

      <h2>🔌 Konektory a AI nástroje</h2>
      <p>Tu je praktická pointa: konektory ti pomôžu „preniesť" obsah do nástroja, ale stále platí:</p>
      <ul>
        <li>AI nevie, čo je tvoja šablóna „sväté", ak jej to nepovieš,</li>
        <li>a často nevie odhadnúť, koľko textu sa zmestí do boxu.</li>
      </ul>
      <p>Preto konektory používaj hlavne na:</p>
      <ul>
        <li>dopĺňanie textov do pripravených slidov,</li>
        <li>návrhy obrázkov a vizuálov podľa Style DNA,</li>
        <li>generovanie alternatív headline-ov a skrátených verzií.</li>
      </ul>
      <p>A nie na:</p>
      <ul>
        <li>automatickú tvorbu kompletného decku bez kontroly.</li>
      </ul>

      <h2>🧩 Prompt na "naplnenie šablóny"</h2>
      <p>Použi tento typ promptu, keď máš hotové: L4_slide_map_v1 + L2_slide_notes_v1 + L6_style_dna_v1</p>
      <PromptBlock>
        Máš rolu: editor prezentácií.<br />
        Mám hotovú šablónu a nesmieš meniť layout ani fonty.<br />
        Tvoja úloha je doplniť obsah do existujúcich boxov.<br />
        Pravidlá:<br />
        • nemen layout, fonty, veľkosti, rozostupy<br />
        • headline max 8 slov<br />
        • body max 2, každý max 8–12 slov<br />
        • ak sa text nezmestí, skráť ho, nie formát<br />
        • speaker notes píš ako 3–5 viet na slide<br />
        • drž sa Style DNA (typ vizuálu a zákazy)<br /><br />
        Tu je moja mapa slidov: …<br />
        Tu sú moje texty a notes: …<br />
        Tu je moje Style DNA: …<br />
        Výstup: napíš mi pre každý slide:<br />
        • headline<br />
        • body<br />
        • notes<br />
        • návrh vizuálu
      </PromptBlock>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš hotovú mapu, prvé texty/notes a Style DNA. Teraz chceš obsah „naliať" do šablóny bez rozbitia dizajnu.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Skopíruj svoj L6_style_dna_v1.</li>
          <li>Vyber 3 slidy z L4_slide_map_v1.</li>
          <li>Použi prompt vyššie a nechaj AI spraviť finálny obsah pre tieto 3 slidy tak, aby sa zmestil do šablóny.</li>
        </ol>
        <p>Ulož si výsledok ako <strong>L7_template_fill_v1</strong>.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je headline v každom slide max 8 slov?</li>
          <li>Sú na slide najviac 2 body a sú krátke?</li>
          <li>Ak niečo nesedelo do boxu, skrátil sa text namiesto zmeny formátu?</li>
          <li>Je návrh vizuálu v súlade s Style DNA a zákazmi?</li>
          <li>Sú speaker notes použiteľné na reálne rozprávanie?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď AI dáš jasné pravidlá šablóny, prestane "rozbíjať dizajn" a začne riešiť správny problém: skrátiť text, spraviť lepšie headline-y a udržať konzistentný štýl.</p>
      </ExpectedFinding>

      <MiniTest
        question="Čo je najlepší postup, keď sa text nezmestí do boxu v šablóne?"
        options={[
          { label: "🌕", text: "Zmením font na menší, nech sa tam zmestí všetko." },
          { label: "⭐", text: `Rozšírim boxy a posuniem prvky, aby som to \u201Enatlačil\u201C.` },
          { label: "☀️", text: "Skrátim text a nechám formát šablóny nedotknutý." },
        ]}
        correct="☀️"
        explanation="Šablóna drží čitateľnosť a konzistenciu, text sa má prispôsobiť jej."
      />
    </PageShell>
  );
}
