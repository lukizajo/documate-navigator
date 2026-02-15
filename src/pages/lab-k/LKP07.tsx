import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP07() {
  const nav = getNavContext("lk-07-automatizacia");
  return (
    <PageShell title="6\u20E3\uFE0F Syst\u00E9m vs. automatiz\u00E1cia" prev={nav.prev} next={nav.next}>
      <ul>
        <li><strong>Systém</strong> = režimy + roly + hranice + workflow</li>
        <li><strong>Automatizácia</strong> = keď sa to spúšťa samo a je to stabilné</li>
      </ul>

      <p><strong>🧠 Mini-pravidlo</strong></p>
      <p><strong>Automatizácia bez systému len urýchli chaos.</strong></p>

      <hr />

      <p><strong>⚡ Rýchly scenár (1 úloha cez filter)</strong></p>
      <p>{"\u201E"}Týždenný report z dát → email manažérovi{"\u201C"}</p>
      <ul>
        <li>opakuje sa často ✅</li>
        <li>vstupy/výstupy sú jasné ✅</li>
        <li>kontrola kvality je možná ✅</li>
      </ul>
      <p>→ kandidát na automatizáciu</p>
      <p>Kontra príklad: {"\u201E"}Dôležité rozhodnutie (rozpočet/ponuka/strategický email){"\u201C"} → vysoké riziko / nestabilné → neautomatizovať.</p>

      <hr />

      <p><strong>✅ Filter na automatizáciu (3 otázky)</strong></p>
      <ul>
        <li>Opakuje sa to často?</li>
        <li>Je to stabilné (jasné vstupy/výstupy)?</li>
        <li>Viem skontrolovať kvalitu?</li>
      </ul>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Ak nevieš, či je to stabilné: sprav to najprv <strong>3× ručne</strong> podľa rovnakej šablóny. Až potom automatizuj.</p>

      <hr />

      <MiniTask title="Kandidát na automatizáciu">
        <p><strong>Inštrukcia</strong> Napíš výstup v tomto formáte:</p>
        <ul>
          <li>✅ Kandidát na automatizáciu (1 veta prečo podľa filtra)</li>
          <li>🛑 Neautomatizujem (1 veta prečo)</li>
          <li>⛔ STOP pravidlo (1 veta: kedy automatizáciu zastavíš)</li>
        </ul>
        <PromptBlock>
          {"\u201E"}Pomôž mi vybrať kandidáta na automatizáciu.{"\u201C"}
          <br />Moje top situácie: [___]
          <br /><br />
          Podľa filtra (opakovanie/stabilita/kontrola) navrhni:
          <br /><br />
          1. 1 najlepší kandidát na automatizáciu (1 veta prečo)<br />
          2. 1 vec, ktorú automatizovať neodporúčaš (1 veta prečo)<br />
          3. 1 STOP pravidlo: kedy automatizáciu zastavím, ak začne robiť chyby.
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Opakuje sa to aspoň 1× týždenne (alebo má to veľký dopad)?</li>
          <li>Viem presne popísať vstup a výstup jednou vetou?</li>
          <li>Viem urobiť kontrolu kvality za &lt; 2 min?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Automatizácia dáva zmysel až vtedy, keď je systém stabilný aj ručne.</p>
      </ExpectedFinding>

      <MiniTest
        question={"\uD83D\uDC49 Kedy je automatiz\u00E1cia dobr\u00FD n\u00E1pad?"}
        options={[
          { label: "🌕", text: "Keď je to jednorazové, ale nechcem to robiť ja." },
          { label: "⭐", text: "Keď to je nejasné, ale AI si poradí." },
          { label: "☀️", text: "Keď sa to opakuje, je to stabilné a viem skontrolovať kvalitu." },
        ]}
        correct="☀️"
        explanation="Automatizácia dáva zmysel, keď máš jasný proces a kontrolu — inak len zrýchliš chyby."
      />
      <p><em>(Ulož si výstup ako: <strong>K6_automatizacia_v1</strong>.)</em></p>
    </PageShell>
  );
}
