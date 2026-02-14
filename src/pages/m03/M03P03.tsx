import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M03P03() {
  const nav = getNavContext("m03-03-kontext");
  return (
    <PageShell title="2️⃣ KONTEXT – keď AI dopĺňa realitu za teba" {...nav}>


      <p>Kontext je prostredie, v ktorom sa má odpoveď odohrávať. Bez kontextu AI pracuje s „ideálnym svetom", ktorý často nemá s realitou nič spoločné.</p>

      <h3>❌ Zlá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>„Napíš oznam pre susedov."</div>
      <p className="text-sm">AI si musí sama vymyslieť: aký problém ide, kedy sa to deje, čo majú ľudia spraviť.</p>

      <h3>✔ Dobrá verzia</h3>
      <div className="rounded border p-3 text-xs my-2" style={{ background: "hsl(var(--muted))" }}>
        „Napíš krátky oznam pre susedov na nástenku (max 5 viet). Zajtra (streda) nepôjde voda v celom dome od 9:00 do 13:00 kvôli oprave. Cieľ: aby si ľudia stihli nabrať vodu. Tón: slušný a jednoduchý. Na konci pridaj: ‚Ďakujeme za pochopenie.'"
      </div>

      <h3>💡 Čo sa oplatí doplniť</h3>
      <ul>
        <li>pre koho je výstup (nováčik, kolega, klient…)</li>
        <li>účel (na web, do mailu, do prezentácie…)</li>
        <li>obmedzenia (čo nepoužiť, čo vynechať)</li>
        <li>situácia (čo už vieme a čo je cieľ)</li>
      </ul>
      <p>☠ <strong>Typická chyba:</strong> bez kontextu dostaneš všeobecný text, ktorý znie pekne, ale je prázdny.</p>

      <MiniTask title="Otestuj 2 prompty (KONTEXT)">
        <p><strong>❌ Prompt 1:</strong> <em>„Naplánuj mi jednodňový výlet v Prahe."</em></p>
        <p className="mt-2"><strong>✔ Prompt 2:</strong></p>
        <div className="rounded border p-3 text-xs mt-1" style={{ background: "hsl(var(--muted))" }}>
          „Naplánuj mi jednodňový výlet v Prahe. Som mimo Prahy a prídem vlakom okolo 9:00, odchádzam okolo 18:00. Idem s kamarátom, chceme pohodové tempo a skôr prechádzky než múzeá. Rozpočet na jedlo a drobnosti je do 800 Kč na osobu. Chcem, aby plán dával zmysel aj bez auta."
        </div>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 bude konkrétnejší a použiteľnejší, lebo AI dostala kontext: kedy prichádzaš, kedy odchádzaš, s kým ideš, aké máš tempo a limity.</p>
      </ExpectedFinding>

      <MiniTest
        question="Chceš plán jedla na 3 dni. Ktorý prompt je najlepší?"
        options={[
          { label: "🌕", text: `„Navrhni mi jedálniček na 3 dni. Nech je to zdravé, jednoduché a chutné..."` },
          { label: "⭐", text: `„Navrhni jedálniček na 3 dni pre jedného človeka. Nič extrémne, nech to nie je drahé..."` },
          { label: "☀", text: `„Navrhni jedálniček na 3 dni pre 2 osoby. Kontext: varíme večer po práci, max 20 minút, nechceme mäso, bežné suroviny. Výstup: Raňajky/Obed/Večera + nákupný zoznam (max 12 položiek)."` },
        ]}
        correct="☀"
        explanation="Má konkrétny kontext (pre koho, čas, preferencie) a jasný formát, takže AI nemusí hádať."
      />
    </PageShell>
  );
}
