import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03Page() {
  const nav = getNavContext("m03-promptovanie");
  return (
    <PageShell title="M03 – Promptovanie bez mágie ✍️" tldr={[
      "Prompt = recept – čím jasnejší, tým lepší výsledok",
      "6 blokov: Úloha, Kontext, Príklady, Rola, Formát, Tón",
      "Iteruj, keď hľadáš smer; detailný prompt, keď chceš výsledok na istotu",
    ]} {...nav}>

      {/* ===== ÚVOD ===== */}
      <h2>Úvod</h2>
      <p>V prvom module sme si vysvetlili, čo umelá inteligencia je, ako funguje a kde má svoje hranice. Teraz urobíme ďalší krok – pozrieme sa na to, ako s AI hovoriť tak, aby sme z nej dostali použiteľné výsledky.</p>
      <p>Mnohé sklamania z AI nevznikajú preto, že by nástroj nefungoval, ale preto, že nedostal jasné zadanie.</p>

      <h2>Prehľad modulu</h2>
      <ul>
        <li>čo je prompt a prečo na ňom záleží</li>
        <li>z čoho sa skladá prompt (6 stavebných blokov)</li>
        <li>najčastejšie chyby, kvôli ktorým AI „háda"</li>
        <li>jedna praktická úloha naprieč modulom (iterácia)</li>
      </ul>

      <h2>Čo sa naučíš</h2>
      <ul>
        <li>pochopiť, prečo AI bez dobrého zadania „doplňuje realitu"</li>
        <li>naučiť sa 6 stavebných blokov promptu a kedy ich použiť</li>
        <li>vedome zlepšovať výstupy bez zmeny nástroja</li>
        <li>rozhodnúť sa, kedy má zmysel detailný prompt a kedy stačí iterácia</li>
        <li>vedieť prompt „diagnostikovať" – rýchlo nájsť, čo v zadaní chýba</li>
      </ul>

      {/* ===== PROMPT = RECEPT ===== */}
      <h2>PROMPT – recept, podľa ktorého varí AI 🍳</h2>
      <p>Predstav si, že AI je kuchár. Keď povieš: <em>„Uvar mi niečo dobré"</em>, dostaneš niečo… ale nevieš čo. Keď povieš: <em>„Chcem talianske cestoviny, do 20 minút, bez mäsa, s listovým špenátom"</em>, už je to iná liga.</p>
      <p>👉 AI si nevyberá „správnu odpoveď" ako v teste – ona dopĺňa zadanie tak, aby dávalo zmysel. A keď je zadanie nejasné, doplní si ho po svojom.</p>
      <p>Prompt je jednoducho:</p>
      <ul>
        <li>čo má AI spraviť,</li>
        <li>v akom kontexte,</li>
        <li>ako to má vyzerať,</li>
        <li>a podľa čoho spoznáš, že je to dobré.</li>
      </ul>

      {/* ===== 6 BLOKOV ===== */}
      <h2>🧱 6 stavebných blokov promptu</h2>
      <ol>
        <li><strong>Úloha</strong> – čo presne má spraviť</li>
        <li><strong>Kontext</strong> – pre koho, prečo, v akej situácii</li>
        <li><strong>Príklady</strong> – ukážka štýlu alebo výsledku</li>
        <li><strong>Rola</strong> – z akej perspektívy odpovedá</li>
        <li><strong>Formát</strong> – tabuľka, odrážky, kroky, šablóna…</li>
        <li><strong>Tón</strong> – ako má text znieť (priateľsky, vecne, jednoducho)</li>
      </ol>
      <p>Nie vždy potrebuješ všetkých 6. Ale keď niečo „nefunguje", zvyčajne chýba práve jeden z nich.</p>

      <MiniTest
        question="Ktorý prompt je najlepší? Chceš recept na rýchlu večeru z toho, čo máš doma."
        options={[
          { label: "🌕", text: `„Navrhni mi recept na večeru. Chcem, aby bol rýchly, zdravý, chutný, ale zároveň niečo špeciálne. Použi ingrediencie, ktoré mám doma, ale keď nebudú stačiť, tak si niečo domysli..."` },
          { label: "⭐", text: `„Potrebujem pomôcť s varením a chcem, aby si mi navrhol viac receptov podľa toho, čo mám doma. Mám cestoviny, vajcia, špenát a syr..."` },
          { label: "☀", text: `„Si kuchár, ktorý navrhuje jednoduché recepty pre bežný pracovný deň. Mám doma cestoviny, vajcia, listový špenát, parmezán, cesnak a olivový olej. Navrhni jeden recept do 20 minút, bez mäsa, pre 2 porcie..."` },
        ]}
        correct="☀"
        explanation="Je jasné, čo má vzniknúť, z čoho varíme, do koľkých minút, pre koľko ľudí, v akej štruktúre a čo má AI spraviť, ak jej niečo chýba."
      />

      {/* ===== 1. ÚLOHA ===== */}
      <h2>1️⃣ ÚLOHA – keď AI nevie, čo má vlastne robiť</h2>
      <p>Keď človek povie „AI mi dala zlú odpoveď", vo väčšine prípadov to neznamená, že by AI nefungovala. Znamená to, že nepochopila, čo má vlastne urobiť.</p>

      <h3>❌ Zlá verzia promptu</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš niečo o novej funkcii produktu."
      </div>
      <p className="text-sm">AI nevie: či má informovať, presviedčať alebo vysvetľovať; komu text patrí; aký má byť výsledok.</p>

      <h3>✔ Dobrá verzia promptu</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš stručný interný návod (cca 120–180 slov) pre kolegov, s cieľom vysvetliť, čo funkcia robí a kedy ju použiť."
      </div>

      <h3>💡 Ako na to (prakticky)</h3>
      <ul>
        <li>začni slovesom: navrhni / vysvetli / porovnaj / skontroluj / prepíš</li>
        <li>povedz „čo má byť výstup": text / checklist / tabuľka / plán</li>
        <li>pridaj kritériá: stručne, prakticky, bez žargónu, pre začiatočníka</li>
      </ul>
      <p>☠ <strong>Typická chyba:</strong> „urob to dobre" bez kritérií = AI si vyberie vlastné „dobre" 🙂</p>

      <MiniTask title="Otestuj 2 prompty (ÚLOHA)">
        <p><strong>Situácia:</strong> Cez víkend ideš na jednodňový výlet do Prahy. Chceš plán, aby si nemusel(a) rozmýšľať „kam teraz".</p>
        <p className="mt-2"><strong>❌ Prompt 1:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>„Naplánuj mi jednodňový výlet v Prahe."</div>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>„Navrhni mi konkrétny plán jednodňového výletu v Prahe."</div>
        <p className="mt-2"><strong>❓ Porovnávacie otázky:</strong></p>
        <ul className="text-xs">
          <li>Je jasné, čo presne mám dostať?</li>
          <li>Dostal(a) si zoznam miest bez smeru, alebo naozaj plán?</li>
          <li>Vieš ten výstup použiť hneď?</li>
          <li>Je vidieť, že AI pochopila úlohu „navrhnúť plán"?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 dá použiteľnejší výstup, lebo jasne hovorí, že má vzniknúť <strong>konkrétny plán</strong>. Prompt 1 často skončí všeobecným zoznamom odporúčaní.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš jednodňový program v Prahe. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Naplánuj mi výlet do Prahy. Chcem, aby to bolo super, zaujímavé, rýchle aj oddychové..."` },
          { label: "⭐", text: `„Vymysli mi program na jeden deň v Prahe. Nech je tam niečo pekné, niečo na jedlo a niečo zaujímavé."` },
          { label: "☀", text: `„Navrhni konkrétny program na 1 deň v Prahe. Cieľ: aby som sa podľa toho vedel riadiť bez ďalších otázok. Zahrň 4–6 zastávok v logickom poradí a pridaj 1 tip na obed."` },
        ]}
        correct="☀"
        explanation="Je jasná úloha (program na deň), jasný cieľ (aby sa dalo hneď použiť) a jasný výsledok (počet zastávok + obed)."
      />

      {/* ===== 2. KONTEXT ===== */}
      <h2>2️⃣ KONTEXT – keď AI dopĺňa realitu za teba</h2>
      <p>Kontext je prostredie, v ktorom sa má odpoveď odohrávať. Bez kontextu AI pracuje s „ideálnym svetom", ktorý často nemá s realitou nič spoločné.</p>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš oznam pre susedov."</div>
      <p className="text-sm">AI si musí sama vymyslieť: aký problém ide, kedy sa to deje, čo majú ľudia spraviť.</p>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš krátky oznam pre susedov na nástenku (max 5 viet). Zajtra (streda) nepôjde voda v celom dome od 9:00 do 13:00 kvôli oprave. Cieľ: aby si ľudia stihli nabrať vodu. Tón: slušný a jednoduchý. Na konci pridaj: ‚Ďakujeme za pochopenie.'"
      </div>

      <h3>💡 Čo sa oplatí doplniť</h3>
      <ul>
        <li>pre koho je výstup (nováčik, kolega, klient…)</li>
        <li>účel (na web, do mailu, do prezentácie…)</li>
        <li>obmedzenia (čo nepoužiť, čo vynechať)</li>
        <li>situácia (čo už vieme a čo je cieľ)</li>
      </ul>
      <p>☠ <strong>Typická chyba:</strong> bez kontextu dostaneš všeobecný text, ktorý znie pekne, ale je prázdny.</p>

      <MiniTask title="Otestuj 2 prompty (KONTEXT)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Som mimo Prahy a prídem vlakom okolo 9:00, odchádzam okolo 18:00. Idem s kamarátom, chceme pohodové tempo a skôr prechádzky než múzeá. Rozpočet na jedlo a drobnosti je do 800 Kč na osobu. Chcem, aby plán dával zmysel aj bez auta."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 bude konkrétnejší a použiteľnejší, lebo AI dostala kontext: kedy prichádzaš, kedy odchádzaš, s kým ideš, aké máš tempo a limity.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš plán jedla na 3 dni. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Navrhni mi jedálniček na 3 dni. Nech je to zdravé, jednoduché a chutné..."` },
          { label: "⭐", text: `„Navrhni jedálniček na 3 dni pre jedného človeka. Nič extrémne, nech to nie je drahé..."` },
          { label: "☀", text: `„Navrhni jedálniček na 3 dni pre 2 osoby. Kontext: varíme večer po práci, max 20 minút, nechceme mäso, bežné suroviny. Výstup: Raňajky/Obed/Večera + nákupný zoznam (max 12 položiek)."` },
        ]}
        correct="☀"
        explanation="Má konkrétny kontext (pre koho, čas, preferencie) a jasný formát, takže AI nemusí hádať."
      />

      {/* ===== 3. PRÍKLADY ===== */}
      <h2>3️⃣ PRÍKLADY – keď AI netuší, ako má výsledok vyzerať</h2>
      <p>Keď AI povieš „napíš úvodný odsek", ona úvod napíše… ale každý z nás si pod tým predstaví niečo iné. Príklady sú ako „referenčná fotka".</p>

      <h3>Čo robia príklady</h3>
      <ul>
        <li>štýl (jednoduchý vs. odborný vs. marketing),</li>
        <li>formát (nadpisy, dĺžka, štruktúra),</li>
        <li>úroveň detailu (čo je ešte ok a čo je už omáčka).</li>
      </ul>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš popis na bazár."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš popis na bazár (2–3 vety) v štýle tohto príkladu: ‚Predám vec v dobrom stave, používaná len občas. Všetko funguje, dôvod predaja: už ju nevyužijem. Osobný odber alebo pošlem.' Téma: Predávam mobil."
      </div>

      <h3>💡 Kedy príklady najviac pomáhajú</h3>
      <ul>
        <li>keď chceš konzistentný štýl</li>
        <li>keď AI „píše inak", než chceš</li>
        <li>stačia 1–2 typy príkladov</li>
      </ul>
      <p>☠ <strong>Typická chyba:</strong> Príliš veľa príkladov spôsobí, že AI začne viac kopírovať než tvoriť.</p>
      <p className="text-sm italic">👉 1–2 relevantné príklady môžu zvýšiť kvalitu výstupu až o 45 %.</p>

      <MiniTask title="Otestuj 2 prompty (PRÍKLADY)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Chcem to napísať v štýle tohto príkladu (krátko, konkrétne, po častiach): ‚09:00 príchod – krátka káva blízko stanice. 10:00–12:00 prechádzka po centre (2–3 zastávky, ktoré sú blízko seba). 12:30 obed – niečo rýchle, bez rezervácie.' Teraz mi takto navrhni celý deň od rána do večera."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 trafí lepší štýl a štruktúru, lebo AI dostane ukážku, podľa ktorej sa má naladiť.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš napísať popis k inzerátu na predaj mobilu. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Napíš popis k inzerátu na mobil. Nech to znie dobre, profesionálne a ľudia to chcú kúpiť."` },
          { label: "⭐", text: `„Napíš krátky popis na bazár k predaju mobilu. Nech je to stručné a jasné."` },
          { label: "☀", text: `„Napíš popis na bazár (2–3 vety) v štýle tohto príkladu: ‚Predám vec v dobrom stave...' Téma: Predávam mobil."` },
        ]}
        correct="☀"
        explanation="Dáva AI konkrétnu vzorku štýlu, takže model drží stručnosť."
      />

      {/* ===== 4. ROLA ===== */}
      <h2>4️⃣ ROLA – z akej perspektívy AI odpovedá</h2>
      <p>Keď AI povieš len „vysvetli to", odpoveď bude často všeobecná. Rola je spôsob, ako jej povedať: z akých skúseností má vychádzať, čo má uprednostniť a akým jazykom má hovoriť.</p>

      <h3>Čo robí rola</h3>
      <ul>
        <li>čo považuje za dôležité (benefit vs. riziká vs. postup)</li>
        <li>ako hlboko ide do detailu</li>
        <li>aký slovník použije (laicky vs. odborne)</li>
      </ul>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Vysvetli, čo je umelá inteligencia."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Si učiteľ, ktorý vysvetľuje úplným začiatočníkom. Vysvetli, čo je umelá inteligencia tak, aby to pochopil aj niekto, kto nie je technický typ. Použi jednoduché slová a jednu prirovnanie. Max 120–160 slov."
      </div>

      <h3>💡 Použiteľné roly</h3>
      <ul>
        <li>„Si učiteľ pre začiatočníkov, vysvetľuješ jednoducho"</li>
        <li>„Si kamarát, ktorý poradí ľudsky a bez mudrovania."</li>
        <li>„Si redaktor, ktorý skracuje a upratuje text."</li>
      </ul>
      <p>👉 <strong>Tip:</strong> rola + publikum je silnejšie než samotná rola.</p>
      <p>☠ <strong>Typická chyba:</strong> „Si expert…" bez publika = odpoveď pre expertov.</p>

      <MiniTask title="Otestuj 2 prompty (ROLA)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Si miestny sprievodca v Prahe, ktorý pozná mesto a vie poskladať jednoduchý plán pre človeka, čo je v Prahe len na jeden deň. Naplánuj mi jednodňový výlet v Prahe."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 často dá lepší, realistickejší plán, lebo rola nastaví perspektívu: AI sa správa ako miestny sprievodca.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš jednoduché vysvetlenie zdravotnej témy – vysoký krvný tlak. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Vysvetli mi, čo znamená vysoký krvný tlak a čo s tým mám robiť."` },
          { label: "⭐", text: `„Si lekár. Vysvetli vysoký krvný tlak a daj mi odporúčania. Nech je to odborné, ale aby som tomu rozumel."` },
          { label: "☀", text: `„Si všeobecný lekár a vysvetľuješ to pacientovi, ktorý nie je odborník. Vysvetli, čo je vysoký krvný tlak, prečo je dôležité riešiť a čo sú 3 najčastejšie prvé kroky. Píš jednoducho, bez strašenia, max 120–160 slov."` },
        ]}
        correct="☀"
        explanation="Rola + publikum + tón. AI vie, komu hovorí, ako má znieť a čo má byť výsledok."
      />

      {/* ===== 5. FORMÁT ===== */}
      <h2>5️⃣ FORMÁT – keď je výstup pekný, ale nepoužiteľný</h2>
      <p>Niekedy AI odpovie „múdro" a znie to pekne… ale ty z toho nevieš nič použiť. Nie preto, že by odpoveď bola zlá, ale preto, že má zlý tvar.</p>

      <h3>Čo robí formát</h3>
      <ul>
        <li>či sa to dá hneď vložiť do dokumentácie / prezentácie / webu</li>
        <li>či sa v tom človek rýchlo zorientuje</li>
        <li>či je výstup konzistentný</li>
      </ul>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš návod, ako sa pripraviť na výlet."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš návod na jednodňový výlet v tomto formáte: 1) 3 kroky: príprava doma. Potom checklist (max 8 bodov): čo si zbaliť. Potom 2 odrážky: na čo si dať pozor. Na konci 1 veta: ‚Ak si nie si istý, napíš mi, čo máš v pláne a doplním to.'"
      </div>

      <h3>💡 Najlepšie fungujú konkrétne formáty</h3>
      <ul>
        <li>„Vráť 7 odrážok + 1 varovanie + 1 príklad"</li>
        <li>„Sprav tabuľku: Situácia | Čo spraviť | Prečo"</li>
        <li>„Nadpisy H2 + krátke bloky (max 3 odrážky v bloku)"</li>
      </ul>

      <MiniTask title="Otestuj 2 prompty (FORMÁT)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Výstup daj v tomto formáte: Ráno (2–3 aktivity), Obed (1 tip), Poobede (2–3 aktivity), Večer (1 tip na záver). Na konci pridaj krátky checklist: ‚Čo si vziať so sebou' (max 5 bodov)."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 je použiteľnejší, lebo formát donúti AI odpovedať prehľadne a štruktúrovane.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Chceš recept a nechceš „stenu textu". Ktorý prompt je najlepší?`}
        options={[
          { label: "🌕", text: `„Navrhni mi recept na rýchlu večeru."` },
          { label: "⭐", text: `„Navrhni mi recept na večeru a sprav to prehľadne. Môžeš použiť odrážky alebo kroky."` },
          { label: "☀", text: `„Navrhni mi 1 recept na večeru do 20 minút. Formát: 1) Ingrediencie (s množstvom), 2) Postup v 6 krokoch, 3) 2 tipy na obmenu."` },
        ]}
        correct="☀"
        explanation="Formát je presný, takže výsledok je hneď použiteľný."
      />

      {/* ===== 6. TÓN ===== */}
      <h2>6️⃣ TÓN – keď text znie nesprávne</h2>
      <p>Niekedy AI povie správne veci, ale znie to úplne mimo. Buď príliš marketingovo, príliš múdro, alebo ako motivačný kouč z internetu 😄</p>
      <p><strong>Tón neurčuje fakty. Tón určuje, ako to pôsobí</strong> – či to znie dôveryhodne, vecne, ľudsky, alebo „ako reklama".</p>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš vysvetľujúci text."</div>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš vysvetľujúci text v tóne: vecný, pokojný, bez superlatívov. Píš ako interný manuál, nie marketing. Bez dramatizovania a bez strašenia."
      </div>

      <h3>💡 Príklady tónu</h3>
      <ul>
        <li>priateľský, jednoduchý, bez žargónu</li>
        <li>praktický, vecný, žiadny marketing</li>
        <li>motivujúci, ale nie „guru štýl"</li>
      </ul>
      <p>👉 <strong>Tip:</strong> keď chceš „tvoj štýl", je lepšie opísať tón konkrétne než len napísať „profesionálne".</p>

      <MiniTask title="Otestuj 2 prompty (TÓN)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Píš priateľsky a jednoducho, ako keby si to posielal kamarátovi do správy. Žiadne zložité slová, žiadne dlhé odstavce. Max 6 krátkych viet."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 bude pôsobiť prístupnejšie a zrozumiteľnejšie, lebo tón nastaví, ako má odpoveď znieť.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš odmietnuť pozvánku na oslavu. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Odmietni pozvánku na oslavu. Nech je to milé, ale zároveň jasné."` },
          { label: "⭐", text: `„Napíš odmietnutie pozvánky. Nech je to stručné, ale srdečné a trochu formálne aj neformálne."` },
          { label: "☀", text: `„Napíš krátku správu (2–3 vety), ktorou odmietnem pozvánku. Tón: priateľský, slušný, bez výhovoriek. Na konci pridaj 1 vetu, že sa rád stretnem inokedy."` },
        ]}
        correct="☀"
        explanation="Tón je jasný a nie je protichodný. AI presne vie, ako to má znieť."
      />

      {/* ===== ZLOŽENÝ PROMPT ===== */}
      <h2>Zložený prompt – keď všetko spojíš do jedného</h2>
      <p>Teraz spravíme posledný krok: poskladáme celý prompt tak, aby bol stabilný a použiteľný na prvýkrát.</p>

      <h3>Kedy sa oplatí kompletný prompt</h3>
      <ul>
        <li>chceš výsledok, ktorý vieš hneď použiť bez prerábok,</li>
        <li>potrebuješ konzistentný štýl (opakovane),</li>
        <li>nechceš sa pýtať 5 doplňujúcich otázok.</li>
      </ul>

      <h3>Ako si prompt poskladať</h3>
      <ol>
        <li>najprv si ujasni <strong>ÚLOHU</strong> (čo má vzniknúť),</li>
        <li>doplň <strong>KONTEXT</strong> (pre koho, kedy, obmedzenia),</li>
        <li>až potom dolaď: PRÍKLAD, ROLU, FORMÁT a TÓN.</li>
      </ol>

      <h3>✔ Finálny prompt: Jednodňový výlet v Prahe</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Navrhni konkrétny program na 1 deň v Prahe. Kontext: Bývam mimo Prahy a prídem vlakom okolo 9:00, odchádzam okolo 18:00. Idem s kamarátom. Chceme pohodové tempo a skôr prechádzky než múzeá. Chceme 1 dobrú kaviareň a 1 tip na obed bez rezervácie. Program má dávať zmysel aj bez auta. Príklad štýlu: ‚09:00 príchod – krátka káva blízko centra. 10:00–12:00 prechádzka (2–3 zastávky blízko seba). 12:30 obed – niečo jednoduché a rýchle.' Rola: Si miestny sprievodca. Formát: časový plán od 9:00 do 18:00 (4–6 zastávok), pri každej 1 veta prečo sa oplatí, na konci 2 tipy: plán B pri daždi. Tón: priateľský, vecný, bez marketingu."
      </div>

      <h3>☑ Sebakontrola kvality</h3>
      <ul>
        <li>Je jasná ÚLOHA (čo má vzniknúť)?</li>
        <li>Je tam KONTEXT (čas, spôsob presunu, preferencie)?</li>
        <li>Je tam PRÍKLAD (ako má vyzerať výstup)?</li>
        <li>Je tam ROLA (z akej perspektívy)?</li>
        <li>Je daný FORMÁT (aby to nebola stena textu)?</li>
        <li>Je nastavený TÓN (aby to znelo správne)?</li>
      </ul>

      {/* ===== ITERÁCIA ===== */}
      <h2>Kedy promptovať detailne – a kedy iterovať</h2>
      <p>Nie vždy potrebuješ dokonalý prompt hneď na začiatku.</p>

      <h3>Kedy ísť detailne</h3>
      <ul>
        <li>výsledok ide na web / klientovi / do materiálov</li>
        <li>potrebuješ konzistentnosť</li>
        <li>nechceš strácať čas opravami</li>
      </ul>

      <h3>Kedy iterovať</h3>
      <ul>
        <li>ešte len hľadáš tému, nápad alebo formu</li>
        <li>chceš rýchlo skúšať varianty</li>
        <li>nevieš presne, čo chceš, ale spoznáš to, keď to uvidíš</li>
      </ul>

      <h3>🔁 Mini-cyklus iterácie (3 kroky)</h3>
      <ol>
        <li>„Daj 3 varianty."</li>
        <li>„Vyberám variant B. Uprav ho podľa…"</li>
        <li>„Sprav finál v tomto formáte a tóne."</li>
      </ol>
      <p className="text-sm italic">💡 <strong>Tip:</strong> pri iterácii vždy povedz, čo si vybral a čo má zostať rovnaké. Inak AI začne pri každom kole od znova.</p>

      <p>👉 <strong>Jednou vetou:</strong> Iteruj, kým hľadáš smer. Detailne promptuj, keď už chceš výsledok „na istotu".</p>

      <MiniTask title="Otestuj 2 prístupy (DETAIL vs ITERÁCIA)">
        <p><strong>Situácia:</strong> Chceš napísať správu kamarátovi na víkend v Prahe, ale ešte nemáš jasnú predstavu.</p>
        <p className="mt-2"><strong>❌ Prompt 1 (detailný hneď):</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Napíš mi správu kamarátovi na víkend v Prahe. Má to byť presný plán od 9:00 do 18:00, s 5 zastávkami, s obedom, kávou, presunmi, rozpočtom do 800 Kč, bez múzeí, skôr prechádzky, bez dlhých textov, v odrážkach, priateľsky, bez marketingu a na konci pridaj plán B pri daždi."
        </div>
        <p className="mt-2"><strong>✔ Prompt 2 (iterácia – 3 kroky):</strong></p>
        <ol className="text-xs">
          <li>„Navrhni 3 rôzne nápady na víkendový program v Prahe (každý v 2 vetách)."</li>
          <li>„Vyberám variant B. Uprav ho tak, aby bol jednoduchý a pohodový, bez múzeí."</li>
          <li>„Sprav finál ako krátku správu pre kamaráta (max 5 viet)."</li>
        </ol>
      </MiniTask>

      <ExpectedFinding>
        <p>Keď ešte nemáš jasný smer, iterácia funguje lepšie: najprv varianty, výber, potom doladenie.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prompt je najlepší, keď ešte hľadáš smer?"
        options={[
          { label: "🌕", text: `„Napíš finálny text o promptovaní. Musí to mať presnú štruktúru, dĺžku, tón, príklady, mini-úlohu aj test. Hotové na prvýkrát."` },
          { label: "⭐", text: `„Daj mi 3 rôzne varianty krátkeho úvodu k téme promptovania (každý v inom štýle). Potom počkaj, kým si vyberiem jeden."` },
          { label: "☀", text: `„Napíš niečo o promptovaní. Keď to nebude dobré, skús to napísať ešte raz."` },
        ]}
        correct="⭐"
        explanation="Je to riadená iterácia – najprv varianty, potom výber, potom doladenie."
      />

      {/* ===== PROMPTOVANIE S POMOCOU AI ===== */}
      <h2>Promptovanie s pomocou AI + reverzné promptovanie 🔟</h2>
      <p>Sú situácie, keď chceš kvalitný prompt, ale nevieš, čo všetko máš AI povedať. Tu je trik: <strong>AI ti nemusí pomáhať len s výsledkom – môže ti pomôcť aj s tým, ako sa správne pýtať.</strong></p>

      <h3>🤝 AI sa ťa najprv pýta otázky</h3>
      <p>Najlepší postup, keď máš nejasné zadanie:</p>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Spýtaj sa ma 5 otázok, aby si doplnil chýbajúce informácie."<br />
        „Potom na základe mojich odpovedí navrhni finálny prompt."
      </div>

      <h3>🔁 Reverzné promptovanie (od výsledku späť)</h3>
      <p>Použi vtedy, keď už máš text/výstup, ktorý sa ti páči, a chceš ho vedieť zopakovať.</p>
      <ol>
        <li>vlož text alebo výstup, ktorý sa ti páči</li>
        <li>spýtaj sa: <em>„Navrhni prompt, ktorý by viedol k tomuto štýlu a štruktúre."</em></li>
        <li>doplň: publikum, tón, formát, obmedzenia</li>
      </ol>

      <MiniTask title="AI ako prompt-kouč – Inzerát na mobil">
        <p><strong>Možnosť A: AI sa ťa pýta otázky</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Chcem napísať inzerát na predaj mobilu, ale neviem, aké informácie sú dôležité. Spýtaj sa ma 5 otázok, aby si doplnil chýbajúce info. Potom na základe mojich odpovedí navrhni finálny text inzerátu."
        </div>
        <p className="mt-3"><strong>Možnosť B: Reverzné promptovanie</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Predám iPhone 12 (64 GB, čierny) v zachovalom stave. Batéria 84 %, všetko funkčné, bez blokácií... Navrhni prompt, ktorý by viedol k tomuto štýlu a štruktúre inzerátu. Potom navrhni 2 alternatívy promptu: kratšiu a detailnejšiu."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>AI ti vie pomôcť nielen napísať inzerát, ale aj <strong>vytvoriť dobrý prompt</strong>. Buď sa ťa dopýta na chýbajúce info (A), alebo ti z hotového inzerátu vytiahne „recept" (B).</p>
      </ExpectedFinding>

      {/* ===== PRAKTICKÁ ÚLOHA ===== */}
      <h2>🎓 Praktická úloha – Celý prompt v praxi</h2>
      <p><strong>Zadanie:</strong> Priprav prompt pre AI, ktorý ti pomôže so stravou v bežnom živote. Tvoj prompt musí obsahovať všetkých 6 častí:</p>

      <h3>1️⃣ Úloha – čo presne má AI spraviť</h3>
      <p>Vyber si: a) jedálniček na 3 dni, b) 3 rýchle večere, c) nákupný zoznam na týždeň + čo z toho uvarím.</p>

      <h3>2️⃣ Kontext</h3>
      <p>Doplň: pre koho, cieľ (zdravšie/lacnejšie/rýchlejšie), obmedzenia (bez mäsa/alergie/do 20 min), čo máš doma.</p>

      <h3>3️⃣ Príklady</h3>
      <p>Pridaj 1 krátky príklad, napr.: <em>„Jednoduché jedlá z bežných surovín, bez zložitých slov."</em></p>

      <h3>4️⃣ Rola</h3>
      <p>Vyber si: výživový poradca / kuchár na rýchle jedlá / meal prep plánovač.</p>

      <h3>5️⃣ Formát</h3>
      <p>Vyber si: odrážky / tabuľka / kroky. Na konci vždy: „Nákupný zoznam" (max 10 položiek).</p>

      <h3>6️⃣ Tón</h3>
      <p>Vyber si: priateľsky / vecne / povzbudivo.</p>

      <h3>Test v praxi (povinné)</h3>
      <p>Skopíruj prompt do AI, nechaj si vygenerovať výstup, potom sprav 1 iteráciu.</p>

      <h3>☑ Sebakontrola</h3>
      <ul>
        <li>Je jasné, čo má AI spraviť?</li>
        <li>Je jasné, pre koho to je a v akej situácii?</li>
        <li>Je v prompte aspoň 1 príklad?</li>
        <li>Je určená rola?</li>
        <li>Je daný formát?</li>
        <li>Je nastavený tón?</li>
      </ul>

      <ExpectedFinding>
        <p>Budeš mať jeden „kompletný" prompt, ktorý si vieš uložiť ako šablónu a nabudúce len vymeníš svoje detaily.</p>
        <p className="mt-1">💡 <strong>Bonus tip:</strong> Ak nevieš, čo doplniť do kontextu, napíš do AI: <em>„Spýtaj sa ma 3 otázky, aby si si upresnil zadanie."</em></p>
      </ExpectedFinding>
    </PageShell>
  );
}
