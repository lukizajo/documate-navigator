import { PageShell } from "@/components/PageShell";
import { PromptBlock, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-03-struktura");

export default function LBP03() {
  return (
    <PageShell title="2️⃣ Štruktúra pred štýlom 🧱" prev={nav.prev} next={nav.next}>
      <p>Cieľ tejto lekcie je jednoduchý: <strong>vytvoriť jasnú štruktúru ešte pred formulovaním viet</strong>.</p>
      <p>Keď preskočíš štruktúru a ideš rovno do „pekných viet", AI (a často aj človek) vyrobí text, ktorý znie dobre, ale je:</p>
      <ul>
        <li><strong>neprehľadný</strong></li>
        <li><strong>zbytočne dlhý</strong></li>
        <li>a čitateľ nevie, čo je podstatné</li>
      </ul>
      <p>👉 Preto platí pravidlo: <strong>najprv účel → potom hierarchia → až potom vety</strong>.</p>

      <hr />

      <h3>🎯 Účel textu: informovať, vysvetliť alebo požiadať</h3>
      <p>Skôr než píšeš, musí byť jasné, <strong>čo má text spraviť</strong>. Väčšina textov je jeden z týchto typov (alebo kombinácia, ale jeden býva hlavný):</p>
      <ul>
        <li><strong>Informovať</strong> – "čo sa stalo / čo sa mení / čo platí"</li>
        <li><strong>Vysvetliť</strong> – "prečo to tak je / ako to funguje / čo to znamená"</li>
        <li><strong>Požiadať</strong> – "sprav prosím X / rozhodni Y / potvrď Z"</li>
      </ul>
      <p>Ak si účel nepovieš nahlas (alebo ho nenapíšeš AI), AI často spraví „mix": trochu informuje, trochu vysvetľuje… a výsledok je rozmazaný.</p>
      <p>✅ Praktická pomôcka:</p>
      <p><strong>Účel napíš v 1 vete</strong> ešte pred osnovou:</p>
      <p><strong>„Účel textu je: ____"</strong></p>

      <hr />

      <h3>🧱 Hierarchia informácií: čo je dôležité a čo je detail</h3>
      <p>Dobrá štruktúra je najmä o tom, že vieš rozdeliť informácie na:</p>
      <ul>
        <li><strong>MUST HAVE</strong> – bez toho text nedáva zmysel (pointa, rozhodnutie, kroky)</li>
        <li><strong>NICE TO HAVE</strong> – detail, ktorý pomáha, ale nie je kritický</li>
        <li><strong>MIMO</strong> – informácia, ktorá len predlžuje text</li>
      </ul>
      <p>AI rada „dopĺňa" nice-to-have veci, aby text pôsobil kompletný. Preto jej musíš povedať, <strong>čo je dôležité</strong>.</p>
      <p>✅ Praktická pomôcka (rýchly filter):</p>
      <ul>
        <li>Čo musí čitateľ vedieť <strong>do 10 sekúnd</strong>?</li>
        <li>Čo musí pochopiť <strong>do 30 sekúnd</strong>?</li>
        <li>Čo je len detail „ak chce vedieť viac"?</li>
      </ul>
      <p>👉 V praxi to znamená:</p>
      <p><strong>Dôležité veci idú hore</strong> (nadpis, prvá veta, prvé body). Detaily buď vynecháš, alebo dáš na koniec ako „poznámka".</p>

      <hr />

      <h3>🤖 Ako požiadať AI o návrh osnovy (šablóna, ktorú vieš kopírovať)</h3>
      <p>Tu je univerzálna šablóna, ktorá funguje pre email, správu, návod aj FAQ:</p>
      <PromptBlock>„Účel textu je: (informovať / vysvetliť / požiadať).{"\n"}Cieľová osoba: (kto to číta){"\n"}Navrhni osnovu v <strong>max 6 bodoch</strong>.{"\n"}Označ:{"\n"}• 3 body ako <strong>MUST HAVE</strong>{"\n"}• zvyšok ako <strong>DETAIL</strong>{"\n"}Na záver sa spýtaj <strong>3 otázky</strong>, ktoré potrebuješ vedieť pred napísaním finálneho textu."</PromptBlock>
      <p>✅ Prečo to funguje:</p>
      <ul>
        <li>AI sa najprv sústredí na <strong>kostru</strong></li>
        <li>ty skontroluješ, či je hierarchia správna</li>
        <li>až potom vznikne finálna verzia bez balastu</li>
      </ul>

      <hr />

      <MiniTask title="Najprv osnova, potom text (A/B porovnanie)">
        <p><strong>Situácia</strong></p>
        <p>Máš text, ktorý je príliš „uhladený", ale je nejasný a bez kostry. Chceš z neho spraviť jasný a použiteľný text.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber si variant A alebo B.</p>
        <p>Skopíruj do AI najprv <strong>Prompt 1</strong> a potom <strong>Prompt 2</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>🅰️ Práca – interný návod (neprehľadný draft)</strong></p>
        <p><strong>Text (vstup do AI):</strong></p>
        <p>„V poslednej dobe sa nám množia požiadavky, ktoré prichádzajú cez rôzne kanály a potom sa strácajú alebo riešia duplicitne. Preto by sme chceli, aby sa používal jeden spôsob zadávania a aby sa k požiadavkám doplnili potrebné informácie. Je dôležité, aby sme mali lepší prehľad a aby sa to riešilo rýchlejšie. Prosím, skúste na to myslieť a keď budete zadávať požiadavku, tak to nejako urobte tak, aby to bolo jasné."</p>
        <p><strong>Prompt 1 – slabá úloha (rovno hotový text)</strong></p>
        <p>„Prepíš text tak, aby bol profesionálnejší a lepšie sa čítal."</p>
        <p><strong>Prompt 2 – dobrá úloha (osnova → až potom text)</strong></p>
        <p>„Najprv sprav <strong>osnovu interného návodu</strong> (max 6 bodov).</p>
        <p>Potom sa spýtaj <strong>3 doplňujúce otázky</strong>, bez ktorých nevieš napísať finálny návod.</p>
        <p>Až potom napíš finálnu verziu ako krátky interný návod:</p>
        <ul>
          <li>nadpis</li>
          <li>5–7 bodov</li>
          <li>sekcia 'Čo nerobiť' (2 body)</li>
          <li>1 veta 'Ak je výnimka, tak…'</li>
        </ul>
        <p>Bez vaty, jednoduché slová."</p>

        <p><strong>🅱️ Osobný život – správa, ktorá má viesť k dohode (nejasný draft)</strong></p>
        <p><strong>Text (vstup do AI):</strong></p>
        <p>„Chcel by som, aby sme si lepšie nastavili niektoré veci doma, lebo mám pocit, že sa to poslednú dobu rozpadáva a potom zbytočne riešime hlúposti. Nechcem, aby sme sa kvôli tomu hádali, len by som bol rád, keby sme mali nejaký systém a bolo to férovejšie. Keď budeš mať čas, tak sa o tom môžeme porozprávať."</p>
        <p><strong>Prompt 1 – slabá úloha (rovno hotový text)</strong></p>
        <p>„Prepíš text tak, aby bol milší a lepšie sa čítal."</p>
        <p><strong>Prompt 2 – dobrá úloha (osnova → až potom text)</strong></p>
        <p>„Najprv sprav <strong>osnovu správy</strong>, ktorá má viesť k dohode (max 6 bodov).</p>
        <p>Potom sa spýtaj <strong>3 doplňujúce otázky</strong>, aby bola dohoda konkrétna.</p>
        <p>Až potom napíš finálnu správu:</p>
        <ul>
          <li>1 veta: čo chcem vyriešiť</li>
          <li>návrh termínu + alternatíva</li>
          <li>3 body: o čom sa chceme dohodnúť</li>
          <li>1 veta: čo bude prvý krok hneď po dohode</li>
        </ul>
        <p>Zachov rešpekt, bez vaty."</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Pomohla osnova (Prompt 2) spraviť text <strong>prehľadnejší</strong> než Prompt 1?</p>
        <p>V Prompt 2 bolo jasnejšie, <strong>čo je podstatné</strong> a čo je balast?</p>
        <p>Objavili sa v Prompt 1 dlhé odseky alebo „uhladené" vety bez informácie?</p>
        <p>Dávali doplňujúce otázky z Prompt 2 zmysel (zlepšili výsledok)?</p>
        <p>Je finálny text z Prompt 2 viac „na použitie" než „na čítanie"?</p>
      </MiniTask>

      <ExpectedFinding>
        <p><strong>Prompt 2</strong> (osnova → otázky → text) dáva stabilne lepší výsledok, pretože AI najprv vyjasní štruktúru a chýbajúce informácie. <strong>Prompt 1</strong> často len „vyleští" pôvodný chaos a pridá vatu.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
