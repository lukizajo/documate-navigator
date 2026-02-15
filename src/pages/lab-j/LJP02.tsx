import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP02() {
  const nav = getNavContext("lj-02-human-loop");
  return (
    <PageShell title="1\uFE0F\u20E3 AI rad\u00ED, \u010Dlovek rozhoduje" prev={nav.prev} next={nav.next}>
      <p>
        AI je výborná na <strong>prípravu rozhodnutia</strong>: urobiť prehľad možností, pomenovať dopady, vygenerovať argumenty.
      </p>
      <p>
        Ale zodpovednosť za rozhodnutie nesie vždy človek — lebo len ty poznáš kontext, následky a to, čo je pre teba/firmu {"\u201E"}neprijateľné{"\u201C"}.
      </p>
      <p>
        <strong>Human-in-the-loop = AI pripraví možnosti, človek rozhodne a vie to obhájiť.</strong>
      </p>

      <hr />

      <h3>🔎 Mikro-príklad</h3>
      <p>
        AI ti povie: {"\u201E"}Vyber A, je to najlepšie.{"\u201C"} Keď sa však spýtaš na riziká a trade-offs, zistíš, že A funguje len vtedy, ak platí jedna dôležitá podmienka — a tá u teba nemusí platiť.
      </p>
      <p>
        <strong>💡 Tip do praxe:</strong> Ak by si rozhodnutie nevedel obhájiť bez AI, nemá ho robiť ani s AI.
      </p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>AI môže znieť isto aj vtedy, keď nemá pravdu.</li>
        <li>Prvá odpoveď je často len {"\u201E"}najpravdepodobnejšia{"\u201C"}, nie najlepšia.</li>
        <li>{"\u201E"}Znie to rozumne{"\u201C"} nie je dôkaz.</li>
      </ul>

      <hr />

      <MiniTask title="Vyber si scen\u00E1r (\u0161tart linky)">
        <p><strong>Situácia</strong></p>
        <p>Chceš spraviť rozhodnutie, ktoré má reálny dopad (čas, peniaze, ľudia, reputácia).</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber 1 scenár a napíš ho jednou vetou. Ideálne taký, ktorý budeš riešiť <strong>do 7 dní</strong>.</p>
        <p>Vyber scenár <strong>bez citlivých osobných údajov</strong> a bez rozhodnutí typu medicína/právo.</p>
        <p>💡 Ak nevieš čo vybrať, tu sú príklady (vyber 1):</p>
        <ul>
          <li>Práca: {"\u201E"}Mám zvoliť nástroj A alebo B na [___], aby sme ušetrili čas bez zvýšenia rizika?{"\u201C"}</li>
          <li>Osobné: {"\u201E"}Kúpim [___] teraz, alebo počkám 3 mesiace?{"\u201C"}</li>
          <li>Komunikácia: {"\u201E"}Ako odkomunikujem [zmenu/odmietnutie] tak, aby nevznikol konflikt?{"\u201C"}</li>
        </ul>
        <PromptBlock>
          {"\u201E"}Správaj sa ako môj rozhodovací sparring partner. Najprv mi pomôž ujasniť scenár a rizikovosť.<br />
          Môj scenár (1 veta): [___]<br /><br />
          1. Zopakuj scenár vlastnými slovami (1 veta).<br />
          2. Povedz, či je to low-risk alebo high-risk (stručne prečo).<br />
          3. Polož mi 3 doplňujúce otázky, ktoré musíš vedieť predtým, než navrhneš možnosti.{"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je scenár napísaný jednou vetou a je zrozumiteľný?</li>
          <li>Je jasné, či ide skôr o low-risk alebo high-risk?</li>
          <li>Sú doplňujúce otázky konkrétne a k veci?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že dobré rozhodovanie s AI začína tým, že AI najprv získa kontext — nie tým, že hneď dá odpoveď.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 Ktor\u00E9 tvrdenie najlep\u0161ie vystihuje Human-in-the-loop?"}
        options={[
          { label: "🌕", text: "AI navrhne možnosti, človek rozhodne a nesie zodpovednosť." },
          { label: "⭐", text: "AI navrhne rozhodnutie a človek ho len schváli bez doplňujúcich otázok." },
          { label: "☀️", text: "AI vyberie \u201Enajpravdepodobnejšie\u201C riešenie a človek ho automaticky vykoná." },
        ]}
        correct="🌕"
        explanation="AI je pomocn\u00EDk na anal\u00FDzu, nie nosite\u013E zodpovednosti."
      />

      <p>➡️ V ďalšej lekcii spravíme framing, aby AI nemusela hádať, čo pre teba znamená {"\u201E"}najlepšie riešenie{"\u201C"}.</p>
    </PageShell>
  );
}
