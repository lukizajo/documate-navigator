import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M05P04() {
  const nav = getNavContext("m05-04-limity");
  return (
    <PageShell title="3️⃣ Limity aktuálnych informácií ⏱️" {...nav}>
      <p>Keď sa pýtaš na „aktuálne info", AI môže byť tá najrýchlejšia cesta… alebo tá najrýchlejšia cesta k chybe. Problém nie je v tom, že by AI nechcela pomôcť. Problém je v tom, že AI <strong>nemusí mať vždy prístup k najnovším informáciám</strong>. Záleží na:</p>
      <ul>
        <li>tom, či má zapnuté online vyhľadávanie,</li>
        <li>aké zdroje používa,</li>
        <li>ako často sú dáta aktualizované.</li>
      </ul>
      <p><strong>Jednoduchý rozdiel:</strong></p>
      <ul>
        <li>historické a stabilné fakty (napr. kedy sa narodil Einstein) sú väčšinou v pohode</li>
        <li>„čo platí dnes" (pravidlá, ceny, termíny) je riziko, najmä ak to ďalej použiješ alebo na tom spravíš rozhodnutie</li>
      </ul>

      <h3>👉 Kedy to najviac bolí</h3>
      <p>Najčastejšie sa ľudia spália na veciach, ktoré sa menia často alebo majú výnimky.</p>
      <ul>
        <li><strong>cestovanie</strong> (batožina, check-in, víza, podmienky vstupu)</li>
        <li><strong>ceny a poplatky</strong> (diaľničné známky, roaming, vstupy, bankové poplatky)</li>
        <li><strong>pravidlá a podmienky</strong> (reklamácie, vrátenie tovaru, výluky, tarify)</li>
        <li><strong>udalosti a termíny</strong> (koncerty, otváracie hodiny, výluky, zmeny programu)</li>
      </ul>

      <h3>👉 Prečo sa to deje</h3>
      <p>Toto je dôležité pochopiť, lebo potom ti bude jasné, kedy AI veriť a kedy nie.</p>
      <ul>
        <li>web sa mení rýchlo a nie všetky zdroje sú rovnako aktuálne</li>
        <li>AI nie vždy automaticky používa web search – niekedy ide len „z hlavy"</li>
        <li>keď ide „z hlavy", môže dopĺňať medzery tak, aby odpoveď dávala zmysel</li>
        <li>aj keď používa web, môže vytiahnuť slabý zdroj alebo starú stránku a zhrnúť to ako keby to bolo pravidlo</li>
      </ul>
      <p>To je presne ten typ chyby, ktorý je nebezpečný: odpoveď znie normálne, ale ty nevieš, či je aktuálna.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <p><strong>👉 Najčastejšie pasce</strong></p>
      <ul>
        <li>odpoveď bez dátumu vyzerá „aktuálne", ale nemusí byť</li>
        <li>AI neoznačí neistotu a dá to ako hotový fakt</li>
        <li>AI zhrnie pravidlo, ale vynechá výnimku, ktorá je pre teba kľúčová</li>
        <li>AI zamieša viac zdrojov a spraví z toho jednu hladkú odpoveď</li>
      </ul>
      <p><strong>👉 Praktické pravidlo</strong></p>
      <ul>
        <li>ak je otázka „čo platí dnes", bez zdroja a dátumu to neber ako fakt</li>
        <li>ak to ideš ďalej použiť (poslať, zdieľať, rozhodnúť sa), over aspoň 1 kľúčový bod priamo v zdroji</li>
        <li>ak ide o peniaze, termíny alebo pravidlá, radšej sa spoliehaj na oficiálny web</li>
      </ul>

      <p><strong>💡 Tip do praxe:</strong> prompt, ktorý spraví z AI použiteľný nástroj aj na aktuálne info</p>
      <p>Toto je jednoduchý doplnok, ktorý si môžeš skopírovať ku každej „aktuálnej" otázke. Nie je dlhý, ale núti AI spraviť tri dôležité veci: zdroj, dátum a neistotu.</p>
      <p><em>„Odpovedaj len podľa webu (ak nemáš web, povedz to). Uveď zdroje a dátum pri každom bode. Ak si nie si istý, napíš 'neviem' a povedz, čo treba overiť."</em></p>
      <p>👉 Týmto sa zmení dynamika: AI už nemá priestor „len pekne odpovedať", ale musí sa opierať o niečo konkrétne.</p>

      <MiniTask title="slabý prompt vs dobrý prompt (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš si vybrať cestovné poistenie na dovolenku, ale nechceš stráviť večer googlením a čítaním dlhých článkov.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1</strong></p>
        <p>„Aké cestovné poistenie je najlepšie? Odporuč mi niečo."</p>
        <p><strong>✔️ Prompt 2</strong></p>
        <p>„Odporuč mi cestovné poistenie na 7 dní do Talianska. Kontext: cestujem s partnerkou, máme v pláne aj hory (ľahká turistika), nechceme nič extrémne. Priority: (1) liečebné náklady, (2) asistencia, (3) krytie storna. Deal-breaker: nech to nemá zbytočné výluky na bežné veci. Úloha: Navrhni 3 možnosti/typy poistenia (nie značky). Pri každom: 2× prečo áno, 1× prečo nie, 1 riziko. Na konci mi polož 1 otázku, ktorá mi pomôže rozhodnúť. Formát: krátka tabuľka."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Dala AI pri Prompt 2 odpoveď podľa mojich priorít, alebo ostala všeobecná?</li>
          <li>Je výstup z Promptu 2 použiteľný hneď, alebo by som ho musel prerábať?</li>
          <li>Položila AI na konci 1 otázku, ktorá reálne pomáha rozhodnúť?</li>
          <li>Sú pri Prompt 2 jasne uvedené aj riziká a „prečo nie", alebo je to len pozitívne?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 dá konkrétnejší a použiteľnejší výstup, lebo má kontext, priority a deal-breaker.</p>
        <p>Prompt 1 skončí skôr ako všeobecné rady, ktoré si aj tak budeš musieť preložiť do svojej situácie.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00E9 2 ot\u00E1zky s\u00FA typick\u00E9 \u201Evyh\u013Ead\u00E1vacie ot\u00E1zky\u201C, kde potrebuje\u0161 da\u0165 AI \u010Dasov\u00FD r\u00E1mec a zdroje? Vyber 2.`}
        options={[
          { label: "\uD83C\uDF15", text: `\u201EVysvetli mi, \u010Do je infl\u00E1cia, ako keby som mal 12 rokov.\u201C` },
          { label: "⭐", text: `\u201EAk\u00E9 s\u00FA aktu\u00E1lne ceny roamingu v E\u00DA pre oper\u00E1tora X?\u201C` },
          { label: "☀️", text: `\u201EZhr\u0148 mi najnov\u0161ie zmeny v pravidl\u00E1ch pr\u00EDru\u010Dnej bato\u017Einy pre Ryanair (a uve\u010F zdroj).\u201C` },
          { label: "\uD83C\uDF11", text: `\u201ENavrhni mi 5 tipov na r\u00FDchle zdrav\u00E9 ra\u0148ajky.\u201C` },
          { label: "\uD83C\uDF20", text: `\u201EVymysli mi n\u00E1pady na v\u00EDkend v Prahe, ak nechcem davy.\u201C` },
        ]}
        correct="⭐☀️"
        explanation="⭐ a ☀️ sú otázky na aktuálne fakty, ktoré sa menia a treba ich opierať o zdroj a dátum."
      />
    </PageShell>
  );
}
