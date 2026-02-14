import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M06P10() {
  const nav = getNavContext("m06-10-zhrnutie");
  return (
    <PageShell title="9️⃣ Záverečné zhrnutie – čo si treba zapamätať" {...nav}>

      <p>👉 <strong>AI je pracovný nástroj, nie zázrak 🛠️</strong></p>
      <ul>
        <li>Šetrí čas najmä na rutinných, opakovaných úlohách</li>
        <li>Pomáha s návrhom a štruktúrou, ale <strong>nerozhoduje za teba</strong></li>
        <li>Aj malá úspora času sa pri opakovanej úlohe rýchlo nazbiera</li>
      </ul>
      <p>👉 Pravidlo: <strong>AI asistuje, človek rozhoduje.</strong></p>

      <p>👉 <strong>Nie všetky úlohy sú vhodné pre AI 🎯</strong></p>
      <p>Predtým, než AI nasadíš na úlohu, skontroluj 4 kritériá:</p>
      <ul>
        <li>Je to <strong>textová</strong> úloha (alebo sa dá preložiť do textu)?</li>
        <li>Je to <strong>opakovaná</strong> úloha (robíš ju často)?</li>
        <li>Potrebuješ <strong>prvý návrh / štruktúru / varianty</strong>, nie 100 % finálnu pravdu?</li>
        <li>Má úloha jasný <strong>vstup → výstup</strong> (vieš, čo jej dáš a čo chceš dostať)?</li>
      </ul>
      <p>Ak áno, je to dobrý kandidát.</p>
      <p>👉 A ešte jedna vec: použi maticu <strong>prínos vs. riziko</strong>.</p>
      <p>Začni s tým, čo má <strong>nízke riziko a vysoký prínos</strong>.</p>

      <p>👉 <strong>Meranie je dôležitejšie ako pocit ⏱️📊</strong></p>
      <p>AI si vieš obľúbiť aj zavrhnúť na základe dojmu. Ale v práci je lepšie mať dáta:</p>
      <ul>
        <li>sprav jednoduchý experiment <strong>pred / po</strong></li>
        <li>sleduj: <strong>čas + kvalita + počet opráv</strong></li>
        <li>výsledok vieš „obhájiť" aj pred šéfom (alebo pred sebou)</li>
      </ul>
      <p>👉 AI sa oplatí, keď šetrí čas <strong>aj po započítaní kontroly</strong>.</p>

      <h3>🚀 5 praktických krokov na začiatok (bez chaosu)</h3>
      <p><strong>1️⃣ Zmapuj si svoj deň (30 min)</strong></p>
      <ul>
        <li>Zapíš si cca <strong>10 úloh</strong>, ktoré robíš pravidelne</li>
        <li>Vyber <strong>3 kandidátov</strong>, kde by AI mohla pomôcť (nízke riziko, opakované)</li>
      </ul>
      <p><strong>2️⃣ Sprav experiment (1 deň)</strong></p>
      <ul>
        <li>Tú istú úlohu sprav <strong>bez AI</strong> a potom <strong>s AI</strong></li>
        <li>Zapíš si: čas + kvalita + počet opráv</li>
      </ul>
      <p><strong>3️⃣ Ak to vyjde, používaj to bežne (2–3 týždne)</strong></p>
      <ul>
        <li>Dolaď si „finálny prompt" (šablóna z lekcie 4)</li>
        <li>Vytvor si kontrolný zvyk (2–3 veci, ktoré vždy overíš)</li>
      </ul>
      <p><strong>4️⃣ Zmeraj úsporu (30 min)</strong></p>
      <ul>
        <li>Jednoduchá tabuľka: koľko času predtým vs. teraz</li>
        <li>Ak chceš, prepočítaj si to aj na peniaze (pre vlastnú motiváciu alebo obhajobu)</li>
      </ul>
      <p><strong>5️⃣ Zdieľ to ďalej (5 min)</strong></p>
      <ul>
        <li>Ukáž kolegom <strong>1 use-case</strong>, ktorý ti funguje</li>
        <li>Pomôž im spraviť prvý krok (starter + bezpečný prompt)</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <p>Pri používaní AI v práci si dávaj pozor najmä na:</p>
      <ul>
        <li><strong>nekontrolované výstupy</strong> (AI znie presvedčivo, aj keď sa mýli),</li>
        <li>zdieľanie <strong>citlivých dát</strong>,</li>
        <li><strong>preberanie textov</strong> bez úprav a kontextu,</li>
        <li>rozhodovanie <strong>bez ľudskej kontroly</strong>,</li>
        <li><strong>zavádzanie AI bez jasného cieľa</strong> (potom vzniká chaos).</li>
      </ul>
      <p>👉 Pravidlo, ktoré platí vždy: <strong>AI asistuje, človek rozhoduje.</strong></p>
    </PageShell>
  );
}
