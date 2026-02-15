import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P05() {
  const nav = getNavContext("m08-05-typy-automatizacii");
  return (
    <PageShell title="4️⃣ Typy automatizácií" {...nav}>

      <p>Keď už máš proces rozložený na kroky (a vieš, kde sú operácie a kde sú 4E kroky), prichádza kľúčová otázka:</p>
      <p>👉 <strong>Ktoré kroky nechám manuálne, ktoré nechám AI pomôcť a ktoré môžu bežať automaticky?</strong></p>
      <p>Aby to bolo jednoduché, budeme používať 3 typy automatizácie:</p>
      <ul>
        <li><strong>bezAI</strong> (pravidlá)</li>
        <li><strong>poloAI</strong> (AI navrhne, človek schváli)</li>
        <li><strong>AI-first</strong> (AI spraví viac krokov, človek dohliada)</li>
      </ul>

      <h3>1) bezAI automatizácia (pravidlá „ak–tak") ✅</h3>
      <p>Toto je automatizácia bez umelej inteligencie. Funguje, keď:</p>
      <ul>
        <li>pravidlá sú stabilné,</li>
        <li>kroky sú mechanické,</li>
        <li>chyba má nízky dopad.</li>
      </ul>
      <p><strong>Typické kroky:</strong> presun, uloženie, označenie, kopírovanie, notifikácia, export/import.</p>
      <p>👉 Často je to presne tá časť „O" z DROB (operácie).</p>
      <p><strong>Príklad (domáce financie):</strong></p>
      <ul>
        <li>keď sa objaví transakcia „Spotify" → priraď kategóriu „Zábava"</li>
        <li>keď príde výpis → ulož do priečinka „Banka"</li>
      </ul>

      <h3>2) poloAI (AI + človek) 🤝</h3>
      <p>Toto je najpraktickejší „sweet spot" v bežnom živote aj práci.</p>
      <p>AI spraví návrh (zhrnutie, triedenie, draft…), ale človek:</p>
      <ul>
        <li>skontroluje výstup,</li>
        <li>schváli alebo upraví,</li>
        <li>až potom ide výstup ďalej.</li>
      </ul>
      <p><strong>Typické kroky:</strong> 4E – Extract, Explain, Edit, Evaluate</p>
      <p>👉 AI pomáha, ale zodpovednosť ostáva na tebe.</p>
      <p><strong>Príklad (domáce financie):</strong></p>
      <ul>
        <li>AI navrhne kategórie pre nejasné transakcie → ty potvrdíš</li>
        <li>AI zhrnie „kam odišli peniaze" → ty skontroluješ a doplníš poznámku</li>
      </ul>

      <h3>3) AI-first (AI robí viac krokov) 🤖🧭</h3>
      <p>AI-first znamená, že AI nerobí len jednu pomocnú vec, ale:</p>
      <ul>
        <li>spracuje viac krokov,</li>
        <li>rozhoduje v rámci pravidiel,</li>
        <li>používa nástroje (ak sú napojené),</li>
        <li>a človek je skôr „dohľad".</li>
      </ul>
      <p>Používa sa, keď:</p>
      <ul>
        <li>proces je dobre popísaný,</li>
        <li>máš veľa príkladov,</li>
        <li>riziko chyby je ošetrené kontrolami.</li>
      </ul>
      <p><strong>Príklad (domáce financie):</strong></p>
      <ul>
        <li>systém pravidelne stiahne transakcie, AI ich zatriedi, označí anomálie a pripraví týždenný prehľad</li>
        <li>človek len pozrie „flagy" a prípadne opraví výnimky</li>
      </ul>

      <h3>🧠 Jednoduché pravidlo rozhodovania</h3>
      <p>Keď nevieš, čo kam patrí, použi tento „rýchly filter":</p>
      <ul>
        <li><strong>Je to mechanické a jasné?</strong> → skôr <strong>bezAI</strong></li>
        <li><strong>Je tam úsudok alebo nejasnosť?</strong> → skôr <strong>poloAI</strong></li>
        <li><strong>Je to stabilné, otestované a s kontrolami?</strong> → môže byť <strong>AI-first</strong></li>
        <li><strong>Je chyba drahá alebo ide to von?</strong> → radšej <strong>poloAI / manuál</strong></li>
      </ul>

      <h3>✅ Príklad z práce: odpoveď na opakujúci sa e-mail 📩</h3>
      <p><strong>Proces (príklad krokov):</strong></p>
      <ol>
        <li>Príde e-mail s otázkou</li>
        <li>Zistím, o aký typ otázky ide (téma)</li>
        <li>Skontrolujem, či nechýbajú dôležité údaje</li>
        <li>Pripravím odpoveď podľa šablóny</li>
        <li>Uložím prípad do interného prehľadu</li>
        <li>Odošlem odpoveď</li>
      </ol>
      <p>👉 Skús sa zamyslieť:</p>
      <ul>
        <li>ktoré kroky sú čisto mechanické a majú stabilné pravidlá,</li>
        <li>ktoré kroky sú skôr o pochopení textu,</li>
        <li>a ktoré kroky by si nikdy nenechal bežať „bez kontroly", ak to ide smerom k zákazníkovi.</li>
      </ul>

      <h3>✅ Príklad z osobného života: domáce financie 💳</h3>
      <p><strong>Proces (príklad krokov):</strong></p>
      <ol>
        <li>Otvorím prehľad transakcií za týždeň</li>
        <li>Označím nejasné transakcie, ktoré neviem zaradiť</li>
        <li>Doplním chýbajúce popisy alebo poznámky</li>
        <li>Zhrniem si, koľko som minul v hlavných kategóriách</li>
        <li>Skontrolujem, či tam nie je niečo „nezvyčajné"</li>
        <li>Uložím výsledok alebo si zapíšem 2 zistenia</li>
      </ol>
      <p>👉 Skús sa zamyslieť:</p>
      <ul>
        <li>čo je tu stabilná rutina,</li>
        <li>kde by AI vedela pomôcť ako copilot,</li>
        <li>a čo by si nechal radšej manuálne.</li>
      </ul>

      <MiniTask title="Priraď typ automatizácie 🧩">
        <p><strong>Zadanie</strong></p>
        <p>Vezmi si svoj proces „domáce financie" z lekcie 2 a označenie krokov z lekcie 3.</p>
        <p>Ku každému kroku dopíš, či je to:</p>
        <ul>
          <li><strong>bezAI</strong></li>
          <li><strong>poloAI</strong></li>
          <li><strong>AI-first</strong></li>
          <li>alebo <strong>manuál</strong> (ak to nechceš automatizovať vôbec)</li>
        </ul>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Prejdi si krok po kroku svoj proces (6–8 krokov).</li>
          <li>Ku každému kroku dopíš jeden štítok: <strong>bezAI / poloAI / AI-first / manuál</strong></li>
          <li>Ku každému dopíš <strong>1 krátke prečo</strong> (max 5–10 slov).<br />(napr. „jasné pravidlo", „potrebujem kontrolu", „nejasné", „riziko")</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna)</strong></p>
        <ol>
          <li>… → (bezAI / poloAI / AI-first / manuál) – prečo: …</li>
          <li>… → (…) – prečo: …</li>
          <li>… → (…) – prečo: …</li>
          <li>… → (…) – prečo: …</li>
          <li>… → (…) – prečo: …</li>
          <li>… → (…) – prečo: …</li>
          <li>… → (…) – prečo: … <em>(voliteľné)</em></li>
          <li>… → (…) – prečo: … <em>(voliteľné)</em></li>
        </ol>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> každý krok má štítok + krátke „prečo".</li>
          <li><strong>⭐ Dobré:</strong> väčšina operácií je bezAI, väčšina 4E krokov je poloAI.</li>
          <li><strong>🌟 Výborné:</strong> aspoň 1 krok máš označený ako manuál a vieš jasne prečo.</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
