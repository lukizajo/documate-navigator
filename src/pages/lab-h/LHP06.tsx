import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding, MiniTest, PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-06-sfx");

export default function LHP06() {
  return (
    <PageShell title="5️⃣ Sound design a efekty: malé zvuky, veľký rozdiel" prev={nav.prev} next={nav.next}>
      <p>SFX (sound effects) sú malé zvuky, ktoré si často ani neuvedomíš… ale keď chýbajú, obsah pôsobí "plochý". Keď sú zlé, pôsobí to zase lacno a rušivo. V tejto lekcii si nastavíš jednoduché pravidlá, aby si vedel vytvoriť SFX, ktoré <strong>pomáhajú orientácii, rytmu a pocitu profesionálneho výstupu</strong> — bez toho, aby prehlušili pointu.</p>

      <h3>🎶 Zvukové efekty</h3>
      <p>SFX sú krátke zvukové signály. Ich úloha nie je byť "mini skladba", ale:</p>
      <ul>
        <li><strong>urobiť prechod</strong> (transition)</li>
        <li><strong>potvrdiť akciu</strong> (confirm)</li>
        <li>(voliteľne) jemne doplniť atmosféru, ak to dáva zmysel</li>
      </ul>

      <h3>👉 Kedy SFX použiť</h3>
      <ul>
        <li>pri prechode medzi sekciami (kapitola, slide, strih vo videu)</li>
        <li>pri "hotovo/uložené/ďalej" (potvrdenie akcie)</li>
        <li>pri jemnom zvýraznení (ale nie každé 2 sekundy)</li>
      </ul>

      <h3>👉 3 zvukové "povahy" (vyber si jednu, drž sa jej)</h3>
      <p>Aby SFX sedeli k tvojmu projektu, pomôže zvoliť si jednu líniu:</p>
      <ul>
        <li><strong>Organické</strong> – mäkké, teplé, prirodzené (napr. jemné šuchnutie, mäkké kliknutie)</li>
        <li><strong>Digitálne</strong> – čisté, moderné, "UI" (napr. čistý pop, jemný click bez ostrých výšok)</li>
        <li><strong>Kinematické</strong> – efektné prechody (pozor, ľahko sa to preženie)</li>
      </ul>
      <p>💡 Tip do praxe: Nevyberaj "najkrajší zvuk". Vyber zvuk, ktorý <strong>nevyruší</strong> a sedí štýlom.</p>

      <h3>Základné pravidlo</h3>
      <p>👉 <strong>SFX nesmie mať príbeh.</strong></p>
      <p>Ak sa zvuk rozvíja, graduje alebo má dlhý dozvuk, začne súperiť s obsahom.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <p>SFX je rušivé najmä vtedy, keď:</p>
      <ul>
        <li>má <strong>príliš dlhý dozvuk</strong> (zlieva sa s hlasom alebo hudbou)</li>
        <li>má <strong>ostré výšky / pískanie</strong> (pôsobí agresívne)</li>
        <li>je <strong>príliš hlasné</strong> (všetko ostatné sa "zľakne")</li>
        <li>znie ako "lacná appka" (tvrdý klik, prehnaný whoosh)</li>
        <li>opakuje sa identicky príliš často (začne liezť na nervy)</li>
      </ul>

      <MiniTask title="2 SFX (A/B varianty) + výber">
        <p><strong>Situácia</strong></p>
        <p>Máš intro a pozadie z predchádzajúcich lekcií. Teraz chceš 2 malé zvuky, ktoré použiješ v rovnakom projekte: prechod a potvrdenie akcie.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vytvor 2 typy SFX:</p>
        <ul>
          <li>A) <strong>Transition (prechod)</strong></li>
          <li>B) <strong>Confirm (potvrdenie)</strong></li>
        </ul>
        <p>Pre každý typ sprav <strong>2 varianty</strong>:</p>
        <ul>
          <li><strong>soft</strong> (jemnejší)</li>
          <li><strong>clear</strong> (o trochu výraznejší, ale stále nerušivý)</li>
        </ul>
        <p>Na konci vyber 1 variant z každého typu podľa rubriky.</p>
        <PromptBlock>{`Správaj sa ako sound designer. Potrebujem 2 krátke SFX pre môj projekt, štýlovo konzistentné s mojou hudbou.
Môj projekt (1 veta): [___]
Mood (3 slová): [___, ___, ___]
Zvuková povaha (vyber 1): [organické / digitálne / kinematické]
NESMIE: [napr. ostré výšky / dlhý dozvuk / agresívne zvuky]
Vytvor:
A) TRANSITION SFX (prechod)
• dĺžka: 0.3–0.8 s
• cieľ: jemný prechod, nie dramatický
• varianty:
  1. transition_soft
  2. transition_clear

B) CONFIRM SFX (potvrdenie)
• dĺžka: 0.1–0.4 s
• cieľ: príjemné potvrdenie, nie "arcade"
• varianty:
  1. confirm_soft
  2. confirm_clear

Potom mi daj:
1. názvy súborov pre sound pack (napr. .wav):
• sfx_transition_soft_01.wav
• sfx_transition_clear_01.wav
• sfx_confirm_soft_01.wav
• sfx_confirm_clear_01.wav
2. 3 tipy, ako zjemním SFX, keď pôsobí rušivo (napr. skrátiť, menej výšok, kratší dozvuk)`}</PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je každý SFX krátky (netiahne sa)?</li>
          <li>Nemá dlhý dozvuk, ktorý zlieva obsah?</li>
          <li>Nie sú tam ostré výšky alebo pískanie?</li>
          <li>Sedí to štýlom k môjmu intro/pozadiu?</li>
          <li>Vybral som z každého typu 1 variant, ktorý je použiteľný a nerušivý?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že aj dva jednoduché, konzistentné SFX spravia obsah profesionálnejším. Najčastejšie zlepšenie nie je "pridať viac zvukov", ale <strong>zjemniť ich a držať jeden štýl</strong>.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 SFX ti v obsahu pôsobí rušivo. Čo je najlepší prvý krok?"
        options={[
          { label: "🌕", text: "Zjemniť ho: skrátiť a odstrániť ostré výšky / dozvuk." },
          { label: "⭐", text: "Pridať ďalší efekt, aby to znelo zaujímavejšie." },
          { label: "☀️", text: "Zosilniť ho, aby ho bolo viac počuť." },
        ]}
        correct="🌕"
        explanation="Rušivé SFX je takmer vždy príliš dlhé, príliš ostré alebo príliš hlasné — najprv ho zjemni."
      />
    </PageShell>
  );
}
