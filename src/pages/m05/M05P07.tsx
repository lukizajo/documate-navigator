import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M05P07() {
  const nav = getNavContext("m05-07-deep-research");
  return (
    <PageShell title={"M05 \u2013 Vyh\u013Ead\u00E1vanie s AI \uD83D\uDD0D\uD83E\uDD14"} {...nav}>

      <h2>6️⃣ Deep Research (Hĺbkový prieskum/Podrobné vyhľadávanie)</h2>
      <p><strong>Deep Research</strong> je režim, kde AI nerobí len „jednu odpoveď", ale spustí <strong>viac krokov výskumu</strong>:</p>
      <ul>
        <li>vyhľadáva,</li>
        <li>číta zdroje,</li>
        <li>porovnáva tvrdenia,</li>
        <li>skladá <strong>správu so závermi a citáciami</strong>.</li>
      </ul>

      <p><strong>👉 Kedy má zmysel Deep Research</strong></p>
      <ul>
        <li>Keď potrebuješ <strong>komplexnú odpoveď</strong> (viac uhlov pohľadu, plusy/mínusy, odporúčania)</li>
        <li>Keď chceš <strong>zhrnutie z viacerých zdrojov naraz</strong>, nie len 1 článok</li>
        <li>Keď chceš <strong>odpoveď, ktorú vieš ďalej použiť</strong> (prezentácia, plán, argumenty, rozhodnutie)</li>
      </ul>

      <h3>🧩 Ako sa Deep Research správa v praxi (čo si všimneš okamžite)</h3>
      <ul>
        <li><strong>Trvá dlhšie</strong> než bežné vyhľadávanie – typicky <strong>minúty</strong>, niekedy aj <strong>desiatky minút</strong> (podľa nástroja a zadania)</li>
        <li>Pracuje <strong>agenticky</strong> – sám si volí ďalšie kroky, aby „dovyšetril" nejasnosti</li>
        <li>Výstup je často <strong>štruktúrovaný report</strong> (sekcie, závery, odporúčania, zdroje)</li>
      </ul>

      <h3>🛠️ Deep Research v nástrojoch</h3>

      <p><strong>🟥 ChatGPT</strong></p>
      <ul>
        <li><strong>Výhoda:</strong> silná štruktúra reportu, dobré zhrnutie, závery, odporúčania, často vie pekne pomenovať riziká a neistoty</li>
        <li><strong>Dĺžka:</strong> typicky minúty až desiatky minút (podľa zadania)</li>
        <li><strong>Limit Free/Platené:</strong> Free: 5 deep research dotazov/mesiac, Plus/Team/Edu: 25/mesiac, Pro: 250/mesiac</li>
        <li><strong>Dôležité:</strong> aj keď má zdroje, <strong>zdroj ≠ dôkaz</strong> – pri kľúčových tvrdeniach si klikni a over, či naozaj podporujú vetu</li>
      </ul>

      <p><strong>🟦 Gemini</strong></p>
      <ul>
        <li><strong>Výhoda:</strong> najlepší, keď chceš robiť deep research s veľkým obsahom a dokumentmi – <strong>Gemini Advanced</strong> má masívne kontextové okno a vie zvládnuť veľa strán naraz</li>
        <li><strong>Dĺžka:</strong> typicky minúty (pri veľkých dokumentoch a reportoch môže byť dlhšie)</li>
        <li><strong>Limit Free/Platené:</strong> Gemini Free: ~5 reportov mesačne, Gemini Advanced (PLUS): ~20 až 200 reportov denne*, modely Gemini Pro/Ultra</li>
        <li><strong>Dôležité:</strong> Práca so súbormi: Free je obmedzený, Advanced má 1M+ tokenov (stovky strán PDF naraz). Integrácia: Advanced vie reporty ukladať priamo do Google Docs/Drive. * limity sa môžu meniť podľa účtu a nastavení</li>
      </ul>

      <p><strong>🟪 Perplexity</strong></p>
      <ul>
        <li><strong>Výhoda:</strong> extrémne dobrý na rýchly research so zdrojmi – často dá použiteľný report veľmi rýchlo a hneď ukazuje odkazy</li>
        <li><strong>Dĺžka:</strong> často do pár minút</li>
        <li><strong>Limit Free/Platené:</strong> Free: Research je dostupný, ale má limitovanú dennú kapacitu. Pro: typicky „viac/bez limitu" (podľa aktuálnych podmienok)</li>
        <li><strong>Dôležité:</strong> najväčšie riziko je <strong>kvalita zdrojov</strong> – sleduj, či nejde o affiliate blogy a „SEO články", ktoré len prepisujú jeden druhého</li>
      </ul>

      <p><strong>🟧 Claude (Research)</strong></p>
      <ul>
        <li><strong>Výhoda:</strong> veľmi dobrý na čitateľnosť, logiku a vysvetlenie súvislostí, často vie férovo pomenovať limity a neistí sa tak agresívne</li>
        <li><strong>Dĺžka:</strong> typicky minúty až desiatky minút (podľa rozsahu)</li>
        <li><strong>Limit Free/Platené:</strong> Free: Research režim býva spravidla nedostupný. Platené: Research je dostupný v platených plánoch (a spotrebúva viac kapacity než bežný chat)</li>
        <li><strong>Dôležité:</strong> aby Research fungoval, potrebuješ mať <strong>zapnutý web/research režim</strong> – inak odpovedá zo znalostí a riziko domýšľania rastie</li>
      </ul>

      <p><strong>🟩 Elicit (research na štúdie)</strong></p>
      <ul>
        <li><strong>Výhoda:</strong> špecialista na vedecké zdroje a štúdie – ideálne, keď chceš evidence-based odpoveď, nie „čo píšu blogy"</li>
        <li><strong>Dĺžka:</strong> typicky minúty (podľa typu reportu)</li>
        <li><strong>Limit Free/Platené:</strong> Free (Basic): 2 automatizované reporty/mesiac. Platené: viac reportov/kapacity</li>
        <li><strong>Dôležité:</strong> Elicit je top na výskum, ale nie je to „univerzálny web" – je najlepší, keď hľadáš štúdie, paper-y, prehľady</li>
      </ul>

      <h3>❓ Kedy ktorý nástroj použiť</h3>
      <ul>
        <li>Chcem <strong>rýchly report so zdrojmi</strong> (a nechcem sa v tom rýpať): 🟪 <strong>Perplexity Research</strong></li>
        <li>Chcem <strong>silný report s logikou, rizikami a odporúčaniami</strong>: 🟥 <strong>ChatGPT Deep Research</strong></li>
        <li>Mám <strong>veľa materiálov / PDF / dokumenty</strong> a chcem z toho spraviť report: 🟦 <strong>Gemini Advanced</strong></li>
        <li>Chcem <strong>najzrozumiteľnejšie vysvetlenie a čistú argumentáciu</strong>: 🟧 <strong>Claude Research</strong></li>
        <li>Chcem, aby to stálo na <strong>štúdiách a vedeckých zdrojoch:</strong> 🟩 <strong>Elicit</strong></li>
      </ul>

      <p><strong>💡 Tip do praxe (jedna veta, ktorá zlepší hĺbkový prieskum výstup takmer vždy)</strong></p>
      <ul>
        <li>„Na konci urob <strong>checklist 5 bodov</strong>, čo mám overiť v zdrojoch predtým, než to použijem."</li>
        <li>„Ak si nie si istý, napíš <strong>neviem</strong> a vysvetli, čo by som mal overiť ako prvé."</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Podrobné vyhľadávanie nie je garancia pravdy.</strong> Aj report so zdrojmi môže mať chybu.</li>
        <li><strong>Zdroj ≠ dôkaz.</strong> Pri kľúčových tvrdeniach si over aspoň 1–2 odkazy.</li>
        <li><strong>Pozor na „mix režimov".</strong> Ak nie si v Research/Deep režime, AI môže odpovedať zo znalostí a dopĺňať detaily.</li>
        <li><strong>Čerstvosť tém:</strong> pri cenách, pravidlách a dostupnosti vždy sleduj <strong>dátum</strong> a <strong>platnosť</strong>.</li>
      </ul>

      <MiniTask title="Deep Research report (1 nástroj, 1 výstup)">
        <p><strong>Situácia</strong></p>
        <p>Chceš kúpiť <strong>robotický vysávač do bytu</strong>, ale nechceš stráviť 2 hodiny čítaním recenzií. Máš podmienky:</p>
        <ul>
          <li>do <strong>8 000 Kč</strong></li>
          <li>byt <strong>50–70 m²</strong></li>
          <li>doma <strong>mačka</strong> (chlpy)</li>
          <li>ideálne aby mal <strong>dobrú navigáciu</strong> a nebol extrémne hlučný</li>
        </ul>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber si <strong>jeden nástroj s Deep Research</strong> (ChatGPT / Gemini / Perplexity / Claude / Elicit – podľa toho, čo máš dostupné). Skopíruj prompt, nechaj ho dobehnúť a ulož si výstup.</p>
        <p><strong>🧠 Prompt pre deep research</strong></p>
        <p>„Vyber mi 3 robotické vysávače do 8 000 Kč pre byt 50–70 m², doma mačka (chlpy). Podmienky: dobrá navigácia, rozumná hlučnosť, dostupnosť v CZ/SK e-shopoch. Výstup: tabuľka (model / prečo áno / prečo nie / pre koho sa hodí), na konci 5-bodový checklist, čo si mám ešte overiť pred kúpou, pridaj zdroje (odkazy) ku kľúčovým tvrdeniam."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je výstup <strong>konkrétny</strong> (3 modely + jasné „prečo áno/nie"), alebo len všeobecné rady?</li>
          <li>Sú tam <strong>zdroje na kľúčové tvrdenia</strong> (cena, hlučnosť, navigácia, vhodnosť na chlpy)?</li>
          <li>Vieš z toho urobiť rozhodnutie do 5 minút, alebo musíš ešte „dohľadávať všetko ručne"?</li>
          <li>Sú v reporte aj <strong>riziká a výnimky</strong> (napr. mapovanie nefunguje v niektorých bytoch, spotrebák, servis)?</li>
          <li>Máš na konci <strong>checklist na overenie</strong>, alebo len odporúčania bez kontroly?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Deep Research ti dá <strong>hotový rozhodovací podklad</strong> (nie len odkazy). Zároveň uvidíš, že najväčší rozdiel nerobí „krásny text", ale to, či report obsahuje <strong>overiteľné zdroje + riziká + checklist</strong>.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00E9 2 zadania s\u00FA typick\u00E9 pre Deep Research?`}
        options={[
          { label: "\uD83C\uDF15", text: `\u201EN\u00E1jdi mi otv\u00E1racie hodiny najbli\u017E\u0161ej lek\u00E1rne.\u201C` },
          { label: "⭐", text: `\u201EPorovnaj 8 zdrojov a zhr\u0148, \u010Di sa oplat\u00ED cestovn\u00E9 poistenie na city-break \u2013 uve\u010F v\u00FDnimky, protire\u010Denia a z\u00E1ver.\u201C` },
          { label: "☀️", text: `\u201EVymysli mi 10 n\u00E1padov na r\u00FDchle ve\u010Dere.\u201C` },
          { label: "\uD83C\uDF11", text: `\u201EUrob re\u0161er\u0161: ak\u00E9 s\u00FA naj\u010Dastej\u0161ie poruchy pri 3 typoch jazden\u00FDch \u00E1ut a \u010Do si m\u00E1m overi\u0165 pred k\u00FApou \u2013 zdroje + rizik\u00E1.\u201C` },
          { label: "\uD83C\uDF20", text: `\u201EKo\u013Eko je hod\u00EDn v Tokiu?\u201C` },
        ]}
        correct="⭐🌑"
        explanation="Oba príklady sú multi-zdrojové, potrebujú syntézu, výnimky, riziká a overiteľné zdroje."
      />
    </PageShell>
  );
}
