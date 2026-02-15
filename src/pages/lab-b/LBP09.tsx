import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-09-bezpecnost");

export default function LBP09() {
  return (
    <PageShell title="8️⃣ Bezpečnosť pri práci s textom: čo do AI nepatrí 🔐🧼" prev={nav.prev} next={nav.next}>
      <p>AI je skvelá na texty — ale iba vtedy, keď máš pod kontrolou <strong>čo do nej vkladáš</strong>. Táto lekcia je o tom, ako používať AI bezpečne: aby si si pomohol s textom, no zároveň <strong>nezdieľal citlivé údaje</strong> a nerobil zbytočné riziká.</p>

      <hr />

      <h3>🚦 Semafor citlivosti (rýchle rozhodnutie)</h3>
      <p>Skôr než čokoľvek vložíš do AI, zaraď si to do jednej kategórie:</p>
      <p><strong>🟢 OK (bezpečné)</strong></p>
      <ul>
        <li>štruktúra, osnova, formát (email/návod/FAQ)</li>
        <li>úprava tónu (priateľský/formálny/pevný)</li>
        <li>skracovanie a zrozumiteľnosť</li>
        <li>šablóny a template bez konkrétnych dát</li>
      </ul>
      <p><strong>🟠 Opatrne (anonymizovať)</strong></p>
      <ul>
        <li>interné procesy a situácie (ak neobsahujú identifikátory)</li>
        <li>texty o klientoch/ľuďoch, ale iba po odstránení detailov</li>
        <li>citlivejšie situácie, ktoré sa dajú opísať všeobecne</li>
      </ul>
      <p><strong>🔴 STOP (nevkladať)</strong></p>
      <ul>
        <li>heslá, prístupy, tokeny, API kľúče</li>
        <li>čísla účtov/karet, doklady, identifikačné čísla</li>
        <li>osobné údaje iných ľudí (ak nie je nutné a bez anonymizácie)</li>
        <li>interné linky, incidenty, neveľajné stratégie, „tajné" dokumenty</li>
      </ul>
      <p>👉 Jednoduché pravidlo: <strong>Nevkladám nič, čo by som neposlal cudziemu človeku.</strong></p>

      <hr />

      <h3>✅ Pravidlo minimalizácie dát</h3>
      <p>Aj keď je niečo „neškodné", stále platí:</p>
      <p><strong>Do AI dávaj len minimum informácií, ktoré potrebuje na úlohu.</strong></p>
      <p>Často stačí:</p>
      <ul>
        <li>čo chcem dosiahnuť,</li>
        <li>pre koho to je,</li>
        <li>a v akom formáte má byť výstup.</li>
      </ul>
      <p>Namiesto celého mailu často stačí 3–5 viet v anonymizovanej forme.</p>

      <hr />

      <h3>🧼 Ako anonymizovať text (3 praktické techniky)</h3>
      <p><strong>1) Placeholdery (nahradenie identifikátorov)</strong></p>
      <p>Nahraď citlivé prvky za značky:</p>
      <ul>
        <li>[MENO] [FIRMA] [MESTO] [SUMA] [DÁTUM] [ID_PRÍPADU] [LINK]</li>
      </ul>
      <p><strong>2) Zovšeobecnenie detailov</strong></p>
      <p>Ak presné údaje nie sú nutné, zjemni ich:</p>
      <ul>
        <li>„cca 50 €" namiesto „47,30 €"</li>
        <li>„minulý týždeň" namiesto „12. 1. 2026"</li>
        <li>„zákazník" namiesto konkrétneho mena</li>
      </ul>
      <p><strong>3) Oddelenie štruktúry od dát</strong></p>
      <p>Najbezpečnejší postup:</p>
      <ul>
        <li>AI spraví <strong>šablónu a štruktúru</strong> bez citlivých údajov</li>
        <li>ty doplníš konkrétne údaje <strong>mimo AI</strong></li>
        <li>AI potom upraví len <strong>tón/formát</strong> na anonymizovanom texte</li>
      </ul>

      <hr />

      <h3>✅ Mini-check anonymizácie (30 sekúnd)</h3>
      <p>Pred vložením textu si rýchlo odškrtni:</p>
      <ul>
        <li>sú tam mená, adresy, telefóny, emaily?</li>
        <li>sú tam čísla účtov/karet, doklady, ID?</li>
        <li>sú tam presné dátumy/sumy, ktoré vedia identifikovať prípad?</li>
        <li>sú tam interné linky, prístupy, ticket ID?</li>
      </ul>
      <p>Ak áno → anonymizovať alebo nepoužiť.</p>

      <hr />

      <MiniTask title="Anonymizuj text + sprav z neho šablónu (1 prompt)">
        <p><strong>Situácia</strong></p>
        <p>Máš text, ktorý obsahuje citlivé prvky. Chceš, aby AI pomohla s prepisom a štruktúrou, ale bez toho, aby si zdieľal konkrétne údaje.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI nasledujúci <strong>Text</strong> a potom <strong>Prompt</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>Text (vstup do AI)</strong></p>
        <p>„Ahoj Peter, potrebujem pripraviť odpoveď pre klienta Jana Nováka (jan.novak@email.com). Dňa 12. 1. 2026 mu odišla platba 47,30 € z účtu 123456789/0100, ale v aplikácii sa mu zobrazuje ako 'neznáma transakcia'. Prípad je evidovaný pod ID 784512 a posielam link na interný ticket: https://intranet.local/ticket/784512. Prosím, odpíš mu slušne, že to riešime a že sa mu ozveme."</p>

        <p><strong>Prompt</strong></p>
        <p>„Urob 2 výstupy:</p>
        <ol>
          <li><strong>Anonymizuj text</strong>: nájdi všetky citlivé údaje a nahraď ich placeholdermi (napr. [MENO], [EMAIL], [SUMA], [DÁTUM], [ÚČET], [ID], [LINK]).</li>
          <li>Z anonymizovanej verzie sprav <strong>šablónu odpovede</strong> (email alebo správa), ktorú viem použiť opakovane:
            <ul>
              <li>1 veta: uznanie problému</li>
              <li>2–3 vety: čo urobíme ďalej (bez sľubovania konkrétnych výsledkov)</li>
              <li>1 veta: kedy sa ozveme (bez presného čísla, ak ho nepoznáme)</li>
              <li>1 veta: čo potrebujeme od klienta, ak je to nutné (max 1 otázka)</li>
            </ul>
          </li>
        </ol>
        <p>Pravidlá:</p>
        <ul>
          <li><strong>Nepridávaj nové fakty</strong> (nevymýšľaj príčinu).</li>
          <li>Zachov rešpektujúci a profesionálny tón.</li>
          <li>Na konci vypíš: 'Čo som anonymizoval' (zoznam)."</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Našiel som všetky citlivé údaje a sú nahradené placeholdermi?</p>
        <p>Zostal zachovaný význam (stále je jasné, čo sa rieši)?</p>
        <p>Je šablóna použiteľná opakovane aj pre iný prípad?</p>
        <p>Nepribudli nové fakty alebo sľuby?</p>
        <p>Je tón vhodný a bezpečne neutrálne profesionálny?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>AI vie pomôcť aj pri citlivých témach, ak oddelíš <strong>dáta</strong> od <strong>štruktúry</strong>: najprv anonymizácia a šablóna, potom dopĺňanie detailov mimo AI.</p>
      </ExpectedFinding>

      <hr />

      <MiniTest
        question="Ktorý postup je najbezpečnejší, keď chceš, aby AI upravila text, ktorý obsahuje citlivé údaje?"
        options={[
          { label: "🌕", text: "\u201EPo\u0161lem AI cel\u00FD text aj s menami, emailmi a \u010D\u00EDslami, nech to sprav\u00ED r\u00FDchlo a presne.\u201C" },
          { label: "⭐", text: "\u201ENajprv anonymizujem citliv\u00E9 \u00FAdaje (placeholdery), AI nech sprav\u00ED \u0161abl\u00F3nu/\u0161trukt\u00FAru a a\u017E potom dopln\u00EDm re\u00E1lne \u00FAdaje mimo AI.\u201C" },
          { label: "☀️", text: "\u201ED\u00E1m AI len screenshot alebo PDF s \u00FAdajmi, nech si ich sama vyberie a prep\u00ED\u0161e do odpovede.\u201C" },
        ]}
        correct="⭐"
        explanation="Minimalizuješ zdieľanie citlivých informácií, AI využiješ na štruktúru a wording, ale konkrétne údaje držíš mimo AI."
      />
    </PageShell>
  );
}
