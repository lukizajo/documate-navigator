import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P05() {
  const nav = getNavContext("m04-05-citacie");
  return (
    <PageShell title="4️⃣ Citácie a odkazy" tldr={[
      "Bez pravidiel zdrojov AI dopĺňa z vlastnej hlavy – nevieš overiť",
      {"3 pravidl\u00e1: povo\u013e zdroje, p\u00fdtaj d\u00e1tumy, dovo\u013e \u201eneviem\u201c"},
      "Citácie = koľajnice pre AI, nie len pre teba",
    ]} {...nav}>

      <p>AI vie znieť veľmi presvedčivo. Problém je, že keď nemá jasné pravidlo, <strong>z čoho má vychádzať</strong>, automaticky si pomôže „všeobecnými znalosťami" zo svojho tréningu. A tam sa ľahko objavia nepresnosti, staré info alebo tvrdenia, ktoré nevieš overiť.</p>
      <p>Citácie a odkazy nie sú len pre teba. Sú to aj <strong>koľajnice pre AI</strong>, aby ostala „pri zemi".</p>

      <h3>🧩 Ako pracovať so zdrojmi (3 jednoduché pravidlá)</h3>
      <p><strong>1) Povoľ zdroje (z čoho smie AI čerpať)</strong></p>
      <p>Keď chceš overiteľný výstup, povedz AI, <strong>kde je pravda</strong>:</p>
      <ul>
        <li>„Použi iba zdroje, ktoré ti sem vložím."</li>
        <li>„Použi iba tieto 2 odkazy."</li>
        <li>„Nepoužívaj vlastné všeobecné znalosti."</li>
      </ul>
      <p><strong>2) Pýtaj dátumy (kedy to platí)</strong></p>
      <p>Najmä pri veciach, ktoré sa menia (ceny, pravidlá, funkcie, porovnania), nech ti AI dá:</p>
      <ul>
        <li>dátum z článku,</li>
        <li>alebo aspoň rok/mesiac, ak tam je.</li>
      </ul>
      <p><strong>3) Dovoľ odpoveď „neviem"</strong></p>
      <p>Toto je najväčšia brzda proti domýšľaniu:</p>
      <ul>
        <li>„Ak to zdroj neobsahuje, napíš 'nie je uvedené' alebo 'neviem'."</li>
        <li>„Nevymýšľaj."</li>
      </ul>

      <h3>💡 Ako to napísať (kopírovateľný mini-prompt)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`„Použi iba zdroje A a B, ktoré vložím nižšie.
Pri faktoch/parametroch uveď citáciu [A] alebo [B].
Ak sa niečo v zdrojoch nenachádza, napíš 'nie je uvedené' (nevymýšľaj).
Ak je v zdroji dátum/rok, uveď ho pri dôležitých tvrdeniach (ak je dostupný)."`}
      </div>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li><strong>Odkaz neznamená automaticky pravdu</strong> – zdroj môže byť slabý alebo starý.</li>
        <li>Keď neexistuje <strong>pravidlo „neviem"</strong>, AI bude mať tendenciu dopĺňať medzery.</li>
        <li>Najhoršie je miešanie: polovica odpovede zo zdroja, polovica „z hlavy" – potom nevieš, čo je čo.</li>
      </ul>

      <MiniTask title="odpoveď len zo zdrojov (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš si vybrať mobil do 15 000 Kč, ale nechceš sa prehrabávať desiatkami stránok.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Potom vlož dva krátke zdroje [A] a [B] (stačia 2–6 viet ku každému).</p>
        <p><strong>❌ Prompt 1 (bez pravidiel zdrojov)</strong></p>
        <p>„Odporuč mi mobil do 15 000 Kč a vysvetli prečo."</p>
        <p><strong>✔️ Prompt 2 (zdroje + citácie + „neviem")</strong></p>
        <p>„Budeme pracovať len s tým, čo ti vložím. Nižšie pošlem dva zdroje: <strong>[A]</strong> a <strong>[B]</strong>. <strong>Úloha:</strong> Porovnaj [A] vs [B] a navrhni 1 finálny výber. <strong>Pravidlá:</strong> Použi iba informácie zo zdrojov [A] a [B]. Pri faktoch/parametroch uveď citáciu [A] alebo [B]. Ak zdroje niečo neobsahujú, napíš 'nie je uvedené' (nevymýšľaj). Ak je v zdroji dátum/rok, uveď ho pri dôležitých tvrdeniach (ak je dostupný). <strong>Formát:</strong> tabuľka (kritérium / A / B / zdroj) + na konci 3 vety odporúčania. <strong>Kritériá (použi aspoň tieto 4):</strong> foto v horšom svetle, batéria, veľkosť do ruky, plynulosť/čip, cena."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Má výstup pri faktoch/parametroch jasne označené <strong>[A] alebo [B]</strong>?</p>
        <p>Objavilo sa v odpovedi niečo, čo nie je v zdrojoch (AI si to domyslela)?</p>
        <p>Keď informácia v zdroji chýbala, napísala AI <strong>„nie je uvedené"</strong>, alebo tipovala?</p>
        <p>Pomohla ti tabuľka rozhodnúť rýchlejšie než bežné "plusy/mínusy" bez citácií?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 dá porovnanie, ktoré sa dá overiť, lebo každé tvrdenie má zdroj alebo prizná „nie je uvedené".</p>
        <p>Prompt 1 často prinesie pekné odporúčania, ale nevieš, čo je fakt a čo je domyslené.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktor\u00e9 2 prompty najlep\u0161ie zni\u017euj\u00fa riziko dom\u00fd\u0161\u013eania a robia v\u00fdstup overite\u013en\u00fd? Vyber 2."
        options={[
          { label: "\ud83c\udf15", text: `\u201eZhr\u0148 mi tieto dva texty a povedz, ktor\u00fd je lep\u0161\u00ed.\u201c` },
          { label: "\u2b50", text: `\u201ePou\u017ei iba text, ktor\u00fd vlo\u017e\u00edm. Pri faktoch/parametroch uve\u010f [A] alebo [B]. Ak nie\u010do v texte nie je, nap\u00ed\u0161 'nie je uveden\u00e9'.\u201c` },
          { label: "\u2600\ufe0f", text: `\u201eOdporu\u010d mi rie\u0161enie a ak treba, dopl\u0148 si ch\u00fdbaj\u00face inform\u00e1cie z internetu.\u201c` },
          { label: "\ud83c\udf11", text: `\u201ePou\u017ei iba zdroje, ktor\u00e9 vlo\u017e\u00edm. Pri d\u00f4le\u017eit\u00fdch tvrdeniach uve\u010f d\u00e1tum/rok (ak je dostupn\u00fd). Ak si nie si ist\u00fd, povedz 'neviem' alebo polo\u017e 1 ot\u00e1zku.\u201c` },
        ]}
        correct="\u2b50\ud83c\udf11"
        explanation="Obidve mo\u017enosti jasne obmedzuj\u00fa zdroje a prikazuj\u00fa cit\u00e1cie / priznanie nevedomosti. \ud83c\udf15 je v\u00e1gne a \u2600\ufe0f otv\u00e1ra dvere dom\u00fd\u0161\u013eaniu."
      />
    </PageShell>
  );
}
