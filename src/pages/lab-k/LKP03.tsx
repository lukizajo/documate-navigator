import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LKP03() {
  const nav = getNavContext("lk-03-rezimy");
  return (
    <PageShell title="2\u20E3\uFE0F Tri re\u017Eimy pr\u00E1ce s AI" prev={nav.prev} next={nav.next}>
      <p>Tri režimy ti pomôžu prestať miešať všetko dokopy.</p>
      <ul>
        <li><strong>Think</strong> = ujasňujem problém, rozhodnutie, smer</li>
        <li><strong>Create</strong> = tvorím varianty, texty, koncepty</li>
        <li><strong>Operate</strong> = robím rutinu, kroky, šablóny, opakovanie</li>
      </ul>

      <p><strong>🧠 Mini-pravidlo</strong></p>
      <p><strong>Najviac chýb vzniká, keď preskočíš Think.</strong></p>

      <hr />

      <p><strong>🔎 Kotva: 1 veta, ktorá to vysvetlí</strong></p>
      <ul>
        <li>Think = {"\u201E"}najprv si ujasním, čo chcem.{"\u201C"}</li>
        <li>Create = {"\u201E"}vymyslím varianty.{"\u201C"}</li>
        <li>Operate = {"\u201E"}urobím to podľa šablóny.{"\u201C"}</li>
      </ul>

      <hr />

      <p><strong>⚡ Rýchly scenár (ten istý problém v 3 režimoch)</strong></p>
      <p>{"\u201E"}Chcem pripraviť email klientovi.{"\u201C"}</p>
      <ul>
        <li>Think: ujasni cieľ, tón a čo nesmie zaznieť</li>
        <li>Create: navrhni 3 verzie</li>
        <li>Operate: vyplň šablónu a sprav finálny text</li>
      </ul>

      <hr />

      <p><strong>🧯 Mini-debugging</strong></p>
      <p>Ak sa nevieš rozhodnúť, ktorý režim zvoliť, použi otázku:</p>
      <ul>
        <li>Potrebujem <strong>jasno</strong>? → Think</li>
        <li>Potrebujem <strong>varianty</strong>? → Create</li>
        <li>Potrebujem <strong>spraviť kroky</strong>? → Operate</li>
      </ul>
      <p>Ak AI generuje veľa, ale nesedí to: vráť sa do <strong>Think</strong> a dopíš <strong>1 vetu zámeru</strong> + <strong>2 kritériá</strong>, podľa ktorých to budeš hodnotiť.</p>

      <hr />

      <MiniTask title="Priraď režim">
        <p><strong>Inštrukcia</strong> Ku každej z tvojich 3 situácií z inventúry priraď režim Think/Create/Operate.</p>
        <PromptBlock>
          {"\u201E"}Toto sú moje 3 situácie, kde používam AI:{"\u201C"}
          <br /><br />
          1. [___]<br />
          2. [___]<br />
          3. [___]
          <br /><br />
          Priraď ku každej situácii režim Think / Create / Operate. Ku každej dopíš 1 vetu: čo je typická chyba, keď zvolím zlý režim.
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je pri každej situácii jasný režim?</li>
          <li>Viem, čo sa pokazí, keď zvolím zlý režim?</li>
          <li>Je režim zvolený podľa toho, čo chcem dostať (jasno / varianty / kroky)?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Režim je {"\u201E"}prepínač{"\u201C"}, ktorý zvyšuje kvalitu bez toho, aby si písal dlhšie prompty.</p>
      </ExpectedFinding>

      <MiniTest
        question={"\uD83D\uDC49 Ktor\u00FD re\u017Eim je najlep\u0161\u00ED, ke\u010F potrebuje\u0161 urobi\u0165 rutinn\u00FA \u00FAlohu pod\u013Ea \u0161abl\u00F3ny?"}
        options={[
          { label: "🌕", text: "Operate." },
          { label: "⭐", text: "Think." },
          { label: "☀️", text: "Create." },
        ]}
        correct="🌕"
        explanation="Operate je ideálny na rutinu a opakovateľné kroky — keď už máš jasno, čo má byť výsledok."
      />
      <p><em>(Ulož si výstup ako: <strong>K2_rezimy_v1</strong>.)</em></p>
    </PageShell>
  );
}
