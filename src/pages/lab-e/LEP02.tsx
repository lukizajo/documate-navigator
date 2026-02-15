import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-02-brief");

export default function LEP02() {
  return (
    <PageShell title="1️⃣ Brief & Input pack" prev={nav.prev} next={nav.next}>
      <p>V tomto LABe platí jednoduché pravidlo: <strong>kvalita prezentácie začína ešte pred prvým slidom</strong>.</p>
      <p>Ak AI nedáš brief, spraví ti „nejakú prezentáciu" – často generickú, preplnenú textom alebo s tvrdeniami, ktoré nevieš obhájiť.</p>
      <p>👉 Brief je tvoj spôsob, ako AI povedať: <strong>„Toto je smer, toto sú hranice, toto je výsledok."</strong></p>

      <h2>🧠 Prečo je brief deal-breaker</h2>
      <p>Bez briefu AI typicky urobí 3 chyby:</p>
      <ul>
        <li><strong>zle trafí cieľ</strong> (iný tón, iná hĺbka, iné publikum),</li>
        <li>použije <strong>generickú štruktúru</strong> (Úvod/Agenda/Záver…),</li>
        <li>doplní <strong>vatu alebo neoverené tvrdenia</strong>, aby to pôsobilo "hotovo".</li>
      </ul>

      <h2>✅ Šablóna briefu</h2>
      <p>Skopíruj a doplň. Toto je minimálny brief, ktorý funguje skoro vždy:</p>
      <ol>
        <li><strong>Téma:</strong></li>
        <li><strong>Cieľ prezentácie (1 veta):</strong> (čo má publikum pochopiť/urobiť)</li>
        <li><strong>Publikum:</strong> (kto to je + čo už vie)</li>
        <li><strong>Situácia:</strong> (meeting / klient / interné / konferencia)</li>
        <li><strong>Dĺžka:</strong> (čas alebo počet slidov)</li>
        <li><strong>One message:</strong> (1 hlavná myšlienka, ktorú si majú odniesť)</li>
        <li><strong>CTA:</strong> (čo má nasledovať po prezentácii)</li>
        <li><strong>Tone of voice:</strong> (formálne / priateľské / stručné / presvedčivé)</li>
        <li><strong>Obmedzenia:</strong> (čo nesmie byť použité, citlivé údaje, interné čísla)</li>
        <li><strong>Šablóna/dizajn:</strong> (mám šablónu? ak áno – <em>nemen layout/fonty</em>)</li>
      </ol>
      <p>💡 <strong>Tip:</strong> Ak nevieš napísať <strong>One message</strong> jednou vetou, téma je ešte príliš široká.</p>

      <h2>📦 Input pack: čo dať AI ako podklady</h2>
      <p>AI je dobrá v štruktúre a formuláciách – <strong>nie v hádaní, čo je dôležité</strong>.</p>
      <h3>✅ Čo je dobrý input pack</h3>
      <ul>
        <li>krátke poznámky k téme (kľudne odrážky),</li>
        <li>5–15 kľúčových bodov (čo nesmie chýbať),</li>
        <li>čísla a fakty <strong>so zdrojom a dátumom</strong>,</li>
        <li>interný kontext (ak je to interné).</li>
      </ul>
      <h3>❌ Čo tam radšej nedávať</h3>
      <ul>
        <li>citlivé údaje, ktoré nemajú opustiť firmu,</li>
        <li>neupratané „všetko zložím do AI" (AI sa v tom utopí),</li>
        <li>čísla bez zdroja (AI ich zvykne domyslieť).</li>
      </ul>
      <p>💡 <strong>Praktický trik:</strong> Ak máš dlhý dokument, najprv si vypýtaj <strong>1-stranový výťah</strong> (čo je podstatné) a až z neho rob prezentáciu.</p>

      <h2>🧭 Dva režimy práce</h2>
      <ul>
        <li><strong>Režim A – mám spracovanú tému:</strong> AI z briefu + podkladov spraví návrh štruktúry a mapu slidov.</li>
        <li><strong>Režim B – tému ešte nemám:</strong> AI mi pomôže vytvoriť podklady (input pack) a až potom štruktúru.</li>
      </ul>

      <h3>Prompt A – keď už máš spracovanú tému</h3>
      <PromptBlock>
        „Správaj sa ako skúsený lektor prezentácií.<br />
        Tu je môj BRIEF (10 bodov) a INPUT PACK.<br /><br />
        1. Najprv potvrď, že si brief pochopil: zhrň cieľ + one message jednou vetou.<br />
        2. Navrhni 2 možné štruktúry prezentácie (8–10 slidov).<br />
        3. Ku každému slidu napíš: headline (max 8 slov) + 1 vetu pointy.<br />
        4. Označ 3 miesta, kde hrozí vata/nejasnosť, a navrhni opravu.<br /><br />
        <strong>BRIEF – príklad (vyplnený):</strong><br />
        1. Téma: Ako si zjednodušiť týždenné plánovanie (práca + voľno)<br />
        2. Cieľ: Aby si publikum odnieslo 1 jednoduchý postup a zajtra ho vedelo použiť<br />
        3. Publikum: Bežní ľudia (25–60), nechcú teóriu, chcú praktický systém<br />
        4. Situácia: Krátka prezentácia pre kolegov / priateľov (10 min)<br />
        5. Dĺžka: 8 slidov<br />
        6. One message: Keď plánuješ týždeň v 3 krokoch, ušetríš čas aj stres<br />
        7. CTA: Vybrať si 3 priority a naplánovať prvý deň podľa šablóny<br />
        8. Tone of voice: priateľské, stručné, bez „motivačných rečí"<br />
        9. Obmedzenia: Bez osobných údajov, bez citlivých detailov<br />
        10. Šablóna/dizajn: Ak dám šablónu, <strong>nemen layout ani fonty</strong>, iba text<br /><br />
        <strong>INPUT PACK – príklad:</strong><br />
        • 3 kroky plánovania: (1) priority, (2) časové bloky, (3) rezerva<br />
        • Najčastejšie chyby: plán bez rezervy, príliš veľa úloh, nulová energia v kalendári<br />
        • Príklad: „pondelok – 1 veľká vec + 2 malé + 30 min rezerva"<br />
        • Bonus: 2 tipy na udržanie návyku (rovnaký čas plánovania, jednoduchá šablóna)"
      </PromptBlock>

      <h3>Prompt B – keď tému ešte len tvoríš</h3>
      <PromptBlock>
        „Pomôž mi pripraviť podklady k prezentácii. Tu je môj BRIEF (10 bodov).<br /><br />
        1. Najprv mi polož 5 doplňujúcich otázok, aby si pochopil kontext.<br />
        2. Potom navrhni INPUT PACK: 10–15 kľúčových bodov + 3 fakty, ktoré treba overiť (napíš, aký zdroj hľadať).<br />
        3. Až potom navrhni štruktúru prezentácie (8–10 slidov) s headline (max 8 slov) + 1 vetou pointy ku každému slidu.<br /><br />
        <strong>BRIEF – príklad (vyplnený):</strong><br />
        1. Téma: Ako pripraviť jednoduché domáce jedlá bez stresu<br />
        2. Cieľ: Aby si publikum vedelo nastaviť 3 pravidlá a ušetriť čas počas týždňa<br />
        3. Publikum: Bežní ľudia (25–60), nechcú "fit teóriu", chcú praktické tipy<br />
        4. Situácia: Prezentácia pre rodinu/komunitu (8–10 min)<br />
        5. Dĺžka: 8–10 slidov<br />
        6. One message: Keď máš plán + základné suroviny, varenie je jednoduchšie než rozhodovanie<br />
        7. CTA: Vybrať 3 jedlá na týždeň + urobiť krátky nákupný zoznam<br />
        8. Tone of voice: priateľské, jednoduché, bez moralizovania<br />
        9. Obmedzenia: Bez zdravotných tvrdení a bez konkrétnych diét<br />
        10. Šablóna/dizajn: Ak dám šablónu, <strong>nemen layout ani fonty</strong>, iba text"
      </PromptBlock>

      <MiniTask title="Brief v praxi">
        <p><strong>Situácia</strong></p>
        <p>Chceš pripraviť krátku prezentáciu, ktorú vieš reálne použiť (v práci, doma, v komunite). AI ti má pomôcť tak, aby výsledok nebol generický.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Vyplň šablónu briefu (10 bodov) pre svoju tému.</li>
          <li>Vyber si režim:
            <ul>
              <li><strong>A:</strong> tému už máš spracovanú → priprav si krátky input pack (5–15 bodov)</li>
              <li><strong>B:</strong> tému ešte nemáš → použiješ Prompt B a necháš AI vytvoriť input pack</li>
            </ul>
          </li>
          <li>Ulož si výsledok ako: <strong>L1_brief_v1</strong></li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je tvoj <strong>cieľ</strong> napísaný jednou vetou a je merateľný?</li>
          <li>Je <strong>one message</strong> naozaj jedna veta (bez "a ešte…")?</li>
          <li>Vieš z briefu okamžite povedať, <strong>pre koho</strong> to je a prečo ich to má zaujímať?</li>
          <li>Máš jasné <strong>CTA</strong> (čo má publikum spraviť po prezentácii)?</li>
          <li>Ak máš šablónu: máš explicitne napísané <strong>„nemen layout/fonty"</strong>?</li>
          <li>Je input pack selektovaný (podstatné), nie "všetko možné"?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď je brief jasný, AI prestane robiť generické slidy a začne ti pomáhať so štruktúrou a pointou. Najväčší rozdiel v kvalite prezentácie často spraví nie „lepší prompt", ale <strong>lepšie zadanie (brief)</strong>.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktorý brief najviac znižuje riziko generickej prezentácie a \u201Evaty\u201C?`}
        options={[
          { label: "🌕", text: `Brief A: \u201ESprav prezentáciu o plánovaní týždňa. Nech je to zaujímavé.\u201C` },
          { label: "⭐", text: `Brief B: \u201E10 min, 8 slidov, publikum 25–60, cieľ: aby si zajtra vedeli naplánovať týždeň v 3 krokoch, one message 1 veta, CTA: vybrať 3 priority, tone: stručné, obmedzenie: bez osobných údajov, šablóna: nemen layout/fonty.\u201C` },
          { label: "☀️", text: `Brief C: \u201ESprav prezentáciu, pridaj veľa tipov a veľa príkladov, aby to bolo kompletné.\u201C` },
        ]}
        correct="⭐"
        explanation="Obsahuje cieľ, publikum, dĺžku, one message aj CTA – AI vie, čo je dôležité, čo je mimo a aký má byť výsledok."
      />
    </PageShell>
  );
}
