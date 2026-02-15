import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-08-export");

export default function LGP08() {
  return (
    <PageShell title="7️⃣ Export a prispôsobenie médiu" prev={nav.prev} next={nav.next}>
      <p>Hotové video nie je to, ktoré „vyzerá dobre u teba v editore". Hotové video je to, ktoré je <strong>správne vyexportované</strong> a bude fungovať tam, kde ho chceš použiť.</p>
      <p>V tejto lekcii si nastavíš:</p>
      <ul>
        <li>správny <strong>formát</strong> (najmä 9:16),</li>
        <li>správny <strong>export</strong> (aby to nebolo rozmazané),</li>
        <li>a rýchlu kontrolu, že pointa a titulky nie sú odrezané alebo nečitateľné.</li>
      </ul>

      <h2>✅ MUST / SHOULD / NICE (čo riešiť v akom poradí)</h2>
      <ul>
        <li><strong>MUST HAVE:</strong><br />📱 správny <strong>formát a rozlíšenie</strong> pre platformu<br />💬 titulky v <strong>safe area</strong> (nič dôležité nie je odrezané)<br />🔊 zvuk je ok (hlas zrozumiteľný)</li>
        <li><strong>SHOULD HAVE:</strong><br />⚖️ konzistentná kvalita (nebliká, netrhá, nie je extrémne komprimované)<br />🧾 správny názov súboru (aby si sa v tom nestratil)</li>
        <li><strong>NICE TO HAVE:</strong><br />🖼️ cover / prvý frame pripravený na publikovanie<br />🔁 export v 2 verziách (napr. 9:16 + 16:9), ak to naozaj potrebuješ</li>
      </ul>

      <h2>📐 Formát: zvoľ médium skôr, než exportuješ</h2>
      <p>Najčastejšie krátke video:</p>
      <ul>
        <li>📱 <strong>9:16</strong> (Reels/Shorts/TikTok) – default pre tento LAB</li>
      </ul>
      <p>Ďalšie použitia:</p>
      <ul>
        <li>🟦 <strong>1:1</strong> (feed, niekedy LinkedIn) – ak chceš „bezpečnejší" orez</li>
        <li>🖥️ <strong>16:9</strong> (YouTube, prezentácie, web) – ak to má ísť na šírku</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak máš cieľ 9:16, nerob najprv 16:9 a potom to „nejako orež". Orez ti často zničí pointu.</p>

      <h2>🔎 Safe area: miesto, kde sa nesmie stať katastrofa</h2>
      <p>Platformy majú UI prvky, ktoré ti zakryjú spodok a okraje. Preto:</p>
      <ul>
        <li>titulky drž v bezpečnej zóne,</li>
        <li>hlavný objekt nedávaj úplne dole alebo úplne hore,</li>
        <li>skontroluj prvé 2 sekundy (tam ľudia odchádzajú najrýchlejšie).</li>
      </ul>

      <h2>🧾 Export: čo chceš dosiahnuť</h2>
      <p>Export si nastav tak, aby:</p>
      <ul>
        <li>video nebolo rozmazané,</li>
        <li>text ostal ostrý,</li>
        <li>a aby sa prehrávalo plynulo.</li>
      </ul>
      <p>⚠️ <strong>Pozor:</strong> Najčastejšia chyba je „príliš veľká kompresia" → titulky sú nečitateľné a obraz je mäkký.</p>
      <p><strong>💡 Tip do praxe:</strong> Ak sa po exporte zhoršia titulky, problém nie je v titulkoch. Problém je v exporte.</p>

      <h2>✅ Mini-rutina pred publikovaním</h2>
      <p>Skôr než video „pustíš do sveta", sprav si rýchly test. Trvá to pár sekúnd, ale zachráni to veľa trapasov 😄</p>
      <ul>
        <li>⏱️ <strong>2 sekundy:</strong> Je hneď jasné, o čom video je? (hook funguje?)</li>
        <li>⏱️ <strong>3 sekundy:</strong> Je viditeľná prvá pointa (titulky/obraz)?</li>
        <li>🔇 <strong>Bez zvuku:</strong> Rozumiem pointe len z obrazu a titulkov?</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Keď video nefunguje bez zvuku, pri krátkom formáte je to často problém.</p>

      <h2>❗ Na čo si dať pozor</h2>
      <ul>
        <li>📱 <strong>Titulky príliš dole / mimo safe area</strong> → IG/Shorts ti ich prekryje UI prvkami.</li>
        <li>🖥️ <strong>Vyzerá to dobre v editore, ale v mobile nie</strong> → po exporte vždy skontroluj priamo v mobile.</li>
        <li>🟦 <strong>Prvý frame je „prázdny"</strong> (žiadny hook, žiadny text) → divák scrollne skôr, než začneš hovoriť.</li>
        <li>🧊 <strong>Prílišná kompresia</strong> → titulky sa rozpadnú, obraz je mäkký a „špinavý".</li>
        <li>🔁 <strong>Orez po exporte</strong> (napr. z 16:9 na 9:16) → často odsekne pointu alebo titulky.</li>
        <li>🔊 <strong>Skoky v hlasitosti</strong> po exporte → niekde je hlas tichý, inde hlasný (v mobile to vnímaš viac).</li>
      </ul>

      <h2>🗂️ Názvy súborov</h2>
      <p>Keď začneš robiť verzie, bez systému vznikne chaos. Stačí jednoduché pravidlo:</p>
      <p>📌 <strong>Formát názvu:</strong> YYYY-MM-DD_TEMA_FORMAT_VERZIA</p>
      <p>Napr.: 2026-02-05_AI-emaily_9x16_v03.mp4</p>
      <p><strong>💡 Tip do praxe:</strong> Aj keď robíš len 3 verzie, tento systém ti ušetrí nervy. Pri 10 verziách je to povinnosť 😄</p>

      <MiniTask title="Export + rýchla publikovateľnosť kontrola">
        <p><strong>Situácia</strong></p>
        <p>Máš hotové krátke video a chceš ho vyexportovať tak, aby bolo publikovateľné (9:16), bez odrezaných titulkov a bez rozmazania.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyexportuj video v cieľovom formáte (9:16) a sprav 30-sekundový self-check podľa 5 bodov.</p>
        <PromptBlock hideLabel>
          <p>„Správaj sa ako video editor. Mám hotové krátke video (15–60 s) a chcem ho publikovať na [IG Reels / YT Shorts].<br />
          Daj mi checklist exportu a kontroly po exporte.<br />
          Zohľadni:</p>
          <ul>
            <li>formát (9:16)</li>
            <li>safe area pre titulky</li>
            <li>kvalita (aby titulky neboli rozmazané)</li>
            <li>zvuk (hlas zrozumiteľný)</li>
            <li>prvé 2 sekundy (hook)</li>
          </ul>
          <p>Výstup:</p>
          <ol>
            <li>Export checklist (krátke body)</li>
            <li>Post-export kontrola (5 bodov)"</li>
          </ol>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sú titulky po exporte ostré a čitateľné?</li>
          <li>Nie je nič dôležité odrezané (safe area)?</li>
          <li>Funguje hook do 2 sekúnd aj po exporte?</li>
          <li>Je hlas zrozumiteľný aj pri bežnej hlasitosti?</li>
          <li>Vyzerá video rovnako dobre aj v mobile (nie len v editore)?</li>
        </ul>
        <ExpectedFinding>
          <p>Export je posledný filter kvality. Aj dobré video vie export „zabiť" — najmä titulky a ostrosť. Keď máš jasný export check, video je opakovateľne publikovateľné.</p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Čo je najbezpečnejší default formát pre krátke video v tomto LABe?"
        options={[
          { label: "🌕", text: "16:9" },
          { label: "⭐", text: "1:1" },
          { label: "☀️", text: "9:16" },
        ]}
        correct="☀️"
        explanation="Reels/Shorts/TikTok sú primárne vertikálne a 9:16 je formát, pre ktorý sú dizajnované."
      />
    </PageShell>
  );
}
