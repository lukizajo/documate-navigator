import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding, MiniTest, PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-03-parametre");

export default function LHP03() {
  return (
    <PageShell title="2️⃣ Základné parametre hudby" prev={nav.prev} next={nav.next}>
      <p>Keď AI povieš „sprav mi hudbu", často dostaneš niečo, čo znie zaujímavo… ale netrafí účel. V praxi sa to prejaví tak, že hudba ruší hlas, mení náladu každých pár sekúnd alebo sa nedá rozumne skrátiť. V tejto lekcii si preto nastavíš <strong>krátky brief</strong>, ktorý dá AI jasné mantinely. Bez hudobnej teórie — len pár rozhodnutí, vďaka ktorým budú výstupy <strong>konzistentnejšie a použiteľnejšie</strong>.</p>
      <p>Brief je krátke zadanie, ktoré hovorí AI <strong>čo má spraviť</strong> a rovnako dôležité: <strong>čo nemá spraviť</strong>.</p>
      <p>Keď brief chýba alebo je príliš všeobecný, AI si "domyslí" zvyšok po svojom — a ty potom riešiš 10 pokusov namiesto jedného dobrého.</p>

      <h3>✅ MUST HAVE (týchto 5 vecí stačí)</h3>
      <p>Toto sú základné parametre, ktoré spravia najväčší rozdiel:</p>
      <ul>
        <li><strong>Účel:</strong> intro / pozadie (bed) / oboje</li>
        <li><strong>Dĺžka:</strong> intro typicky 7–10 s, pozadie 20–30 s (často vhodné na loop)</li>
        <li><strong>Mood:</strong> 3 slová (napr. „pokojné, moderné, čisté")</li>
        <li><strong>Energia:</strong> nízka / stredná / vyššia (ľudsky, nie BPM)</li>
        <li><strong>NESMIE:</strong> 2 konkrétne zákazy (napr. „žiadny drop", „žiadne dramatické zmeny")</li>
      </ul>
      <p>💡 <strong>Tip do praxe:</strong> Ak nevieš presne, čo chceš, skoro vždy vieš, čo <strong>nechceš</strong>. „NESMIE" je tvoja brzda chaosu.</p>

      <h3>➕ NICE TO HAVE (keď chceš spresniť)</h3>
      <p>Toto nie je povinné, ale často pomôže:</p>
      <ul>
        <li><strong>Štýl / nástroje:</strong> 1 veta (napr. „jemné synty, mäkké perkusie, bez výraznej melódie")</li>
      </ul>

      <h3>🎚️ Intro vs pozadie: rovnaký štýl, iný účel</h3>
      <p>Aby celý projekt pôsobil ako "jedna značka", intro aj pozadie by mali mať:</p>
      <ul>
        <li>rovnaký <strong>mood</strong></li>
        <li>podobnú <strong>energiu</strong></li>
        <li>podobný <strong>štýl/nástroje</strong> (ak ich používaš)</li>
      </ul>
      <p>Rozdiel je v tom, čo majú robiť:</p>
      <ul>
        <li><strong>Intro</strong> môže byť o trochu výraznejšie (je krátke a má zanechať dojem)</li>
        <li><strong>Pozadie</strong> má byť stabilné a nenápadné (najmä ak je tam hlas)</li>
      </ul>

      <p>❌ <strong>Zlý brief:</strong> „Chcem modernú cool profesionálnu hudbu."</p>
      <p>✅ <strong>Dobrý brief:</strong> „Pozadie 25 s, stabilné a vhodné na loop, mood: čisté/teplé/moderné, energia nízka, NESMIE: drop, výrazná melódia."</p>

      <h3>🔁 3–1–1 pravidlo (aby si nezablúdil)</h3>
      <ul>
        <li>vygeneruj <strong>3 varianty</strong></li>
        <li>vyber <strong>1</strong>, ktorá najlepšie sedí účelu</li>
        <li>vylepši <strong>1 vec</strong> (napr. dĺžku alebo mieru výraznosti)</li>
      </ul>
      <p>💡 „1 iterácia = 1 zmena." Keď meníš naraz mood, energiu aj nástroje, nevieš, čo vlastne pomohlo.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>brief typu „moderné, cool, profesionálne" je príliš všeobecný → AI doplní zvyšok po svojom</li>
        <li>priveľa štýlov naraz → výsledok býva chaotický</li>
        <li>chýba <strong>dĺžka</strong> → zle sa to používa v reálnom obsahu</li>
        <li>chýba <strong>NESMIE</strong> → AI často spraví dramatické momenty, ktoré rušia hlas</li>
        <li>pri pozadí zabudneš povedať „stabilné, vhodné na loop" → zmeny budú príliš výrazné</li>
      </ul>

      <MiniTask title="Brief na intro a brief na pozadie">
        <p><strong>Situácia</strong></p>
        <p>Máš zvolený svoj use-case z predchádzajúcej lekcie a vieš, či potrebuješ intro, pozadie alebo oboje. Teraz chceš pripraviť zadanie tak, aby AI trafila konzistentný štýl a výsledok bol použiteľný.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Nechaj AI vytvoriť 2 briefy: jeden pre <strong>intro</strong> a jeden pre <strong>pozadie (bed)</strong>. Oba majú byť konzistentné (rovnaký mood/štýl), ale líšiť sa účelom a dĺžkou.</p>
        <PromptBlock>{`Pomôž mi pripraviť 2 krátke briefy pre AI hudbu tak, aby boli konzistentné a použiteľné.
Môj use-case: [1 veta o obsahu]
Je tam hlas alebo hovorené slovo? [áno/nie]
Moje 3 slová nálady: [___, ___, ___]
Hudba NESMIE: [___] / [___]
Vytvor:
A) Brief pre INTRO (7–10 s)
• účel:
• dĺžka:
• mood (max 3 slová):
• energia (nízka/stredná/vyššia):
• (voliteľné) štýl/nástroje (1 veta):
• NESMIE (2 body):

B) Brief pre POZADIE / BED (20–30 s, vhodné na loop)
• účel:
• dĺžka:
• mood (max 3 slová):
• energia:
• (voliteľné) štýl/nástroje (1 veta):
• NESMIE (2 body):

Na koniec mi daj "krátku verziu" oboch briefov (každý max 2 riadky), ktorú viem rovno vložiť do generátora.`}</PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sú oba briefy konzistentné (rovnaký mood/štýl)?</li>
          <li>Je dĺžka jasná a konkrétna?</li>
          <li>Je pri pozadí explicitne uvedené, že má byť stabilné a vhodné na loop?</li>
          <li>Sú "NESMIE" pravidlá konkrétne (nie všeobecné)?</li>
          <li>Viem krátku verziu briefu rovno skopírovať do nástroja bez úprav?</li>
        </ul>
        <ExpectedFinding>
          Krátky brief (účel + dĺžka + 3 slová mood + 2 zákazy) dáva stabilnejšie výsledky než dlhé "umelecké" zadania a udrží konzistentnosť medzi introm a pozadím.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktorá kombinácia je MUST HAVE pre brief, aby AI trafila použiteľné pozadie?"
        options={[
          { label: "🌕", text: "Mood (3 slová) + štýl/nástroje + príbeh skladby" },
          { label: "⭐", text: "Účel + dĺžka + 3 slová mood + energia + 2× NESMIE" },
          { label: "☀️", text: "BPM + tónina + názvy akordov" },
        ]}
        correct="⭐"
        explanation="Týchto 5 vecí dá AI jasné mantinely bez hudobnej teórie."
      />
    </PageShell>
  );
}
