import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page07() {
  const nav = getNavContext("07-mapa-hracov");
  return (
    <PageShell
      title="7️⃣ Kto má veľkých chatbotov: mapa hráčov"
      tldr={[]}
      {...nav}
    >
      <p><em>Za každým chatbotom je firma, stratégia a obchodný model. Tento prehľad ti pomôže pochopiť rozdiely medzi hráčmi.</em></p>

      <h2>Prečo má zmysel poznať firmy za AI?</h2>
      <p>
        AI nie je jeden nástroj ani jeden chatbot. Za každým veľkým modelom stojí <strong>konkrétna firma s vlastnou stratégiou</strong>, prioritami a obchodným cieľom. To, kto AI vyvíja, často napovie aj to, <strong>na čo je najlepšia</strong>.
      </p>
      <p>👉 Cieľom tejto sekcie je dať ti <strong>orientačnú mapu hráčov</strong>, nie detailné porovnanie technických parametrov.</p>

      <h3>OpenAI – univerzálny líder</h3>
      <ul>
        <li>tvorca ChatGPT</li>
        <li>silná v texte, analýze, kóde aj multimodalite</li>
        <li>vhodná pre široké spektrum úloh</li>
      </ul>
      <p>👉 Častá voľba, keď hľadáš univerzálne riešenie.</p>

      <h3>Google DeepMind – multimodalita a ekosystém</h3>
      <ul>
        <li>modely Gemini</li>
        <li>prepojenie so službami Google</li>
        <li>silná práca s obrazom, videom a aktuálnymi dátami</li>
      </ul>
      <p>👉 Výhoda tam, kde sa kombinuje viac typov vstupov.</p>

      <h3>Microsoft Copilot – AI v kancelárii</h3>
      <ul>
        <li>integrovaný priamo do Wordu, Excelu, Outlooku a Teams</li>
        <li>orientovaný na firemné prostredie</li>
      </ul>
      <p>👉 Ideálny pre každodennú kancelársku prácu.</p>

      <h3>Anthropic (Claude) – bezpečnosť a dlhé texty</h3>
      <ul>
        <li>dôraz na etiku a bezpečné správanie</li>
        <li>veľmi dobrý pri práci s rozsiahlymi dokumentmi</li>
      </ul>
      <p>👉 Silná voľba tam, kde je dôležitá kontrola výstupov.</p>

      <h3>Meta (LLaMA) – open-source prístup</h3>
      <ul>
        <li>otvorené modely pre vývojárov</li>
        <li>možnosť lokálneho nasadenia</li>
      </ul>
      <p>👉 Pre tých, ktorí chcú kontrolu a flexibilitu.</p>

      <h3>Mistral AI – európska alternatíva</h3>
      <ul>
        <li>dôraz na výkon a cenu</li>
        <li>zaujímavá voľba z pohľadu GDPR</li>
      </ul>
      <p>👉 Dôkaz, že AI nie je len doménou USA.</p>

      <h3>Perplexity – AI ako vyhľadávač</h3>
      <ul>
        <li>odpovede doplnené o zdroje</li>
        <li>orientácia na overiteľnosť</li>
      </ul>
      <p>👉 Vhodné pri práci s faktami a zdrojmi.</p>

      <h3>GROK – AI s názorom a rýchlosťou reality</h3>
      <ul>
        <li>chatbot integrovaný do siete X (Twitter) od xAI</li>
        <li>silný na aktuálne dianie, trendy a verejné diskusie</li>
        <li>menej formálny, viac „priamočiary" štýl odpovedí</li>
      </ul>
      <p>👉 Vhodný, keď chceš rýchlu orientáciu v tom, <em>čo sa práve deje</em> a ako sa o tom hovorí.</p>

      <h2>🎯 Čo si z tejto mapy odniesť?</h2>
      <ul>
        <li>neexistuje jeden „najlepší" chatbot</li>
        <li>každý nástroj je silný v niečom inom</li>
        <li>dôležité je vedieť, <strong>na čo ho používaš</strong></li>
        <li>sme stále <strong>na začiatku vývoja</strong> chatbotov</li>
      </ul>
      <p>👉 Správna otázka nie je „ktorý je najlepší", ale <strong>ktorý je najlepší pre moju úlohu</strong>.</p>

      <MiniTask title="Otestuj 2 chatboty a porovnaj výsledok (ChatGPT vs. Gemini)">
        <p><strong>Situácia</strong></p>
        <p>Máš krátky text v angličtine a chceš ho preložiť do slovenčiny tak, aby znel prirodzene (nie ako z Google Translate). Zároveň chceš 2 verzie: formálnu a kamarátsku.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj rovnaký text najprv do ChatGPT a potom do Gemini. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>❌ Prompt 1 (ChatGPT)</strong></p>
        <p>„Prelož tento text do slovenčiny v 2 verziách:</p>
        <ol>
          <li>formálne (ako e-mail)</li>
          <li>neformálne (ako správa kamarátovi)</li>
        </ol>
        <p>Zachovaj význam, ale prelož to prirodzene, nie doslovne.</p>
        <p>Text:</p>
        <p>'I'm running a bit late today. Can we move our meeting to 3:30 PM? If that doesn't work, suggest two other times.'"</p>

        <p><strong>✔️ Prompt 2 (Gemini)</strong></p>
        <p>„Prelož tento text do slovenčiny v 2 verziách:</p>
        <ol>
          <li>formálne (ako e-mail)</li>
          <li>neformálne (ako správa kamarátovi)</li>
        </ol>
        <p>Zachovaj význam, ale prelož to prirodzene, nie doslovne.</p>
        <p>Text:</p>
        <p>'I'm running a bit late today. Can we move our meeting to 3:30 PM? If that doesn't work, suggest two other times.'"</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Znie preklad prirodzene po slovensky, alebo je cítiť doslovnosť?</li>
          <li>Je jasný rozdiel medzi formálnou a neformálnou verziou?</li>
          <li>Zostal zachovaný význam (čas, prosba o posun, návrh alternatív)?</li>
          <li>Ktorý výstup by si vedel rovno poslať bez úprav?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>
          Aj keď oba nástroje preložia text správne, rozdiel často uvidíš v prirodzenosti a štýle: jeden môže byť doslovnejší alebo „učebnicový", druhý znie viac ľudsky. Pri preklade nie je cieľ len správny význam, ale aj správny tón.
        </p>
      </ExpectedFinding>

      <MiniTest
        question={'Ktoré „spárovanie" úlohy a chatbotu dáva najväčší NEzmysel? Vyber, ktorá možnosť (🌕 /⭐ /☀️) je najlepšia.'}
        options={[
          { label: "🌕", text: '„Chcem rýchlo pochopiť, čo sa práve rieši na internete (trendy, diskusie, aktuálne dianie)." → GROK' },
          { label: "⭐", text: '„Mám dlhý dokument a chcem z neho rýchle zhrnutie a pripomienky." → ChatGPT' },
          { label: "☀️", text: '„Chcem odpovede aj so zdrojmi, aby som si vedel overiť fakty." → Perplexity' },
          { label: "🌑", text: '„Chcem, aby mi AI pomohla priamo vo Worde a Outlooku (maily, dokumenty, zhrnutia)." → Mistral' },
        ]}
        correct="🌑"
        explanation={'Mistral je skôr model/alternatíva (často „európska"), nie typicky AI integrovaná priamo do balíka Microsoft 365. Na prácu priamo vo Worde/Outlooku je najlogickejší Microsoft Copilot.'}
      />
    </PageShell>
  );
}
