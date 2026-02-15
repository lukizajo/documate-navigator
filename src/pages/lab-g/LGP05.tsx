import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-05-obraz");

export default function LGP05() {
  return (
    <PageShell title="4️⃣ Obraz: AI vs stock vs točenie" prev={nav.prev} next={nav.next}>
      <p>Keď máš storyboard/shot list, príde najdôležitejšie rozhodnutie: <strong>odkiaľ vezmeš obraz</strong>.</p>
      <p>A tu je základná chyba pri AI videu: ľudia vyberajú obraz podľa toho, čo je „wow", nie podľa toho, <strong>čo potrebuje pointa</strong>.</p>
      <p>V tomto LABe ideme AI-first, ale nie „AI za každú cenu". Preto pri každom zábere spravíš vedomú voľbu:</p>
      <ul>
        <li>🤖 <strong>AI generované</strong> – keď potrebuješ metaforu, abstrakt, vizuál „na mieru"</li>
        <li>🗂️ <strong>Stock (fotky/klipy)</strong> – keď chceš rýchlo realistický obraz bez rizika divných detailov</li>
        <li>🎥 <strong>Točenie / screen recording</strong> – keď potrebuješ dôveru, presnosť alebo reálny dôkaz</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak je záber o <strong>dôvere</strong>, AI ti často uškodí. Ak je záber o <strong>vysvetlení</strong>, AI ti často pomôže.</p>

      <h2>🤔 Kedy použiť AI video, stock a kedy radšej reálne točenie?</h2>
      <p>Cieľ LABu je <strong>AI-first</strong>, ale nie „AI za každú cenu". Pri každom zábere sa rozhoduješ podľa toho, či potrebuješ <strong>vysvetliť</strong>, <strong>ukázať realitu</strong>, alebo len <strong>doplniť obraz</strong>.</p>

      <h3>🤖 Kedy sa oplatí video spraviť pomocou AI</h3>
      <p>Použi <strong>AI</strong>, keď chceš:</p>
      <ul>
        <li>spraviť <strong>rýchle vysvetlenie</strong> (návod, tip, mini-pravidlo),</li>
        <li>vytvoriť <strong>metaforu</strong> alebo <strong>abstraktný obraz</strong> (napr. „AI ako kuchyňa"),</li>
        <li>mať <strong>konzistentný štýl</strong> bez natáčania (brand look),</li>
        <li>spraviť viac verzií (A/B) a rýchlo <strong>iterovať</strong>,</li>
        <li>tvoriť aj vtedy, keď nemáš kameru, svetlo, čas.</li>
      </ul>
      <p>✅ <strong>Výhoda AI:</strong> rýchlosť, variabilita, jednoduché úpravy, „produkcia bez produkcie".</p>
      <p>⚠️ <strong>Pozor:</strong> pri realistických scénach vie AI spraviť „divné detaily" (ruky, texty, logá) a keď je prompt nejasný, model si veci <strong>dotvára</strong>.</p>

      <h3>🗂️ Kedy je lepší stock (fotky/klipy)</h3>
      <p>Použi <strong>stock</strong>, keď chceš:</p>
      <ul>
        <li>mať <strong>realistický obraz</strong> rýchlo, bez natáčania,</li>
        <li>doplniť <strong>b-roll</strong> (pracovné prostredie, mesto, detail ruky, notebook…),</li>
        <li>vyhnúť sa „AI divným detailom" pri realistických scénach,</li>
        <li>získať vizuál, ktorý má pôsobiť <strong>dôveryhodne</strong>, ale nepotrebuje byť „tvoj".</li>
      </ul>
      <p>✅ <strong>Výhoda stocku:</strong> realizmus bez produkcie, veľký výber, rýchle doplnenie záberov.</p>
      <p>⚠️ <strong>Pozor:</strong> stock často pôsobí <strong>genericky</strong> a môže narušiť štýl videa, ak nezjednotíš farby/svetlo/kontrast (a pozor na licencie).</p>

      <h3>🎥 Kedy zvoliť reálne točenie (alebo vlastný záznam obrazovky)</h3>
      <p><strong>Reálne zábery</strong> sú lepšie, keď potrebuješ:</p>
      <ul>
        <li><strong>dôveru a autenticitu</strong> (ty, tím, skutočný príbeh),</li>
        <li>ukázať <strong>produkt / priestor / event</strong> (nie generovanú verziu),</li>
        <li>pracovať s <strong>citlivým kontextom</strong> (zdravie, osobné témy, dôvera),</li>
        <li>ukázať <strong>reálny výsledok</strong> (pred/po, dôkaz, proces),</li>
        <li>mať úplnú kontrolu nad tým, čo sa v obraze deje,</li>
        <li><strong>návod alebo postup v aplikácii</strong> (screen recording je často najlepší pomer dôvera/čas/kvalita),</li>
        <li>situácie, kde by AI mohla pôsobiť <strong>zavádzajúco</strong> (napr. „takto to vyzerá v realite").</li>
      </ul>
      <p>✅ <strong>Výhoda točenia/screenu:</strong> najvyššia dôvera, presnosť, jasný „dôkaz", menej rizika, že obraz bude pôsobiť umelo.</p>
      <p>⚠️ <strong>Pozor:</strong> produkcia vie zobrať čas (svetlo, zvuk, stabilita) a pri natáčaní ľudí si stráž <strong>súkromie/súhlas</strong> + citlivé info na obrazovke (notifikácie, údaje).</p>

      <h2>🎨 Konzistencia: aby video držalo spolu</h2>
      <p>Aj keď miešaš AI + stock + točenie, video musí pôsobiť ako jeden celok. Drž sa 4 kotiev:</p>
      <ul>
        <li>🌈 <strong>Farby</strong> – drž jednu paletu (napr. 1 hlavná + 1 akcent)</li>
        <li>💡 <strong>Svetlo</strong> – rovnaký „pocit" (teplé vs studené, kontrast)</li>
        <li>🔁 <strong>Prechody</strong> – max 1–2 typy, nie každý záber inak</li>
        <li>🧱 <strong>Kompozícia</strong> – kde sú titulky, kde je hlavný objekt (safe area)</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Konzistencia je dôležitejšia než krása jedného záberu.</p>

      <MiniTask title="Vyber zdroj obrazu pre každý záber">
        <p><strong>Situácia</strong></p>
        <p>Máš shot list (6–10 záberov) a potrebuješ rozhodnúť, odkiaľ vezmeš obraz tak, aby video bolo použiteľné a konzistentné.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Pre každý záber si vyber zdroj: <strong>AI / stock / točenie</strong>. Ku každému napíš 1 vetu „prečo" a doplň štýlové pravidlo, ktoré udrží konzistenciu.</p>
        <PromptBlock hideLabel>
          <p>„Tu je môj shot list (6–10 záberov):<br />
          [sem vlož shot list]<br />
          Pre každý záber rozhodni: AI / stock / točenie.<br />
          Vypíš to v tomto formáte:</p>
          <ul>
            <li>Záber X: (AI/stock/točenie)<br />Prečo: 1 veta<br />Poznámka: ako ho zjednotiť so zvyškom (farby/svetlo/kompozícia)</li>
          </ul>
          <p>Pravidlá:</p>
          <ul>
            <li>AI použi najmä na metafory a abstraktné vysvetlenia</li>
            <li>točenie/screen použi tam, kde je dôležitá dôvera alebo presnosť</li>
            <li>výsledok musí pôsobiť konzistentne (rovnaký štýl)"</li>
          </ul>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je jasné, prečo je pri každom zábere zvolený zdroj (AI/stock/točenie)?</li>
          <li>Nie je AI použitá tam, kde je dôležitá dôvera alebo presný dôkaz?</li>
          <li>Máš definované aspoň 2 pravidlá konzistencie (farby/svetlo/titulky/prechody)?</li>
          <li>Vieš si predstaviť, ako to celé bude pôsobiť ako jeden celok?</li>
        </ul>
        <ExpectedFinding>
          <p>Kvalitné AI video nevzniká z jedného generovania. Vzniká z dobrých rozhodnutí: <strong>ktorý záber má byť AI, ktorý má byť real a čo udrží štýl pokope.</strong></p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Kedy je lepšie použiť točenie alebo screen recording namiesto AI?"
        options={[
          { label: "🌕", text: "Keď chceš abstraktnú metaforu a brand look." },
          { label: "⭐", text: "Keď chceš realistický b-roll bez natáčania." },
          { label: "☀️", text: "Keď ukazuješ reálny postup v aplikácii alebo dôkaz výsledku." },
        ]}
        correct="☀️"
        explanation="pri návode a dôkaze je dôležitá presnosť a dôvera — AI môže pôsobiť zavádzajúco alebo nepresne."
      />
    </PageShell>
  );
}
