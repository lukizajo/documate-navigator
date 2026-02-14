import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P09() {
  const nav = getNavContext("m04-09-rag-light");
  return (
    <PageShell title="8️⃣ RAG-light bez technickej infraštruktúry" tldr={[
      "RAG = AI odpovedá na základe konkrétnych podkladov, nie z tréningu",
      "RAG-light = ty prinesieš zdroje priamo do kontextu",
      {`3 pravidl\u00e1: ozna\u010d zdroje, rozde\u013e na chunky, povedz \u201elen z nich\u201c`},
    ]} {...nav}>

      <p>Keď sa povie „RAG", znie to ako niečo technické. Tak si to preložme do ľudskej reči:</p>
      <p><strong>RAG (Retrieval-Augmented Generation)</strong> je spôsob, ako prinútiť AI odpovedať <strong>na základe konkrétnych podkladov</strong>, nie len podľa toho, čo má "v hlave" z tréningu.</p>
      <p>V praxi to funguje tak, že si AI najprv <strong>vyhľadá alebo vytiahne správne informácie</strong> zo zdrojov (napr. dokumenty, články, interné materiály) a až potom z nich vytvorí odpoveď.</p>
      <p>Plná RAG verzia sa často rieši technicky (napojenia, databázy, systém okolo toho). <strong>V tomto kurze to nepotrebujeme</strong> – chceme praktický výsledok hneď, bez infraštruktúry.</p>
      <p>Preto si ukážeme <strong>RAG-light</strong>: jednoduchú verziu, kde tie podklady <strong>prinesieš AI priamo ty</strong> (vložíš ich do kontextu) a nastavíš pravidlá, aby sa na ne AI odkazovala.</p>
      <p><strong>👉 RAG-light</strong> znamená: <strong>nedúfaš, že AI "niekde" nájde správne info</strong> — ty jej ho <strong>donesieš</strong> priamo do kontextu (ako podklady). A potom jej povieš, aby odpovedala <strong>len z nich</strong>.</p>

      <h3>🧩 Čo je RAG-light (ľudsky)</h3>
      <p>Je to vedomé vkladanie krátkych, relevantných zdrojov priamo do chatu, napríklad:</p>
      <ul>
        <li>výňatok z článku,</li>
        <li>krátky popis produktu,</li>
        <li>poznámky, ktoré si zhrnul sám,</li>
        <li>prehľad v bodoch.</li>
      </ul>
      <p>Aby to fungovalo, drž 3 pravidlá:</p>
      <p><strong>🏷️ Zdroje jasne označ</strong></p>
      <p>Použi jednoduché označenie, napr.: <strong>[A] [B] [C]</strong></p>
      <p><strong>🧩 Rozdeľ ich na chunky (kúsky)</strong></p>
      <p>Nemusíš dávať román. Stačí pár viet alebo odrážok ku každému zdroju.</p>
      <p><strong>📚 Povedz AI, že má odpovedať len z nich</strong></p>
      <p>A pridaj pravidlo:</p>
      <ul>
        <li>„Ak to v zdrojoch nie je, napíš <strong>nie je uvedené</strong> alebo polož 1 otázku."</li>
      </ul>
      <p>👉 Toto je prepojenie na 3️⃣ (chunking) a 4️⃣ (citácie): <strong>RAG-light = chunking + zdroje + odkazovanie.</strong></p>

      <h3>✍️ Ako to napísať (kopírovateľná „RAG-light karta")</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`„Nižšie vložím zdroje [A], [B], [C].
Použi iba tieto zdroje. Pri faktoch uveď [A]/[B]/[C].
Ak informácia v zdrojoch nie je, napíš 'nie je uvedené' (nevymýšľaj).
Zdroje budú krátke a po častiach."`}
      </div>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Keď zdroje <strong>neoznačíš</strong>, AI začne miešať, čo je z čoho.</li>
        <li>Keď zdroje nedelíš, vznikne "stena textu" a AI ľahšie niečo vynechá.</li>
        <li>Ak nepovieš „len zo zdrojov", AI si doplní veci z vlastnej hlavy.</li>
        <li>RAG-light funguje najlepšie, keď zdroje sú <strong>krátke, relevantné a aktuálne</strong>.</li>
      </ul>

      <MiniTask title="výber mobilu len z podkladov (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš si vybrať mobil do 15 000 Kč, ale nechceš sa prehrabávať 20 webmi. Máš len 2 krátke podklady (napr. dva popisy z e-shopu alebo dva odseky z recenzií).</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Potom vlož dva zdroje <strong>[A]</strong> a <strong>[B]</strong> (2–6 viet ku každému).</p>
        <p><strong>❌ Prompt 1 (bez RAG-light pravidiel)</strong></p>
        <p>„Vyber mi najlepší mobil do 15 000 Kč a vysvetli prečo."</p>
        <p><strong>✔️ Prompt 2 (RAG-light: zdroje + chunky + odkazovanie)</strong></p>
        <p>„Budeme používať len to, čo vložím nižšie ako zdroje <strong>[A]</strong> a <strong>[B]</strong>. <strong>Úloha:</strong> Vyber jeden z nich pre môj scenár: fotím v interiéri, chcem menší mobil, batéria celý deň. <strong>Pravidlá:</strong> Odpovedaj iba zo zdrojov [A] a [B]. Pri faktoch/parametroch uveď [A] alebo [B]. Ak niečo v zdrojoch nie je, napíš 'nie je uvedené' (nevymýšľaj). <strong>Formát:</strong> tabuľka (kritérium / A / B / zdroj) + na konci 2 vety odporúčania + 1 otázka na spresnenie."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Drží sa Prompt 2 iba toho, čo je v [A] a [B] (bez "dopĺňania z hlavy")?</p>
        <p>Sú pri faktoch/parametroch jasné odkazy [A]/[B], aby si vedel, odkiaľ to je?</p>
        <p>Keď niečo v zdrojoch chýba, napísala AI „nie je uvedené" alebo položila otázku?</p>
        <p>Je výstup z Promptu 2 rozhodovací (tabuľka + odporúčanie), nie len "plusy/mínusy"?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 je presnejší a overiteľný, lebo AI je "pripútaná" k zdrojom [A] a [B].</p>
        <p>Prompt 1 často odpovie "ako keby vedel", ale nevieš, čo je fakt a čo je doplnené.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktor\u00e9 2 mo\u017enosti s\u00fa najbli\u017e\u0161ie k RAG-light (zdroje v kontexte + odkazovanie + nevym\u00fd\u0161\u013eanie)? Vyber 2."
        options={[
          { label: "\ud83c\udf15", text: `\u201eOdporu\u010d mi najlep\u0161\u00ed mobil do 15 000 K\u010d. Pou\u017ei svoje znalosti a tipni si.\u201c` },
          { label: "\u2b50", text: `\u201eNi\u017e\u0161ie vlo\u017e\u00edm zdroje [A] a [B]. Pou\u017ei iba tieto zdroje a pri faktoch uve\u010f [A]/[B]. Ak nie\u010do ch\u00fdba, nap\u00ed\u0161 'nie je uveden\u00e9'.\u201c` },
          { label: "\u2600\ufe0f", text: `\u201ePo\u0161li mi odkazy na zdroje, ja si ich otvor\u00edm. Ty potom nap\u00ed\u0161 odporu\u010danie bez cit\u00e1ci\u00ed.\u201c` },
          { label: "\ud83c\udf11", text: `\u201eVlo\u017een\u00e9 zdroje rozde\u013e na kr\u00e1tke chunk-y, po ka\u017edom sprav 3-bodov\u00e9 zhrnutie, a fin\u00e1lne odpovedaj iba z nich. Ak nie\u010do nie je v zdroji, polo\u017e 1 ot\u00e1zku.\u201c` },
        ]}
        correct="\u2b50\ud83c\udf11"
        explanation={`Oba prompty pracuj\u00fa so zdrojmi priamo v kontexte, n\u00fatia odkazova\u0165 a brzdia dom\u00fd\u0161\u013eanie. \ud83c\udf15 a \u2600\ufe0f to nech\u00e1vaj\u00fa na \u201etipovanie\u201c alebo mimo kontrolu.`}
      />
    </PageShell>
  );
}
