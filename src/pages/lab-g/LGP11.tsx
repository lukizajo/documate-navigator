import { PageShell } from "@/components/PageShell";
import { ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-11-prakticka-uloha");

export default function LGP11() {
  return (
    <PageShell title="🎓 Praktická úloha – Video v praxi" prev={nav.prev} next={nav.next}>
      <p>Na záver spojíš všetko z LABu do jednej reálnej úlohy. Cieľom nie je mať „dokonalé video", ale vedome použiť stavebné bloky: <strong>pointa, scenár, shot list, výber zdrojov obrazu, titulky, konzistencia, export a STOP/GO kontrola</strong>.</p>

      <h2>Zadanie</h2>
      <p>Vytvor <strong>1 krátke video (15–60 s)</strong> na jednu tému (vyber si jednu):</p>
      <ol type="a">
        <li><strong>1 AI tip do praxe</strong> (niečo, čo človek vie spraviť hneď dnes)</li>
        <li><strong>Mýtus vs realita o AI</strong> (1 mýtus + krátke vysvetlenie)</li>
        <li><strong>Mini návod</strong> (ako spraviť X v AI v 2–3 krokoch)</li>
      </ol>

      <h3>Požiadavky na výsledok</h3>
      <ul>
        <li>video má jasnú <strong>pointu</strong> (1 myšlienka = 1 video),</li>
        <li>má čitateľné <strong>titulky</strong> (max 2 riadky, safe area),</li>
        <li>má konzistentný <strong>štýl</strong> (aspoň 2 kotvy),</li>
        <li>hlas je <strong>zrozumiteľný</strong> (hudba ho neprehluší),</li>
        <li>je eticky/právne <strong>GO</strong> (žiadne zavádzanie, tvár/hlas bez súhlasu, licencie).</li>
      </ul>

      <h2>Tvoja úloha</h2>

      <h3>1️⃣ Účel – pre koho a na čo</h3>
      <p>Vyber si jedno použitie:</p>
      <ol type="a">
        <li>Reels/Shorts (9:16)</li>
        <li>LinkedIn feed (1:1 alebo 9:16)</li>
        <li>Web/prezentácia (16:9)</li>
      </ol>
      <p>Doplň si:</p>
      <ul>
        <li>cieľ: vysvetliť / zaujať / aktivovať</li>
        <li>publikum: začiatočník / kolega / klient</li>
        <li>CTA: komentuj / ulož / skús / pošli ďalej</li>
      </ul>

      <h3>2️⃣ Pointa – 1 veta</h3>
      <p>Napíš pointu jednou vetou (bez vaty).</p>
      <p>Príklad: „Ukážem ti 1 trik, ako z AI dostať lepší email za 30 sekúnd."</p>

      <h3>3️⃣ Scenár – Hook → Jadro → Záver</h3>
      <p>Napíš scenár v štruktúre:</p>
      <ul>
        <li>🪝 Hook (1 veta, 1–2 sek)</li>
        <li>🧠 Jadro (2–3 body, krátke vety)</li>
        <li>✅ Záver (zhrnutie + CTA)</li>
      </ul>

      <h3>4️⃣ Shot list – 6 až 10 záberov</h3>
      <p>Rozsekaj scenár na 6–10 záberov:</p>
      <ul>
        <li>Obraz: čo presne vidím</li>
        <li>Voice: čo sa hovorí</li>
        <li>Dĺžka: koľko sekúnd</li>
      </ul>

      <h3>5️⃣ Zdroj obrazu – AI / stock / točenie</h3>
      <p>Ku každému záberu si vyber zdroj:</p>
      <ul>
        <li>🤖 AI (metafora, abstrakt, vizuál na mieru)</li>
        <li>🗂️ stock (realistický b-roll)</li>
        <li>🎥 točenie/screen (dôvera, presnosť, reálny postup)</li>
      </ul>
      <p>Doplň 1 vetu „prečo" pri každom zábere.</p>

      <h3>6️⃣ Titulky + zvuk</h3>
      <ul>
        <li>titulky: max 2 riadky, čitateľné tempo, safe area</li>
        <li>zvuk: hlas vyhráva, hudba je podklad</li>
      </ul>

      <h3>7️⃣ Style lock – 2 až 3 kotvy konzistencie</h3>
      <p>Vyber si 2–3 pravidlá, ktoré držia video pokope:</p>
      <ul>
        <li>titulky (umiestnenie + štýl)</li>
        <li>farby alebo nálada svetla</li>
        <li>prechody/tempo (max 1–2 typy)</li>
      </ul>

      <h3>8️⃣ Export + mini-rutina (2s/3s/bez zvuku)</h3>
      <p>Exportni primárne:</p>
      <ul>
        <li><strong>9:16</strong> (ak je to Reels/Shorts)</li>
      </ul>
      <p>Potom sprav kontrolu:</p>
      <ul>
        <li>2 sekundy: je jasné, o čom to je?</li>
        <li>3 sekundy: je viditeľná prvá pointa?</li>
        <li>bez zvuku: funguje to len z titulkov?</li>
      </ul>

      <h3>9️⃣ STOP/GO kontrola</h3>
      <p>Skontroluj:</p>
      <ul>
        <li>nepoužívaš tvár/hlas reálnej osoby bez súhlasu</li>
        <li>nepôsobí to ako „fake dôkaz reality"</li>
        <li>hudba/stock majú licenciu pre tvoje použitie</li>
        <li>citlivé témy máš ošetrené</li>
      </ul>

      <h3>Test v praxi (povinné)</h3>
      <ul>
        <li>Pusť video na mobile (nie len v editore).</li>
        <li>Skontroluj titulky v safe area a čitateľnosť.</li>
        <li>Pozri 10 sekúnd bez zvuku: rozumieš pointe?</li>
      </ul>

      <h3>❓ Sebakontrola (ÁNO/NIE)</h3>
      <ul>
        <li>Je pointa videa jasná jednou vetou?</li>
        <li>Je hook pochopiteľný do 2 sekúnd?</li>
        <li>Má video max 2–3 body (nie je preplnené)?</li>
        <li>Sú titulky čitateľné (max 2 riadky) a v safe area?</li>
        <li>Je hlas zrozumiteľný a hudba neprehlušuje?</li>
        <li>Je štýl konzistentný (min. 2 kotvy)?</li>
        <li>Je export správny pre médium (najmä 9:16 pre Reels/Shorts)?</li>
        <li>Je video eticky/právne GO (tvár/hlas/licencie/zavádzanie)?</li>
      </ul>

      <ExpectedFinding>
        <p>Budeš mať hotové <strong>1 krátke video (15–60 s)</strong> pripravené na publikáciu. Zároveň ti zostane „master postup" (brief → scenár → shot list → titulky → style lock → export → STOP/GO), ktorý vieš nabudúce použiť len výmenou témy.</p>
      </ExpectedFinding>

      <p><strong>💡 Bonus tip (aby to bolo férové a jasné)</strong></p>
      <p>Ak nevieš, ako začať, povedz AI:</p>
      <p>„Navrhni mi 3 rôzne hooky k mojej pointe a počkaj, kým si vyberiem."</p>
      <p>Najväčší rozdiel spravia 2 veci: <strong>jasná pointa + čitateľné titulky</strong>.</p>
    </PageShell>
  );
}
