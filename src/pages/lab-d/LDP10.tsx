import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-10-prava-etika");

export default function LDP10() {
  return (
    <PageShell title="9️⃣ Práva a etika pri AI obrázkoch" prev={nav.prev} next={nav.next}>

      <p>AI obrázky vyzerajú ako "rýchla výhra". Ale ak ich chceš používať dlhodobo (v kurze, vo firme, na webe), oplatí sa mať jasno v tom, čo je bezpečné a čo už je riziko.</p>
      <p>Cieľ tejto lekcie: vedieť spraviť rýchlu kontrolu, aby si sa vyhol zbytočným problémom a zároveň používal AI férovo.</p>

      <h3>🧠 Prečo to riešime</h3>
      <p>Riziká pri AI vizuáloch typicky nevznikajú pri "peknej ilustrácii". Vznikajú, keď:</p>
      <ul>
        <li>vizuál pripomína konkrétnu značku alebo autora,</li>
        <li>používaš realistické tváre alebo "podobizeň",</li>
        <li>používaš referencie z internetu bez rozmyslu,</li>
        <li>nástroj má obmedzenia, o ktorých nevieš (komerčné použitie, dáta, vlastníctvo).</li>
      </ul>

      <h3>✅ Čo si overiť v nástroji</h3>
      <p>Keď začínaš používať nový nástroj na generovanie obrázkov, pozri si:</p>
      <ul>
        <li><strong>Komerčné použitie:</strong> môžem to používať aj na web / kurz / predaj?</li>
        <li><strong>Vlastníctvo výstupu:</strong> kto vlastní výstup (ty vs nástroj)?</li>
        <li><strong>Tréning na tvojich dátach:</strong> používa nástroj tvoje výstupy na tréning? dá sa to vypnúť (opt-out)?</li>
        <li><strong>Referenčné obrázky:</strong> aké sú pravidlá pre nahraté referencie?</li>
        <li><strong>Osoby a tváre:</strong> aké sú pravidlá pre fotorealistické tváre / podobizeň?</li>
      </ul>

      <h3>🚦 Semafor: čo je OK a čo už je riziko</h3>
      <p>🟢 <strong>OK</strong></p>
      <ul>
        <li>abstraktné ilustrácie, ikony, generické objekty</li>
        <li>vlastné metafory (kuchyňa, automat, puzzle…)</li>
        <li>layouty bez textu (boxy, šípky)</li>
      </ul>
      <p>🟡 <strong>POZOR</strong></p>
      <ul>
        <li>referencie z webu (najmä ak sú veľmi konkrétne)</li>
        <li>"podobné štýlu" (radšej popis prvkov než názov autora)</li>
        <li>realistické tváre (aj keď "neznáme" – pôsobí to ako skutočná osoba)</li>
      </ul>
      <p>🔴 <strong>STOP</strong></p>
      <ul>
        <li>logá, watermarky, brand assety cudzích značiek</li>
        <li>známe postavy, celebrity, politici</li>
        <li>"sprav to presne ako Disney/Pixar/Apple"</li>
        <li>kopírovanie konkrétnej kompozície 1:1 z referencie</li>
      </ul>

      <h3>🧭 Etika: aby infografika nevznikla ako manipulácia</h3>
      <p>AI vizuál vie pôsobiť veľmi presvedčivo. Preto:</p>
      <ul>
        <li>infografika má <strong>vysvetľovať</strong>, nie "robiť dojem"</li>
        <li>pri citlivých témach (zdravie/financie/deti) sa vyhni fotorealistickým "dôkazom"</li>
        <li>do firemného prostredia radšej používaj neutrálne ilustrácie než "realistického človeka", ktorý môže pôsobiť ako skutočný zamestnanec</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>"Logo-like" symboly (vyzerá to ako značka, aj keď si ju nechcel)</li>
        <li>Skrytý text alebo pseudo-text v obrázku (môže mýliť)</li>
        <li>Príliš konkrétne referencie (vystihnú štýl, ale aj "kopírujú" obsah)</li>
        <li>Realistické tváre (nejasné práva + etické riziko)</li>
        <li>Zámennosť: obrázok pôsobí ako realita, ale je generovaný</li>
      </ul>

      <MiniTask title="Bezpečnostná kontrola 1 obrázka + oprava promptu">
        <p><strong>Situácia</strong></p>
        <p>Vyber si 1 svoj obrázok z predchádzajúcich lekcií (napr. cover alebo vysvetľujúci). Chceš ho použiť verejne (web / IG / prezentácia).</p>

        <p><strong>Inštrukcia</strong></p>
        <p>Odpovedz ÁNO/NIE a potom uprav prompt tak, aby si riziko znížil.</p>

        <p><strong>✅ Kontrolné otázky (ÁNO/NIE)</strong></p>
        <p>Je na obrázku niečo, čo pripomína <strong>logo alebo značku</strong>?</p>
        <p>Je na obrázku <strong>realistická tvár</strong>, ktorá pôsobí ako skutočná osoba?</p>
        <p>Použil si referenciu, ktorá je "príliš konkrétna" (značka/umelec/postava)?</p>
        <p>Je na obrázku text alebo pseudo-text, ktorý môže mýliť?</p>
        <p>Máš overené, že tvoj nástroj umožňuje použitie v tvojom kontexte (napr. komerčne)?</p>

        <p><strong>✅ Úprava promptu (doplníš si vlastné)</strong></p>
        <p>Do promptu pridaj bezpečnostný blok "DON'T", napr.:</p>
        <ul>
          <li>bez log, bez watermarkov, bez známych postáv</li>
          <li>bez fotorealistických tvárí</li>
          <li>bez textu</li>
          <li>bez brand prvkov, ktoré pripomínajú konkrétnu firmu</li>
        </ul>
        <p>Ulož: pôvodný prompt: L8_prompt_v1, upravený prompt: L8_prompt_v2</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Vieš po kontrole jasne povedať, kde je hlavné riziko (logo / osoba / referencia / text)?</p>
        <p>Znížil upravený prompt riziko bez toho, aby si zabil štýl a použiteľnosť?</p>
        <p>Vieš tento "bezpečnostný blok" používať opakovane aj v ďalších promtoch?</p>
        <p>Dáva ti semafor (🟢🟡🔴) rýchle rozhodovanie bez zbytočnej neistoty?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Zodpovedné používanie nie je brzda. Je to poistka.</p>
        <p>Keď máš jednoduché pravidlá (semafor + checklist nástroja + bezpečnostný DON'T blok), vieš robiť AI vizuály rýchlo a zároveň bezpečne — bez toho, aby si riešil problémy až neskôr.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prístup je najbezpečnejší, ak chceš použiť AI obrázky verejne (web/kurz) a nechceš zbytočné riziká?"
        options={[
          { label: "🌕", text: "\u201EDám do promptu: sprav to v štýle Disney/Pixar, nech to vyzerá profi a ľuďom známe.\u201C" },
          { label: "⭐", text: "\u201EPoužijem referenciu s logom značky, lebo presne taký štýl chcem dosiahnuť.\u201C" },
          { label: "☀️", text: "\u201EPopíšem prvky štýlu (farby, svetlo, médium), vyhnem sa logám a známym postavám, a do promptu pridám DON'T blok (bez textu, bez fotorealistických tvárí).\u201C" },
        ]}
        correct="☀️"
        explanation="popisuješ štýl bezpečne (bez kopírovania značiek), minimalizuješ rizikové prvky a používaš opakovateľný bezpečnostný blok."
      />
    </PageShell>
  );
}
