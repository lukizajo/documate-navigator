import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M04P11() {
  const nav = getNavContext("m04-11-prakticka-uloha");
  return (
    <PageShell title="🎓 Praktická úloha – Správny kontext (praktický scenár)" {...nav}>

      <h3>Zadanie – konkrétny príklad</h3>
      <p>Predstav si, že chceš použiť AI na túto úlohu:</p>
      <p><strong>Zhrň odborný článok o regulácii AI (EU AI Act) pre manažéra, ktorý nemá technické pozadie.</strong></p>
      <p>Máš balík informácií, ktoré môžeš (ale nemusíš) vložiť do kontextu:</p>
      <ul>
        <li>celý 25-stranový článok v PDF,</li>
        <li>3-odstavcové manažérske zhrnutie článku,</li>
        <li>poznámka: „manažér rieši najmä riziká a dopady na rozhodovanie",</li>
        <li>presné znenie legislatívnych paragrafov,</li>
        <li>interné poznámky s menami kolegov,</li>
        <li>dátum publikovania článku,</li>
        <li>link na oficiálny zdroj,</li>
        <li>poznámka: „nepoužívaj právnický jazyk".</li>
      </ul>

      <h3>Tvoja úloha (3 kroky)</h3>
      <ol>
        <li><strong>Označ, ktoré informácie do kontextu určite patria</strong> (signál).</li>
        <li><strong>Vyber, ktoré informácie sú zbytočné alebo rizikové</strong> (šum / citlivé údaje).</li>
        <li><strong>Z vybraných informácií sprav "čistý kontext"</strong>: Mini-pamäť + finálny prompt.</li>
      </ol>

      <h3>Cieľ</h3>
      <p>Nie je vytvoriť najdlhší prompt.</p>
      <p>Cieľom je vytvoriť čistý, zrozumiteľný kontext, vďaka ktorému AI:</p>
      <ul>
        <li>pochopí, pre koho odpovedá,</li>
        <li>nebude používať nevhodný jazyk,</li>
        <li>zameria sa na dopady a nie na detailné paragrafy,</li>
        <li>neoprie sa o informácie, ktoré nemá použiť,</li>
        <li><strong>a bude odpoveď overiteľná (zdroje + dátum).</strong></li>
      </ul>

      <h3>Očakávaný výstup</h3>
      <ol>
        <li><strong>Zoznam:</strong> „Použité v kontexte / Nepoužité v kontexte" (stručne, v bodoch).</li>
        <li><strong>Mini-pamäť (max 5 bodov):</strong> cieľ, publikum, priority, zdroje, obmedzenia štýlu.</li>
        <li><strong>Finálny prompt / kontext karta (max 12–15 riadkov)</strong>, ktorá obsahuje:
          <ul>
            <li>🧱 Stabilné pravidlá (štýl, "nevymýšľaj", "ak nevieš, napíš 'nie je uvedené'")</li>
            <li>🎯 Aktuálne zadanie (pre koho, čo presne, aký formát)</li>
            <li>📚 Zdroje (označ [A]/[B] a vyžaduj odkazy)</li>
          </ul>
        </li>
        <li><strong>2–3 vety reflexie:</strong> čo by sa stalo, keby si zbytočné informácie neodfiltroval.</li>
      </ol>

      <h3>✅ Hodnotiace kritériá (0–2 body za každé)</h3>
      <ul>
        <li>Vybral si správny <strong>signál</strong> a odfiltroval šum</li>
        <li>Ošetril si <strong>citlivé info</strong> (mená, interné poznámky)</li>
        <li>Nastavil si <strong>zdrojový režim</strong> (citácie/dátum/„nie je uvedené")</li>
        <li>Výstup je pre manažéra: dopady, zrozumiteľnosť, bez právničiny</li>
      </ul>
    </PageShell>
  );
}
