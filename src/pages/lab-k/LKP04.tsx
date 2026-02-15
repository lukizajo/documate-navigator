import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP04() {
  const nav = getNavContext("lk-04-roly");
  return (
    <PageShell title="3\u20E3\uFE0F Roly AI v syst\u00E9me" prev={nav.prev} next={nav.next}>
      <p>AI môže hrať rôzne roly – problém je, keď jej nedáš žiadnu.</p>
      <ul>
        <li><strong>Sparring partner</strong> – kladie otázky, ujasňuje</li>
        <li><strong>Editor</strong> – zlepšuje, skracuje, prepisuje</li>
        <li><strong>Operátor</strong> – vytvára výstup podľa šablóny</li>
        <li><strong>Kontrolór</strong> – hľadá chyby, riziká, slepé miesta</li>
      </ul>

      <p><strong>🧠 Mini-pravidlo</strong></p>
      <p><strong>1 rola = 1 kontext.</strong></p>

      <hr />

      <p><strong>⚡ Rýchly scenár (ten istý problém v 4 roliach)</strong></p>
      <p>{"\u201E"}Mám text na LinkedIn a chcem ho zlepšiť.{"\u201C"}</p>
      <ul>
        <li>Sparring: spýta sa na cieľ, publikum a tón</li>
        <li>Editor: preformuluje a skráti text</li>
        <li>Operátor: vyrobí 3 hotové verzie podľa šablóny</li>
        <li>Kontrolór: vytiahne riziká, nejasnosti a slabé miesta</li>
      </ul>

      <hr />

      <p><strong>⚠️ Typická chyba</strong></p>
      <p>Pýtaš od AI naraz: {"\u201E"}vymysli, napíš, skontroluj, zhodnoť{"\u201C"} → výsledok je často priemer vo všetkom.</p>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Ak odpovede lietajú sem-tam, skontroluj:</p>
      <ul>
        <li>nepýtaš naraz viac rolí?</li>
        <li>nemáš v jednom chate viac rôznych cieľov?</li>
      </ul>
      <p>Keď miešaš roly, sprav 2 kroky:</p>
      <ol>
        <li>vyber <strong>1 rolu</strong>,</li>
        <li>napíš <strong>1 vetu</strong>, čo je výsledok (čo má byť hotové).</li>
      </ol>

      <hr />

      <MiniTask title="Moje top roly">
        <p><strong>Inštrukcia</strong> Napíš výstup v tomto formáte:</p>
        <ul>
          <li>2× ✅ rola, ktorú používam najčastejšie (+ 1 veta prečo)</li>
          <li>1× 🧪 rola na tréning (+ 1 veta kedy ju použijem)</li>
        </ul>
        <PromptBlock>
          {"\u201E"}Pomôž mi zvoliť rolu AI pre moje situácie.{"\u201C"}
          <br />Moje 3 situácie:
          <br /><br />
          1. [___]<br />
          2. [___]<br />
          3. [___]
          <br /><br />
          Pre každú situáciu navrhni najlepšiu rolu (sparring/editor/operátor/kontrolór) + 1 vetu prečo. Na záver mi pomôž vybrať 1 rolu, ktorú mám trénovať, a napíš 1 vetu: kedy ju použijem.
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Viem pre každú situáciu povedať rolu?</li>
          <li>Držím pravidlo 1 rola = 1 kontext?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Rola je najrýchlejší spôsob, ako zvýšiť kvalitu odpovedí bez {"\u201E"}prompt románu{"\u201C"}.</p>
      </ExpectedFinding>

      <MiniTest
        question={"\uD83D\uDC49 Ktor\u00E1 rola je najlep\u0161ia, ke\u010F chce\u0161 dosta\u0165 3 hotov\u00E9 verzie textu pod\u013Ea \u0161abl\u00F3ny?"}
        options={[
          { label: "🌕", text: "Operátor." },
          { label: "⭐", text: "Kontrolór." },
          { label: "☀️", text: "Editor." },
        ]}
        correct="🌕"
        explanation="Operátor je rola na výrobu hotových výstupov podľa šablóny."
      />
      <p><em>(Ulož si výstup ako: <strong>K3_roly_v1</strong>.)</em></p>
    </PageShell>
  );
}
