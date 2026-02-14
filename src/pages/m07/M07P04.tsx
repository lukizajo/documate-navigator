import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M07P04() {
  const nav = getNavContext("m07-04-volny-cas");
  return (
    <PageShell title="3️⃣ AI a voľný čas 🎨🎶" {...nav}>

      <p>AI vie byť skvelý kreatívny parťák, keď potrebuješ rýchlo nápady, varianty alebo štylizáciu textu. Najlepšie funguje vtedy, keď jej dáš <strong>štýl, obmedzenia a príklad toho, čo chceš a čo nechceš</strong>. Potom ti vie ušetriť veľa času — a ty si už len vyberieš, čo ti sedí.</p>

      <h3>🧩 Typické situácie, kde AI reálne pomáha</h3>

      <p>💝 <strong>{"\u201EChcem vymyslieť prekvapenie pre partnera/ku, ale aby to sedelo na jeho/jej štýl.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> navrhne prekvapenia podľa osobnosti, záľub a toho, čo ten človek reálne ocení.</p>
      <p><strong>Výstup:</strong> 10 nápadov + top 3 s dôvodom + „low budget" alternatíva.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Vymysli prekvapenie pre partnera/ku. Kontext: aké aktivity má rád/rada: ___; čo nemá rád/rada: ___; aký je typ: introvert/extrovert, skôr domáce/akčné, skôr romantické/vtipné: ___; čas: ___ (napr. 2 hodiny / celý deň); rozpočet: ___. Daj 10 nápadov. Vyber top 3 a ku každému napíš prečo to sedí na tento typ človeka. Pridaj aj 1 low-budget verziu."</p>

      <p>🎲 <strong>{"\u201EChcem hry/aktivity pre skupinu podľa veku a nálady.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> navrhne program podľa počtu ľudí, veku, energie a toho, či to má byť vnútri/vonku.</p>
      <p><strong>Výstup:</strong> 10 aktivít + čo treba pripraviť + odhad času.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Navrhni hry/aktivity pre skupinu. Počet ľudí: ___; vek: ___; miesto: doma/vonku; nálada/energia: nízka/stredná/vysoká; čo nechcem: ___ (napr. nič trápne, nič športové, nič hlučné). Daj 10 aktivít. Ku každej napíš trvanie, čo treba pripraviť a pre koho je najvhodnejšia."</p>

      <p>📩 <strong>{"\u201EChcem napísať pozvánku na oslavu, ale chcem viac štýlov.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> spraví 3 verzie toho istého textu v rôznych tóninách a doplní praktické info.</p>
      <p><strong>Výstup:</strong> vtipná / elegantná / jednoduchá verzia + krátka SMS verzia.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Napíš mi pozvánku na oslavu. Info: kto/čo oslavujeme: ___, kedy: ___, kde: ___, čas začiatku: ___, dress code: ___, čo priniesť: ___, RSVP do: ___. Sprav 3 verzie: vtipná, elegantná, jednoduchá. Na konci pridaj aj krátku SMS verziu do 200 znakov."</p>

      <p>📸 <strong>{"\u201EChcem popis k fotke (IG/FB/LinkedIn), nech to nie je trápne.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> navrhne texty podľa platformy a štýlu, aby si neznelo umelo ani „šablónovo".</p>
      <p><strong>Výstup:</strong> 5 návrhov + 3 rôzne tóny + hashtagy (ak chceš).</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Napíš popis k fotke na ___ (IG/FB/LinkedIn). Čo je na fotke: ___. Aký tón chcem: prirodzený/vtipný/inšpiratívny/profesionálny. Čo nechcem: motivačné klišé, prehnané emoji, cringe. Daj 5 návrhov. Sprav 3 tóny (jemný, neutrál, výraznejší). Ak je to IG, pridaj aj 8–12 hashtagov."</p>

      <p>🎬 <strong>{"\u201EChcem vybrať film/seriál podľa nálady, ale nech to nie je náhodné.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> spraví odporúčanie podľa nálady, času, žánru a toho, čo sa ti páčilo predtým.</p>
      <p><strong>Výstup:</strong> shortlist 6–10 tipov + top 3 s dôvodom + „ak chcem niečo ľahké" alternatíva.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Odporuč mi film/seriál podľa nálady. Nálada: ___ (napr. oddych, napätie, smiech, feel-good); čas: ___ (90 min / 2 hod / seriál na večer); čo sa mi páčilo: ___ (3 príklady); čo nechcem: ___ (napr. horory, príliš depresívne, reality show). Daj 8 tipov. Vyber top 3 a napíš prečo mi to bude sedieť. Pridaj aj 1 'ľahkú' alternatívu, keď som unavený."</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Keď AI nemá <strong>kontext</strong>, dá generické nápady — dopíš štýl, obmedzenia a „čo nechcem"</li>
        <li>Pri odporúčaniach (filmy, miesta, aktivity) si <strong>over dostupnosť</strong> a praktické detaily, ak na tom záleží</li>
        <li><strong>Texty ber ako návrh</strong> — finálny tón je tvoj, pokojne si vypýtaj 2–3 verzie a vyber</li>
      </ul>

      <MiniTask title="Prekvapenie, ktoré trafí do štýlu 💝">
        <p><strong>Zadanie</strong></p>
        <p>Nechaj AI, aby sa ťa najprv vyspovedala správnymi otázkami a až potom navrhla prekvapenie pre partnera/ku.</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Skopíruj prompt nižšie do AI</li>
          <li>Odpovedz na otázky, ktoré sa AI opýta</li>
          <li>Vyber 1 nápad, ktorý vieš spraviť do 7 dní</li>
          <li>Nechaj si od AI doplniť 2 konkrétne kroky realizácie</li>
        </ol>
        <p><strong>Prompt</strong></p>
        <p>„Pomôž mi vymyslieť prekvapenie pre partnera/ku. Najprv sa ma spýtaj presne 6 otázok, aby si pochopil/a jeho/jej štýl a čo ho/ju reálne poteší. Otázky nech sú konkrétne a praktické (voľný čas, čo nemá rád/rada, typ človeka, rozpočet, čas, čo už sme skúšali). Keď odpoviem, navrhni 10 nápadov na prekvapenie. Potom vyber top 3 a ku každému vysvetli, prečo sedí na tento typ človeka. Pridaj aj 1 low-budget verziu. Na konci mi polož otázku: 'Ktorý nápad si vyberáš?' a keď vyberiem, daj mi 2 konkrétne kroky, ako to zrealizovať."</p>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>6 otázok od AI + tvoje odpovede</li>
          <li>10 nápadov + top 3 s dôvodom</li>
          <li>1 vybraný nápad + 2 konkrétne kroky realizácie</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
