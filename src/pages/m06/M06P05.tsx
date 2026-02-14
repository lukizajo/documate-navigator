import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M06P05() {
  const nav = getNavContext("m06-05-promptovanie");
  return (
    <PageShell title="4️⃣ Promptovanie v práci: šablóna, ktorá funguje ✍️💼" {...nav}>

      <p>Najčastejší dôvod, prečo ľudia povedia „AI mi v práci nepomáha", nie je AI.</p>
      <p><strong>Je to prompt.</strong></p>
      <p><strong>👉 Keď AI dáš zadanie typu:</strong></p>
      <p>„Napíš mi email."</p>
      <p>dostaneš všeobecnú odpoveď, ktorú aj tak musíš prerábať.</p>
      <p><strong>👉 Ale keď jej dáš zadanie typu:</strong></p>
      <p>„Napíš email klientovi, ktorý čaká 5 dní na odpoveď. Ospravedlň sa, vysvetli dôvod a daj jasný ďalší krok. Tón: profesionálny, ľudský, max 150 slov."</p>
      <p>zrazu je to použiteľné.</p>
      <p>👉 AI nepotrebuje dlhé prompty. Potrebuje <strong>jasné zadanie</strong>.</p>

      <h3>🧩 5-dielna šablóna pracovného promptu</h3>
      <p>Toto je šablóna, ktorú môžeš použiť skoro všade:</p>
      <ol>
        <li><strong>Úloha</strong> – čo má AI spraviť</li>
        <li><strong>Kontext</strong> – kto/komu/prečo, čo je dôležité</li>
        <li><strong>Výstup</strong> – forma, dĺžka, štruktúra</li>
        <li><strong>Tón</strong> – ako to má znieť</li>
        <li><strong>Obmedzenia</strong> – čo nesmie urobiť (sľuby, citlivé údaje, domýšľanie)</li>
      </ol>
      <p>👉 Jedna veta, ktorú si zapamätaj:</p>
      <p><strong>AI sa neriadi tým, čo chceš v hlave. Riadi sa tým, čo napíšeš.</strong></p>

      <h3>⚠️ Najčastejšie chyby v promptoch (a ako ich opraviť)</h3>
      <p><strong>Chyba 1: „Príliš všeobecné"</strong></p>
      <ul>
        <li>❌ „Napíš mi text o novej funkcii."</li>
        <li>✔️ „Napíš interný popis funkcie pre kolegov, 120–160 slov, 3 odrážky: čo to robí / kedy použiť / kedy nie."</li>
      </ul>
      <p><strong>Chyba 2: „Chýba publikum"</strong></p>
      <ul>
        <li>❌ „Zhrň tento dokument."</li>
        <li>✔️ „Zhrň tento dokument pre manažéra, ktorý nemá technické pozadie. Max 6 bodov + 2 riziká."</li>
      </ul>
      <p><strong>Chyba 3: „Chýba formát výstupu"</strong></p>
      <ul>
        <li>❌ „Daj mi zápis zo stretnutia."</li>
        <li>✔️ „Zápis v šablóne: Decisions / Action items (kto, čo, dokedy) / Open questions."</li>
      </ul>
      <p><strong>Chyba 4: „AI domýšľa"</strong></p>
      <p>✔️ Trik, ktorý funguje:</p>
      <p>„Ak si nie si istý, označ to ako <strong>NEISTÉ</strong> a polož doplňujúce otázky."</p>

      <h3>🔁 Prompt 1 vs Prompt 2 (rovnaká úloha, úplne iný výsledok)</h3>
      <p><strong>Situácia</strong></p>
      <p>Klient sa sťažuje, že nedostal odpoveď.</p>
      <p><strong>❌ Prompt 1 (slabý):</strong></p>
      <p>„Napíš email klientovi."</p>
      <p><strong>✔️ Prompt 2 (dobrý):</strong></p>
      <p>„Napíš email klientovi, ktorý čaká 5 dní na odpoveď. Cieľ: ospravedlniť sa, vysvetliť situáciu bez výhovoriek, dať jasný ďalší krok. Tón: profesionálny a ľudský. Výstup: max 150 slov + na konci 1 veta 'Ak budete mať otázky, som tu pre vás.' Obmedzenia: nesľubuj konkrétny termín, ak ho nemám potvrdený."</p>
      <p>👉 Rozdiel je v tom, že v Prompt 2 AI <strong>presne vie, čo je úspech</strong>.</p>

      <MiniTask title="Zlepši svoj starter prompt (7–10 min)">
        <p><strong>Zadanie</strong></p>
        <p>Vezmi si svoj „starter use-case" z lekcie 3 a napíš naň prompt v 2 verziách:</p>
        <ol>
          <li><strong>Prompt 1 (prirodzený, ako by si ho napísal dnes)</strong></li>
          <li><strong>Prompt 2 (podľa šablóny 5 dielov)</strong></li>
        </ol>
        <p><strong>Inštrukcia</strong></p>
        <p>Napíš Prompt 1 (1–2 vety).</p>
        <ol>
          <li>Prepíš ho na Prompt 2 a doplň: Úloha, Kontext, Výstup, Tón, Obmedzenia</li>
          <li>Spusti oba prompty v AI a porovnaj.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sedí tón (profesionálny/ľudský/stručný)?</li>
          <li>Dodržala AI formát a dĺžku, ktoré si chcel?</li>
          <li>Nevymyslela si AI fakty alebo sľuby mimo kontextu?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 bude konkrétnejší a použiteľnejší, lebo AI dostala jasný kontext, formát, tón a obmedzenia. Prompt 1 bude častejšie generický, menej trafí tvoju situáciu a bude vyžadovať viac ručných úprav.</p>
      </ExpectedFinding>

      <MiniTest
        question="AI ti v emaili pridala sľub „určite vám odpovieme do zajtra", ale ty to nevieš garantovať. Čo spravíš v ďalšom prompte?"
        options={[
          { label: "🌕", text: "Požiadam AI, nech to napíše krajšie." },
          { label: "⭐", text: "Pridám obmedzenie: „Nesľubuj termín, ak nie je potvrdený."" },
          { label: "☀️", text: "Pridám viac detailov o firme." },
        ]}
        correct="⭐"
        explanation="Problém nie je štýl, ale hranice."
      />

      <MiniTest
        question="AI ti zhrnula dokument, ale máš pocit, že vynechala niečo dôležité. Čo doplníš do promptu?"
        options={[
          { label: "🌕", text: "„Na konci uveď 3 možné riziká a čo si si nebol istý."" },
          { label: "⭐", text: "„Urob to kratšie."" },
          { label: "☀️", text: "„Použi viac odrážok."" },
        ]}
        correct="🌕"
        explanation="Pri zhrnutiach je najčastejšia chyba práve vynechaný kontext/riziko."
      />

      <MiniTest
        question="AI ti dáva veľmi všeobecnú odpoveď. Čo je najpravdepodobnejšie, že v prompte chýba?"
        options={[
          { label: "🌕", text: "Kontext a cieľ (pre koho a načo)" },
          { label: "⭐", text: "Tón" },
          { label: "☀️", text: "Emoji" },
        ]}
        correct="🌕"
        explanation="Bez publika a cieľa AI nevie, čo má uprednostniť."
      />

      <MiniTest
        question="Chceš zápis zo stretnutia, ale AI ti vracia dlhý text bez štruktúry. Čo je najlepší ďalší krok?"
        options={[
          { label: "🌕", text: "Napísať „buď stručnejší"" },
          { label: "⭐", text: "Nadiktovať formát: Decisions / Action items / Open questions" },
          { label: "☀️", text: "Napísať „sprav to profesionálne"" },
        ]}
        correct="⭐"
        explanation="Formát je v práci často dôležitejší než štýl."
      />
    </PageShell>
  );
}
