import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Page10() {
  const nav = getNavContext("10-etika-ai-act");
  return (
    <PageShell
      title="🔟 Etika, riziká a EU AI Act"
      tldr={[
        "Do AI nikdy nedávaj osobné údaje, citlivé firemné ani zdravotné dáta",
        "Ak môže chyba spôsobiť škodu, človek musí rozhodovať",
        "EU AI Act reguluje AI podľa rizikového prístupu – 4 kategórie",
        "Niektoré AI praktiky sú úplne zakázané (sociálne skórovanie, manipulácia)",
        "AI asistuje. Človek rozhoduje.",
      ]}
      {...nav}
    >
      <h2>⚠️ Prečo je táto sekcia dôležitá?</h2>
      <p>
        AI vie pôsobiť veľmi presvedčivo. Práve preto je dôležité rozumieť jej limitom, chybám a rizikám.
        Zodpovedné používanie AI nie je o strachu, ale o správnom nastavení očakávaní a kontroly.
      </p>

      <h2>🚫 Dáta a súkromie: čo do AI nikdy nepatrí!</h2>
      <p>Nikdy nezdieľaj:</p>
      <ul>
        <li>osobné údaje (PII)</li>
        <li>citlivé firemné informácie</li>
        <li>zdravotné, právne alebo finančné dáta</li>
      </ul>
      <p>👉 Platí jednoduché pravidlo: Čo by si neposlal cudziemu človeku, nedávaj ani AI.</p>

      <h2>⚖️ Etika a hranice používania</h2>
      <p>AI je vhodná ako pomocník pri:</p>
      <ul>
        <li>tvorbe obsahu</li>
        <li>brainstormingu</li>
        <li>sumarizácii</li>
        <li>technickej podpore</li>
      </ul>
      <p>AI nie je vhodná bez ľudskej kontroly pri:</p>
      <ul>
        <li>medicínskych rozhodnutiach</li>
        <li>právnych radách</li>
        <li>finančných odporúčaniach</li>
        <li>hodnotení ľudí</li>
      </ul>
      <p>👉 Ak môže chyba spôsobiť škodu, človek musí rozhodovať.</p>

      <h2>✅ Zodpovedné používanie v praxi</h2>
      <p>Pred použitím AI sa vždy spýtaj:</p>
      <ul>
        <li>Potrebujem tu AI?</li>
        <li>Je výstup kritický?</li>
        <li>Viem ho overiť?</li>
        <li>Nesiem zaň zodpovednosť?</li>
      </ul>
      <p>Toto mentálne nastavenie je dôležitejšie než výber nástroja.</p>

      <h2>🇪🇺 EU AI Act</h2>
      <p>
        Regulácia je postavená na rizikovom prístupe – čím väčšie riziko pre ľudí a spoločnosť,
        tým prísnejšie pravidlá. Cieľom EU AI Act nie je zastaviť inovácie, ale nastaviť jasné hranice.
      </p>

      <h3>🚥 Rozdelenie AI podľa rizika</h3>

      <h3>🚫 Zakázané praktiky (Unacceptable risk)</h3>
      <p>Úplne zakázané, bez výnimiek:</p>
      <ul>
        <li>manipulácia správania ľudí (napr. zraniteľných skupín)</li>
        <li>sociálne skórovanie občanov</li>
        <li>rozpoznávanie emócií v školách a na pracoviskách</li>
        <li>niektoré formy biometrickej identifikácie v reálnom čase</li>
      </ul>
      <p>👉 Pokuty až 35 miliónov € alebo 7 % celosvetového ročného obratu.</p>

      <h3>⚠️ Vysokorizikové systémy (High-risk AI)</h3>
      <p>Povolené, ale prísne regulované. Patria sem AI v:</p>
      <ul>
        <li>zdravotníctve, vzdelávaní, nábore zamestnancov</li>
        <li>bankovníctve a úveroch</li>
        <li>kritickej infraštruktúre, verejnej správe</li>
      </ul>
      <p>Povinnosti: kvalitné dáta, dokumentácia a vysvetliteľnosť, ľudský dohľad, riadenie rizík.</p>
      <p>👉 Pokuty do 15 miliónov € alebo 3 % celosvetového obratu.</p>

      <h3>❗ Obmedzené riziko (Limited risk)</h3>
      <p>Chatboty, generovanie textu, obrazu, hlasu. Povinnosťou je transparentnosť:</p>
      <ul>
        <li>používateľ musí vedieť, že komunikuje s AI</li>
        <li>generovaný obsah má byť jasne označený</li>
      </ul>
      <p>👉 Pokuty do 7,5 milióna € alebo 1,5 % obratu.</p>

      <h3>✅ Minimálne riziko (Minimal risk)</h3>
      <p>Bežné AI použitie: odporúčacie algoritmy, filtrovanie spamu, herné AI.</p>
      <p>👉 Bez nových povinností, len dobrovoľné etické odporúčania.</p>

      <h2>📅 Časová os EU AI Act</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dátum</TableHead>
            <TableHead>Udalosť</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell>1.4.2021</TableCell><TableCell>Európska komisia predstavuje návrh EU AI Act</TableCell></TableRow>
          <TableRow><TableCell>8.12.2023</TableCell><TableCell>Politická dohoda medzi EK, Radou EÚ a EP</TableCell></TableRow>
          <TableRow><TableCell>13.3.2024</TableCell><TableCell>Schválenie EU AI Act Európskym parlamentom</TableCell></TableRow>
          <TableRow><TableCell>21.5.2024</TableCell><TableCell>Formálne prijatie Radou EÚ</TableCell></TableRow>
          <TableRow><TableCell>12.7.2024</TableCell><TableCell>Zverejnenie v Úradnom vestníku EÚ</TableCell></TableRow>
          <TableRow><TableCell>1.8.2024</TableCell><TableCell>Nadobudnutie platnosti</TableCell></TableRow>
          <TableRow><TableCell>2.2.2025</TableCell><TableCell>Zákaz neprijateľných praktík</TableCell></TableRow>
          <TableRow><TableCell>2.8.2025</TableCell><TableCell>Povinnosti pre generatívne a GPAI modely + AI gramotnosť</TableCell></TableRow>
          <TableRow><TableCell>2.8.2026</TableCell><TableCell>Plná účinnosť pre vysokorizikové AI systémy</TableCell></TableRow>
        </TableBody>
      </Table>

      <p className="mt-4">EU AI Act nevychádza zo strachu z AI, ale z reality. Čím väčší dopad môže mať chyba AI na človeka, tým prísnejšie pravidlá platia.</p>

      <h2>🎯 Čo si z tejto sekcie odniesť?</h2>
      <ul>
        <li>AI nie je neomylná</li>
        <li>presvedčivosť nie je dôkaz pravdy</li>
        <li>zodpovednosť zostáva vždy na človeku</li>
        <li>etika nie je voliteľná výbava</li>
      </ul>
      <p>👉 AI asistuje. Človek rozhoduje.</p>

      <MiniTest
        question="Ktoré použitie AI je najzodpovednejšie z pohľadu súkromia? Situácia: Chceš si uľahčiť prácu a použiť AI, ale nechceš zdieľať nič citlivé."
        options={[
          { label: "🌕", text: '„Prepíšem problém do AI bez osobných údajov. Ak potrebujem príklad, použijem vymyslené údaje alebo anonymizáciu."' },
          { label: "⭐", text: '„Hodím do AI screenshot dokumentu s osobnými údajmi. Veď je to len na chvíľu."' },
        ]}
        correct="🌕"
        explanation="Platí jednoduché pravidlo — čo by si neposlal cudziemu človeku, nedávaj ani AI. Citlivé údaje treba odstrániť alebo anonymizovať."
      />
    </PageShell>
  );
}
