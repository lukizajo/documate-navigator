import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lf-05-etika");

export default function LFP05() {
  return (
    <PageShell title="4️⃣ Etika a dôvera" prev={nav.prev} next={nav.next}>
      <p>Hlas pôsobí viac „osobne" než text. Keď niečo počuješ, automaticky tomu prikladáš väčšiu dôveryhodnosť. Práve preto je pri AI hlase dôležité nastaviť si hranice, aby si si nespôsobil problém alebo nestratil dôveru ľudí.</p>
      <p>Cieľ tejto lekcie je jednoduchý: vedieť, čo je bezpečné používanie a kde sú jasné stopky.</p>

      <h2>🛑 Tri stopky, ktoré sa neoplatí obchádzať</h2>
      <ul>
        <li><strong>Klonovanie hlasu reálnej osoby bez súhlasu</strong> – Aj keď je to technicky možné, je to rizikové a často aj právne problémové.</li>
        <li><strong>Zavádzanie, že hlas je reálna osoba</strong> – Ak to má pôsobiť ako &quot;hovorí človek&quot;, ktorý v skutočnosti nehovorí, je to recept na stratu dôvery.</li>
        <li><strong>Citlivé dáta v externých nástrojoch</strong> – Ak do nástroja vkladáš interné informácie, osobné údaje alebo niečo, čo nemá odísť mimo firmy, musíš mať jasné pravidlá.</li>
      </ul>

      <h2>✅ Bezpečné používanie, ktoré je v praxi bežné</h2>
      <ul>
        <li><strong>Vlastný obsah a vlastný hlas</strong> – Najčistejšia cesta, najmenšie riziko.</li>
        <li><strong>Voiceover k edukatívnemu obsahu</strong> – Kurz, návod, zhrnutie, interné školenie. Dôležité je neklamať a nemať zavádzajúci kontext.</li>
        <li><strong>Transparentnosť, keď je to dôležité</strong> – Nie vždy musíš robiť veľké &quot;oznámenie&quot;, ale keď by to mohlo meniť interpretáciu, je fér to uviesť.</li>
      </ul>

      <h2>🔍 Jednoduchý test: je to OK alebo nie</h2>
      <p>Ak váhaš, polož si tri otázky:</p>
      <ul>
        <li>Mohol by sa niekto cítiť oklamaný, keby zistí, že je to AI hlas?</li>
        <li>Používam niečí hlas alebo identitu bez jasného súhlasu?</li>
        <li>Dávam do nástroja informácie, ktoré by som nechcel vidieť mimo svojho zariadenia?</li>
      </ul>
      <p>Ak je odpoveď áno, zastav sa a uprav postup.</p>

      <MiniTest
        question="Ktorý príklad je najviac v pohode z pohľadu etiky a dôvery?"
        options={[
          { label: "🌕", text: "Použijem AI hlas na voiceover k vlastnému edukatívnemu obsahu a nebudem predstierať, že to hovorí niekto iný." },
          { label: "⭐", text: "Použijem AI hlas, ktorý sa podobá na konkrétneho známeho človeka, aby to znelo dôveryhodnejšie." },
          { label: "☀️", text: "Do AI nástroja vložím interné citlivé informácie, aby to bolo presnejšie." },
        ]}
        correct="🌕"
        explanation="Najbezpečnejšie je používať AI hlas na vlastný obsah bez zavádzania a bez práce s cudzou identitou alebo citlivými dátami."
      />
    </PageShell>
  );
}
