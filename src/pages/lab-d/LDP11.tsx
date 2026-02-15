import { PageShell } from "@/components/PageShell";
import { ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-11-prakticka-uloha");

export default function LDP11() {
  return (
    <PageShell title="🎓 Praktická úloha – Obrázky v praxi (mini-kampaň)" prev={nav.prev} next={nav.next}>

      <p>Na záver si všetky veci z LABu spojíš do jednej reálnej úlohy. Cieľom nie je mať "dokonalý obrázok", ale <strong>vedome použiť stavebné bloky</strong>: účel, štýl, kompozícia, iterácia, adaptácia na médium a bezpečnosť.</p>

      <h3>Zadanie</h3>
      <p>Priprav <strong>mini-sériu 3 vizuálov</strong> na jednu tému (vyber si jednu):</p>
      <ul>
        <li>a) AI ako pomocník v kuchyni</li>
        <li>b) Prompt = zadanie pre šéfkuchára</li>
        <li>c) Model je ako automat na predikcie</li>
      </ul>

      <p><strong>Požiadavky na výsledok</strong></p>
      <ul>
        <li>séria musí pôsobiť <strong>konzistentne</strong> (rovnaké farby/svetlo/médium),</li>
        <li>výstupy musia byť <strong>použiteľné</strong> (nie len "pekné"),</li>
        <li>aspoň jeden výstup musí byť <strong>prispôsobený inému médiu</strong>,</li>
        <li>v promptoch musíš mať jasne napísané <strong>DON'T</strong> (bez rizikových prvkov).</li>
      </ul>

      <h3>Tvoja úloha</h3>

      <p><strong>1️⃣ Účel – na čo to bude (médium + cieľ)</strong></p>
      <p>Vyber si jedno použitie:</p>
      <ul>
        <li>a) prezentácia (16:9)</li>
        <li>b) Instagram feed (4:5)</li>
        <li>c) Stories/Reels (9:16)</li>
      </ul>
      <p>Doplň si:</p>
      <ul>
        <li>cieľ: vysvetliť / zaujať / zhrnúť do 3 krokov</li>
        <li>publikum: začiatočník / kolega / klient</li>
      </ul>

      <p><strong>2️⃣ Štýl – mini style guide / STYLE BLOCK</strong></p>
      <p>Použi mini style guide (z LABu) alebo si vyplň STYLE BLOCK:</p>
      <ul>
        <li>Farby:</li>
        <li>Svetlo:</li>
        <li>Médium / materiál:</li>
        <li>Textúra:</li>
        <li>Tvary:</li>
        <li>Úroveň detailu:</li>
        <li>Nálada (3 slová):</li>
      </ul>

      <p><strong>3️⃣ Kompozícia – čo má byť na obrázku a kde</strong></p>
      <p>Doplň si pravidlá kompozície:</p>
      <ul>
        <li>priestor pre text: vľavo / hore / dole</li>
        <li>max počet prvkov: 3–4 (pri vysvetľujúcom obrázku)</li>
        <li>pozadie: čisté / jednoduché</li>
      </ul>

      <p><strong>4️⃣ DON'T – bezpečnostný blok (práva a etika)</strong></p>
      <p>Doplň do promptu negatíva (aspoň 4):</p>
      <ul>
        <li>bez log a watermarkov</li>
        <li>bez známych postáv / brand prvkov</li>
        <li>bez fotorealistických tvárí</li>
        <li>bez textu v generovanom obrázku <em>(infografika bude layout bez textu)</em></li>
      </ul>

      <p><strong>5️⃣ Výstupy – 3 vizuály v sérii (v1)</strong></p>
      <p>Vytvor 3 výstupy (v rovnakom štýle):</p>
      <ul>
        <li>a) <strong>Cover</strong> – atmosféra + priestor pre nadpis (bez textu)</li>
        <li>b) <strong>Vysvetľujúci obrázok</strong> – princíp na prvý pohľad (max 3–4 prvky)</li>
        <li>c) <strong>Infografický layout bez textu</strong> – 3 boxy + šípky (bez písmen)</li>
      </ul>
      <p>Ulož si ich ako: FINAL_1_cover_v1, FINAL_2_explain_v1, FINAL_3_layout_v1</p>

      <p><strong>6️⃣ Iterácia – sprav 1 vylepšenie (v2)</strong></p>
      <p>Vyber si <strong>jednu vec</strong>, ktorú upravíš (podľa toho, čo najviac zavadzia):</p>
      <ul>
        <li>a) viac negatívneho priestoru (pre text)</li>
        <li>b) zjednodušiť scénu (menej prvkov)</li>
        <li>c) čistejšie pozadie / lepší kontrast</li>
      </ul>
      <p>Sprav v2 pre všetky 3 vizuály (ale vždy len 1 zmena na každý):</p>
      <p>FINAL_1_cover_v2, FINAL_2_explain_v2, FINAL_3_layout_v2</p>

      <p><strong>7️⃣ Adaptácia na médium (povinné)</strong></p>
      <p>Vyber jeden vizuál (odporúčam cover alebo explain) a sprav ho aj v <strong>inom formáte</strong>:</p>
      <ul>
        <li>16:9 ↔ 4:5 alebo 9:16</li>
      </ul>
      <p>Ulož ako: FINAL_media_adapt</p>

      <p><strong>8️⃣ Text pre infografiku (mimo obrázka)</strong></p>
      <p>Napíš text do 3 boxov (každý box max 6–10 slov + 1 krátka veta).</p>
      <p>Ulož ako: FINAL_infographic_text</p>

      <p><strong>Test v praxi (povinné)</strong></p>
      <ul>
        <li>Skopíruj svoj "silný prompt" (účel + štýl + kompozícia + DON'T) do AI a sprav výstupy v1.</li>
        <li>Potom sprav 1 iteráciu (v2): uprav jednu vec (kompozícia / počet prvkov / pozadie) a spusti to znova.</li>
      </ul>

      <h3>❓ Sebakontrola (ÁNO/NIE)</h3>
      <p>Je jasné, na aké médium je séria určená (16:9 / 4:5 / 9:16)?</p>
      <p>Drží celá séria rovnaký štýl (farby, svetlo, médium)?</p>
      <p>Je cover použiteľný (má priestor pre nadpis, nie je preplnený)?</p>
      <p>Je vysvetľujúci obrázok pochopiteľný na prvý pohľad (max 3–4 prvky)?</p>
      <p>Je infografika použiteľná aj bez textu (layout dáva zmysel)?</p>
      <p>Spravil si v2 iteráciu tak, že si menil len jednu vec?</p>
      <p>Funguje adaptovaná verzia v inom formáte bez "odrezania" pointy?</p>
      <p>Je v promptoch jasný DON'T blok (bez rizikových prvkov)?</p>

      <ExpectedFinding>
        <p>Budeš mať hotovú mini-sériu 3 vizuálov + adaptáciu pre iné médium + text pre infografiku. Zároveň si vytvoríš "master prompt" (štýl + kompozícia + DON'T), ktorý si vieš uložiť ako šablónu a nabudúce len vymeníš tému.</p>
      </ExpectedFinding>

      <p>💡 <strong>Bonus tip (aby to bolo férové a jasné)</strong></p>
      <ul>
        <li>Ak nevieš, čo dať do štýlu, napíš do AI: <strong>{"\u201ENavrhni mi 3 varianty STYLE BLOCKu pre túto tému a počkaj, kým si vyberiem.\u201C"}</strong></li>
        <li>Najväčší rozdiel spravia 2 veci: <strong>konzistentný štýl + jasná kompozícia (priestor, jednoduchosť)</strong>.</li>
      </ul>
    </PageShell>
  );
}
