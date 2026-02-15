import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-07-konzistencia");

export default function LGP07() {
  return (
    <PageShell title="6️⃣ Štýl a konzistencia" prev={nav.prev} next={nav.next}>
      <p>AI video vie byť pekné… a zároveň pôsobiť ako náhodný mix.</p>
      <p>Raz je to realistické, raz animované, raz iné farby, raz iné fonty — a divákovi to nesedí.</p>
      <p>Konzistencia nie je o tom, že všetko bude rovnaké. Konzistencia je o tom, že video má <strong>jednu identitu</strong>.</p>
      <p>V tomto LABe si nastavíš jednoduchý „style lock" — pár pravidiel, ktoré držia vizuál pokope aj keď kombinuješ <strong>AI + stock + točenie</strong>.</p>

      <h2>🎛️ 4 kotvy konzistencie (drž sa aspoň 2–3)</h2>
      <p>Vyber si 2–3 kotvy a tie dodržuj všade:</p>
      <ul>
        <li>🌈 <strong>Farby</strong> – jedna hlavná + jedna akcentová (a hotovo)</li>
        <li>💡 <strong>Svetlo / nálada</strong> – teplé vs studené, kontrastné vs jemné — vyber jedno</li>
        <li>🔤 <strong>Typ textu + titulky</strong> – rovnaká veľkosť, umiestnenie, rytmus titulkov</li>
        <li>🎬 <strong>Prechody a tempo</strong> – max 1–2 typy prechodov, podobný rytmus strihu</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Lepšie 2 pravidlá dodržané na 90% než 8 pravidiel dodržaných na 20%.</p>

      <h2>✅ MUST / SHOULD / NICE</h2>
      <p>Konzistencia nie je o tom, že všetko bude dokonalé. Je o tom, že pár vecí bude <strong>stále rovnakých</strong>.</p>
      <ul>
        <li><strong>MUST HAVE (bez toho video pôsobí chaoticky):</strong><br />💬 <strong>titulky</strong> – rovnaký štýl, rovnaké umiestnenie, čitateľnosť, safe area</li>
        <li><strong>SHOULD HAVE (výrazne zvýši „pro" dojem):</strong><br />🌈 <strong>farby / nálada</strong> – aspoň jedna paleta + rovnaký pocit svetla (teplé vs studené)</li>
        <li><strong>NICE TO HAVE (len ak to už funguje):</strong><br />🎬 <strong>prechody / efekty</strong> – max 1–2 typy, jemne, aby nepôsobili lacno</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Keď máš konzistentné titulky a farby, divák ti odpustí aj jednoduchší obraz.</p>

      <h2>❗ Na čo si dať pozor</h2>
      <p>Tieto veci robia video „random" aj keď sú zábery pekné:</p>
      <ul>
        <li>🎭 <strong>Mix štýlov bez pravidla:</strong> raz realistické, raz 3D, raz kreslené, raz stock – bez spoločnej identity</li>
        <li>🔤 <strong>Skákajúce titulky:</strong> raz dole, raz hore, raz iný font/veľkosť, raz príliš dlhé vety</li>
        <li>🎢 <strong>Prechody všade:</strong> každý záber iný efekt → pôsobí to lacno a odvádza pozornosť</li>
        <li>🔊 <strong>Nerovnaký zvuk:</strong> raz hlas tichý, raz hlasitý, hudba raz slabá, raz „bije"</li>
        <li>🧩 <strong>Nesedí kompozícia:</strong> raz je hlavný objekt vľavo, raz vpravo, titulky raz cez tvár, raz mimo safe area</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak si pri pozeraní všimneš „štýl" viac než pointu, konzistencia je prehnaná alebo rozbitá.</p>

      <h2>🎯 Jedna kotva, ktorá sa nesmie meniť</h2>
      <p>Aby bol „style lock" naozaj použiteľný, vyber si <strong>1 vec</strong>, ktorú nebudeš meniť ani keď budeš improvizovať.</p>
      <p>Najlepšia kotva je zvyčajne:</p>
      <ul>
        <li>💬 <strong>umiestnenie titulkov</strong> (napr. vždy spodná tretina, safe area)</li>
        <li>alebo</li>
        <li>🌈 <strong>farebný akcent</strong> (napr. jedna zvýrazňovacia farba)</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Jedna pevná kotva často spraví viac než desať „dizajnových pravidiel".</p>

      <h2>✅ Mini-check pred exportom (30 sekúnd)</h2>
      <p>Predtým než video exportneš, prebehni tieto 3 veci:</p>
      <ul>
        <li>💬 Titulky sú <strong>čitateľné</strong>, krátke a v <strong>safe area</strong></li>
        <li>🌈 Video má jednotnú <strong>náladu</strong> (farby/svetlo)</li>
        <li>🎬 Tempo a prechody sú jednoduché — nekradnú pozornosť pointe</li>
      </ul>

      <h2>🧱 Kompozícia: safe area je tvoj kamarát</h2>
      <p>Pri krátkom videu (9:16) ti platforma zožerie okraje: UI prvky, popisy, meno, ikonky.</p>
      <p>Preto maj:</p>
      <ul>
        <li>hlavný objekt v strede,</li>
        <li>titulky v bezpečnej zóne,</li>
        <li>nič dôležité úplne dole alebo úplne hore.</li>
      </ul>
      <p>⚠️ <strong>Pozor:</strong> Krásny záber je na nič, keď ti ho IG/Shorts odreže 😅</p>

      <h2>🔁 Ako zjednotiť mix (AI + stock + točenie)</h2>
      <p>Ak miešaš rôzne zdroje, často pomôže:</p>
      <ul>
        <li>jeden „filter" (kontrast / jemný grain / rovnaké farby),</li>
        <li>rovnaké titulky a umiestnenie textu,</li>
        <li>podobné prechody,</li>
        <li>podobná dĺžka záberov.</li>
      </ul>
      <p>Výsledok: aj rôzne zdroje pôsobia, že patria do jedného videa.</p>

      <MiniTask title="Style lock pre tvoje video">
        <p><strong>Situácia</strong></p>
        <p>Máš video poskladané z viacerých typov záberov (AI/stock/točenie) a chceš, aby pôsobilo konzistentne — ako jeden celok, nie ako náhodná koláž.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Definuj si <strong>4 pravidlá štýlu</strong> (style lock) a potom ich aplikuj na 2 konkrétne zábery zo svojho shot listu.</p>
        <PromptBlock hideLabel>
          <p>„Tu je môj shot list:<br />
          [sem vlož shot list]<br />
          Navrhni mi 'style lock' – 4 jednoduché pravidlá, ktoré udržia video konzistentné.<br />
          Pravidlá majú pokryť: farby, svetlo/náladu, titulky/text a prechody/tempo.<br />
          Potom mi ukáž, ako by si tieto pravidlá aplikoval na 2 konkrétne zábery (vyber najkritickejšie).<br />
          Výstup daj takto:</p>
          <ol>
            <li>Style lock (4 pravidlá): …</li>
            <li>Aplikácia na záber A: …</li>
            <li>Aplikácia na záber B: …"</li>
          </ol>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sú pravidlá jednoduché a viem ich reálne dodržať?</li>
          <li>Zjednocujú pravidlá aj mix AI/stock/točenie?</li>
          <li>Je jasné, kde budú titulky a že budú čitateľné?</li>
          <li>Nezabíja konzistencia pointu (nie je to „preštýlované")?</li>
        </ul>
        <ExpectedFinding>
          <p>Konzistentné video nepôsobí lepšie preto, že je „umelecké". Pôsobí lepšie preto, že divák sa nemusí stále adaptovať na nový štýl — a môže sa sústrediť na pointu.</p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={`👉 Čo je najlepší \u201Estyle lock\u201C pre krátke video?`}
        options={[
          { label: "🌕", text: "\u201EKaždý záber bude iný, nech je to dynamické.\u201C" },
          { label: "⭐", text: "\u201EVyberiem 1 paletu farieb + rovnaké titulky a umiestnenie textu vo videu.\u201C" },
          { label: "☀️", text: "\u201EDám veľa prechodov a efektov, aby to pôsobilo profesionálne.\u201C" },
        ]}
        correct="⭐"
        explanation="konzistenciu robí hlavne opakovateľný systém (farby + titulky + kompozícia), nie množstvo efektov."
      />
    </PageShell>
  );
}
