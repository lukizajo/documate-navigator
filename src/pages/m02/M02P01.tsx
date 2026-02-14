import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M02P01() {
  const nav = getNavContext("m02-01-uvod");
  return (
    <PageShell title="🅾️ Úvod do chatbotov" {...nav}>

      <h2>Úvod</h2>
      <p>V predchádzajúcom module sme si vysvetlili, čo AI je, ako približne funguje a prečo vie byť raz geniálna a inokedy úplne mimo.</p>
      <p>Teraz prichádza veľmi praktická otázka:</p>
      <p>👉 <strong>Keď chcem AI reálne používať… ktorého chatbota mám vlastne použiť?</strong></p>
      <p>Väčšina ľudí si otvorí prvý nástroj, ktorý pozná (často ChatGPT alebo Gemini) — a ostane pri ňom roky. Lenže rôzne chatboty sa správajú rôzne: jeden je silný v kreatívnych nápadoch, iný v štruktúre, ďalší pôsobí „ukecane", ďalší je strohý, niektorý sa pýta doplňujúce otázky a iný rovno vystrelí odpoveď.</p>
      <p>Tento modul ti pomôže získať nadhľad, nacítiť „vibe" jednotlivých chatbotov a hlavne:</p>
      <ul>
        <li>✅ prestať sa rozhodovať podľa dojmu</li>
        <li>✅ a začať sa rozhodovať podľa porovnania</li>
      </ul>

      <h2>Prehľad modulu</h2>
      <ul>
        <li>prečo je dôležité testovať viacero chatbotov a neviazať sa len na jedného,</li>
        <li>kto sú hlavní hráči na trhu a čím sa medzi sebou líšia,</li>
        <li>ako chatboty porovnávať jednoducho, ale systematicky,</li>
        <li>aké kritériá dávajú pri hodnotení najväčší zmysel,</li>
        <li>ako si vybrať správny nástroj pre konkrétnu úlohu,</li>
        <li>a na čo si dať pozor pri ich používaní.</li>
      </ul>

      <h2>Čo sa v tomto module naučíš</h2>
      <ul>
        <li>porovnať viacerých chatbotov na rovnakom zadaní,</li>
        <li>používať scorecard namiesto pocitového hodnotenia,</li>
        <li>rozpoznať silné a slabé stránky jednotlivých nástrojov,</li>
        <li>vybrať si chatbota podľa typu úlohy (nie popularity),</li>
        <li>zachovať si kritické myslenie a nadhľad pri práci s AI.</li>
      </ul>
    </PageShell>
  );
}
