import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding, PromptBlock } from "@/components/ContentBlocks";

export default function M07P03() {
  const nav = getNavContext("m07-03-ucenie");
  return (
    <PageShell title="2️⃣ AI na učenie a sebarozvoj" {...nav}>

      <p>AI vie byť výborný „tútor" – nie preto, že má vždy pravdu, ale preto, že je trpezlivá, vie vysvetľovať rôznymi spôsobmi a dokáže ti pripraviť plán, príklady aj opakovanie. V tejto lekcii ide hlavne o to, aby si AI prestal používať len na „odpovedz mi", a začal ju používať ako <strong>trénera učenia</strong>.</p>
      <p>Zároveň platí dôležité pravidlo: <strong>AI je tútor, nie autorita.</strong> Keď ide o fakty, odporúčania alebo citlivé témy, uč sa tak, že si vieš informácie overiť a pochopiť – nie len prebrať.</p>

      <h3>🧩 Typické situácie, kde AI pomáha pri učení</h3>

      <p>📚 <strong>{"\u201EChcem sa naučiť niečo nové, ale neviem, kde začať.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> spraví ti jednoduchý plán, rozdelí tému na malé kroky a dá ti poradie.</p>
      <p><strong>Výstup:</strong> 7–14 dňový mini plán + čo trénovať každý deň.</p>
      <PromptBlock>
        <p>„Chcem sa naučiť ___ (téma). Som začiatočník/mierne pokročilý. Mám denne ___ min. Sprav mi plán na 10 dní: čo robiť každý deň, 1 mikro úloha a ako zistím, že som sa zlepšil."</p>
      </PromptBlock>

      <p>🧩 <strong>{"\u201EČítam niečo a nerozumiem tomu – je to príliš zložité.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> vysvetlí to jednoduchšie, dá metaforu a príklad zo života.</p>
      <p><strong>Výstup:</strong> vysvetlenie „ako pre 12-ročného" + 3 príklady.</p>
      <PromptBlock>
        <p>„Vysvetli mi toto jednoduchšie: ___ (text). Použi prirovnanie zo života a daj 3 krátke príklady. Na konci mi daj 5 otázok, či som to pochopil."</p>
      </PromptBlock>

      <p>📝 <strong>{"\u201EMám veľa poznámok, chaos a neviem z toho spraviť systém.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> z poznámok spraví prehľad, pojmy, kľúčové body a postup.</p>
      <p><strong>Výstup:</strong> štruktúrované poznámky + checklist + krátke zhrnutie.</p>
      <PromptBlock>
        <p>„Tu sú moje poznámky: ___. Urob z toho prehľad: 1) hlavné body 2) pojmy a definície 3) checklist krokov 4) 5-bodové zhrnutie."</p>
      </PromptBlock>

      <p>🎯 <strong>{"\u201EUčím sa, ale neviem, či to viem – chýba mi spätná väzba.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> dá ti mini-testy, otázky a simulované úlohy.</p>
      <p><strong>Výstup:</strong> 10 otázok + odpovede + vysvetlenie chýb.</p>
      <PromptBlock>
        <p>„Otestuj ma z témy ___ na úrovni začiatočníka. Daj 10 otázok (mix výber/krátka odpoveď). Po mojich odpovediach mi daj správne riešenie a vysvetlenie."</p>
      </PromptBlock>

      <p>🗣️ <strong>{"\u201EChcem trénovať jazyk/komunikáciu, ale nemám s kým.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> spraví rolové hry (situácie), opraví chyby a navrhne lepšie formulácie.</p>
      <p><strong>Výstup:</strong> mini-konverzácia + opravy + slovíčka.</p>
      <PromptBlock>
        <p>„Hraj sa so mnou rolovku: ___ (napr. v reštaurácii, na letisku, pracovný call). Píš so mnou po ___ (jazyk). Oprav ma jemne a vždy navrhni lepšiu vetu. Na konci mi daj 10 slovíčok, ktoré sa mi hodia."</p>
      </PromptBlock>

      <h3>🧠 Ako z AI spraviť dobrého tútora (a nie len „odpoveď")</h3>
      <p>Keď chceš učiť sa rýchlo, používaj tieto typy požiadaviek:</p>
      <ul>
        <li>„Vysvetli mi to 3 spôsobmi"</li>
        <li>„Daj mi príklad a proti-príklad"</li>
        <li>„Skús ma otestovať"</li>
        <li>„Daj mi plán a kontrolné body"</li>
        <li>„Najprv mi polož otázky, aby si zistil moju úroveň"</li>
      </ul>
      <p>To je rozdiel medzi „čítam odpoveď" a „trénujem schopnosť".</p>
      <p><strong>💡 Tip do praxe:</strong> Požiadaj AI, aby ti novú tému vysvetlila „ako desaťročnému dieťaťu" – často práve vtedy veci naozaj zapadnú.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>AI môže pôsobiť presvedčivo aj keď sa mýli – pri faktoch si over zdroje</li>
        <li>Neber výstup ako „pravdu", ale ako návrh na pochopenie a tréning</li>
        <li>Pri citlivých témach (zdravie, financie, vzťahy) AI nenahrádza odborníka</li>
        <li>Ak sa len pýtaš a nič netrénuješ, progres bude minimálny – vždy si daj malú úlohu alebo test</li>
      </ul>

      <MiniTask title="Elektrolyty – kedy dávajú zmysel a kedy nie">
        <p><strong>Zadanie</strong></p>
        <p>Použi AI ako tútora a nechaj si vysvetliť elektrolyty tak, aby si vedel urobiť rozumné rozhodnutie: <em>potrebujem ich ja, a kedy?</em></p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Skopíruj do AI tento prompt:
            <br />„Vysvetli mi elektrolyty tak, aby to pochopil laik. Chcem: čo sú elektrolyty a na čo sú v tele; kedy ich má zmysel dopĺňať (praktické situácie); kedy to zmysel nemá (marketing); 3 príznaky, že môžem byť dehydrovaný alebo 'bez elektrolytov'; jednoduchý tip, ako ich doplniť aj bez doplnkov (jedlo/nápoj). Na konci mi daj 5 otázok na sebakontrolu."
          </li>
          <li>Potom doplň kontext o sebe (bez citlivostí, len všeobecne):
            <br />„Moja situácia: športujem ___x týždenne, väčšinou ___ (beh/fitko/túry), potím sa málo/stredne/veľa, pijem denne asi ___ l, káva ___, v lete mi býva ___ (slabo/ok). Daj mi odporúčanie: kedy elektrolyty áno, kedy nie, a aké je jednoduché pravidlo."
          </li>
          <li>Zhrň si to do 3 viet:
            <br />„Zhrň mi to do 3 viet, aby som sa podľa toho vedel rozhodnúť."
          </li>
        </ol>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>jednoduché vysvetlenie „čo sú elektrolyty"</li>
          <li>zoznam situácií „áno / nie"</li>
          <li>3-vetové pravidlo pre teba</li>
          <li>5 kontrolných otázok + tvoje odpovede</li>
        </ul>
      </MiniTask>

      <h3>⚠️ Upozornenie</h3>
      <ul>
        <li><strong>AI nie je lekár</strong> – pri zdravotných problémoch, liekoch alebo ochoreniach obličiek/srdca si odporúčania over u odborníka</li>
        <li>„Elektrolyty" nie sú magický nápoj – často stačí voda + jedlo + soľ podľa situácie</li>
        <li>Ak AI začne odporúčať konkrétne značky alebo dávky bez kontextu, zastav ju a vypýtaj si všeobecné princípy</li>
      </ul>
    </PageShell>
  );
}
