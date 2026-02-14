import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M06P06() {
  const nav = getNavContext("m06-06-experiment");
  return (
    <PageShell title="5️⃣ Rýchly experiment + prínos vs riziko" {...nav}>

      <p>Keď AI začneš používať v práci, je ľahké spadnúť do dvoch extrémov:</p>
      <ul>
        <li>„Wow, toto je zázrak!"</li>
        <li>„Toto je blbosť, len mi to pridáva prácu."</li>
      </ul>
      <p>Pravda býva niekde medzi. A presne preto si spravíme jednoduchý experiment:</p>
      <p>👉 <strong>Pred / Po</strong> – bez pocitov, len realita.</p>
      <p>Cieľ tejto lekcie je, aby si vedel odpovedať na 3 otázky:</p>
      <ul>
        <li>Šetrí mi to čas?</li>
        <li>Zvyšuje mi to kvalitu?</li>
        <li>A je to bezpečné použiť aj opakovane?</li>
      </ul>

      <h3>🧩 Čo je „férový" experiment pred/po</h3>
      <p>Aby si si neklamal do vrecka, platia 3 pravidlá:</p>
      <ol>
        <li><strong>Rovnaká úloha</strong> (nie raz e-mail a raz report – to sa nedá porovnať)</li>
        <li><strong>Rovnaký vstup</strong> (rovnaké informácie, rovnaké podklady)</li>
        <li><strong>Rovnaký cieľ výstupu</strong> (rovnaká dĺžka, formát, publikum)</li>
      </ol>
      <p>Inak to bude porovnanie jabĺk s hruškami.</p>

      <h3>📊 Čo presne porovnávať (3 jednoduché metriky)</h3>
      <p>Nemusíš robiť vedu. Stačia tri veci:</p>
      <p><strong>1) Čas ⏱️</strong></p>
      <ul>
        <li>koľko minút ti to trvalo bez AI</li>
        <li>koľko minút s AI (vrátane kontroly)</li>
      </ul>
      <p><strong>2) Kvalita ⭐</strong></p>
      <p>Daj si rýchle sebahodnotenie:</p>
      <ul>
        <li>1 = nepoužiteľné</li>
        <li>2 = použiteľné po úpravách</li>
        <li>3 = takmer hotové</li>
      </ul>
      <p><strong>3) Počet opráv ✍️</strong></p>
      <ul>
        <li>koľko zásahov si musel spraviť, aby to bolo OK</li>
      </ul>
      <p>👉 Pointa: AI sa oplatí vtedy, keď ti šetrí čas <strong>a zároveň</strong> nezvyšuje počet opráv.</p>

      <h3>⚖️ Rozhodnutie: prínos vs riziko (2×2 v hlave)</h3>
      <p>Aj keď máš super výsledok, ešte je tu otázka:</p>
      <p>👉 <strong>Čo sa stane, ak AI spraví chybu?</strong></p>
      <p>Použi jednoduché pravidlo:</p>
      <ul>
        <li><strong>Nízke riziko + vysoký prínos</strong> → pokračuj (starter use-case)</li>
        <li><strong>Vysoké riziko</strong> → opatrne, len ako podklad, nie finále</li>
        <li><strong>Nízky prínos</strong> → nerieš, nestojí to za návyk</li>
      </ul>
      <p>Príklad:</p>
      <ul>
        <li>e-mail s ospravedlnením → nízke riziko</li>
        <li>rozhodnutie o regulácii alebo citlivé dáta → vysoké riziko</li>
      </ul>

      <MiniTask title="Sprav svoj pred/po test (10–15 min)">
        <p><strong>Zadanie</strong></p>
        <p>Vyber si svoj „starter use-case" a sprav férové porovnanie <strong>bez AI vs s AI</strong>.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber jednu konkrétnu úlohu (napr. e-mail, zhrnutie, zápis).</p>
        <ol>
          <li>Sprav verziu <strong>bez AI</strong> a zmeraj čas.</li>
          <li>Sprav verziu <strong>s AI</strong> (prompt podľa lekcie 4) a zmeraj čas (vrátane kontroly).</li>
          <li>Vyplň výsledky:</li>
        </ol>
        <ul>
          <li>Čas bez AI: __ min</li>
          <li>Čas s AI: __ min</li>
          <li>Kvalita bez AI (1–3): __</li>
          <li>Kvalita s AI (1–3): __</li>
          <li>Počet opráv bez AI: __</li>
          <li>Počet opráv s AI: __</li>
          <li>Riziko (nízke/stredné/vysoké): __</li>
          <li>Rozhodnutie: pokračujem / upravujem / stop</li>
        </ul>
        <p><strong>Očakávaný výstup</strong></p>
        <p>Krátka tabuľka (alebo odrážky) s výsledkom + rozhodnutie.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Ušetrila mi AI čas aj po započítaní kontroly?</li>
          <li>Je výsledok kvalitnejší alebo aspoň rovnako kvalitný?</li>
          <li>Znížil sa počet opráv, alebo zostal rovnaký?</li>
          <li>Je riziko chyby nízke (ak sa pomýli, nič zásadné sa nestane)?</li>
          <li>Viem tento postup zopakovať aj zajtra rovnako?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Pri vhodnom use-case by ti AI mala ušetriť čas (aj s kontrolou) a znížiť počet opráv, alebo aspoň nezhoršiť kvalitu. Ak čas síce klesne, ale opravy prudko narastú, prompt alebo výstup nie je ešte nastavený správne. Pri vysokom riziku bude AI vhodná skôr ako pomocník na podklady, nie ako finálny výstup.</p>
      </ExpectedFinding>

      <MiniTest
        question="AI ti ušetrila 10 minút, ale počet opráv sa zdvojnásobil. Čo spravíš?"
        options={[
          { label: "🌕", text: "Pokračujem, lebo čas je čas" },
          { label: "⭐", text: "Upravím prompt (výstup, formát, obmedzenia) a test zopakujem" },
          { label: "☀️", text: "AI zahodím navždy" },
        ]}
        correct="⭐"
        explanation="Často stačí spresniť výstup, aby opravy klesli."
      />

      <MiniTest
        question="AI pripraví odpoveď klientovi, ale pridá sľub, ktorý nevieš garantovať. Čo to znamená v matici prínos vs riziko?"
        options={[
          { label: "🌕", text: "Nízke riziko" },
          { label: "⭐", text: "Žiadne riziko, je to len text" },
          { label: "☀️", text: "Vysoké riziko bez obmedzení a kontroly" },
        ]}
        correct="☀️"
        explanation="V práci sú sľuby a fakty citlivé — musíš nastaviť hranice."
      />

      <MiniTest
        question="Ktorý use-case je najlepší kandidát na škálovanie (robiť ho pravidelne)?"
        options={[
          { label: "🌕", text: "Ten, kde AI šetrí čas a kvalita je stabilná" },
          { label: "⭐", text: "Ten, kde AI raz za čas trafí skvelý výsledok" },
          { label: "☀️", text: "Ten, kde AI vyzerá najkrajšie" },
        ]}
        correct="🌕"
        explanation="V práci vyhráva konzistentnosť."
      />
    </PageShell>
  );
}
