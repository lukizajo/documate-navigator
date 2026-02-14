import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M05P06() {
  const nav = getNavContext("m05-06-halucinacie");
  return (
    <PageShell title={"M05 \u2013 Vyh\u013Ead\u00E1vanie s AI \uD83D\uDD0D\uD83E\uDD14"} {...nav}>

      <h2>5️⃣ Halucinácie a „sebaisté klamstvá"</h2>
      <p>AI vie odpovedať tak presvedčivo, že človek má pocit, že to musí byť pravda. Lenže AI nie je databáza. Je to systém, ktorý skladá odpovede tak, aby dávali zmysel. A keď nevie, občas si <strong>doplní detaily</strong>. Nie zo zlého úmyslu, ale preto, že jeho „práca" je odpovedať.</p>
      <p><strong>👉 Dôležité rozlíšenie</strong></p>
      <p><strong>Chyba</strong> je, keď AI niečo zle zhrnie alebo sa pomýli v detaile.</p>
      <p><strong>Halucinácia</strong> je, keď AI uvedie „fakt", ktorý <strong>nemá oporu v zdrojoch</strong> (a pritom znie presne a odborne).</p>

      <h3>🤥 Ako vyzerá halucinácia v praxi</h3>
      <p>Halucinácia nie je len „úplný nezmysel". Často je to zákernejšie: <strong>detail, ktorý pôsobí reálne, ale nie je podložený</strong>.</p>
      <p>Typické príklady:</p>
      <ul>
        <li><strong>vymyslený zdroj</strong>, článok, kniha alebo citácia</li>
        <li><strong>presné číslo</strong> („o 37 %"), ktoré znie vedecky, ale nemá oporu</li>
        <li>„pravidlo", ktoré platí len niekedy, ale AI ho povie ako <strong>univerzálnu pravdu</strong></li>
        <li>zmiešanie dvoch podobných vecí (firmy, zákony, mená, dátumy)</li>
      </ul>

      <h3>👉 Prečo sa to deje</h3>
      <ul>
        <li>AI neoveruje pravdu automaticky, <strong>skladá odpoveď podľa pravdepodobnosti</strong></li>
        <li>ak nemá zapnutý web search, odpovedá zo svojich znalostí a <strong>dopĺňa medzery</strong></li>
        <li>aj pri web search môže zhrnúť zdroj nesprávne alebo vytiahnuť <strong>slabý zdroj</strong></li>
        <li>keď sa pýtaš všeobecne, necháš AI priestor „dotvoriť" realitu</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <p>Tu sú rýchle „červené vlajky", ktoré si vieš všimnúť okamžite:</p>
      <ul>
        <li><strong>konkrétne čísla a percentá</strong> bez zdroja</li>
        <li><strong>citácie</strong> bez odkazu alebo bez možnosti nájsť ich v texte</li>
        <li>odpoveď, ktorá znie „až príliš hladko" a pritom <strong>neuvádza odkiaľ to má</strong></li>
        <li>keď sa AI tvári veľmi isto, ale nevie uviesť <strong>dátum, zdroj, kontext</strong></li>
      </ul>

      <p><strong>💡 Tip do praxe: grounding a kontrolné otázky</strong></p>
      <p>Keď ide o fakty, vždy si vypýtaj dve veci:</p>
      <ul>
        <li><strong>zdroj</strong> (odkaz alebo názov stránky/dokumentu)</li>
        <li><strong>dôkaz v texte</strong> (krátka pasáž, ktorá to potvrdzuje)</li>
      </ul>
      <p>Praktická veta, ktorá funguje:</p>
      <p>„<strong>Uveď zdroj a skopíruj pasáž</strong>, ktorá to potvrdzuje. Ak to nevieš nájsť, napíš <strong>neviem</strong>."</p>

      <MiniTask title={`\u201ENachytaj AI\u201C bezpe\u010Dne (zdroj + pas\u00E1\u017E)`}>
        <p><strong>Situácia</strong></p>
        <p>Chceš použiť AI odpoveď ďalej (napísať post, niekomu to odporučiť, spraviť rozhodnutie). Najprv si overíš, či si AI nevymyslela fakty.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyber si jednu tému (ľahká, bežná, ale s faktami). Napríklad:</p>
        <ul>
          <li>účinky magnézia na spánok</li>
          <li>čo spôsobuje svalové kŕče</li>
          <li>ako fungujú zľavy na letenky (kedy bývajú najčastejšie)</li>
          <li>ako funguje reklamácia v e-shope (lehota, výnimky)</li>
        </ul>
        <p>Skopíruj do AI najprv Prompt 1 a potom do tej istej konverzácie Prompt 2. Výsledky si ulož vedľa seba.</p>
        <p><strong>🧠 Prompt 1 (fakty + zdroje)</strong></p>
        <p>„Uveď 5 konkrétnych faktov o téme: [SEM DOPLŇ TÉMU]. Ku každému faktu uveď <strong>zdroj</strong> (odkaz alebo názov stránky) a <strong>dátum</strong>, ak je dostupný."</p>
        <p><strong>🧠 Prompt 2 (dôkaz v texte)</strong></p>
        <p>„Vyber 2 fakty z tvojich bodov vyššie. Ku každému <strong>doslova skopíruj pasáž zo zdroja</strong>, ktorá to potvrdzuje (max 2–3 vety). Ak to nevieš nájsť, napíš <strong>neviem</strong> a vysvetli prečo. Pravidlo: <strong>ak nevieš nájsť pasáž, fakt sa nepočíta</strong>."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sú zdroje <strong>konkrétne a dohľadateľné</strong>, alebo len všeobecné názvy bez opory?</li>
          <li>Vie AI nájsť <strong>presnú pasáž</strong>, ktorá potvrdzuje fakt?</li>
          <li>Objavil sa „fakt", ktorý znie presne, ale <strong>nedá sa nikde potvrdiť</strong>?</li>
          <li>Keď AI nevie, prizná to, alebo sa snaží „niečo vymyslieť"?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>Ak AI nevie nájsť konkrétnu pasáž v zdroji, je to <strong>červená vlajka</strong>.</p>
        <p>Najčastejšie halucinácie sa prejavia tak, že odpoveď je pekná a presná, ale pri kontrole zdroja sa <strong>rozpadne</strong>.</p>
        <p>Keď si zvykneš pýtať <strong>zdroj + pasáž</strong>, dramaticky znížiš riziko, že preberieš nepravdu.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00E9 2 v\u00FDstupy s\u00FA najviac podozriv\u00E9, \u017Ee m\u00F4\u017Eu obsahova\u0165 haluci\u00E1cie, a preto potrebuje\u0161 kontrolu zdroja? Vyber 2.`}
        options={[
          { label: "\uD83C\uDF15", text: `\u201ETu je 10 tipov na ve\u010Deru do 20 min\u00FAt.\u201C` },
          { label: "⭐", text: `\u201EPod\u013Ea \u0161t\u00FAdie z Harvardu z roku 2023 sa produktivita zv\u00FD\u0161i o 37 % pri met\u00F3de X.\u201C` },
          { label: "☀️", text: `\u201EToto je presn\u00E1 cit\u00E1cia z knihy [n\u00E1zov], strana 124: \u2026\u201C` },
          { label: "\uD83C\uDF11", text: `\u201ENavrhni mi program na v\u00EDkend v Prahe bez davov.\u201C` },
          { label: "\uD83C\uDF20", text: `\u201EVysvetli mi, \u010Do je infl\u00E1cia, jednoducho a na pr\u00EDklade.\u201C` },
        ]}
        correct="⭐☀️"
        explanation={`\u2B50 a \u2600\uFE0F obsahuj\u00FA konkr\u00E9tne \u010D\u00EDsla a cit\u00E1cie, ktor\u00E9 sa daj\u00FA \u013Eahko vymyslie\u0165 a pritom znej\u00FA \u201Evedecky\u201C.`}
      />
    </PageShell>
  );
}
