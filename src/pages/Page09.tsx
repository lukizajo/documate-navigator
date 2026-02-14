import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page09() {
  const nav = getNavContext("09-halucinacie-teplota");
  return (
    <PageShell
      title="9️⃣ Výkon, halucinácie a teplota modelov"
      {...nav}
    >
      <p><em>V tejto časti sa pozrieme na to, prečo AI vie byť extrémne výkonná a zároveň nespoľahlivá. Pochopíme, v čom je jej sila, prečo občas „vymýšľa" a ako vieme jej správanie do istej miery ovplyvniť pomocou nastavenia teploty modelu.</em></p>

      <h2>⚙️ Výkon AI: kde je silná – a kde nie?</h2>
      <p>AI je veľmi dobrá v:</p>
      <ul>
        <li>generovaní návrhov a variantov</li>
        <li>práci s veľkým objemom informácií</li>
        <li>sumarizácii a štruktúrovaní obsahu</li>
      </ul>
      <p>AI je slabá v:</p>
      <ul>
        <li>overovaní pravdivosti faktov</li>
        <li>chápaní kontextu reálneho sveta</li>
        <li>zodpovednosti za rozhodnutia</li>
      </ul>
      <p>👉 Výkon AI je vysoký, <strong>spoľahlivosť nie je zaručená</strong>.</p>

      <h2>🎭 Halucinácie: keď AI znie presvedčivo, ale nemá pravdu</h2>
      <p><strong>Halucinácia</strong> je situácia, keď AI vytvorí odpoveď, ktorá:</p>
      <ul>
        <li>znie logicky a sebavedomo</li>
        <li>ale je fakticky nesprávna alebo vymyslená</li>
      </ul>
      <p>Prečo sa to deje:</p>
      <ul>
        <li>AI pracuje s pravdepodobnosťou, nie s pravdou</li>
        <li>snaží sa odpovedať aj vtedy, keď si nie je istá</li>
        <li>nemá prirodzený mechanizmus „neviem"</li>
      </ul>
      <p>👉 Presvedčivý tón ≠ správna odpoveď.</p>

      <h2>🔍 Ako znížiť riziko halucinácií?</h2>
      <ul>
        <li>pýtaj si zdroje alebo vysvetlenie postupu</li>
        <li>kritické fakty vždy overuj</li>
        <li>porovnávaj odpovede z viacerých zdrojov</li>
        <li>pri dôležitých témach zapoj odborníka</li>
      </ul>
      <p>👉 AI má byť <strong>asistent</strong>, nie autorita.</p>

      <h2>🌡️ Teplota modelov</h2>
      <p>Teplota určuje mieru kreativity odpovedí AI. Väčšina bežných chatbotov má prednastavenú teplotu približne v rozmedzí <strong>0,7 – 1,0</strong>, čo je kompromis medzi presnosťou a prirodzeným prejavom.</p>
      <ul>
        <li><strong>nízka teplota (0,0 – 0,3)</strong> – AI odpovedá konzervatívne a fakticky, čo je vhodné pre analýzy, návody a prácu s faktami.</li>
        <li><strong>stredná teplota (0,4 – 0,8)</strong> – ide o vyvážený režim vhodný pre väčšinu bežných úloh</li>
        <li><strong>vysoká teplota (0,9 – 1,5+)</strong> – sú odpovede kreatívnejšie a variabilnejšie, no rastie riziko nepresností a halucinácií</li>
      </ul>

      <h2>🎯 Čo si z tejto lekcie odniesť?</h2>
      <ul>
        <li>AI zvláda veľa úloh, ale fakty si treba vždy <strong>overovať</strong></li>
        <li>model si vždy môže niečo <strong>domyslieť</strong>, pokiaľ mu to vyslovene <strong>nezakážeš</strong></li>
        <li>je potrebné si zhodnotiť úlohu, ktorú od AI chceme</li>
        <li>výsledok vieme ovplyvniť <strong>nastavením teploty</strong> modelu</li>
      </ul>
      <p>👉 AI <strong>nemá</strong> vždy pravdu!</p>

      <MiniTask title="Otestuj 2 prompty a porovnaj výsledok (HALUCINÁCIE vs. KONTROLA)">
        <p><strong>Situácia</strong></p>
        <p>Chceš si kúpiť jazdený mobil z bazára. Predajca napísal tento popis:</p>
        <blockquote>„iPhone 13, 128 GB, modrý. Batéria 86 %. Bez škrabancov, všetko funguje. Pridám kryt a kábel. Cena 8 500 Kč. Osobný odber Praha."</blockquote>

        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>❌ Prompt 1 (ľahko to skĺzne do domýšľania)</strong></p>
        <blockquote>„Je to dobrá kúpa? Zhodnoť túto ponuku a odporuč mi, či to mám kúpiť."</blockquote>

        <p><strong>✔️ Prompt 2 (kontrola proti halucináciám)</strong></p>
        <blockquote>{'"Zhodnoť túto ponuku, ale dodrž pravidlá:\n\nOpieraj sa iba o informácie, ktoré sú v popise.\nNevymýšľaj si žiadne chýbajúce detaily (stav displeja, záruka, pôvod, blokácia, servis…).\nNajprv napíš 3 veci, ktoré vieme z popisu.\nPotom napíš 5 otázok, ktoré mi musíš položiť, aby sa dalo rozhodnúť bezpečnejšie.\nAž potom daj stručné odporúčanie v 2 vetách: \'Skôr áno / skôr nie\' + prečo."'}</blockquote>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Pridal model pri Prompte 1 detaily, ktoré v popise vôbec nie sú?</li>
          <li>Je pri Prompte 2 jasne oddelené „čo vieme" vs. „čo treba zistiť"?</li>
          <li>Je odporúčanie pri Prompte 2 opatrnejšie a viac pod kontrolou?</li>
          <li>Ktorý výstup by ti viac pomohol rozhodnúť sa bez toho, aby si riskoval „domyslené fakty"?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>
          Prompt 1 často vedie k sebavedomému hodnoteniu, kde AI začne dopĺňať chýbajúce informácie „aby to znelo kompletne". Prompt 2 nastaví brzdy: núti model držať sa faktov, priznať neistotu a najprv si vypýtať dôležité otázky. To výrazne znižuje riziko halucinácií.
        </p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prompt je najlepší, ak chceš znížiť riziko halucinácií a mať použiteľný výstup? Situácia: Potrebuješ stručné a čo najspoľahlivejšie vysvetlenie (nie kreatívne nápady). Vyber, ktorá možnosť (🌕 /⭐ /☀️) je najlepšia."
        options={[
          { label: "🌕", text: '„Stručne mi vysvetli, ako to funguje, v 5–7 vetách. Nech je to jednoduché a zrozumiteľné."' },
          { label: "⭐", text: '„Stručne mi vysvetli, ako to funguje, v 5–7 vetách. Ak si nie si istá, radšej to odhadni tak, aby to znelo logicky a plynulo."' },
          { label: "☀️", text: '„Stručne mi vysvetli, ako to funguje, v 5–7 vetách. Ak si nie si istá, napíš, čo nevieš a čo si mám overiť. Nevymýšľaj si chýbajúce fakty. Ak uvádzaš konkrétne tvrdenie, pridaj aj dôvod alebo postup, ako si k nemu dospela."' },
        ]}
        correct="☀️"
        explanation={'Je to stále realistický prompt, ale pridáva pravidlá, ktoré znižujú halucinácie: radšej priznať neistotu, nevyplňovať diery „odhadom" a ukázať postup/dôvod, aby sa to dalo overiť.'}
      />
    </PageShell>
  );
}
