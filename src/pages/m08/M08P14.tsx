import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { ExpectedFinding } from "@/components/ContentBlocks";

export default function M08P14() {
  const nav = getNavContext("m08-14-prakticka-uloha");
  return (
    <PageShell title="🎓 Praktická úloha – Návrh automatizácie pre domáce financie" {...nav}>

      <p>Navrhni jednoduchú „papierovú" automatizáciu pre <strong>týždenný prehľad domácich financií</strong> tak, aby bolo jasné:</p>
      <ul>
        <li>čo je vstup a výstup,</li>
        <li>aké kroky proces obsahuje,</li>
        <li>ktoré kroky sú <strong>bezAI</strong>, ktoré <strong>poloAI</strong> a ktoré necháš <strong>manuálne</strong>,</li>
        <li>ako bude prebiehať cyklus <strong>postav → testuj → uprav → testuj</strong>,</li>
        <li>kde sú riziká a aké dáš bezpečnostné brzdy.</li>
      </ul>
      <p>Nejde o to niečo naklikať. Ide o to, aby si to vedel(a) niekomu odovzdať ako návrh procesu.</p>

      <h3>Krok 1: Popíš proces (6–10 krokov)</h3>
      <p>Vyplň:</p>
      <ul>
        <li><strong>Spúšťač:</strong> (napr. nedeľa 19:00)</li>
        <li><strong>Vstupy:</strong> (napr. transakcie z banky, cash výdavky)</li>
        <li><strong>Výstup (hotovo):</strong> (napr. rozdelené kategórie + 5-bodové zhrnutie)</li>
      </ul>
      <p>Potom napíš <strong>6–10 krokov</strong> (sloveso + čo).</p>

      <h3>Krok 2: DROB + 4E mapovanie</h3>
      <ul>
        <li><strong>DROB:</strong> D / R / O / B (odrážky)</li>
        <li>Ku krokom dopíš: <strong>Extract / Explain / Edit / Evaluate</strong> alebo <strong>O (operácia)</strong></li>
      </ul>

      <h3>Krok 3: Rozhodni typ pre každý krok</h3>
      <p>Ku každému kroku dopíš štítok:</p>
      <ul>
        <li><strong>bezAI</strong></li>
        <li><strong>poloAI</strong></li>
        <li><strong>AI-first</strong> <em>(len ak naozaj dáva zmysel)</em></li>
        <li><strong>manuál</strong></li>
        <li>1 krátke „prečo" (do 10 slov).</li>
      </ul>

      <h3>Krok 4: Rozhodovací diamant (riziko × stabilita)</h3>
      <p>Vyber aspoň <strong>3 kroky</strong> a dopíš:</p>
      <ul>
        <li>stabilita pravidiel: stabilné/nestabilné</li>
        <li>riziko chyby: nízke/vysoké</li>
        <li>výsledok podľa diamantu (bezAI/poloAI/copilot/manuál)</li>
      </ul>

      <h3>Krok 5: Pilot a cyklus testovania 🔁</h3>
      <p>Navrhni mini-verziu automatizácie:</p>
      <ul>
        <li><strong>Mini-verzia:</strong> (napr. len 5 najčastejších obchodníkov)</li>
        <li><strong>Pilot (5–10 prípadov):</strong> aké transakcie otestuješ</li>
        <li><strong>Úspech je, keď:</strong> (napr. 8/10 správne kategórie alebo úspora 10 min)</li>
      </ul>

      <h3>Krok 6: Bezpečnosť a „čo neautomatizovať" 🚫🔐</h3>
      <ul>
        <li>2 veci, ktoré <strong>necháš manuálne</strong> (a prečo)</li>
        <li>3 bezpečnostné brzdy (napr. kontrolný bod, log, kill switch, NEJASNÉ)</li>
      </ul>

      <ExpectedFinding>
        <p><strong>Názov procesu:</strong> Týždenný prehľad domácich financií</p>
        <p><strong>Spúšťač:</strong> …</p>
        <p><strong>Vstupy:</strong> …</p>
        <p><strong>Výstup (hotovo):</strong> …</p>
        <p><strong>Proces (6–10 krokov):</strong></p>
        <ol><li>…</li><li>…</li></ol>
        <p><strong>DROB:</strong></p>
        <ul><li>D: …</li><li>R: …</li><li>O: …</li><li>B: …</li></ul>
        <p><strong>4E/O označenie krokov:</strong></p>
        <ol><li>… (…)</li><li>… (…)</li></ol>
        <p><strong>Typ kroku (bezAI/poloAI/AI-first/manuál) + prečo:</strong></p>
        <ol><li>… → … (prečo: …)</li></ol>
        <p><strong>Diamant (3 vybrané kroky):</strong></p>
        <ul><li>Krok X: stabilita … | riziko … → výsledok …</li></ul>
        <p><strong>Mini-verzia + pilot:</strong></p>
        <ul><li>Mini-verzia: …</li><li>Pilot: …</li><li>Úspech je, keď: …</li></ul>
        <p><strong>Bezpečnosť:</strong></p>
        <ul><li>Manuálne nechám: …, …</li><li>Brzdy: …, …, …</li></ul>
      </ExpectedFinding>

      <h3>Rubrika hodnotenia</h3>
      <ul>
        <li><strong>✅ Splnené:</strong> proces + typy krokov + pilot + bezpečnosť</li>
        <li><strong>⭐ Dobré:</strong> jasné vstupy/výstupy + diamant na 3 krokoch</li>
        <li><strong>🌟 Výborné:</strong> mini-verzia je realistická a má merateľný úspech</li>
      </ul>
    </PageShell>
  );
}
