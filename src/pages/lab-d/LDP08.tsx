import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-08-referencie");

export default function LDP08() {
  return (
    <PageShell title="7️⃣ Referencie a reverse prompting" prev={nav.prev} next={nav.next}>

      <p>Niekedy vieš presne, čo chceš… len nevieš, ako to "trafiť" do AI.</p>
      <p>Bez referencií sa potom ľahko stane, že:</p>
      <ul>
        <li>každý obrázok je v inom štýle,</li>
        <li>nevieš chytiť konkrétny look,</li>
        <li>a iteruješ zbytočne dlho.</li>
      </ul>
      <p>Táto lekcia ti dá spôsob, ako používať referencie ako <strong>štýlový kompas</strong> — bez kopírovania.</p>

      <h3>🧠 Dva typy referencií</h3>
      <ul>
        <li><strong>Štýlová referencia</strong> – Pomôže ti trafiť farby, svetlo, médium, textúru, náladu.</li>
        <li><strong>Kompozičná referencia</strong> – Pomôže ti trafiť layout: negatívny priestor, umiestnenie prvkov, pomer strán, "kam pôjde text".</li>
      </ul>
      <p>💡 <strong>Tip:</strong> nemusíš mať jednu dokonalú referenciu. Často stačia <strong>dve</strong>: jedna na štýl, jedna na kompozíciu.</p>

      <h3>✅ Ako pracovať s referenciou prakticky</h3>
      <p>Namiesto "sprav mi to presne ako…" spravíš toto:</p>
      <ul>
        <li>referenciu <strong>rozložíš na prvky</strong>,</li>
        <li>a do promptu prenesieš tie prvky, nie názov autora/značky.</li>
      </ul>

      <h3>🧩 Reverse prompting</h3>
      <p>Reverse prompting je, keď z obrázka spravíš "štýlový popis", ktorý vieš opakovane používať v promptoch.</p>
      <p>Môžeš to spraviť dvomi spôsobmi:</p>
      <ul>
        <li>popíšeš si to sám podľa checklistu,</li>
        <li>alebo požiadaš AI: "Popíš vizuálny štýl tohto obrázka podľa bodov nižšie."</li>
      </ul>
      <p>Cieľ: mať <strong>STYLE BLOCK</strong>, ktorý len kopíruješ do promptov.</p>

      <h3>🧱 STYLE BLOCK (copy/paste šablóna)</h3>
      <ul>
        <li><strong>Farby:</strong></li>
        <li><strong>Svetlo:</strong> (mäkké/tvrdé, teplé/studené)</li>
        <li><strong>Médium / materiál:</strong> (flat/3D/paper/sketch/foto…)</li>
        <li><strong>Textúra:</strong> (zrno/gradient/paper/clean)</li>
        <li><strong>Tvary:</strong> (okrúhle/ostré, jednoduché/komplexné)</li>
        <li><strong>Kompozícia:</strong> (kde je prázdny priestor, čo je v centre)</li>
        <li><strong>Úroveň detailu:</strong> (minimal / stred / vysoká)</li>
        <li><strong>Nálada (3 slová):</strong></li>
        <li><strong>DON'T:</strong> (čo nechceš)</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Nepýtaj "presne v štýle značky X / umelca Y". Radšej popíš prvky štýlu.</li>
        <li>Vyhni sa referenciám s <strong>logami, watermarkmi, známymi postavami</strong>.</li>
        <li>Nekopíruj obsah (postavy/scénu 1:1). Prenášaj <strong>prvky štýlu</strong>, nie konkrétny obrázok.</li>
        <li>Nezabudni na účel: infografika má vysvetľovať, nie zdobiť.</li>
      </ul>

      <MiniTask title="Rozlož štýl + vytvor mini-sériu">
        <p><strong>Situácia</strong></p>
        <p>Chceš spraviť sériu vizuálov, ktoré budú pôsobiť konzistentne. Vyber si:</p>
        <ul>
          <li><strong>1 štýlovú referenciu</strong> (farby, svetlo, médium), a</li>
          <li><strong>1 kompozičnú referenciu</strong> (layout, negatívny priestor).</li>
        </ul>

        <p><strong>Inštrukcia</strong></p>
        <p>Najprv si vytvor STYLE BLOCK, potom sprav 2 nové scény v tom istom štýle (bez kopírovania obsahu referencie) a nakoniec sprav krátky "séria test".</p>

        <p><strong>✅ Krok 1: STYLE BLOCK</strong></p>
        <p>Vyplň si šablónu STYLE BLOCK podľa tvojej referencie.</p>
        <p>Ulož ako: L7_style_block</p>

        <p><strong>✅ Krok 2: Dve nové scény v rovnakom štýle</strong></p>
        <p>Vygeneruj 2 obrázky v rovnakom štýle, ale s inou scénou/obsahom. Použi svoj koncept z lekcie 2 (kuchyňa / šéfkuchár / automat) alebo inú jednoduchú tému.</p>
        <p>Ulož ako: L7_scene1, L7_scene2</p>

        <p><strong>✅ Krok 3: Séria test (kontrola konzistencie)</strong></p>
        <p>Vyber si jedno:</p>
        <ul>
          <li>buď sprav <strong>tretí obrázok</strong> v tom istom štýle, ale s inou scénou, alebo</li>
          <li>sprav <strong>ten istý obrázok v inom formáte</strong> (napr. 16:9 → 4:5), bez zmeny štýlu.</li>
        </ul>
        <p>Ulož ako: L7_series_test</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Dokážeš pomenovať štýl referencie bez toho, aby si použil názov autora/značky?</p>
        <p>Sú tvoje 2 nové scény vizuálne konzistentné medzi sebou?</p>
        <p>Sú zároveň dostatočne "tvoje" (nie kópia obsahu referencie)?</p>
        <p>Pomohla ti referencia zrýchliť cestu ku konzistencii?</p>
        <p>Prešiel "séria test" (tretí obrázok alebo iný formát) bez rozpadu štýlu?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Referencia je "štýlový kompas". Keď ju rozložíš na prvky a prenesieš do promptu cez STYLE BLOCK, dostaneš konzistentnejšie výsledky rýchlejšie — bez potreby kopírovať konkrétny obrázok. Konzistencia sa potom dá testovať jednoducho: tretím obrázkom alebo zmenou formátu.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prístup je najlepší, keď chceš použiť referenciu bezpečne a zároveň získať konzistentný štýl?"
        options={[
          { label: "🌕", text: "\u201EPošlem referenciu a poviem: sprav mi to presne v tomto štýle a pridaj tam aj logo, nech to vyzerá profi.\u201C" },
          { label: "⭐", text: "\u201EPoužijem referenciu, rozložím ju na prvky (farby, svetlo, médium, kompozícia), spravím STYLE BLOCK a ten použijem v promptoch.\u201C" },
          { label: "☀️", text: "\u201ENapíšem len: moderný pekný štýl, a budem generovať, kým sa mi to náhodou nezapáči.\u201C" },
        ]}
        correct="⭐"
        explanation="prenášaš prvky štýlu (nie názov autora/značky ani obsah) a získaš opakovateľný systém pre celú sériu."
      />
    </PageShell>
  );
}
