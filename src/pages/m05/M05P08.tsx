import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M05P08() {
  const nav = getNavContext("m05-08-web-vs-deep");
  return (
    <PageShell title="7️⃣ Web Search vs Deep Research" {...nav}>
      <p>Web Search a Deep Research znejú podobne, ale robia úplne inú prácu. <strong>Web Search</strong> je rýchla odpoveď „na počkanie". <strong>Deep Research</strong> je režim, kde AI spraví viac krokov, pozbiera viac zdrojov, porovná ich a poskladá z toho <strong>správu</strong>.</p>
      <p>👉 Pointa: <strong>Web Search = rýchlo</strong>, <strong>Deep Research = dôkladnejšie</strong>. Ani jeden režim nie je „magicky bezchybný".</p>

      <h3>👉 Kedy použiť Web Search</h3>
      <p>Web Search je dobrý, keď chceš rýchlo zistiť „čo je čo" a nepotrebuješ z toho robiť veľké rozhodnutie.</p>
      <ul>
        <li>rýchle vysvetlenie pojmu alebo témy</li>
        <li>orientačný prehľad (čo sa rieši, aké sú možnosti)</li>
        <li>rýchle porovnanie 2 možností</li>
        <li>keď potrebuješ odpoveď do 1–2 minút</li>
      </ul>

      <h3>👉 Kedy použiť Deep Research</h3>
      <p>Deep Research je dobrý, keď potrebuješ niečo, čo sa dá použiť ďalej: <strong>podklady na rozhodnutie</strong>, plán, odporúčanie, zhrnutie z viacerých zdrojov.</p>
      <ul>
        <li>keď chceš <strong>zhrnutie + závery</strong> a nie len odpoveď</li>
        <li>keď potrebuješ <strong>výnimky, protirečenia a podmienky</strong> („kedy platí čo")</li>
        <li>keď chceš <strong>štruktúrovaný výstup</strong> (správa, checklist, riziká, odporúčania)</li>
        <li>keď chceš, aby AI spravila viac krokov a sama doplnila, čo jej chýba</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Deep Research nie je záruka pravdy</strong>. Je to len väčšia šanca, že uvidíš viac súvislostí.</li>
        <li>aj Deep Research môže použiť slabé zdroje alebo zle zhrnúť detail</li>
        <li>bez dobrého zadania môže byť výsledok <strong>dlhý, ale prázdny</strong> (veľa textu, málo použiteľnosti)</li>
        <li>Web Search môže byť rýchly, ale často vynechá <strong>výnimky a protirečenia</strong></li>
      </ul>

      <p><strong>💡 Tip do praxe</strong></p>
      <p>Ak chceš férové porovnanie, potrebuješ: <strong>rovnakú tému + rovnakú štruktúru výstupu</strong>.</p>
      <p>👉 Jedna veta, ktorá pomáha:</p>
      <p>„Výstup chcem v rovnakej štruktúre: <strong>zhrnutie, riziká, odporúčania, zdroje, neistoty</strong>."</p>

      <MiniTask title="rovnaká téma v 2 režimoch (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš si kúpiť nový mobil do 15 000 Kč. Fotíš často v interiéri (deti, jedlo), nechceš obrovský mobil do ruky a potrebuješ, aby batéria vydržala celý deň. Zároveň nechceš, aby sa mobil po roku začal sekať alebo spomaľovať. Nechceš stráviť večer googlením, chceš sa rozhodnúť rýchlo, ale rozumne.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Použi dva režimy: <strong>Web Search</strong> a <strong>Deep Research</strong> (v jednom nástroji alebo v dvoch rôznych). Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>🆎 Prompt</strong></p>
        <p>„Odporuč mi 3 mobily do 15 000 Kč. Kontext: fotím často v interiéri (deti, jedlo), nechcem obrovský mobil do ruky a batéria má vydržať celý deň. Dôležité: nech sa mobil po roku nezačne sekať/spomaľovať, chcem plynulý chod. Výstup: 3 odporúčané modely, pri každom 2× 'prečo áno', 1× 'prečo nie', 1 riziko, krátka tabuľka porovnania (model / pre koho / riziko / kompromis), na konci checklist 5 bodov, čo mám overiť pred kúpou. Pravidlo: uveď zdroje (min. 5) a pri každom zdroji dátum alebo 'posledná aktualizácia', ak je dostupná. Ak si nie si istý, napíš 'neviem' a uveď čo by som mal overiť ako prvé."</p>
        <p>👉 Používame <strong>rovnaký prompt</strong> zámerne, aby bolo jasné, že rozdiel robí režim (Web Search vs Deep Research), nie to, že by si sa „lepšie" spýtal.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Má Deep Research <strong>viac zdrojov</strong> a sú <strong>rôznorodejšie</strong> než pri Web Search?</li>
          <li>Je v Deep Research jasnejšie uvedené <strong>odkiaľ informácie sú</strong> (zdroje + dátum/aktualizácia), než pri Web Search?</li>
          <li>Identifikuje Deep Research <strong>riziká a kompromisy</strong> pri každom modeli lepšie než Web Search?</li>
          <li>Všimne si Deep Research <strong>protirečenia medzi zdrojmi</strong> a vysvetlí ich, alebo ich ignoruje?</li>
          <li>Dá Deep Research <strong>jasnejší záver</strong> (pre koho je ktorý model a prečo), než Web Search?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Deep Research sa správa ako <strong>„junior poradca"</strong>: spraví viac krokov, pozbiera viac zdrojov a dá štruktúrovanejší výstup vrátane rizík a checklistu.</p>
        <p>Web Search dá <strong>rýchly prehľad</strong>, ale často vynechá výnimky a jemné rozdiely.</p>
        <p>Aj pri Deep Research stále platí: <strong>over aspoň 1–2 kľúčové veci priamo v zdrojoch</strong>.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00E9 2 situ\u00E1cie s\u00FA typick\u00E9 pre Deep Research (a nie pre r\u00FDchly Web Search)? Vyber 2.`}
        options={[
          { label: "\uD83C\uDF15", text: `\u201EN\u00E1jdi mi defin\u00EDciu pojmu \u2018infl\u00E1cia\u2019 a uve\u010F zdroj.\u201C` },
          { label: "⭐", text: `\u201EDaj mi 5 bodov, \u010Do si m\u00E1m zapam\u00E4ta\u0165 o zdravom sp\u00E1nku.\u201C` },
          { label: "☀️", text: `\u201EZhr\u0148 mi, \u010Do sa zhoduje a \u010Do sa l\u00ED\u0161i medzi 6 zdrojmi o tom, \u010Di je ve\u010Dern\u00E9 jedlo po 19:00 \u2018zl\u00E9\u2019.\u201C` },
          { label: "\uD83C\uDF11", text: `\u201EUrob porovnanie 8 zdrojov o tom, ktor\u00FD mobil do 15 000 K\u010D m\u00E1 najlep\u0161ie fotky v interi\u00E9ri, a uve\u010F jasn\u00FD z\u00E1ver + rizik\u00E1.\u201C` },
          { label: "\uD83C\uDF20", text: `\u201E\u010Co znamen\u00E1 pojem \u2018kal\u00F3rie\u2019?\u201C` },
        ]}
        correct="☀️🌑"
        explanation="☀️ a 🌑 sú syntéza z viacerých zdrojov, porovnávanie protirečení a tvorba záveru — to je presne práca pre Deep Research."
      />
    </PageShell>
  );
}
