import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding, MiniTest, PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-05-dlzka-loop");

export default function LHP05() {
  return (
    <PageShell title="4️⃣ Dĺžka a loop: sprav hudbu použiteľnú v praxi" prev={nav.prev} next={nav.next}>
      <p>Hudba môže znieť super… ale keď má zlú dĺžku alebo sa nedá dobre opakovať, v reálnom obsahu ťa začne brzdiť. V tejto lekcii si preto nastavíš jednoduché pravidlá, ako spraviť z hudby <strong>praktický formát</strong>: krátke intro a stabilné pozadie, ktoré vieš loopovať bez toho, aby bolo počuť "švík".</p>

      <h3>🔁 Loop</h3>
      <p>Loop je úsek hudby, kde <strong>koniec prirodzene nadviaže na začiatok</strong>. Tak, že keď to pustíš 2× za sebou, nemáš pocit "aha, tu sa to zopakovalo".</p>
      <p>Predstav si to ako <strong>nekonečný pás</strong> – ide stále dokola a ty nevidíš, kde sa "spája".</p>

      <h3>🎚️ Intro vs pozadie vs loop</h3>
      <ul>
        <li><strong>Intro (7–10 s)</strong> — Krátky signál "začíname". Môže byť o trochu výraznejšie, lebo je krátke a má zaujať. Dôležité je, aby malo <strong>čistý koniec</strong>.</li>
        <li><strong>Pozadie / bed (20–30 s)</strong> — Stabilné pozadie pod obsah (najmä pod hlas). Má držať náladu bez toho, aby sa tlačilo dopredu.</li>
        <li><strong>Loop (špeciálny typ pozadia)</strong> — Je to pozadie navrhnuté tak, aby sa dalo <strong>opakovať bez švu</strong>. Dôležité: nie každé pozadie je automaticky dobrý loop. Pozadie môže mať "moment", loop nie.</li>
      </ul>

      <h3>🧵 Čo robí "šev" (prezradí loop) – 5 typických prezrádzačov</h3>
      <p>Ak si ľudia všimnú, že sa to opakuje, takmer vždy je to kvôli tomuto:</p>
      <ul>
        <li>na konci je <strong>výrazný zvuk alebo úder</strong>, ktorý sa opakovaním prezradí</li>
        <li>na začiatku je <strong>nábeh/rozbeh</strong>, ktorý znie vždy rovnako</li>
        <li>v poslednej sekunde je <strong>zmena energie</strong> (zrazu sa to "otvorí" alebo "zatvorí")</li>
        <li>je tam <strong>náhodný efekt</strong>, ktorý sa opakuje presne v rovnakom mieste</li>
        <li>skladba má "príbeh" (mini-gradáciu) → a loop potom pôsobí ako "sekne sa a začína odznova"</li>
      </ul>
      <p>💡 <strong>Tip do praxe:</strong> Loop je najlepší vtedy, keď je trochu "nudný". Pri pozadí je nuda často výhra.</p>

      <h3>✅ Ako otestovať loop</h3>
      <p>1️⃣ Pusť si to <strong>2× za sebou</strong> (hneď po sebe)</p>
      <p>2️⃣ Zatvor oči a sústreď sa len na moment prechodu</p>
      <p>3️⃣ Ak prechod počuješ, vieš, čo upraviť: <strong>menej highlightov / stabilnejší koniec / hladší začiatok</strong></p>

      <h3>🧪 Mikropríklad</h3>
      <ul>
        <li><strong>Intro:</strong> „7–10 s, trochu výraznejšie, jasný čistý koniec."</li>
        <li><strong>Loop pozadia:</strong> „20–30 s, stabilné, bez výrazných momentov, prechod koniec→začiatok nepostrehnuteľný."</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>loop, ktorý má výrazný refrén alebo "moment" → okamžite sa prezradí</li>
        <li>príliš veľa zmien v krátkom úseku → pozadie začne rušiť</li>
        <li>nečistý začiatok/koniec (sekne sa to) → zlé intro aj zlé loopovanie</li>
        <li>pri obsahu s hlasom je hudba príliš "hudobná" (melódia sa tlačí dopredu)</li>
      </ul>

      <MiniTask title="Vyrob intro + loop z jednej nálady">
        <p><strong>Situácia</strong></p>
        <p>Máš vybraný najlepší výstup z lekcie 3 (alebo najlepší variant) a chceš ho reálne použiť: krátke intro a stabilné pozadie, ktoré môžeš opakovať.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Z rovnakého štýlu sprav dve verzie:</p>
        <ul>
          <li>A) <strong>Intro 7–10 s</strong> (čistý začiatok a čistý koniec)</li>
          <li>B) <strong>Pozadie 20–30 s</strong> vhodné na loop (stabilné, bez dramatických zmien)</li>
        </ul>
        <PromptBlock>{`Pomôž mi upraviť hudbu na praktické formáty pre reálny obsah.
Mám hudbu v tomto štýle (mood): [3 slová]
Použitie: [pod hlas / intro / oboje]
NESMIE: [2 zákazy]
Chcem dve verzie:
A) Intro 7–10 s
• trochu výraznejšie ako pozadie
• čistý začiatok a čistý koniec

B) Pozadie 20–30 s vhodné na loop
• stabilné, nenápadné (najmä ak je tam hlas)
• bez výrazných momentov
• prechod koniec→začiatok má byť nepostrehnuteľný

Daj mi:
1. presný prompt pre A
2. presný prompt pre B

A ak loop nebude dobrý:
3) opravný prompt: „uprav loop tak, aby šev nebolo počuť" (len jedna zmena, nie všetko naraz)`}</PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Má intro čistý začiatok a koniec?</li>
          <li>Je pozadie stabilné bez výrazných momentov?</li>
          <li>Viem loopovať 2× za sebou bez toho, aby som si všimol "šev"?</li>
          <li>Je dĺžka naozaj taká, ako som chcel (7–10 s / 20–30 s)?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že rovnaká nálada môže fungovať ako intro aj ako pozadie — rozdiel je v dĺžke a stabilite. Použiteľnosť často vzniká úpravou formátu a odstránením "momentov", nie hľadaním úplne novej skladby.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Čo je najdôležitejšie pre loop pozadia?"
        options={[
          { label: "🌕", text: "Aby malo výrazný refrén, ktorý sa zapamätá" },
          { label: "⭐", text: "Aby bolo stabilné a nemalo moment, kde sa loop prezradí" },
          { label: "☀️", text: "Aby sa každých 10 sekúnd zmenil štýl, nech to nie je nudné" },
        ]}
        correct="⭐"
        explanation="Loop má byť \u201Eneviditeľný\u201C \u2014 stabilný, bez highlightov, aby sa dal opakovať bez rušenia."
      />
    </PageShell>
  );
}
