import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M05P03() {
  const nav = getNavContext("m05-03-ako-sa-pytat");
  return (
    <PageShell title="M05 \u2013 Vyh\u013Ead\u00E1vanie s AI \uD83D\uDD0D\uD83E\uDD14" {...nav}>

      <h2>2️⃣ Ako sa pýtať AI pri vyhľadávaní správne</h2>
      <p>Keď sa pýtaš AI „ako keby to bol Google", často dostaneš odpoveď, ktorá znie dobre, ale nie je úplne použiteľná. Nie preto, že by AI zámerne klamala, ale preto, že jej chýbajú dôležité informácie: časový rámec, zdroje alebo tvoja konkrétna situácia. A keď tieto veci nedostane, má tendenciu medzery doplniť.</p>
      <p>Rozdiel spraví jedna vec: pri vyhľadávaní sa nepýtaš len „čo", ale aj „kedy" a „z čoho to vychádza".</p>
      <p><strong>Príklad:</strong></p>
      <ul>
        <li>❌ „Aké sú trendy v AI?"</li>
        <li>✅ „Aké sú hlavné trendy v AI v rokoch 2024–2025? Uveď zdroje a dátum publikácie."</li>
      </ul>

      <h3>🤔 Čo sa pri vyhľadávaní cez AI najčastejšie pokazí</h3>
      <ul>
        <li>otázka je príliš všeobecná („aké sú pravidlá", „aké sú trendy", „čo je najlepšie")</li>
        <li>chýba časový rámec („aktuálne" bez toho, aby bolo jasné, ku ktorému dátumu)</li>
        <li>chýba požiadavka na zdroj, takže odpoveď nejde rýchlo overiť</li>
        <li>AI nevie, či chceš všeobecné vysvetlenie, alebo konkrétne fakty z webu</li>
      </ul>
      <p>Výsledok potom vyzerá takto: odpoveď je pekná, súvislá, ale ty nevieš, či je presná a či je stále platná.</p>

      <h3>👉 3 jednoduché doplnky, ktoré spravia veľký rozdiel</h3>
      <p>Aby bola odpoveď použiteľná, stačí k otázke doplniť tri veci.</p>
      <ul>
        <li><strong>časový rámec</strong> – Príklady: „stav k dnešku", „v rokoch 2024–2025", „po poslednej aktualizácii", „aktuálne pravidlá"</li>
        <li><strong>zdroj a dátum</strong> – Napríklad: „uveď zdroj a dátum ku každému bodu" alebo „na konci pridaj zdroje"</li>
        <li><strong>pravidlo pre neistotu</strong> – Napríklad: „ak si nie si istý, napíš neviem" alebo „ak chýba informácia, polož 1 otázku"</li>
      </ul>
      <p>Toto sú tri malé vety, ale robia rozdiel medzi odpoveďou, ktorú len čítaš, a odpoveďou, ktorú vieš použiť.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <p><strong>👉 Najčastejšie pasce</strong></p>
      <ul>
        <li>AI odpovie bez zdrojov a znie presvedčivo</li>
        <li>AI uvedie informáciu, ktorá bola pravdivá pred rokom, ale dnes už neplatí</li>
        <li>AI „zhrnie" pravidlá, ale vynechá výnimku, ktorá je práve pre teba dôležitá</li>
      </ul>
      <p><strong>👉 Praktické pravidlo</strong></p>
      <ul>
        <li>ak ide o fakty, vždy si pýtaj zdroje a dátum</li>
        <li>ak ide o rozhodovanie, vždy doplň priority a čo je pre teba neprijateľné</li>
        <li>ak ide o niečo citlivé (peniaze, zdravie, cestovanie), nerob rozhodnutie z jednej odpovede bez kontroly</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Keď chceš mať istotu, pýtaj si odpoveď tak, aby sa dala overiť jedným klikom.</p>

      <MiniTask title="vyhľadávanie bez zdrojov vs vyhľadávanie so zdrojmi (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Letíš lowcostom a nechceš doplácať na gate. Potrebuješ vedieť, čo je aktuálne povolené ako príručná batožina.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1 (bez vyhľadávacieho rámca)</strong></p>
        <p>„Aké sú pravidlá príručnej batožiny pre Ryanair?"</p>
        <p><strong>✔️ Prompt 2 (vyhľadávací rámec: zdroj + dátum + neistota)</strong></p>
        <p>„Aké sú aktuálne pravidlá príručnej batožiny pre Ryanair (stav k dnešku)? Úloha: vysvetli to stručne v 5 bodoch pre bežného človeka. Pravidlo: ku každému bodu uveď zdroj (odkaz alebo názov stránky) a dátum. Ak niečo nevieš overiť, napíš 'neviem'."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Má Prompt 2 pri každom bode zdroj a dátum, alebo sú to len tvrdenia bez opory?</li>
          <li>Vieš si podľa Promptu 2 overiť informáciu rýchlo (klik na zdroj do 30 sekúnd)?</li>
          <li>Sú odpovede z Promptu 1 a Promptu 2 rovnaké, alebo sa v niečom líšia?</li>
          <li>Je v Prompte 2 jasne oddelené, čo je isté a čo AI nevie potvrdiť?</li>
          <li>Je výstup z Promptu 2 použiteľný hneď ako „checklist pred letom"?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 dá odpoveď, ktorú vieš okamžite overiť, lebo obsahuje zdroje a dátumy. Zároveň prinúti AI priznať neistotu, ak si nie je istá.</p>
        <p>Prompt 1 často dá všeobecnú odpoveď bez jasnej opory, ktorá môže byť neaktuálna alebo príliš zjednodušená.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00E9 2 ot\u00E1zky s\u00FA \u201Evyh\u013Ead\u00E1vacie ot\u00E1zky\u201C, kde potrebuje\u0161 p\u00FDta\u0165 zdroje a \u010Dasov\u00FD r\u00E1mec? Vyber 2.`}
        options={[
          { label: "\uD83C\uDF15", text: `\u201EVysvetli mi, \u010Do je infl\u00E1cia, jednoducho a na pr\u00EDklade.\u201C` },
          { label: "⭐", text: `\u201EAk\u00E9 s\u00FA aktu\u00E1lne poplatky za v\u00FDber z bankomatu v zahrani\u010D\u00ED pre moju banku?\u201C` },
          { label: "☀️", text: `\u201EAk\u00E9 s\u00FA najnov\u0161ie pravidl\u00E1 pr\u00EDru\u010Dnej bato\u017Einy pre Ryanair? Uve\u010F zdroj a d\u00E1tum.\u201C` },
          { label: "\uD83C\uDF11", text: `\u201ENavrhni mi 5 tipov na r\u00FDchle ra\u0148ajky do 10 min\u00FAt.\u201C` },
          { label: "\uD83C\uDF20", text: `\u201EVymysli mi n\u00E1pady na v\u00EDkend v Prahe bez davov.\u201C` },
        ]}
        correct="⭐☀️"
        explanation="⭐ a ☀️ sú otázky na aktuálne fakty, ktoré sa menia — bez zdroja a dátumu sa to nedá spoľahlivo overiť."
      />
    </PageShell>
  );
}
