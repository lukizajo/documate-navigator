import { PageShell } from "@/components/PageShell";
import { MiniTest } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lc-02-kedy-asistent");

export default function LCP02() {
  return (
    <PageShell title="1️⃣ Kedy použiť asistenta a kedy nie" prev={nav.prev} next={nav.next}>
      <p>Asistent dáva zmysel vtedy, keď chceš <strong>opakovať rovnaký typ práce</strong> a mať výsledky konzistentné. Ak potrebuješ len rýchlu odpoveď raz za čas, často stačí obyčajný chat.</p>

      <hr />

      <h2>💬 Chat vs 🗂️ Projekt vs 🤖 Asistent</h2>
      <p>💬 Chat = jednorazová otázka, 1 rýchly výstup.</p>
      <ul><li>Príklad: „Navrhni mi 5 tipov na darček."</li></ul>
      <p>🗂️ Projekt = dlhšia práca na jednej téme, veľa vstupov, viac krokov.</p>
      <ul><li>Príklad: „Priprav mi plán workshopu. Tu je publikum, cieľ, agenda, obmedzenia…"</li></ul>
      <p>🤖 Asistent = nastavené správanie (rola + pravidlá + formát), ktoré chceš používať opakovane.</p>
      <ul><li>Príklad: „Buď môj editor. Vždy: skráť, odstráň vatu, zachovaj význam, daj 2 varianty."</li></ul>

      <hr />

      <h2>✅ Rýchly filter: oplatí sa asistent?</h2>
      <p>Ak si 2× odpovieš „áno", pravdepodobne sa ti asistent oplatí:</p>
      <ul>
        <li>robím túto úlohu opakovane?</li>
        <li>chcem stabilný tón alebo rovnaký formát výstupu?</li>
        <li>nechcem zakaždým vysvetľovať pravidlá od nuly?</li>
      </ul>

      <hr />

      <h2>❗ Na čo si dať pozor</h2>
      <ul>
        <li>Ak sa ti rola mení každých pár minút (raz analytik, raz copywriter, raz právnik), skôr použi projekt alebo oddelené chaty.</li>
        <li>Ak ešte nemáš jasný use case, nezačni asistentom. Najprv si ho „objavíš" v chate/projekte.</li>
        <li>Neprežeň pravidlá: začni s 5–7 pravidlami, potom pridávaj až po testoch.</li>
      </ul>

      <MiniTest
        question={`V ktor\u00FDch 2 situ\u00E1ci\u00E1ch je najlep\u0161ie vytvori\u0165 asistenta (nie len jednorazov\u00FD chat)? Vyber 2.`}
        options={[
          { label: "🌕", text: "\u201EPotrebujem raz prelo\u017Ei\u0165 jednu vetu do angli\u010Dtiny.\u201C" },
          { label: "⭐", text: "\u201EKa\u017Ed\u00FD t\u00FD\u017Ede\u0148 p\u00ED\u0161em podobn\u00FD report a chcem rovnak\u00FA \u0161trukt\u00FAru v\u00FDstupu.\u201C" },
          { label: "☀️", text: "\u201EPriprav mi pl\u00E1n prezent\u00E1cie \u2013 tu s\u00FA podklady, publikum a cie\u013E. Urob osnovu a n\u00E1vrh slajdov.\u201C" },
          { label: "🌑", text: "\u201EOpakovane upravujem texty do rovnak\u00E9ho t\u00F3nu (stru\u010Dne, vecne, bez vaty).\u201C" },
          { label: "🌠", text: "\u201EChcem jednorazovo vymyslie\u0165 n\u00E1zov pre prezent\u00E1ciu.\u201C" },
        ]}
        correct="⭐ 🌑"
        explanation="⭐ je to opakovaná úloha a chceš konzistentný formát. 🌑 je to stabilné správanie (tón/štýl), ktoré sa oplatí nastaviť raz a používať opakovane."
      />

      <MiniTest
        question="Ktoré 2 tvrdenia najlepšie vystihujú rozdiel medzi projektom a asistentom? Vyber 2."
        options={[
          { label: "🌕", text: "\u201EProjekt je v\u017Edy krat\u0161\u00ED ne\u017E chat.\u201C" },
          { label: "⭐", text: "\u201EProjekt je dlh\u0161ia pr\u00E1ca na jednej t\u00E9me s ve\u013Ea vstupmi a krokmi.\u201C" },
          { label: "☀️", text: "\u201EAsistent je nastaven\u00E9 spr\u00E1vanie a pravidl\u00E1, ktor\u00E9 chce\u0161 pou\u017E\u00EDva\u0165 opakovane.\u201C" },
          { label: "🌑", text: "\u201EProjekt je len ulo\u017Een\u00FD chat bez pravidiel.\u201C" },
          { label: "🌠", text: "\u201EChat je vhodn\u00FD v\u017Edy, ke\u010F chce\u0161 konzistentn\u00FD t\u00F3n.\u201C" },
        ]}
        correct="⭐ ☀️"
        explanation="⭐ projekt rieši jednu tému do hĺbky a drží kontext naprieč krokmi. ☀️ asistent drží rolu/pravidlá a poskytuje stabilné správanie naprieč zadaniami."
      />
    </PageShell>
  );
}
