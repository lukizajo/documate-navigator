import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page06() {
  const nav = getNavContext("06-druhy-modelov-slovnik");
  return (
    <PageShell
      title="6️⃣ Druhy modelov a mini-slovník AI"
      tldr={[]}
      {...nav}
    >
      <p><em>AI nie je jeden nástroj. Táto sekcia ti pomôže zorientovať sa v typoch modelov a pojmoch bez toho, aby si sa musel ponárať do technických detailov.</em></p>

      <h2>Prečo sa v modeloch oplatí mať jasno?</h2>
      <p>
        Svet AI nie je jeden nástroj ani jeden model. Existuje viac typov modelov, z ktorých každý je vhodný na <strong>iný druh úlohy</strong>. Ak vieš, aký model použiť, dostaneš lepší výsledok rýchlejšie a bez zbytočnej frustrácie.
      </p>
      <p>👉 Cieľom tejto sekcie nie je ísť do hĺbky, ale vytvoriť <strong>orientačnú mapu</strong>, vďaka ktorej sa v pojmoch nestratíš.</p>

      <h2>✍️ Textové modely – LLM</h2>
      <p><strong>LLM (Large Language Models)</strong> sú modely určené na prácu s textom.</p>
      <p>Používajú sa na:</p>
      <ul>
        <li>písanie a úpravu textov</li>
        <li>odpovedanie na otázky</li>
        <li>analýzu dokumentov</li>
        <li>kódovanie a logické úlohy</li>
      </ul>
      <p>Charakteristika:</p>
      <ul>
        <li>univerzálne a flexibilné</li>
        <li>pracujú s pravdepodobnosťou, nie s pravdou</li>
        <li>môžu robiť chyby a „vymýšľať si"</li>
      </ul>
      <p>👉 Ideálne, keď potrebuješ <strong>rozmýšľanie, návrhy a jazyk</strong>.</p>

      <h2>🖼️ Obrazové modely – generovanie obrázkov</h2>
      <p>Tieto modely vytvárajú obrázky na základe textového popisu.</p>
      <p>Obrázky a video môžeme generovať:</p>
      <ul>
        <li>TTI (Text-to-Image)</li>
        <li>ITI (Image-to-Image)</li>
      </ul>
      <p>Používajú sa na:</p>
      <ul>
        <li>dizajn a ilustrácie</li>
        <li>marketingové vizuály</li>
        <li>koncepty a nápady</li>
      </ul>
      <p>Charakteristika:</p>
      <ul>
        <li>rýchle a kreatívne</li>
        <li>kvalita závisí od zadania</li>
        <li>obmedzenia pri detailoch a autorských právach</li>
      </ul>
      <p>👉 Ideálne, keď potrebuješ <strong>vizuálny obsah</strong>.</p>

      <h2>🎙️ Zvukové modely – hlas a reč</h2>
      <p>Zvukové modely pracujú s hovoreným slovom.</p>
      <p>Základné typy:</p>
      <ul>
        <li><strong>STT (Speech-to-Text)</strong> – prepis reči do textu</li>
        <li><strong>TTS (Text-to-Speech)</strong> – čítanie textu hlasom</li>
        <li><strong>Voice cloning</strong> – klonovanie hlasu</li>
      </ul>
      <p>Použitie:</p>
      <ul>
        <li>podcasty a videá</li>
        <li>hlasoví asistenti</li>
        <li>prístupnosť</li>
      </ul>
      <p>👉 Ideálne pre <strong>audio obsah a hlasovú interakciu</strong>.</p>

      <h2>🧩 Multimodálne modely – všetko dokopy</h2>
      <p>Multimodálne modely dokážu pracovať s:</p>
      <ul>
        <li>textom</li>
        <li>obrazom</li>
        <li>zvukom</li>
        <li>videom</li>
      </ul>
      <p>Naraz a v jednom systéme.</p>
      <p>Výsledok:</p>
      <ul>
        <li>prirodzenejšia komunikácia</li>
        <li>komplexnejšie výstupy</li>
        <li>menej prepínania medzi nástrojmi</li>
      </ul>
      <p>👉 Toto je smer, ktorým sa AI bude ďalej uberať.</p>

      <h2>⚖️ Veľké vs. malé modely</h2>
      <h3>LLM (veľké modely)</h3>
      <ul>
        <li>vysoký výkon</li>
        <li>cloudové riešenia</li>
        <li>vyššie náklady</li>
      </ul>
      <h3>SLM (Small Language Models)</h3>
      <ul>
        <li>menšie, rýchlejšie</li>
        <li>môžu bežať lokálne</li>
        <li>lepšie pre súkromie a offline použitie</li>
      </ul>
      <p>👉 Neexistuje „najlepší" model. Vždy ide o <strong>kompromis</strong>.</p>

      <h2>🤖 Agentická AI – krok ďalej</h2>
      <p>Agentická AI nie je len chatbot.</p>
      <p>Vie:</p>
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
        <li><strong>GPT</strong> = Generative Pre-trained Transformer</li>
      </ul>

      <h2>🧩 G – Generative (generatívny)</h2>
      <p><strong>👉 Vie vytvárať nový obsah</strong></p>
      <ul>
        <li>generuje texty, odpovede, nápady, súhrny</li>
        <li>nekopíruje hotové vety</li>
        <li>vždy vytvára novú kombináciu slov</li>
      </ul>
      <p>📌 Dôležité:</p>
      <p><strong>Negeneruje pravdu, ale pravdepodobný text.</strong></p>

      <h2>📚 P – Pre-trained (predtrénovaný)</h2>
      <p><strong>👉 Už bol natrénovaný vopred</strong></p>
      <ul>
        <li>učil sa na obrovskom množstve textov</li>
        <li>počas používania sa „neučí od nuly"</li>
        <li>využíva to, čo sa naučil počas tréningu</li>
      </ul>
      <p>📌 Preto:</p>
      <ul>
        <li>má všeobecný prehľad</li>
        <li><strong>ale nevie overovať fakty v reálnom čase (ak nemá prístup k nástrojom)</strong></li>
      </ul>

      <h2>🧠 T – Transformer</h2>
      <p><strong>👉 Spôsob, akým rozumie kontextu</strong></p>
      <ul>
        <li>sleduje vzťahy medzi slovami</li>
        <li>chápe význam viet v širšom kontexte</li>
        <li>vie, že slovo môže znamenať niečo iné podľa situácie</li>
      </ul>
      <p>📌 Transformer je dôvod, prečo:</p>
      <ul>
        <li>odpovede pôsobia plynulo</li>
        <li>model „drží tému"</li>
        <li>vie reagovať na nadväzujúce otázky</li>
      </ul>

      <h2>🎯 Čo si z tejto sekcie odniesť?</h2>
      <ul>
        <li>rôzne úlohy = rôzne modely</li>
        <li>AI nie je jeden nástroj, ale ekosystém</li>
        <li>porozumenie pojmom šetrí čas aj nervy</li>
      </ul>
      <p>👉 Keď vieš, čo používaš, vieš z AI dostať viac.</p>

      <MiniTest
        question="Ktoré tvrdenie o textových modeloch (LLM) je najpresnejšie? Vyber, ktorá možnosť (🌕 /⭐ /☀️) najlepšie vystihuje, ako LLM fungujú."
        options={[
          { label: "🌕", text: '„LLM je ako encyklopédia: keď sa ho niečo opýtam, dá mi správnu odpoveď, lebo AI predsa vie."' },
          { label: "⭐", text: '„LLM si občas vymýšľa, takže sa naň nedá vôbec spoľahnúť a je lepšie ho nepoužívať. Je ťažké sa s ním naučiť komunikovať"' },
          { label: "☀️", text: '„LLM vie veľmi dobre pracovať s textom (návrhy, zhrnutia, vysvetlenia), ale nepracuje s pravdou – skladá najpravdepodobnejší text podľa dát. Preto môže urobiť chybu alebo si niečo domyslieť, a dôležité veci je potrebné overovať."' },
        ]}
        correct="☀️"
        explanation="LLM je silný pomocník na jazykové úlohy, ale nie je to autorita na fakty. Vie znieť presvedčivo aj vtedy, keď sa mýli."
      />
    </PageShell>
  );
}
