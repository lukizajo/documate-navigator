import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lc-07-prakticka-uloha");

export default function LCP07() {
  return (
    <PageShell title="🎓 Praktická úloha – Vlastný asistent v praxi" prev={nav.prev} next={nav.next}>
      <MiniTask title="Vlastný asistent v praxi">
        <p>Na záver spojíš všetko z LABu do jednej reálnej úlohy. Cieľom nie je mať „dokonalého asistenta", ale vedome použiť stavebné bloky: <strong>špecifikácia</strong>, <strong>iterácia</strong>, <strong>testovanie</strong>, <strong>hranice</strong> a <strong>dolaďovanie</strong>.</p>

        <p><strong>Zadanie</strong></p>
        <p>Vytvor 1 asistenta na jeden konkrétny use case (vyber si jednu tému):</p>
        <ul>
          <li>editor textov (skrátiť, upratať, zmeniť tón)</li>
          <li>asistent na zhrnutia (z článkov / mailov / meeting notes)</li>
          <li>asistent na plánovanie (workshop, projekt, týždeň)</li>
          <li>asistent na porovnania (nástroje, možnosti, plusy/mínusy)</li>
        </ul>

        <p><strong>Požiadavky na výsledok</strong></p>
        <ul>
          <li>asistent má jasnú <strong>rolu a cieľ</strong> (nie „buď užitočný")</li>
          <li>odpovedá v <strong>stabilnom formáte</strong> (napr. kroky / body / checklist)</li>
          <li>nepokračuje bez vstupov (pýta sa <strong>max 2 otázky</strong>)</li>
          <li><strong>označuje neistotu</strong> a nenahrádza fakty domnienkami</li>
          <li>má <strong>hranice pri citlivých témach a dátach</strong></li>
        </ul>

        <hr />

        <p><strong>Tvoja úloha</strong></p>
        <p>1️⃣ Vyber use case a napíš 1 vetu, čo má asistent robiť.</p>
        <p>2️⃣ Napíš špecifikáciu asistenta:</p>
        <ul>
          <li>rola, cieľ, publikum</li>
          <li>formát odpovedí</li>
          <li>postup práce</li>
          <li>hranice a kvalita</li>
        </ul>
        <p>3️⃣ Vytvor testovaciu sadu (6–9 testov):</p>
        <ul>
          <li>bežné scenáre (3×)</li>
          <li>hraničné prípady (2–3×)</li>
          <li>pokus o zneužitie / riziko (1–2×)</li>
        </ul>
        <p>4️⃣ Spusť testy a zapisuj výsledok (OK / FAIL).</p>
        <p>5️⃣ Uprav 1–3 pravidlá, ktoré najviac zlepšia správanie.</p>
        <p>6️⃣ Retestuj tie isté testy a porovnaj rozdiel.</p>

        <hr />

        <p><strong>🛑 STOP/GO kontrola</strong></p>
        <p>Skontroluj, že asistent:</p>
        <ul>
          <li>nežiada a neukladá citlivé údaje bez dôvodu</li>
          <li>nepôsobí ako „garant pravdy" pri neistote</li>
          <li>jasne povie, kedy potrebuje viac vstupov</li>
          <li>odmietne nevhodné požiadavky a ponúkne bezpečnú alternatívu</li>
        </ul>

        <p><strong>❓ Sebakontrola (ÁNO/NIE)</strong></p>
        <p>Má asistent jasnú rolu a cieľ jednou vetou?</p>
        <p>Má stabilný formát odpovedí (napr. kroky/bodový zoznam)?</p>
        <p>Spýta sa max 2 otázky, keď chýbajú vstupy?</p>
        <p>Označí neistotu a navrhne spôsob overenia (namiesto tipovania)?</p>
        <p>Prešiel aspoň 1 hraničným testom a 1 pokusom o zneužitie?</p>
        <p>Po úprave pravidiel si spravil retest rovnakých testov?</p>
        <p>Je asistent eticky/právne GO pri citlivých témach a dátach?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Budeš mať hotového asistenta, ktorého vieš reálne používať, a postup, podľa ktorého si vieš spraviť ďalšieho len výmenou use case.</p>
      </ExpectedFinding>

      <div className="rounded-lg p-5 my-6 border" style={{ background: "hsl(var(--muted))", borderColor: "hsl(var(--border))" }}>
        <p className="font-semibold text-sm mb-2">💡 Bonus tip</p>
        <p className="text-sm">Ak nevieš, ako začať, nechaj AI spraviť prvý pokus a potom povedz: „Z tohto výsledku vytiahni 5–7 pravidiel správania asistenta a navrhni testy, na ktorých ho overíme."</p>
      </div>
    </PageShell>
  );
}
