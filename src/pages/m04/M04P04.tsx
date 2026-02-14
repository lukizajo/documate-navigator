import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P04() {
  const nav = getNavContext("m04-04-chunking");
  return (
    <PageShell title="3️⃣ Kontextové okno & chunking: keď je toho veľa naraz" {...nav}>

      <p>Predstav si, že AI má pred sebou stôl. Na ten stôl sa zmestí len určitý počet papierov naraz.</p>
      <p>Keď jej dáš príliš veľa textu, stane sa jedna z týchto vecí: niečo prehliadne, pomieša, alebo si začne dopĺňať medzery.</p>
      <p>Chunking znamená: <strong>nedávať všetko naraz</strong>, ale rozdeliť to na menšie kúsky tak, aby AI vždy vedela, <em>čo má z toho zobrať</em>.</p>

      <h3>🧩 Ako na to: 3 jednoduché pravidlá</h3>
      <p>Toto sú tri veci, ktoré fungujú takmer vždy — aj keď nie si „technik".</p>

      <h3>🧩 1) Najprv povedz cieľ, až potom dávaj text</h3>
      <p>Namiesto „tu to máš, spracuj" povedz:</p>
      <ul>
        <li>čo chceš dostať na konci,</li>
        <li>a čo je pri tom dôležité.</li>
      </ul>
      <p><strong>Mikropríklad:</strong></p>
      <p>„Chcem z toho spraviť plán na 2 dni. Zaujíma ma doprava, ceny a čo robiť v daždi."</p>

      <h3>🧩 2) Jeden chunk = jedna úloha</h3>
      <p>Každý kus textu by mal mať jasný zmysel. Najlepšie to funguje takto:</p>
      <ul>
        <li>„Toto je <strong>časť 1/3</strong>…"</li>
        <li>„Úloha: zhrň to do 3–5 bodov…"</li>
      </ul>
      <p><strong>Mikropríklad:</strong></p>
      <p>„Toto je časť 1/3. Zhrň len dopravu a vzdialenosti."</p>

      <h3>🧩 3) Po každom chunke sprav mini-zhrnutie (tvoja mini pamäť)</h3>
      <p>Po každom kúsku si nechaj spraviť krátke zhrnutie. Potom už AI nemusí držať v hlave celý dlhý text — pracuje s "výcucmi".</p>
      <p><strong>Mikropríklad:</strong></p>
      <p>„Zhrň do 5 bodov, ktoré budeme používať ďalej."</p>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Keď pošleš veľký text bez cieľa („tu to máš"), AI nevie, čo je dôležité.</li>
        <li>Keď sa pýtaš 5 vecí naraz, AI často všetko spraví „napoly".</li>
        <li>Keď nerobíš mini-zhrnutia, ľahko sa stratíš ty aj AI.</li>
        <li>Nechop chunking ako "sekám po 500 slovách". Skôr: <strong>delím podľa tém</strong>.</li>
      </ul>

      <MiniTask title={`\u201edump\u201c vs \u201echunking + mini pam\u00e4\u0165\u201c (A/B)`}>
        <p><strong>Situácia</strong></p>
        <p>Našiel si dlhší text o víkendovom výlete (alebo dovolenke) a chceš z toho spraviť jednoduchý plán.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1 (dump – všetko naraz)</strong></p>
        <p>„Tu je text o výlete, sprav mi z toho plán na 2 dni a napíš, čo sa oplatí vidieť a kde sa najesť: [sem vlož svoj dlhý text]"</p>
        <p><strong>✔️ Prompt 2 (chunking – cieľ → kúsky → mini pamäť → finále)</strong></p>
        <p>„Cieľ: sprav mi plán na 2 dni, aby bol realistický a ľahko použiteľný. Zaujíma ma: doprava, orientačný rozpočet, čo robiť v daždi. Budeme pracovať po častiach. Po každej časti urob 3–5 bodov 'čo je dôležité' a pomenuj to ako 'Mini pamäť'.</p>
        <p><strong>ČASŤ 1/3:</strong> [sem vlož prvú časť textu] Úloha: zhrň do 'Mini pamäť 1' (3–5 bodov).</p>
        <p><strong>ČASŤ 2/3:</strong> [sem vlož druhú časť textu] Úloha: zhrň do 'Mini pamäť 2' (3–5 bodov).</p>
        <p><strong>ČASŤ 3/3:</strong> [sem vlož tretiu časť textu] Úloha: zhrň do 'Mini pamäť 3' (3–5 bodov).</p>
        <p>A teraz: Použi iba Mini pamäť 1–3 a urob finálny plán na 2 dni. Formát: deň 1 / deň 2 (ráno, obed, poobede, večer) + tip pri daždi."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je výsledný plán <strong>prehľadný</strong> (deň 1 / deň 2 + ráno/obed/poobede/večer)?</p>
        <p>Sú v pláne <strong>zahrnuté všetky 3 veci</strong>, ktoré som chcel (doprava, rozpočet, tip pri daždi)?</p>
        <p>Vynechalo AI niečo dôležité, čo bolo v texte, alebo to <strong>pomiešalo</strong>?</p>
        <p>Je finálny plán postavený na "Mini pamäti", alebo AI zjavne <strong>improvizuje</strong>?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 bude presnejší a prehľadnejší, lebo AI ide po kúskoch a pracuje s "mini pamäťou".</p>
        <p>Prompt 1 často spraví plán, ale ľahko niečo vynechá alebo pomieša, lebo je toho veľa naraz.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00e9 2 mo\u017enosti pou\u017e\u00edvaj\u00fa chunking spr\u00e1vne (cie\u013e \u2192 \u010das\u0165 \u2192 mini-zhrnutie \u2192 pokra\u010duj)? Vyber 2.`}
        options={[
          { label: "🌕", text: `\u201eTu je dlh\u00fd text. Sprav mi z toho zhrnutie a pl\u00e1n. [dlh\u00fd text]\u201c` },
          { label: "⭐", text: `\u201eCie\u013e: sprav mi pl\u00e1n na 2 dni. Tu je \u010das\u0165 1/3: [text]. Zhr\u0148 do 5 bodov. Potom po\u010dkaj na \u010das\u0165 2/3.\u201c` },
          { label: "☀️", text: `\u201eTu je \u010das\u0165 1/3: [text]. Zhr\u0148 to. Tu je \u010das\u0165 2/3: [text]. Zhr\u0148 to. Tu je \u010das\u0165 3/3: [text]. Zhr\u0148 to.\u201c` },
          { label: "🌑", text: `\u201eCie\u013e: sprav mi pl\u00e1n na 2 dni. Tu je cel\u00fd text: [dlh\u00fd text]. Sprav z toho pl\u00e1n.\u201c` },
        ]}
        correct="⭐☀️"
        explanation={`⭐ m\u00e1 cie\u013e, jasn\u00fd chunk a mini-zhrnutie + postup krok za krokom. ☀️ spr\u00e1vne pou\u017e\u00edva delenie na \u010dasti a zhrnutia. \ud83c\udf15 a \ud83c\udf11 s\u00fa \u201ev\u0161etko naraz\u201c.`}
      />
    </PageShell>
  );
}
