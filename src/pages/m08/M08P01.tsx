import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M08P01() {
  const nav = getNavContext("m08-01-uvod");
  return (
    <PageShell title="🅾️ Úvod" {...nav}>

      <p>V predchádzajúcich moduloch sme si ukázali, <strong>ako nájsť príležitosti využitia AI v práci aj v osobnom živote</strong> – na texty, nápady, plánovanie, rozhodovanie či rutinu. Teraz spravíme ďalší krok:</p>
      <p>👉 <strong>zistíme, čo z týchto vecí sa dá automatizovať</strong> (a čo radšej nie), aby to nebola jednorazová pomoc, ale opakovateľný proces.</p>
      <p><strong>Automatizácia</strong> nie je o nástrojoch. Je o <strong>spôsobe rozmýšľania</strong>. Automatizuješ len to, čomu rozumieš – a rozumieš len tomu, čo si vieš rozložiť na menšie časti.</p>
      <p>V tomto module sa naučíš rozmýšľať procesne, rozkladať prácu na mikro-kroky a rozhodovať, čo má ostať manuálne, čo riešiť s AI copilotom a čo má zmysel automatizovať.</p>

      <h3>🧭 Prehľad modulu</h3>
      <p>V tomto module sa pozrieme na:</p>
      <ul>
        <li><strong>procesný mindset</strong> a dekompozíciu úloh (rozbitie na kroky),</li>
        <li>rámec <strong>DROB + 4E</strong> pre prácu s procesmi,</li>
        <li>rozhodovanie: <strong>manuálne vs. AI copilot vs. automat</strong> (bezAI / poloAI / AI-first),</li>
        <li>správnu <strong>granularitu procesov</strong> („sweet spot"),</li>
        <li><strong>životný cyklus automatizácie</strong>: postav → testuj → uprav → testuj,</li>
        <li><strong>kde hľadať príležitosti</strong> na automatizáciu (práca aj osobný život),</li>
        <li><strong>čo neautomatizovať</strong>, bezpečnostné hranice a najčastejšie chyby,</li>
        <li><strong>mapu nástrojov</strong> – prehľad možností.</li>
      </ul>

      <h3>🎯 Čo sa v tomto module naučíš</h3>
      <p>Po tomto module budeš vedieť:</p>
      <ul>
        <li>rozpoznať, <strong>čo sa oplatí automatizovať</strong> a čo radšej nechať manuálne,</li>
        <li><strong>rozložiť činnosť na proces</strong> (kroky + vstupy/výstupy) tak, aby sa dala automatizovať,</li>
        <li>rozhodnúť, kedy použiť <strong>bezAI / poloAI / AI-first</strong> (a prečo),</li>
        <li>navrhnúť jednoduchú automatizáciu cez <strong>cyklus testovania a úprav</strong>,</li>
        <li>vyhnúť sa typickým chybám a nastaviť základné <strong>bezpečnostné hranice</strong>.</li>
      </ul>
    </PageShell>
  );
}
