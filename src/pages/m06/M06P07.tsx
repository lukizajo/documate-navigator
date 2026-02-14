import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M06P07() {
  const nav = getNavContext("m06-07-zavadzanie");
  return (
    <PageShell title="6️⃣ Postupné zavádzanie do praxe" {...nav}>

      <p>Po predošlej lekcii už vieš jednu dôležitú vec:</p>
      <p>👉 <strong>AI buď pomáha, alebo je na obtiaž. Medzi tým nie je nič.</strong></p>
      <p>Najväčšia chyba, ktorú ľudia robia, je, že sa ju snažia:</p>
      <ul>
        <li>používať všade naraz,</li>
        <li>alebo ju po prvom sklamaní úplne zavrhnú.</li>
      </ul>
      <p>Cieľ tejto lekcie je jednoduchý:</p>
      <p><strong>zaviesť AI do práce tak, aby sa stala rutinou – nie ďalšou povinnosťou.</strong></p>

      <h3>🧩 Pravidlo „1–1–1" (najjednoduchší spôsob)</h3>
      <p>Aby si sa nestratil, drž sa tohto pravidla:</p>
      <ul>
        <li><strong>1 use-case</strong></li>
        <li><strong>1 šablóna / prompt</strong></li>
        <li><strong>1 rozhodnutie (používam / nepoužívam)</strong></li>
      </ul>
      <p>👉 Ak máš pocit chaosu, je to signál, že robíš priveľa naraz.</p>

      <h3>🔁 Ako vyzerá zdravý proces zavádzania</h3>
      <p><strong>1️⃣ Najprv jeden „starter"</strong></p>
      <p>Používaj <strong>iba jeden use-case</strong>, ktorý:</p>
      <ul>
        <li>má nízke riziko,</li>
        <li>robíš často,</li>
        <li>už si si ho otestoval (pred/po).</li>
      </ul>
      <p>👉 Cieľ: vybudovať <strong>návyk</strong>, nie optimalizovať celý job.</p>

      <p><strong>2️⃣ Potom drobné vylepšenia</strong></p>
      <p>Namiesto hľadania „lepšieho nástroja":</p>
      <ul>
        <li>dolaď prompt (výstup, tón, obmedzenia),</li>
        <li>pridaj kontrolný krok,</li>
        <li>ulož si prompt bokom (poznámky, Notion, dokument).</li>
      </ul>
      <p>👉 Malé úpravy majú väčší efekt než veľké zmeny.</p>

      <p><strong>3️⃣ Až potom rozširovanie</strong></p>
      <p>Až keď:</p>
      <ul>
        <li>výsledky sú stabilné,</li>
        <li>vieš, kde sú riziká,</li>
        <li>a vieš, kedy AI <strong>nepoužiť</strong>,</li>
      </ul>
      <p>môžeš pridať:</p>
      <ul>
        <li>ďalší use-case,</li>
        <li>ďalší prompt,</li>
        <li>alebo zapojiť kolegov.</li>
      </ul>

      <h3>⚠️ Signály, že ideš príliš rýchlo</h3>
      <p>Zbystri, ak sa pristihneš pri tom, že:</p>
      <ul>
        <li>máš 10 promptov, ale nepoužívaš ani jeden pravidelne,</li>
        <li>stále ladíš, ale nemáš jasný prínos,</li>
        <li>kontrola výstupu trvá dlhšie než práca bez AI,</li>
        <li>nevieš vysvetliť, <em>prečo</em> AI používaš.</li>
      </ul>
      <p>👉 Vtedy sa vráť späť k <strong>1–1–1</strong>.</p>

      <h3>🧠 AI ako návyk, nie ako projekt</h3>
      <p>AI v práci nie je:</p>
      <ul>
        <li>nový systém,</li>
        <li>nový proces,</li>
        <li>ani „transformačný projekt".</li>
      </ul>
      <p>Je to skôr:</p>
      <p>👉 <strong>zvyk ako Ctrl+C / Ctrl+V</strong>, ktorý používaš tam, kde dáva zmysel.</p>
      <p>Ak si na konci dňa ušetril 10–15 minút bez zvýšenia stresu, vyhral si.</p>

      <MiniTask title="Postupné zavádzanie bez stresu (2 úrovne)">
        <p><strong>🟢 Základná verzia (2–3 min)</strong></p>
        <p>Odpovedz si (stačí v hlave alebo jednou vetou):</p>
        <ul>
          <li>Akú <strong>1 vec z modulu M6</strong> by si vedel použiť v práci?</li>
          <li>Je to niečo, čo robíš <strong>často</strong>, alebo skôr výnimočne?</li>
        </ul>
        <p>👉 Hotovo. Aj toto sa ráta.</p>
        <p><strong>🔵 Praktická verzia (5–7 min)</strong></p>
        <p><em>(pre tých, čo to chcú reálne skúsiť)</em></p>
        <p>Doplň si:</p>
        <ul>
          <li><strong>Môj starter use-case:</strong> ___________</li>
          <li><strong>Prompt / šablóna, ktorú budem používať:</strong> ___________</li>
          <li><strong>Kedy AI nepoužijem:</strong> ___________</li>
          <li><strong>Ako budem kontrolovať výstup (2 veci):</strong> ___________</li>
          <li><strong>Po týždni spravím rozhodnutie:</strong> pokračujem / upravujem / stop</li>
        </ul>
        <p><strong>❓ Rýchla sebareflexia (ÁNO/NIE)</strong></p>
        <ul>
          <li>Viem si predstaviť, že by mi AI ušetrila aspoň <strong>5 minút</strong>?</li>
          <li>Je aspoň jedna úloha, kde by som sa <strong>nebál skúsiť AI</strong>?</li>
          <li>Rozumiem, že AI <strong>nemusím používať všade</strong>?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Nie každý musí hneď zavádzať AI do praxe. U niektorých ľudí stačí, že si odnesú:</p>
        <ul>
          <li>kedy má AI zmysel,</li>
          <li>kedy ju radšej nepoužiť,</li>
          <li>a 1 konkrétny nápad, ku ktorému sa môžu vrátiť neskôr.</li>
        </ul>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prístup je zdravší po prvom úspešnom experimente?"
        options={[
          { label: "🌕", text: "Pridať hneď 5 ďalších use-casov" },
          { label: "⭐", text: "Vymeniť nástroj za iný" },
          { label: "☀️", text: "Stabilizovať jeden use-case a až potom rozširovať" },
        ]}
        correct="☀️"
        explanation="Návyk vzniká opakovaním, nie množstvom."
      />

      <MiniTest
        question="Ktorý signál znamená, že by si mal spomaliť?"
        options={[
          { label: "🌕", text: "Máš jeden prompt, ktorý funguje" },
          { label: "⭐", text: "Kontrola výstupu trvá dlhšie než práca bez AI" },
          { label: "☀️", text: "Vieš povedať, kedy AI nepoužiješ" },
        ]}
        correct="⭐"
        explanation="Ak AI neprináša čistý prínos, niečo je nastavené zle."
      />

      <MiniTest
        question="Kedy má zmysel zapojiť kolegov?"
        options={[
          { label: "🌕", text: "Keď máš stabilný use-case a vieš vysvetliť prínos" },
          { label: "⭐", text: "Hneď na začiatku, nech sa učíte spolu" },
          { label: "☀️", text: "Až keď AI používa celé oddelenie" },
        ]}
        correct="🌕"
        explanation="Zdieľať má zmysel až to, čo reálne funguje."
      />
    </PageShell>
  );
}
