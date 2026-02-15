import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("ld-06-iteracie");

export default function LDP06() {
  return (
    <PageShell title="5️⃣ Iterácie a vylepšovanie" prev={nav.prev} next={nav.next}>

      <p>V tejto lekcii spravíme z AI obrázkov niečo, čo vieš reálne ovládať.</p>
      <p>Nie "klikám dookola a dúfam", ale <strong>riadené vylepšovanie</strong>.</p>
      <p>Zoberieme výstup z lekcie 4 (ideálne L4_v1B) a spravíme z neho <strong>v2 a v3</strong> tak, aby si presne videl, čo zmena spôsobila.</p>

      <h3>🧠 Ako iterovať, aby si sa nezacyklil</h3>
      <p>Najväčší rozdiel medzi začiatočníkom a niekým, kto to používa v praxi, je toto:</p>
      <ul>
        <li>začiatočník mení všetko naraz,</li>
        <li>prax = <strong>1 iterácia = 1 zmena</strong>.</li>
      </ul>
      <p>Keď meníš viac vecí naraz, nevieš:</p>
      <ul>
        <li>čo pomohlo,</li>
        <li>čo uškodilo,</li>
        <li>a čo zopakovať nabudúce.</li>
      </ul>
      <p>👉 <strong>Stop pravidlo:</strong> max 3 iterácie na jeden obrázok. Potom si vyber najlepšiu verziu a posuň sa ďalej.</p>

      <h3>✅ Poradie opráv (od najdôležitejšieho)</h3>
      <p>Keď obrázok "nefunguje", rieš to v tomto poradí:</p>
      <ul>
        <li><strong>Kompozícia & použiteľnosť</strong> – Je jasné, čo je hlavné? Je tam priestor pre text? Funguje formát?</li>
        <li><strong>Jednoduchosť scény</strong> – Nie je tam priveľa prvkov? Dá sa to pochopiť na prvý pohľad?</li>
        <li><strong>Štýl (konzistencia)</strong> – Držia farby, svetlo, médium, nálada? Vyzerá to ako séria?</li>
        <li><strong>Detaily</strong> – Až na konci rieš drobnosti (rekvizity, pozadie, "vyleštenie").</li>
      </ul>

      <h3>🎛️ Menu zmien (vyber vždy len 1 vec)</h3>
      <p>Keď ideš robiť ďalšiu verziu, vyber si iba jednu položku:</p>
      <ul>
        <li>kompozícia (priestor, umiestnenie hlavného prvku)</li>
        <li>počet prvkov (zjednodušenie)</li>
        <li>pozadie (čistejšie vs. detailnejšie)</li>
        <li>kontrast / čitateľnosť (svetlo, výraznosť hlavných prvkov)</li>
        <li>štýl (len ak je mimo tvojho mini style guide)</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Nemeniť naraz kompozíciu aj štýl aj scénu. Vyber si len jednu vec.</li>
        <li>Neskákať hneď do detailov. Keď je zlá kompozícia, detail to nezachráni.</li>
        <li>Zabudnúť si uložiť verzie. Bez toho nemáš porovnanie a nevieš, čo fungovalo.</li>
      </ul>

      <MiniTask title="Sprav 3 riadené iterácie (v1 → v2 → v3)">
        <p><strong>Situácia</strong></p>
        <p>Máš obrázok z lekcie 4, ktorý je najlepší kandidát na použitie (ideálne L4_v1B). Chceš ho doladiť tak, aby bol:</p>
        <ul>
          <li>zrozumiteľný "na prvý pohľad",</li>
          <li>použiteľný na slide 16:9,</li>
          <li>konzistentný so štýlom.</li>
        </ul>

        <p><strong>Inštrukcia</strong></p>
        <p>Ulož si pôvodný obrázok ako <strong>v1</strong> a sprav ešte <strong>v2 a v3</strong>. Pri každej iterácii zmeň iba <strong>jednu vec</strong> (nižšie máš presné zadanie).</p>

        <p><strong>✅ Iterácia v2: Kompozícia (priestor + jasný fokus)</strong></p>
        <p>{"\u201EUprav obrázok tak, aby mal viac negatívneho priestoru vľavo pre nadpis a aby hlavný prvok bol jasnejšie vpravo. Nemeniť štýl ani tému, iba kompozíciu. Formát 16:9, bez textu.\u201C"}</p>
        <p>Ulož ako: L5_v2_kompozicia</p>

        <p><strong>✅ Iterácia v3: Jednoduchosť (menej prvkov)</strong></p>
        <p>{"\u201EZjednoduš scénu: nech sú tam max 3–4 prvky, aby myšlienka bola jasná na prvý pohľad. Zachovaj štýl aj kompozíciu z v2. Formát 16:9, bez textu.\u201C"}</p>
        <p>Ulož ako: L5_v3_jednoduchost</p>

        <p><strong>📝 Iteračný log (vyplň si k verziám)</strong></p>
        <ul>
          <li><strong>v1:</strong> čo nefunguje? (1 veta)</li>
          <li><strong>v2:</strong> čo som zmenil? (1 vec) + čo sa zlepšilo? (1 veta)</li>
          <li><strong>v3:</strong> čo som zmenil? (1 vec) + čo sa zlepšilo? (1 veta)</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je na v2 jasnejšie, kde bude text (negatívny priestor)?</p>
        <p>Je na v2 jasnejšie, čo je hlavný prvok oproti v1?</p>
        <p>Je v3 zrozumiteľnejšia myšlienka "na prvý pohľad" než vo v2?</p>
        <p>Zachoval sa štýl (farby/svetlo/médium) medzi v1, v2, v3?</p>
        <p>Máš po týchto krokoch väčšiu kontrolu nad výsledkom než pri náhodnom generovaní?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Riadená iterácia funguje, lebo <strong>meníš len jednu vec naraz</strong>.</p>
        <p>Najväčší efekt má často kompozícia (priestor, fokus) a zjednodušenie scény — nie pridávanie detailov.</p>
        <p>Keď si verzie ukladáš (v1 → v2 → v3) a píšeš si krátky log, vieš presne zopakovať, čo fungovalo, a použiť to aj nabudúce.</p>
      </ExpectedFinding>

      <MiniTest
        question="Čo je najlepší postup, keď chceš obrázok vyladiť tak, aby si vedel, čo presne zmenu spôsobilo?"
        options={[
          { label: "🌕", text: "\u201EV každej iterácii zmením 2–3 veci (kompozíciu, štýl aj prvky), aby som sa rýchlo dostal k lepšiemu výsledku.\u201C" },
          { label: "⭐", text: "\u201EKeď sa mi obrázok nepáči, radšej vždy generujem nový od nuly, aby som nestrácal čas opravami.\u201C" },
          { label: "☀️", text: "\u201EUložím si v1 a spravím v2 a v3, pričom v každom kroku zmením iba jednu vec (napr. najprv kompozíciu, potom zjednodušenie) a porovnám výsledky vedľa seba.\u201C" },
        ]}
        correct="☀️"
        explanation="keď meníš jednu vec naraz a ukladáš verzie, získaš kontrolu — vieš, čo zlepšenie spôsobilo, a vieš to zopakovať aj nabudúce."
      />
    </PageShell>
  );
}
