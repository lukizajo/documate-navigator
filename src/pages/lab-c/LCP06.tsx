import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lc-06-hranice");

export default function LCP06() {
  return (
    <PageShell title="5️⃣ Hranice, bezpečnosť, neistota" prev={nav.prev} next={nav.next}>
      <p>Dobrá AI nie je tá, čo odpovie na všetko. Dobrá AI je tá, ktorá vie, kedy spomaliť, pýtať sa a nepokračovať bez istoty.</p>

      <hr />

      <h2>✅ Keď chýbajú vstupy</h2>
      <p>Ak chýba cieľ, publikum, formát alebo podklady, asistent by nemal tipovať.</p>
      <ul>
        <li>spýtaj sa max 2 doplňujúce otázky</li>
        <li>až potom pokračuj</li>
      </ul>

      <hr />

      <h2>⚠️ Keď je to citlivé alebo rizikové</h2>
      <p>Pri citlivých údajoch alebo rozhodnutiach s dopadom platí jednoduché pravidlo:</p>
      <ul><li>AI pripraví návrh, človek rozhoduje (AI-in-the-loop)</li></ul>
      <p>Citlivé údaje v praxi (príklady):</p>
      <ul>
        <li>osobné identifikátory (rodné číslo, číslo dokladu, adresa)</li>
        <li>financie (účty, karty, výpisy, citlivé transakcie)</li>
        <li>zdravie (diagnózy, lieky, zdravotná dokumentácia)</li>
        <li>prístupy a tajomstvá (heslá, API kľúče, interné prístupy)</li>
        <li>interné firemné dáta (zmluvy, neverejné reporty, zákaznícke dáta)</li>
      </ul>

      <hr />

      <h2>❓ Keď je neistota</h2>
      <p>Keď si asistent nie je istý, nemá to maskovať sebavedomým tónom.</p>
      <ul>
        <li>odlíš „viem" vs „odhadujem"</li>
        <li>povedz, čo chýba</li>
        <li>navrhni spôsob overenia</li>
      </ul>

      <hr />

      <h2>🧾 Vety, ktoré môžeš skopírovať</h2>
      <ul>
        <li>Keď chýbajú vstupy: „Aby som netipoval, potrebujem 2 veci: (1) … (2) …"</li>
        <li>Keď je neistota: „Toto je odhad. Istotu získame takto: …"</li>
        <li>Keď odmieta: „S týmto ti nepomôžem. Môžem však: …"</li>
      </ul>

      <MiniTest
        question="V ktorých 2 situáciách by sa mal asistent najprv pýtať doplňujúce otázky? Vyber 2."
        options={[
          { label: "🌕", text: "\u201EChcem 3 tipy na dar\u010Dek.\u201C" },
          { label: "⭐", text: "\u201ENap\u00ED\u0161 mi odpove\u010F na email \u2013 ale nepoviem komu ani v akom t\u00F3ne.\u201C" },
          { label: "☀️", text: "\u201EZhr\u0148 tento dokument \u2013 ale dokument som ti neposlal.\u201C" },
          { label: "🌑", text: "\u201EUrob mi zoznam 5 synonym.\u201C" },
          { label: "🌠", text: "\u201EVysvetli mi, \u010Do je infl\u00E1cia.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ chýba publikum a tón → bez toho nevie nastaviť formát. ☀️ chýbajú dáta → bez vstupu by musel tipovať."
      />

      <MiniTest
        question="Ktoré 2 formulácie sú dobrý spôsob, ako riešiť nejasné zadanie bez tipovania? Vyber 2."
        options={[
          { label: "🌕", text: "\u201ESp\u00FDtam sa 10 ot\u00E1zok, aby som mal istotu.\u201C" },
          { label: "⭐", text: "\u201ESp\u00FDtam sa max 2 dop\u013E\u0148uj\u00FAce ot\u00E1zky a po\u010Dk\u00E1m na odpove\u010F.\u201C" },
          { label: "☀️", text: "\u201EPomenujem, \u010Do mi ch\u00FDba, a navrhnem, ako to doplni\u0165 alebo overi\u0165.\u201C" },
          { label: "🌑", text: "\u201EDopln\u00EDm si detaily s\u00E1m, aby som bol r\u00FDchly.\u201C" },
          { label: "🌠", text: "\u201EOdpoviem v\u0161eobecne a tv\u00E1rim sa sebavedomo.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ 2 otázky stačia na odblokovanie bez toho, aby si používateľa zahltil. ☀️ jasne priznáš chýbajúce vstupy a znížiš riziko halucinácie."
      />
    </PageShell>
  );
}
