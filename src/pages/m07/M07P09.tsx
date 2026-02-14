import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { ExpectedFinding } from "@/components/ContentBlocks";

export default function M07P09() {
  const nav = getNavContext("m07-09-prakticka-uloha");
  return (
    <PageShell title="🎓 Praktická úloha – Zrozumiteľný preklad zmluvy / podmienok" {...nav}>

      <p>Cieľom tejto úlohy je ukázať, že AI vie byť super pomocník pri „právničine" a dlhých textoch — <strong>ale bezpečne</strong>. Teda tak, aby si do nej neposielal osobné údaje ani celé citlivé dokumenty.</p>

      <h3>Zadanie</h3>
      <p>Predstav si, že sa rozhoduješ, či súhlasíš s podmienkami služby (napr. aplikácia, e-shop, streamovacia služba, poistenie, členstvo).</p>
      <p><strong>Použi tento modelový scenár (aby nikto nemusel vymýšľať):</strong></p>
      <p>„Chcem pochopiť Všeobecné obchodné podmienky služby, aby som vedel: koľko a kedy platím, ako sa ruší predplatné, čo sa stane pri reklamácii / vrátení, a na čo si mám dať pozor (výluky, pokuty, automatické predĺženie)."</p>
      <p><strong>Dôležité pravidlo:</strong></p>
      <p>Neposielaj do AI celé dokumenty so svojimi údajmi. Pracuj buď:</p>
      <ul>
        <li>s verejne dostupnými VOP (bez tvojich údajov), alebo</li>
        <li>s krátkym výňatkom (max pár odstavcov) a bez identifikátorov.</li>
      </ul>

      <h3>Kroky</h3>
      <ol>
        <li>Vyber si jeden text: VOP e-shopu, kde si niekedy nakupoval, alebo podmienky predplatného (stream, appka), alebo podmienky poistenia (verejná stránka), alebo ak nič nemáš, použi ľubovoľné verejné VOP, ktoré nájdeš online.</li>
        <li>Skopíruj len <strong>relevantnú časť</strong> (napr. storno, platby, reklamácie) alebo vlož 2–5 odstavcov.</li>
        <li>Použi prompt nižšie.</li>
        <li>Zober výstup a urob z neho vlastné „ľudské poznámky": 10 bodov, ktoré si zapamätáš.</li>
        <li>Na záver nechaj AI spraviť „otázky, ktoré si mám overiť pred súhlasom".</li>
      </ol>

      <h3>Prompt na skopírovanie</h3>
      <p>„Pomôž mi pochopiť zmluvu/VOP bezpečne. Najprv mi napíš checklist: aké údaje mám vždy anonymizovať alebo vôbec neposielať (konkrétne príklady). Potom mi povedz, aké časti z VOP sa oplatí skopírovať, aby si mi vedel pomôcť (napr. platby, zrušenie, reklamácie, výluky). Keď ti pošlem text (2–5 odstavcov), sprav mi výstup v tejto štruktúre: A) Zhrnutie do 8 bodov (ľudsky, bez právničiny) B) Najdôležitejšie podmienky: platby, zrušenie, reklamácie (každé max 5 bodov) C) 'Pozor na toto' – 5 rizikových bodov (automatické predĺženie, sankcie, výluky…) D) 6 otázok, ktoré si mám overiť predtým, než s tým súhlasím E) Na konci mi sprav krátky checklist: 'Ak s tým súhlasím, tak viem, že…' (5 viet) Pravidlá: Ak si nie si istý, priznaj to a navrhni, čo mám skontrolovať; Nespomínaj konkrétne zákony, ak si nimi nie si istý – radšej odporuč, čo si overiť; Nežiadaj odo mňa osobné údaje"</p>

      <ExpectedFinding>
        <ul>
          <li>zhrnutie VOP „po lopate"</li>
          <li>rizikové body a na čo si dať pozor</li>
          <li>otázky, ktoré si overíš pred súhlasom</li>
          <li>tvoj vlastný zoznam 10 bodov („čo som si z toho odniesol")</li>
        </ul>
      </ExpectedFinding>

      <h3>Rubrika hodnotenia (na seba)</h3>
      <p>✅ <strong>1) Bezpečnosť</strong></p>
      <ul><li>Neposlal som osobné údaje, čísla, adresy ani nič citlivé.</li></ul>
      <p>✅ <strong>2) Zrozumiteľnosť</strong></p>
      <ul><li>Viem to vysvetliť kamarátovi v 30 sekundách.</li></ul>
      <p>✅ <strong>3) Praktickosť</strong></p>
      <ul><li>Výstup obsahuje platby, zrušenie, reklamácie, riziká a otázky na overenie.</li></ul>
      <p>✅ <strong>4) Rozhodnutie</strong></p>
      <ul><li>Viem povedať: „Súhlasím / nesúhlasím / potrebujem si overiť X"</li></ul>
    </PageShell>
  );
}
