import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-02-rychly-start");

export default function LDP02() {
  return (
    <PageShell title="1️⃣ Rýchly štart: ako budeme generovať a editovať" prev={nav.prev} next={nav.next}>

      <p>V tomto LABe nejde o to "vygenerovať pekný obrázok". Ide o to <strong>vyrobiť použiteľný vizuál</strong>, ktorý:</p>
      <ul>
        <li>zapadne do tvojho štýlu,</li>
        <li>dá sa orezať pre rôzne formáty,</li>
        <li>a dá sa opakovane spraviť znova (bez toho, aby to bolo zakaždým úplne iné).</li>
      </ul>
      <p>Preto si hneď na začiatku ujasníme, <strong>akými režimami vieš s AI obrázkami pracovať</strong> a čo od ktorého čakať.</p>

      <h3>🧩 Tri režimy práce s AI obrázkami</h3>
      <p>👉 <strong>Generovanie (Generate)</strong></p>
      <p>Použi, keď chceš vytvoriť obrázok "od nuly".</p>
      <ul>
        <li>hodí sa na: nové vizuály, ilustrácie, pozadia, atmosféru</li>
        <li>pozor: bez štýlu a jasného účelu je výsledok často "náhodný"</li>
      </ul>

      <p>👉 <strong>Úprava existujúceho obrázka (Edit)</strong></p>
      <p>Použi, keď už niečo máš a chceš to <strong>doladiť</strong>.</p>
      <ul>
        <li>hodí sa na: zmena farieb, doplnenie prvku, menšie úpravy kompozície</li>
        <li>pozor: pri veľkých zásahoch sa môže rozpadnúť konzistencia</li>
      </ul>

      <p>👉 <strong>Variácie (Variations)</strong></p>
      <p>Použi, keď chceš viac možností v "tom istom duchu".</p>
      <ul>
        <li>hodí sa na: rýchly výber najlepšej verzie z viacerých podobných návrhov</li>
        <li>pozor: variácie nie sú záruka konzistencie, len šetria čas</li>
      </ul>

      <h3>🖼️ Formát nie je detail: pomer strán rozhoduje o použiteľnosti</h3>
      <p>Častá chyba: vytvoríš super obrázok… a potom zistíš, že sa nedá použiť, lebo:</p>
      <ul>
        <li>v prezentácii je všetko príliš v strede a text nemá kam ísť,</li>
        <li>na IG sa pri odreže pointa,</li>
        <li>na webe sa hero obrázok oreže tak, že zostane len "nič".</li>
      </ul>
      <p>Preto budeme v LABe myslieť na formát dopredu. Najčastejšie budeš potrebovať:</p>
      <p>🖥️ <strong>16:9</strong> (prezentácia) – veľa priestoru, často potrebuješ <em>negatívny priestor</em> pre text</p>
      <p>📷 <strong>4:5</strong> (IG) – musí to fungovať aj po oreze, veľké tvary sú výhoda</p>
      <p>🌐 <strong>wide / hero</strong> (web) – kompozícia skôr "do šírky", čisté pozadie často vyhráva</p>

      <h3>✅ Zásada LABu: 1 iterácia = 1 zmena</h3>
      <p>Aby si sa nezacyklil v štýle "skúšam 30x a neviem, prečo to raz vyšlo", budeme držať jednoduché pravidlo:</p>
      <ul>
        <li>meníš <strong>iba jednu vec naraz</strong> (kompozícia / štýl / detail)</li>
        <li>ukladáš si verzie (v1, v2, v3)</li>
        <li>na konci vieš pomenovať: <strong>čo presne zlepšilo výsledok</strong></li>
      </ul>
      <p>Toto je rozdiel medzi "náhodným generovaním" a "kontrolovanou tvorbou".</p>

      <h3>🗂️ Ako si ukladať výsledky, aby si sa v tom nestratil</h3>
      <p>Odporúčam jednoduchý systém:</p>
      <p><strong>👉 názov projektu + verzia + poznámka</strong>, čo sa menilo</p>
      <p>Príklad:</p>
      <ul>
        <li>IG_cover_v1 (základ)</li>
        <li>IG_cover_v2 (viac negatívneho priestoru)</li>
        <li>IG_cover_v3 (jemnejšie svetlo)</li>
      </ul>

      <MiniTest
        question="Ktorý prístup je najlepší, keď chceš z AI obrázka dostať konzistentný výsledok a nestratiť kontrolu?"
        options={[
          { label: "🌕", text: "\u201EKlikám na Variations stále dookola, kým sa mi niečo náhodou zapáči. Prompty neriešim a verzie si neukladám.\u201C" },
          { label: "⭐", text: "\u201EVytvorím prvú verziu (v1), potom spravím 2–3 variácie alebo úpravy, ale vždy zmením len jednu vec (napr. kompozíciu). Výstupy si ukladám ako v1, v2, v3 a pri každej verzii si napíšem, čo som menil.\u201C" },
          { label: "☀️", text: "\u201ENapíšem čo najdlhší prompt so všetkými detailmi naraz, aby to bolo hotové na prvýkrát – bez iterácií.\u201C" },
        ]}
        correct="⭐"
        explanation="je to riadená iterácia – meníš jednu vec naraz, ukladáš verzie a vieš, čo zmenu spôsobilo."
      />
    </PageShell>
  );
}
