import { PageShell } from "@/components/PageShell";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page09() {
  const nav = getNavContext("09-halucinacie-teplota");
  return (
    <PageShell
      title="9️⃣ Výkon, halucinácie a teplota modelov"
      tldr={[
        "AI je výkonná v návrhoch a sumarizácii, slabá v overovaní faktov",
        "Halucinácia = AI znie presvedčivo, ale odpoveď je fakticky nesprávna",
        "Presvedčivý tón ≠ správna odpoveď",
        "Teplota modelu ovplyvňuje mieru kreativity vs. presnosti",
        "AI má byť asistent, nie autorita – vždy overuj kritické fakty",
      ]}
      {...nav}
    >
      <h2>💪 Výkon AI: kde je silná – a kde nie?</h2>
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
      <p>👉 Výkon AI je vysoký, spoľahlivosť nie je zaručená.</p>

      <h2>🫧 Halucinácie: keď AI znie presvedčivo, ale nemá pravdu</h2>
      <p>Halucinácia je situácia, keď AI vytvorí odpoveď, ktorá znie logicky a sebavedomo, ale je fakticky nesprávna alebo vymyslená.</p>
      <p>Prečo sa to deje:</p>
      <ul>
        <li>AI pracuje s pravdepodobnosťou, nie s pravdou</li>
        <li>snaží sa odpovedať aj vtedy, keď si nie je istá</li>
        <li>nemá prirodzený mechanizmus „neviem"</li>
      </ul>
      <p>👉 Presvedčivý tón ≠ správna odpoveď.</p>

      <h3>Ako znížiť riziko halucinácií?</h3>
      <ul>
        <li>pýtaj si zdroje alebo vysvetlenie postupu</li>
        <li>kritické fakty vždy overuj</li>
        <li>porovnávaj odpovede z viacerých zdrojov</li>
        <li>pri dôležitých témach zapoj odborníka</li>
      </ul>
      <p>👉 AI má byť asistent, nie autorita.</p>

      <h2>🌡️ Teplota modelov</h2>
      <p>Teplota určuje mieru kreativity odpovedí AI. Väčšina chatbotov má prednastavenú teplotu približne 0,7 – 1,0.</p>
      <ul>
        <li><strong>Nízka teplota (0,0 – 0,3)</strong> – konzervatívne a faktické odpovede. Vhodné pre analýzy, návody a prácu s faktami.</li>
        <li><strong>Stredná teplota (0,4 – 0,8)</strong> – vyvážený režim pre väčšinu bežných úloh.</li>
        <li><strong>Vysoká teplota (0,9 – 1,5+)</strong> – kreatívnejšie odpovede, ale rastie riziko nepresností a halucinácií.</li>
      </ul>

      <h2>🎯 Čo si z tejto lekcie odniesť?</h2>
      <ul>
        <li>AI zvláda veľa úloh, ale fakty si treba vždy overovať</li>
        <li>model si vždy môže niečo domyslieť, pokiaľ mu to nezakážeš</li>
        <li>výsledok vieme ovplyvniť nastavením teploty modelu</li>
        <li>AI nemá vždy pravdu!</li>
      </ul>

      <MiniTask title="Otestuj prompty – halucinácie vs. kontrola">
        <p><strong>Situácia:</strong> Chceš si kúpiť jazdený mobil z bazára. Predajca napísal popis:</p>
        <blockquote>„iPhone 13, 128 GB, modrý. Batéria 86 %. Bez škrabancov, všetko funguje. Pridám kryt a kábel. Cena 8 500 Kč. Osobný odber Praha."</blockquote>
        <p><strong>Inštrukcia:</strong> Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky porovnaj.</p>
        <p><strong>❌ Prompt 1 (ľahko to skĺzne do domýšľania):</strong></p>
        <blockquote>„Je to dobrá kúpa? Zhodnoť túto ponuku a odporuč mi, či to mám kúpiť."</blockquote>
        <p><strong>✅ Prompt 2 (kontrola proti halucináciám):</strong></p>
        <blockquote>„Zhodnoť túto ponuku, ale dodrž pravidlá: Opieraj sa iba o informácie z popisu. Nevymýšľaj si chýbajúce detaily. Najprv napíš 3 veci, ktoré vieme z popisu. Potom 5 otázok na bezpečnejšie rozhodnutie. Až potom stručné odporúčanie."</blockquote>
        <p><strong>Porovnávacie otázky:</strong></p>
        <ul>
          <li>Pridal model pri Prompte 1 detaily, ktoré v popise vôbec nie sú?</li>
          <li>Je pri Prompte 2 jasne oddelené „čo vieme" vs. „čo treba zistiť"?</li>
          <li>Je odporúčanie pri Prompte 2 opatrnejšie a viac pod kontrolou?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>
          Prompt 1 často vedie k sebavedomému hodnoteniu, kde AI začne dopĺňať chýbajúce informácie.
          Prompt 2 nastaví brzdy: núti model držať sa faktov, priznať neistotu a najprv si vypýtať
          dôležité otázky. To výrazne znižuje riziko halucinácií.
        </p>
      </ExpectedFinding>

      <MiniTest
        question="Ktorý prompt je najlepší, ak chceš znížiť riziko halucinácií a mať použiteľný výstup?"
        options={[
          { label: "🌕", text: '„Stručne mi vysvetli, ako to funguje, v 5–7 vetách. Nech je to jednoduché a zrozumiteľné."' },
          { label: "⭐", text: '„Stručne mi vysvetli, v 5–7 vetách. Ak si nie si istá, radšej to odhadni tak, aby to znelo logicky."' },
          { label: "🔵", text: '„Stručne mi vysvetli, v 5–7 vetách. Ak si nie si istá, napíš čo nevieš. Nevymýšľaj si chýbajúce fakty. Pri tvrdeniach pridaj dôvod alebo postup."' },
        ]}
        correct="🔵"
        explanation={'Pridáva pravidlá, ktoré znižujú halucinácie: radšej priznať neistotu, nevyplňovať diery „odhadom" a ukázať postup/dôvod.'}
      />
    </PageShell>
  );
}
