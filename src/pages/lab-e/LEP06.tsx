import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-06-mapa");

export default function LEP06() {
  return (
    <PageShell title="5️⃣ Mapa slidov" prev={nav.prev} next={nav.next}>
      <p>Máš one message a vybranú storyline. Teraz ich potrebujeme premeniť na niečo, čo sa dá reálne postaviť do prezentácie.</p>
      <p>Mapa slidov je medzi-krok: nie je to ešte dizajn ani finálne texty. Je to plán, ktorý ti povie, <strong>koľko slidov</strong>, <strong>v akom poradí</strong> a <strong>akú pointu má každý z nich niesť</strong>.</p>

      <h2>🧠 Čo je mapa slidov</h2>
      <p>Mapa slidov je jednoduchý zoznam 8–10 slidov, kde pri každom slidu vieš:</p>
      <ul>
        <li>čo je pointa (headline),</li>
        <li>čo je obsah v jednej vete,</li>
        <li>aký typ vizuálu sa hodí.</li>
      </ul>
      <p>Keď máš mapu, tvorba prezentácie je už len skladanie dielikov.</p>

      <h2>✅ 3 pravidlá mapy slidov</h2>
      <h3>1️⃣ Headline je pointa</h3>
      <p>Nadpis nemá byť „Náš plán", ale „Náš plán skráti čas o 20 %".</p>
      <h3>2️⃣ 1 slide = 1 myšlienka</h3>
      <p>Ak do jedného slidu tlačíš dve pointy, sprav dva slidy.</p>
      <h3>3️⃣ Striedaj rytmus</h3>
      <p>Prezentácia má lepší flow, keď striedaš typy slidov, napríklad:</p>
      <ul>
        <li>pointa, potom vysvetlenie,</li>
        <li>potom príklad,</li>
        <li>potom ďalší krok.</li>
      </ul>

      <h2>🤖 Ako požiadať AI, aby spravila mapu bez generiky</h2>
      <p>Ak AI povieš len „sprav mi osnovu prezentácie", dostaneš generiku. Potrebujeme, aby AI pracovala s tvojou one message a storyline.</p>
      <p>Použi tento typ zadania:</p>
      <ul>
        <li>„Tu je moja one message a storyline"</li>
        <li>„Sprav mi mapu 8–10 slidov"</li>
        <li>„Ku každému slidu headline + 1 veta pointy"</li>
        <li>„Pridaj návrh vizuálu" (graf/diagram/obrázok/bez vizuálu)</li>
      </ul>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš hotové L3_storyline_v1. Teraz z toho chceš spraviť konkrétny plán prezentácie.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Skopíruj svoju one message a vybranú storyline.</li>
          <li>Nechaj AI navrhnúť mapu 8–10 slidov v tomto formáte:
            <ul>
              <li>Slide 1: headline (max 8 slov)</li>
              <li>1 veta pointy</li>
              <li>návrh vizuálu (graf/diagram/obrázok/bez vizuálu)</li>
            </ul>
          </li>
          <li>Vyber z mapy 2 slidy, ktoré sú najviac "generické" a prepíš headline tak, aby bola pointa jasná.</li>
        </ol>
        <p>Ulož si výsledok ako <strong>L4_slide_map_v1</strong>.</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Má mapa 8–10 slidov a má jasný začiatok aj koniec?</li>
          <li>Je headline pri každom slide pointa, nie názov kapitoly?</li>
          <li>Je pri každom slide len jedna myšlienka?</li>
          <li>Vieš z mapy povedať, aký je flow a prečo je poradie práve takto?</li>
          <li>Máš aspoň pri polovici slidov návrh vizuálu, ktorý dáva zmysel?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď máš mapu slidov, prestaneš „písať prezentáciu" a začneš ju skladať. Mapa ti odhalí generické miesta ešte skôr, než stratíš čas dizajnom.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktorý headline je najlepší podľa pravidla \u201Eheadline = pointa\u201C?`}
        options={[
          { label: "🌕", text: `\u201ENákupný zoznam\u201C` },
          { label: "⭐", text: `\u201EPlán jedál na týždeň\u201C` },
          { label: "☀️", text: `\u201E3 pravidlá, vďaka ktorým ušetríš čas pri varení\u201C` },
        ]}
        correct="☀️"
        explanation="Hovorí pointu a benefit, nie iba názov témy."
      />
    </PageShell>
  );
}
