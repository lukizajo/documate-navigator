import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P10() {
  const nav = getNavContext("m03-10-prakticka-uloha");
  return (
    <PageShell title="🎓 Praktická úloha – Celý prompt v praxi" tldr={[
      "Priprav prompt so všetkými 6 časťami",
      "Otestuj ho v AI a sprav 1 iteráciu",
      "Výsledok = šablóna, ktorú vieš opakovane použiť",
    ]} {...nav}>

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
