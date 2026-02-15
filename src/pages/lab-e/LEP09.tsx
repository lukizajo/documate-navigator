import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-09-qa");

export default function LEP09() {
  return (
    <PageShell title="8️⃣ AI kritik + QA + etika 🛡️" prev={nav.prev} next={nav.next}>
      <p>AI ti vie prezentáciu výrazne zrýchliť. Ale vie ju aj veľmi presvedčivo pokaziť — najmä tým, že:</p>
      <ul>
        <li>znie sebaisto aj keď nemá pravdu,</li>
        <li>doplní „vatu", ktorá sa tvári múdro,</li>
        <li>alebo nechtiac pretlačí niečo citlivé, čo nemalo ísť von.</li>
      </ul>
      <p>Preto má táto lekcia jediný cieľ: spraviť z teba človeka, ktorý vie deck rýchlo preklepnúť a doladiť tak, aby bol <strong>použiteľný, obhájiteľný a bezpečný</strong>.</p>

      <h2>🧠 Čo je AI kritik</h2>
      <p>AI kritik je režim, v ktorom AI nepíše obsah, ale hľadá slabiny. Ty jej dáš prezentáciu (alebo mapu + texty) a povieš:</p>
      <ul>
        <li>čo je cieľ a publikum,</li>
        <li>aké sú deal-breakery,</li>
        <li>a podľa čoho má hodnotiť.</li>
      </ul>
      <p>Výstupom nie je "názor", ale konkrétne opravy.</p>

      <h2>✅ QA checklist pre prezentáciu</h2>
      <p>Toto je krátky checklist, ktorý prejdeš pri každej prezentácii:</p>
      <h3>👉 Jasnosť</h3>
      <ul>
        <li>Je z prvých 2 slidov jasné, o čom to je a prečo to má zaujímať?</li>
        <li>Má každý slide jednu myšlienku?</li>
        <li>Je headline pointa, nie názov kapitoly?</li>
      </ul>
      <h3>👉 Text</h3>
      <ul>
        <li>Sú na slidoch len krátke body a žiadne odseky?</li>
        <li>Nie je text plný fráz typu „v dnešnej dobe", „je dôležité", „prináša to benefity"?</li>
      </ul>
      <h3>👉 Dôkazy</h3>
      <ul>
        <li>Sú všetky čísla a fakty overiteľné?</li>
        <li>Ak je fakt dôležitý, je pri ňom zdroj alebo aspoň poznámka „overiť"?</li>
      </ul>
      <h3>👉 Vizuál</h3>
      <ul>
        <li>Drží deck jeden vizuálny svet?</li>
        <li>Nezakrýva vizuál pointu?</li>
      </ul>
      <h3>👉 Použiteľnosť</h3>
      <ul>
        <li>Dá sa to odprezentovať bez čítania slidov?</li>
        <li>Sú speaker notes napísané tak, že z nich vieš rozprávať?</li>
      </ul>

      <h2>⚠️ Etika a bezpečnosť v praxi</h2>
      <p>Tu nejde o veľké filozofovanie. Ide o tri praktické hranice:</p>
      <h3>👉 Citlivé údaje</h3>
      <ul>
        <li>Neposielaj do AI veci, ktoré by si neposlal cudziemu človeku.</li>
        <li>Ak ide o interné veci, anonymizuj alebo zovšeobecni.</li>
      </ul>
      <h3>👉 Vymyslené fakty</h3>
      <ul>
        <li>Ak AI nevie zdroj, vie si ho domyslieť.</li>
        <li>Pri prezentáciách je to extra riziko, lebo slidy pôsobia autoritatívne.</li>
      </ul>
      <h3>👉 Autorské práva a cudzie materiály</h3>
      <ul>
        <li>Ak dávaš do prezentácie cudzie grafy, obrázky alebo texty, myslí na to, či máš právo ich použiť, a uveď zdroj.</li>
      </ul>

      <h2>🧩 Prompt na AI kritika</h2>
      <p>Toto je prompt, ktorý použiješ, keď už máš deck alebo aspoň texty k slidom.</p>
      <PromptBlock hideLabel>
        „Správaj sa ako prísny AI kritik prezentácií.<br />
        Cieľ prezentácie: …<br />
        Publikum: …<br />
        Skontroluj môj deck podľa týchto kritérií a buď konkrétny:<br /><br />
        1. Deal-breakery: vata, nejasné headliny, viac myšlienok na slide, chýbajúce dôkazy, vizuálny chaos<br />
        2. Označ TOP 5 najslabších slidov a pre každý navrhni opravu:<br />
        &nbsp;&nbsp;• nový headline<br />
        &nbsp;&nbsp;• skrátené body<br />
        &nbsp;&nbsp;• čo presunúť do speaker notes<br />
        3. Označ tvrdenia/čísla, ktoré treba overiť, a napíš čo presne overiť<br /><br />
        Tu sú moje slidy: …"
      </PromptBlock>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš spracované aspoň 3 slidy v režime šablóny (L7_template_fill_v1) a chceš ich doladiť tak, aby boli obhájiteľné.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Použi prompt "AI kritik" na svoje 3 slidy.</li>
          <li>Vyber 2 pripomienky, ktoré majú najväčší dopad.</li>
          <li>Zapracuj ich do textov a ulož finálnu verziu.</li>
        </ol>
        <p>Ulož si výsledok ako <strong>L8_QA_fix_v1</strong>.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Viem jasne povedať pointu každého slidu jednou vetou?</li>
          <li>Zmizla z textu vata a zostala len pointa?</li>
          <li>Mám označené fakty, ktoré musím overiť, alebo mám zdroj?</li>
          <li>Neobsahuje deck citlivé údaje, ktoré tam nemajú byť?</li>
          <li>Je výsledok lepší bez toho, aby som menil šablónu?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>AI kritik ti ukáže slabé miesta rýchlejšie, než by si ich našiel sám. Najväčší posun zvyčajne príde z 2–3 opráv: headline, skrátenie textu a doplnenie dôkazov.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Čo je najväčšie riziko, keď AI spraví prezentáciu \u201Epríliš presvedčivo\u201C?`}
        options={[
          { label: "🌕", text: "Bude mať veľa ikoniek." },
          { label: "⭐", text: "Bude vyzerať príliš minimalisticky." },
          { label: "☀️", text: "Môže obsahovať vymyslené alebo neoverené tvrdenia, ktoré znejú pravdivo." },
        ]}
        correct="☀️"
        explanation="Slidy pôsobia autoritatívne a publikum berie tvrdenia ako fakt."
      />
    </PageShell>
  );
}
