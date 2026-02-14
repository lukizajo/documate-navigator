import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P06() {
  const nav = getNavContext("m04-06-minimal-disclosure");
  return (
    <PageShell title="5️⃣ Minimal disclosure: povedz AI len to, čo naozaj potrebuje" {...nav}>

      <p>AI ti vie ušetriť čas, nervy aj energiu. Ale nie je dôvod jej dávať viac osobných informácií, než je nutné.</p>
      <p>M3 nie je o tom "vyrozprávať celý príbeh". Je o tom vybrať <strong>minimum, ktoré stačí</strong>, aby bol výstup kvalitný — a zároveň bezpečný.</p>

      <h3>🧩 Pravidlo „Minimum, ktoré stačí" (3 kroky)</h3>
      <p><strong>1) 🎯 Čo AI naozaj potrebuje?</strong></p>
      <p>Daj len informácie, ktoré <strong>menia rozhodnutie</strong> alebo obsah výstupu.</p>
      <p><strong>Príklad:</strong> typ služby, problém, termín, rozpočet, preferovaný tón.</p>

      <p><strong>2) 🚫 Čo je zbytočné alebo rizikové?</strong></p>
      <p>Toto do AI zvyčajne nepatrí (ak to nie je vyslovene nutné):</p>
      <ul>
        <li>celé meno, presná adresa, rodné číslo, čísla dokladov</li>
        <li>heslá, prístupy, PINy, čísla kariet</li>
        <li>citlivé zdravotné a osobné info</li>
        <li>preposielanie celých e-mailov/screenshotov bez kontroly (často tam je viac, než vidíš)</li>
      </ul>

      <p><strong>3) 🧩 Ako to nahradiť?</strong></p>
      <p>Použi tri jednoduché triky:</p>
      <ul>
        <li><strong>placeholdery:</strong> [MENO], [MESTO], [ČÍSLO_OBJEDNÁVKY]</li>
        <li><strong>rozsahy namiesto presných čísel:</strong> „cca 10–15 tisíc"</li>
        <li><strong>zovšeobecnenie miesta:</strong> „Praha 6" namiesto celej adresy</li>
      </ul>

      <h3>✍️ Ako to napísať (kopírovateľné vety)</h3>
      <ul>
        <li>„Citlivé údaje nahrádzaj placeholdermi: [MENO], [ADRESA], [ID]."</li>
        <li>„Nepíš presné čísla kariet/účtov, heslá ani čísla dokladov."</li>
        <li>„Ak je niečo dôležité, povedz to ako rozsah alebo všeobecne."</li>
        <li>„Ak potrebuješ niečo doplniť, najprv sa opýtaj 1 otázku."</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Screenshoty a kopírovanie e-mailov často obsahujú: podpis, telefón, adresu, čísla objednávok, interné odkazy.</li>
        <li>Aj "nevinné" detaily sa môžu poskladať do identifikácie (miesto + dátum + konkrétna situácia).</li>
        <li>Minimum neznamená málo: znamená <strong>presne to, čo pomáha úlohe</strong>.</li>
      </ul>

      <MiniTask title="reklamácia bez zbytočných údajov (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš napísať reklamáciu e-shopu, lebo ti prišiel poškodený tovar. Chceš, aby bola slušná, vecná a aby si zvýšil šancu na rýchle vyriešenie.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1 (príliš veľa údajov)</strong></p>
        <p>„Napíš mi reklamačný e-mail. Volám sa Ján Novák, bývam na Kvetná 12, 16000 Praha, telefón +420 777 111 222. Objednávka č. 849392, prišla 10.1.2026, platil som kartou. Produkt: slúchadlá XY, prišli poškodené. Môj e-mail je jan.novak@email.com."</p>
        <p><strong>✔️ Prompt 2 (minimal disclosure – stále dosť kontextu)</strong></p>
        <p>„Napíš slušný a vecný reklamačný e-mail pre e-shop. <strong>Kontext:</strong> prišla mi poškodená vec (slúchadlá), chcem výmenu alebo vrátenie peňazí. <strong>Čo môžeš použiť:</strong> dátum doručenia, číslo objednávky (ako placeholder), popis poškodenia. <strong>Citlivé údaje:</strong> nepíš celé meno, adresu, telefón ani e-mail — daj placeholdery. <strong>Placeholdery:</strong> [MENO], [ČÍSLO_OBJEDNÁVKY], [DÁTUM_DORUČENIA]. <strong>Formát:</strong> predmet + 8–10 viet, na konci jasná požiadavka a čo priložím (foto poškodenia)."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je e-mail z Promptu 2 rovnako použiteľný ako z Promptu 1, aj bez citlivých údajov?</p>
        <p>Neobsahuje Prompt 2 náhodou niečo citlivé (meno, adresa, telefón, e-mail)?</p>
        <p>Má výstup jasnú požiadavku (výmena/vrátenie) a čo priložím (fotky)?</p>
        <p>Je tón slušný a vecný (bez emócií, bez vyhrážania)?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 dá rovnako dobrý e-mail, ale bezpečnejšie — s placeholdermi a len relevantným kontextom.</p>
        <p>Prompt 1 síce dá použiteľný text, ale zbytočne odovzdáva citlivé údaje.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktor\u00e9 2 prompty dodr\u017eiavaj\u00fa minimal disclosure a z\u00e1rove\u0148 d\u00e1vaj\u00fa AI dos\u0165 inform\u00e1ci\u00ed na dobr\u00fd v\u00fdstup? Vyber 2."
        options={[
          { label: "\ud83c\udf15", text: `\u201eNap\u00ed\u0161 reklama\u010dn\u00fd e-mail. Tu je moja adresa, telef\u00f3n, e-mail, \u010d\u00edslo karty a \u010d\u00edslo objedn\u00e1vky\u2026\u201c` },
          { label: "\u2b50", text: `\u201eNap\u00ed\u0161 reklama\u010dn\u00fd e-mail. Pou\u017ei placeholdery [MENO], [\u010c\u00cdSLO_OBJEDN\u00c1VKY], [D\u00c1TUM]. Pop\u00ed\u0161 probl\u00e9m a uve\u010f, \u010do chcem vyrie\u0161i\u0165.\u201c` },
          { label: "\u2600\ufe0f", text: `\u201eNap\u00ed\u0161 reklama\u010dn\u00fd e-mail. Ak ti nie\u010do ch\u00fdba, vymysli si to, aby to p\u00f4sobilo d\u00f4veryhodne.\u201c` },
          { label: "\ud83c\udf11", text: `\u201eNap\u00ed\u0161 e-mail pre podporu. Nep\u00ed\u0161 osobn\u00e9 \u00fadaje, len relevantn\u00e9 fakty. Ak ch\u00fdba k\u013e\u00fa\u010dov\u00e1 inform\u00e1cia, polo\u017e 1 ot\u00e1zku.\u201c` },
        ]}
        correct="\u2b50\ud83c\udf11"
        explanation="Pou\u017e\u00edvaj\u00fa placeholdery / minimum \u00fadajov, z\u00e1rove\u0148 d\u00e1vaj\u00fa jasn\u00fd cie\u013e a pravidl\u00e1. \ud83c\udf15 je pr\u00edli\u0161 citliv\u00e9 a \u2600\ufe0f podporuje dom\u00fd\u0161\u013eanie."
      />
    </PageShell>
  );
}
