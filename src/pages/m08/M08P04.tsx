import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P04() {
  const nav = getNavContext("m08-04-drob-4e");
  return (
    <PageShell title="3️⃣ Rámec DROB + 4E: ako rozsekať proces tak, aby sa dal zlepšiť" {...nav}>

      <p>V predchádzajúcej lekcii si si skúsil(a) rozložiť činnosť na kroky. To je super začiatok.</p>
      <p>Lenže ak chceš proces neskôr zlepšovať alebo automatizovať, potrebuješ ešte jednu vec:</p>
      <p>👉 <strong>vedieť si kroky zoskupiť a pomenovať, čo sa v nich vlastne deje.</strong></p>
      <p>Na to použijeme dva jednoduché rámce:</p>
      <ul>
        <li><strong>DROB</strong> – dá procesu „kostru"</li>
        <li><strong>4E</strong> – ukáže, kde AI typicky pomáha</li>
      </ul>

      <h3>🧩 DROB: 4 časti, ktoré má skoro každý proces</h3>
      <ul>
        <li><strong>D – Dáta (vstupy):</strong> čo do procesu prichádza?</li>
        <li><strong>R – Rozhodnutia:</strong> kde sa rozhoduje alebo vyhodnocuje?</li>
        <li><strong>O – Operácie:</strong> mechanické kroky (presun, kopírovanie, uloženie…)</li>
        <li><strong>B – Benefit (výstup):</strong> čo je hotovo a aký je prínos?</li>
      </ul>
      <p>👉 DROB ti pomôže uvidieť, či máš proces postavený na dátach, rozhodnutiach alebo len na rutine – a kde sa to celé najčastejšie láme.</p>

      <h3>🧠 4E: 4 typy krokov, kde AI často pomáha</h3>
      <ul>
        <li><strong>Extract (vytiahni):</strong> vyber podstatné z textu/dát</li>
        <li><strong>Explain (vysvetli):</strong> zhrň, urob z toho zrozumiteľný obraz</li>
        <li><strong>Edit (uprav):</strong> prepíš, skráť, preformuluj, zmeň štýl</li>
        <li><strong>Evaluate (vyhodnoť):</strong> skontroluj, porovnaj, nájdi odchýlky, navrhni zlepšenie</li>
      </ul>
      <p>👉 4E je tvoj „radar" na to, kde AI prirodzene šetrí čas.</p>

      <h3>✅ Príklad z práce: odpoveď na opakujúci sa e-mail 📩</h3>
      <p><strong>Situácia:</strong> chodí ti podobná otázka stále dokola.</p>
      <p><strong>DROB</strong></p>
      <ul>
        <li><strong>D:</strong> email + prípadné prílohy + história komunikácie</li>
        <li><strong>R:</strong> je to štandardná otázka alebo výnimka? treba niečo dopýtať?</li>
        <li><strong>O:</strong> presun do správneho priečinka / označenie / vytvorenie záznamu</li>
        <li><strong>B:</strong> odpoveď odoslaná + prehľad (čo sa riešilo)</li>
      </ul>
      <p><strong>4E (kde sa hodí AI)</strong></p>
      <ul>
        <li><strong>Extract:</strong> vytiahnuť z mailu „čo chce zákazník" + kľúčové údaje</li>
        <li><strong>Explain:</strong> zhrnúť problém v 2 vetách (pre teba alebo tím)</li>
        <li><strong>Edit:</strong> pripraviť draft odpovede v tvojom štýle</li>
        <li><strong>Evaluate:</strong> skontrolovať, či odpoveď pokrýva všetky body a je zrozumiteľná</li>
      </ul>

      <h3>✅ Príklad z osobného života: týždenný prehľad domácich financií 💳</h3>
      <p><strong>DROB</strong></p>
      <ul>
        <li><strong>D:</strong> transakcie z banky, cash výdavky, poznámky/účtenky</li>
        <li><strong>R:</strong> kategorizácia, identifikácia nezrovnalostí, čo je „nezvyčajné"</li>
        <li><strong>O:</strong> export/import, doplnenie chýbajúcich popisov, označenie „hotovo"</li>
        <li><strong>B:</strong> prehľad výdavkov podľa kategórií + rýchle zistenia za týždeň</li>
      </ul>
      <p><strong>4E (kde sa hodí AI)</strong></p>
      <ul>
        <li><strong>Extract:</strong> vyťiahnuť sumy, obchodníkov, opakované platby</li>
        <li><strong>Explain:</strong> krátke zhrnutie „kam odišli peniaze"</li>
        <li><strong>Edit:</strong> upraviť popisy kategórií / pravidlá / poznámky</li>
        <li><strong>Evaluate:</strong> nájsť odchýlky (napr. „jedlo +30 %") a navrhnúť čo s tým</li>
      </ul>

      <MiniTask title="DROB + 4E na domácich financiách 💳🧩">
        <p><strong>Zadanie</strong></p>
        <p>Vezmi svoj proces z mini-úlohy v lekcii 2 (domáce financie) a doplň k nemu:</p>
        <ol>
          <li>mapu <strong>DROB</strong></li>
          <li>označenie krokov podľa <strong>4E</strong></li>
        </ol>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Vyplň <strong>DROB</strong> (4 odrážky stačia):
            <ul>
              <li><strong>D (Dáta):</strong> …</li>
              <li><strong>R (Rozhodnutia):</strong> …</li>
              <li><strong>O (Operácie):</strong> …</li>
              <li><strong>B (Benefit):</strong> …</li>
            </ul>
          </li>
          <li>Zober svoje kroky (6–8) a ku každému dopíš označenie:<br /><strong>Extract / Explain / Edit / Evaluate</strong><br />alebo ak to nie je 4E, tak označ ako <strong>O (operácia)</strong>.</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna)</strong></p>
        <p><strong>DROB</strong></p>
        <ul>
          <li>D: …</li>
          <li>R: …</li>
          <li>O: …</li>
          <li>B: …</li>
        </ul>
        <p><strong>Kroky (6–8) s označením</strong></p>
        <ol>
          <li>… (Extract / Explain / Edit / Evaluate / O)</li>
          <li>… ( … )</li>
          <li>… ( … )</li>
          <li>… ( … )</li>
          <li>… ( … )</li>
          <li>… ( … )</li>
          <li>… ( … )</li>
          <li>… ( … )</li>
        </ol>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> mám vyplnené DROB + všetky kroky majú štítok (4E alebo O).</li>
          <li><strong>⭐ Dobré:</strong> kroky sú konkrétne a označenia dávajú zmysel (nie všetko je Evaluate 😄).</li>
          <li><strong>🌟 Výborné:</strong> vidím aspoň 2 kroky typu <strong>O</strong> a aspoň 2 kroky typu <strong>4E</strong>.</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
