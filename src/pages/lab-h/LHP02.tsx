import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding, MiniTest, PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-02-uloha-hudby");

export default function LHP02() {
  return (
    <PageShell title="1️⃣ Úloha hudby v obsahu: kedy pomáha a kedy ruší" prev={nav.prev} next={nav.next}>
      <p>Hudba vie urobiť obsah "hotovejší" na prvé počutie. Ale vie ho aj potopiť — najmä vtedy, keď je v obsahu hlas alebo text, na ktorý sa má človek sústrediť.</p>
      <p>V tejto lekcii si nastavíš jednoduché pravidlá, aby si sa vyhol najčastejšej chybe: že AI spraví hudbu, ktorá je síce pekná, ale v praxi nepoužiteľná.</p>
      <p>Pointa je jednoduchá: hudba má podporiť obsah, nie s ním súperiť.</p>

      <h3>👉 Hlas je šéf</h3>
      <p>Ak je v obsahu reč (voiceover, podcast, hovorené video), hudba má byť nastavená tak, aby:</p>
      <ul>
        <li>nechala priestor hlasu,</li>
        <li>neodpútavala pozornosť,</li>
        <li>a držala len náladu a tempo.</li>
      </ul>

      <h3>🤔 Prečo to tak je?</h3>
      <p>Ľudský mozog má obmedzenú "pozornosť". Keď mu dáš naraz:</p>
      <ul>
        <li>hlas (informácie),</li>
        <li>výraznú hudbu (melódia, zmeny, highlight),</li>
        <li>a ešte k tomu vizuál,</li>
      </ul>
      <p>tak začne prepínať. Výsledok: ľudia síce "počujú", ale menej rozumejú.</p>

      <h3>🆎 Dva základné typy hudby v obsahu</h3>
      <p><strong>🎬 Intro / Outro</strong></p>
      <ul>
        <li>krátky signál "začíname / končíme"</li>
        <li>vytvára poznávacie znamenie (keď to počujem, viem, že je to tvoje)</li>
        <li>znesie viac výraznosti, lebo je krátke</li>
      </ul>
      <p><strong>🧩 Background pod obsah</strong></p>
      <ul>
        <li>tiché pozadie, ktoré drží náladu</li>
        <li>ideálne také, ktoré si skoro nevšimneš, ale obsah znie „kompaktnejšie"</li>
        <li>má byť stabilné a nenápadné, hlavne keď je tam reč</li>
      </ul>
      <p>💡 <strong>Tip do praxe:</strong> Ak si pri počúvaní pozadia začneš pospevovať melódiu, je príliš výrazné.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Výrazná melódia pod hlas</strong> → ľudia menej rozumejú, lebo mozog "prepína"</li>
        <li><strong>Veľké zmeny každých pár sekúnd</strong> → pozadie kradne pozornosť</li>
        <li><strong>Drop / dramatické momenty v pozadí</strong> → presne vtedy prestaneš vnímať obsah</li>
        <li><strong>Zamieňanie intro za pozadie</strong> → intro je signál, nie nekonečná slučka</li>
      </ul>

      <h3>🧭 Mini rozhodovacia mapa</h3>
      <p><strong>1️⃣ Je tam hlas?</strong></p>
      <ul>
        <li>Áno → background musí byť jednoduchý, stabilný, nenápadný</li>
        <li>Nie → môže byť výraznejší, lebo nič "neprebíjaš"</li>
      </ul>
      <p><strong>2️⃣ Je cieľ identita?</strong></p>
      <ul>
        <li>Áno → sprav intro (typicky 7–10 s)</li>
      </ul>
      <p><strong>3️⃣ Je cieľ atmosféra?</strong></p>
      <ul>
        <li>Áno → sprav background (často loop 20–30 s)</li>
      </ul>

      <MiniTask title="Hudba, ktorá neruší">
        <p><strong>Situácia</strong></p>
        <p>Pripravuješ obsah (podcast / video / reels / prezentáciu) a chceš použiť hudbu tak, aby pôsobila profesionálne, ale neprebíjala pointu.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber si jeden konkrétny use case a nechaj AI pomôcť ti rozhodnúť: či potrebuješ <strong>intro</strong>, <strong>pozadie</strong>, alebo <strong>oboje</strong>. Na konci chceš mať krátky "brief", ktorý použiješ v ďalšej lekcii.</p>
        <PromptBlock>{`Si audio producent pre online obsah. Pomôž mi rozhodnúť, akú hudbu potrebujem, aby podporila obsah a nerušila.
Môj use case: [napíš: podcast / video / reels / prezentácia + 1 veta o téme]
Je tam hlas alebo hovorené slovo? [áno/nie]
Kde chcem hudbu použiť? [intro / pozadie / oboje / neviem]
Tvoja úloha:
1. Navrhni, či potrebujem intro, pozadie alebo oboje (stručne prečo).
2. Daj mi 3-slovo mood (napr. „pokojné, moderné, čisté").
3. Napíš 2 veci, ktoré hudba NESMIE robiť (aby nerušila).
4. Daj mi 1-vetový brief, ktorý môžem použiť v ďalšej lekcii.`}</PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Znie hudba (podľa briefu) tak, že by mohla súperiť s hlasom?</li>
          <li>Je mood jasný na prvé prečítanie?</li>
          <li>Sú "NESMIE" pravidlá konkrétne (nie všeobecné)?</li>
          <li>Viem z briefu hneď povedať, či ide o intro alebo pozadie?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že použiteľná hudba začína rozhodnutím o <strong>účele</strong> (intro vs pozadie) a že pri obsahu s hlasom vyhráva <strong>jednoduchosť a stabilita</strong>.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Robíš video s voiceoverom (hovoríš do kamery) a chceš jemné pozadie. Čo je najvhodnejšie?"
        options={[
          { label: "🌕", text: "Jednoduché, stabilné pozadie, ktoré necháva priestor hlasu" },
          { label: "⭐", text: "Výrazná melódia so zmenami a \u201Edropom\u201C, aby to malo energiu" },
          { label: "☀️", text: "Krátke intro pustené dokola ako pozadie" },
        ]}
        correct="🌕"
        explanation="Pri voiceoveri má hudba podporiť náladu, nie súperiť s hlasom."
      />
    </PageShell>
  );
}
