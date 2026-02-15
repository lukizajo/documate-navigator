import { PageShell } from "@/components/PageShell";
import { ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-11-prakticka-uloha");

export default function LEP11() {
  return (
    <PageShell title="🎓 Praktická úloha – Prezentácia v praxi" prev={nav.prev} next={nav.next}>
      <p>Na záver spojíš všetko z LABu do jednej reálnej úlohy. Cieľom nie je mať „dokonalý deck", ale vedome použiť stavebné bloky: brief, typ prezentácie, storyline, mapa slidov, slide vs notes, vizuálna stratégia, šablóna, QA.</p>

      <h2>Zadanie</h2>
      <p>Priprav prezentáciu na jednu tému (vyber si jednu):</p>
      <ol type="a">
        <li>Ako si zjednodušiť týždenné plánovanie (práca + voľno)</li>
        <li>Ako variť jednoduchšie počas týždňa (plán + nákup bez stresu)</li>
        <li>Ako sa rozhodovať rýchlejšie pri veľa možnostiach (3 kroky)</li>
      </ol>

      <h3>Požiadavky na výsledok</h3>
      <ul>
        <li>prezentácia má 8–10 slidov,</li>
        <li>slidy musia byť stručné a čitateľné (bez odsekov),</li>
        <li>ku každému slidu musia byť speaker notes,</li>
        <li>deck musí pôsobiť konzistentne (jeden vizuálny svet),</li>
        <li>ak používaš šablónu, nesmieš meniť layout ani fonty,</li>
        <li>musíš spraviť aspoň 1 iteráciu v2 (vedomé zlepšenie).</li>
      </ul>

      <h2>Tvoja úloha</h2>

      <h3>1️⃣ Brief</h3>
      <p>Vyplň brief (10 bodov) a ulož ako: <strong>FINAL_brief_v1</strong></p>

      <h3>2️⃣ Typ prezentácie</h3>
      <p>Vyber typ: informačná / presviedčacia / návodová.</p>
      <p>Doplň cieľ, one message a CTA tak, aby sedeli k typu.</p>
      <p>Ulož ako: <strong>FINAL_type_v1</strong></p>

      <h3>3️⃣ Dve cesty práce</h3>
      <p>Vyber si jednu cestu:</p>
      <ul>
        <li><strong>Cesta A – máš podklady:</strong> Priprav input pack (5–15 bodov) a označ fakty na overenie/zdroj.</li>
        <li><strong>Cesta B – podklady nemáš:</strong> Nechaj AI pripraviť input pack (10–15 bodov) + 3 fakty na overenie.</li>
      </ul>
      <p>Ulož ako: <strong>FINAL_input_pack_v1</strong></p>

      <h3>4️⃣ Storyline</h3>
      <p>Navrhni 2–3 varianty storyline, vyber 1 a doplň 1 riziko nepochopenia.</p>
      <p>Ulož ako: <strong>FINAL_storyline_v1</strong></p>

      <h3>5️⃣ Mapa slidov</h3>
      <p>Vytvor mapu 8–10 slidov v tomto formáte: headline (max 8 slov) + 1 veta pointy + návrh vizuálu.</p>
      <p>Ulož ako: <strong>FINAL_slide_map_v1</strong></p>

      <h3>6️⃣ Slidy a speaker notes</h3>
      <p>Pre každý slide doplň: headline + max 2 body (krátke) + speaker notes (3–5 viet).</p>
      <p>Ulož ako: <strong>FINAL_slide_text_v1</strong></p>

      <h3>7️⃣ Vizuálna stratégia</h3>
      <p>Nastav Style DNA: typ vizuálov, tón, 3 pravidlá, 2 zákazy.</p>
      <p>Ulož ako: <strong>FINAL_style_dna_v1</strong></p>

      <h3>8️⃣ Šablóna</h3>
      <p>Ak máš šablónu, naplň obsah bez zmeny layoutu/fontov.</p>
      <p>Ak šablónu nemáš, drž konzistenciu podľa Style DNA.</p>
      <p>Ulož ako: <strong>FINAL_deck_v1</strong></p>

      <h3>9️⃣ Iterácia v2</h3>
      <p>Vyber 1 vec, ktorú zlepšíš (len jednu):</p>
      <ol type="a">
        <li>skrátiť texty, aby sa zmestili bez zmeny formátu</li>
        <li>zlepšiť headliny, aby boli „pointa"</li>
        <li>zjednodušiť vizuály, aby nerušili</li>
      </ol>
      <p>Sprav v2 pre celý deck a ulož ako: <strong>FINAL_deck_v2</strong></p>

      <h3>Test v praxi (povinné)</h3>
      <p>Skús si deck prejsť nahlas podľa speaker notes. Ak sa pristihneš, že čítaš slidy, uprav: headline/body a presuň vysvetlenie do notes.</p>

      <h2>❓ Sebakontrola (ÁNO/NIE)</h2>
      <ul>
        <li>Je z prvých 2 slidov jasné, o čom to je a prečo na tom záleží?</li>
        <li>Je one message jedna veta a je cítiť naprieč deckom?</li>
        <li>Má každý slide jednu myšlienku?</li>
        <li>Sú slidy stručné a bez odsekov?</li>
        <li>Sú speaker notes použiteľné na rozprávanie (nie kopia slidov)?</li>
        <li>Drží deck jeden vizuálny svet a nepôsobí ako zlepenec?</li>
        <li>Ak používam šablónu, zostal layout a fonty nedotknuté?</li>
        <li>Spravil som v2 iteráciu tak, že som menil len jednu vec?</li>
        <li>Mám označené fakty, ktoré treba overiť, alebo mám zdroj?</li>
      </ul>

      <ExpectedFinding>
        <p>Budeš mať hotový deck 8–10 slidov so speaker notes, konzistentným vizuálom a aspoň jednou vedomou iteráciou. Zároveň budeš mať uložené „stavebné bloky" (brief, storyline, mapa, Style DNA), ktoré vieš nabudúce znovu použiť a len vymeniť tému.</p>
      </ExpectedFinding>

      <p>💡 <strong>Bonus tip (aby to bolo férové a jasné)</strong></p>
      <p>Ak nevieš vybrať typ prezentácie alebo storyline, povedz AI: „Navrhni mi 3 typy storyline pre môj brief a počkaj, kým si vyberiem."</p>
    </PageShell>
  );
}
