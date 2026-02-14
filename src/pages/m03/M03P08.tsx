import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P08() {
  const nav = getNavContext("m03-08-zlozeny-prompt");
  return (
    <PageShell title="7️⃣ Zložený prompt a iterácia" tldr={[
      "Zložený prompt = všetkých 6 blokov v jednom",
      "Iteruj, keď hľadáš smer; detailne, keď chceš istotu",
      "Mini-cyklus iterácie: varianty → výber → doladenie",
    ]} {...nav}>

      <h2>Zložený prompt – keď všetko spojíš do jedného</h2>
      <p>Teraz spravíme posledný krok: poskladáme celý prompt tak, aby bol stabilný a použiteľný na prvýkrát.</p>

      <h3>Kedy sa oplatí kompletný prompt</h3>
      <ul>
        <li>chceš výsledok, ktorý vieš hneď použiť bez prerábok,</li>
        <li>potrebuješ konzistentný štýl (opakovane),</li>
        <li>nechceš sa pýtať 5 doplňujúcich otázok.</li>
      </ul>

      <h3>Ako si prompt poskladať</h3>
      <ol>
        <li>najprv si ujasni <strong>ÚLOHU</strong> (čo má vzniknúť),</li>
        <li>doplň <strong>KONTEXT</strong> (pre koho, kedy, obmedzenia),</li>
        <li>až potom dolaď: PRÍKLAD, ROLU, FORMÁT a TÓN.</li>
      </ol>

      <h3>✔ Finálny prompt: Jednodňový výlet v Prahe</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Navrhni konkrétny program na 1 deň v Prahe. Kontext: Bývam mimo Prahy a prídem vlakom okolo 9:00, odchádzam okolo 18:00. Idem s kamarátom. Chceme pohodové tempo a skôr prechádzky než múzeá. Chceme 1 dobrú kaviareň a 1 tip na obed bez rezervácie. Program má dávať zmysel aj bez auta. Príklad štýlu: ‚09:00 príchod – krátka káva blízko centra. 10:00–12:00 prechádzka (2–3 zastávky blízko seba). 12:30 obed – niečo jednoduché a rýchle.' Rola: Si miestny sprievodca. Formát: časový plán od 9:00 do 18:00 (4–6 zastávok), pri každej 1 veta prečo sa oplatí, na konci 2 tipy: plán B pri daždi. Tón: priateľský, vecný, bez marketingu."
      </div>

      <h3>☑ Sebakontrola kvality</h3>
      <ul>
        <li>Je jasná ÚLOHA (čo má vzniknúť)?</li>
        <li>Je tam KONTEXT (čas, spôsob presunu, preferencie)?</li>
        <li>Je tam PRÍKLAD (ako má vyzerať výstup)?</li>
        <li>Je tam ROLA (z akej perspektívy)?</li>
        <li>Je daný FORMÁT (aby to nebola stena textu)?</li>
        <li>Je nastavený TÓN (aby to znelo správne)?</li>
      </ul>

      <h2>Kedy promptovať detailne – a kedy iterovať</h2>
      <p>Nie vždy potrebuješ dokonalý prompt hneď na začiatku.</p>

      <h3>Kedy ísť detailne</h3>
      <ul>
        <li>výsledok ide na web / klientovi / do materiálov</li>
        <li>potrebuješ konzistentnosť</li>
        <li>nechceš strácať čas opravami</li>
      </ul>

      <h3>Kedy iterovať</h3>
      <ul>
        <li>ešte len hľadáš tému, nápad alebo formu</li>
        <li>chceš rýchlo skúšať varianty</li>
        <li>nevieš presne, čo chceš, ale spoznáš to, keď to uvidíš</li>
      </ul>

      <h3>🔁 Mini-cyklus iterácie (3 kroky)</h3>
      <ol>
        <li>„Daj 3 varianty."</li>
        <li>„Vyberám variant B. Uprav ho podľa…"</li>
        <li>„Sprav finál v tomto formáte a tóne."</li>
      </ol>
      <p className="text-sm italic">💡 <strong>Tip:</strong> pri iterácii vždy povedz, čo si vybral a čo má zostať rovnaké. Inak AI začne pri každom kole od znova.</p>

      <p>👉 <strong>Jednou vetou:</strong> Iteruj, kým hľadáš smer. Detailne promptuj, keď už chceš výsledok „na istotu".</p>

      <MiniTask title="Otestuj 2 prístupy (DETAIL vs ITERÁCIA)">
        <p><strong>Situácia:</strong> Chceš napísať správu kamarátovi na víkend v Prahe, ale ešte nemáš jasnú predstavu.</p>
        <p className="mt-2"><strong>❌ Prompt 1 (detailný hneď):</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš mi správu kamarátovi na víkend v Prahe. Má to byť presný plán od 9:00 do 18:00, s 5 zastávkami, s obedom, kávou, presunmi, rozpočtom do 800 Kč, bez múzeí, skôr prechádzky, bez dlhých textov, v odrážkach, priateľsky, bez marketingu a na konci pridaj plán B pri daždi."
        </div>
        <p className="mt-2"><strong>✔ Prompt 2 (iterácia – 3 kroky):</strong></p>
        <ol className="text-xs">
          <li>„Navrhni 3 rôzne nápady na víkendový program v Prahe (každý v 2 vetách)."</li>
          <li>„Vyberám variant B. Uprav ho tak, aby bol jednoduchý a pohodový, bez múzeí."</li>
          <li>„Sprav finál ako krátku správu pre kamaráta (max 5 viet)."</li>
        </ol>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď ešte nemáš jasný smer, iterácia funguje lepšie: najprv varianty, výber, potom doladenie.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prompt je najlepší, keď ešte hľadáš smer?"
        options={[
          { label: "🌕", text: `„Napíš finálny text o promptovaní. Musí to mať presnú štruktúru, dĺžku, tón, príklady, mini-úlohu aj test. Hotové na prvýkrát."` },
          { label: "⭐", text: `„Daj mi 3 rôzne varianty krátkeho úvodu k téme promptovania (každý v inom štýle). Potom počkaj, kým si vyberiem jeden."` },
          { label: "☀", text: `„Napíš niečo o promptovaní. Keď to nebude dobré, skús to napísať ešte raz."` },
        ]}
        correct="⭐"
        explanation="Je to riadená iterácia – najprv varianty, potom výber, potom doladenie."
      />
    </PageShell>
  );
}
