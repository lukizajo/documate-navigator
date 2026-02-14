import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page03() {
  const nav = getNavContext("03-historia");
  return (
    <PageShell
      title="3️⃣ História umelej inteligencie: od pojmu po dnešok"
      tldr={[]}
      {...nav}
    >
      <p><em>Táto časť dáva dnešnej AI kontext. Uvidíš, že súčasný boom nie je náhoda, ale výsledok dlhého vývoja, omylov a návratov.</em></p>

      <h2>Prečo má zmysel poznať históriu AI?</h2>
      <p>
        História umelej inteligencie nie je len zoznam dátumov a mien. Je to príbeh <strong>veľkých očakávaní, sklamaní, omylov a prelomových momentov</strong>, ktoré vysvetľujú, prečo dnešná AI vyzerá tak, ako vyzerá – a prečo má stále svoje limity.
      </p>
      <p>👉 Poznať tieto míľniky znamená lepšie rozumieť realite, nie mýtom.</p>

      <h3>1950 – Alan Turing a základná otázka ❓</h3>
      <ul>
        <li>britský matematik <strong>Alan Turing</strong> sa pýta: <em>Môžu stroje myslieť?</em></li>
        <li>navrhuje <strong>Turingov test</strong> ako praktický spôsob hodnotenia inteligencie</li>
        <li>nejde o vedomie, ale o správanie v rozhovore</li>
      </ul>
      <p>👉 Prvý dôležitý moment: inteligencia sa začína posudzovať <strong>podľa správania, nie pocitov</strong>.</p>

      <h3>1956 – Dartmouth Workshop: zrod pojmu AI 🎓</h3>
      <ul>
        <li>vzniká termín <strong>Artificial Intelligence</strong></li>
        <li>vedci veria, že ľudskú inteligenciu sa podarí simulovať v krátkom čase</li>
        <li>optimizmus výrazne prevyšuje reálne možnosti techniky</li>
      </ul>
      <p>👉 Lekcia: <strong>veľké očakávania bez dát a výkonu vedú k sklamaniu</strong>.</p>

      <h3>50.–60. roky – Perceptrón a prvé neurónové siete 🧠</h3>
      <ul>
        <li>vzniká <strong>perceptrón</strong> – prvý učiaci sa model inšpirovaný mozgom</li>
        <li>AI rieši jednoduché úlohy, hry a logiku</li>
        <li>médiá hovoria o blížiacej sa všeobecnej inteligencii</li>
      </ul>
      <p>Realita:</p>
      <ul>
        <li>modely majú zásadné matematické limity</li>
        <li>technológia ešte nedozrela</li>
      </ul>

      <h3>70. roky – Prvá AI zima ❄️</h3>
      <ul>
        <li>ukazuje sa, že neurónové siete majú vážne obmedzenia</li>
        <li>financovanie výskumu prudko klesá</li>
        <li>AI sa dostáva do úzadia</li>
      </ul>
      <p>👉 AI prvýkrát narazila na hranice reality.</p>

      <h3>80.–90. roky – Expert systémy a druhá AI zima 📉</h3>
      <ul>
        <li>AI sa presúva k pravidlám typu IF–THEN</li>
        <li>expert systémy fungujú len v úzkom prostredí</li>
        <li>sú drahé, krehké a ťažko udržiavateľné</li>
      </ul>
      <p>Keď nenaplnili očakávania:</p>
      <ul>
        <li>nasledovala <strong>druhá AI zima</strong></li>
      </ul>
      <p>👉 Poučenie: <strong>bez učenia a adaptability to nefunguje</strong>.</p>

      <h3>1997 – Deep Blue poráža Kasparova ♟️</h3>
      <ul>
        <li>počítač <strong>IBM Deep Blue</strong> porazil majstra sveta v šachu Garryho Kasparova</li>
        <li>išlo o historický moment, ale nie o „mysliacu AI"</li>
        <li>systém pracoval s obrovským výpočtom možností, nie porozumením</li>
      </ul>
      <p>👉 Silný míľnik, ktorý však často vytváral falošné predstavy o AI.</p>

      <h3>2012 – AlexNet a návrat neurónových sietí 🚀</h3>
      <ul>
        <li>hlboké učenie prelomí dlhoročné limity</li>
        <li>AI výrazne zlepší rozpoznávanie obrazu</li>
        <li>rozhodujúca je kombinácia:
          <ul>
            <li>veľké dáta</li>
            <li>GPU výkon</li>
            <li>nové architektúry</li>
          </ul>
        </li>
      </ul>
      <p>👉 AI sa znovu dostáva do hry – tentokrát reálne.</p>

      <h3>2016 – AlphaGo poráža majstra sveta v Go 🎮</h3>
      <ul>
        <li>AI poráža človeka v mimoriadne komplexnej hre</li>
        <li>prvýkrát kombinuje učenie, simuláciu a stratégiu</li>
      </ul>
      <p>👉 Ukážka, že AI dokáže riešiť aj problémy bez jasných pravidiel.</p>

      <h3>2017 – Transformer a revolúcia v jazyku 🧩</h3>
      <ul>
        <li>vzniká architektúra <strong>Transformer</strong></li>
        <li>AI začína chápať kontext v texte oveľa lepšie</li>
        <li>základ dnešných jazykových modelov</li>
      </ul>

      <h3>2022 – ChatGPT a masové rozšírenie AI 🌍</h3>
      <ul>
        <li>AI sa dostáva k bežným ľuďom</li>
        <li>prvýkrát ju používajú milióny ľudí denne</li>
        <li>mení prácu, vzdelávanie aj tvorbu</li>
      </ul>
      <p>Zároveň sa ukazuje:</p>
      <ul>
        <li>AI je presvedčivá, ale nie neomylná</li>
        <li>nerozumie svetu, len pracuje so vzormi</li>
      </ul>

      <h2>📚 Čo nás história AI učí?</h2>
      <ul>
        <li>AI sa vyvíja <strong>vo vlnách</strong>, nie lineárne</li>
        <li>prehnané sľuby vedú ku sklamaniu</li>
        <li>dáta a výkon sú rovnako dôležité ako algoritmy</li>
        <li>dnešná AI je silná, ale stále úzka</li>
      </ul>
      <p>👉 Práve preto je dôležité používať AI <strong>rozumne, kriticky a s pochopením jej hraníc</strong>.</p>

      <MiniTest
        question={'Ktoré tvrdenie o „Deep Blue vs. Kasparov" je najpresnejšie? Vyber, ktorá možnosť (🌕 /⭐ /☀️) najlepšie vystihuje, čo tento míľnik naozaj znamenal.'}
        options={[
          { label: "🌕", text: '„Deep Blue bol silný systém na šach, ktorý vyhral hlavne vďaka obrovskému výpočtu možností. Bol to veľký míľnik, ale neznamenalo to, že AI \'rozumela\' šachu alebo myslela ako človek."' },
          { label: "⭐", text: '„Deep Blue bol len obyčajný program. S AI to nemalo nič spoločné."' },
          { label: "☀️", text: '„Deep Blue porazil Kasparova, takže už vtedy existovala AI, ktorá myslela ako človek."' },
        ]}
        correct="🌕"
        explanation={'Tento moment ukázal silu výpočtu v úzkej úlohe (šach), nie všeobecnú inteligenciu ani „porozumenie svetu".'}
      />
    </PageShell>
  );
}
