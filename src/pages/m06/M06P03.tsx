import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask } from "@/components/ContentBlocks";

export default function M06P03() {
  const nav = getNavContext("m06-03-use-casy");
  return (
    <PageShell title="2️⃣ Ako nájsť svoje pracovné use-casy" {...nav}>

      <p>Najväčšia chyba pri AI v práci je táto:</p>
      <p>👉 <strong>„Povedz mi, na čo sa AI dá použiť."</strong></p>
      <p>To je ako keby si sa spýtal: „Na čo sa dá použiť Excel?" — dá sa na milión vecí, ale ty potrebuješ <strong>tú jednu</strong>, ktorá ti ušetrí čas hneď teraz 🙂</p>
      <p>Tvoje use-casy už existujú. Len sú schované v dvoch miestach:</p>
      <ul>
        <li>v <strong>rutine</strong> (stále dokola to isté),</li>
        <li>v <strong>trení</strong> (miesta, ktoré ťa brzdia a berú energiu).</li>
      </ul>

      <h3>🧩 Kde hľadať use-casy (3 zdroje)</h3>
      <p><strong>👉 „Opakujem to každý týždeň"</strong></p>
      <ul>
        <li>rovnaké emaily, rovnaké vysvetlenia, rovnaké reporty</li>
        <li>stále dokola prepisuješ tie isté informácie do inej formy</li>
      </ul>
      <p><strong>👉 „Zas som sa zasekol"</strong></p>
      <ul>
        <li>nevieš, ako začať (prázdna strana)</li>
        <li>nevieš, ako to napísať „ľudsky" alebo „profesionálne"</li>
        <li>potrebuješ rýchlo spraviť prehľad alebo zhrnutie</li>
      </ul>
      <p><strong>👉 „Tu strácam čas na drobnostiach"</strong></p>
      <ul>
        <li>formátovanie, prepisovanie, prehľadávanie poznámok</li>
        <li>zhrnutie meetingu, prepis bodov do textu</li>
        <li>príprava podkladov, ktoré aj tak niekto potom upraví</li>
      </ul>

      <h3>🧠 Rýchly filter (AI fit) – rozhodne za teba</h3>
      <p>Keď nájdeš kandidáta, prebehni si 4 otázky:</p>
      <ol>
        <li>Je to <strong>textové / slovné</strong>?</li>
        <li>Je to <strong>opakované</strong>?</li>
        <li>Mám jasný <strong>vstup</strong> (poznámky, body, text)?</li>
        <li>Viem presne povedať <strong>výstup</strong> (forma, rozsah, tón)?</li>
      </ol>
      <p>✅ Ak máš aspoň <strong>3× ÁNO</strong>, je to dobrý kandidát na test.</p>

      <h3>❗ Falošne dobrý use-case</h3>
      <p>vyzerá ako ideálny kandidát pre AI, ale v praxi:</p>
      <ul>
        <li>má veľa výnimiek,</li>
        <li>často mení vstupy,</li>
        <li>alebo ho aj tak musíš celý prerábať.</li>
      </ul>

      <h3>🔥 Ako si vybrať 1 „starter use-case"</h3>
      <p>Neskáč hneď na najväčšiu vec. Vyber si niečo, čo:</p>
      <ul>
        <li>má <strong>nízke riziko</strong> (ak to nebude dokonalé, nič sa nestane),</li>
        <li>vieš to spraviť <strong>za 10–20 min</strong>,</li>
        <li>a ideálne je to niečo, čo robíš <strong>viackrát do týždňa</strong>.</li>
      </ul>
      <p>👉 Prvý use-case má budovať <strong>návyk</strong> a istotu, nie dokonalosť.</p>

      <MiniTask title="Mapa dňa → TOP 3 use-casy (7–10 min)">
        <p><strong>Zadanie</strong></p>
        <p>Sprav si rýchlu mapu svojho pracovného dňa a nájdi 3 kandidátov, kde AI môže pomôcť.</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Napíš si <strong>10 posledných pracovných úloh</strong>, ktoré si robil (stačí heslami). Príklady: „odpoveď klientovi", „zhrnutie dokumentu", „zápis zo stretnutia", „status update", „príprava reportu"…</li>
          <li>Pri každej úlohe si daj <strong>AI fit skóre 0–4</strong> (1 bod za každé ÁNO z filtra).</li>
          <li>Vyber <strong>TOP 3</strong> s najvyšším skóre.</li>
          <li>Z TOP 3 vyber <strong>1 starter</strong> (nízke riziko + často sa opakuje).</li>
          <li>Odpovedz si na otázku pre vybraný starter use-case: <strong>„Čo sa pokazí, ak AI spraví chybu?"</strong></li>
        </ol>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>zoznam 10 úloh</li>
          <li>pri každej skóre 0–4</li>
          <li>TOP 3 kandidáti</li>
          <li>1 vybraný starter use-case</li>
          <li>Riziko pochybenia AI pri starter use-case</li>
        </ul>
      </MiniTask>

      <MiniTest
        question="Máš tri možné use-casy. Ktorý by si testoval ako prvý – a prečo?"
        options={[
          { label: "🌕", text: "Zhrnutie interného dokumentu (10 strán) pre kolegov. Dokument sa často mení." },
          { label: "⭐", text: "Odpoveď na často kladenú otázku klienta, ale každý klient má trochu inú situáciu." },
          { label: "☀️", text: "Zápis zo stretnutia do šablóny: rozhodnutia, úlohy, termíny." },
        ]}
        correct="☀️"
        explanation="Jasná štruktúra, nízke riziko, rovnaký typ vstupu aj výstupu – ideálne na prvý experiment."
      />

      <MiniTest
        question={"Úloha má AI fit skóre 4/4, ale po dvoch pokusoch máš pocit, že AI ti šetrí čas, ale znižuje kvalitu. Čo je najlepší ďalší krok?"}
        options={[
          { label: "🌕", text: "Prestať AI používať \u2013 nie je vhodná." },
          { label: "⭐", text: "Spresniť výstup (formát, rozsah, kritériá kvality) a skúsiť ešte raz." },
          { label: "☀️", text: "Pridať AI viac slobody, nech je kreatívnejšia." },
        ]}
        correct="⭐"
        explanation={"Väčšina \u201Ezlých výsledkov\u201C je problém zadania, nie AI."}
      />

      <MiniTest
        question={"Ktorá veta je najlepší signál, že use-case ešte NIE JE pripravený na AI?"}
        options={[
          { label: "🌕", text: "\u201EJe to citlivé, ale viem to anonymizovať.\u201C" },
          { label: "⭐", text: "\u201EVždy to robím trochu inak, podľa situácie.\u201C" },
          { label: "☀️", text: "\u201EJe to textové a robím to často.\u201C" },
        ]}
        correct="⭐"
        explanation="Ak nevieš opísať stabilný postup, AI nemá čo kopírovať."
      />
    </PageShell>
  );
}
