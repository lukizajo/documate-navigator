import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M05P01() {
  const nav = getNavContext("m05-01-uvod");
  return (
    <PageShell title="🅾️ Úvod do vyhľadávania s AI" {...nav}>
      <p>V predchádzajúcich moduloch sme si ukázali, ako s AI komunikovať, ako jej dávať kontext a ako z nej dostať kvalitné výstupy. Teraz prichádza veľmi praktická otázka:</p>
      <p>👉 <strong>Môžem AI používať ako Google?</strong></p>
      <p>Predstav si to jednoducho: <strong>Google je knižnica. AI je rozprávač, ktorý ti z tej knižnice poskladá príbeh.</strong></p>
      <p>Niekedy trafí presne. Inokedy si niečo domyslí – a povie to tak presvedčivo, že mu uveríš.</p>
      <p>Dôležité je pochopiť, že AI nevyhľadáva informácie rovnakým spôsobom ako klasický vyhľadávač. <strong>Generuje odpovede</strong> – a tie môžu byť správne, nepresné alebo „pekné, ale vymyslené".</p>
      <p>V tomto module sa naučíš používať AI ako <strong>inteligentného asistenta pri vyhľadávaní</strong>, nie ako autoritu. Ukážeme si rozdiely oproti Googlu, princíp triangulácie, odhaľovanie halucinácií, limity aktuálnosti informácií a aj to, kedy má zmysel použiť <strong>Deep Research</strong>.</p>

      <h3>🧭 Prehľad modulu</h3>
      <p>V tomto module sa pozrieme na:</p>
      <ul>
        <li>rozdiel medzi <strong>AI odpoveďou</strong> a <strong>Google výsledkami</strong></li>
        <li>ako sa AI pýtať tak, aby dávala <strong>zdroje, dátumy a istotu/neistotu</strong></li>
        <li>prečo <strong>jedna odpoveď nestačí</strong> (a ako si ju vypýtať lepšie)</li>
        <li>čo je <strong>triangulácia</strong> a ako rýchlo overovať kľúčové tvrdenia</li>
        <li>ako rozpoznať <strong>halucinácie</strong> a „sebaisté domýšľanie"</li>
        <li>limity AI pri <strong>aktuálnych informáciách</strong> a kedy radšej použiť iný zdroj</li>
        <li>čo je <strong>Deep Research</strong> a kedy sa oplatí oproti bežnému web search</li>
      </ul>

      <h3>🎯 Čo sa naučíš</h3>
      <p>Po absolvovaní tohto modulu budeš vedieť:</p>
      <ul>
        <li>použiť AI na <strong>rýchly prehľad témy</strong> bez toho, aby si jej slepo uveril(a)</li>
        <li>pýtať si <strong>zdroje, dátumy a vysvetlenie</strong> tak, aby sa to dalo overiť</li>
        <li>skombinovať AI + Google tak, aby si mal(a) <strong>rýchlosť aj istotu</strong></li>
        <li>odhaliť typické <strong>halucinácie</strong> a zistiť, kedy AI „iba znie presvedčivo"</li>
        <li>vybrať správny režim: <strong>web search vs Deep Research</strong> podľa typu otázky</li>
      </ul>
    </PageShell>
  );
}
