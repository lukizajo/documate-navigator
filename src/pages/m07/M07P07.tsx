import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest } from "@/components/ContentBlocks";

export default function M07P07() {
  const nav = getNavContext("m07-07-rovnovaha");
  return (
    <PageShell title="6️⃣ Digitálna rovnováha + zdravé hranice ⚖️" {...nav}>

      <p>Táto lekcia <strong>nie je</strong> o tom, že „AI je zlá". AI je ako silné náradie: keď ju používaš vedome, šetrí čas a energiu. Keď ju používaš automaticky (bez toho, aby si si všimol ako často a prečo), vieš veľmi ľahko skĺznuť do návykov, ktoré ti postupne berú <strong>sústredenie, kreativitu, sebavedomie aj spánok</strong>.</p>
      <p>Ber to ako <strong>návod</strong>, ako tieto veci spoznať včas a nastaviť si hranice skôr, než ťa to začne brzdiť. 🙂</p>

      <h3>🧠 Čo sa môže diať, keď AI používaš „až príliš často"</h3>
      <p><em>(neber to ako diagnózu — skôr ako kontrolku na palubovke)</em></p>

      <p>🧠 <strong>Kognitívny dlh (mozog si odvyká makať)</strong></p>
      <p>V jednom experimente (EEG) ľudia s AI písali rýchlejšie, ale zároveň kleslo kognitívne zaangažovanie a veľká časť si nevedela ani vybaviť, čo práve napísala.</p>
      <p>👉 Môžeš mať pocit „som produktívny", ale mozog si tvorí zvyk: <strong>AI premýšľa za mňa</strong>.</p>

      <p>🧩 <strong>Slabšie kritické myslenie (ľahšie uveríš presvedčivej odpovedi)</strong></p>
      <p>V prieskumoch sa ukázala negatívna súvislosť medzi častejším používaním AI a skóre kritického myslenia — vrátane štúdie na 319 pracovníkoch (Microsoft) s výraznou negatívnou koreláciou.</p>
      <p>👉 Nie preto, že by si bol „menej múdry", ale preto, že sa prirodzene deje <strong>kognitívne offloading</strong>: „nech to vyrieši AI".</p>

      <p>🎨 <strong>{"Kreativita sa môže \u201Ezvanilkovať\u201C (menej originálu, viac priemeru)"}</strong></p>
      <p>Výskum opisuje, že AI vie dať rýchle nápady, ale pri dlhšom používaní sa môže znižovať originalita a ochota riskovať intelektuálne — výstupy sú často konvenčné, predvídateľné.</p>
      <p>👉 Kreativita je sval. Keď ho netrénuješ, slabne.</p>

      <p>🌀 <strong>Pozornosť a „brain rot" efekt (ťažšie sa sústrediť)</strong></p>
      <p>V texte sa spomína nárast problémov so sústredením a mentálnou hmlou; uvádza sa aj vysoký podiel mládeže so zníženou schopnosťou udržať pozornosť dlhšie než krátku chvíľu.</p>
      <p>👉 Keď k tomu pridáš AI (nekonečné varianty), ľahko skončíš v móde „ešte jednu odpoveď".</p>

      <p>😵 <strong>Návykovosť a dopamín (AI je príjemná a vždy dostupná)</strong></p>
      <p>Text opisuje, že AI môže aktivovať dopamínové dráhy podobne ako sociálne siete či hazard. U adolescentov sa spomína výskyt AI závislosti v desiatkach percent a súvis so spánkom, úzkosťou či zhoršenou psychikou.</p>
      <p>👉 Pozor hlavne na „nočné session" — v texte sa spomína aj úbytok kvalitného spánku.</p>

      <p>🛏️ <strong>Spánok a telo (modré svetlo + sedenie)</strong></p>
      <p>Modré svetlo pred spánkom potláča melatonín a spolu s mentálnou stimuláciou zhoršuje kvalitu spánku; plus dlhé sedenie = chrbát/krk.</p>

      <h3>✅ Ako si nastaviť zdravé hranice (jednoducho a prakticky)</h3>
      <p>Vyber si 2–3 pravidlá. Nemusíš všetko.</p>
      <ul>
        <li>⏱️ <strong>Časový limit:</strong> „AI max 10 min na jednu tému"</li>
        <li>🔁 <strong>Limit iterácií:</strong> „max 3 kolá a koniec"</li>
        <li>🧭 <strong>AI na štart, nie na finále:</strong> AI dá návrh → ty rozhodneš → hotovo</li>
        <li>🌙 <strong>AI-free zóna:</strong> večer / posteľ / pri jedle</li>
        <li>🧠 <strong>1 vec denne bez AI:</strong> malá úloha/nápad úplne sám (trénuješ sval)</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>AI znie presvedčivo aj vtedy, keď sa mýli — preto je dôležité udržať si <strong>kritické myslenie</strong>.</li>
        <li>Keď si unavený, je ľahšie skĺznuť do „dopamínového" používania (ešte jedna odpoveď).</li>
        <li>Najväčšie riziko nie je „AI sama o sebe", ale <strong>automatizmus</strong>.</li>
      </ul>

      <MiniTest
        question={"Čo je \u201Ekognitívny offloading\u201C v praxi?"}
        options={[
          { label: "🌕", text: "Keď AI píše rýchlo, tak šetrí môj čas" },
          { label: "⭐", text: "Keď AI používa internet" },
          { label: "☀️", text: "Keď si zvyknem prenášať premýšľanie na AI a menej trénujem vlastné myslenie" },
        ]}
        correct="☀️"
        explanation={"Offloading znamená \u201Enech to rieši nástroj\u201C – môže to byť užitočné, ale pri prehnanom používaní oslabuje vlastný \u201Esval\u201C premýšľania."}
      />

      <MiniTest
        question="Ktoré pravidlo je najlepšie, keď chceš AI používať efektívne a bez zahltenia?"
        options={[
          { label: "🌕", text: "Dám si AI otvorenú celý deň a budem sa priebežne pýtať" },
          { label: "⭐", text: "Nastavím si časový limit alebo limit iterácií (napr. 10 min / 3 kolá)" },
          { label: "☀️", text: "Budem sa pýtať len na jednoduché veci" },
        ]}
        correct="⭐"
        explanation="Hranice (čas/iterácie) riešia najčastejší problém: nekonečné dolaďovanie a rozptyľovanie."
      />
    </PageShell>
  );
}
