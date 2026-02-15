import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-04-rozklad");

export default function LAP04() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>3️⃣ Rozklad problému pred promptom</h2>
      <p>Najčastejší dôvod, prečo AI „netrafí" odpoveď, nie je zlý model. Je to zlý štart. Ľudia preskočia rozmýšľanie a hneď chcú výstup.</p>
      <p>🧩 Lenže keď nevieš presne, čo chceš, AI ti to nevie uhádnuť. A ak to aj uhádne, bude to skôr náhoda než systém.</p>
      <p>🎯 Preto je rozklad problému jedna z najpraktickejších zručností v celom kurze. Skôr než požiadaš o riešenie, potrebuješ si upratať tri veci: <strong>cieľ, vstupy a hranice</strong>.</p>

      <hr />

      <h3>🧭 Čo si rozložiť, kým začneš písať prompt</h3>
      <p>🎯 <strong>Cieľ</strong></p>
      <p>Čo má byť výsledok? Ako spoznáš, že je to „dobré"?</p>
      <p>📌 <strong>Kontext</strong></p>
      <p>Pre koho je výstup? V akej situácii sa použije? Čo už platí?</p>
      <p>🚧 <strong>Obmedzenia</strong></p>
      <p>Čas, rozsah, štýl, pravidlá, zákazy, formát, zdroje.</p>
      <p>✅ <strong>Kritériá úspechu</strong></p>
      <p>Aké 2–4 veci musí odpoveď splniť, aby bola použiteľná?</p>
      <p>⚠️ <strong>Riziká a citlivosť</strong></p>
      <p>Je to low-stakes (nezáleží, keď to bude mimo) alebo high-stakes (môže to mať dôsledky)?</p>

      <hr />

      <h3>🧩 Mikropríklad: „Chcem lepší text"</h3>
      <p><strong>💬 Pôvodná požiadavka:</strong></p>
      <p>„Napíš mi text o našej novej funkcii."</p>
      <p><strong>🧠 Rozklad pred promptom:</strong></p>
      <ul>
        <li>🎯 Cieľ: stručný interný popis pre kolegov na podpore</li>
        <li>📌 Kontext: zákazníci sa budú pýtať „čo to robí, kedy to zapnúť, prečo to niekedy trafí zle"</li>
        <li>🚧 Obmedzenia: 120–160 slov, jednoduchý jazyk, bez technických detailov</li>
        <li>✅ Kritériá: musí obsahovať 3 benefity + 2 limity + 1 odporúčanie „kedy nepoužiť"</li>
        <li>⚠️ Riziko: nízke, ale nesmie to zavádzať</li>
      </ul>
      <p>✅ Až potom dáva zmysel zapojiť AI, lebo už vieš, čo vlastne chceš.</p>

      <hr />

      <PromptBlock>„Pomôž mi rozložiť tento problém. Najprv sa ma opýtaj otázky na cieľ, kontext, obmedzenia a kritériá úspechu. Až potom navrhni riešenie."</PromptBlock>
    </PageShell>
  );
}
