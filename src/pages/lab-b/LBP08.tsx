import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-08-halucinacie");

export default function LBP08() {
  return (
    <PageShell title="7️⃣ Halucinácie a faktická kontrola" prev={nav.prev} next={nav.next}>
      <p>AI vie znieť <strong>sebavedomo</strong> aj vtedy, keď si nie je istá. A práve to je pri textoch najväčšie riziko: nie „gramatická chyba", ale <strong>nepravda napísaná presvedčivo</strong>.</p>
      <p>Táto lekcia ťa naučí jednoduchý postup, ako pri faktoch prepnúť z režimu „píš" do režimu <strong>kontroluj</strong>:</p>
      <ul>
        <li>rozpoznať, čo treba overiť,</li>
        <li>vyžiadať zdroje alebo priznanú neistotu,</li>
        <li>a spraviť bezpečný text, aj keď si nie si 100 % istý.</li>
      </ul>

      <hr />

      <h3>🧠 Prečo AI „vymýšľa fakty"</h3>
      <p>AI negeneruje pravdu. Generuje <strong>najpravdepodobnejšiu odpoveď</strong> podľa vzorov v dátach. Keď jej chýbajú informácie, často doplní „rozumný príbeh".</p>
      <p>Najvyššie riziko halucinácie je pri:</p>
      <ul>
        <li><strong>číslach, dátumoch, menách</strong></li>
        <li><strong>pravidlách, procesoch, podmienkach</strong></li>
        <li><strong>právnych / medicínskych tvrdeniach</strong></li>
        <li><strong>aktuálnych informáciách</strong> (čo sa zmenilo „teraz")</li>
      </ul>
      <p>👉 Pravidlo: <strong>Presvedčivá odpoveď ≠ pravdivá odpoveď.</strong></p>

      <hr />

      <h3>🧩 3 typy výrokov (aby si vedel, čo overovať)</h3>
      <p>Keď máš v texte tvrdenia, rozdeľ si ich na:</p>
      <p><strong>1️⃣ Fakty</strong> (konkrétne údaje)</p>
      <p>→ <strong>overiť</strong> alebo žiadať zdroj</p>
      <p>(napr. „platí od…", „limit je…", „zákon hovorí…")</p>
      <p><strong>2️⃣ Interpretácie / odporúčania</strong></p>
      <p>→ posúdiť logiku + kontext</p>
      <p>(napr. „najlepšie je…", „odporúčame…")</p>
      <p><strong>3️⃣ Postupy / šablóny</strong> (forma textu)</p>
      <p>→ väčšinou netreba zdroj, skôr kontrola použiteľnosti</p>
      <p>(napr. email, návod, checklist, tón)</p>
      <p>👉 Toto rozdelenie ti ušetrí čas: nebudeš overovať veci, ktoré netreba, a nezabudneš overiť to, čo treba.</p>

      <hr />

      <h3>✅ Kedy vyžadovať zdroje (a kedy nie)</h3>
      <p><strong>Zdroje zvyčajne netreba, keď:</strong></p>
      <ul>
        <li>meníš <strong>tón</strong>, <strong>formát</strong>, <strong>štruktúru</strong></li>
        <li>skracuješ text</li>
        <li>prepisuješ „pre laika"</li>
      </ul>
      <p><strong>Zdroje alebo jasná neistota sú nutné, keď:</strong></p>
      <ul>
        <li>text obsahuje <strong>fakty</strong> (čísla, dátumy, pravidlá)</li>
        <li>ide o <strong>high-stakes</strong> situáciu (právo, zdravie, financie, bezpečnosť)</li>
        <li>ide o <strong>aktuálne informácie</strong></li>
        <li>text má niekoho viesť k rozhodnutiu („urob X, lebo platí Y")</li>
      </ul>
      <p>👉 Praktická veta do promptu:</p>
      <p><strong>„Pri faktoch daj zdroj. Ak zdroj nemáš, označ to ako NEISTÉ."</strong></p>

      <hr />

      <h3>🚩 Červené vlajky halucinácií (na čo zbystriť)</h3>
      <p>Keď vidíš toto, automaticky spomaľ:</p>
      <ul>
        <li>veľmi presné <strong>čísla/dátumy</strong> bez zdroja</li>
        <li>slová typu <strong>„určite", „vždy", „garantovane"</strong></li>
        <li>„štúdia ukazuje…" bez názvu, autorov, odkazu</li>
        <li>odpoveď je príliš hladká na zložitú otázku</li>
        <li>konkrétne názvy inštitúcií/dokumentov znejú podozrivo</li>
      </ul>

      <hr />

      <h3>🔁 Ako overovať kritické tvrdenia (praktický postup)</h3>
      <p>Použi tento jednoduchý workflow:</p>
      <p><strong>👉 Rozsekať text na tvrdenia</strong> (jedna veta = jedna informácia)</p>
      <p><strong>👉 Označiť rizikové tvrdenia</strong> (fakty, pravidlá, čísla)</p>
      <p>👉 Pri rizikových tvrdeniach:</p>
      <ul>
        <li>vyžiadať <strong>zdroj</strong>, alebo</li>
        <li>označiť <strong>NEISTÉ</strong> a navrhnúť, kde to overiť</li>
      </ul>
      <p>👉 Spraviť <strong>bezpečný prepis</strong> (bez predstierania istoty)</p>
      <p>👉 <strong>Bonus</strong>: keď ide o dôležité fakty, overuj ideálne:</p>
      <ul>
        <li><strong>primárny zdroj</strong> (oficiálny dokument, pravidlá, zákon, dokumentácia)</li>
        <li>alebo aspoň <strong>2 nezávislé zdroje</strong></li>
      </ul>

      <hr />

      <MiniTask title="Označ rizikové tvrdenia a sprav bezpečný text (1 prompt)">
        <p><strong>Situácia</strong></p>
        <p>Dostal si text, ktorý znie sebavedomo, ale obsahuje viac faktických tvrdení. Tvoj cieľ je znížiť riziko, že pošleš nepravdu.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI nasledujúci <strong>Text</strong> a potom <strong>Prompt</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>Text (vstup do AI)</strong></p>
        <p>„Podľa nových pravidiel platí, že všetky požiadavky musia byť vybavené do 24 hodín a v urgentných prípadoch do 2 hodín. Ak sa požiadavka nevybaví včas, systém ju automaticky eskaluje a používateľ dostane kompenzáciu. Tento proces je v súlade s aktuálnou legislatívou a platí od 1. marca 2026. Odporúčame preto vždy označiť urgentnosť hneď na začiatku."</p>

        <p><strong>Prompt</strong></p>
        <p>„Urob 3 kroky:</p>
        <ol>
          <li>Rozdeľ text na jednotlivé tvrdenia (odrážky).</li>
          <li>Pri každom tvrdení označ:
            <ul>
              <li><strong>FAKT – RIZIKOVÉ</strong> (treba overiť), alebo</li>
              <li><strong>INTERPRETÁCIA/ODPORÚČANIE</strong>, alebo</li>
              <li><strong>POSTUP/ŠABLÓNA</strong>.</li>
            </ul>
            Ak je tvrdenie faktické a nemáš istotu, označ ho ako <strong>NEISTÉ</strong>.
          </li>
          <li>Ku každému tvrdeniu navrhni:
            <ul>
              <li>aký <strong>zdroj</strong> by bol vhodný na overenie (napr. interný dokument, oficiálne pravidlá, legislatíva),</li>
              <li>alebo ako ho prepísať do bezpečnej formulácie.</li>
            </ul>
          </li>
        </ol>
        <p>Na záver prepíš celý pôvodný text do <strong>bezpečnej verzie</strong>, ktorá:</p>
        <ul>
          <li><strong>nepredstiera istotu</strong>, ak chýbajú zdroje,</li>
          <li><strong>nepridáva nové informácie</strong>,</li>
          <li>zachováva použiteľnosť textu (aby z neho bolo jasné, čo robiť)."</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Označil som všetky <strong>faktické a rizikové</strong> tvrdenia (čísla, dátumy, pravidlá)?</p>
        <p>Vyžiadal som ku faktom <strong>zdroje</strong> alebo som ich označil ako <strong>NEISTÉ</strong>?</p>
        <p>V bezpečnej verzii textu som <strong>nepridal nové fakty</strong>?</p>
        <p>Je bezpečná verzia stále <strong>užitočná a použiteľná</strong> (je jasné, čo robiť)?</p>
        <p>Zmizli slová, ktoré zvyšujú falošnú istotu („určite", „garantovane")?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Pri faktoch sa oplatí prepnúť na režim <strong>kontroly</strong>: rozdeľ tvrdenia, označ rizikové, vyžiadaj zdroj alebo priznanie neistoty a až potom text použi. AI je skvelá na štruktúru a formulácie — ale pravdivosť musíš mať pod kontrolou ty.</p>
      </ExpectedFinding>

      <hr />

      <MiniTest
        question="Ktorý prompt je najlepší, keď chceš znížiť riziko halucinácií pri faktoch?"
        options={[
          { label: "🌕", text: "\u201ENap\u00ED\u0161 mi fin\u00E1lny text a bu\u010F sebavedom\u00FD. Zahr\u0148 \u010D\u00EDsla, d\u00E1tumy a pravidl\u00E1 tak, aby to znelo profesion\u00E1lne.\u201C" },
          { label: "⭐", text: "\u201ERozde\u013E text na tvrdenia. Ozna\u010D rizikov\u00E9 faktick\u00E9 tvrdenia (\u010D\u00EDsla, d\u00E1tumy, pravidl\u00E1) a ku ka\u017Ed\u00E9mu vy\u017Eiadaj zdroj alebo ozna\u010D NEIST\u00C9. Potom prep\u00ED\u0161 text do bezpe\u010Dnej verzie bez nov\u00FDch inform\u00E1ci\u00ED.\u201C" },
          { label: "☀️", text: "\u201ENap\u00ED\u0161 tri r\u00F4zne verzie textu, nech si vyberiem t\u00FA, ktor\u00E1 znie najpresved\u010Divej\u0161ie. Zdroje netreba.\u201C" },
        ]}
        correct="⭐"
        explanation="Najprv identifikuje, čo treba overiť, vyžiada zdroje alebo prizná neistotu, a až potom vytvorí bezpečný text."
      />
    </PageShell>
  );
}
