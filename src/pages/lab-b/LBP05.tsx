import { PageShell } from "@/components/PageShell";
import { PromptBlock, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-05-skracovanie");

export default function LBP05() {
  return (
    <PageShell title="4️⃣ Skracovanie a editovanie bez straty významu ✂️🧩" prev={nav.prev} next={nav.next}>
      <p>AI je skvelá na generovanie textu… ale v praxi ešte lepšie funguje ako <strong>editor</strong>.</p>
      <p>Táto lekcia je o tom, ako z dlhého alebo „uhladeného" textu spraviť text, ktorý je:</p>
      <ul>
        <li><strong>kratší</strong></li>
        <li><strong>prehľadnejší</strong></li>
        <li><strong>konkrétnejší</strong></li>
        <li>a stále <strong>významovo správny</strong></li>
      </ul>
      <p>👉 Cieľ nie je „vymazať polovicu viet". Cieľ je dostať z textu <strong>podstatu</strong>.</p>

      <hr />

      <h3>🎯 Prečo skracovanie funguje (a prečo sa oplatí)</h3>
      <p>Dlhé texty ľudia väčšinou nečítajú celé. Skenujú:</p>
      <ul>
        <li>hľadajú kľúčové slová,</li>
        <li>preskakujú odseky,</li>
        <li>zachytia len časť informácií.</li>
      </ul>
      <p>AI má navyše tendenciu pridávať:</p>
      <ul>
        <li>vysvetľovanie, ktoré nikto nepotreboval,</li>
        <li>opakovanie tej istej pointy inými slovami,</li>
        <li>„bezpečné" frázy (AI vata).</li>
      </ul>
      <p>Preto sa skracovanie stáva najrýchlejšou cestou k tomu, aby text bol <strong>použiteľný hneď</strong>.</p>

      <hr />

      <h3>✅ Čo znamená „skrátiť dobre"</h3>
      <p>Dobre skrátený text spĺňa 4 veci:</p>
      <ol>
        <li><strong>Zachová význam</strong> (fakty a pointa ostanú rovnaké)</li>
        <li><strong>Zvýrazní podstatné</strong> (čo má čitateľ pochopiť alebo spraviť)</li>
        <li><strong>Odstráni balast</strong> (vatu, opakovanie, zbytočné detaily)</li>
        <li><strong>Zlepší formu</strong> (odseky → body, kroky, checklist)</li>
      </ol>

      <hr />

      <h3>🧱 3 úrovne editovania (praktický model)</h3>
      <p>Keď chceš mať výsledok pod kontrolou, choď v troch krokoch:</p>
      <p><strong>1️⃣ Skrátiť</strong></p>
      <p>Zniž počet slov o 30–60 % bez zmeny významu.</p>
      <p><strong>2️⃣ Spresniť</strong></p>
      <p>Z nejasných viet sprav konkrétne:</p>
      <ul>
        <li>čo presne?</li>
        <li>kto?</li>
        <li>kedy?</li>
        <li>čo je prvý krok?</li>
      </ul>
      <p><strong>3️⃣ Preformátovať</strong></p>
      <p>Dlhé odseky premeň na:</p>
      <ul>
        <li>body,</li>
        <li>kroky,</li>
        <li>checklist,</li>
        <li>krátke „TL;DR".</li>
      </ul>
      <p>👉 Toto je najčastejšie miesto, kde AI vie ušetriť najviac času.</p>

      <hr />

      <h3>🤖 Ako požiadať AI o skracovanie (šablóna)</h3>
      <p>Keď chceš skrátiť text bez rizika, nepýtaj sa len „skráť". Daj AI kontrolu a pravidlá.</p>
      <PromptBlock>„Skráť text o <strong>X %</strong>, zachov význam.{"\n"}1. Najprv vypíš <strong>5 kľúčových bodov</strong>.{"\n"}2. Označ <strong>3 vety</strong>, ktoré sú vata alebo opakovanie (a prečo).{"\n"}3. Daj finálnu verziu ako <strong>max 8 bodov</strong> (alebo max 6 viet).{"\n"}4. Skontroluj, či sa nezmenili fakty alebo význam."</PromptBlock>

      <hr />

      <MiniTask title="Skráť a vyčisti text (A/B porovnanie)">
        <p><strong>Situácia</strong></p>
        <p>Dostal si text, ktorý znie uhladene, ale je dlhý a má vatu. Tvoj cieľ je spraviť z neho krátky a jasný výstup.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv <strong>Prompt 1</strong> a potom <strong>Prompt 2</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>Text (vstup do AI)</strong></p>
        <p>„Chceli by sme vás informovať o tom, že v rámci ďalšieho zlepšovania našich procesov a celkového fungovania sme sa rozhodli upraviť spôsob, akým budeme do budúcna riešiť požiadavky a otázky. V poslednej dobe sa totiž ukazuje, že keď sa témy riešia rôznymi spôsobmi a cez viacero kanálov, často sa stáva, že sa informácie stratia, riešia sa duplicitne alebo sa zbytočne predlžuje čas vybavenia. Z tohto dôvodu budeme radi, ak sa nám podarí nastaviť jednotnejší spôsob komunikácie a zároveň dosiahnuť vyššiu efektivitu. Ďakujeme všetkým za pochopenie a spoluprácu."</p>

        <p><strong>Prompt 1 – slabý</strong></p>
        <p>„Skráť tento text."</p>
        <p><strong>Prompt 2 – dobrý</strong></p>
        <p>„Skráť text o <strong>50 %</strong>, zachov význam.</p>
        <ol>
          <li>Najprv vypíš <strong>5 kľúčových bodov</strong> (čo sa mení a prečo).</li>
          <li>Označ <strong>3 vety</strong>, ktoré sú vata alebo opakovanie (a prečo).</li>
          <li>Finálnu verziu daj ako <strong>max 8 bodov</strong>.</li>
          <li>Skontroluj, či sa nezmenili fakty alebo význam."</li>
        </ol>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je výstup z Prompt 2 prehľadnejší než z Prompt 1?</li>
          <li>Sú kľúčové informácie v Prompt 2 viditeľné na prvý pohľad?</li>
          <li>Odstránil Prompt 2 opakovanie a AI vatu?</li>
          <li>Zostal zachovaný význam (nezmenila sa pointa)?</li>
          <li>Je výsledok z Prompt 2 použiteľný ako finálny text bez ďalších úprav?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Prompt 2</strong> dá lepší výsledok, lebo AI nedostane len pokyn „skráť", ale aj kontrolný rámec: kľúčové body, identifikáciu vaty a formát finálneho výstupu.</p>
        <p><strong>Prompt 1</strong> často spraví len kratšiu verziu toho istého štýlu — stále s vatou a bez jasných bodov.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
