import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M02Page() {
  const nav = getNavContext("m02-chatboty");
  return (
    <PageShell title="M02 – Chatboty v praxi 🤖💬" tldr={[
      "Testuj viacero chatbotov na rovnakom zadaní",
      "Používaj scorecard namiesto pocitového hodnotenia",
      "Vyber si chatbota podľa typu úlohy, nie popularity",
    ]} {...nav}>

      {/* ===== ÚVOD ===== */}
      <h2>Úvod</h2>
      <p>V predchádzajúcom module sme si vysvetlili, čo AI je, ako približne funguje a prečo vie byť raz geniálna a inokedy úplne mimo.</p>
      <p>Teraz prichádza veľmi praktická otázka:</p>
      <p>👉 <strong>Keď chcem AI reálne používať… ktorého chatbota mám vlastne použiť?</strong></p>
      <p>Väčšina ľudí si otvorí prvý nástroj, ktorý pozná (často ChatGPT alebo Gemini) — a ostane pri ňom roky. Lenže rôzne chatboty sa správajú rôzne: jeden je silný v kreatívnych nápadoch, iný v štruktúre, ďalší pôsobí „ukecane", ďalší je strohý, niektorý sa pýta doplňujúce otázky a iný rovno vystrelí odpoveď.</p>
      <p>Tento modul ti pomôže získať nadhľad, nacítiť „vibe" jednotlivých chatbotov a hlavne:</p>
      <ul>
        <li>✅ prestať sa rozhodovať podľa dojmu</li>
        <li>✅ a začať sa rozhodovať podľa porovnania</li>
      </ul>

      {/* ===== PREHĽAD MODULU ===== */}
      <h2>Prehľad modulu</h2>
      <ul>
        <li>prečo je dôležité testovať viacero chatbotov a neviazať sa len na jedného,</li>
        <li>kto sú hlavní hráči na trhu a čím sa medzi sebou líšia,</li>
        <li>ako chatboty porovnávať jednoducho, ale systematicky,</li>
        <li>aké kritériá dávajú pri hodnotení najväčší zmysel,</li>
        <li>ako si vybrať správny nástroj pre konkrétnu úlohu,</li>
        <li>a na čo si dať pozor pri ich používaní.</li>
      </ul>

      <h2>Čo sa v tomto module naučíš</h2>
      <ul>
        <li>porovnať viacerých chatbotov na rovnakom zadaní,</li>
        <li>používať scorecard namiesto pocitového hodnotenia,</li>
        <li>rozpoznať silné a slabé stránky jednotlivých nástrojov,</li>
        <li>vybrať si chatbota podľa typu úlohy (nie popularity),</li>
        <li>zachovať si kritické myslenie a nadhľad pri práci s AI.</li>
      </ul>

      {/* ===== PREČO POROVNÁVAŤ ===== */}
      <h2>Prečo porovnávať chatboty ❓</h2>
      <p>Predstav si, že by si celý život používal len jedno jediné náradie. Skrutkovač na klince, kladivo na skrutky. Presne takto veľa ľudí používa chatboty: otvorí prvý, ktorý pozná — a hotovo. Lenže chatboty nie sú „to isté v inom obale". Každý má iný štýl, iné silné stránky a iné správanie.</p>

      <h3>Prečo vznikajú rozdiely medzi chatbotmi</h3>
      <ul>
        <li>iné tréningové dáta (z čoho sa „učili"),</li>
        <li>iné nastavenia (ako striktne sa držia pravidiel),</li>
        <li>iný štýl odpovedí (stručný vs ukecaný, kreatívny vs vecný),</li>
        <li>inú mieru proaktivity (pýta sa doplňujúce otázky vs „strieľa" odpoveď).</li>
      </ul>
      <p>👉 Keď používaš len jedného, nemáš porovnanie. A bez porovnania sa ľahko stane, že si zvykneš na priemer, aj keď existuje lepšia voľba.</p>

      <h3>Kedy sa oplatí porovnať aspoň 2 chatboty</h3>
      <ul>
        <li>ti záleží na výsledku (text, plán, rozhodnutie),</li>
        <li>potrebuješ istotu, že si niečo neprehliadol,</li>
        <li>chceš rýchlo viac pohľadov (nápady, argumenty, varianty).</li>
      </ul>
      <p className="text-sm italic mt-2">💡 <strong>Tip do praxe:</strong> Ak riešiš dôležitú vec, daj rovnaké zadanie aspoň dvom chatbotom. Často ťa prekvapí rozdiel v tom, čo si všimnú, ako to podajú a či navrhnú ďalší krok.</p>

      <h3>„Ako to napísať" – kopírovateľné vety</h3>
      <ul>
        <li>Na porovnanie výstupov: <em>„Odpovedz stručne v bodoch. Na konci navrhni 1 ďalší krok."</em></li>
        <li>Na porovnanie štýlu a proaktivity: <em>„Ak ti niečo chýba, polož mi 1 doplňujúcu otázku."</em></li>
        <li>Na porovnanie použiteľnosti: <em>„Daj mi konkrétne kroky, ktoré viem hneď spraviť."</em></li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Neporovnávaj viac vecí naraz. Ak zmeníš zadanie aj chatbot, nevieš, čo spôsobilo rozdiel.</li>
        <li>Nespoliehaj sa na prvý dojem. Niekedy vyhrá ten, čo píše najkrajšie — nie ten, čo je najužitočnejší.</li>
        <li>Nejde o to nájsť „najlepší chatbot na všetko". Ide o to vedieť si vybrať správny nástroj podľa úlohy.</li>
      </ul>

      {/* ===== MINI-ÚLOHA CHATGPT ===== */}
      <MiniTask title="Reklamácia bez stresu (ChatGPT)">
        <p><strong>Situácia:</strong> Kúpil si slúchadlá a po 2 týždňoch prestalo fungovať jedno ucho. Chceš napísať reklamáciu e-shopu tak, aby bola slušná, vecná a použiteľná.</p>
        <p><strong>Inštrukcia:</strong> Skopíruj do ChatGPT prompt, keď odpovie, pokračuj follow-up promptom a zhodnoť odpovede.</p>
        <p className="mt-3"><strong>👉 Prompt:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-3"><strong>Follow-up:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Uprav text tak, aby bol ešte stručnejší (max 900 znakov) a aby znel slušne, nie pasívne agresívne. Zachovaj formát."
        </div>
        <p className="mt-3"><strong>❓ Otázky k odpovedi (ÁNO/NIE):</strong></p>
        <ul className="text-xs">
          <li>Dodržal formát: 1 veta čo sa stalo + 2–3 vety detaily + jasná požiadavka?</li>
          <li>Obsahuje text všetky 3 fakty?</li>
          <li>Je požiadavka napísaná jednoznačne?</li>
          <li>Znie text slušne a vecne?</li>
          <li>Je text „ready-to-send"?</li>
          <li>Po follow-upe: skrátil text a zachoval formát?</li>
        </ul>
        <p className="mt-3"><strong>🎭 Aký má ChatGPT vibe?</strong></p>
        <ul className="text-xs">
          <li>Naformátoval odpoveď prehľadne?</li>
          <li>Pridal na konci „ďalší krok"?</li>
          <li>Bol „ďalší krok" konkrétny a akčný?</li>
          <li>Pôsobil tón skôr „milý a podporujúci"?</li>
          <li>Použil emoji/smajlíky? Ak áno, pôsobilo to prirodzene?</li>
          <li>Mal si dojem, že ťa ChatGPT vedie a znižuje ti námahu?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>ChatGPT – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá slušne a uhladene, často až „milým" tónom,</li>
          <li>rád dáva výstup do prehľadnej štruktúry (body, kroky, krátke odseky),</li>
          <li>často pridá odporúčanie alebo ďalší krok, aby ťa posunul ďalej,</li>
          <li>niekedy môže pridať aj emoji/smajlíky,</li>
          <li>keď mu dáš follow-up, väčšinou vie text skrátiť a upraviť.</li>
        </ul>
      </ExpectedFinding>

      {/* ===== HLAVNÍ HRÁČI ===== */}
      <h2>Hlavní hráči na trhu</h2>
      <p>Na trhu dnes existuje veľa chatbotov, ale pár z nich sa používa najčastejšie. Spravíme si prehľad — kto je kto, aký má vibe a na čo sa typicky hodí.</p>

      <h3>ChatGPT (OpenAI)</h3>
      <p>🎭 <strong>Vibe:</strong> Univerzálny, konverzačný, často prirodzene „ľudský".</p>
      <p><strong>Na čo sa hodí:</strong> Písanie, prepisy, vysvetľovanie, brainstorming, štruktúra.</p>
      <p><strong>Modely:</strong> Instant, Thinking, Pro (prepínaš rýchlosť vs hĺbku).</p>

      <h3>Claude (Anthropic)</h3>
      <p>🎭 <strong>Vibe:</strong> Pokojný, uhladený, systematický, opatrný.</p>
      <p><strong>Na čo sa hodí:</strong> Dlhšie texty, zhrnutia, práca s dokumentmi, citlivejšie témy.</p>
      <p><strong>Modely:</strong> Haiku (rýchly), Sonnet (vyvážený), Opus (najsilnejší).</p>
      <p className="text-sm italic">👉 Anthropic kladie veľký dôraz na bezpečné správanie modelov.</p>

      <h3>Gemini (Google)</h3>
      <p>🎭 <strong>Vibe:</strong> Vecný, informatívny, skôr „praktický poradca".</p>
      <p><strong>Na čo sa hodí:</strong> Prehľady, štruktúra, rýchle zhrnutia, multimodálne použitie.</p>
      <p><strong>Modely:</strong> Pro (výkon), Flash (rýchly), Flash-Lite (úspornejší).</p>

      <h3>Perplexity</h3>
      <p>🎭 <strong>Vibe:</strong> Vyhľadávací, faktický, „rýchlo nájdem a zhrniem".</p>
      <p><strong>Na čo sa hodí:</strong> Fakty, rýchle zhrnutie, orientácia v téme, práca so zdrojmi.</p>
      <p><strong>Modely:</strong> Sonar (bežné), Sonar Pro (hlbšie vyhľadávanie).</p>

      <h3>Microsoft Copilot</h3>
      <p>🎭 <strong>Vibe:</strong> Pracovný, vecný, orientovaný na produktivitu.</p>
      <p><strong>Na čo sa hodí:</strong> Office/Windows ekosystém, firemné scenáre.</p>

      <h3>Mistral (Le Chat)</h3>
      <p>🎭 <strong>Vibe:</strong> Tech, „experimentovací", priamočiary.</p>
      <p><strong>Na čo sa hodí:</strong> Skúšanie alternatív, technickejšie úlohy, rýchle testy.</p>
      <p className="text-sm italic">👉 Európsky hráč, alternatíva mimo „klasických gigantov".</p>

      <h3>Grok (xAI)</h3>
      <p>🎭 <strong>Vibe:</strong> Výrazný „internet vibe", priamejší, niekedy ostrejší štýl.</p>
      <p><strong>Na čo sa hodí:</strong> Rýchle reakcie, názory, zhrnutia, aktuálne dianie.</p>

      <h3>Meta AI (Meta, Llama)</h3>
      <p>🎭 <strong>Vibe:</strong> „AI priamo v chate", veľmi dostupný a každodenný.</p>
      <p><strong>Na čo sa hodí:</strong> Rýchle otázky, bežná pomoc, nápady priamo v appkách.</p>
      <p className="text-sm italic">👉 Pre veľa ľudí prvý chatbot – majú ho rovno v Messengeri/Instagrame/WhatsAppe.</p>

      <h3>Zapamätávačka</h3>
      <ul>
        <li><strong>ChatGPT</strong> = textový parťák</li>
        <li><strong>Claude</strong> = pokojný analytik na dlhé texty</li>
        <li><strong>Gemini</strong> = vecný informátor + multimodalita</li>
        <li><strong>Perplexity</strong> = vyhľadávací typ so zdrojmi</li>
        <li><strong>Copilot</strong> = Microsoft pracovný režim</li>
        <li><strong>Mistral</strong> = tech experiment</li>
        <li><strong>Grok</strong> = internet vibe</li>
        <li><strong>Meta AI</strong> = AI priamo v chate</li>
      </ul>
      <p className="text-sm italic">💡 <strong>Tip:</strong> Namiesto „Ktorý chatbot je najlepší?" sa pýtaj „Ktorý chatbot je najlepší na túto konkrétnu úlohu?"</p>

      {/* ===== MINI-ÚLOHA GEMINI ===== */}
      <MiniTask title="Reklamácia bez stresu (Gemini)">
        <p><strong>Situácia:</strong> Rovnaká ako vyššie – slúchadlá, reklamácia.</p>
        <p><strong>Inštrukcia:</strong> Použi Gemini! Rovnaký prompt a follow-up ako pri ChatGPT.</p>
        <p className="mt-3"><strong>👉 Prompt:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-3"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov) a aby znel slušne, nie pasívne agresívne. Zachovaj formát."</em></p>
        <p className="mt-3"><strong>🎭 Aký má Gemini vibe?</strong> – Vyhodnoť rovnakými otázkami ako pri ChatGPT.</p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Gemini – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá priamejšie a faktickejšie, s menším „small talk" vibe,</li>
          <li>vie dávať výstupy prehľadne a úsporne,</li>
          <li>býva menej „empatický" – skôr praktický poradca než „parťák",</li>
          <li>emoji/smajlíky používa spravidla menej často,</li>
          <li>pri follow-upe vie odpoveď rýchlo upraviť, ale nie vždy automaticky pridá „ďalší krok".</li>
        </ul>
      </ExpectedFinding>

      {/* ===== FÉROVÉ POROVNANIE ===== */}
      <h2>Ako porovnávať chatboty férovo ⚖</h2>
      <p>Najčastejšia chyba pri porovnávaní chatbotov je, že každému dáme inú otázku… alebo sa spoliehame na prvý dojem. A prvý dojem je zradný.</p>

      <h3>Čo znamená férové porovnanie</h3>
      <ul>
        <li>rovnaké zadanie pre všetky nástroje,</li>
        <li>rovnaké kritériá hodnotenia,</li>
        <li>zápis výsledkov (nie spoliehanie sa na pamäť).</li>
      </ul>

      <h3>Mini-protokol (3 kroky)</h3>
      <ol>
        <li>Skopíruj rovnaký prompt do chatbota.</li>
        <li>Daj rovnaký follow-up (rovnaká zmena podmienky).</li>
        <li>Vyplň scorecard – krátke hodnotenie podľa rovnakých otázok.</li>
      </ol>

      <h3>Scorecard: hodnotím správanie, nie pocit</h3>
      <p>Namiesto „toto sa mi páči" používame scorecard (✅/⚠/❌ alebo 1–5):</p>
      <ul>
        <li><strong>Splnenie zadania</strong> – dodržal formát + fakty?</li>
        <li><strong>Prehľadnosť</strong> – dá sa to čítať rýchlo?</li>
        <li><strong>Konkrétnosť</strong> – je to použiteľné, nie všeobecné?</li>
        <li><strong>Proaktivita</strong> – ponúkne ďalší krok / spýta sa?</li>
        <li><strong>Vibe 🎭</strong> – ako na teba pôsobí?</li>
      </ul>
      <p className="text-sm italic">💡 <strong>Tip:</strong> Ak si po odpovedi povieš „toto sa mi páči", polož si otázku: 👉 Prečo konkrétne? A tú odpoveď si zapíš ako kritérium.</p>

      {/* ===== MINI-ÚLOHA CLAUDE ===== */}
      <MiniTask title="Reklamácia bez stresu (Claude)">
        <p><strong>Inštrukcia:</strong> Použi Claude! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov) a aby znel slušne, nie pasívne agresívne. Zachovaj formát."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Claude – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá uhladeným a „čistým" štýlom, často bez zbytočných emócií,</li>
          <li>má tendenciu byť precízny v štruktúre a držať sa zadania,</li>
          <li>často pôsobí viac „rozvážne" – radšej si niečo spresní alebo zvolí bezpečnejšiu formuláciu,</li>
          <li>emoji/smajlíky používa spravidla menej, výstup pôsobí serióznejšie,</li>
          <li>pri follow-upe prepracuje odpoveď veľmi disciplinovane.</li>
        </ul>
      </ExpectedFinding>

      {/* ===== KRITÉRIÁ HODNOTENIA ===== */}
      <h2>Kritériá hodnotenia</h2>

      <h3>Kvalita výsledku (čo si odnášam)</h3>
      <ul>
        <li><strong>Splnenie zadania</strong> – dodržal formát a to, čo som chcel?</li>
        <li><strong>Štruktúra</strong> – je odpoveď prehľadná (body, kroky, tabuľka)?</li>
        <li><strong>Čitateľnosť</strong> – rozumel by tomu aj niekto iný bez kontextu?</li>
        <li><strong>Konkrétnosť</strong> – dá sa podľa toho konať, alebo sú to len všeobecné frázy?</li>
        <li>(Voliteľné) <strong>Fakty a overiteľnosť</strong> – ak sú tam tvrdenia, viem ich overiť?</li>
      </ul>

      <h3>Správanie chatbota (ako sa s ním pracuje)</h3>
      <ul>
        <li><strong>Proaktivitu</strong> – položí doplňujúcu otázku / navrhne ďalší krok?</li>
        <li><strong>Priznanie limitov</strong> – povie, keď niečo nevie alebo keď si domýšľa?</li>
        <li><strong>🎭 Vibe</strong> – je príjemný, vecný, ukecaný, strohý… a sedí mi to na úlohu?</li>
      </ul>

      <h3>Ako to hodnotiť rýchlo</h3>
      <ul>
        <li>✅ = splnené</li>
        <li>⚠ = čiastočne / potrebuje úpravu</li>
        <li>❌ = nesplnené</li>
      </ul>
      <p>👉 <strong>Tie isté kritériá používaj pre všetkých chatbotov rovnako.</strong></p>

      {/* ===== SCORECARD ŠABLÓNA ===== */}
      <h2>Scorecard – šablóna na porovnávanie</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">Kvalita výsledku</th>
              <th className="text-center py-2 px-2 font-semibold">Hodnotenie</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Splnenie zadania: dodržal formát + to, čo som chcel?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Štruktúra: je to prehľadné (body/kroky/tabuľka)?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Čitateľnosť: rozumel by tomu aj niekto iný?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Konkrétnosť: dá sa podľa toho konať hneď?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">Správanie chatbota</th>
              <th className="text-center py-2 px-2 font-semibold">Hodnotenie</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Proaktivita: navrhol ďalší krok / spýtal sa?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Priznanie limitov: priznal neistotu?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Vibe: pôsobí mi štýl vhodne na túto úlohu?</td><td className="text-center">✅ / ⚠ / ❌</td></tr>
          </tbody>
        </table>
      </div>

      {/* ===== MINI-ÚLOHA MISTRAL ===== */}
      <MiniTask title="Reklamácia bez stresu (Mistral)">
        <p><strong>Inštrukcia:</strong> Použi Mistral! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov)..."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Mistral – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá stručnejšie a priamo, s menším „omáčkovým" vysvetľovaním,</li>
          <li>pôsobí menej konverzačne než ChatGPT (viac vecný),</li>
          <li>štruktúru vie dať dobrú, ale občas ju treba výslovne vypýtať,</li>
          <li>emoji/smajlíky používa málo alebo vôbec,</li>
          <li>pri follow-upe reaguje rýchlo, ale nie vždy automaticky pridá „ďalší krok".</li>
        </ul>
      </ExpectedFinding>

      {/* ===== TOOLBOX ===== */}
      <h2>Praktické využitie – Toolbox 🔨</h2>
      <p>Rôzne úlohy si žiadajú rôzne nástroje. Cieľom nie je mať jedného favorita, ale vlastný toolbox chatbotov.</p>
      <ul>
        <li><strong>brainstorming</strong> → skôr kreatívnejší chatbot</li>
        <li><strong>fakty a overovanie</strong> → nástroj, ktorý vie pracovať so zdrojmi</li>
        <li><strong>dlhé texty</strong> → chatbot, ktorý zvláda dlhší kontext</li>
        <li><strong>rýchle prehľady</strong> → stručný a vecný model</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Spoliehanie sa len na jedného chatbota – každý má slepé miesta.</li>
        <li>Neoverovanie faktov – plynulá odpoveď neznamená správna odpoveď.</li>
        <li>Výber nástroja podľa popularity namiesto podľa účelu úlohy.</li>
        <li>Slepá dôvera v prvý výstup bez kontroly.</li>
        <li>Zdieľanie citlivých údajov bez rozmýšľania.</li>
      </ul>
      <p>👉 <strong>Ak by si odpoveď nepoužil bez kontroly od kolegu, nepouži ju bez kontroly ani od chatbota.</strong></p>

      <h3>🔍 Keď vidíš problém… (rýchla oprava)</h3>
      <ul>
        <li>Je to príliš všeobecné → <em>„Daj mi 3 konkrétne návrhy + 1 príklad."</em></li>
        <li>Je to ukecané → <em>„Skráť to na 6 bodov."</em></li>
        <li>Chýba ďalší krok → <em>„Čo mám spraviť ako prvé?"</em></li>
        <li>Nesedí tón → <em>„Prepíš to formálnejšie / priateľskejšie / stručnejšie."</em></li>
      </ul>

      {/* ===== MINI-ÚLOHA GROK ===== */}
      <MiniTask title="Reklamácia bez stresu (Grok)">
        <p><strong>Inštrukcia:</strong> Použi Grok! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov)..."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Grok – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá sebavedomejším a odvážnejším štýlom, menej „uhladeným",</li>
          <li>vibe býva viac neformálny (niekedy až „uťatý"),</li>
          <li>štruktúru vie spraviť, ale občas skĺzne do „voľnejšieho" formátu,</li>
          <li>môže častejšie používať vtip, iróniu alebo ľahký sarkazmus,</li>
          <li>pri follow-upe vie odpoveď upraviť, no niekedy treba dôraznejšie pripomenúť formát.</li>
        </ul>
        <p className="mt-2">👉 Pri Groku si všímaj hlavne 🎭 vibe (tón) a disciplínu v dodržaní formátu.</p>
      </ExpectedFinding>

      {/* ===== ETIKA A BEZPEČNOSŤ ===== */}
      <h2>Etika a bezpečnosť 🎓</h2>
      <p>Chatbot vie pôsobiť sebavedomo. Niekedy až tak, že máš pocit: „OK, toto znie správne, idem to použiť."</p>
      <p>👉 <strong>Výstup chatbota nie je pravda. Je to návrh.</strong></p>
      <p>A zodpovednosť za to, čo s tým urobíš, má vždy človek — nie nástroj.</p>

      <h3>❓ „Znie to dobre" ≠ „je to správne"</h3>
      <p>Ak ide o fakty, čísla, pravidlá, zdravie, peniaze alebo právo → <strong>overuj</strong>.</p>
      <p>👉 <em>„Uveď, čo je isté a čo je len odhad. Ak si nie si istý, napíš to."</em></p>

      <h3>Overovanie</h3>
      <p>Nepýtaj sa „Je to pravda?" – pýtaj sa <strong>„Ako to overím?"</strong></p>
      <ul>
        <li><em>„Daj mi 3 spôsoby, ako si to viem overiť."</em></li>
        <li><em>„Kde by som to našiel v oficiálnom zdroji? (bez vymýšľania)"</em></li>
        <li><em>„Ak nevieš, povedz ‚neviem'."</em></li>
      </ul>

      <h3>Citlivé údaje do chatbotov nepatria</h3>
      <p>Za citlivé ber napríklad: rodné číslo, číslo dokladu, čísla kariet, heslá, zdravotné informácie, interné firemné informácie, mená a detaily iných ľudí.</p>
      <p>👉 <strong>Ak by si to neposlal neznámemu človeku na internete, neposielaj to ani chatbotovi.</strong></p>
      <p>👉 <em>„Použi anonymizované údaje. Zmeň mená, čísla, adresy – nech ostane len podstata."</em></p>

      <h3>Zodpovednosť máš ty</h3>
      <p>👉 <strong>AI je ako GPS: pomáha, ale volant držíš ty.</strong></p>

      <h3>🔍 Keď vidíš problém… (rýchla diagnostika)</h3>
      <ul>
        <li>Odpoveď je príliš sebavedomá → <em>„Uveď, čo nevieš / čo je neisté."</em></li>
        <li>Zmiešava fakty a domnienky → <em>„Rozdeľ to na: fakty vs predpoklady."</em></li>
        <li>Potrebuješ dôkaz → <em>„Daj mi zdroje alebo kroky na overenie."</em></li>
        <li>Je tam citlivý údaj → STOP. Prepiš prompt s anonymizáciou.</li>
      </ul>

      {/* ===== MINI-ÚLOHA META ===== */}
      <MiniTask title="Reklamácia bez stresu (Meta AI)">
        <p><strong>Inštrukcia:</strong> Použi Metu! Rovnaký prompt a follow-up.</p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš krátku reklamáciu e-shopu na slúchadlá. Fakty: kúpené pred 2 týždňami, prestalo fungovať jedno ucho, chcem výmenu alebo vrátenie peňazí. Formát: 1) 1 veta čo sa stalo, 2) 2–3 vety detaily, 3) jasná požiadavka. Na konci pridaj: Čo mám spraviť ako ďalší krok?"
        </div>
        <p className="mt-2"><strong>Follow-up:</strong> <em>„Uprav text tak, aby bol ešte stručnejší (max 900 znakov)..."</em></p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Meta AI – typické nastavenie a vibe:</strong></p>
        <ul>
          <li>odpovedá stručnejšie a viac konverzačne, ako v messengeri,</li>
          <li>ide rovno k veci, ale pôsobí menej „formálne",</li>
          <li>štruktúru (body/kroky) niekedy treba vypýtať explicitne,</li>
          <li>emoji/smajlíky sa môžu objaviť častejšie – kontext je „chat v appke",</li>
          <li>pri citlivých témach sa drží opatrného tónu.</li>
        </ul>
      </ExpectedFinding>

      {/* ===== PRAKTICKÁ ÚLOHA ===== */}
      <h2>🎓 Praktická úloha – Porovnanie chatbotov v praxi</h2>
      <p><strong>Zadanie:</strong> Vyber si 3 use-casy a otestuj ich v 3 chatbotoch podľa vlastného výberu. Pri každom use-case použiješ rovnaký Prompt a potom rovnaký Follow-up vo všetkých 3 chatbotoch.</p>

      <h3>🅰 Vyber si 3 use-casy:</h3>
      <ol>
        <li>zhrnutie odborného článku pre rôzne publikum (manažér vs. laik),</li>
        <li>návrh marketingového sloganu s obmedzeniami,</li>
        <li>napísanie pracovného e-mailu v citlivej situácii,</li>
        <li>brainstorming 10 nápadov + ich zoradenie podľa potenciálu,</li>
        <li>faktická otázka s požiadavkou na zdroje a dátumy,</li>
        <li>prepis rovnakého textu do rôznych štýlov,</li>
        <li>návrh osnovy prezentácie s jasnou logikou argumentov,</li>
        <li>kritické zhodnotenie textu,</li>
        <li>zjednodušenie komplexnej témy pre začiatočníka,</li>
        <li>návrh riešenia problému s uvedením rizík a obmedzení.</li>
      </ol>

      <h3>🅱 Vyber si 3 chatboty</h3>
      <p>ChatGPT, Claude, Gemini, +1 chatbot podľa vlastného výberu.</p>

      <h3>Tvoja úloha (3 kroky) pre každý use-case</h3>
      <ol>
        <li>Skopíruj Prompt do všetkých 3 chatbotov.</li>
        <li>Po odpovedi skopíruj Follow-up do všetkých 3 chatbotov.</li>
        <li>Vyplň Hodnotiacu kartu.</li>
      </ol>

      <h3>Hodnotiaca scorecard (0–3 body)</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">A) Kvalita výsledku</th>
              <th className="text-center py-2 px-2 font-semibold">0–3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Splnenie zadania (dodržal formát + podmienky)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Štruktúra (prehľadné, ľahko sa porovnáva)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Čitateľnosť (rozumel by tomu aj niekto iný)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Konkrétnosť (dá sa použiť hneď)</td><td className="text-center">___</td></tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold">B) Správanie chatbota</th>
              <th className="text-center py-2 px-2 font-semibold">0–3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Proaktivita (ďalší krok / doplňujúca otázka)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Priznanie limitov (nehrá sa na istotu)</td><td className="text-center">___</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">🎭 Vibe (tón vhodný pre úlohu)</td><td className="text-center">___</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Súčet bodov: ____ / 21</strong></p>

      <h3>Hodnotiace kritériá</h3>
      <ul>
        <li><strong>0</strong> = nesplnil / nepoužiteľné</li>
        <li><strong>1</strong> = slabé (veľa by si musel prerábať)</li>
        <li><strong>2</strong> = dobré (len drobné úpravy)</li>
        <li><strong>3</strong> = výborné (takmer „ready-to-send")</li>
      </ul>
      <p>👉 <strong>Dôležité:</strong> hodnotíš rovnakými kritériami všetkých 3 chatbotov.</p>

      <h3>Očakávaný výstup</h3>
      <ul>
        <li>vyplnené scorecardy (min. 3 use-casy × 3 chatboty = 9 hodnotení),</li>
        <li>krátke porovnanie (1–2 odseky),</li>
        <li>jasné odporúčanie: „Na tento typ úlohy sa mi najviac hodil chatbot X, lebo…"</li>
      </ul>
    </PageShell>
  );
}
