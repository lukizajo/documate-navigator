import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P07() {
  const nav = getNavContext("m04-07-systemove-pokyny");
  return (
    <PageShell title="6️⃣ Stabilné systémové pokyny" tldr={[
      "Systémové pokyny = dlhodobé nastavenia, nie jednorazová inštrukcia",
      "Držia tón, štýl a pravidlá aj pri ďalších úlohách",
      "Ideálne 6–10 riadkov, krátke pravidlá fungujú najlepšie",
    ]} {...nav}>

      <p>Jednorazový prompt je ako inštrukcia: „sprav mi toto teraz".</p>
      <p><strong>Systémové pokyny</strong> sú niečo iné – sú to dlhodobé nastavenia: <strong>kým má AI byť a ako má uvažovať</strong>, aby držala tón, štýl a pravidlá aj pri ďalších úlohách.</p>
      <p>Je to presne ten „🧱 Stabilné" košík z M3: niečo, čo platí stále, nie len dnes.</p>

      <h3>🧩 Na čo sú systémové pokyny dobré</h3>
      <p>Vďaka systémovým pokynom vieš dosiahnuť:</p>
      <ul>
        <li><strong>konzistentný tón</strong> odpovedí (napr. stručne, ľudsky, bez žargónu)</li>
        <li><strong>rovnaký štýl výstupu</strong> naprieč rôznymi úlohami (tabuľka, kroky, checklist)</li>
        <li><strong>dodržiavanie pravidiel</strong> aj pri zložitejších zadaniach (nevymýšľaj, pýtaj sa, cituj, minimal disclosure)</li>
      </ul>
      <p>Rozdiel oproti jednorazovému promptu je, že systémové pokyny sú:</p>
      <ul>
        <li><strong>stabilné</strong> (držia sa dlhšie),</li>
        <li><strong>opakovane použiteľné</strong>,</li>
        <li>a menej náchylné na "rozpad logiky", keď sa konverzácia natiahne.</li>
      </ul>

      <h3>✍️ Ako to napísať (kopírovateľné systémové šablóny)</h3>
      <p>Systémové pokyny majú byť krátke. Ideálne 6–10 riadkov. Tu sú 3 hotové šablóny:</p>

      <h3>🧩 Šablóna A: Univerzál (na bežné používanie)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`„Píš stručne a prakticky.
Keď chýba kľúčový detail, polož 1 otázku.
Nevymýšľaj fakty – ak nevieš, povedz 'neviem'.
Používaj jasnú štruktúru (odrážky/kroky/tabuľka).
Na konci daj krátke odporúčanie v 1–2 vetách."`}
      </div>

      <h3>🧩 Šablóna B: Presnosť (zdroje + proti domýšľaniu)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`„Ak pracujeme so zdrojmi, používaj iba informácie zo zadaných zdrojov.
Pri faktoch/číslach uveď, z čoho vychádzaš ([A]/[B] alebo 'nie je uvedené').
Ak informácia v zdrojoch nie je, napíš 'nie je uvedené' alebo polož 1 otázku.
Nepoužívaj dohady ani 'dopĺňanie'."`}
      </div>

      <h3>🧩 Šablóna C: Bezpečnosť (minimal disclosure)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`„Nepýtaj si ani nevypisuj citlivé údaje (adresa, doklady, heslá, čísla kariet).
Používaj placeholdery: [MENO], [ID], [DÁTUM].
Ak sú potrebné detaily, pýtaj si ich všeobecne alebo ako rozsah."`}
      </div>
      <p>👉 Tip: Môžeš ich kombinovať, ale radšej krátko. Keď bude systémový prompt príliš dlhý, prestane fungovať.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Neprerob systémový prompt na román.</strong> Krátke pravidlá fungujú najlepšie.</li>
        <li>Pozor na konflikty: „buď stručný" vs „buď detailný" – radšej daj prioritu (napr. stručne, ale s príkladom).</li>
        <li>Nedávaj extrémne absolútne zákazy typu „nikdy…", ak to môže blokovať normálnu odpoveď.</li>
      </ul>

      <MiniTask title="systémové pokyny v praxi (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš, aby ti AI dlhodobo odporúčala veci v rovnakom štýle a aby nevymýšľala.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1 (len jednorazové zadanie)</strong></p>
        <p>„Odporuč mi mobil do 15 000 Kč. Daj 3 tipy a plusy/mínusy."</p>
        <p><strong>✔️ Prompt 2 (systémové pokyny + aktuálna úloha)</strong></p>
        <p><strong>Systémové pokyny (vložiť na začiatok):</strong> „Píš stručne a prakticky. Nevymýšľaj fakty – ak nevieš, povedz 'neviem' alebo polož 1 otázku. Používaj štruktúru: tabuľka + 2 vety odporúčania. Nepíš citlivé údaje, používaj placeholdery."</p>
        <p><strong>Aktuálna úloha:</strong> „Odporuč mi mobil do 15 000 Kč. Fotím najmä v interiéri, nechcem veľký mobil, batéria má vydržať celý deň. Formát: tabuľka (model / prečo áno / prečo nie) + na konci 1 otázka na spresnenie."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je odpoveď pri Prompte 2 konzistentnejšia v štýle (stručná, prehľadná, tabuľka)?</p>
        <p>Drží Prompt 2 pravidlo "nevymýšľaj" (radšej sa opýta / prizná nevedomosť)?</p>
        <p>Je výstup z Promptu 2 použiteľnejší hneď (nie "stena textu")?</p>
        <p>Máš pocit, že by si systémový prompt vedel použiť aj nabudúce bez veľkých úprav?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 drží tón, štruktúru a disciplínu stabilnejšie, lebo má "dlhodobý rámec".</p>
        <p>Prompt 1 môže fungovať, ale štýl a pravidlá sa budú meniť podľa situácie.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktor\u00e9 2 vety patria sk\u00f4r do syst\u00e9mov\u00fdch pokynov (stabiln\u00e9 pravidl\u00e1), nie do jednorazovej \u00falohy? Vyber 2."
        options={[
          { label: "\ud83c\udf15", text: `\u201eNap\u00ed\u0161 mi dnes 3 tipy na mobil do 15 000 K\u010d.\u201c` },
          { label: "\u2b50", text: `\u201eAk nie\u010do nevie\u0161, povedz 'neviem' alebo polo\u017e 1 ot\u00e1zku.\u201c` },
          { label: "\u2600\ufe0f", text: `\u201ePou\u017ei v odpovedi tabu\u013eku so st\u013epcami model / pre\u010do \u00e1no / pre\u010do nie.\u201c` },
          { label: "\ud83c\udf11", text: `\u201eTento text zhr\u0148 do 5 bodov.\u201c` },
        ]}
        correct="\u2b50\u2600\ufe0f"
        explanation="S\u00fa to stabiln\u00e9 pravidl\u00e1 spr\u00e1vania/\u0161t\u00fdlu. \ud83c\udf15 a \ud83c\udf11 s\u00fa jednorazov\u00e9 konkr\u00e9tne \u00falohy."
      />
    </PageShell>
  );
}
