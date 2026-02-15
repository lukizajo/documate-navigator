import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding, MiniTest, PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-08-licencie");

export default function LHP08() {
  return (
    <PageShell title="7️⃣ Licencie a etika: aby si to mohol používať bez stresu" prev={nav.prev} next={nav.next}>
      <p>Keď AI hudba znie "hotovo", je to super pocit. Ale práve tu vzniká najviac problémov: ľudia riešia kvalitu, loop, SFX… a licenciu nechajú na poslednú chvíľu. Potom príde nepríjemné prekvapenie (bloknuté video, otázky od klienta, alebo len stres, či to vlastne môžeš použiť).</p>
      <p>Cieľ tejto lekcie je jednoduchý: mať <strong>mini systém</strong>, ktorý ťa bezpečne zastaví skôr, než niečo zverejníš.</p>

      <h3>🛑 STOP-rule</h3>
      <p>👉 <strong>Bez jasnej licencie nepoužívam.</strong></p>
      <p>Ak si nie si istý, nepúšťaj to von. Licencia je súčasť "hotového výstupu", rovnako ako dĺžka alebo loop.</p>

      <h3>🔀 Použiť vs zdieľať</h3>
      <p>Je rozdiel medzi tým, že:</p>
      <ul>
        <li><strong>použiješ</strong> hudbu vo videu/podcaste (publikuješ hotové dielo),</li>
        <li>a tým, že:</li>
        <li><strong>zdieľaš</strong> samotné audio súbory (pošleš sound pack klientovi, dáš ho do komunity, uložíš na web na stiahnutie).</li>
      </ul>
      <p>💡 Tip: Aj keď je "použitie vo videu" povolené, "redistribúcia súborov" môže byť zakázaná alebo obmedzená.</p>

      <h3>🧾 4 otázky licenčnej kontroly</h3>
      <p>Pred použitím si vždy odpovedz na tieto 4 otázky:</p>
      <ul>
        <li>✅ <strong>Komerčné použitie:</strong> Môžem to použiť v práci / pre klienta / v monetizovanom obsahu?</li>
        <li>✅ <strong>Atribúcia:</strong> Musím uviesť zdroj alebo názov nástroja? Ak áno, kde?</li>
        <li>✅ <strong>Redistribúcia (zdieľanie súborov):</strong> Môžem poslať audio súbory klientovi alebo ich zdieľať ako balík?</li>
        <li>✅ <strong>Úpravy:</strong> Môžem výstup strihať, loopovať, mixovať so zvukmi a stále ho legálne použiť?</li>
      </ul>

      <h3>🚩 Červené vlajky</h3>
      <p>Zbystri pozornosť, ak platí niečo z tohto:</p>
      <ul>
        <li>licenčné podmienky nie sú nikde jasne uvedené</li>
        <li>podmienky sa líšia podľa <strong>free vs paid</strong> (a ty nevieš, čo platí pre teba)</li>
        <li>niekde vidíš "<strong>personal use only</strong>"</li>
        <li>nie je jasné, či je povolená <strong>redistribúcia audio súborov</strong></li>
        <li>zodpovede na 4 otázky si nevieš overiť z oficiálnych podmienok</li>
      </ul>

      <h3>📝 LICENSE_NOTE.txt (praktický výstup do sound packu)</h3>
      <p>Aby si to nemusel riešiť znova a znova, ulož si do priečinka sound packu krátku poznámku (napr. LICENSE_NOTE.txt).</p>
      <p>Stačí 6–10 riadkov — ale bude to tvoja "poistka".</p>
      <p><strong>✅ Šablóna (čo tam má byť):</strong></p>
      <ul>
        <li>Nástroj: [názov]</li>
        <li>Plán/verzia: [free/paid + názov plánu]</li>
        <li>Dátum overenia: [YYYY-MM-DD]</li>
        <li>Zdroj podmienok: [kde si to našiel – napr. "Pricing/FAQ/Terms"]</li>
        <li>Komerčné použitie: [áno/nie + podmienky]</li>
        <li>Atribúcia: [áno/nie + ako]</li>
        <li>Redistribúcia súborov: [áno/nie + limit]</li>
        <li>Úpravy (edit/loop/mix): [áno/nie + podmienky]</li>
      </ul>

      <h3>🧭 Čo robiť, keď si nie si istý (2 kroky)</h3>
      <p>1️⃣ Nájsť oficiálne podmienky/FAQ daného nástroja a pozrieť presne 4 otázky z checkpointu.</p>
      <p>2️⃣ Ak to stále nie je jasné: použi bezpečnú alternatívu (iný výstup/nástroj, alebo zvuk, pri ktorom máš licenciu istú).</p>
      <p>STOP-rule tu funguje ako brzda: radšej zmeniť zdroj než riešiť problém po publikovaní.</p>

      <MiniTask title="Licenčný checkpoint pre tvoj zvukový balík">
        <p><strong>Situácia</strong></p>
        <p>Máš hotový sound pack (music/, sfx/, export/). Teraz potrebuješ mať istotu, či ho môžeš použiť verejne/komerčne a či môžeš prípadne poslať súbory klientovi.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Vyplň licenčný checkpoint pre nástroj, ktorý si použil, a ulož si to ako LICENSE_NOTE.txt priamo do priečinka sound packu.</p>
        <PromptBlock>{`Pomôž mi spraviť licenčný checkpoint pre môj AI sound pack. Zober to prakticky a zameraj sa len na to, čo potrebujem vedieť pred použitím.
Použitý nástroj: [názov nástroja]
Plán/verzia: [free/paid + názov]
Môj use-case: [podcast/video/prezentácia]
Použitie: [súkromne/verejne/komerčne/pre klienta]
Vytvor mi:
1. odpovede na 4 otázky licenčnej kontroly:
• komerčné použitie
• atribúcia
• redistribúcia súborov (zdieľanie sound packu)
• úpravy (edit/loop/mix)
2. hotový text LICENSE_NOTE.txt (6–10 riadkov) podľa šablóny:
• nástroj, plán, dátum, zdroj podmienok
• 4 odpovede vyššie
3. 3 červené vlajky, ktoré si mám overiť, ak je niečo nejasné`}</PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Viem, či môžem použiť výstup komerčne?</li>
          <li>Viem, či musím uviesť atribúciu?</li>
          <li>Viem, či môžem zdieľať audio súbory (napr. poslať klientovi)?</li>
          <li>Mám LICENSE_NOTE.txt uložený priamo v sound packu?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že najbezpečnejší workflow nie je "dúfať", ale mať jednoduchý checkpoint a uložiť si výsledok priamo k súborom. Vtedy sa vieš rozhodovať rýchlo a bez stresu.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktoré tvrdenie je správne?"
        options={[
          { label: "🌕", text: "Keď som hudbu vygeneroval, automaticky ju môžem použiť kdekoľvek." },
          { label: "⭐", text: "\u201EFree\u201C vždy znamená aj komerčné použitie." },
          { label: "☀️", text: "Bez jasnej licencie alebo podmienok radšej výstup nepoužijem." },
        ]}
        correct="☀️"
        explanation="STOP-rule ťa chráni pred problémom až po publikovaní."
      />
    </PageShell>
  );
}
