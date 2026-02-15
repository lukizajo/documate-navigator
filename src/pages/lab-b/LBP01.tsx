import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-01-uvod");

export default function LBP01() {
  return (
    <PageShell title="🅾️ Úvod" prev={nav.prev} next={nav.next}>
      <p>V moduloch sme si vysvetlili, ako AI funguje, prečo vie pôsobiť presvedčivo aj keď nemá pravdu, a prečo na zadaní záleží viac než na „magickom nástroji".</p>
      <p>Tento LAB je praktická dráha zameraná na jednu konkrétnu zručnosť: <strong>písať (a upravovať) texty s pomocou AI tak, aby boli jasné, stručné a použiteľné</strong>.</p>
      <p>Veľa ľudí používa AI na texty takto: „Napíš mi…" → dostanú pekný odsek → a potom ho aj tak musia prerobiť.</p>
      <p>V praxi býva rozdiel medzi priemerným a výborným výsledkom v troch veciach:</p>
      <ul>
        <li>či si najprv vypýtaš <strong>štruktúru</strong> (kostru), nie hotový text,</li>
        <li>či používaš AI ako <strong>editora</strong> (skráť, sprehľadni, zmeň tón), nie len ako autora,</li>
        <li>či si vieš spraviť rýchlu <strong>kontrolu kvality</strong> (vata, nepresnosti, zbytočná istota).</li>
      </ul>
      <p>👉 Cieľom LABu nie je, aby AI písala za teba.</p>
      <p>Cieľom je, aby si ty vedel rýchlo dostať text do finálnej podoby – v práci aj v osobnom živote.</p>
      <p>A platí tu rovnaké pravidlo ako v celom kurze: <strong>AI asistuje, človek rozhoduje. ✅</strong></p>

      <hr />

      <h3>🧭 Prehľad LABu</h3>
      <p>V tomto LABe si ukážeme jednoduchý postup, ako prepnúť AI z režimu „generuj text" do režimu „pomôž mi napísať dobrý text":</p>
      <ul>
        <li><strong>štruktúra pred štýlom</strong> (najprv osnova, až potom text),</li>
        <li><strong>skracovanie a editovanie</strong> (odstránenie vaty, sprehľadnenie),</li>
        <li><strong>tón a forma</strong> (ako znieť vecne, priateľsky, neutrálne – podľa situácie),</li>
        <li><strong>kontrola kvality</strong> (fakty, prehnaná istota, citlivé údaje),</li>
        <li><strong>AI ako kritik</strong> (čo je slabé, čo chýba, čo by čitateľ nepochopil).</li>
      </ul>
      <p>Na konci všetko spojíš do jedného výstupu: <strong>tvoj finálny text, pripravený na použitie</strong>.</p>

      <hr />

      <h3>🎯 Čo sa v tomto LABe naučíš?</h3>
      <p>Po absolvovaní LAB B budeš vedieť:</p>
      <ul>
        <li>spraviť z nejasnej myšlienky <strong>jasnú osnovu</strong>,</li>
        <li>skrátiť text bez straty významu a odstrániť <strong>AI vatu</strong>,</li>
        <li>nastaviť <strong>tón a formát</strong> (správa, email, návod, FAQ),</li>
        <li>použiť AI ako <strong>kritika</strong> a rýchlo zvýšiť kvalitu,</li>
        <li>znížiť riziko <strong>nepresností</strong> a nechceného zdieľania citlivých informácií.</li>
      </ul>
    </PageShell>
  );
}
