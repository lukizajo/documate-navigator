import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-04-storyboard");

export default function LGP04() {
  return (
    <PageShell title="3️⃣ Storyboard a shot list" prev={nav.prev} next={nav.next}>
      <p>Scenár je text. Video je <strong>obraz + zvuk v čase</strong>. A presne tu veľa ľudí narazí: majú super text, ale pri skladaní videa sa to rozpadne, lebo nevedia, <strong>čo má byť v obraze</strong>.</p>
      <p>Storyboard/shot list je tvoj „plán jazdy". Nie preto, aby to bolo umelecké. Ale aby si:</p>
      <ul>
        <li>vedel, <strong>čo ide do ktorého záberu</strong>,</li>
        <li>nestratil sa pri strihu,</li>
        <li>udržal <strong>1 video = 1 myšlienka</strong>,</li>
        <li>a mal konzistentný štýl aj pri mixe AI/stock/točenia.</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Keď nevieš pomenovať záber jednou vetou, je to skôr „nápad" než záber.</p>

      <h2>🧩 Ako na storyboard (jednoduché pravidlá)</h2>
      <p>Storyboard v tomto LABe nie je kreslenie. Je to <strong>tabuľka rozhodnutí</strong>:</p>
      <p>Každý záber si zadefinuješ 4 vecami:</p>
      <ul>
        <li>🎬 <strong>Obraz</strong> – čo presne vidím (konkrétne, nie „niečo o AI")</li>
        <li>🎙️ <strong>Voice</strong> – čo sa v tom momente hovorí (1 veta / krátky úsek)</li>
        <li>⏱️ <strong>Dĺžka</strong> – koľko sekúnd približne (1–4 s pri krátkom videu)</li>
        <li>🔁 <strong>Prechod</strong> – čo sa musí zmeniť, aby to nepôsobilo monotónne (strih, b-roll, zoom, zmena scény)</li>
      </ul>
      <p><strong>Odporúčaný počet záberov:</strong></p>
      <ul>
        <li>15–30 s → <strong>5–8 záberov</strong></li>
        <li>30–60 s → <strong>8–12 záberov</strong></li>
      </ul>

      <h2>🪝 Hook musí mať vlastný záber</h2>
      <p>Hook nie je len veta. Hook potrebuje <strong>obraz, ktorý podporí zmysel</strong>.</p>
      <p>Napríklad:</p>
      <ul>
        <li>„Toto je 1 trik…" → detail na text/obrazovku/gesto „počkaj"</li>
        <li>„Robíš túto chybu…?" → rýchla ukážka „chyba vs správne"</li>
        <li>„AI občas klame…" → krátky „glitch" efekt / zmätený výstup</li>
      </ul>

      <h3>✅ Jedna veta = jeden záber (väčšinou)</h3>
      <p>Najpraktickejšie pravidlo:</p>
      <ul>
        <li>ak scenár hovorí <strong>novú myšlienku</strong>, sprav <strong>nový záber</strong></li>
        <li>ak len rozvíja tú istú, môže zostať rovnaký</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak sa ti v jednom zábere menia 2 myšlienky, divák nevie, kam sa pozerať.</p>

      <MiniTask title="Shot list pre tvoje video">
        <p><strong>Situácia</strong></p>
        <p>Máš hotový scenár (Hook–Jadro–Záver) a chceš ho premeniť na konkrétne zábery, aby sa ti video skladalo rýchlo a bez chaosu.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Rozsekaj scenár na <strong>6–10 záberov</strong> a ku každému dopíš obraz + voice + dĺžku. Potom si označ, kde potrebuješ „zmenu" (pattern interrupt), aby video nestratilo tempo.</p>
        <PromptBlock hideLabel>
          <p>„Tu je môj scenár pre krátke video (15–60 s):<br />
          [sem vlož scenár]<br />
          Sprav mi z toho shot list (6–10 záberov) v tomto formáte:</p>
          <ol>
            <li>Obraz: …<br />Voice: …<br />Dĺžka: … sek<br />Poznámka: (AI/stock/točenie) + typ záberu (detail / široký / text overlay)</li>
          </ol>
          <p>Pravidlá:</p>
          <ul>
            <li>jeden záber = jedna myšlienka</li>
            <li>Hook musí byť samostatný záber</li>
            <li>pri každej novej pointe navrhni nový záber</li>
            <li>navrhni aspoň 2 „pattern interrupt" miesta (zmena záberu/rytmu)"</li>
          </ul>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je hook samostatný záber a podporuje ho obraz?</li>
          <li>Má každý záber jasnú funkciu (nie je to len výplň)?</li>
          <li>Je tempo prirodzené (väčšina záberov 1–4 sekundy)?</li>
          <li>Sú v shot liste aspoň 2 miesta, kde sa zmení rytmus (pattern interrupt)?</li>
        </ul>
        <ExpectedFinding>
          <p>Keď máš shot list, strih nie je „hľadanie záberov", ale <strong>skladanie podľa plánu</strong>. A vďaka tomu vieš držať konzistenciu a tempo aj pri AI videu.</p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktorý shot list je použiteľnejší?"
        options={[
          { label: "🌕", text: "\u201EZáber 1: niečo o AI. Záber 2: ďalšie niečo. Záber 3: ukážka.\u201C" },
          { label: "⭐", text: "\u201EZáber 1: Hook text na obrazovke + gesto \u2018stop\u2019. Voice: 1 veta. 2s. Záber 2: Ukážka chyby (screen/b-roll). Voice: 1 veta. 3s. Záber 3: Oprava (konkrétny krok). Voice: 1 veta. 4s\u2026\u201C" },
          { label: "☀️", text: "\u201EZáber 1: pekná animácia. Záber 2: ďalšia pekná animácia. Záber 3: CTA.\u201C" },
        ]}
        correct="⭐"
        explanation="je konkrétny (obraz + voice + čas), dá sa podľa neho reálne strihať a drží tempo."
      />
    </PageShell>
  );
}
