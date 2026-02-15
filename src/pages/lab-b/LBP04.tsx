import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-04-jazyk");

export default function LBP04() {
  return (
    <PageShell title="3️⃣ Jednoduchý jazyk a zrozumiteľnosť" prev={nav.prev} next={nav.next}>
      <p>Cieľ tejto lekcie je jednoduchý: <strong>napísať text tak, aby mu človek rozumel na prvé prečítanie</strong>.</p>
      <p>Nie „aby znel múdro", ale aby bol <strong>jasný, stručný a bez domýšľania</strong>.</p>
      <p>AI vie texty krásne uhladiť… a zároveň ich vie spraviť zbytočne „korpo", dlhé alebo plné žargónu. Preto sa tu učíme používať AI ako nástroj na <strong>prepis do jednoduchej reči</strong>.</p>

      <hr />

      <h3>🎯 Prečo zrozumiteľnosť šetrí čas (aj nervy)</h3>
      <p>Keď je text zložitý alebo nejasný, stane sa jedno z troch:</p>
      <ul>
        <li>čitateľ <strong>preskočí</strong> podstatné informácie,</li>
        <li>čitateľ si význam <strong>domyslí zle</strong>,</li>
        <li>alebo sa ťa musí <strong>dopýtať</strong> (ďalšie správy, ďalšie vysvetlenia, ďalší chaos).</li>
      </ul>
      <p>Zrozumiteľný text je vlastne forma rešpektu: „nebudem ti kradnúť čas".</p>

      <hr />

      <h3>✅ 3 pravidlá jednoduchého jazyka (prakticky)</h3>
      <p><strong>1️⃣ Jedna veta = jedna myšlienka</strong></p>
      <p>Dlhé súvetia sú najčastejší dôvod, prečo ľudia strácajú niť.</p>
      <p><strong>Krátke vety</strong> = rýchle porozumenie.</p>
      <p><strong>2️⃣ Bežné slová namiesto žargónu</strong></p>
      <p>Žargón je pohodlný pre autora, ale drahý pre čitateľa.</p>
      <p>Ak sa dá povedať vec jednoducho, povedz ju jednoducho.</p>
      <p>Príklady:</p>
      <ul>
        <li>„implementovať" → <strong>zaviesť / nasadiť</strong></li>
        <li>„realizovať" → <strong>spraviť</strong></li>
        <li>„optimalizovať" → <strong>zlepšiť</strong></li>
        <li>„prioritizovať" → <strong>určiť, čo je najdôležitejšie</strong></li>
      </ul>
      <p><strong>3️⃣ Konkrétne slovesá namiesto abstrakcií</strong></p>
      <p>Abstraktné formulácie znejú profesionálne, ale nič nerobia.</p>
      <p>Príklady:</p>
      <ul>
        <li>„zabezpečiť realizáciu" → <strong>spraviť / odoslať / potvrdiť</strong></li>
        <li>„vykonať kontrolu" → <strong>skontrolovať</strong></li>
        <li>„poskytnúť súčinnosť" → <strong>pomôcť</strong></li>
      </ul>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <p>Toto sú najčastejšie „pascí", do ktorých AI padá:</p>
      <ul>
        <li><strong>AI vata</strong> („je dôležité si uvedomiť", „v dnešnej dobe", „táto téma je komplexná…")</li>
        <li><strong>žargón a skratky</strong>, ktoré bežný človek nepozná</li>
        <li><strong>príliš formálne obkecy</strong>, ktoré nič nepridajú</li>
        <li><strong>dlhé odseky</strong> bez bodov, nadpisov alebo jasnej štruktúry</li>
      </ul>
      <p>👉 Jednoduchý test:</p>
      <p><strong>Keby to čítal človek, ktorý je tu prvý deň, rozumel by?</strong></p>

      <hr />

      <h3>🤖 Ako požiadať AI o prepis pre laika (šablóna)</h3>
      <p>Toto je univerzálny spôsob, ako AI „prepnúť" do režimu zrozumiteľnosti:</p>
      <ul>
        <li>definuj publikum: <strong>laik / nový kolega v prvý deň</strong></li>
        <li>nastav pravidlá: <strong>krátke vety, bežné slová, bez vaty</strong></li>
        <li>povedz, čo urobiť s pojmami: <strong>vysvetliť stručne alebo nahradiť</strong></li>
      </ul>

      <hr />

      <MiniTask title="Prepis pre laika (A/B porovnanie)">
        <p><strong>Situácia</strong></p>
        <p>Máš text, ktorý znie formálne a odborne, ale pre bežného človeka je ťažký. Tvoj cieľ je spraviť ho zrozumiteľný bez toho, aby si zmenil význam.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv <strong>Prompt 1</strong> a potom <strong>Prompt 2</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>Text (vstup do AI)</strong></p>
        <p>„V rámci nasadenia novej funkcionality dochádza k optimalizácii procesu spracovania požiadaviek. Pre zvýšenie efektivity je potrebné zabezpečiť konzistentné zadávanie vstupných údajov a eliminovať duplicity. V prípade neštandardných situácií bude vykonaná eskalácia na príslušný tím, ktorý vykoná verifikáciu a následne poskytne spätnú väzbu. Zmena bude aplikovaná postupne, aby sa minimalizovali dopady na používateľov."</p>

        <p><strong>Prompt 1 – slabý (len „nech to znie lepšie")</strong></p>
        <p>„Prepíš tento text tak, aby znel lepšie a profesionálnejšie."</p>
        <p><strong>Prompt 2 – dobrý (prepis pre laika)</strong></p>
        <p>„Prepíš tento text tak, aby mu rozumel <strong>laik / nový kolega v prvý deň</strong>.</p>
        <p>Dodrž pravidlá:</p>
        <ol>
          <li>Použi <strong>krátke vety</strong> (max 15–18 slov).</li>
          <li>Použi <strong>bežné slová</strong>, vyhoď žargón.</li>
          <li>Ak musí zostať odborný pojem, vysvetli ho v zátvorke <strong>max 5 slovami</strong>.</li>
          <li>Výstup daj ako <strong>max 6 bodov</strong>.</li>
          <li>Odstráň AI vatu, zachov význam."</li>
        </ol>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je výsledok z Prompt 2 zrozumiteľný aj bez predchádzajúceho kontextu?</li>
          <li>Sú vety v Prompt 2 kratšie a je tam menej žargónu?</li>
          <li>Zostal zachovaný význam (nezmenili sa fakty)?</li>
          <li>Je jasné, čo je najdôležitejšie (vidno to na prvý pohľad)?</li>
          <li>Vieš si predstaviť, že tento text niekomu pošleš bez ďalšieho vysvetľovania?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Prompt 2</strong> vytvorí výrazne zrozumiteľnejší text, pretože AI dostane jasné publikum („laik") a konkrétne pravidlá (krátke vety, bežné slová, body). <strong>Prompt 1</strong> text často len „uhladi" a môže pridať ešte viac formálnych fráz.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
