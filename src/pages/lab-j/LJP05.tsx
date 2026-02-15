import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";

export default function LJP05() {
  const nav = getNavContext("lj-05-rizika");
  return (
    <PageShell title="4\uFE0F\u20E3 Rizik\u00E1, biasy a \u201Econfidently wrong\u201C" prev={nav.prev} next={nav.next}>
      <p>
        AI vie byť presvedčivá aj vtedy, keď je mimo.
      </p>
      <p>Preto si vždy vypýtaj: <strong>čo môže zlyhať</strong> a <strong>čo AI nemôže vedieť</strong>.</p>

      <hr />

      <h3>🔎 Mikro-príklad</h3>
      <p>
        AI ti sebavedomo odporučí postup {"\u201E"}lebo to tak býva{"\u201C"} — no nepozná tvoje interné pravidlá, lokálny kontext alebo výnimku. Výsledok znie odborne, ale stojí na predpoklade, ktorý u teba vôbec nemusí platiť.
      </p>
      <p>👉 Namiesto zoznamu rizík si polož 3 otázky:</p>
      <ul>
        <li>Čo z toho sú <strong>fakty</strong> a čo sú len <strong>domnienky/predpoklady</strong>?</li>
        <li>Čo by <strong>muselo platiť</strong>, aby toto riešenie dávalo zmysel?</li>
        <li>Ako to vie <strong>najpravdepodobnejšie zlyhať</strong>?</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Nechaj AI napísať aj {"\u201E"}argument proti sebe{"\u201C"}.</p>

      <hr />

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>{"\u201E"}Ak to znie odborne, je to pravda{"\u201C"} (nie je).</li>
        <li>AI často nepozná interné pravidlá, lokálne špecifiká a výnimky.</li>
        <li>Jedna chyba vo fakte môže zlomiť celé rozhodnutie.</li>
      </ul>

      <hr />

      <MiniTask title="Slabiny a slep\u00E9 miesta">
        <p><strong>Situácia</strong></p>
        <p>Máš A/B/C možnosti z lekcie 3.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Nechaj AI spraviť {"\u201E"}stress test{"\u201C"}: čo môže zlyhať a čo treba doplniť/overiť.</p>
        <PromptBlock>
          {"\u201E"}Správaj sa ako skeptický oponent. Chcem, aby si mi rozbil moje vlastné presvedčenie.<br />
          Scenár: [___] Moje 3 možnosti A/B/C: [skopíruj zhrnutie]<br />
          Pre každú možnosť:<br />
          1. 2 riziká zlyhania (konkrétne, špecifické pre môj scenár)<br />
          2. 1 skrytý predpoklad, ktorý možno neplatí<br />
          3. 1 otázka, ktorú musím zodpovedať pred rozhodnutím<br />
          4. Indikátor: podľa čoho spoznám, že sa riziko deje (1 veta)<br />
          5. Čo overím a kde: najbližší krok overenia (konkrétne: dokument/človek/zdroj)<br /><br />
          Na konci:<br />
          • napíš 3 veci, ktoré AI v tomto rozhodnutí nevie (bez ďalších dát){"\u201C"}
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Sú riziká konkrétne (nie {"\u201E"}môže to dopadnúť zle{"\u201C"})?</li>
          <li>Sú predpoklady pomenované jasne?</li>
          <li>Mám aspoň 3 otázky na doplnenie/overenie?</li>
          <li>Mám pri rizikách aj indikátor + čo overím?</li>
        </ul>
        <ExpectedFinding>
          Zistíš, že najlepší {"\u201E"}upgrade{"\u201C"} rozhodnutia je často doplnenie toho, čo si vôbec neriešil.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question={"\uD83D\uDC49 \u010Co je najlep\u0161\u00ED sp\u00F4sob, ako sa br\u00E1ni\u0165 \u201Econfidently wrong\u201C odpovedi\u00E1m?"}
        options={[
          { label: "🌕", text: "Pýtať sa znova, kým nedostanem odpoveď, ktorá sa mi páči." },
          { label: "⭐", text: "Vypýtať si riziká, predpoklady, indikátory a čo treba overiť." },
          { label: "☀️", text: "Vybrať tú možnosť, ktorá má najvyššie skóre, bez ďalších otázok." },
        ]}
        correct="⭐"
        explanation="Kritick\u00E9 ot\u00E1zky + overenie odhalia slabiny, nie pekn\u00FD t\u00F3n."
      />
    </PageShell>
  );
}
