import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page02() {
  const nav = getNavContext("02-prieskum-vyuzivania");
  return (
    <PageShell
      title="2️⃣ Ako je na tom svet: prieskum využívania AI (do konca roka 2025)"
      tldr={[]}
      {...nav}
    >
      <p><em>V tejto časti sa pozrieme na realitu používania AI bez dojmov a hype. Nie čo by AI „mohla", ale ako ju ľudia a firmy skutočne používajú dnes.</em></p>

      <h2>AI už nie je experiment, ale štandard</h2>
      <p>Používanie umelej inteligencie prešlo v posledných rokoch veľmi rýchlym posunom. Kým ešte nedávno bola AI vnímaná ako niečo experimentálne, dnes je pre veľkú časť firiem aj jednotlivcov <strong>bežnou súčasťou práce</strong>.</p>
      <p>Z globálneho prieskumu vyplýva:</p>
      <ul>
        <li><strong>72–78 % organizácií</strong> využíva AI aspoň v jednej oblasti</li>
        <li>generatívna AI sa presunula z „testovania" do reálneho nasadenia</li>
        <li>AI používa <strong>stovky miliónov ľudí</strong> po celom svete</li>
      </ul>
      <p>👉 AI sa tak zaradila medzi technológie, ktoré sa šíria najrýchlejšie v histórii.</p>

      <hr />

      <h2>🌐 Kde sa AI používa najviac?</h2>
      <p>Adopcia AI nie je rovnomerná. Niektoré profesie ju prijali veľmi rýchlo, iné opatrnejšie.</p>
      <p>Najaktívnejšie oblasti:</p>
      <ul>
        <li><strong>IT a vývoj softvéru</strong> – AI je bežnou súčasťou práce</li>
        <li><strong>finančné služby</strong> – automatizácia, analýzy, detekcia rizík</li>
        <li><strong>marketing a obsah</strong> – texty, nápady, koncepty</li>
        <li><strong>administratíva a kancelárska práca</strong> – e-maily, dokumenty, prehľady</li>
        <li><strong>zdravotníctvo</strong> – podpora diagnostiky, spracovanie dokumentácie</li>
      </ul>
      <p>👉 V týchto oblastiach AI neslúži ako náhrada človeka, ale ako <strong>zrýchlenie a podpora rozhodovania</strong>.</p>

      <hr />

      <h2>🔧 Najčastejšie použitia AI v praxi</h2>
      <ul>
        <li>zhrnutie textov, dokumentov a informácií</li>
        <li>preklady a jazyková pomoc</li>
        <li>brainstorming a generovanie nápadov</li>
        <li>písanie prvých verzií textov</li>
        <li>práca s tabuľkami, dátami a kódom</li>
        <li>generovanie obrázkov a videí</li>
        <li>tvorba hudby a hlasu</li>
      </ul>
      <p>👉 Spoločný menovateľ? AI sa najviac osvedčuje tam, kde má človek <strong>zrýchliť začiatok práce</strong> alebo <strong>odstrániť rutinu</strong>.</p>

      <hr />

      <h2>📈 Čo prináša AI v číslach?</h2>
      <ul>
        <li>úspora <strong>1–4 hodiny týždenne</strong> u bežných používateľov</li>
        <li>rýchlejšie dokončovanie úloh</li>
        <li>menej chýb v rutinných činnostiach</li>
        <li>vyššia kvalita prvých návrhov</li>
      </ul>
      <p>👉 Nejde o zázrak, ale o <strong>malé zlepšenia</strong>, ktoré sa pri pravidelnom používaní výrazne nasčítajú.</p>

      <hr />

      <h2>🇨🇿🇸🇰 Česko a Slovensko: realita u nás</h2>
      <h3>🇨🇿 Česká republika</h3>
      <ul>
        <li>patrí medzi lídrov adopcie AI v strednej Európe</li>
        <li>generatívnu AI používa približne takmer polovica firiem</li>
        <li>najrýchlejšie ju prijímajú veľké a stredné podniky</li>
      </ul>
      <h3>🇸🇰 Slovensko</h3>
      <ul>
        <li>adopcia je pomalšia a opatrnejšia</li>
        <li>viac ako polovica ľudí AI vedome nepoužíva</li>
        <li>medzi používateľmi je silný dôraz na overovanie výstupov</li>
      </ul>
      <p>👉 Spoločným problémom v oboch krajinách je <strong>nedostatok zručností a vzdelávania</strong>, nie samotná technológia.</p>

      <hr />

      <h2>🎯 Čo si z toho odniesť do praxe?</h2>
      <ul>
        <li>AI používa veľká časť sveta, ale väčšina ľudí ju nevyužíva naplno</li>
        <li>výhoda nie je v tom, že ju máš, ale <strong>ako s ňou pracuješ</strong></li>
        <li>rozdiel nerobí nástroj, ale <strong>spôsob použitia</strong></li>
        <li>stále sme na začiatku vývoja AI nástrojov</li>
      </ul>
      <p>👉 Práve preto má zmysel pochopiť základy a naučiť sa AI používať vedome, nie náhodne.</p>

      <MiniTest
        question="Ktoré tvrdenie je najbližšie realite používania AI dnes?"
        options={[
          { label: "🌕", text: '„AI je hlavne trend a hračka. Väčšina ľudí ju reálne nepoužíva."' },
          { label: "⭐", text: '„AI sa najčastejšie používa ako pomocník: na zhrnutia, preklady, nápady a prvé verzie textov. Nejde o náhradu človeka, skôr o zrýchlenie práce."' },
          { label: "☀️", text: '„AI je všade a kto ju nepoužíva, za chvíľu nebude mať prácu. Čoskoro nahradí väčšinu profesií."' },
        ]}
        correct="⭐"
        explanation="Je to najrealistickejší pohľad bez extrémov. V praxi AI najviac pomáha tam, kde šetrí čas a uľahčuje začiatok práce."
      />
    </PageShell>
  );
}
