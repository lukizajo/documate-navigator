import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-06-ai-krok");

export default function LIP06() {
  return (
    <PageShell title="5️⃣ AI krok" prev={nav.prev} next={nav.next}>
      <p>V automatizácii AI nefunguje ako {"\u201E"}pokec{"\u201C"}. Musí fungovať ako <strong>funkcia</strong>: dostane vstup, vráti výstup a keď je neistota, vráti signál (nie výmysel). Preto má AI krok vždy jasnú úlohu, jasný formát výstupu a jasnú reakciu na nejasnosti.</p>
      <p>👉 <strong>AI krok je funkcia, nie rozhovor.</strong></p>

      <h3>✅ 3 časti AI kroku</h3>
      <p>1️⃣ <strong>Úloha</strong> (čo presne má spraviť)</p>
      <p>2️⃣ <strong>Formát výstupu</strong> (v čom to vráti)</p>
      <p>3️⃣ <strong>Fallback</strong> (čo spraví, keď nevie)</p>

      <h3>🧠 Príklady výstupu (aby bol krok použiteľný ďalej)</h3>
      <p>✅ <strong>Príklad A – kategorizácia</strong></p>
      <p>Výstup:</p>
      <ul>
        <li>CATEGORY=A|B|C</li>
        <li>CONFIDENCE=0–1</li>
        <li>alebo NEED_REVIEW + dôvod</li>
      </ul>
      <p>✅ <strong>Príklad B – extrakcia polí</strong></p>
      <p>Výstup:</p>
      <ul>
        <li>name:</li>
        <li>topic:</li>
        <li>deadline:</li>
        <li>need_review: true/false + dôvod</li>
      </ul>
      <p>👉 <strong>Gold tip:</strong> najprv nech AI vráti štruktúru, až potom (ak treba) text.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>{"\u201E"}Pekný text{"\u201C"}, ale nepoužiteľný výstup</strong> → automatizácia nevie, na čo nadviazať.</li>
        <li><strong>Chýba fallback</strong> → AI si domýšľa a flow pokračuje zle.</li>
        <li><strong>Priveľa vstupu bez pravidiel</strong> → AI háda; pomôže Input pack + jasné pravidlá.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď AI vracia chaos</h3>
      <ol>
        <li>Zúž úlohu na 1 vec (napr. len kategória, nie aj návrh emailu).</li>
        <li>Vynúť formát výstupu (max 3–4 polia).</li>
        <li>Pridaj NEED_REVIEW pri nejasnostiach.</li>
      </ol>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Vybral si 1 AI krok. Teraz z neho spravíš špecifikáciu, ktorú vieš priamo vložiť do automatizácie.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Zober vstupy z <strong>J4_inputs_v1</strong>.</li>
          <li>Napíš AI špecifikáciu:
            <ul>
              <li>Úloha (1 veta)</li>
              <li>Vstup (aké polia posielaš)</li>
              <li>Výstup (presný formát)</li>
              <li>Pravidlá (čo má preferovať/nesmie)</li>
              <li>Fallback (NEED_REVIEW + dôvod)</li>
            </ul>
          </li>
          <li>Ulož si to ako <strong>J5_ai_step_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je úloha jasná aj bez kontextu tvojej hlavy?</li>
          <li>Je výstup použiteľný ďalej (štruktúra, nie {"\u201E"}pekný text{"\u201C"})?</li>
          <li>Vie AI vrátiť NEED_REVIEW, keď niečo chýba alebo je nejasné?</li>
          <li>Je jasné, čo sa má diať po NEED_REVIEW (STOP alebo človek)?</li>
        </ul>
        <ExpectedFinding>
          Keď si vynútiš formát výstupu a fallback, AI krok prestane {"\u201E"}improvizovať{"\u201C"} a začne byť spoľahlivý.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Prečo je fallback dôležitý?"
        options={[
          { label: "🌕", text: "Zvyšuje kreativitu." },
          { label: "⭐", text: "Je to len formalita." },
          { label: "☀️", text: "Znižuje riziko, že AI si domyslí a automatizácia spraví chybný krok." }
        ]}
        correct="☀️"
        explanation="Keď je AI neistá, má sa radšej zastaviť a vyžiadať kontrolu."
      />
    </PageShell>
  );
}
