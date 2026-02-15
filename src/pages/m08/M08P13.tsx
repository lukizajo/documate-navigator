import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M08P13() {
  const nav = getNavContext("m08-13-zhrnutie");
  return (
    <PageShell title="🧾 Zhrnutie modulu" {...nav}>

      <p>V tomto module sme spravili posun od „AI mi občas pomôže" k tomu, aby si vedel(a) rozmýšľať <strong>procesne</strong> a urobiť z opakovaných činností niečo, čo sa dá zjednodušiť, otestovať a postupne automatizovať.</p>

      <h3>Čo si z modulu odnášaš</h3>
      <ul>
        <li><strong>Automatizácia ≠ AI.</strong><br />Automatizácia môže byť aj bez AI (pravidlá „ak–tak"). AI je len jeden z možných krokov v procese.</li>
        <li>Rozlišuješ 3 pojmy:<br /><strong>automatizácia</strong> (pravidlá + rutina) vs. <strong>AI copilot</strong> (AI navrhne, ty schváliš) vs. <strong>AI agent</strong> (AI robí viac krokov, potrebuje hranice).</li>
        <li>Vieš prepnúť na <strong>procesný mindset</strong>:<br />spúšťač → kroky → výstup („čo je hotovo").</li>
        <li>Vieš použiť rámce:<br /><strong>DROB</strong> (Dáta, Rozhodnutia, Operácie, Benefit) a <strong>4E</strong> (Extract, Explain, Edit, Evaluate), aby si videl(a), kde sa hodí AI.</li>
        <li>Vieš rozhodovať, čo kam patrí:<br /><strong>bezAI / poloAI / AI-first</strong> a kedy radšej manuál.</li>
        <li>Naučil(a) si sa „kompas": <strong>riziko × stabilita pravidiel</strong> (rozhodovací diamant).<br />Čím vyššie riziko alebo viac výnimiek, tým viac chceš kontrolu.</li>
        <li>Pochopil(a) si, že automatizácia je <strong>cyklus</strong>:<br />postav → testuj → uprav → testuj.<br />A že kľúč je správna <strong>granularita</strong> („sweet spot" krok).</li>
        <li>Máš v rukách <strong>mikrošablóny pre AI</strong>, ktoré vieš používať hneď aj bez nástrojov.</li>
        <li>Poznáš najčastejšie <strong>chyby</strong>, vieš čo neautomatizovať a aké sú základné <strong>bezpečnostné brzdy</strong> (kontrolný bod, log, kill switch, minimálne dáta).</li>
        <li>A na záver si získal(a) „mapu možností" nástrojov – nie ako návody, ale ako prehľad, čo existuje a kedy sa hodí.</li>
      </ul>

      <h3>1 veta, ktorú si zapamätaj</h3>
      <p>👉 <strong>Najprv proces, potom automatizácia, a AI je len jeden z krokov.</strong></p>
    </PageShell>
  );
}
