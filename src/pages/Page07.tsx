import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page07() {
  const nav = getNavContext("07-mapa-hracov");
  return (
    <PageShell
      title="7️⃣ Mapa hráčov: kto má veľkých chatbotov"
      tldr={[
        "Za každým chatbotom je firma so svojou stratégiou a silnými stránkami",
        "OpenAI (ChatGPT) = univerzálny líder; Google (Gemini) = multimodalita",
        "Microsoft Copilot = AI v kancelárii; Anthropic (Claude) = bezpečnosť",
        'Neexistuje „najlepší" chatbot – správna otázka je „najlepší pre moju úlohu"',
      ]}
      {...nav}
    >
      <h2>🏢 Prečo má zmysel poznať firmy za AI?</h2>
      <p>
        Za každým veľkým modelom stojí konkrétna firma s vlastnou stratégiou a prioritami.
        To, kto AI vyvíja, často napovie aj to, na čo je najlepšia.
      </p>

      <h3>OpenAI – univerzálny líder</h3>
      <ul>
        <li>tvorca ChatGPT</li>
        <li>silná v texte, analýze, kóde aj multimodalite</li>
        <li>vhodná pre široké spektrum úloh</li>
      </ul>
      <p>👉 Častá voľba pre univerzálne riešenie.</p>

      <h3>Google DeepMind – multimodalita a ekosystém</h3>
      <ul>
        <li>modely Gemini</li>
        <li>prepojenie so službami Google</li>
        <li>silná práca s obrazom, videom a aktuálnymi dátami</li>
      </ul>

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

      <h3>Meta (LLaMA) – open-source prístup</h3>
      <ul>
        <li>otvorené modely pre vývojárov</li>
        <li>možnosť lokálneho nasadenia</li>
      </ul>

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

      <h2>🎯 Čo si z tejto mapy odniesť?</h2>
      <ul>
        <li>neexistuje jeden „najlepší" chatbot</li>
        <li>každý nástroj je silný v niečom inom</li>
        <li>dôležité je vedieť, na čo ho používaš</li>
      </ul>
      <p>{'👉 Správna otázka nie je „ktorý je najlepší", ale ktorý je najlepší pre moju úlohu.'}</p>

      <MiniTask title="Otestuj chatboty a porovnaj výsledok">
        <p><strong>Situácia:</strong> Máš krátky text v angličtine a chceš ho preložiť do slovenčiny tak, aby znel prirodzene. Zároveň chceš 2 verzie: formálnu a kamarátsku.</p>
        <p><strong>Inštrukcia:</strong> Skopíruj rovnaký text najprv do ChatGPT a potom do Gemini. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>Text na preklad:</strong> {'"I\'ll be a bit late. Can we push our meeting to 3:30 PM? If that doesn\'t work, please suggest two other times."'}</p>
        <p><strong>Porovnávacie otázky:</strong></p>
        <ul>
          <li>Znie preklad prirodzene po slovensky, alebo je cítiť doslovnosť?</li>
          <li>Je jasný rozdiel medzi formálnou a neformálnou verziou?</li>
          <li>Zostal zachovaný význam?</li>
          <li>Ktorý výstup by si vedel rovno poslať bez úprav?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>
          Aj keď oba nástroje preložia text správne, rozdiel často uvidíš v prirodzenosti a štýle:
          jeden môže byť doslovnejší alebo „učebnicový", druhý znie viac ľudsky. Pri preklade
          nie je cieľ len správny význam, ale aj správny tón.
        </p>
      </ExpectedFinding>

      <MiniTest
        question={'Ktoré „spárovanie" úlohy a chatbotu dáva najväčší NEzmysel?'}
        options={[
          { label: "🌕", text: "Rýchle trendy a diskusie → GROK" },
          { label: "⭐", text: "Dlhý dokument, zhrnutie → ChatGPT" },
          { label: "🔵", text: "Odpovede so zdrojmi → Perplexity" },
          { label: "🌑", text: "Práca priamo vo Worde a Outlooku → Mistral" },
        ]}
        correct="🌑"
        explanation="Mistral je skôr model/alternatíva, nie AI integrovaná priamo do Microsoft 365. Na prácu vo Worde/Outlooku je najlogickejší Microsoft Copilot."
      />
    </PageShell>
  );
}
