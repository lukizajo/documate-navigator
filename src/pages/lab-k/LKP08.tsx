import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP08() {
  const nav = getNavContext("lk-08-unava");
  return (
    <PageShell title="7\u20E3\uFE0F AI \u00FAnava a slep\u00E1 d\u00F4vera" prev={nav.prev} next={nav.next}>
      <p><strong>Signály:</strong></p>
      <ul>
        <li>viac klikáš než myslíš</li>
        <li>berieš prvú odpoveď bez kontroly</li>
        <li>prestávaš rozumieť vlastnému výsledku</li>
      </ul>

      <p><strong>🧠 Mini-pravidlo</strong></p>
      <p><strong>Ak nerozumieš výsledku, nemôžeš zaň niesť zodpovednosť.</strong></p>

      <hr />

      <p><strong>⚡ Rýchly scenár</strong></p>
      <p>Iteruješ text už 15 min a stále to nie je ono. Vtedy sprav: (1) <strong>zastav iteráciu</strong>, (2) <strong>prepni na sparring</strong>, (3) dopíš <strong>2 kritériá kvality</strong>.</p>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Keď cítiš {"\u201E"}AI únavu{"\u201C"}, sprav jednu z vecí:</p>
      <ul>
        <li>prepni rolu na <strong>sparring</strong> (nech sa pýta, nie nech generuje)</li>
        <li>skráť zadanie na 2 vety</li>
        <li>nastav <strong>stop pravidlo</strong> (max 3 iterácie)</li>
      </ul>
      <p>Toto je presne moment, kedy má zmysel tvoja <strong>kontrola kvality</strong> (3 otázky).</p>

      <hr />

      <MiniTask title="Moje signály a protiopatrenia">
        <p><strong>Inštrukcia</strong> Napíš výstup v tomto formáte:</p>
        <ul>
          <li>3× 🚨 signál (1 veta)</li>
          <li>3× 🛠️ protiopatrenie (1 veta)</li>
          <li>1× ⛔ stop pravidlo (1 veta)</li>
        </ul>
        <PromptBlock>
          {"\u201E"}Pomôž mi nastaviť ochranu pred AI únavou a slepou dôverou.{"\u201C"}
          <br />Moja top situácia: [___]
          <br /><br />
          Navrhni:
          <br />
          <ul>
            <li>3 signály, že som v AI únave</li>
            <li>3 protiopatrenia (praktické, krátke)</li>
            <li>1 stop pravidlo (kedy preruším prácu s AI a zmením prístup)</li>
          </ul>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Mám 3 signály, ktoré viem na sebe spoznať?</li>
          <li>Mám 3 protiopatrenia, ktoré viem spraviť do 60 sekúnd?</li>
          <li>Mám stop pravidlo, ktoré viem dodržať aj keď sa ponáhľam?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Systém nie je len o efektivite – je aj o psychohygiene.</p>
      </ExpectedFinding>

      <MiniTest
        question={"\uD83D\uDC49 \u010Co je najlep\u0161\u00ED krok, ke\u010F si uvedom\u00ED\u0161, \u017Ee len bezmy\u0161lienkovite iteruje\u0161?"}
        options={[
          { label: "🌕", text: "Nastaviť stop pravidlo / zmeniť rolu / vrátiť sa na zámer." },
          { label: "⭐", text: "Pridať ešte viac detailov do promptu." },
          { label: "☀️", text: "Ignorovať to a dokončiť to." },
        ]}
        correct="🌕"
        explanation="Keď si v špirále iterácií, potrebuješ prerušiť vzorec a vrátiť sa k zámeru alebo kontrole."
      />
      <p><em>(Ulož si výstup ako: <strong>K7_unava_v1</strong>.)</em></p>
    </PageShell>
  );
}
