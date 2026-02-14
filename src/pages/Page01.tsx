import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page01() {
  const nav = getNavContext("01-co-je-ai");
  return (
    <PageShell
      title="1️⃣ Čo je AI a prečo ju (ne)využívame"
      tldr={[]}
      {...nav}
    >
      <h2>🤖 Čo dnes myslíme pod pojmom umelá inteligencia?</h2>
      <p>
        Umelá inteligencia alebo AI je schopnosť strojov, najmä počítačových systémov, napodobňovať inteligentné správanie typické pre ľudí, ako je učenie sa, uvažovanie, rozhodovanie či riešenie problémov. Ide o interdisciplinárny odbor informatiky, ktorý sa zaoberá vývojom algoritmov umožňujúcich strojom spracovávať dáta, rozpoznať vzory a dosahovať ciele samostatne.
      </p>
      <p>Zjednodušene povedané:</p>
      <ul>
        <li>AI = <strong>nástroj</strong>, nie bytosť</li>
        <li>pomáha robiť veci <strong>rýchlejšie, jednoduchšie a prehľadnejšie</strong></li>
        <li>nie je to jedna appka, ale celý súbor technológií</li>
        <li>používame ju už roky, len sme ju tak nenazývali</li>
      </ul>
      <p>👉 To, čo dnes spôsobilo najväčší rozruch, je <strong>generatívna AI</strong>. Tá už len nevyhodnocuje dáta, ale aktívne vytvára texty, obrázky, zvuk či video a komunikuje s nami prirodzeným jazykom.</p>

      <h2>🧠 Úzka vs. generatívna AI</h2>
      <p>Aby sme si AI správne zaradili, je dôležité rozlišovať dva základné prístupy, ktoré sa často hádžu do jedného vreca.</p>

      <h3>Úzka AI (ANI – <em>Artificial Narrow Intelligence</em>)</h3>
      <ul>
        <li>rieši <strong>jednu konkrétnu úlohu</strong></li>
        <li>funguje presne v daných hraniciach</li>
        <li>nič netvorí, len vyhodnocuje a rozhoduje</li>
        <li>nemá ambíciu chápať širší kontext</li>
        <li>príklady: spam filter v e-maile, rozpoznávanie tváre v mobile, odporúčania na Netflixe alebo Spotify</li>
      </ul>

      <h3>Generatívna AI (GenAI – <em>Generative Artificial Intelligence</em>)</h3>
      <ul>
        <li>pracuje s jazykom, obrazom a zvukom</li>
        <li>dokáže <strong>vytvárať nový obsah</strong></li>
        <li>odpovedá, sumarizuje, navrhuje a prepisuje</li>
        <li>nepozná pravdu → <strong>odhaduje ďalší krok</strong> na základe dát</li>
      </ul>
      <p>👉 Práve <strong>generatívna AI</strong> je hlavnou témou tohto kurzu.</p>

      <h2>😕 Prečo AI veľa ľudí odradí?</h2>
      <p>Mnoho ľudí má s AI krátku skúsenosť, ktorá skončila sklamaním. Nie preto, že by AI nefungovala, ale preto, že očakávania boli nastavené úplne inde.</p>
      <p>Najčastejšie dôvody, prečo ľudia AI prestanú používať:</p>
      <ul>
        <li>prvý pokus nepriniesol očakávaný výsledok</li>
        <li>výstup pôsobil plytko, všeobecne alebo mimo kontextu</li>
        <li>vznikol pocit: „spravím si to rýchlejšie sám"</li>
        <li>chýba dôvera v správnosť odpovedí</li>
        <li>objaví sa strach zo zodpovednosti za chybu</li>
      </ul>
      <p>👉 Vo väčšine prípadov nejde o zlú AI, ale o <strong>zlé očakávania, nejasné zadanie alebo nesprávne použitie</strong>.</p>

      <h2>🚧 Nastavme si hranice hneď na začiatku!</h2>
      <p>Aby AI nebola zdrojom frustrácie, ale pomoci, je dôležité si hneď na začiatku ujasniť, čo od nej môžeme a nemôžeme očakávať.</p>
      <h3>AI je:</h3>
      <ul>
        <li>pomoc pri premýšľaní a hľadaní možností</li>
        <li>urýchľovač práce a rutinných úloh</li>
        <li>tvorca návrhov a prvých verzií</li>
        <li>podpora, nie náhrada človeka</li>
      </ul>
      <h3>AI nie je:</h3>
      <ul>
        <li>autorita, ktorá má vždy pravdu</li>
        <li>hotové riešenie bez potreby kontroly</li>
        <li>náhrada za zodpovednosť a rozhodovanie</li>
      </ul>
      <p>👉 Základné pravidlo kurzu: <strong>AI asistuje, človek rozhoduje.</strong></p>

      <h2>🚀 Ako s AI začať bez frustrácie?</h2>
      <p>Jednou z najčastejších chýb je snaha používať AI hneď na veľké a komplexné úlohy. Oveľa lepšie funguje začať tam, kde je prínos okamžite viditeľný.</p>
      <p>Osvedčený prístup:</p>
      <ul>
        <li>nezačínaj veľkými úlohami</li>
        <li>hľadaj <strong>rýchle malé výhry</strong></li>
        <li>používaj AI ako prvý nástrel, nie finálne riešenie</li>
        <li>šetri si čas aj mentálnu energiu</li>
      </ul>
      <p>👉 Cieľom nie je dokonalosť, ale <strong>praktický úžitok</strong>.</p>

      <MiniTest
        question="Ktorý prompt je najbezpečnejší? Situácia: Chceš používať AI ako pomocníka, ale nechceš, aby sa hrala na autoritu. Vyber, ktorý prompt (🌕 /⭐ /☀️) je najbezpečnejší."
        options={[
          { label: "🌕", text: '„Chcem kúpiť jazdený mobil. Povedz mi, či je táto ponuka dobrá a či si to mám kúpiť. Rozhodni za mňa."' },
          { label: "⭐", text: '„Vyber mi najlepší výlet v Prahe na víkend a povedz mi presne, kam mám ísť. Nech je to na 100 % najlepšia voľba."' },
          { label: "☀️", text: '„Pomôž mi rozhodnúť sa, ale nerozhoduj za mňa. Daj mi 3 možnosti (napr. pri mobile: čo skontrolovať / pri výlete: 3 programy) a pri každej napíš 1 výhodu a 1 riziko. Na konci mi daj checklist, čo si mám overiť, aby som sa nespoliehal len na AI."' },
        ]}
        correct="☀️"
        explanation={'Je nastavené, že AI má pomôcť premýšľať (možnosti, plusy/mínusy, checklist), ale finálne rozhodnutie ostáva na človeku. To je bezpečnejšie než pýtať si verdikt alebo „100 % najlepšiu" odpoveď.'}
      />
    </PageShell>
  );
}
