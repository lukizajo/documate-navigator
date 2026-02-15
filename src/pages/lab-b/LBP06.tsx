import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-06-ton");

export default function LBP06() {
  return (
    <PageShell title="5️⃣ Zmena tónu textu bez zmeny významu 🎛️🗣️" prev={nav.prev} next={nav.next}>
      <p>V tejto lekcii riešime jednu praktickú vec: <strong>ten istý text môže mať rovnaký obsah, ale úplne iný dopad podľa toho, ako znie</strong>.</p>
      <ul>
        <li>môže pôsobiť <strong>tvrdšie</strong>, než chceš,</li>
        <li>môže byť <strong>príliš mäkký</strong> a nič z neho nevyplynie,</li>
        <li>môže vyznieť <strong>pasívne-agresívne</strong>,</li>
        <li>alebo naopak <strong>jasne a profesionálne</strong>.</li>
      </ul>
      <p>AI tón často „domyslí" sama. Preto jej ho treba <strong>zadať priamo</strong> — a zároveň ju strážiť, aby ti pri zmene tónu <strong>nezmenila význam</strong>.</p>

      <hr />

      <h3>✅ Čo je tón (a čo nie je)</h3>
      <ul>
        <li><strong>Tón = ako text znie</strong> (vecne, priateľsky, empaticky, pevne, formálne…)</li>
        <li><strong>Tón ≠ obsah</strong> (fakty, požiadavka, termín, ďalší krok)</li>
      </ul>
      <p>👉 Naše pravidlo v tejto lekcii:</p>
      <p><strong>Meníme tón, nie význam.</strong></p>

      <hr />

      <h3>🎚️ 5 tónov, ktoré využiješ najčastejšie</h3>
      <p><strong>1️⃣ Neutrálne vecný</strong></p>
      <ul>
        <li>bez emócií, len fakty a kroky</li>
        <li>vhodné, keď potrebuješ jasnosť a minimum interpretácií</li>
      </ul>
      <p><strong>2️⃣ Priateľský</strong></p>
      <ul>
        <li>ľudský, ale stále konkrétny</li>
        <li>vhodné, keď chceš dobrý vzťah a zároveň posun vpred</li>
      </ul>
      <p><strong>3️⃣ Empatický</strong></p>
      <ul>
        <li>uzná situáciu/emočnú stránku a navrhne riešenie</li>
        <li>vhodné pri citlivých témach alebo keď nechceš, aby to vyznelo „strojovo"</li>
      </ul>
      <p><strong>4️⃣ Pevný</strong></p>
      <ul>
        <li>jasné hranice, očakávanie, termín</li>
        <li>vhodné, keď sa veci nehybú alebo je potrebná disciplína</li>
      </ul>
      <p><strong>5️⃣ Formálny</strong></p>
      <ul>
        <li>oficiálny a profesionálny tón</li>
        <li>vhodné pri externej komunikácii alebo keď chceš mať text „bezpečne neutrálne"</li>
        <li><strong>formálne ≠ dlhé</strong> (stále má byť stručné a jasné)</li>
      </ul>

      <hr />

      <h3>🧠 Pravidlá, aby sa pri zmene tónu nezmenil význam</h3>
      <p>Keď žiadaš AI o zmenu tónu, vždy jej daj tieto pravidlá:</p>
      <ul>
        <li><strong>Zachovaj význam a fakty</strong></li>
        <li><strong>Nepridávaj nové informácie ani sľuby</strong></li>
        <li><strong>Zachovaj požiadavku a termín</strong> (ak sú v texte)</li>
        <li><strong>Nezvyšuj napätie ani sa nevyhrážaj</strong> (pevný môže byť jasný, ale bez nátlaku)</li>
        <li><strong>Zachovaj štruktúru</strong> (napr. max 6 viet alebo body)</li>
      </ul>
      <p>👉 Toto je rozdiel medzi „prepíš to" a „prepíš to kontrolovane".</p>

      <hr />

      <MiniTask title="Zmeň tón (1 prompt, 5 verzií)">
        <p><strong>Situácia</strong></p>
        <p>Potrebujete niekoho požiadať o dodanie podkladov. Text je momentálne nešikovný: pôsobí tvrdšie, než treba, a môže vyvolať odpor.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI nasledujúci <strong>Text</strong> a potom <strong>Prompt</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>Text (vstup do AI)</strong></p>
        <p>„Ahoj, stále som nedostal tie podklady, ktoré som potreboval. Už sa to naťahuje a bez toho to neviem dokončiť. Pošli mi to dnes, lebo to naozaj potrebujem. Ak to nebude, tak to budem musieť riešiť inak."</p>
        <p><strong>Prompt</strong></p>
        <p>„Prepíš tento text do 5 verzií tónu:</p>
        <ol>
          <li><strong>neutrálne vecný</strong></li>
          <li><strong>priateľský</strong></li>
          <li><strong>empatický</strong></li>
          <li><strong>pevný</strong></li>
          <li><strong>formálny</strong></li>
        </ol>
        <p>Pravidlá:</p>
        <ul>
          <li><strong>Zachovaj význam a požiadavku</strong> (stále potrebujem podklady).</li>
          <li><strong>Nepridávaj nové informácie</strong> (nepridávaj nové dôvody ani nové hrozby).</li>
          <li>Zachovaj termín: <strong>dnes</strong>.</li>
          <li><strong>Nezvyšuj napätie ani sa nevyhrážaj.</strong></li>
          <li>Každá verzia max <strong>6 viet</strong>.</li>
          <li>Na konci pridaj 1 vetu: „Kontrola: fakty, požiadavka a termín ostali rovnaké."</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Zostal význam rovnaký vo všetkých 5 verziách?</p>
        <p>Je tón v každej verzii konzistentný (nepreblikáva medzi štýlmi)?</p>
        <p>Nepribudli nové sľuby, nové dôvody alebo nové hrozby?</p>
        <p>Je v každej verzii jasné, čo má druhá strana spraviť a dokedy?</p>
        <p>Vieš si predstaviť, že jednu z verzií pošleš bez ďalších úprav?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Jedným dobrým promptom vieš získať viac verzií toho istého obsahu v rôznych tónoch. Ty si vyberieš tón podľa situácie — bez toho, aby sa zmenili fakty, požiadavka alebo termín.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
