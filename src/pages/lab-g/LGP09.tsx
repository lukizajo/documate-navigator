import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-09-etika");

export default function LGP09() {
  return (
    <PageShell title="8️⃣ Etika a práva pri AI videu" prev={nav.prev} next={nav.next}>
      <p>Pri AI videu je ľahké spraviť niečo efektné… a zároveň spraviť krok, ktorý je <strong>neetický</strong>, <strong>zavádzajúci</strong> alebo právne problémový.</p>
      <p>Táto lekcia ti dá jednoduchý rámec: <strong>STOP/GO</strong>.</p>
      <p>Nejde o strašenie. Ide o to, aby si vedel tvoriť rýchlo a zároveň <strong>bez rizika</strong>, že niekomu ublížiš alebo si narobíš problém.</p>

      <h2>✅ MUST / SHOULD / NICE</h2>
      <ul>
        <li><strong>MUST HAVE:</strong><br />🛑 nepoužívaš tvár/hlas reálnej osoby bez súhlasu<br />🧾 máš vyriešené licencie (najmä <strong>hudba</strong>)<br />🔍 video nevytvára „fake dôkaz reality"</li>
        <li><strong>SHOULD HAVE:</strong><br />🧠 transparentnosť, keď hrozí, že to niekto zoberie ako realitu<br />🧹 citlivý kontext ošetrený (zdravie/financie/politika)</li>
        <li><strong>NICE TO HAVE:</strong><br />📌 krátka poznámka „vizualizácia/AI generované" (ak sa hodí)<br />✅ interný checklist pred publikovaním</li>
      </ul>

      <h2>🛑 STOP/GO rámec (jedna otázka, ktorá ťa zachráni)</h2>
      <p>Pred publikovaním si polož:</p>
      <p>👉 „Môže si divák myslieť, že je to reálne, aj keď to reálne nie je?"</p>
      <p>Ak áno, zbystri. Pri AI videu je najväčší problém <strong>falošná autenticita</strong>.</p>

      <h2>🧭 Rýchly rozhodovací strom</h2>
      <p>👉 „Toto video je <strong>ilustrácia</strong> alebo <strong>dôkaz</strong>?"</p>
      <ul>
        <li>🎨 <strong>Ilustrácia</strong> (metafora, vysvetlenie, edukácia) → väčšinou <strong>GO</strong></li>
        <li>🧾 <strong>Dôkaz</strong> („takto to je/bolo", screeny, reportáže, výsledky) → <strong>STOP/pozor</strong>, radšej reálne zábery alebo jasná transparentnosť</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Čím viac video vyzerá ako realita, tým viac sa naň vzťahujú pravidlá reality (súhlas, zdroje, licencia).</p>

      <h2>✅ GO: typické situácie, kde je AI video OK</h2>
      <ul>
        <li>metafory a vysvetľujúce vizuály (abstrakt, ilustrácia, animácia)</li>
        <li>„how-to" videá, kde je jasné, že ide o tip/návod</li>
        <li>b-roll, ktorý nemá robiť dôkaz („atmosféra", nie „realita")</li>
        <li>zhrnutia, edukácia, jednoduché vizualizácie</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Keď AI video <strong>nevystupuje ako dôkaz reality</strong>, riziko je výrazne menšie.</p>

      <h2>🛑 STOP: červené vlajky (kedy si koleduješ o problém)</h2>
      <ul>
        <li>❗ tvár alebo hlas reálnej osoby bez súhlasu (deepfake vibe)</li>
        <li>❗ napodobňovanie známej osoby (hlas, podoba, štýl)</li>
        <li>❗ generované „dôkazy": fake screenshoty, reportáže, dokumenty, „záznamy"</li>
        <li>❗ citlivé témy, kde AI obraz môže zavádzať (zdravie, financie, politika)</li>
        <li>❗ použitie hudby/assetov bez licencie pri komerčnom použití</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak video „vyzerá ako realita", správaj sa k nemu ako k realite — potrebuješ súhlas, zdroj, dôkaz.</p>

      <h2>🔍 Práva a licencie</h2>
      <p>Aj keď je video „AI", stále riešiš:</p>
      <ul>
        <li><strong>hudbu</strong> (najčastejšia licenčná pasca),</li>
        <li><strong>stock klipy/fotky</strong> (podmienky použitia),</li>
        <li><strong>logá a značky</strong> (najmä v reklamnom kontexte),</li>
        <li><strong>tváre ľudí</strong> (súkromie a súhlas).</li>
      </ul>
      <p>⚠️ <strong>Pozor:</strong> „Je to z internetu" neznamená „môžem to použiť".</p>

      <h2>❗ Na čo si dať pozor</h2>
      <ul>
        <li>🎭 <strong>„Vyzerá to ako realita"</strong> → divák to môže brať ako dôkaz.</li>
        <li>🗣️ <strong>Hlas, ktorý znie ako konkrétny človek</strong> (aj keď to „nebolo úmyselne") → radšej uprav tón / nepodobaj sa.</li>
        <li>🧾 <strong>Hudba z TikToku/IG ≠ licencia pre všetko</strong> (najmä pri komerčnom použití).</li>
        <li>🏷️ <strong>Logá, značky a UI aplikácií</strong> v zábere (najmä keď to vyzerá ako reklama).</li>
        <li>🧑‍🤝‍🧑 <strong>Tváre ľudí v pozadí</strong> (točenie) + notifikácie / citlivé údaje na obrazovke (screen recording).</li>
      </ul>

      <h2>🧾 Transparentnosť: kedy priznať AI</h2>
      <p>Nie vždy musíš hlásiť „toto je AI". Ale ak hrozí, že to niekto zoberie ako realitu, máš tri bezpečné možnosti:</p>
      <ul>
        <li>povedať to priamo („vizualizácia / AI generované"),</li>
        <li>spraviť vizuál tak, aby bolo jasné, že je to ilustrácia (nie fotoreal),</li>
        <li>alebo použiť reálne zábery, keď ide o dôveru.</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Pri edukácii je transparentnosť často plus — zvyšuje dôveru.</p>

      <h3>📌 Mini šablóny transparentnosti</h3>
      <p>Keď to potrebuješ, nech je to jednoduché:</p>
      <ul>
        <li>„🎥 Vizualizácia / ilustračné zábery (AI). Pointa je princíp, nie realita."</li>
        <li>„🧠 AI použité na obrazový b-roll. Postup je reálny, vizuál je ilustrácia."</li>
        <li>„📌 Toto video je edukatívne, nie odborné poradenstvo."</li>
      </ul>

      <h2>✅ Mikro-checklist pred publikovaním</h2>
      <ul>
        <li>Je niekde tvár/hlas osoby bez súhlasu?</li>
        <li>Môže to pôsobiť ako „reálny dôkaz"?</li>
        <li>Mám licenciu na hudbu/stock?</li>
        <li>Je to citlivá téma? Ak áno, mám to ošetrené?</li>
      </ul>

      <MiniTask title="STOP/GO kontrola pre tvoje video">
        <p><strong>Situácia</strong></p>
        <p>Máš hotové krátke video (alebo storyboard) a chceš si overiť, že je eticky a právne OK pred publikovaním.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Prejdi si svoj výstup cez STOP/GO kontrolu a doplň 1–2 úpravy, ktoré znížia riziko.</p>
        <PromptBlock hideLabel>
          <p>„Tu je môj krátky scenár / storyboard (15–60 s):<br />
          [sem vlož text]<br />
          Sprav mi eticko-právnu kontrolu vo formáte STOP/GO.<br />
          Chcem:</p>
          <ol>
            <li>3 veci, ktoré sú GO (bezpečné)</li>
            <li>3 možné riziká (STOP alebo pozor)</li>
            <li>návrh 2 konkrétnych úprav, aby sa video dalo publikovať bezpečnejšie</li>
            <li>krátku vetu, ako by som bol transparentný, ak treba (voliteľne)</li>
          </ol>
          <p>Ber do úvahy: tváre/hlasy, zavádzanie, licencie (hudba/stock), citlivý kontext."</p>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Môže si divák myslieť, že je to reálne, aj keď to reálne nie je?</li>
          <li>Používam niekoho tvár alebo hlas bez jasného súhlasu?</li>
          <li>Používam hudbu/stock s jasnou licenciou pre moje použitie?</li>
          <li>Nie je video „dôkaz", ktorý by mohol zavádzať?</li>
        </ul>
        <ExpectedFinding>
          <p>Etika pri AI videu nie je brzda. Je to <strong>filter</strong>, ktorý ti pomôže tvoriť bez strachu, že niečo prepáliš.</p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={`👉 Ktorá situácia je najviac \u201ESTOP\u201C?`}
        options={[
          { label: "🌕", text: "Video, kde AI napodobňuje hlas konkrétneho kolegu, aby \u201Eto znelo autenticky\u201C." },
          { label: "⭐", text: "Stock b-roll kancelárie + tichá hudba, ktorú máš licencovanú." },
          { label: "☀️", text: "AI vizualizácia metafory (\u201EAI ako kuchyňa\u201C) bez tvárí a bez tvrdení, že je to realita." },
        ]}
        correct="🌕"
        explanation="napodobňovanie hlasu reálnej osoby bez súhlasu je vysoko rizikové (eticky aj právne) a môže to pôsobiť ako deepfake."
      />
    </PageShell>
  );
}
