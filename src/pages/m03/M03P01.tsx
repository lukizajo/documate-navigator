import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest } from "@/components/ContentBlocks";

export default function M03P01() {
  const nav = getNavContext("m03-01-uvod");
  return (
    <PageShell title="🅾️ Úvod" {...nav}>

      <h2>Úvod</h2>
      <p>V prvom module sme si vysvetlili, čo umelá inteligencia je, ako funguje a kde má svoje hranice. Teraz urobíme ďalší krok – pozrieme sa na to, ako s AI hovoriť tak, aby sme z nej dostali použiteľné výsledky.</p>
      <p>Mnohé sklamania z AI nevznikajú preto, že by nástroj nefungoval, ale preto, že nedostal jasné zadanie.</p>

      <h2>Prehľad modulu</h2>
      <ul>
        <li>čo je prompt a prečo na ňom záleží</li>
        <li>z čoho sa skladá prompt (6 stavebných blokov)</li>
        <li>najčastejšie chyby, kvôli ktorým AI „háda"</li>
        <li>jedna praktická úloha naprieč modulom (iterácia)</li>
      </ul>

      <h2>Čo sa naučíš</h2>
      <ul>
        <li>pochopiť, prečo AI bez dobrého zadania „doplňuje realitu"</li>
        <li>naučiť sa 6 stavebných blokov promptu a kedy ich použiť</li>
        <li>vedome zlepšovať výstupy bez zmeny nástroja</li>
        <li>rozhodnúť sa, kedy má zmysel detailný prompt a kedy stačí iterácia</li>
        <li>vedieť prompt „diagnostikovať" – rýchlo nájsť, čo v zadaní chýba</li>
      </ul>

      <h2>PROMPT – recept, podľa ktorého varí AI 🍳</h2>
      <p>Predstav si, že AI je kuchár. Keď povieš: <em>„Uvar mi niečo dobré"</em>, dostaneš niečo… ale nevieš čo. Keď povieš: <em>„Chcem talianske cestoviny, do 20 minút, bez mäsa, s listovým špenátom"</em>, už je to iná liga.</p>
      <p>👉 AI si nevyberá „správnu odpoveď" ako v teste – ona dopĺňa zadanie tak, aby dávalo zmysel. A keď je zadanie nejasné, doplní si ho po svojom.</p>
      <p>Prompt je jednoducho:</p>
      <ul>
        <li>čo má AI spraviť,</li>
        <li>v akom kontexte,</li>
        <li>ako to má vyzerať,</li>
        <li>a podľa čoho spoznáš, že je to dobré.</li>
      </ul>

      <h2>🧱 6 stavebných blokov promptu</h2>
      <ol>
        <li><strong>Úloha</strong> – čo presne má spraviť</li>
        <li><strong>Kontext</strong> – pre koho, prečo, v akej situácii</li>
        <li><strong>Príklady</strong> – ukážka štýlu alebo výsledku</li>
        <li><strong>Rola</strong> – z akej perspektívy odpovedá</li>
        <li><strong>Formát</strong> – tabuľka, odrážky, kroky, šablóna…</li>
        <li><strong>Tón</strong> – ako má text znieť (priateľsky, vecne, jednoducho)</li>
      </ol>
      <p>Nie vždy potrebuješ všetkých 6. Ale keď niečo „nefunguje", zvyčajne chýba práve jeden z nich.</p>

      <MiniTest
        question="Ktorý prompt je najlepší? Chceš recept na rýchlu večeru z toho, čo máš doma."
        options={[
          { label: "🌕", text: `„Navrhni mi recept na večeru. Chcem, aby bol rýchly, zdravý, chutný, ale zároveň niečo špeciálne. Použi ingrediencie, ktoré mám doma, ale keď nebudú stačiť, tak si niečo domysli..."` },
          { label: "⭐", text: `„Potrebujem pomôcť s varením a chcem, aby si mi navrhol viac receptov podľa toho, čo mám doma. Mám cestoviny, vajcia, špenát a syr..."` },
          { label: "☀", text: `„Si kuchár, ktorý navrhuje jednoduché recepty pre bežný pracovný deň. Mám doma cestoviny, vajcia, listový špenát, parmezán, cesnak a olivový olej. Navrhni jeden recept do 20 minút, bez mäsa, pre 2 porcie..."` },
        ]}
        correct="☀"
        explanation="Je jasné, čo má vzniknúť, z čoho varíme, do koľkých minút, pre koľko ľudí, v akej štruktúre a čo má AI spraviť, ak jej niečo chýba."
      />
    </PageShell>
  );
}
