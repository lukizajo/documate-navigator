import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-02-text-nastroj");

export default function LBP02() {
  return (
    <PageShell title="1️⃣ Text ako nástroj" prev={nav.prev} next={nav.next}>
      <p>Texty nepíšeme len „aby boli pekné". Text má mať <strong>účel</strong>. A v praxi sa najčastejšie stretneš s dvoma typmi:</p>
      <ul>
        <li><strong>Text na čítanie</strong> → cieľ je, aby človek <strong>pochopil</strong> (kontext, vysvetlenie, zhrnutie).</li>
        <li><strong>Text na konanie</strong> → cieľ je, aby človek <strong>spravil krok</strong> (rozhodnutie, úloha, potvrdenie, ďalší krok).</li>
      </ul>
      <p>👉 Kľúčový rozdiel:</p>
      <p><strong>Text na čítanie končí porozumením. Text na konanie končí akciou.</strong></p>
      <p>AI má tendenciu generovať texty, ktoré sa „dobre čítajú", ale často <strong>nevedú k jasnému ďalšiemu kroku</strong>. Preto sa v tomto LABe naučíme písať tak, aby bol výsledok <strong>použiteľný v reálnom živote</strong> (v práci aj osobne).</p>

      <hr />

      <h3>🧠 Ako spoznáš, že text je na konanie</h3>
      <p>Text na konanie má väčšinou jasne zodpovedané tieto 4 otázky:</p>
      <ol>
        <li><strong>Čo presne</strong> má človek urobiť?</li>
        <li><strong>Kto</strong> je zodpovedný?</li>
        <li><strong>Dokedy</strong> (alebo kedy)?</li>
        <li><strong>Čo je prvý najbližší krok</strong> (čo spraví hneď po dočítaní)?</li>
      </ol>
      <p>Ak tam niektorá odpoveď chýba, text sa často zmení na „pekné vysvetlenie" — ale <strong>nič sa nestane</strong>.</p>

      <hr />

      <h3>🧩 Mikropríklady (práca aj osobný život)</h3>
      <p><strong>🧑‍💼 Práca</strong></p>
      <ul>
        <li><strong>Na čítanie:</strong> „Chceli by sme vás informovať o zmene procesu…"</li>
        <li><strong>Na konanie:</strong> „Od pondelka platí zmena. <strong>Tvoja úloha:</strong> spraviť X. <strong>Dokedy:</strong> piatok 16:00. <strong>Postup:</strong> 3 kroky. <strong>Ak problém:</strong> napíš Y."</li>
      </ul>
      <p><strong>🧍‍♂️ Osobný život</strong></p>
      <ul>
        <li><strong>Na čítanie:</strong> „Mali by sme to doma nejako lepšie nastaviť…"</li>
        <li><strong>Na konanie:</strong> „Navrhujem toto: <strong>v nedeľu o 18:00</strong> to vyriešme. <strong>Ja spravím A</strong>, ty prosím <strong>B</strong>. Ak nestíhame, posuňme to na…"</li>
      </ul>
      <p>👉 Všimni si, že rozdiel nie je v tom, či je text „formálny".</p>
      <p>Rozdiel je v tom, či obsahuje <strong>konkrétne kroky a rozhodnutia</strong>.</p>

      <hr />

      <h3>✂️ Prečo dlhé texty znižujú porozumenie (v kontexte LABu)</h3>
      <p>Dlhé texty sú problém najmä vtedy, keď potrebuješ, aby človek:</p>
      <ul>
        <li>rýchlo pochopil pointu,</li>
        <li>našiel dôležité informácie,</li>
        <li>spravil konkrétny krok.</li>
      </ul>
      <p>Keď je text príliš dlhý:</p>
      <ul>
        <li>čitateľ <strong>preskakuje</strong>,</li>
        <li>dôležité informácie sa <strong>stratia v odsekoch</strong>,</li>
        <li>vzniká viac <strong>nedorozumení</strong>.</li>
      </ul>
      <p>👉 Preto v LABe budeme pracovať s pravidlom:</p>
      <p><strong>Najprv štruktúra, potom text, potom skracovanie.</strong></p>

      <hr />

      <h3>⚠️ Najčastejšie chyby v AI-generovaných textoch</h3>
      <p>Toto sú chyby, ktoré budeš v LABe vedieť rýchlo opraviť:</p>
      <p><strong>AI vata</strong> – veľa slov, málo informácie</p>
      <p>👉 signál: všeobecné frázy („je dôležité", „v dnešnej dobe", „komplexná téma")</p>
      <p><strong>Nejasný účel</strong> – nie je jasné, či text má iba vysvetliť alebo spustiť akciu</p>
      <p>👉 signál: chýba „čo/kto/dokedy/prvý krok"</p>
      <p><strong>Generické formulácie bez kontextu</strong></p>
      <p>👉 signál: znie to správne, ale sedelo by to na 100 iných situácií</p>
      <p><strong>Prílišná istota</strong> (aj keď AI nevie)</p>
      <p>👉 signál: „určite", „vždy", fakty bez opory</p>
      <p><strong>Zmiešaný tón</strong></p>
      <p>👉 signál: raz formálne, raz kamarátske, alebo emócie tam, kde majú byť fakty</p>

      <hr />

      <MiniTask title="Text na čítanie vs. text na konanie (A/B porovnanie)">
        <p><strong>Situácia</strong></p>
        <p>Dostal si text, ktorý znie „pekne", ale nie je jasné, čo má čitateľ spraviť. Tvoj cieľ je prepnúť AI do režimu <strong>text na konanie</strong>: jasné kroky, zodpovednosť a ďalší krok.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber si <strong>jeden variant</strong> (A alebo B).</p>
        <p>Skopíruj do AI najprv <strong>Prompt 1</strong> a potom <strong>Prompt 2</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>🅰️ Práca – interný oznam</strong></p>
        <p><strong>Text (vstup do AI):</strong></p>
        <p>„Ahojte, chceli by sme vás informovať o pripravovanej zmene v našom internom procese spracovania požiadaviek. Táto zmena nám pomôže zefektívniť komunikáciu a znížiť počet nedorozumení. Prosíme, aby ste tejto zmene venovali pozornosť a v prípade potreby sa na nás obrátili. Ďakujeme za spoluprácu."</p>
        <p><strong>Prompt 1 – slabá úloha (len 'napíš')</strong></p>
        <p>„Prepíš tento text tak, aby bol lepší."</p>
        <p><strong>Prompt 2 – dobrá úloha (text na konanie)</strong></p>
        <p>„Prepíš text na <strong>konkrétny text na konanie</strong>.</p>
        <p>Dodrž štruktúru:</p>
        <ol>
          <li>1 veta: <strong>Čo sa mení</strong></li>
          <li>4–6 bodov: <strong>čo má kto spraviť + dokedy</strong></li>
          <li>1 veta: <strong>prečo sa to robí (bez vaty)</strong></li>
          <li>sekcia <strong>'Ak nastane problém'</strong> (1–2 vety)</li>
        </ol>
        <p>Skráť text aspoň o <strong>30 %</strong>. Použi jednoduché slová."</p>

        <p><strong>🅱️ Osobný život – dohoda doma</strong></p>
        <p><strong>Text (vstup do AI):</strong></p>
        <p>„Chcel by som sa porozprávať o tom, ako máme doma veci nastavené, lebo mám pocit, že to poslednú dobu nefunguje úplne ideálne. Bolo by fajn, keby sme si to nejako prešli a dohodli sa, aby to bolo lepšie pre oboch. Daj vedieť, čo si o tom myslíš."</p>
        <p><strong>Prompt 1 – slabá úloha (len 'napíš')</strong></p>
        <p>„Prepíš tento text tak, aby bol lepší."</p>
        <p><strong>Prompt 2 – dobrá úloha (text na konanie)</strong></p>
        <p>„Prepíš text na <strong>konkrétnu dohodu</strong> (text na konanie).</p>
        <p>Dodrž štruktúru:</p>
        <ol>
          <li>1 veta: <strong>čo chcem vyriešiť</strong></li>
          <li>návrh termínu + otázka na potvrdenie</li>
          <li>3 body: <strong>o čom sa chceme dohodnúť</strong></li>
          <li>1 veta: <strong>čo spravíme hneď po dohode</strong></li>
        </ol>
        <p>Skráť text, vyhoď vatu, zachov rešpektujúci tón."</p>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Ktorý výstup je viac <strong>použiteľný okamžite</strong>? Prečo?</p>
        <p>V ktorom výstupe je jasné: <strong>čo / kto / dokedy / prvý krok</strong>?</p>
        <p>Kde sa objavila <strong>AI vata</strong> (aspoň 2 príklady viet)?</p>
        <p>Ktorý text je „na čítanie" a ktorý „na konanie"? Čo rozhodlo?</p>
        <p>Čo by si ešte doplnil, keby si bol čitateľ (čo ti chýba)?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 donúti AI urobiť <strong>konkrétny text na konanie</strong>: kroky, termín, zodpovednosť, next step. Prompt 1 vyrobí „uhladený text", ale často bez jasnej akcie.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
