import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P09() {
  const nav = getNavContext("m03-09-reverzne");
  return (
    <PageShell title="8️⃣ Reverzné promptovanie a praktická úloha" tldr={[
      "AI ti vie pomôcť aj vytvoriť dobrý prompt",
      "Reverzné promptovanie: od hotového výsledku späť k promptu",
      "Praktická úloha: vytvor kompletný prompt so všetkými 6 blokmi",
    ]} {...nav}>

      <h2>Promptovanie s pomocou AI + reverzné promptovanie 🔟</h2>
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

      <h2>🎓 Praktická úloha – Celý prompt v praxi</h2>
      <p><strong>Zadanie:</strong> Priprav prompt pre AI, ktorý ti pomôže so stravou v bežnom živote. Tvoj prompt musí obsahovať všetkých 6 častí:</p>

      <h3>1️⃣ Úloha – čo presne má AI spraviť</h3>
      <p>Vyber si: a) jedálniček na 3 dni, b) 3 rýchle večere, c) nákupný zoznam na týždeň + čo z toho uvarím.</p>

      <h3>2️⃣ Kontext</h3>
      <p>Doplň: pre koho, cieľ (zdravšie/lacnejšie/rýchlejšie), obmedzenia (bez mäsa/alergie/do 20 min), čo máš doma.</p>

      <h3>3️⃣ Príklady</h3>
      <p>Pridaj 1 krátky príklad, napr.: <em>„Jednoduché jedlá z bežných surovín, bez zložitých slov."</em></p>

      <h3>4️⃣ Rola</h3>
      <p>Vyber si: výživový poradca / kuchár na rýchle jedlá / meal prep plánovač.</p>

      <h3>5️⃣ Formát</h3>
      <p>Vyber si: odrážky / tabuľka / kroky. Na konci vždy: „Nákupný zoznam" (max 10 položiek).</p>

      <h3>6️⃣ Tón</h3>
      <p>Vyber si: priateľsky / vecne / povzbudivo.</p>

      <h3>Test v praxi (povinné)</h3>
      <p>Skopíruj prompt do AI, nechaj si vygenerovať výstup, potom sprav 1 iteráciu.</p>

      <h3>☑ Sebakontrola</h3>
      <ul>
        <li>Je jasné, čo má AI spraviť?</li>
        <li>Je jasné, pre koho to je a v akej situácii?</li>
        <li>Je v prompte aspoň 1 príklad?</li>
        <li>Je určená rola?</li>
        <li>Je daný formát?</li>
        <li>Je nastavený tón?</li>
      </ul>

      <ExpectedFinding>
        <p>Budeš mať jeden „kompletný" prompt, ktorý si vieš uložiť ako šablónu a nabudúce len vymeníš svoje detaily.</p>
        <p className="mt-1">💡 <strong>Bonus tip:</strong> Ak nevieš, čo doplniť do kontextu, napíš do AI: <em>„Spýtaj sa ma 3 otázky, aby si si upresnil zadanie."</em></p>
      </ExpectedFinding>
    </PageShell>
  );
}
