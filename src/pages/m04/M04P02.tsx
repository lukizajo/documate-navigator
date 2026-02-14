import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P02() {
  const nav = getNavContext("m04-02-kedy-kontext");
  return (
    <PageShell title="1️⃣ Kedy stačí prompt inžiniering a kedy už potrebuješ kontext inžiniering" tldr={[
      "M2 = ako napísať zadanie, M3 = ako poskladať a udržať kontext",
      "Pri viacerých podmienkach a zdrojoch treba kontext inžiniering",
      "3 otázky rozhodnú: priority? zdroje? použiteľný hneď?",
    ]} {...nav}>

      <p>V M2 si sa učil skladať prompt ako stavebnicu: <strong>úloha, kontext, príklad, rola, formát, tón</strong>.</p>
      <p>To je základ, bez ktorého sa nikam nepohneš.</p>
      <p>M3 je ďalší level. Nie je to "viac textu". Je to <strong>lepšie riadenie kontextu</strong>, keď:</p>
      <ul>
        <li>je veľa podmienok,</li>
        <li>pracuješ so zdrojom,</li>
        <li>záleží na presnosti,</li>
        <li>alebo nechceš, aby si AI niečo domýšľala.</li>
      </ul>
      <p><strong>M2 = ako napísať zadanie. M3 = ako poskladať a udržať kontext tak, aby AI netrafila len priemer.</strong></p>
      <p>Predstav si to takto: M2 je, že vieš napísať dobrý recept. M3 je, že vieš nastaviť kuchyňu: suroviny, pravidlá, priority a kontrolu kvality.</p>

      <h3>✅ Kedy ti stačí M2 (aj s kontextom)</h3>
      <p>M2 ti väčšinou stačí, keď:</p>
      <ul>
        <li>ide o <strong>jednorazový výstup</strong>, ktorý si vieš rýchlo doladiť otázkami</li>
        <li>kontext je <strong>jednoduchý</strong> a nemá veľa podmienok (max pár)</li>
        <li>nepracuješ so zdrojom, kde treba držať presnosť („toto je napísané tu a tu")</li>
        <li>aj keď to nebude úplne presné, stále ti to pomôže (inšpirácia, návrh, prvá verzia)</li>
      </ul>
      <p><strong>Mikropríklad (M2 štýl promptu):</strong></p>
      <p>„Navrhni 10 nápadov na rýchle večere do 20 minút. Formát: odrážky. Tón: jednoduchý a praktický."</p>

      <h3>🧭 Kedy už potrebuješ M3 (kontext ako "systém")</h3>
      <p>M3 sa oplatí, keď:</p>
      <ul>
        <li>máš <strong>viac vrstiev podmienok</strong> (priority, obmedzenia, čo nechceš, čo je deal-breaker)</li>
        <li>chceš, aby AI <strong>neimprovizovala</strong> pri faktoch (radšej „neviem")</li>
        <li>pracuješ so <strong>zdrojom</strong> (text, dokument) a chceš výstup, ktorý sa oň opiera</li>
        <li>potrebuješ konzistentný štýl a pravidlá v dlhšej spolupráci (nie 1 odpoveď)</li>
      </ul>
      <p><strong>Mikropríklad (M3 vibe):</strong></p>
      <p>„Zhrň tento text do 5 bodov a ku každému dopíš, z ktorej časti textu vychádza. Ak to v texte nie je, povedz 'nie je uvedené'. Na konci vypíš 2 nejasnosti, ktoré by si potreboval doplniť."</p>

      <h3>🧠 3 otázky, ktoré rozhodnú (M2 vs M3)</h3>
      <p>Odpovedz si <strong>ÁNO/NIE</strong>:</p>
      <ol>
        <li>Je tu viac než pár podmienok a potrebujem, aby boli <strong>prioritizované</strong>?</li>
        <li>Pracujem so zdrojom alebo potrebujem, aby AI <strong>nevymýšľala fakty</strong>?</li>
        <li>Chcem výstup, ktorý je <strong>použiteľný hneď</strong> bez veľkých opráv?</li>
      </ol>
      <p>👉 Ak máš <strong>aspoň 2× ÁNO</strong>, choď M3 prístupom.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>M3 nie je o dĺžke. Je o tom, že kontext má <strong>poradie a váhu</strong> (priority).</li>
        <li>Ak pracuješ so zdrojom, nastav pravidlo: <strong>"nevieš = povedz neviem / pýtaj sa"</strong>.</li>
        <li>Nepridávaj šum: informácia, ktorá nemení rozhodnutie, len zaberá miesto.</li>
      </ul>

      <MiniTask title="M2 kontext vs M3 kontext (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš si vybrať nový mobil bez toho, aby si strávil večer googlením.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1 (M2 – slušný, ale ešte "bez riadenia")</strong></p>
        <p>„Odporuč mi nový mobil do 15 000 Kč. Rola: poradca na nákup elektroniky. Kontext: chcem dobrý foťák a batériu. Úloha: daj mi 3 tipy + plusy/mínusy. Formát: odrážky."</p>
        <p><strong>✔️ Prompt 2 (M3 – kontext je usporiadaný a rozhoduje)</strong></p>
        <p>„Odporuč mi nový mobil do 15 000 Kč. Kontext: fotím najmä deti a jedlo (interiér), nechcem obrovský mobil do ruky, často som celý deň mimo nabíjačky. Deal-breaker: nech sa neseká po roku a nech má spoľahlivé fotky aj večer. Priority: (1) fotky v horšom svetle, (2) batéria, (3) plynulosť. Úloha: Daj 3 odporúčania + pri každom 2 dôvody 'prečo áno' a 1 dôvod 'prečo nie'. Formát: krátka tabuľka (model / pre koho / riziko) + na konci 1 otázka, ktorou si mám upresniť výber."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Rozumie AI, čo je pre mňa priorita, alebo len vypíše "najznámejšie" modely?</p>
        <p>Dá mi aj nevýhody a riziká, alebo je to len jednostranne pozitívne?</p>
        <p>Je výsledok použiteľný hneď, alebo by som to musel celé prerábať?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 trafí výber viac na mieru, lebo má priority + deal-breaker – výsledok bude konkrétnejší a rozhodovanie jednoduchšie (jasné "prečo áno / prečo nie").</p>
        <p>Prompt 1 dá skôr všeobecné odporúčania (dobrý foťák/batéria), ktoré môžeš použiť ako prvý nástrel.</p>
      </ExpectedFinding>

      <h3>💡 Bonus tip</h3>
      <p>Keď chceš rýchlo spraviť z M2 "mini M3", dopíš dve veci:</p>
      <ul>
        <li><strong>Priority (1–3):</strong> čo je pre teba najdôležitejšie</li>
        <li><strong>Deal-breaker:</strong> čo nechceš, aby sa stalo</li>
      </ul>
      <p>A ešte jedna drobnosť, ktorá často zachráni presnosť:</p>
      <p><strong>„Ak si nie si istý, povedz neviem alebo polož 1 otázku."</strong></p>

      <MiniTest
        question={`Ktor\u00e9 2 prompty u\u017e typicky potrebuje\u0161 rie\u0161i\u0165 \u201eM3 sp\u00f4sobom\u201c? Vyber 2.`}
        options={[
          { label: "🌕", text: `\u201eNapl\u00e1nuj mi v\u00edkend v Prahe: m\u00e1m max 6 hod\u00edn \u010dist\u00e9ho \u010dasu, nechcem davy, chcem dobr\u00fa k\u00e1vu a 1 miesto 'mimo turistov'. Form\u00e1t: odr\u00e1\u017eky.\u201c` },
          { label: "⭐", text: `\u201eOdporu\u010d mi mobil do 15 000 K\u010d. Fot\u00edm hlavne v interi\u00e9ri, nechcem ve\u013ek\u00fd mobil, potrebujem v\u00fddr\u017e cel\u00fd de\u0148. Uve\u010f 3 tipy a pri ka\u017edom 2 d\u00f4vody 'pre\u010do \u00e1no' a 1 'pre\u010do nie'.\u201c` },
          { label: "☀️", text: `\u201eZhr\u0148 prilo\u017een\u00fd text do 5 bodov a pri ka\u017edom bode uve\u010f, z ktorej \u010dasti textu to vych\u00e1dza. Ak to v texte nie je, povedz 'nie je uveden\u00e9'.\u201c` },
          { label: "🌑", text: `\u201eVymysli 10 n\u00e1padov na r\u00fdchle ve\u010dere do 20 min\u00fat.\u201c` },
        ]}
        correct="⭐☀️"
        explanation="⭐ m\u00e1 viac vrstiev podmienok a potrebuje\u0161, aby to AI trafila na mieru (priority/limity). ☀️ je priamo pr\u00e1ca so zdrojom a discipl\u00edna proti dom\u00fd\u0161\u013eaniu."
      />
    </PageShell>
  );
}
