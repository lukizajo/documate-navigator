import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP08() {
  const nav = getNavContext("lj-08-hard-stop");
  return (
    <PageShell title="7\uFE0F\u20E3 Hard-stop pravidl\u00E1: kedy AI nepou\u017Ei\u0165" prev={nav.prev} next={nav.next}>
      <p>
        Sú situácie, kde AI do procesu nepatrí — alebo iba s prísnou kontrolou a anonymizáciou.
      </p>
      <p>Zapamätaj si 3 hard-stop kategórie:</p>
      <ul>
        <li><strong>Dáta:</strong> PII, NDA, interné info, prístupové údaje, citlivé dokumenty.</li>
        <li><strong>Ľudia:</strong> HR rozhodnutia, hodnotenia výkonu, disciplinárky, citlivé konflikty.</li>
        <li><strong>Právo & bezpečnosť:</strong> legal/compliance, zmluvy, security, incidenty.</li>
      </ul>

      <hr />

      <h3>🔎 Mikro-príklad (anonymizácia)</h3>
      <p>
        Namiesto {"\u201E"}Peter Novák z tímu X má výkon Y{"\u201C"} → {"\u201E"}člen tímu má pokles výkonu{"\u201C"} + odstráň identifikátory + čísla zmeň na intervaly (napr. {"\u201E"}o 20–30 %{"\u201C"}) a nechaj len to, čo je nutné pre kontext.
      </p>
      <p><strong>💡 Tip do praxe:</strong> {"\u201E"}Ak by som to neukázal kolegovi, nedám to ani do AI.{"\u201C"}</p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Copypaste interných dokumentov do verejných nástrojov.</li>
        <li>{"\u201E"}Veď je to len na chvíľu{"\u201C"} (najhoršia veta).</li>
        <li>Rozhodnutia o ľuďoch bez kontroly.</li>
      </ul>

      <hr />

      <MiniTask title="STOP alebo GO">
        <p><strong>Situácia</strong></p>
        <p>Máš svoj scenár.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Nechaj AI nájsť STOP riziká v tom, čo by si jej mohol poslať, a navrhnúť bezpečnú verziu vstupu.</p>
        <PromptBlock>
          {"\u201E"}Skontroluj môj scenár z pohľadu hard-stop pravidiel (dáta, ľudia, právo & bezpečnosť).<br />
          Scenár: [___]<br /><br />
          1. Vypíš 3 veci, ktoré NESMIEM vložiť do AI (ak by som ich mal v podkladoch).<br />
          2. Navrhni, ako to anonymizovať alebo zovšeobecniť, aby to bolo bezpečné.<br />
          3. Napíš mi finálnu bezpečnú verziu vstupu (2–5 viet), ktorú môžem vložiť do AI.<br />
          4. Povedz mi, či je toto rozhodnutie {"\u201E"}STOP{"\u201C"} (treba eskalovať) alebo {"\u201E"}GO{"\u201C"} (môžem pokračovať) – a prečo.{"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Mám jasne pomenované 3 STOP veci?</li>
          <li>Viem, ako anonymizovať vstup?</li>
          <li>Mám hotovú bezpečnú verziu vstupu?</li>
          <li>Je jasné, či potrebujem ďalšiu ľudskú kontrolu?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že bezpečnosť nie je {"\u201E"}doplnok{"\u201C"} — je to súčasť dobrého procesu.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 Ktor\u00E1 situ\u00E1cia je najbli\u017E\u0161ie k \u201Ehard-stop\u201C?"}
        options={[
          { label: "🌕", text: "Chcem zhrnúť interný dokument pre kolegu (bez citlivých údajov)." },
          { label: "⭐", text: "Porovnávam tri dizajny banneru pre Instagram." },
          { label: "☀️", text: "Riešim HR rozhodnutie o konkrétnom človeku + mám citlivé údaje." },
        ]}
        correct="☀️"
        explanation="HR + citliv\u00E9 \u00FAdaje = vysok\u00E9 riziko a potreba pr\u00EDsnych pravidiel."
      />
    </PageShell>
  );
}
