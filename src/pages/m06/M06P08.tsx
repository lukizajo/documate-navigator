import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M06P08() {
  const nav = getNavContext("m06-08-bezpecnost");
  return (
    <PageShell title={`7\uFE0F\u20E3 Bezpe\u010Dnos\u0165, etika a firemn\u00E9 pravidl\u00E1`} {...nav}>

      <p>Teraz, keď vieš, ako AI používať a kde ti šetrí čas, musíš vedieť aj to, <strong>kedy ju použiť nemôžeš alebo je to zbytočné riziko</strong>.</p>
      <p>👉 Jednoduché pravidlo:</p>
      <p><strong>Čokoľvek do AI vložíš, ber ako keby to mohlo uniknúť.</strong></p>
      <p>Nie preto, že musí — ale preto, že takto sa správa zodpovedný človek v práci.</p>

      <h3>🧩 3 farby informácií (🟢 / 🟠 / 🔴)</h3>
      <p><strong>🟢 Zelené = väčšinou OK</strong></p>
      <p>Vhodné veci bez citlivých detailov:</p>
      <ul>
        <li>všeobecné texty, návrhy formulácií, štruktúra emailu</li>
        <li>brainstorming nápadov (bez interných tajomstiev)</li>
        <li>prepis textu do zrozumiteľnejšej formy</li>
        <li>anonymizované príklady</li>
      </ul>
      <p>👉 AI nech rieši <strong>formu, štruktúru, tón</strong>.</p>

      <p><strong>🟠 Oranžové = opatrne (anonymizuj + kontroluj)</strong></p>
      <p>Veci, ktoré sú interné alebo citlivé „na hrane":</p>
      <ul>
        <li>interné procesy (bez konkrétnych systémov/prístupov)</li>
        <li>pracovné poznámky bez mien a identifikátorov</li>
        <li>texty, kde záleží na presnosti, ale nie sú tam osobné údaje</li>
      </ul>
      <p>👉 Použi AI, ale:</p>
      <ul>
        <li><strong>odstráň identifikátory</strong>,</li>
        <li>výsledok <strong>kontroluj</strong> (fakty, sľuby, tón).</li>
      </ul>

      <p><strong>🔴 Červené = nedávaj do AI (ak nemáš schválený interný nástroj)</strong></p>
      <p>Sem patria veci, ktoré by nemali skončiť verejne alebo mimo firmy:</p>
      <ul>
        <li><strong>osobné údaje (GDPR):</strong> mená, adresy, telefóny, rodné čísla, zdravotné údaje</li>
        <li><strong>finančné a mzdové údaje:</strong> platy, interné rozpočty, cenové stratégie, náklady</li>
        <li><strong>obchodné tajomstvá:</strong> klientske zoznamy, nové produkty, stratégie</li>
        <li><strong>interné problémy a konflikty:</strong> personálne spory, hodnotenia výkonu, citlivé situácie</li>
        <li><strong>prístupy a bezpečnosť:</strong> heslá, tokeny, interné linky, prístupy do systémov</li>
        <li><strong>konkrétne zmluvy / právne texty</strong>, ak nemáš istotu, že to môžeš zdieľať</li>
      </ul>
      <p>👉 Ak si <strong>nie si istý</strong>, ber to ako 🔴.</p>

      <h3>✅ Ako sa správať s citlivými údajmi a AI (3 možnosti)</h3>
      <p>Ak je téma citlivá, stále môžeš AI využiť — len bezpečnejšie.</p>
      <p><strong>Možnosť 1: Anonymizuj</strong></p>
      <ul>
        <li>❌ ZÁKAZ: „Tomáš Pavlíček z IT oddelenia sa sťažuje, že nie je spokojný s platom a premýšľa nad odchodom…"</li>
        <li>✔️ SPRÁVNE: „Člen tímu z IT sa dlhodobo sťažuje na systém motivácie a zvažuje zmenu pozície. Ako k tomu pristúpiť?"</li>
      </ul>
      <p><strong>Možnosť 2: Zovšeobecni</strong></p>
      <ul>
        <li>❌ ZÁKAZ: „Máme klienta Siemens, ktorý chce zľavu na 10 000 ks výrobkov za 150 000 €…"</li>
        <li>✔️ SPRÁVNE: „Máme veľkého klienta z priemyslu, ktorý chce veľkú objednávku so zľavou. Ako nastaviť rokovanie?"</li>
      </ul>
      <p><strong>Možnosť 3: Použi interný / private AI</strong></p>
      <p>Ak má firma interný nástroj (napr. Microsoft Copilot, Slack AI, ChatGPT Enterprise), je to bezpečnejšie na dáta.</p>
      <p>👉 Aj tak však platí: <strong>výstup kontroluj</strong> (AI sa môže mýliť).</p>

      <h3>💼 Praktické pravidlo pre všetkých (2 otázky)</h3>
      <p>Predtým, ako niečo skopíruješ do AI, polož si:</p>
      <p>👉 <strong>Cítil by som sa dobre, keby to videl môj manažér alebo právny tím?</strong></p>
      <p>👉 <strong>Ublížilo by to niekomu, keby sa to dostalo von?</strong></p>
      <p>Ak je odpoveď „nie", <strong>nedávaj to do AI</strong>.</p>

      <h3>💡 Praktická rada: niečo, čo veľa ľudí neanonymizuje, ale malo by sa</h3>
      <p>✅ Okrem mena a emailu sú citlivé aj:</p>
      <ul>
        <li>presná adresa / lokalita</li>
        <li>presný dátum + suma v kombinácii s ďalšími údajmi</li>
        <li>ID ticketu / claimu</li>
        <li>interné názvy systémov (Salesforce, ORION) a interné roly ľudí („Katka z Fraud") – minimálne zovšeobecniť</li>
      </ul>

      <MiniTask title="Prepíš prompt do bezpečnej (anonymizovanej) formy (5–7 min)">
        <p><strong>Situácia</strong></p>
        <p>Dostaneš „reálny" prompt, v ktorom sú citlivé údaje aj detaily, ktoré treba anonymizovať.</p>
        <p><strong>Inštrukcia</strong></p>
        <p><strong>Prepíš ho tak, aby bol bezpečný</strong>, ale aby AI stále chápala situáciu a vedela pomôcť.</p>
        <p><strong>Prompt (NEVKLADAJ ho do AI takto – najprv ho uprav)</strong></p>
        <p>„Napíš email klientovi Ján Novák, jan.novak@gmail.com, ktorý sa sťažuje na neautorizovanú platbu 89,90 € z 23. 1. 2026. Jeho ID objednávky/claimu: 458771 a posledné 4 čísla karty sú 4821. V CRM (Salesforce) je to vedené pod ticketom INC-2026-01492, rieši to Katka z tímu Fraud. Klient píše z adresy Brno, Kounicova 12 a tvrdí, že platbu spravil obchod 'FitZone.cz'. Napíš odpoveď: ospravedlni sa, vysvetli ďalší postup a uveď, že preveríme logy v systéme ORION."</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Odstráň alebo zovšeobecni identifikátory (osoba, kontakt, adresa, ID, interné systémy).</li>
          <li>Zachovaj kontext: <strong>čo sa stalo + čo má byť cieľ emailu</strong>.</li>
          <li>Pridaj obmedzenia: <strong>nevymýšľať fakty, nesľubovať termín</strong>.</li>
        </ol>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>1 anonymizovaný prompt, ktorý môžeš bezpečne použiť v AI.</li>
        </ul>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Odstránil som mená, čísla objednávok, presné sumy alebo iné identifikátory?</li>
          <li>Zostala situácia zrozumiteľná aj po anonymizácii?</li>
          <li>Nechal som AI robiť formu (štruktúra, tón), nie citlivý obsah?</li>
          <li>Pridal som obmedzenie proti domýšľaniu faktov a sľubov?</li>
          <li>Viem, čo budem kontrolovať vo výstupe (min. 2 veci)?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Aj po anonymizácii bude AI stále užitočná — najmä na štruktúru a formulácie. Najčastejšia chyba v praxi je, že ľudia v snahe „získať presnosť" vložia do AI príliš veľa citlivých detailov. Bezpečnejšie je dať AI <strong>menej údajov a viac pravidiel</strong>.</p>
      </ExpectedFinding>

      <MiniTest
        question="Čo je najbezpečnejší spôsob, ako použiť AI pri citlivej téme?"
        options={[
          { label: "🌕", text: "Anonymizujem/zovšeobecním a AI nech rieši štruktúru a jazyk" },
          { label: "⭐", text: "Skopírujem všetko, aby to bolo presné" },
          { label: "☀️", text: "AI nikdy nepoužijem" },
        ]}
        correct="🌕"
        explanation="Minimalizuješ riziko a stále získaš prínos."
      />

      <MiniTest
        question={`Ktor\u00E1 veta najviac zni\u017Euje riziko, \u017Ee si AI domysl\u00ED fakty?`}
        options={[
          { label: "🌕", text: "„Napíš to profesionálne."" },
          { label: "⭐", text: "„Použi odrážky."" },
          { label: "☀️", text: "„Ak si nie si istý, označ to ako NEISTÉ a polož otázky."" },
        ]}
        correct="☀️"
        explanation="AI dostane povolenie priznať neistotu a vrátiť otázky."
      />

      <MiniTest
        question="Kto nesie zodpovednosť za to, čo pošleš klientovi/kolegovi?"
        options={[
          { label: "🌕", text: "AI" },
          { label: "⭐", text: "Nikto, je to len návrh" },
          { label: "☀️", text: "Ty (človek, ktorý to použije a odošle)" },
        ]}
        correct="☀️"
        explanation="Ty rozhoduješ, ty kontroluješ, ty posielaš."
      />

      <MiniTest
        question="Tento prompt obsahuje meno, email, adresu, ID ticketu a interné názvy systémov. Je to:"
        options={[
          { label: "🌕", text: "🟢 Zelené (bezpečné)" },
          { label: "⭐", text: "🟠 Oranžové (po anonymizácii OK)" },
          { label: "☀️", text: "🔴 Červené (bez interného schváleného nástroja radšej nie)" },
        ]}
        correct="⭐"
        explanation="Po anonymizácii a zovšeobecnení je to použiteľné (AI rieši štruktúru a tón). V pôvodnej podobe je to rizikové."
      />
    </PageShell>
  );
}
