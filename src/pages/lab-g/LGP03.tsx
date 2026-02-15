import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-03-scenar");

export default function LGP03() {
  return (
    <PageShell title="2️⃣ Nápad + scenár cez AI" prev={nav.prev} next={nav.next}>
      <p>Keď máš mini brief z 1. lekcie (publikum + pointa + CTA), scenár je už len ďalší krok: <strong>preložiť pointu do reči</strong>, ktorá sa dá povedať nahlas a zároveň funguje ako titulky.</p>
      <p>Tu je najdôležitejšie uvedomiť si jednu vec:</p>
      <p>👉 Scenár pre krátke video nie je článok. Je to <strong>hovorená reč v krátkych vetách</strong>.</p>
      <p>Aby si sa pri AI scenári nestratil, drž sa tejto štruktúry:</p>
      <ul>
        <li><strong>Hook (1–2 sek.)</strong> – zastaví pozornosť hneď na začiatku</li>
        <li><strong>Jadro (10–40 sek.)</strong> – 2–3 body, ktoré nesú pointu</li>
        <li><strong>Záver (3–8 sek.)</strong> – zhrnutie + <strong>CTA</strong></li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak máš v jadre viac než 3 body, tak to skoro určite nie je jedno video. Sú to <strong>2 videá</strong>.</p>

      <h2>🪝 Hook: čo funguje a čo nefunguje</h2>
      <p>Hook nie je „úvod". Hook je <strong>záchytný moment</strong>.</p>
      <p>Buď prinesie konkrétny benefit, problém alebo zvedavosť – alebo video skončí skôr, než začne.</p>
      <p><strong>✅ Funguje:</strong></p>
      <ul>
        <li>„Toto je 1 trik, ktorý ti ušetrí 30 min denne."</li>
        <li>„Robíš túto chybu pri AI? Ukážem ti rýchlu opravu."</li>
        <li>„Toto je dôvod, prečo ti AI občas klame."</li>
      </ul>
      <p><strong>❌ Nezaberá:</strong></p>
      <ul>
        <li>„Dnes sa pozrieme na tému…"</li>
        <li>„V dnešnej dobe je AI všade…"</li>
        <li>„AI je veľmi zaujímavá…"</li>
      </ul>

      <h2>🧠 Jadro: menej bodov, viac slovies</h2>
      <p>Jadro je miesto, kde ľudia často spravia tú istú chybu: natlačia tam všetko, čo vedia.</p>
      <p>Drž sa pravidla:</p>
      <ul>
        <li><strong>2–3 body</strong> a každý bod je <strong>jedna veta</strong> (max dve)</li>
        <li>používaj <strong>konkrétne slovesá</strong> (urob, skopíruj, vyber, porovnaj, skráť)</li>
        <li>ideálne pridaj <strong>mini-príklad</strong> (1 veta), aby to bolo uchopiteľné</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak sa ti bod nedá povedať jednou vetou, je príliš široký.</p>

      <h2>✅ Záver: CTA musí nadväzovať na pointu</h2>
      <p>Záver nie je „ďakujem za pozornosť". Záver má uzavrieť myšlienku a posunúť človeka ďalej.</p>
      <p>CTA môže byť napr.:</p>
      <ul>
        <li>„Skús to dnes na jednom e-maile."</li>
        <li>„Ulož si video a pošli ho kolegovi."</li>
        <li>„Napíš do komentára, na čo chceš prompt."</li>
      </ul>
      <p>Dôležité: CTA má byť <strong>vykonateľné</strong> (nie všeobecné „daj vedieť").</p>

      <h2>🗣️ Jazyk scenára: aby to znelo prirodzene</h2>
      <p>Keď AI vygeneruje scenár, často znie „umelecky" alebo príliš formálne. Preto si stráž:</p>
      <ul>
        <li>krátke vety (ľahko sa titulkujú)</li>
        <li>bežné slová (nie „optimalizácia procesov")</li>
        <li>rytmus (striedaj dlhšiu a kratšiu vetu)</li>
        <li>jedna myšlienka v jednej vete (bez súvetí na tri riadky)</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Prečítaj scenár nahlas. Ak sa na ňom zasekneš ty, zasekne sa na ňom aj divák.</p>

      <MiniTask title="Scenár v štruktúre Hook–Jadro–Záver">
        <p><strong>Situácia</strong></p>
        <p>Máš mini brief z 1. lekcie a chceš z neho spraviť scenár pre krátke video. Cieľ je, aby to znelo prirodzene a dalo sa to rovno použiť pre titulky.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vytvor si 2 varianty scenára (A/B) podľa štruktúry <strong>Hook–Jadro–Záver</strong> a vyber ten, ktorý je konkrétnejší.</p>
        <PromptBlock hideLabel>
          <p>„Z môjho mini briefu sprav 2 varianty scenára pre krátke video (15–60 s).<br />
          Mini brief:</p>
          <ul>
            <li>Publikum: [doplníš]</li>
            <li>Pointa: [doplníš]</li>
            <li>CTA: [doplníš]</li>
          </ul>
          <p>Chcem 2 varianty (A a B) v štruktúre:</p>
          <ul>
            <li>Hook (1–2 sekundy, 1 veta)</li>
            <li>Jadro (2–3 body, krátke vety)</li>
            <li>Záver (zhrnutie + CTA)</li>
          </ul>
          <p>Pravidlá:</p>
          <ul>
            <li>bez vaty, bez všeobecných fráz („v dnešnej dobe…")</li>
            <li>krátke hovorové vety, aby sa dali použiť ako titulky</li>
            <li>1 video = 1 myšlienka</li>
            <li>používaj konkrétne slovesá a príklady (ak sa dá)"</li>
          </ul>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Má hook jasný „záchytný moment" hneď v prvej vete?</li>
          <li>Je jadro max 3 body a každý bod je krátky a konkrétny?</li>
          <li>Dá sa scenár prečítať nahlas bez zakopnutia (znie prirodzene)?</li>
          <li>Je CTA jasné a priamo nadväzuje na pointu?</li>
        </ul>
        <ExpectedFinding>
          <p>Scenár pre video nie je „text článku". Je to <strong>reč</strong>: krátke vety, jasné slovesá, minimum abstrakcie. Keď toto dodržíš, video sa bude ľahšie strihať a titulky budú čitateľné.</p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktorý hook je lepší pre krátke video?"
        options={[
          { label: "🌕", text: "\u201EDnes sa pozrieme na jednu zaujímavú tému o AI.\u201C" },
          { label: "⭐", text: "\u201EVieš, čo je na AI najlepšie? Že toho vie strašne veľa.\u201C" },
          { label: "☀️", text: "\u201EToto je 1 trik, ktorý ti ušetrí 30 minút denne.\u201C" },
        ]}
        correct="☀️"
        explanation="je konkrétny, sľubuje jasný benefit a okamžite nastaví očakávanie."
      />
    </PageShell>
  );
}
