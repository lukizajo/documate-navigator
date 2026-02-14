import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M07P05() {
  const nav = getNavContext("m07-05-deti");
  return (
    <PageShell title="4️⃣ AI a deti" {...nav}>

      <p>AI vie byť doma užitočná aj pri deťoch – najmä ako pomocník na vysvetľovanie, nápady a učenie. Zároveň je to oblasť, kde sa dá veľmi rýchlo spraviť chyba: priveľa zdieľania, priveľa dôvery alebo používanie AI ako „digitálneho rodiča".</p>
      <p>Tu platí jednoduché pravidlo:</p>
      <p><strong>AI je doma pomocník, nie babysitter.</strong></p>
      <p>A keď ide o deti, vždy platí: <strong>súkromie, bezpečnosť a vek primeranosť</strong>.</p>

      <h3>🧩 Typické situácie, kde AI vie pomôcť</h3>

      <p>📚 <strong>{"\u201EDieťaťu to neviem vysvetliť tak, aby to pochopilo.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> preloží učivo do jednoduchého jazyka, dá metaforu a príklad zo života.</p>
      <p><strong>Výstup:</strong> vysvetlenie + 3 príklady + 3 otázky na pochopenie.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Vysvetli dieťaťu (vek ___) tému ___ jednoducho. Použi prirovnanie zo života, daj 3 príklady a na konci 3 otázky, či to pochopilo."</p>

      <p>🧠 <strong>{"\u201EChcem pomôcť s učením, ale nechcem, aby si len kopírovalo odpovede.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> dá postup, nápovedy a tréningové otázky namiesto hotovej odpovede.</p>
      <p><strong>Výstup:</strong> krokový postup + nápovedy + mini-test.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Pomôž dieťaťu (vek ___) s úlohou ___, ale nedávaj hotovú odpoveď. Daj postup v krokoch, 3 nápovedy a 5 otázok na precvičenie."</p>

      <p>🎒 <strong>{"\u201ERáno chaos – pripraviť sa do školy, veci, režim.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> vytvorí jednoduchý checklist a rutinu podľa toho, čo dieťa reálne zvládne.</p>
      <p><strong>Výstup:</strong> ranný checklist + večerná príprava + 1–2 motivátory.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Pomôž mi spraviť rannú rutinu pre dieťa (vek ___). Problém: ___ (napr. nestíha, zabúda veci, nechce sa obliekať). Daj krátky checklist na ráno + 5-min večernú prípravu. Nech je to realistické a jednoduché."</p>

      <p>🎨 <strong>{"\u201EChcem vymyslieť program s deťmi bez mobilu.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> navrhne aktivity podľa veku, času a energie.</p>
      <p><strong>Výstup:</strong> 10 aktivít + čo treba pripraviť + trvanie.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Navrhni 10 aktivít bez mobilu pre dieťa/deti (vek ___). Čas: __ min. Energia: nízka/stredná/vysoká. Daj aj 'čo potrebujem' a vyber top 3, ktoré sú najjednoduchšie."</p>

      <p>💬 <strong>{"\u201ENeviem, ako sa s dieťaťom porozprávať o citlivej téme.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> pripraví návrh rozhovoru primeraný veku, bez strašenia.</p>
      <p><strong>Výstup:</strong> 5 viet ako začať + 5 otázok + čo nerobiť.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Pomôž mi pripraviť rozhovor s dieťaťom (vek ___) na tému ___. Chcem to citlivo a veku primerane. Daj 5 viet ako začať, 5 otázok a 5 vecí, ktorým sa vyhnúť."</p>

      <h3>🔐 Pravidlá doma: bezpečné používanie AI s deťmi</h3>
      <p>✅ <strong>Používaj AI spolu s dieťaťom, nie namiesto dieťaťa</strong></p>
      <ul>
        <li>AI je na vysvetlenie a tréning, nie na kopírovanie odpovedí</li>
      </ul>
      <p>✅ <strong>Fotky a údaje o deťoch radšej nezdieľaj</strong></p>
      <ul>
        <li>ak sa dá, použi popis situácie namiesto fotky</li>
        <li>žiadne mená, škola, adresa, presné údaje</li>
      </ul>
      <p>✅ <strong>Uč dieťa kriticky rozmýšľať</strong></p>
      <ul>
        <li>„AI môže klamať" je dôležitá veta už od mala</li>
        <li>pýtaj sa: „Ako to vieme? Kde by sme to overili?"</li>
      </ul>
      <p>✅ <strong>Stanov hranice</strong></p>
      <ul>
        <li>kedy AI áno (učenie, nápady, vysvetlenie)</li>
        <li>kedy AI nie (emočné výlevy, osobné údaje, riešenie konfliktov za dieťa)</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>AI môže pôsobiť ako autorita – preto dieťa uč, že je to len nástroj</li>
        <li>Nenechávaj dieťa s AI bez dohľadu pri citlivých témach</li>
        <li>Ak AI dá zlú radu, je to na tebe to zachytiť – vždy kontroluj výstup</li>
        <li>Nepoužívaj AI ako „odmenu za ticho" – radšej ako spoločný nástroj</li>
      </ul>

      <MiniTask title="Slovná úloha s jablkami">
        <p><strong>Zadanie</strong></p>
        <p>Vyrieš slovnú úlohu s pomocou AI tak, aby ti dala <strong>postup a nápovedy</strong>, nie hotové riešenie.</p>
        <p><strong>Slovná úloha</strong></p>
        <p>„V košíku bolo 24 jabĺk. Peter zjedol 3 jablká a potom mama dokúpila ešte 8 jabĺk. Neskôr sa 5 jabĺk rozdelilo medzi dvoch súrodencov rovným dielom. Koľko jabĺk zostalo v košíku a koľko jabĺk dostal každý súrodenec?"</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Skopíruj prompt nižšie do AI</li>
          <li>Odpovedaj na otázky, ktoré sa ťa AI opýta (len ak si potrebuje niečo ujasniť)</li>
          <li>Rieš to sám podľa nápovied</li>
          <li>Nechaj si výsledok skontrolovať</li>
        </ol>
        <p><strong>Prompt na skopírovanie</strong></p>
        <p>„Pomôž mi vyriešiť túto slovnú úlohu ako tútor. Úloha: 'V košíku bolo 24 jabĺk. Peter zjedol 3 jablká a mama dokúpila 8. Potom sa 5 jabĺk rozdelilo medzi dvoch súrodencov rovným dielom. Koľko jabĺk zostalo v košíku a koľko dostal každý súrodenec?' Pravidlá: Nedávaj mi hneď výsledok; Najprv mi polož 2–3 otázky, či som správne pochopil zadanie; Potom mi daj postup v krokoch a 3 nápovedy; Ja ti napíšem svoj výpočet a ty mi ho len skontroluješ a opravíš chyby; Na konci mi vysvetli, kde ľudia robia v tejto úlohe najčastejšiu chybu"</p>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>2–3 otázky na pochopenie zadania</li>
          <li>postup + 3 nápovedy</li>
          <li>tvoj výpočet</li>
          <li>kontrola + upozornenie na typickú chybu</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
