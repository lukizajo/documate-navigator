import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M05P05() {
  const nav = getNavContext("m05-05-triangulacia");
  return (
    <PageShell title="M05 \u2013 Vyh\u013Ead\u00E1vanie s AI \uD83D\uDD0D\uD83E\uDD14" {...nav}>

      <h2>4️⃣ Triangulácia</h2>
      <p>Triangulácia znamená jednoduché pravidlo:</p>
      <p>👉 <strong>Never prvej odpovedi</strong>, aj keď znie sebavedomo.</p>
      <p>AI vie znieť presne tak, ako keby „to mala overené". Lenže pri vyhľadávaní je rozdiel medzi tým, čo <strong>znie logicky</strong>, a tým, čo je <strong>naozaj pravda</strong>. A keď sa podľa nesprávnej informácie zariadiš, často to zistíš až neskoro: pri pokladni, na letisku, pri reklamácii alebo v momente, keď už nie je čas to riešiť.</p>
      <p>Triangulácia je preto návyk, ktorý ti šetrí nervy.</p>
      <p>Nie je to o tom, že AI neveríš. Je to o tom, že si dáš rýchlu <strong>„kontrolu reality"</strong>, kým na tom začneš stavať ďalšie rozhodnutia.</p>

      <h3>😊 Kedy triangulovať</h3>
      <p>Trianguláciu použi vždy, keď informáciu chceš ďalej použiť v reálnom svete. Napríklad:</p>
      <ul>
        <li>bude ťa to stáť <strong>peniaze</strong> (ceny, poplatky, nákupy)</li>
        <li>môže to pokaziť <strong>plán</strong> (termíny, pravidlá, podmienky, cestovanie)</li>
        <li>ide o <strong>aktuálne</strong> veci (čo sa mení, čo sa aktualizuje)</li>
        <li>ide o niečo, kde existujú <strong>výnimky</strong> (pravidlá, limity, drobné písmenká)</li>
      </ul>

      <h3>🧭 Ako triangulovať (3 zdroje, 3 rôzne role)</h3>
      <p>Triangulácia funguje najlepšie, keď má každý zdroj inú rolu:</p>
      <ul>
        <li><strong>AI výstup</strong>: rýchly prehľad a zhrnutie (čo si mám vôbec všímať)</li>
        <li><strong>Google (alebo klasický search)</strong>: nájdenie konkrétnych stránok a detailov</li>
        <li><strong>nezávislý/primárny zdroj</strong>: potvrdenie (oficiálna stránka, podmienky, dokument, priamo poskytovateľ)</li>
      </ul>
      <p>Keď sa tieto tri veci <strong>zhodujú</strong>, dôveryhodnosť rastie.</p>
      <p>Keď sa <strong>rozchádzajú</strong>, je čas spomaliť a dohľadať <strong>„prečo"</strong>.</p>
      <p>💡 Mini pravidlo: <strong>aspoň 2 z 3 zdrojov musia byť naozaj nezávislé</strong>. Dva blogy, ktoré prepisujú tú istú info, nie sú triangulácia.</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>dva zdroje z jedného miesta</strong> nie sú triangulácia (napr. 2 články, ktoré prepisujú tú istú info)</li>
        <li><strong>„AI + AI"</strong> nie je triangulácia (len dve verzie toho istého, bez reálnych zdrojov)</li>
        <li>ak AI nemá zapnutý <strong>web search</strong>, môže odpovedať zo svojich znalostí a <strong>dopĺňať detaily</strong></li>
        <li>keď sa čísla líšia, hľadaj <strong>dátum a platnosť</strong> (kedy to platilo, od kedy sa to zmenilo)</li>
        <li>pri poplatkoch a nákupoch si dávaj pozor na stránky, ktoré vyzerajú „oficiálne", ale sú to <strong>sprostredkovatelia</strong> (často drahšie)</li>
      </ul>

      <p><strong>💡 Tip do praxe: prompt, ktorý z AI spraví „overovača"</strong></p>
      <p>Toto je krátky doplnok, ktorý môžeš prilepiť na koniec otázky:</p>
      <p>„Urob trianguláciu:</p>
      <ul>
        <li>najprv daj rýchly prehľad</li>
        <li>potom uveď 3 nezávislé zdroje (<strong>aspoň 1 musí byť oficiálny/primárny</strong>)</li>
        <li>pri každom uveď <strong>dátum</strong> alebo 'posledná aktualizácia', ak je dostupná</li>
        <li>ak sa zdroje rozchádzajú, napíš <strong>v čom</strong> a čo by si overil ako prvé"</li>
      </ul>

      <MiniTask title="Triangulácia na ceste na dovolenku (AI + Google + oficiálny zdroj)">
        <p><strong>Situácia</strong></p>
        <p>Ideš autom z Prahy do Chorvátska. Prechádzaš cez Rakúsko a Slovinsko. Chceš vedieť, aké poplatky potrebuješ, koľko stoja a kde ich kúpiť, aby si nekúpil niečo zbytočne drahé alebo falošné.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Najprv použi AI, potom Google, potom nájdi oficiálny zdroj. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>🧠 Prompt pre AI</strong></p>
        <p>„Idem autom z Prahy do Chorvátska cez Rakúsko a Slovinsko. Úloha: povedz mi, aké diaľničné poplatky/známky potrebujem, koľko stoja a kde ich kúpiť. Pravidlo: uveď zdroje a pri cenách uveď dátum alebo platnosť (ak je uvedená). Na konci vypíš 3 veci, ktoré si ľudia pri známkach najčastejšie mýlia."</p>
        <p><strong>🔎 Google</strong></p>
        <ul>
          <li>vyhľadaj „Rakúska diaľničná známka oficiálna stránka" a „Slovinská diaľničná známka oficiálna stránka"</li>
          <li>otvor aspoň 2 výsledky a nájdi <strong>1 oficiálny zdroj</strong></li>
          <li>porovnaj ceny/typy známok s tým, čo napísala AI</li>
        </ul>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>sú v AI odpovedi jasne uvedené zdroje (a <strong>aspoň jeden oficiálny</strong>)?</li>
          <li>sedí cena a typ známky s oficiálnou stránkou, alebo sa niečo líši?</li>
          <li>našiel si cez Google stránky, ktoré vyzerajú „podobne ako oficiálne", ale nie sú?</li>
          <li>pomohla AI tým, že ťa nasmerovala, čo presne máš hľadať (typ známky, platnosť, nákup), alebo len „vymenovala info"?</li>
          <li>keď sa údaje rozchádzali, vedel si rýchlo určiť, komu veriť a prečo?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>AI ti dá <strong>rýchly prehľad</strong> a ušetrí čas v orientácii, ale pri cenách a pravidlách sa môže pomýliť alebo byť neaktuálna.</p>
        <p>Google ti pomôže nájsť konkrétne stránky, ale až <strong>oficiálny zdroj</strong> ti dá istotu, že sa spoliehaš na správne a platné info.</p>
        <p>Triangulácia znižuje riziko, že sa zariadiš podľa jednej odpovede, ktorá je len <strong>„presvedčivá"</strong>.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00E9 2 situ\u00E1cie najviac potrebuje\u0161 triangulova\u0165? Vyber 2.`}
        options={[
          { label: "\uD83C\uDF15", text: `\u201EKedy sa narodil Albert Einstein?\u201C` },
          { label: "⭐", text: `\u201EKo\u013Eko stoj\u00ED dnes dia\u013Eni\u010Dn\u00E1 zn\u00E1mka v \u010CR a kde ju k\u00FApi\u0165?\u201C` },
          { label: "☀️", text: `\u201EAk\u00E9 s\u00FA aktu\u00E1lne pravidl\u00E1 vr\u00E1tenia tovaru v e-shope (lehota, v\u00FDnimky)?\u201C` },
          { label: "\uD83C\uDF11", text: `\u201EVymysli mi 10 n\u00E1padov na r\u00FDchlu ve\u010Deru do 20 min\u00FAt.\u201C` },
          { label: "\uD83C\uDF20", text: `\u201EVysvetli mi jednoducho, \u010Do je infl\u00E1cia.\u201C` },
        ]}
        correct="⭐☀️"
        explanation="⭐ a ☀️ sú aktuálne/pravidlové informácie, ktoré sa menia a majú výnimky. Bez overenia v zdrojoch je vysoké riziko."
      />
    </PageShell>
  );
}
