import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-03-typy");

export default function LEP03() {
  return (
    <PageShell title="2️⃣ Typy prezentácií a ciele" prev={nav.prev} next={nav.next}>
      <p>Dve prezentácie môžu mať rovnakú tému, ale úplne iný výsledok.</p>
      <p>Rozdiel často nie je v dizajne ani v tom, koľko tam dáš informácií. Rozdiel je v tom, <strong>aký typ prezentácie robíš</strong>.</p>
      <p>Keď si typ pomýliš, stane sa toto:</p>
      <ul>
        <li>chceš rozhodnutie, ale dáš len info,</li>
        <li>chceš naučiť postup, ale tlačíš argumenty,</li>
        <li>chceš informovať, ale znieš ako predaj.</li>
      </ul>

      <h2>🧭 3 typy prezentácií, ktoré sa v praxi opakujú</h2>

      <h3>1️⃣ Informačná prezentácia</h3>
      <p><strong>Cieľ:</strong> publikum má pochopiť situáciu.</p>
      <p>Čo je dôležité: jasné fakty, dopady, zhrnutie.</p>
      <p><strong>CTA:</strong> „vieme, čo sa deje a čo to znamená".</p>
      <p><strong>Typická štruktúra:</strong></p>
      <ul>
        <li>situácia dnes</li>
        <li>čo sa zmenilo</li>
        <li>dopady</li>
        <li>čo ďalej</li>
      </ul>

      <h3>2️⃣ Presviedčacia prezentácia</h3>
      <p><strong>Cieľ:</strong> získať súhlas alebo rozhodnutie.</p>
      <p>Čo je dôležité: problém, dopad, návrh riešenia, prečo teraz.</p>
      <p><strong>CTA:</strong> „schváľme X / rozhodnime Y".</p>
      <p><strong>Typická štruktúra:</strong></p>
      <ul>
        <li>problém</li>
        <li>dopad (čo sa stane, keď nič neurobíme)</li>
        <li>riešenie</li>
        <li>prečo teraz</li>
        <li>rozhodnutie</li>
      </ul>

      <h3>3️⃣ Návodová prezentácia</h3>
      <p><strong>Cieľ:</strong> naučiť ľudí postup.</p>
      <p>Čo je dôležité: kroky, ukážka, najčastejšie chyby.</p>
      <p><strong>CTA:</strong> „skús to dnes / urob prvý krok".</p>
      <p><strong>Typická štruktúra:</strong></p>
      <ul>
        <li>cieľ</li>
        <li>kroky</li>
        <li>ukážka</li>
        <li>najčastejšie chyby</li>
        <li>ďalší krok</li>
      </ul>

      <h2>✅ Ako vybrať správny typ</h2>
      <p>Stačí jedna otázka:</p>
      <ul>
        <li>Chcem, aby <strong>pochopili</strong>? → informačná</li>
        <li>Chcem, aby <strong>schválili/rozhodli</strong>? → presviedčacia</li>
        <li>Chcem, aby <strong>vedeli spraviť</strong>? → návodová</li>
      </ul>
      <p>💡 <strong>Tip:</strong> Z typológie ti automaticky vyplynie aj to, aké slidy potrebuješ. Presviedčacia potrebuje argumenty a dopad. Návodová potrebuje kroky a ukážku.</p>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš hotový L1_brief_v1. Teraz si overíš, ako sa zmení prezentácia, keď zmeníš typ.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Zober svoj L1_brief_v1.</li>
          <li>Prepíš ho do dvoch variantov:
            <ul>
              <li>Variant A: informačná prezentácia</li>
              <li>Variant B: presviedčacia alebo návodová (podľa toho, čo dáva zmysel)</li>
            </ul>
          </li>
          <li>V každom variante uprav minimálne:
            <ul>
              <li>cieľ (1 veta)</li>
              <li>CTA</li>
              <li>one message</li>
            </ul>
          </li>
        </ol>
        <p>Ulož si výsledok ako <strong>L2_types_v1</strong>.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je v každom variante jasné, či chcem pochopenie, rozhodnutie alebo postup?</li>
          <li>Zmenilo sa CTA medzi variantmi?</li>
          <li>Je one message v každom variante jedna veta a sedí k typu?</li>
          <li>Vieš povedať, ktoré slidy by sa museli zmeniť, keby si zmenil typ?</li>
          <li>Je variant B „ostrejší" než pôvodný brief?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď zmeníš typ prezentácie, zmení sa logika slidov. AI potom prestane miešať štýly a začne navrhovať štruktúru, ktorá sedí cieľu.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorá CTA najviac sedí k presviedčacej prezentácii?"
        options={[
          { label: "🌕", text: `\u201ENa konci budete vedieť, čo sa deje.\u201C` },
          { label: "⭐", text: `\u201EVyberte si 3 kroky a skúste to dnes.\u201C` },
          { label: "☀️", text: `\u201ESchváľme tento návrh a určíme vlastníka.\u201C` },
        ]}
        correct="☀️"
        explanation="Presviedčacia prezentácia smeruje k rozhodnutiu."
      />
    </PageShell>
  );
}
