import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M02P02() {
  const nav = getNavContext("m02-02-preco-porovnavat");
  return (
    <PageShell title="1️⃣ Prečo porovnávať chatboty" tldr={[
      "Každý chatbot má iný štýl, silné stránky a správanie",
      "Bez porovnania si zvykneš na priemer",
      "Rovnaký prompt do 2 chatbotov = rýchly nadhľad",
    ]} {...nav}>


      <p>Predstav si, že by si celý život používal len jedno jediné náradie. Skrutkovač na klince, kladivo na skrutky. Presne takto veľa ľudí používa chatboty: otvorí prvý, ktorý pozná — a hotovo. Lenže chatboty nie sú „to isté v inom obale". Každý má iný štýl, iné silné stránky a iné správanie.</p>

      <h3>Prečo vznikajú rozdiely medzi chatbotmi</h3>
      <ul>
        <li>iné tréningové dáta (z čoho sa „učili"),</li>
        <li>iné nastavenia (ako striktne sa držia pravidiel),</li>
        <li>iný štýl odpovedí (stručný vs ukecaný, kreatívny vs vecný),</li>
        <li>inú mieru proaktivity (pýta sa doplňujúce otázky vs „strieľa" odpoveď).</li>
      </ul>
      <p>👉 Keď používaš len jedného, nemáš porovnanie. A bez porovnania sa ľahko stane, že si zvykneš na priemer, aj keď existuje lepšia voľba.</p>

      <h3>Kedy sa oplatí porovnať aspoň 2 chatboty</h3>
      <ul>
        <li>ti záleží na výsledku (text, plán, rozhodnutie),</li>
        <li>potrebuješ istotu, že si niečo neprehliadol,</li>
        <li>chceš rýchlo viac pohľadov (nápady, argumenty, varianty).</li>
      </ul>
      <p className="text-sm italic mt-2">💡 <strong>Tip do praxe:</strong> Ak riešiš dôležitú vec, daj rovnaké zadanie aspoň dvom chatbotom. Často ťa prekvapí rozdiel v tom, čo si všimnú, ako to podajú a či navrhnú ďalší krok.</p>

      <h3>„Ako to napísať" – kopírovateľné vety</h3>
      <ul>
        <li>Na porovnanie výstupov: <em>„Odpovedz stručne v bodoch. Na konci navrhni 1 ďalší krok."</em></li>
        <li>Na porovnanie štýlu a proaktivity: <em>„Ak ti niečo chýba, polož mi 1 doplňujúcu otázku."</em></li>
        <li>Na porovnanie použiteľnosti: <em>„Daj mi konkrétne kroky, ktoré viem hneď spraviť."</em></li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Neporovnávaj viac vecí naraz. Ak zmeníš zadanie aj chatbot, nevieš, čo spôsobilo rozdiel.</li>
        <li>Nespoliehaj sa na prvý dojem. Niekedy vyhrá ten, čo píše najkrajšie — nie ten, čo je najužitočnejší.</li>
        <li>Nejde o to nájsť „najlepší chatbot na všetko". Ide o to vedieť si vybrať správny nástroj podľa úlohy.</li>
      </ul>

      <MiniTask title="Reklamácia bez stresu (ChatGPT)">
        <p><strong>Situácia:</strong> Kúpil si slúchadlá a po 2 týždňoch prestalo fungovať jedno ucho. Chceš napísať reklamáciu e-shopu tak, aby bola slušná, vecná a použiteľná.</p>
        <p><strong>Inštrukcia:</strong> Skopíruj do ChatGPT prompt, keď odpovie, pokračuj follow-up promptom a zhodnoť odpovede.</p>
        <p className="mt-3"><strong>👉 Prompt:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-3"><strong>Follow-up:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Uprav text tak, aby bol ešte stručnejší (max 900 znakov) a aby znel slušne, nie pasívne agresívne. Zachovaj formát."
        </div>
        <p className="mt-3"><strong>❓ Otázky k odpovedi (ÁNO/NIE):</strong></p>
        <ul className="text-xs">
          <li>Dodržal formát: 1 veta čo sa stalo + 2–3 vety detaily + jasná požiadavka?</li>
          <li>Obsahuje text všetky 3 fakty?</li>
          <li>Je požiadavka napísaná jednoznačne?</li>
          <li>Znie text slušne a vecne?</li>
          <li>Je text „ready-to-send"?</li>
          <li>Po follow-upe: skrátil text a zachoval formát?</li>
        </ul>
        <p className="mt-3"><strong>🎭 Aký má ChatGPT vibe?</strong></p>
        <ul className="text-xs">
          <li>Naformátoval odpoveď prehľadne?</li>
          <li>Pridal na konci „ďalší krok"?</li>
          <li>Bol „ďalší krok" konkrétny a akčný?</li>
          <li>Pôsobil tón skôr „milý a podporujúci"?</li>
          <li>Použil emoji/smajlíky? Ak áno, pôsobilo to prirodzene?</li>
          <li>Mal si dojem, že ťa ChatGPT vedie a znižuje ti námahu?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>ChatGPT – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá slušne a uhladene, často až „milým" tónom,</li>
          <li>rád dáva výstup do prehľadnej štruktúry (body, kroky, krátke odseky),</li>
          <li>často pridá odporúčanie alebo ďalší krok, aby ťa posunul ďalej,</li>
          <li>niekedy môže pridať aj emoji/smajlíky,</li>
          <li>keď mu dáš follow-up, väčšinou vie text skrátiť a upraviť.</li>
        </ul>
      </ExpectedFinding>
    </PageShell>
  );
}
