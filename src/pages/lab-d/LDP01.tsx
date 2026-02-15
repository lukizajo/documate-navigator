import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-01-uvod");

export default function LDP01() {
  return (
    <PageShell title="🅾️ Úvod" prev={nav.prev} next={nav.next}>

      <p>Tento LAB je praktická dráha zameraná na jednu konkrétnu zručnosť: <strong>tvoriť (a upravovať) obrázky s AI tak, aby boli použiteľné v praxi</strong> – do prezentácie, na web, na sociálne siete, alebo ako jednoduché vysvetľujúce vizuály.</p>

      <p>Veľa ľudí používa AI obrázky takto:</p>
      <p>{"\u201EVygeneruj mi pekný obrázok\u2026\u201C"} → vznikne niečo pekné → ale potom zistíš, že:</p>
      <ul>
        <li>nepasuje to k tvojmu štýlu (každý obrázok je iný),</li>
        <li>nedá sa to dobre orezať (chýba priestor pre text),</li>
        <li>text v obrázku je nečitateľný alebo pokašľaný,</li>
        <li>výsledok je "wow", ale <strong>nepoužiteľný</strong>.</li>
      </ul>

      <p>👉 Cieľom LABu nie je robiť umelecké experimenty.</p>
      <p>Cieľom je, aby si vedel <strong>vyrobiť konzistentné vizuály, ktoré majú účel</strong> – a vedel ich aj vyladiť iteráciami, nie náhodou.</p>
      <p>A rovnako ako v celom kurze: <strong>AI asistuje, človek rozhoduje.</strong> ✅</p>

      <h2>🧭 Prehľad LABu</h2>
      <p>V tomto LABe si ukážeme jednoduchý postup, ako prepnúť AI z režimu {"\u201Esprav mi obrázok\u201C"} do režimu {"\u201Epomôž mi spraviť vizuál, ktorý viem reálne použiť\u201C"}:</p>
      <ul>
        <li><strong>účel pred estetikou</strong> (najprv: na čo to je a kde to použijem),</li>
        <li><strong>štýl a konzistencia</strong> (aby všetko vyzeralo ako jedna séria),</li>
        <li><strong>prompt ako nástroj kontroly</strong> (nie "želanie"),</li>
        <li><strong>iterácie (1 zmena = 1 iterácia)</strong> (aby si vedel, čo spôsobilo zlepšenie),</li>
        <li><strong>infografika a text v obrázku</strong> (praktický workflow, ktorý funguje),</li>
        <li><strong>referencie a reverse prompting</strong> (inšpirácia bez chaosu),</li>
        <li><strong>práva, licencie a etika</strong> (aby si si nenarobil problém).</li>
      </ul>
      <p>Na konci to všetko spojíš do jedného výstupu: <strong>tvoja vlastná mini vizuálna sada</strong>, pripravená na použitie.</p>

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <p>Po absolvovaní LAB D budeš vedieť:</p>
      <ul>
        <li>vybrať správny typ vizuálu podľa účelu (ilustračný / vysvetľujúci / infografický),</li>
        <li>nastaviť <strong>konzistentný štýl</strong> (aby tvoje obrázky "držali spolu"),</li>
        <li>napísať prompt, ktorý dáva stabilnejší výsledok (nie náhodné generovanie),</li>
        <li>robiť <strong>vedomé iterácie</strong> a rýchlo vyladiť kompozíciu, štýl a detaily,</li>
        <li>spraviť infografický vizuál tak, aby bol čitateľný (aj keď AI nevie text dokonale),</li>
        <li>pracovať s referenciami bezpečne a prakticky,</li>
        <li>rozpoznať riziká (licencie, zavádzajúce vizuály, citlivé témy) a používať AI zodpovedne.</li>
      </ul>
    </PageShell>
  );
}
