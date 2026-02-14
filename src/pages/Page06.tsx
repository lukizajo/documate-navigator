import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page06() {
  const nav = getNavContext("06-druhy-modelov-slovnik");
  return (
    <PageShell
      title="6️⃣ Druhy modelov a mini-slovník AI"
      tldr={[
        "Existuje viac typov modelov: textové (LLM), obrazové, zvukové, multimodálne",
        "Veľké modely (LLM) = výkon v cloude; malé modely (SLM) = rýchlosť a súkromie",
        "Agentická AI vie rozdeliť úlohu na kroky a konať samostatne",
        "GPT = Generative Pre-trained Transformer",
        "Keď vieš, čo používaš, vieš z AI dostať viac",
      ]}
      {...nav}
    >
      <p><em>AI nie je jeden nástroj. Táto sekcia ti pomôže zorientovať sa v typoch modelov a pojmoch bez toho, aby si sa musel ponárať do technických detailov.</em></p>

      <h2>🗺️ Prečo sa v modeloch oplatí mať jasno?</h2>
      <p>
        Svet AI nie je jeden nástroj ani jeden model. Existuje viac typov modelov, z ktorých každý
        je vhodný na <strong>iný druh úlohy</strong>. Ak vieš, aký model použiť, dostaneš lepší výsledok
        rýchlejšie a bez zbytočnej frustrácie.
      </p>

      <h2>📝 Textové modely – LLM</h2>
      <p>LLM (Large Language Models) sa používajú na:</p>
      <ul>
        <li>písanie a úpravu textov</li>
        <li>odpovedanie na otázky</li>
        <li>analýzu dokumentov</li>
        <li>kódovanie a logické úlohy</li>
      </ul>
      <p>Charakteristika: univerzálne a flexibilné, pracujú s pravdepodobnosťou, môžu robiť chyby.</p>
      <p>👉 Ideálne, keď potrebuješ rozmýšľanie, návrhy a jazyk.</p>

      <h2>🖼️ Obrazové modely</h2>
      <p>Vytvárajú obrázky na základe textového popisu:</p>
      <ul>
        <li>TTI (Text-to-Image)</li>
        <li>ITI (Image-to-Image)</li>
      </ul>
      <p>Použitie: dizajn, ilustrácie, marketingové vizuály, koncepty.</p>
      <p>👉 Ideálne, keď potrebuješ vizuálny obsah.</p>

      <h2>🎵 Zvukové modely</h2>
      <ul>
        <li>STT (Speech-to-Text) – prepis reči do textu</li>
        <li>TTS (Text-to-Speech) – čítanie textu hlasom</li>
        <li>Voice cloning – klonovanie hlasu</li>
      </ul>
      <p>👉 Ideálne pre audio obsah a hlasovú interakciu.</p>

      <h2>🧩 Multimodálne modely</h2>
      <p>Dokážu pracovať s textom, obrazom, zvukom aj videom naraz v jednom systéme.</p>
      <p>Výsledok: prirodzenejšia komunikácia, komplexnejšie výstupy, menej prepínania medzi nástrojmi.</p>
      <p>👉 Toto je smer, ktorým sa AI bude ďalej uberať.</p>

      <h2>📏 Veľké vs. malé modely</h2>
      <h3>LLM (veľké modely)</h3>
      <ul>
        <li>vysoký výkon, cloudové riešenia, vyššie náklady</li>
      </ul>
      <h3>SLM (Small Language Models)</h3>
      <ul>
        <li>menšie, rýchlejšie, môžu bežať lokálne, lepšie pre súkromie</li>
      </ul>
      <p>👉 Neexistuje „najlepší" model. Vždy ide o kompromis.</p>

      <h2>🤖 Agentická AI – krok ďalej</h2>
      <p>Agentická AI vie:</p>
      <ul>
        <li>rozdeliť úlohu na kroky</li>
        <li>používať nástroje</li>
        <li>pamätať si kontext</li>
        <li>konať samostatne</li>
      </ul>
      <p>👉 Silná, ale vyžaduje kontrolu a dobrý dizajn.</p>

      <h2>📖 Mini-slovník: pojmy, ktoré budeš stretávať</h2>
      <ul>
        <li><strong>Prompt</strong> – zadanie pre AI</li>
        <li><strong>Token</strong> – najmenšia jednotka textu, s ktorou model pracuje</li>
        <li><strong>Kontextové okno</strong> – koľko informácií si model „pamätá" naraz</li>
        <li><strong>Halucinácia</strong> – keď AI vymýšľa presvedčivo znejúce nepravdy</li>
        <li><strong>Teplota (temperature)</strong> – miera kreativity odpovede</li>
        <li><strong>Iterácia</strong> – doplnenie konverzácie ďalším promptom</li>
        <li><strong>Inferencie</strong> – použitie už natrénovaného modelu</li>
        <li><strong>Fine-tuning</strong> – prispôsobenie modelu na konkrétnu oblasť</li>
        <li><strong>RAG</strong> – kombinácia AI s externými dátami</li>
        <li><strong>GPT</strong> = <strong><u>G</u>enerative <u>P</u>re-trained <u>T</u>ransformer</strong></li>
      </ul>

      <h2>💡 GPT = Generative Pre-trained Transformer</h2>

      <h3>🧩 G – Generative (generatívny)</h3>
      <p><strong>👉 Vie vytvárať nový obsah</strong></p>
      <ul>
        <li>generuje texty, odpovede, nápady, súhrny</li>
        <li>nekopíruje hotové vety</li>
        <li>vždy vytvára novú kombináciu slov</li>
      </ul>
      <p>🚨 Dôležité:</p>
      <p><strong>Negeneruje pravdu, ale pravdepodobný text.</strong></p>

      <h3>🧩 P – Pre-trained (predtrénovaný)</h3>
      <p><strong>👉 Už bol natrénovaný vopred</strong> na obrovskom množstve textov. Počas používania sa „neučí od nuly".</p>
      <p>📌 Má všeobecný prehľad, ale nevie overovať fakty v reálnom čase.</p>

      <h3>🧩 T – Transformer</h3>
      <p><strong>👉 Spôsob, akým rozumie kontextu</strong> – sleduje vzťahy medzi slovami, chápe význam viet v širšom kontexte.</p>
      <p>📌 Transformer je dôvod, prečo odpovede pôsobia plynulo a model „drží tému".</p>

      <h2>🎯 Čo si z tejto sekcie odniesť?</h2>
      <ul>
        <li>rôzne úlohy = rôzne modely</li>
        <li>AI nie je jeden nástroj, ale ekosystém</li>
        <li>porozumenie pojmom šetrí čas aj nervy</li>
      </ul>
      <p>👉 Keď vieš, čo používaš, vieš z AI dostať viac.</p>

      <MiniTest
        question="Ktoré tvrdenie o textových modeloch (LLM) je najpresnejšie?"
        options={[
          { label: "🌕", text: '„LLM je ako encyklopédia: keď sa ho niečo opýtam, dá mi správnu odpoveď, lebo AI predsa vie."' },
          { label: "⭐", text: '„LLM si občas vymýšľa, takže sa naň nedá vôbec spoľahnúť a je lepšie ho nepoužívať."' },
          { label: "☀️", text: '„LLM vie veľmi dobre pracovať s textom, ale nepracuje s pravdou – skladá najpravdepodobnejší text podľa dát. Preto môže urobiť chybu a dôležité veci je potrebné overovať."' },
        ]}
        correct="☀️"
        explanation="LLM je silný pomocník na jazykové úlohy, ale nie je to autorita na fakty. Vie znieť presvedčivo aj vtedy, keď sa mýli."
      />
    </PageShell>
  );
}
