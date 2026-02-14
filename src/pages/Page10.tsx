import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Page10() {
  const nav = getNavContext("10-etika-ai-act");
  return (
    <PageShell
      title="🔟 Etika, riziká a EÚ AI Act: ako používať AI zodpovedne"
      {...nav}
    >
      <p><em>Toto je uzatváracia časť M1. Vracia nás späť na zem a nastavuje zdravé hranice používania AI.</em></p>

      <h2>Prečo je táto sekcia dôležitá?</h2>
      <p>
        AI vie pôsobiť veľmi presvedčivo. Práve preto je dôležité rozumieť jej <strong>limitom, chybám a rizikám</strong>. Zodpovedné používanie AI nie je o strachu, ale o <strong>správnom nastavení očakávaní a kontroly</strong>.
      </p>

      <h2>Dáta a súkromie: čo do AI nikdy nepatrí! 🚫</h2>
      <p>Nikdy nezdieľaj:</p>
      <ul>
        <li>osobné údaje (PII)</li>
        <li>citlivé firemné informácie</li>
        <li>zdravotné, právne alebo finančné dáta</li>
      </ul>
      <p>👉 Platí jednoduché pravidlo: <strong>Čo by si neposlal cudziemu človeku, nedávaj ani AI.</strong></p>

      <h2>Etika a hranice používania ⚖️</h2>
      <p>AI je vhodná ako pomocník pri:</p>
      <ul>
        <li>tvorbe obsahu</li>
        <li>brainstormingu</li>
        <li>sumarizácii</li>
        <li>technickej podpore</li>
      </ul>
      <p>AI <strong>nie je vhodná</strong> bez ľudskej kontroly pri:</p>
      <ul>
        <li>medicínskych rozhodnutiach</li>
        <li>právnych radách</li>
        <li>finančných odporúčaniach</li>
        <li>hodnotení ľudí</li>
      </ul>
      <p>👉 Ak môže chyba spôsobiť škodu, <strong>človek musí rozhodovať</strong>.</p>

      <h2>Zodpovedné používanie v praxi ✅</h2>
      <p>Pred použitím AI sa vždy spýtaj:</p>
      <ul>
        <li>Potrebujem tu AI?</li>
        <li>Je výstup kritický?</li>
        <li>Viem ho overiť?</li>
        <li>Nesiem zaň zodpovednosť?</li>
      </ul>
      <p>Toto mentálne nastavenie je dôležitejšie než výber nástroja.</p>

      <h2>Základný princíp EU AI Act:</h2>
      <p>Regulácia je postavená na rizikovom prístupe – čím väčšie riziko pre ľudí a spoločnosť, tým prísnejšie pravidlá.</p>
      <p>Niektoré praktiky sú zakázané úplne, iné podliehajú prísnym kontrolám a transparentnosti.</p>
      <p>Cieľom EU AI Act nie je zastaviť inovácie, ale nastaviť jasné hranice, aby sa AI používala bezpečne, férovo a zodpovedne.</p>

      <h3>🚥 Rozdelenie AI podľa rizika</h3>

      <h3>🚫 Zakázané praktiky (Unacceptable risk)</h3>
      <p>Tieto systémy sú úplne zakázané, bez výnimiek:</p>
      <ul>
        <li><strong>manipulácia</strong> správania ľudí (napr. zraniteľných skupín),</li>
        <li><strong>sociálne skórovanie</strong> občanov,</li>
        <li><strong>rozpoznávanie emócií</strong> v školách a na pracoviskách,</li>
        <li>niektoré formy <strong>biometrickej identifikácie</strong> v reálnom čase.</li>
      </ul>
      <p>👉 Pokuty až <strong>35 miliónov €</strong> alebo <strong>7 %</strong> celosvetového ročného obratu (podľa toho, čo je vyššie).</p>

      <h3>⚠️ Vysokorizikové systémy (High-risk AI)</h3>
      <p><strong>Povolené, ale prísne regulované.</strong> Patria sem AI systémy používané napríklad v:</p>
      <ul>
        <li>zdravotníctve,</li>
        <li>vzdelávaní,</li>
        <li>nábore zamestnancov,</li>
        <li>bankovníctve a úveroch,</li>
        <li>kritickej infraštruktúre,</li>
        <li>verejnej správe.</li>
      </ul>
      <p><strong>Povinnosti:</strong></p>
      <ul>
        <li>kvalitné a nediskriminačné dáta,</li>
        <li>dokumentácia a vysvetliteľnosť,</li>
        <li>ľudský dohľad,</li>
        <li>riadenie rizík a testovanie.</li>
      </ul>
      <p>👉 Pokuty do <strong>15 miliónov €</strong> alebo <strong>3 %</strong> celosvetového obratu.</p>

      <h3>❗ Obmedzené riziko (Limited risk)</h3>
      <p>Sem patria najmä:</p>
      <ul>
        <li>chatboty,</li>
        <li>generovanie textu, obrazu, hlasu.</li>
      </ul>
      <p>Povinnosťou je transparentnosť:</p>
      <ul>
        <li>používateľ musí vedieť, že komunikuje s AI,</li>
        <li>pri generovanom obsahu má byť jasne označené, že je vytvorený AI.</li>
      </ul>
      <p>👉 Pokuty do <strong>7,5 milióna €</strong> alebo <strong>1,5 %</strong> obratu.</p>

      <h3>✅ Minimálne riziko (Minimal risk)</h3>
      <p>Bežné AI použitie:</p>
      <ul>
        <li>odporúčacie algoritmy,</li>
        <li>filtrovanie spamu,</li>
        <li>herné AI,</li>
        <li>základné AI funkcie v aplikáciách.</li>
      </ul>
      <p>👉 Bez nových povinností, len dobrovoľné etické odporúčania.</p>

      <h2>Časová os EU AI Act:</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dátum</TableHead>
            <TableHead>Udalosť</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell>21. 4. 2021</TableCell><TableCell>Európska komisia predstavuje návrh EU AI Act</TableCell></TableRow>
          <TableRow><TableCell>8. 12. 2023</TableCell><TableCell>Politická dohoda medzi EK, Radou EÚ a EP</TableCell></TableRow>
          <TableRow><TableCell>13. 3. 2024</TableCell><TableCell>Schválenie EU AI Act Európskym parlamentom</TableCell></TableRow>
          <TableRow><TableCell>21. 5. 2024</TableCell><TableCell>Formálne prijatie Radou EÚ</TableCell></TableRow>
          <TableRow><TableCell>12. 7. 2024</TableCell><TableCell>Zverejnenie v Úradnom vestníku EÚ</TableCell></TableRow>
          <TableRow><TableCell>1. 8. 2024</TableCell><TableCell>Nadobudnutie platnosti (začiatok prechodných období)</TableCell></TableRow>
          <TableRow><TableCell>2. 2. 2025</TableCell><TableCell>Zákaz neprijateľných praktík (sociálne skórovanie, manipulácia, rozpoznávanie emócií na pracoviskách a v školách)</TableCell></TableRow>
          <TableRow><TableCell>2. 8. 2025</TableCell><TableCell>Povinnosti pre generatívne a GPAI modely + AI gramotnosť</TableCell></TableRow>
          <TableRow><TableCell>2. 8. 2026</TableCell><TableCell>Plná účinnosť pre vysokorizikové AI systémy</TableCell></TableRow>
        </TableBody>
      </Table>

      <p className="mt-4">EU AI Act nevychádza zo strachu z AI, ale z reality.</p>
      <p>Čím väčší dopad môže mať chyba AI na človeka, tým prísnejšie pravidlá platia.</p>

      <h2>Čo si z tejto sekcie odniesť? 🎯</h2>
      <ul>
        <li>AI nie je neomylná</li>
        <li>presvedčivosť nie je dôkaz pravdy</li>
        <li>zodpovednosť zostáva vždy na človeku</li>
        <li>etika nie je voliteľná výbava</li>
      </ul>
      <p>👉 <strong>AI asistuje. Človek rozhoduje.</strong></p>

      <MiniTest
        question="Ktoré použitie AI je najzodpovednejšie z pohľadu súkromia? Situácia: Chceš si uľahčiť prácu a použiť AI, ale nechceš zdieľať nič citlivé. Vyber, ktorá možnosť (🌕 /⭐ /☀️) je najlepšia."
        options={[
          { label: "🌕", text: '„Prepíšem problém do AI bez osobných údajov (bez mien, adries, čísel, interných citlivých info). Ak potrebujem príklad, použijem vymyslené údaje alebo anonymizáciu."' },
          { label: "⭐", text: '„Hodím do AI screenshot dokumentu, kde sú osobné údaje. Veď je to len na chvíľu a nikto to neuvidí."' },
          { label: "☀️", text: '„Skopírujem do AI celý e-mail od zákazníka aj s menom, adresou a číslom objednávky, nech mi z toho spraví odpoveď."' },
        ]}
        correct="🌕"
        explanation="Platí jednoduché pravidlo — čo by si neposlal cudziemu človeku, nedávaj ani AI. Citlivé údaje treba odstrániť alebo anonymizovať."
      />
    </PageShell>
  );
}
