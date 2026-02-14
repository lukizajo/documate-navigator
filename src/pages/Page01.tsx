import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

export default function Page01() {
  const nav = getNavContext("01-co-je-ai");
  return (
    <PageShell
      title="1️⃣ Čo je AI a prečo ju (ne)využívame"
      tldr={[
        "AI = nástroj, nie bytosť – pomáha robiť veci rýchlejšie a jednoduchšie",
        "Úzka AI rieši jednu úlohu; generatívna AI vytvára nový obsah",
        "Najčastejší dôvod sklamania z AI nie je zlá AI, ale zlé očakávania",
        "Základné pravidlo: AI asistuje, človek rozhoduje",
        "Začni malými úlohami – hľadaj rýchle výhry",
      ]}
      {...nav}
    >
      <h2>🤖 Čo dnes myslíme pod pojmom umelá inteligencia?</h2>
      <p>
        Umelá inteligencia alebo AI je schopnosť strojov, najmä počítačových systémov, napodobňovať
        inteligentné správanie typické pre ľudí, ako je učenie sa, uvažovanie, rozhodovanie či
        riešenie problémov.
      </p>
      <p>Zjednodušene povedané:</p>
      <ul>
        <li>AI = nástroj, nie bytosť</li>
        <li>pomáha robiť veci rýchlejšie, jednoduchšie a prehľadnejšie</li>
        <li>nie je to jedna appka, ale celý súbor technológií</li>
        <li>používame ju už roky, len sme ju tak nenazývali</li>
      </ul>
      <p>👉 To, čo dnes spôsobilo najväčší rozruch, je generatívna AI. Tá už len nevyhodnocuje dáta, ale aktívne vytvára texty, obrázky, zvuk či video a komunikuje s nami prirodzeným jazykom.</p>

      <h2>🧠 Úzka vs. generatívna AI</h2>
      <h3>Úzka AI (ANI – Artificial Narrow Intelligence)</h3>
      <ul>
        <li>rieši jednu konkrétnu úlohu</li>
        <li>funguje presne v daných hraniciach</li>
        <li>nič netvorí, len vyhodnocuje a rozhoduje</li>
        <li>nemá ambíciu chápať širší kontext</li>
        <li>príklady: spam filter, rozpoznávanie tváre, odporúčania na Netflixe alebo Spotify</li>
      </ul>

      <h3>Generatívna AI (GenAI)</h3>
      <ul>
        <li>pracuje s jazykom, obrazom a zvukom</li>
        <li>dokáže vytvárať nový obsah</li>
        <li>odpovedá, sumarizuje, navrhuje a prepisuje</li>
        <li>nepozná pravdu → odhaduje ďalší krok na základe dát</li>
      </ul>
      <p>👉 Práve generatívna AI je hlavnou témou tohto kurzu.</p>

      <h2>😕 Prečo AI veľa ľudí odradí?</h2>
      <p>Najčastejšie dôvody, prečo ľudia AI prestanú používať:</p>
      <ul>
        <li>Prvý pokus nepriniesol očakávaný výsledok</li>
        <li>Výstup pôsobil plytko, všeobecne alebo mimo kontextu</li>
        <li>Vznikol pocit: „spravím si to rýchlejšie sám"</li>
        <li>Chýba dôvera v správnosť odpovedí</li>
        <li>Objaví sa strach zo zodpovednosti za chybu</li>
      </ul>
      <p>👉 Vo väčšine prípadov nejde o zlú AI, ale o zlé očakávania, nejasné zadanie alebo nesprávne použitie.</p>

      <h2>🚧 Nastavme si hranice hneď na začiatku!</h2>
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
      <p>👉 Základné pravidlo kurzu: AI asistuje, človek rozhoduje.</p>

      <h2>🚀 Ako s AI začať bez frustrácie?</h2>
      <p>Osvedčený prístup:</p>
      <ul>
        <li>nezačínaj veľkými úlohami</li>
        <li>hľadaj rýchle malé výhry</li>
        <li>používaj AI ako prvý nástrel, nie finálne riešenie</li>
        <li>šetri si čas aj mentálnu energiu</li>
      </ul>
      <p>👉 Cieľom nie je dokonalosť, ale praktický úžitok.</p>

      <MiniTest
        question="Ktorý prompt je najbezpečnejší? Situácia: Chceš používať AI ako pomocníka, ale nechceš, aby sa hrala na autoritu."
        options={[
          { label: "🌕", text: '„Chcem kúpiť jazdený mobil. Povedz mi, či je táto ponuka dobrá a či si to mám kúpiť. Rozhodni za mňa."' },
          { label: "⭐", text: '„Vyber mi najlepší výlet v Prahe na víkend a povedz mi presne, kam mám ísť. Nech je to na 100 % najlepšia voľba."' },
          { label: "🔵", text: '„Pomôž mi rozhodnúť sa, ale nerozhoduj za mňa. Daj mi 3 možnosti a pri každej napíš 1 výhodu a 1 riziko. Na konci mi daj checklist, čo si mám overiť."' },
        ]}
        correct="🔵"
        explanation={'Je nastavené, že AI má pomôcť premýšľať (možnosti, plusy/mínusy, checklist), ale finálne rozhodnutie ostáva na človeku. To je bezpečnejšie než pýtať si verdikt alebo „100 % najlepšiu" odpoveď.'}
      />
    </PageShell>
  );
}
