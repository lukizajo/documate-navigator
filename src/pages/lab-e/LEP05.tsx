import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-05-storyline");

export default function LEP05() {
  return (
    <PageShell title="4️⃣ Storyline a one message" prev={nav.prev} next={nav.next}>
      <p>V predchádzajúcich krokoch si si pripravil brief a začal si oddeľovať to, čo patrí na slide a čo do speaker notes. Teraz prichádza moment, ktorý rozhodne, či bude prezentácia pôsobiť ako <strong>jasný príbeh</strong>, alebo ako <strong>náhodný zoznam bodov</strong>.</p>
      <p>V tejto lekcii si nastavíš:</p>
      <ul>
        <li>jednu hlavnú myšlienku, ktorú si majú ľudia odniesť,</li>
        <li>a jednoduchú storyline, ktorá zabezpečí, že slidy budú mať smer a flow.</li>
      </ul>

      <h2>🧠 Prečo je storyline kľúčová</h2>
      <p>Bez storyline prezentácia pôsobí ako zoznam bodov.</p>
      <p>So storyline má prezentácia smer: publikum vie, <strong>kam ideš a prečo</strong>.</p>
      <p>👉 Storyline nie je „umelecký príbeh". Je to <strong>poradie myšlienok</strong>, ktoré ľuďom pomôže pochopiť pointu bez námahy.</p>

      <h2>✅ One message</h2>
      <p>One message je jedna veta, ktorá odpovie na otázku:</p>
      <p><strong>„Čo má publiku ostať v hlave, aj keby zabudli zvyšok?"</strong></p>
      <p>Dobrá one message:</p>
      <ul>
        <li>je konkrétna,</li>
        <li>dá sa obhájiť,</li>
        <li>vedie k rozhodnutiu alebo zmene.</li>
      </ul>
      <p>Zlá one message:</p>
      <ul>
        <li>je všeobecná („AI je dôležitá"),</li>
        <li>je to viac viet naraz („a ešte…"),</li>
        <li>nedá sa premeniť na slidy.</li>
      </ul>

      <h2>🧭 3 overené typy storyline</h2>
      <p>Vyber si podľa cieľa prezentácie:</p>
      <h3>1️⃣ Problém → Dôsledok → Riešenie</h3>
      <p>Keď chceš presvedčiť alebo získať podporu. Najprv ukážeš problém, potom dopad, potom navrhneš riešenie.</p>
      <h3>2️⃣ Situácia dnes → Čo sa mení → Čo spravíme</h3>
      <p>Keď chceš interný update alebo zmenu procesu. Jasné "pred vs po" a konkrétne kroky.</p>
      <h3>3️⃣ Cieľ → Kroky → Ukážka → Ďalší krok</h3>
      <p>Keď chceš naučiť ľudí postup (návod, školenie). Najprv povieš cieľ, potom kroky, potom príklad a čo majú spraviť.</p>

      <h2>🔎 Ako vybrať najlepšiu storyline</h2>
      <p>Keď máš 2–3 varianty, vyber tú, ktorá:</p>
      <ul>
        <li>najrýchlejšie podporí one message,</li>
        <li>má najmenej odbočiek,</li>
        <li>dá sa spraviť do 8–10 slidov bez tlačenia textu.</li>
      </ul>
      <p>A hlavne: jedna dobrá prezentácia nie je o tom, čo tam dáš… ale <strong>čo si dovolíš vyhodiť</strong>.</p>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš L1_brief_v1 a chceš, aby prezentácia mala smer a flow.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Napíš one message jednou vetou.</li>
          <li>Nechaj AI navrhnúť 3 storyline varianty podľa tvojho cieľa.</li>
          <li>Vyber jednu storyline a dopíš:
            <ul>
              <li>čo vyhodíš (1 vec, ktorú tam zámerne nedáš),</li>
              <li>kde môže publikum niečo zle pochopiť (1 riziko).</li>
            </ul>
          </li>
        </ol>
        <p>Ulož si výsledok ako <strong>L3_storyline_v1</strong>.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je one message jedna veta?</li>
          <li>Je z nej jasné, čo má publikum pochopiť alebo spraviť?</li>
          <li>Dá sa zvolené poradie myšlienok spraviť do 8–10 slidov?</li>
          <li>Vieš povedať, čo si vyhodil, aby bola prezentácia ostrejšia?</li>
          <li>Vieš pomenovať aspoň jedno riziko nepochopenia?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď máš one message a storyline, prezentácia prestane byť zoznam bodov. Zrazu vieš, čo je „must-have" a čo je len pekná omáčka.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorá one message je najlepšia pre 10-min prezentáciu, kde chceš dosiahnuť konkrétnu akciu?"
        options={[
          { label: "🌕", text: `\u201EPlánovanie je dôležité pre úspech.\u201C` },
          { label: "⭐", text: `\u201EKeď plánuješ týždeň v 3 krokoch, ušetríš čas aj stres.\u201C` },
          { label: "☀️", text: `\u201EDnes si povieme o rôznych spôsoboch plánovania, výhodách a nevýhodách.\u201C` },
        ]}
        correct="⭐"
        explanation="Je konkrétna, má jasný prínos a dá sa rozbiť na slidy."
      />
    </PageShell>
  );
}
