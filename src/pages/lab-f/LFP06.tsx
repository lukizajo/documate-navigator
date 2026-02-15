import { PageShell } from "@/components/PageShell";
import { ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lf-06-prakticka-uloha");

export default function LFP06() {
  return (
    <PageShell title="🎓 Praktická úloha – Hlas & audio v praxi" prev={nav.prev} next={nav.next}>
      <p>Na záver si všetky veci z LABu spojíš do jednej reálnej úlohy. Cieľom nie je mať &quot;dokonalý voiceover&quot;, ale vedome použiť stavebné bloky: <strong>text pre uši, iterácia, debugging zlého čítania, čistenie audia a etika</strong>.</p>

      <h2>Zadanie</h2>
      <p>Priprav <strong>mini-sériu 2 audio výstupov</strong> na jednu tému (vyber si jednu):</p>
      <ol type="a">
        <li>AI ako pomocník pri rutine v práci</li>
        <li>AI ako pomocník pri plánovaní dňa</li>
        <li>Prečo text pre uši musí byť jednoduchší</li>
      </ol>

      <h3>Požiadavky na výsledok</h3>
      <ul>
        <li>oba výstupy musia byť <strong>použiteľné</strong>, nie len &quot;pekne znejúce&quot;</li>
        <li>musíš mať <strong>A/B verziu</strong> (pred úpravami a po úpravách)</li>
        <li>aspoň jeden výstup musí obsahovať <strong>problémové čítanie</strong>, ktoré opravíš (skratka/číslo/cudzie slovo)</li>
        <li>finálny výstup musí byť <strong>vyčistený</strong> (hlasitosť + šum)</li>
        <li>musíš mať v texte splnený <strong>etický blok</strong> (bez rizikových prvkov)</li>
      </ul>

      <h2>Tvoja úloha</h2>

      <h3>1️⃣ Účel – na čo to bude (formát + cieľ)</h3>
      <p>Vyber si jedno použitie:</p>
      <ol type="a">
        <li>interný hlasový tip do firmy (30–45 s)</li>
        <li>krátky voiceover do kurzu (45–60 s)</li>
        <li>podcastový &quot;tip týždňa&quot; (60–90 s)</li>
      </ol>
      <p>Doplň si:</p>
      <ul>
        <li>cieľ: vysvetliť / zaujať / zhrnúť do 3 bodov</li>
        <li>publikum: začiatočník / kolega / klient</li>
      </ul>

      <h3>2️⃣ Text – hlasový scenár (HOOK → JADRO → ZÁVER)</h3>
      <p>Napíš scenár podľa pravidiel z LABu:</p>
      <ul>
        <li>krátke vety</li>
        <li>pauzy cez odseky</li>
        <li>jedna hlavná myšlienka</li>
      </ul>
      <p>Povinné prvky v texte:</p>
      <ul>
        <li>aspoň 1 skratka alebo výraz: AI / KPI / NPS / B2B</li>
        <li>aspoň 1 číslo alebo formát: 2026 / 3:30 / 10 % / 1 000</li>
      </ul>
      <p>Ulož ako: <strong>FINAL_text_v1</strong></p>

      <h3>3️⃣ Generovanie – prvá verzia (v1) v ElevenLabs</h3>
      <p>Vygeneruj hlas z textu v1 bez špeciálnych úprav výslovnosti.</p>
      <p>Ulož ako: <strong>FINAL_audio_v1_raw</strong></p>

      <h3>4️⃣ Debugging – oprava zlého čítania</h3>
      <p>Vypočuj v1 a označ si min. 2 problémové miesta. Potom sprav úpravu:</p>
      <ul>
        <li>skratky prepíš na spôsob čítania, ktorý chceš počuť</li>
        <li>čísla prepíš do slov alebo do jednoduchšieho formátu</li>
        <li>problematické cudzie slovo uprav foneticky alebo ho vymeň</li>
      </ul>
      <p>Ulož upravený text ako: <strong>FINAL_text_v2_fixed</strong></p>

      <h3>5️⃣ Generovanie – druhá verzia (v2) v ElevenLabs</h3>
      <p>Vygeneruj hlas z upraveného textu v2.</p>
      <p>Ulož ako: <strong>FINAL_audio_v2_fixed</strong></p>

      <h3>6️⃣ Úprava audia – čistenie a hlasitosť</h3>
      <p>Na verzii v2 sprav:</p>
      <ul>
        <li>vyrovnanie hlasitosti</li>
        <li>jemné odšumenie</li>
      </ul>
      <p>Ulož ako: <strong>FINAL_audio_clean</strong></p>

      <h3>7️⃣ Etika – bezpečnostný blok</h3>
      <p>Over si, že:</p>
      <ul>
        <li>nepoužívaš cudzí hlas bez súhlasu</li>
        <li>nepredstieraš, že hovorí konkrétna osoba</li>
        <li>nevkladáš citlivé údaje</li>
      </ul>
      <p>Ulož jednu vetu (čo si skontroloval) ako: <strong>FINAL_ethics_note</strong></p>

      <h3>8️⃣ Výstupy – mini-séria 2 verzií</h3>
      <p>Priprav si výsledky tak, aby boli prehľadne uložené:</p>
      <ul>
        <li><strong>FINAL_pack_v1</strong> = text_v1 + audio_v1_raw</li>
        <li><strong>FINAL_pack_v2</strong> = text_v2_fixed + audio_v2_fixed + audio_clean</li>
      </ul>

      <h3>Test v praxi (povinné)</h3>
      <ul>
        <li>Najprv vygeneruj v1 a všimni si, čo AI prečíta zle.</li>
        <li>Potom sprav v2 len cez úpravy textu (skratky, čísla, fonetika) a vygeneruj znovu.</li>
        <li>Nakoniec sprav jemné čistenie audia na finálnej verzii.</li>
      </ul>

      <h3>❓ Sebakontrola (ÁNO/NIE)</h3>
      <ul>
        <li>Je jasné, na aké použitie je voiceover určený (kurz / interný tip / podcast)?</li>
        <li>Má scenár HOOK → JADRO → ZÁVER?</li>
        <li>Obsahuje text aspoň 1 skratku a aspoň 1 číslo alebo formát?</li>
        <li>Je počuť rozdiel medzi v1 a v2 v problematických miestach?</li>
        <li>Opravil si zlé čítanie úpravou textu, nie len zmenou hlasu?</li>
        <li>Je finálna verzia vyčistená tak, že znie príjemnejšie, ale nie umelo?</li>
        <li>Je hlasitosť stabilná a nič &quot;nevystrelí&quot;?</li>
        <li>Je etický blok splnený a nemáš v texte rizikové prvky?</li>
      </ul>

      <ExpectedFinding>
        <p>Budeš mať hotový voiceover s A/B verziou, opraveným čítaním skratiek/čísiel a vyčisteným finálnym audiom. Zároveň si vytvoríš &quot;master postup&quot;, ktorý môžeš nabudúce zopakovať na ľubovoľnú tému bez chaosu.</p>
      </ExpectedFinding>

      <p><strong>💡 Bonus tip</strong></p>
      <ul>
        <li>Ak nevieš, aké skratky alebo čísla použiť, vlož do textu napríklad 1 z týchto: AI, KPI, NPS, 2026, 3:30, 10 %.</li>
        <li>Najväčší rozdiel spravia 2 veci: <strong>oprava problematických miest v texte</strong> a <strong>jemné čistenie audia</strong>.</li>
      </ul>
    </PageShell>
  );
}
