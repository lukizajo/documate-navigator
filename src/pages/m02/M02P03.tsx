import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M02P03() {
  const nav = getNavContext("m02-03-hlavni-hraci");
  return (
    <PageShell title="2️⃣ Hlavní hráči na trhu" tldr={[
      "ChatGPT, Claude, Gemini, Perplexity, Copilot, Mistral, Grok, Meta AI",
      "Každý má iný vibe a silné stránky",
      "Vyberaj podľa úlohy, nie popularity",
    ]} {...nav}>


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
    </PageShell>
  );
}
