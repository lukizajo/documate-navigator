import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page02() {
  const nav = getNavContext("02-prieskum-vyuzivania");
  return (
    <PageShell
      title="2️⃣ Prieskum využívania AI"
      tldr={[
        "78 % organizácií už využíva AI aspoň v jednej oblasti",
        "AI sa najčastejšie používa na zhrnutia, preklady, brainstorming a prvé verzie textov",
        "Bežní používatelia šetria 1–4 hodiny týždenne",
        "CZ patrí medzi lídrov adopcie v strednej Európe; SK je opatrnejšie",
        "Rozdiel nerobí nástroj, ale spôsob použitia",
      ]}
      {...nav}
    >
      <h2>📊 AI už nie je experiment, ale štandard</h2>
      <p>Z globálneho prieskumu vyplýva:</p>
      <ul>
        <li>78 % organizácií využíva AI aspoň v jednej oblasti</li>
        <li>generatívna AI sa presunula z „testovania" do reálneho nasadenia</li>
        <li>AI používa stovky miliónov ľudí po celom svete</li>
      </ul>
      <p>👉 AI sa zaradila medzi technológie, ktoré sa šíria najrýchlejšie v histórii.</p>

      <h2>🏢 Kde sa AI používa najviac?</h2>
      <ul>
        <li>IT a vývoj softvéru – AI je bežnou súčasťou práce</li>
        <li>finančné služby – automatizácia, analýzy, detekcia rizík</li>
        <li>marketing a obsah – texty, nápady, koncepty</li>
        <li>administratíva a kancelárska práca – e-maily, dokumenty, prehľady</li>
        <li>zdravotníctvo – podpora diagnostiky, spracovanie dokumentácie</li>
      </ul>
      <p>👉 V týchto oblastiach AI neslúži ako náhrada človeka, ale ako zrýchlenie a podpora rozhodovania.</p>

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
      <p>👉 Spoločný menovateľ? AI sa najviac osvedčuje tam, kde má človek zrýchliť začiatok práce alebo odstrániť rutinu.</p>

      <h2>📈 Čo prináša AI v číslach?</h2>
      <ul>
        <li>úspora 1–4 hodiny týždenne u bežných používateľov</li>
        <li>rýchlejšie dokončovanie úloh</li>
        <li>menej chýb v rutinných činnostiach</li>
        <li>vyššia kvalita prvých návrhov</li>
      </ul>
      <p>👉 Nejde o zázrak, ale o malé zlepšenia, ktoré sa pri pravidelnom používaní výrazne nasčítajú.</p>

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
      <p>👉 Spoločným problémom v oboch krajinách je nedostatok zručností a vzdelávania, nie samotná technológia.</p>

      <h2>🎯 Čo si z toho odniesť do praxe?</h2>
      <ul>
        <li>AI používa veľká časť sveta, ale väčšina ľudí ju nevyužíva naplno</li>
        <li>výhoda nie je v tom, že ju máš, ale ako s ňou pracuješ</li>
        <li>rozdiel nerobí nástroj, ale spôsob použitia</li>
        <li>stále sme na začiatku vývoja AI nástrojov</li>
      </ul>
      <p>👉 Práve preto má zmysel pochopiť základy a naučiť sa AI používať vedome, nie náhodne.</p>

      <MiniTest
        question="Ktoré tvrdenie je najbližšie realite používania AI dnes?"
        options={[
          { label: "🌕", text: '„AI je hlavne trend a hračka. Väčšina ľudí ju reálne nepoužíva."' },
          { label: "⭐", text: '„AI sa najčastejšie používa ako pomocník: na zhrnutia, preklady, nápady a prvé verzie textov. Nejde o náhradu človeka, skôr o zrýchlenie práce."' },
          { label: "🔵", text: '„AI je všade a kto ju nepoužíva, za chvíľu nebude mať prácu. Čoskoro nahradí väčšinu profesií."' },
        ]}
        correct="⭐"
        explanation="Je to najrealistickejší pohľad bez extrémov. V praxi AI najviac pomáha tam, kde šetrí čas a uľahčuje začiatok práce."
      />
    </PageShell>
  );
}
