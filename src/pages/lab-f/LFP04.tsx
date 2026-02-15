import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lf-04-cistenie");

export default function LFP04() {
  return (
    <PageShell title="3️⃣ Úprava audia a čistenie audia" prev={nav.prev} next={nav.next}>
      <p>Keď už máš dobrý voiceover, ešte stále to nemusí znieť &quot;hotovo&quot;. Najčastejší problém nie je obsah ani hlas, ale <strong>technická kvalita</strong>: šum, rozdielna hlasitosť, príliš tiché audio alebo naopak prepálené miesta.</p>
      <p>Cieľ tejto lekcie je jednoduchý: spraviť z priemernej nahrávky <strong>čisté a použiteľné audio</strong> bez toho, aby si sa hral na zvukové štúdio.</p>

      <h2>🎚️ Čo upravovať ako prvé</h2>
      <p>Najprv rieš tri veci, ktoré majú najväčší efekt.</p>
      <ul>
        <li><strong>Vyrovnanie hlasitosti</strong> – Aby audio nebolo raz tiché a raz hlasné. Výsledok má pôsobiť stabilne.</li>
        <li><strong>Odstránenie šumu</strong> – Jemne, nie agresívne. Ak to preženieš, hlas začne znieť umelo.</li>
        <li><strong>Export</strong> – Ak exportuješ zle, zničíš kvalitu aj po dobrej úprave.</li>
      </ul>
      <p>Toto sú &quot;must-have&quot; kroky. Všetko ostatné je už bonus.</p>

      <h2>👉 Debugging: kedy nečistiť, ale nahrať znova</h2>
      <p>AI vie veľa zachrániť, ale nie všetko. Niekedy je rýchlejšie spraviť novú nahrávku než ju zachraňovať.</p>
      <p>Najčastejšie situácie, kedy je lepšie nahrať znova:</p>
      <ul>
        <li><strong>hluk priamo do mikrofónu</strong> (napr. vietor, klopanie, škrípanie stoličky)</li>
        <li><strong>príliš veľká ozvena</strong> v miestnosti</li>
        <li><strong>praskanie a clipping</strong> (prepálený signál)</li>
        <li>hlas je &quot;ďaleko&quot; a miestnosť je hlasnejšia než človek</li>
      </ul>
      <p>Pravidlo: ak aj po čistení znie hlas &quot;plastovo&quot;, radšej rieš prostredie a nahrávku.</p>

      <h2>📦 Praktické pravidlá exportu</h2>
      <p>Aby si mal použiteľný výstup, drž sa jednoduchého:</p>
      <ul>
        <li>ak ideš do podcastu alebo publikovania, exportuj <strong>MP3 vo vyššej kvalite</strong></li>
        <li>ak to ide do ďalšej úpravy, radšej použi <strong>bezstratový formát</strong>, ak je k dispozícii</li>
        <li>vždy si ulož finálnu verziu s názvom, ktorý dáva zmysel (napr. verzia a dátum)</li>
      </ul>

      <MiniTask title="Čistenie audia pred a po">
        <p><strong>Situácia</strong></p>
        <p>Máš krátku nahrávku, ktorá je obsahovo v poriadku, ale technicky znie &quot;domácky&quot;. Chceš ju vyčistiť tak, aby bola použiteľná.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Sprav dve verzie tej istej nahrávky:</p>
        <ul>
          <li>A: pôvodné audio</li>
          <li>B: vyčistené audio</li>
        </ul>
        <p><strong>Postup</strong></p>
        <ul>
          <li>nahraj 15–30 sekúnd hlasu na mobil alebo notebook a ulož ako <strong>L3_A</strong></li>
          <li>vyčisti audio cez AI nástroj a ulož ako <strong>L3_B</strong></li>
          <li>uisti sa, že si spravil aspoň:
            <ul>
              <li>vyrovnanie hlasitosti</li>
              <li>odšumenie</li>
            </ul>
          </li>
        </ul>
        <p><strong>❓ Porovnávacie otázky</strong></p>
        <ul>
          <li>Je verzia B zrozumiteľnejšia a príjemnejšia na počúvanie?</li>
          <li>Je šum v B výrazne menší než v A?</li>
          <li>Neznie hlas v B neprirodzene alebo &quot;plastovo&quot;?</li>
          <li>Je hlasitosť v B stabilnejšia než v A?</li>
          <li>Je verzia B použiteľná bez toho, aby si ju musel ďalej zachraňovať?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Aj jednoduché čistenie audia spraví veľký rozdiel v tom, ako profesionálne pôsobí výsledok. Najčastejšie stačí vyrovnať hlasitosť a jemne odstrániť šum. Keď to preženieš, kvalita sa môže zhoršiť.</p>
      </ExpectedFinding>

      <MiniTest
        question="Čo je najlepší prístup k čisteniu audia?"
        options={[
          { label: "🌕", text: "Čistenie neriešim, poslucháč si zvykne." },
          { label: "⭐", text: "Čím viac čistenia, tým lepšie. Radšej to preženiem, aby šum nebolo počuť." },
          { label: "☀️", text: "Najprv spravím jemné odšumenie a vyrovnám hlasitosť. Ak to začne znieť umelo, radšej nahrám znova." },
        ]}
        correct="☀️"
        explanation="Čistenie má pomôcť, nie zmeniť hlas na umelý. Jemné úpravy sú často najlepšie a niekedy je rýchlejšie spraviť novú nahrávku."
      />
    </PageShell>
  );
}
