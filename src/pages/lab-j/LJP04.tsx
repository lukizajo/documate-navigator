import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP04() {
  const nav = getNavContext("lj-04-varianty");
  return (
    <PageShell title="3\uFE0F\u20E3 Varianty namiesto verdiktu" prev={nav.prev} next={nav.next}>
      <p>
        Pri rozhodovaní nechceš jednu odpoveď. Chceš <strong>3 možnosti</strong> a porovnanie rovnakými kritériami.
      </p>
      <p>Jednoduchý trik: nechaj AI navrhnúť</p>
      <ul>
        <li>konzervatívnu možnosť,</li>
        <li>realistickú možnosť,</li>
        <li>odvážnu možnosť.</li>
      </ul>
      <p>A potom trade-offs: <strong>čo získam a čo stratím</strong>.</p>

      <hr />

      <h3>🔎 Mikro-príklad</h3>
      <p>A) Konzervatívna: minimum zmeny, nižšie riziko, pomalší efekt.</p>
      <p>B) Realistická: vyvážený kompromis, najčastejšia cesta.</p>
      <p>C) Odvážna: rýchly efekt, vyššie riziko, potrebuje kontrolu.</p>
      <p>
        Pravidlo, ktoré ti ušetrí nervy: porovnávaj varianty <strong>rovnakými kritériami</strong> a v <strong>rovnakom formáte</strong> — inak to nie je porovnanie.
      </p>
      <p>
        Ešte jedna otázka, ktorá často rozhodne: <strong>ktorý variant je najreverzibilnejší</strong> (viem ho najľahšie zvrátiť, ak nefunguje)?
      </p>
      <p><strong>💡 Tip do praxe:</strong> {"\u201E"}3 varianty → 1 vyber → 1 vylepši{"\u201C"} (neiteruj chaosom).</p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>AI ti dá 3 varianty, ktoré sú v skutočnosti to isté (len iné slová).</li>
        <li>Ak zmeníš kritériá pri každej možnosti, porovnanie nedáva zmysel.</li>
        <li>{"\u201E"}Najkrajšie znie{"\u201C"} nie je {"\u201E"}najlepšie funguje{"\u201C"}.</li>
      </ul>

      <hr />

      <MiniTask title="A/B/C porovnanie">
        <p><strong>Situácia</strong></p>
        <p>Máš rámec z lekcie 2.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Nechaj AI navrhnúť 3 varianty a porovnať ich podľa tvojich kritérií. Výstup: krátka tabuľka/prehľad A/B/C.</p>
        <PromptBlock>
          {"\u201E"}Vygeneruj mi 3 odlišné možnosti riešenia môjho scenára a porovnaj ich podľa rovnakých kritérií.<br />
          Scenár: [***] Cieľ: [***] Kritériá (3): [***] Obmedzenia (2): [***]<br />
          Chcem: A) Konzervatívna možnosť B) Realistická možnosť C) Odvážna možnosť<br />
          Pre každú možnosť napíš:<br />
          • 2 hlavné výhody<br />
          • 2 hlavné nevýhody<br />
          • Najväčší trade-off (1 veta)<br />
          • Reverzibilita (1 veta: ako ľahko sa dá zvrátiť)<br /><br />
          Potom sprav mini-skóre (1–5) pre každé kritérium + 1 veta prečo:<br />
          • Kritérium 1: A/B/C<br />
          • Kritérium 2: A/B/C<br />
          • Kritérium 3: A/B/C<br /><br />
          Na konci:<br />
          1. Navrhni, ktorú možnosť by si zvolil pri mojich kritériách (len odporúčanie).<br />
          2. Navrhni 1 úpravu, ktorá túto vybranú možnosť zlepší (konkrétne).{"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sú možnosti naozaj odlišné (nie len preformulované)?</li>
          <li>Je porovnanie robené podľa rovnakých kritérií?</li>
          <li>Má každá možnosť jasný trade-off?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že rozhodovanie je o výmene (trade-offoch), nie o {"\u201E"}dokonalom{"\u201C"} riešení.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 Pre\u010Do je lep\u0161ie p\u00FDta\u0165 si 3 varianty ne\u017E 1 odpove\u010F?"}
        options={[
          { label: "🌕", text: "Lebo AI potom píše dlhšie odpovede." },
          { label: "⭐", text: "Lebo vidíš trade-offs a máš z čoho vyberať." },
          { label: "☀️", text: "Lebo 3 varianty sú vždy pravdivejšie." },
        ]}
        correct="⭐"
        explanation="Varianty uk\u00E1\u017Eu dopady a kompromisy, ktor\u00E9 pri 1 odpovedi nevid\u00ED\u0161."
      />
    </PageShell>
  );
}
