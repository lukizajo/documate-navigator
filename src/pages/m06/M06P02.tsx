import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M06P02() {
  const nav = getNavContext("m06-02-kedy-zmysel");
  return (
    <PageShell title="1️⃣ Kedy má AI v práci zmysel" {...nav}>

      <p>Predstav si, že máš v tíme <strong>šikovného stážistu</strong>. Vie písať, vie sumarizovať, vie navrhnúť text, vie vymyslieť nápady… ale nepozná tvoju firmu, tvojich klientov ani všetky pravidlá.</p>
      <p>A teraz to podstatné: <strong>keď mu dáš dobré zadanie, ušetrí ti veľa času. Keď mu dáš zlé zadanie, vyrobí ti peknú hlúposť.</strong> 🙂</p>
      <p>AI v práci dáva zmysel hlavne vtedy, keď ju používaš ako <strong>prvý návrh, pomocníka a urýchľovač</strong>, nie ako „poslednú pravdu".</p>

      <h3>🧩 Kedy sa AI oplatí (typické situácie)</h3>
      <p>AI sa najviac oplatí pri úlohách, ktoré sú:</p>
      <p><strong>✔️ Textové a komunikačné</strong></p>
      <ul>
        <li>emaily, odpovede, oznámenia</li>
        <li>návrh popisu produktu, interný návod</li>
        <li>prepis „hrubých poznámok" do zrozumiteľného textu</li>
      </ul>
      <p><strong>✔️ Opakované a šablónovité</strong></p>
      <ul>
        <li>stále dokola odpovedáš na podobné otázky</li>
        <li>stále dokola píšeš rovnaký typ dokumentu (zhrnutie, zápis, status)</li>
      </ul>
      <p><strong>✔️ „Prvý návrh" (nie finále)</strong></p>
      <ul>
        <li>chceš rýchlo štartovať a potom doladiť</li>
        <li>chceš kostru, z ktorej spravíš finálny výstup ty</li>
      </ul>
      <p><strong>✔️ Úlohy s jasným vstupom a výstupom</strong></p>
      <ul>
        <li>máš čo vložiť (poznámky, body, dáta, text)</li>
        <li>vieš presne povedať, čo chceš dostať (forma, rozsah, tón)</li>
      </ul>
      <p>👉 Jedna veta, ktorú si zapamätaj:</p>
      <p><strong>AI je skvelá na „pripraviť", „zhrnúť", „navrhnúť", „preformulovať".</strong></p>

      <h3>⚠️ Kedy sa AI neoplatí (alebo treba extra opatrnosť)</h3>
      <p>AI sa neoplatí (alebo je riziková), keď:</p>
      <p><strong>❌ Ide o rozhodnutie a zodpovednosť</strong></p>
      <ul>
        <li>právne a compliance rozhodnutia</li>
        <li>zdravotné odporúčania</li>
        <li>finančné rozhodnutia „na istotu"</li>
      </ul>
      <p>AI môže pomôcť s podkladmi — ale rozhodnutie musí byť tvoje.</p>
      <p><strong>❌ Chýba kontext a kontrola</strong></p>
      <p>Keď nemáš čas to čítať a overovať, AI ti môže skôr uškodiť.</p>
      <p><strong>❌ Pracuješ s citlivými údajmi</strong></p>
      <ul>
        <li>osobné údaje, interné informácie, dáta o klientoch</li>
      </ul>
      <p>Tu platí: <strong>ak si nie si istý, radšej to do AI nedávaj</strong> (alebo anonymizuj).</p>
      <p><strong>❌ Potrebuješ 100% presnosť faktov</strong></p>
      <p>AI vie znieť presvedčivo aj vtedy, keď sa mýli. Preto pri faktoch platí pravidlo:</p>
      <p><strong>dôveruj, ale overuj</strong>.</p>

      <h3>🧠 Praktické pravidlo „AI fit" (rýchly filter)</h3>
      <p>Keď váhaš, spýtaj sa na 4 otázky:</p>
      <ol>
        <li>Je to <strong>textová</strong> alebo „slovná" úloha?</li>
        <li>Je to <strong>opakovateľné</strong> alebo šablónovité?</li>
        <li>Viem AI dať <strong>jasný vstup</strong> (poznámky, body, text)?</li>
        <li>Viem presne povedať <strong>výstup</strong> (forma, tón, rozsah)?</li>
      </ol>
      <p>✅ Ak máš <strong>aspoň 3× ÁNO</strong>, AI sa oplatí vyskúšať.</p>
      <p>❌ Ak máš <strong>2× a menej</strong>, najskôr ti to skôr pridá robotu než ušetrí čas.</p>

      <MiniTask title="Vyber správne úlohy pre AI (5–7 min)">
        <p><strong>Zadanie</strong></p>
        <p>Predstav si, že máš dnes tieto úlohy. Vyber <strong>2</strong>, pri ktorých AI dáva najväčší zmysel.</p>
        <p>A) Rozhodnúť, či je nový proces v súlade s reguláciou.</p>
        <p>B) Napísať email zákazníkovi: ospravedlnenie + ďalší postup (slušný tón).</p>
        <p>C) Zhrnúť 20-minútový meeting do 7 odrážok + úlohy a vlastníci.</p>
        <p>D) Určiť finálnu cenu ponuky pre strategického klienta.</p>
        <p>E) Vypočítať mzdy a odovzdať ich na spracovanie bez kontroly.</p>
        <p>F) Navrhnúť 10 názvov pre interný projekt a 3 slogany.</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Vyber 2 písmená (A–F).</li>
          <li>Pre každú vybranú úlohu napíš <strong>1 vetu</strong>, prečo sa hodí pre AI (podľa „AI fit" filtra).</li>
          <li>Skús si na jednu z nich rovno spraviť prompt:</li>
        </ol>
        <p><strong>Prompt šablóna (rýchla verzia):</strong></p>
        <p>„Si môj pracovný asistent. Úloha: [čo]. Kontext: [kto/komu/prečo]. Výstup: [forma + rozsah]. Tón: [napr. profesionálny, ľudský]. Obmedzenia: [čo nesmieš]."</p>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>2 vybrané úlohy + krátke zdôvodnenie</li>
          <li>1 prompt, ktorý vieš hneď použiť</li>
        </ul>
      </MiniTask>

      <MiniTest
        question="Si unavený a potrebuješ rýchlo poslať citlivý email klientovi (obsahuje konkrétne čísla z jeho účtu). Čo spravíš?"
        options={[
          { label: "🌕", text: "Vložím email aj čísla, nech AI spraví čo najpresnejší návrh." },
          { label: "⭐", text: "Urobím anonymizovanú verziu (bez čísel a identifikátorov), AI nech spraví štruktúru a tón, čísla doplním až ja." },
          { label: "☀️", text: "Radšej AI nepoužijem vôbec, aj keď mám málo času." },
        ]}
        correct="⭐"
        explanation="Využiješ AI na formu a jazyk, ale dáta držíš mimo."
      />

      <MiniTest
        question="AI ti pripraví zápis zo stretnutia. Vyzerá skvelo, ale ty si počas callu multitaskoval a nepamätáš si detaily. Čo je najlepší ďalší krok?"
        options={[
          { label: "🌕", text: "Skontrolujem aspoň 3 veci: rozhodnutia, úlohy (owner), termíny." },
          { label: "⭐", text: "Pošlem to hneď, nech to nezdržujem." },
          { label: "☀️", text: "Požiadam AI, nech ešte pridá viac detailov, aby to bolo \u201Epresnejšie\u201C." },
        ]}
        correct="🌕"
        explanation={"Minimum kontroly, ktoré zachráni najčastejšie chyby. (AI môže doplniť \u201Edetaily\u201C, ktoré neboli povedané.)"}
      />

      <MiniTest
        question={"Ktorá z týchto úloh je \u201EAI-friendly\u201C, ale zároveň často vedie k problémom, ak ju človek robí bez kontroly?"}
        options={[
          { label: "🌕", text: "Zhrnúť dlhý dokument do 5 bodov pre šéfa." },
          { label: "⭐", text: "Vymyslieť 10 názvov pre interný projekt." },
          { label: "☀️", text: "Vypočítať faktúry a exportovať finálne sumy do systému." },
        ]}
        correct="🌕"
        explanation="Sumarizácia znie nevinne, ale vie vynechať kritické detaily alebo zmeniť význam."
      />

      <MiniTest
        question={"Máš úlohu, ktorá spĺňa 3\u00D7 \u201EAI fit\u201C, ale je to prvýkrát, čo ju chceš robiť s AI. Čo je najlepší prístup?"}
        options={[
          { label: "🌕", text: "Hneď to nasadím na celý týždeň, nech vidím prínos." },
          { label: "⭐", text: "Spravím jeden test \u201Epred/po\u201C na malej vzorke a porovnám čas + počet opráv." },
          { label: "☀️", text: "Dám AI veľa slobody, nech ukáže kreativitu." },
        ]}
        correct="⭐"
        explanation="Malý bezpečný experiment je v práci zlatý štandard."
      />

      <MiniTest
        question={"AI odpovie na internú otázku kolegu veľmi sebavedomo, ale ty si nie si istý. Čo spravíš?"}
        options={[
          { label: "🌕", text: "Pošlem to, veď AI býva presná." },
          { label: "⭐", text: "Prepíšem to inými slovami a pošlem." },
          { label: "☀️", text: "Požiadam AI o zdroj/odkaz alebo si info overím v interných materiáloch." },
        ]}
        correct="☀️"
        explanation="Preformulovanie nerieši pravdivosť."
      />
    </PageShell>
  );
}
