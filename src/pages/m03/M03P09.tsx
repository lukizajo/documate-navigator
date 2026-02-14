import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P09() {
  const nav = getNavContext("m03-09-reverzne");
  return (
    <PageShell title="8️⃣ Reverzné promptovanie" {...nav}>

      <p>Sú situácie, keď chceš kvalitný prompt, ale nevieš, čo všetko máš AI povedať. Tu je trik: <strong>AI ti nemusí pomáhať len s výsledkom – môže ti pomôcť aj s tým, ako sa správne pýtať.</strong></p>

      <h3>🤝 AI sa ťa najprv pýta otázky</h3>
      <p>Najlepší postup, keď máš nejasné zadanie:</p>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Spýtaj sa ma 5 otázok, aby si doplnil chýbajúce informácie."<br />
        „Potom na základe mojich odpovedí navrhni finálny prompt."
      </div>

      <h3>🔁 Reverzné promptovanie (od výsledku späť)</h3>
      <p>Použi vtedy, keď už máš text/výstup, ktorý sa ti páči, a chceš ho vedieť zopakovať.</p>
      <ol>
        <li>vlož text alebo výstup, ktorý sa ti páči</li>
        <li>spýtaj sa: <em>„Navrhni prompt, ktorý by viedol k tomuto štýlu a štruktúre."</em></li>
        <li>doplň: publikum, tón, formát, obmedzenia</li>
      </ol>

      <MiniTask title="AI ako prompt-kouč – Inzerát na mobil">
        <p><strong>Možnosť A: AI sa ťa pýta otázky</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Chcem napísať inzerát na predaj mobilu, ale neviem, aké informácie sú dôležité. Spýtaj sa ma 5 otázok, aby si doplnil chýbajúce info. Potom na základe mojich odpovedí navrhni finálny text inzerátu."
        </div>
        <p className="mt-3"><strong>Možnosť B: Reverzné promptovanie</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Predám iPhone 12 (64 GB, čierny) v zachovalom stave. Batéria 84 %, všetko funkčné, bez blokácií... Navrhni prompt, ktorý by viedol k tomuto štýlu a štruktúre inzerátu. Potom navrhni 2 alternatívy promptu: kratšiu a detailnejšiu."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>AI ti vie pomôcť nielen napísať inzerát, ale aj <strong>vytvoriť dobrý prompt</strong>. Buď sa ťa dopýta na chýbajúce info (A), alebo ti z hotového inzerátu vytiahne „recept" (B).</p>
      </ExpectedFinding>
    </PageShell>
  );
}
