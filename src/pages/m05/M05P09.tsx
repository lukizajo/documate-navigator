import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M05P09() {
  const nav = getNavContext("m05-09-prakticka-uloha");
  return (
    <PageShell title={"M05 \u2013 Vyh\u013Ead\u00E1vanie s AI \uD83D\uDD0D\uD83E\uDD14"} {...nav}>

      <h2>🎓 Praktická úloha – Magnézium na spánok: mýtus vs fakt 💤</h2>

      <h3>Zadanie</h3>
      <p>Na internete je plno tvrdení typu „magnézium zlepší spánok", „pomáha na zaspávanie", „stačí ho brať večer a budeš spať ako bábätko".</p>
      <p>Tvojou úlohou je urobiť <strong>krátky, ale poctivý prieskum</strong>, ktorý odlíši <strong>fakty od mýtov</strong> – a zároveň ukáže, ako používať AI vyhľadávanie bezpečne.</p>

      <h3>Tvoja úloha</h3>
      <p>Použi <strong>Deep Research</strong> (ak máš), prípadne <strong>AI s webovým vyhľadávaním</strong>, a k tomu <strong>Google</strong> na overenie.</p>
      <p>Postup:</p>
      <ul>
        <li>Sprav prieskum cez <strong>Deep Research / AI</strong> a získaj prehľad tvrdení o magnéziu a spánku.</li>
        <li>Vyber <strong>5 konkrétnych tvrdení</strong> (napr. účinok, forma magnézia, dávkovanie, čas užitia, pre koho to má/ nemá zmysel).</li>
        <li>Pri každom tvrdení urob <strong>trianguláciu</strong>: over ho minimálne cez <strong>2 nezávislé zdroje</strong>, z toho <strong>aspoň 1 dôveryhodný/odborný</strong> (napr. zdravotnícky web, odborný článok, inštitúcia, meta-analýza).</li>
        <li>Z 5 tvrdení vyber <strong>2 najdôležitejšie</strong> a ku každému prilož:
          <ul>
            <li><strong>citáciu</strong> (1–2 vety) priamo zo zdroja (ako dôkaz), alebo jasne napíš <strong>„neviem overiť"</strong>, ak sa to nedá.</li>
          </ul>
        </li>
        <li>Na konci napíš krátke odporúčanie: <strong>kedy to dáva zmysel skúsiť</strong> a <strong>kedy si dať pozor</strong>.</li>
      </ul>

      <h3>Cieľ</h3>
      <p>Naučiť sa používať AI na vyhľadávanie tak, aby si neprebral <strong>sebaisto znejúce nepresnosti</strong>.</p>
      <p>Precvičiť si <strong>Deep Research</strong>, <strong>trianguláciu</strong> a jednoduché overenie tvrdení cez zdroje.</p>
      <p>Vytvoriť výstup, ktorý je <strong>praktický a použiteľný</strong> pre bežného človeka.</p>

      <h3>Očakávaný výstup</h3>
      <p>Odovzdáš krátky dokument (stačí 1–2 strany) s touto štruktúrou:</p>
      <ol>
        <li><strong>5 tvrdení o magnéziu a spánku</strong> (každé označ ako <strong>Fakt / Skôr mýtus / Neisté</strong>)</li>
        <li>Pri každom tvrdení:
          <ul>
            <li><strong>zdroje</strong> (min. 2 nezávislé odkazy)</li>
            <li>1 veta „prečo" si to tak označil</li>
          </ul>
        </li>
        <li><strong>2 overené tvrdenia</strong> navyše obsahujú:
          <ul>
            <li><strong>presnú citáciu</strong> 1–2 viet zo zdroja (alebo „neviem overiť")</li>
          </ul>
        </li>
        <li><strong>Záver do praxe</strong>:
          <ul>
            <li><strong>kedy má zmysel magnézium skúsiť</strong> (pre koho, v akých situáciách)</li>
            <li><strong>kedy je to rizikové/zavádzajúce</strong> (pasce, výnimky, čo si overiť)</li>
          </ul>
        </li>
      </ol>

      <h3>✅ Hodnotiace kritériá (0–3 body)</h3>

      <p><strong>1) Kvalita tvrdení (0–3)</strong></p>
      <ul>
        <li>0: tvrdenia sú všeobecné, nejasné, nedajú sa overiť</li>
        <li>1: tvrdenia sú konkrétnejšie, ale nie všetky sú merateľné/overiteľné</li>
        <li>2: väčšina tvrdení je konkrétna a overiteľná</li>
        <li>3: všetkých 5 tvrdení je konkrétnych, jasných a „fact-check" vhodných</li>
      </ul>

      <p><strong>2) Zdroje a triangulácia (0–3)</strong></p>
      <ul>
        <li>0: chýbajú zdroje alebo sú to len blogy bez dôveryhodnosti</li>
        <li>1: zdroje sú, ale nie sú nezávislé alebo slabé</li>
        <li>2: pri väčšine tvrdení sú 2 nezávislé zdroje, aspoň 1 kvalitný</li>
        <li>3: pri každom tvrdení sú 2+ nezávislé zdroje, z toho min. 1 dôveryhodný/odborný</li>
      </ul>

      <p><strong>3) Overenie citáciou (0–3)</strong></p>
      <ul>
        <li>0: bez citácií a bez priznania neistoty</li>
        <li>1: citácie sú, ale nesedia na tvrdenie alebo sú príliš voľné</li>
        <li>2: citácie väčšinou sedia, pri nejasnostiach je uvedené „neviem"</li>
        <li>3: 2 vybrané tvrdenia majú presné citácie, alebo je férovo uvedené „neviem overiť"</li>
      </ul>

      <p><strong>4) Praktický záver (0–3)</strong></p>
      <ul>
        <li>0: záver je všeobecný, nepoužiteľný</li>
        <li>1: záver má tipy, ale bez jasných hraníc a upozornení</li>
        <li>2: záver je použiteľný, obsahuje aj upozornenia</li>
        <li>3: záver je veľmi praktický: <strong>kedy áno / kedy nie / čo overiť</strong> + jasné „next steps"</li>
      </ul>
    </PageShell>
  );
}
