import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page04() {
  const nav = getNavContext("04-buducnost");
  return (
    <PageShell
      title="4️⃣ Budúcnosť AI: čo môžeme realisticky čakať"
      tldr={[
        "Do 2030 sa AI stane bežnou súčasťou pracovných nástrojov",
        "Multimodálne modely budú pracovať s textom, obrazom, zvukom aj videom naraz",
        "AI nenahradí všetky pracovné miesta – zmení ich obsah",
        "AGI dnes neexistuje – dnešné modely sú stále úzke a špecializované",
        "Najväčším rizikom nie je AI, ale nepripravenosť na zmenu",
      ]}
      {...nav}
    >
      <p><em>Kam smeruje AI? Nie do sci-fi, ale do bežných nástrojov a pracovných postupov. Pozrime sa na to, čo môžeme realisticky očakávať – a čo je zatiaľ len špekulácia.</em></p>

      <h2>🔮 Prečo je dôležité hovoriť o budúcnosti AI?</h2>
      <p>
        Pri AI je veľmi ľahké skĺznuť do extrémov – buď do nekritického nadšenia, alebo do strachu.
        Realita je niekde medzi. Budúcnosť AI nie je jeden pevný scenár, ale viacero možných ciest.
      </p>
      <p>👉 Pozeráme sa na to, čo vieme odhadnúť pomerne spoľahlivo do roku 2030 a kde už vstupujeme do oblasti neistoty.</p>

      <h2>🧑‍💻 Rok 2030: AI ako bežná súčasť práce</h2>
      <p>Do roku 2030 sa AI stane:</p>
      <ul>
        <li>bežnou súčasťou pracovných nástrojov</li>
        <li>integrovanou do systémov, ktoré už dnes používame</li>
        <li>menej „viditeľnou", ale o to dôležitejšou</li>
      </ul>

      <h3>📊 Ako bude AI v praxi fungovať?</h3>
      <ul>
        <li>automatizácia rutinných úloh</li>
        <li>príprava podkladov a návrhov</li>
        <li>podpora rozhodovania</li>
        <li>práca s dátami, textom, obrazom aj hlasom</li>
      </ul>
      <p>Výsledok: vyššia produktivita, menej manuálnej práce, väčší dôraz na kontrolu a rozhodovanie človeka.</p>

      <h2>🧩 Multimodálna AI: viac než len text</h2>
      <p>Multimodálne modely budú:</p>
      <ul>
        <li>pracovať s textom, obrazom, zvukom aj videom naraz</li>
        <li>rozumieť kombinovaným vstupom</li>
        <li>vytvárať komplexnejšie výstupy</li>
      </ul>

      <h2>💼 Práca a trh práce do roku 2030</h2>
      <p>AI nezničí všetky pracovné miesta, ale:</p>
      <ul>
        <li>zmení ich obsah</li>
        <li>presunie dôraz z vykonávania na rozhodovanie</li>
        <li>zvýhodní ľudí, ktorí vedia s AI spolupracovať</li>
      </ul>
      <p>Zaniknú najmä rutinné, opakovateľné činnosti. Vzniknú nové role a kombinácie zručností.</p>
      <p>👉 Najväčším rizikom nie je AI, ale nepripravenosť na zmenu.</p>

      <h2>🤖 AGI, Superinteligencia a veľké otázniky po roku 2030</h2>
      <h3>AGI – Artificial General Intelligence</h3>
      <ul>
        <li>teoretická forma AI so všeobecnými schopnosťami podobnými človeku</li>
        <li>dokázala by učiť sa nové úlohy naprieč oblasťami</li>
        <li>dnes neexistuje – dnešná AI je úzka a špecializovaná</li>
      </ul>

      <h3>Superinteligencia</h3>
      <ul>
        <li>hypotetická AI, ktorá by výrazne prekonala ľudskú inteligenciu</li>
        <li>patrí skôr do oblasti teórie a sci-fi</li>
        <li>neexistuje zhoda, či a ako by mohla vzniknúť</li>
      </ul>

      <h3>Prečo sú dlhodobé predpovede také nepresné?</h3>
      <ul>
        <li>technické a energetické hranice</li>
        <li>ekonomická udržateľnosť</li>
        <li>regulačné zásahy</li>
        <li>spoločenské prijatie</li>
      </ul>
      <p>👉 Exponenciálny rast nemôže trvať večne.</p>

      <h2>🎯 Čo si z budúcnosti AI odniesť už dnes?</h2>
      <ul>
        <li>AI sa stane štandardom, nie výnimkou</li>
        <li>výhodu budú mať tí, ktorí ju vedia používať rozumne</li>
        <li>kritické myslenie bude dôležitejšie než kedykoľvek predtým</li>
        <li>učenie sa práce s AI je investícia, nie trend</li>
      </ul>
      <p>👉 Cieľom nie je vedieť predpovedať budúcnosť, ale byť na ňu pripravený.</p>

      <MiniTest
        question="Ktoré tvrdenie o AGI je najpresnejšie?"
        options={[
          { label: "🌕", text: '„AGI už dnes existuje, len sa tomu tak nehovorí. ChatGPT je vlastne všeobecná inteligencia."' },
          { label: "⭐", text: '„AGI je to isté ako generatívna AI. Keď AI vie písať texty, automaticky je všeobecná."' },
          { label: "☀️", text: '„AGI je hypotetická všeobecná umelá inteligencia, ktorá by sa vedela učiť naprieč rôznymi úlohami podobne ako človek. Dnes taká AI neexistuje."' },
        ]}
        correct="☀️"
        explanation="Generatívna AI môže pôsobiť všeobecne, ale stále pracuje v rámci svojich hraníc a nie je to AGI."
      />
    </PageShell>
  );
}
