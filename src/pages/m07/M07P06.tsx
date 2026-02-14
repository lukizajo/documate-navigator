import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding, PromptBlock } from "@/components/ContentBlocks";

export default function M07P06() {
  const nav = getNavContext("m07-06-sukromie");
  return (
    <PageShell title="5️⃣ Súkromie a bezpečnosť v osobnom živote" {...nav}>

      <p>V osobnom živote sa AI často dotýka vecí, ktoré sú citlivé: zdravie, financie, vzťahy, deti, adresa, fotky, konflikty. Práve preto tu platí jednoduché pravidlo:</p>
      <p><strong>Čím osobnejšia téma, tým viac anonymizovať a tým viac kontrolovať.</strong></p>
      <p>AI je skvelá na návrhy, štruktúru a vysvetlenie. Nie je dobrá na rozhodnutia tam, kde by jedna chyba mohla ublížiť.</p>

      <h3>🧩 Typické situácie, kde ľudia najčastejšie „prestrelia"</h3>

      <p>🧑‍⚕️ <strong>{"\u201EMám zdravotný problém a chcem, aby mi AI povedala diagnózu alebo liečbu.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI bezpečne:</strong> pomôže ti pripraviť otázky pre lekára alebo vysvetliť pojmy z výsledkov.</p>
      <p><strong>Výstup:</strong> zoznam otázok + vysvetlenie termínov do ľudskej reči.</p>
      <PromptBlock>
        <p>„Vysvetli mi tieto pojmy jednoduchšie: ___. Potom mi sprav zoznam 8 otázok, ktoré sa mám spýtať lekára. Neurčuj diagnózu ani liečbu."</p>
      </PromptBlock>

      <p>💳 <strong>{"\u201EChcem, aby mi AI pomohla pochopiť výpis/zmluvu, ale nechcem zdieľať citlivé údaje.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI bezpečne:</strong> najprv ti dá checklist anonymizácie a šablónu, ako to vložiť bezpečne, až potom sa pýta na detaily.</p>
      <p><strong>Výstup:</strong> checklist anonymizácie + šablóna promptu + čo má AI z textu vyťažiť.</p>
      <PromptBlock>
        <p>„Chcem, aby si mi pomohol/a pochopiť text z výpisu/zmluvy, ale bez citlivých údajov. Najprv mi napíš checklist: ktoré typy údajov mám vždy anonymizovať (konkrétne príklady). Potom mi daj šablónu, ako ti to mám poslať bezpečne (placeholdery typu OSOBA_A, ÚČET_X) a aký výstup od teba chcem: zhrnutie, rizikové body, otázky. Až potom sa ma spýtaj, aký typ dokumentu mám (výpis/zmluva/faktúra) a čo presne chcem zistiť."</p>
      </PromptBlock>

      <p>👨‍👩‍👧 <strong>{"\u201EChcem nahrať fotku dieťaťa a nech mi AI poradí…\u201C"}</strong></p>
      <p><strong>Ako pomôže AI bezpečne:</strong> často stačí popis situácie bez identifikovateľnej fotky.</p>
      <p><strong>Výstup:</strong> všeobecné odporúčania + hranice, kedy už riešiť odborníka.</p>
      <PromptBlock>
        <p>„Chcem riešiť situáciu s dieťaťom. Nepotrebujem diagnostiku. Popis: vek ___, situácia ___, cieľ ___. Daj mi 5 nápadov, ako to riešiť citlivo a prakticky. Pridaj, kedy mám radšej vyhľadať odborníka."</p>
      </PromptBlock>

      <p>💬 <strong>{"\u201ERiešim konflikt vo vzťahu a chcem AI poslať celé správy a mená.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI bezpečne:</strong> pomôže s formuláciou a tónom bez identifikátorov a bez preposielania celých chatov.</p>
      <p><strong>Výstup:</strong> 3 verzie správy + návrh hraníc v komunikácii.</p>
      <PromptBlock>
        <p>„Pomôž mi napísať správu do konfliktného rozhovoru. Použi anonymizované označenia (ja/partner). Popis situácie: ___. Čo chcem dosiahnuť: ___. Daj 3 verzie: jemná, neutrálna, priama. Pridaj 2 vety, ktoré nastavujú hranicu bez útoku."</p>
      </PromptBlock>

      <p>📍 <strong>{"\u201EChcem dať AI adresu, čísla dokladov alebo iné presné identifikátory.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI bezpečne:</strong> vo väčšine prípadov ich nepotrebuje — stačia všeobecné údaje a cieľ.</p>
      <p><strong>Výstup:</strong> odporúčanie, čo nahradiť placeholdermi + bezpečnejšia verzia textu.</p>
      <PromptBlock>
        <p>„Skontroluj môj text a povedz mi, aké citlivé údaje v ňom mám nahradiť placeholdermi. Potom navrhni bezpečnejšiu verziu toho istého textu."</p>
      </PromptBlock>

      <h3>🔐 Praktické pravidlá: čo nezadávať a ako anonymizovať</h3>
      <p>✅ <strong>Anonymizuj vždy</strong></p>
      <ul>
        <li>mená ľudí (nahraď „partner", „kolega", „dieťa")</li>
        <li>adresy a presnú polohu</li>
        <li>čísla dokladov, bankové údaje, čísla kariet</li>
        <li>identifikovateľné fotky ľudí (najmä detí)</li>
        <li>celé chaty/screenshoty s osobnými údajmi</li>
      </ul>
      <p>✅ <strong>Bezpečný trik</strong></p>
      <ul>
        <li>Namiesto „tu je môj výpis" → „tu je anonymizovaný výpis/výňatok a chcem pochopiť štruktúru a rizikové body"</li>
        <li>Namiesto „čo mám brať?" → „aké otázky sa mám spýtať odborníka a čo sledovať?"</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>AI nie je súkromná spoveď – čo jej dáš, môže byť citlivé</li>
        <li>Pri zdraví, financiách a deťoch používaj AI na vysvetlenie a prípravu otázok, nie na rozhodnutie</li>
        <li>Ak máš nutkanie poslať „všetko", je to signál spomaliť a anonymizovať</li>
        <li>Ak AI tvrdí niečo „na 100 %", je to červená vlajka – vypýtaj si zdroje alebo si to over</li>
      </ul>

      <MiniTask title="Odhaľ phishing za 5 min">
        <p><strong>Zadanie</strong></p>
        <p>Použi AI ako bezpečnostného parťáka: nahraj <strong>obrázok (screenshot) e-mailu</strong>, ktorý ti prišiel, a nech ti pomôže vyhodnotiť, či ide o phishing.</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Otvor e-mail, ale <strong>na nič neklikaj</strong> (žiadne odkazy, tlačidlá, prílohy).</li>
          <li>Sprav screenshot e-mailu tak, aby bolo vidno: odosielateľa (meno aj adresa), predmet, hlavný text, prípadný odkaz/tlačidlo (len vizuálne).</li>
          <li>Nahraj obrázok do AI a použi prompt nižšie.</li>
          <li>Ak AI povie, že je to podozrivé, sprav odporúčaný bezpečný postup.</li>
        </ol>
        <p><strong>Prompt na skopírovanie</strong></p>
        <p>„Pozri sa na tento obrázok e-mailu a vyhodnoť, či ide o phishing. Chcem od teba: 1. Zhrnutie v 1 vete: legit / podozrivé / neviem. 2. Konkrétne red flags, ktoré na obrázku vidíš (min. 5), rozdeľ na: odosielateľ, jazyk, urgentnosť, odkazy, prílohy, dizajn. 3. Čo mám urobiť bezpečne krok za krokom (bez klikania na nič v e-maile). 4. Čo určite nemám robiť. 5. Ako by vyzerala legitímna verzia tejto komunikácie (ako by to napísala reálna banka/služba). Na konci mi daj 3 pravidlá, ktoré si mám zapamätať."</p>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>verdikt legit/podozrivé/neviem</li>
          <li>zoznam red flags (aspoň 5)</li>
          <li>bezpečný postup krok za krokom</li>
          <li>3 pravidlá, ktoré si zapamätáš</li>
        </ul>
        <p><strong>💡 Tip do praxe:</strong> Ak chceš byť extra istý, môžeš do AI dopísať: „Nepýtaj odo mňa žiadne osobné údaje, pracuj len s tým, čo vidíš na obrázku."</p>
      </MiniTask>
    </PageShell>
  );
}
