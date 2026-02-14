import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page05() {
  const nav = getNavContext("05-spolupraca");
  return (
    <PageShell
      title="5️⃣ Princíp spolupráce s AI: ako pracovať efektívne"
      {...nav}
    >
      <p><em>Ak si z celého modulu máš odniesť jeden praktický princíp, je to práve tento. AI dáva zmysel len vtedy, keď je správne zapojená do práce človeka.</em></p>

      <h2>AI nie je autopilot, ale spoluhráč</h2>
      <p>
        Spolupráca človeka s AI nefunguje ako „zadám úlohu a hotovo". Nejde ani o to, že by človek robil všetko sám. Najlepšie výsledky vznikajú vtedy, keď má <strong>človek kontrolu a smer</strong> a AI plní rolu asistenta, ktorý navrhuje, zrýchľuje a rozširuje možnosti.
      </p>
      <p>👉 Tento prístup sa označuje ako <strong>Human-in-the-loop</strong> – AI pracuje, ale <strong>človek zostáva v rozhodovacej slučke</strong>.</p>

      <h2>🤝 Prečo model spolupráce funguje?</h2>
      <p>Každá strana má inú silu:</p>
      <p>🧍 <strong>Človek</strong></p>
      <ul>
        <li>rozumie cieľu, kontextu a dopadom</li>
        <li>nesie zodpovednosť</li>
        <li>vie posúdiť etiku a riziko</li>
      </ul>
      <p>🤖 <strong>AI</strong></p>
      <ul>
        <li>pracuje rýchlo a bez únavy</li>
        <li>generuje viac variantov naraz</li>
        <li>hľadá vzory v dátach</li>
      </ul>
      <p>👉 Najlepšie výsledky vznikajú kombináciou oboch.</p>

      <h2>🔁 Základný cyklus spolupráce</h2>
      <p>Efektívna práca s AI má tri kroky:</p>
      <ol>
        <li><strong>Človek nastavuje smer</strong>
          <ul>
            <li>čo je cieľ</li>
            <li>aké sú kritériá kvality</li>
            <li>aké sú obmedzenia</li>
          </ul>
        </li>
        <li><strong>AI navrhuje a zrýchľuje</strong>
          <ul>
            <li>vytvára návrhy a varianty</li>
            <li>sumarizuje, triedi, prepája</li>
            <li>upozorňuje na možné riešenia</li>
          </ul>
        </li>
        <li><strong>Človek vyhodnocuje a rozhoduje</strong>
          <ul>
            <li>kontroluje fakty</li>
            <li>porovnáva s cieľom</li>
            <li>schvaľuje alebo upravuje</li>
          </ul>
        </li>
      </ol>
      <p>👉 AI nikdy nemá posledné slovo.</p>

      <h2>☝️ Rozdelenie zodpovednosti</h2>
      <ul>
        <li>cieľ a zadanie → <strong>človek</strong></li>
        <li>návrhy a nápady → <strong>AI</strong></li>
        <li>overenie správnosti → <strong>človek</strong></li>
        <li>finálne rozhodnutie → <strong>človek</strong></li>
      </ul>
      <p>👉 Zodpovednosť sa nedá delegovať na nástroj.</p>

      <h2>⚠️ Prečo vznikajú zlé výsledky?</h2>
      <p>Najčastejšie chyby pri práci s AI:</p>
      <ul>
        <li>nejasné alebo vágne (všeobecné) zadanie</li>
        <li>slepé preberanie výstupu</li>
        <li>očakávanie „hotového riešenia"</li>
        <li>absencia kontroly</li>
      </ul>
      <p>👉 Problém nie je v AI, ale v <strong>spôsobe spolupráce</strong>.</p>

      <h2>🎯 Ako si nastaviť správny prístup?</h2>
      <ul>
        <li>ber AI ako <strong>juniorného kolegu</strong></li>
        <li>pýtaj si návrhy, nie pravdu</li>
        <li>vždy sa pýtaj „prečo?"</li>
        <li>rátaj s tým, že prvý výstup je len verzia 1</li>
      </ul>
      <p>👉 Cieľom nie je nahradiť myslenie, ale <strong>zvýšiť jeho dosah</strong>.</p>

      <h2>🎯 Čo si zapamätať</h2>
      <ul>
        <li>AI je silná v návrhoch, slabá v zodpovednosti</li>
        <li>človek je slabší v objeme, silný v rozhodovaní</li>
        <li><strong>spolu tvoria efektívny tím</strong></li>
      </ul>
      <p>👉 Budúcnosť práce nie je „AI namiesto ľudí", ale <strong>ľudia, ktorí vedia pracovať s AI</strong>.</p>

      <MiniTest
        question="Ktorý prístup je najefektívnejší pri spolupráci s AI? Situácia: Chceš si nechať od AI navrhnúť jedálniček na 3 dni. Vyber, ktorá možnosť (🌕 /⭐ /☀️) najlepšie vystihuje dobrú spoluprácu človeka a AI."
        options={[
          { label: "🌕", text: '„Navrhni mi 3-dňový jedálniček. Kontext: pre 1 osobu, do 20 min na varenie, bez mäsa. Najprv mi daj 2–3 varianty prístupu (napr. lacný / vyvážený / viac bielkovín). Ja si vyberiem jeden. Potom ho spracuj do finálnej verzie + nákupný zoznam. Na konci mi pripomeň, čo mám skontrolovať ja (alergie, porcie, či mám suroviny)."' },
          { label: "⭐", text: '„Navrhni mi jedálniček na 3 dni. Keď sa mi to nebude páčiť, tak to prepíš, kým to nebude dobré."' },
          { label: "☀️", text: '„Navrhni mi jedálniček na 3 dni. Urob to kompletne a ja to len skopírujem a budem sa tým riadiť."' },
        ]}
        correct="🌕"
        explanation="Človek nastaví smer a kritériá, AI navrhne varianty a zrýchli prácu, ale kontrola a rozhodnutie ostáva na človeku. AI nie je autopilot."
      />
    </PageShell>
  );
}
