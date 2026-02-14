import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page05() {
  const nav = getNavContext("05-spolupraca");
  return (
    <PageShell
      title="5️⃣ Princíp spolupráce s AI"
      tldr={[
        "AI nie je autopilot, ale spoluhráč – Human-in-the-loop",
        "Človek nastavuje smer, AI navrhuje a zrýchľuje, človek rozhoduje",
        "Zodpovednosť sa nedá delegovať na nástroj",
        "Zlé výsledky sú najčastejšie spôsobené nejasným zadaním, nie zlou AI",
        "AI je juniorný kolega – pýtaj si návrhy, nie pravdu",
      ]}
      {...nav}
    >
      <p><em>Ak si z celého modulu máš odniesť jeden praktický princíp, je to práve tento. AI dáva zmysel len vtedy, keď je správne zapojená do práce človeka.</em></p>

      <h2>🤝 AI nie je autopilot, ale spoluhráč</h2>
      <p>
        Spolupráca človeka s AI nefunguje ako „zadám úlohu a hotovo". Najlepšie výsledky vznikajú
        vtedy, keď má človek kontrolu a smer a AI plní rolu asistenta.
      </p>
      <p>👉 Tento prístup sa označuje ako Human-in-the-loop – AI pracuje, ale človek zostáva v rozhodovacej slučke.</p>

      <h3>Prečo model spolupráce funguje?</h3>
      <p>Každá strana má inú silu:</p>
      <ul>
        <li>🧍 <strong>Človek</strong> – rozumie cieľu, kontextu a dopadom; nesie zodpovednosť; vie posúdiť etiku a riziko</li>
        <li>🤖 <strong>AI</strong> – pracuje rýchlo a bez únavy; generuje viac variantov naraz; hľadá vzory v dátach</li>
      </ul>
      <p>👉 Najlepšie výsledky vznikajú kombináciou oboch.</p>

      <h2>🔁 Základný cyklus spolupráce</h2>
      <p>Efektívna práca s AI má tri kroky:</p>
      <ol>
        <li><strong>Človek nastavuje smer</strong> – čo je cieľ, aké sú kritériá kvality, aké sú obmedzenia</li>
        <li><strong>AI navrhuje a zrýchľuje</strong> – vytvára návrhy a varianty, sumarizuje, triedi, prepája</li>
        <li><strong>Človek vyhodnocuje a rozhoduje</strong> – kontroluje fakty, porovnáva s cieľom, schvaľuje alebo upravuje</li>
      </ol>
      <p>👉 AI nikdy nemá posledné slovo.</p>

      <h2>📋 Rozdelenie zodpovednosti</h2>
      <ul>
        <li>cieľ a zadanie → človek</li>
        <li>návrhy a nápady → AI</li>
        <li>overenie správnosti → človek</li>
        <li>finálne rozhodnutie → človek</li>
      </ul>
      <p>👉 Zodpovednosť sa nedá delegovať na nástroj.</p>

      <h2>⚠️ Prečo vznikajú zlé výsledky?</h2>
      <p>Najčastejšie chyby pri práci s AI:</p>
      <ul>
        <li>nejasné alebo vágne zadanie</li>
        <li>slepé preberanie výstupu</li>
        <li>očakávanie „hotového riešenia"</li>
        <li>absencia kontroly</li>
      </ul>
      <p>👉 Problém nie je v AI, ale v spôsobe spolupráce.</p>

      <h2>🎯 Ako si nastaviť správny prístup?</h2>
      <ul>
        <li>ber AI ako juniorného kolegu</li>
        <li>pýtaj si návrhy, nie pravdu</li>
        <li>vždy sa pýtaj „prečo?"</li>
        <li>rátaj s tým, že prvý výstup je len verzia 1</li>
      </ul>
      <p>👉 Cieľom nie je nahradiť myslenie, ale zvýšiť jeho dosah.</p>

      <h2>🎯 Čo si zapamätať</h2>
      <ul>
        <li>AI je silná v návrhoch, slabá v zodpovednosti</li>
        <li>človek je slabší v objeme, silný v rozhodovaní</li>
        <li>spolu tvoria efektívny tím</li>
      </ul>
      <p>👉 Budúcnosť práce nie je „AI namiesto ľudí", ale ľudia, ktorí vedia pracovať s AI.</p>

      <MiniTest
        question="Ktorý prístup je najefektívnejší pri spolupráci s AI? Situácia: Chceš si nechať od AI navrhnúť jedálniček na 3 dni."
        options={[
          { label: "🌕", text: '„Navrhni mi 3-dňový jedálniček. Kontext: pre 1 osobu, do 20 min na varenie, bez mäsa. Najprv mi daj 2–3 varianty prístupu. Ja si vyberiem jeden. Potom spracuj do finálnej verzie + nákupný zoznam. Na konci mi pripomeň, čo mám skontrolovať ja."' },
          { label: "⭐", text: '„Navrhni mi jedálniček na 3 dni. Keď sa mi to nebude páčiť, tak to prepíš, kým to nebude dobré."' },
          { label: "☀️", text: '„Navrhni mi jedálniček na 3 dni. Urob to kompletne a ja to len skopírujem a budem sa tým riadiť."' },
        ]}
        correct="🌕"
        explanation="Človek nastaví smer a kritériá, AI navrhne varianty a zrýchli prácu, ale kontrola a rozhodnutie ostáva na človeku. AI nie je autopilot."
      />
    </PageShell>
  );
}
