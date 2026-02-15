import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-09-pouzitie");

export default function LDP09() {
  return (
    <PageShell title="8️⃣ Použitie obrázkov v praxi" prev={nav.prev} next={nav.next}>

      <p>Cieľ tejto lekcie: <strong>prispôsobiť obrázok cieľovému médiu</strong>, aby bol naozaj použiteľný.</p>
      <p>Tip do praxe: <strong>Jeden obrázok ≠ univerzálny obrázok.</strong></p>

      <h3>🧠 Prečo to riešime</h3>
      <p>Ten istý vizuál môže vyzerať super v prezentácii, ale na Instagrame bude nečitateľný. Vo videu zas môže pôsobiť rušivo alebo "preblikávať" detailmi.</p>
      <p>Rozdiel nerobí len rozmer. Rozdiel robí:</p>
      <ul>
        <li>kompozícia (kam padá pozornosť),</li>
        <li>čitateľnosť v malom formáte,</li>
        <li>safe zóny (UI v stories/reels),</li>
        <li>množstvo detailov (video + mobil to "zabije").</li>
      </ul>

      <h3>📐 Základné formáty</h3>
      <ul>
        <li><strong>Prezentácia:</strong> 16:9</li>
        <li><strong>Instagram feed:</strong> 4:5</li>
        <li><strong>Stories / Reels:</strong> 9:16 (nechaj safe zóny hore/dole kvôli UI)</li>
        <li><strong>Web (hero/cover):</strong> často 16:9 alebo wide – a skoro vždy potrebuje veľa negatívneho priestoru</li>
      </ul>

      <h3>🧩 Ako sa mení vizuál podľa média</h3>
      <p><strong>Prezentácia (16:9)</strong></p>
      <ul>
        <li>jasný hlavný prvok, väčšie tvary</li>
        <li>priestor pre nadpis (negatívny priestor)</li>
        <li>menej detailov, aby to fungovalo z diaľky</li>
      </ul>
      <p><strong>Video</strong></p>
      <ul>
        <li>obraz sa hýbe → vizuál musí byť jednoduchší</li>
        <li>text rieš ako overlay mimo obrázka (nie ako súčasť generovania)</li>
        <li>pozor na detailné pozadia (pri pohybe pôsobia rušivo)</li>
      </ul>
      <p><strong>Web a sociálne siete</strong></p>
      <ul>
        <li>na mobile rozhoduje 1–2 sekundy → cover musí "chytiť"</li>
        <li>4:5 je čitateľnejšie než 1:1</li>
        <li>konzistentná séria často vyhrá nad jedným top obrázkom</li>
      </ul>

      <h3>✅ Šablóna promptu na adaptáciu pre médium (copy/paste)</h3>
      <p>{"\u201EZachovaj štýl podľa môjho STYLE BLOCK / mini style guide. Uprav iba kompozíciu pre formát "}<strong>[16:9 / 4:5 / 9:16]</strong>{" tak, aby hlavný prvok nebol odrezaný a aby bol priestor pre text "}<strong>[vľavo / hore / dole]</strong>{". Nepridávaj nové prvky do scény, len uprav rozloženie a mierku. Bez textu v obrázku, čisté pozadie, zrozumiteľné na prvý pohľad.\u201C"}</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Slepý orez</strong>: 16:9 orezané na 4:5 často odsekne pointu.</li>
        <li><strong>Text pri okrajoch</strong>: UI v stories/reels ho prekryje.</li>
        <li><strong>Príliš detailný vizuál</strong>: v malom formáte je z toho šum.</li>
        <li><strong>Zmena štýlu pri adaptácii</strong>: meníš médium, nie identitu série.</li>
      </ul>

      <MiniTask title={`Porovnaj "slepý orez" vs "adaptácia promptom"`}>
        <p><strong>Situácia</strong></p>
        <p>Máš jeden svoj obrázok (ideálne L5_v3_jednoduchost alebo L7_scene1). Chceš ho použiť:</p>
        <ul>
          <li>do <strong>prezentácie (16:9)</strong> a zároveň</li>
          <li>na <strong>Instagram feed (4:5)</strong> <em>(alebo Stories 9:16 – ak chceš)</em></li>
        </ul>

        <p><strong>Inštrukcia</strong></p>
        <p>Sprav dve verzie pre sociálny formát:</p>
        <ul>
          <li>A) len orez (bez zmeny kompozície)</li>
          <li>B) adaptácia promptom (kompozícia prispôsobená)</li>
        </ul>

        <p><strong>✅ Krok 1: Prezentácia (základ)</strong></p>
        <p>Ulož svoju existujúcu verziu ako: L7_16x9_base</p>

        <p><strong>✅ Krok 2A: Sociálna verzia – slepý orez</strong></p>
        <p>Sprav len orez na 4:5 (alebo 9:16) bez úprav kompozície.</p>
        <p>Ulož ako: L7_crop_only</p>

        <p><strong>✅ Krok 2B: Sociálna verzia – adaptácia promptom</strong></p>
        <p>Použi šablónu promptu a prispôsob kompozíciu pre 4:5 (alebo 9:16), aby pointa nebola odrezaná.</p>
        <p>Ulož ako: L7_adapted</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je pri "crop only" niečo dôležité odrezané alebo posunuté mimo pozornosti?</p>
        <p>Je v adaptovanej verzii jasnejšie, čo je hlavný prvok?</p>
        <p>Zostal zachovaný štýl (farby/svetlo/médium) medzi verziami?</p>
        <p>Je adaptovaná verzia čitateľnejšia v malom formáte než slepý orez?</p>
        <p>Vieš si predstaviť, že tento postup zopakuješ pri ďalších vizuáloch v sérii?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Formát nie je len rozmer. Je to kompozícia a použiteľnosť.</p>
        <p>Slepý orez často zničí pointu. Keď však adaptuješ vizuál promptom (zachováš štýl a zmeníš iba rozloženie), získaš výsledok, ktorý vyzerá profesionálne v každom médiu.</p>
      </ExpectedFinding>

      <MiniTest
        question="Čo je najlepší prístup, keď chceš použiť jeden vizuál v rôznych médiách?"
        options={[
          { label: "🌕", text: "\u201ESpravím jeden obrázok a potom ho budem všade len orezávať podľa potreby.\u201C" },
          { label: "⭐", text: "\u201EPri každom médiu zmením úplne štýl, nech to vyzerá moderne pre danú platformu.\u201C" },
          { label: "☀️", text: "\u201EZachovám štýl (mini style guide / STYLE BLOCK) a prispôsobím kompozíciu pre formát média – nie slepým orezom, ale adaptáciou promptom.\u201C" },
        ]}
        correct="☀️"
        explanation="zachováš konzistenciu a zároveň urobíš vizuál použiteľný pre konkrétny formát."
      />
    </PageShell>
  );
}
