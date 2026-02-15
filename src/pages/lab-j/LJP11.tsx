import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP11() {
  const nav = getNavContext("lj-11-prakticka-uloha");
  return (
    <PageShell title="\uD83C\uDF93 Praktick\u00E1 \u00FAloha \u2013 Rozhodnutie v praxi" prev={nav.prev} next={nav.next}>
      <h3>Zadanie</h3>
      <p>
        Vyber si 1 reálny scenár (pracovný alebo osobný), ktorý chceš rozhodnúť v najbližších dňoch, a prejdi celý proces z LABu s AI ako sparring partnerom.
      </p>

      <h3>Požiadavky na výsledok</h3>
      <ul>
        <li>máš jasný framing (cieľ + 3 kritériá + 2 obmedzenia + 1 riziko)</li>
        <li>máš 3 varianty A/B/C s trade-offs</li>
        <li>máš {"\u201E"}stress test{"\u201C"} (riziká + predpoklady + otázky)</li>
        <li>máš mini-overenie pri high-risk (2 kritické tvrdenia + kde ich overíš)</li>
        <li>máš headline test + 1 mitigáciu</li>
        <li>prešiel si hard-stop pravidlá</li>
        <li>finálne rozhodnutie vieš napísať v 4 vetách</li>
      </ul>

      <h3>Tvoja úloha</h3>
      <p>1️⃣ Vyber scenár (1 veta)</p>
      <p>2️⃣ Sprav framing (cieľ/kritériá/obmedzenia/riziko)</p>
      <p>3️⃣ Vygeneruj 3 varianty A/B/C + trade-offs</p>
      <p>4️⃣ Sprav {"\u201E"}stress test{"\u201C"} (riziká/predpoklady/otázky)</p>
      <p>5️⃣ Ak high-risk: over 2 kritické tvrdenia (kde a ako)</p>
      <p>6️⃣ Headline test + mitigácia</p>
      <p>7️⃣ Hard-stop check (čo do AI nepatrí / či treba eskalovať)</p>
      <p>8️⃣ Checklist pred rozhodnutím + finálne rozhodnutie v 4 vetách</p>

      <h3>Test v praxi</h3>
      <p>Skús si predstaviť, že svoje rozhodnutie vysvetľuješ:</p>
      <ul>
        <li>kolegovi, ktorý nesúhlasí</li>
        <li>človeku, ktorého sa to týka</li>
        <li>a {"\u201E"}verejnosti{"\u201C"} (headline test)</li>
      </ul>
      <p>Ak sa pri niektorom bode zasekneš, vráť sa o krok späť (najčastejšie framing alebo riziká).</p>

      <h3>❓ Sebakontrola (ÁNO/NIE)</h3>
      <ul>
        <li>Viem povedať cieľ jednou vetou?</li>
        <li>Mám 3 varianty, ktoré sú naozaj odlišné?</li>
        <li>Poznám trade-offs každej možnosti?</li>
        <li>Mám pomenované riziká a predpoklady?</li>
        <li>Overil som 2 kritické tvrdenia (ak je to high-risk)?</li>
        <li>Prešiel som hard-stop pravidlá?</li>
        <li>Viem rozhodnutie napísať v 4 vetách a obhájiť ho?</li>
      </ul>

      <ExpectedFinding>
        Nebudeš mať {"\u201E"}odpoveď od AI{"\u201C"}, ale <strong>proces</strong>, ktorý ti zníži chyby a dá ti istotu, že rozhodnutie stojí na rámcoch, nie na dojme.
      </ExpectedFinding>

      <hr />

      <p>
        💡 <strong>Bonus tip (voliteľne)</strong><br />
        Po týždni sa k rozhodnutiu vráť a odpovedz si: {"\u201E"}Čo som podcenil v framingu?{"\u201C"} — toto je najrýchlejšia cesta k lepším rozhodnutiam.
      </p>
    </PageShell>
  );
}
