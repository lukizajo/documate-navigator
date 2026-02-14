import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P08() {
  const nav = getNavContext("m04-08-mini-pamat");
  return (
    <PageShell title="7️⃣ Mini-pamäť a priebežné zhrnutia" tldr={[
      "AI nemá pamäť – pracuje len s tým, čo má v kontexte",
      "Mini-pamäť = 3–5 bodov po každom väčšom kroku",
      "Checkpoint a zámok rozhodnutí držia smer pri zmenách",
    ]} {...nav}>

      <p>AI nemá pamäť ako človek. Neuchováva si "spomienky" – pracuje len s tým, čo má práve na stole v kontexte.</p>
      <p>Pri dlhšej konverzácii sa preto môže stať, že staršie dôležité veci postupne „vypadnú" a AI začne odpovedať inak, než si čakal.</p>
      <p>Riešenie je jednoduché: <strong>mini-pamäť</strong> – krátke priebežné zhrnutia, vďaka ktorým AI pripomínaš, čo je dôležité.</p>

      <h3>🧩 3 techniky, ktoré držia smer</h3>

      <h3>🧠 Mini-pamäť (3–5 bodov)</h3>
      <p>Po každom väčšom kroku si nechaj spraviť krátky výcuc:</p>
      <ul>
        <li>čo je cieľ,</li>
        <li>aké sú priority,</li>
        <li>čo je rozhodnuté,</li>
        <li>aké pravidlá platia.</li>
      </ul>
      <p><strong>Prečo to funguje:</strong> namiesto celej histórie pracujete s pár bodmi, ktoré sú "jadro".</p>

      <h3>✅ Checkpoint (1 veta)</h3>
      <p>Keď máš pocit, že sa to rozlieva, sprav checkpoint jednou vetou:</p>
      <p><strong>Mikropríklad:</strong></p>
      <p>„Checkpoint: Cieľ je vybrať mobil do 15 000 Kč, priority sú fotky v interiéri a batéria, deal-breaker je sekanie po roku."</p>

      <h3>🔒 Zámok rozhodnutí (keď sa dohodnete)</h3>
      <p>Keď sa na niečom zhodnete, "zamkni" to – aby sa AI k tomu už nevracala ako k otvorenej otázke.</p>
      <p><strong>Mikropríklad:</strong></p>
      <p>„Finálne rozhodnutie: berieme variant B. Ďalej už porovnávaj len príslušenstvo a riziká."</p>
      <p>„Zamknuté: rozpočet a bez auta sa už nemení."</p>

      <h3>👉 Ako to napísať (kopírovateľné vety)</h3>
      <ul>
        <li>„Zhrň doteraz do <strong>Mini-pamäti (max 5 bodov)</strong>. Použijeme ju ďalej."</li>
        <li>„Aktualizuj Mini-pamäť: <strong>pridaj nové</strong>, <strong>vyhoď neplatné</strong>."</li>
        <li>„Checkpoint: zopakuj cieľ + priority + 1 pravidlo v 1 vete."</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Mini-pamäť nemá byť román. <strong>3–5 bodov stačí</strong>.</li>
        <li>Keď sa niečo zmení (rozpočet, priority), <strong>mini-pamäť aktualizuj</strong> – inak bude AI držať staré rozhodnutia.</li>
        <li>Nech je jasné, čo je "pravda teraz" (aktuálne), a čo sú stabilné pravidlá.</li>
      </ul>

      <MiniTask title="plán, ktorý sa mení (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Plánuješ víkendový výlet. Najprv chceš aktívny plán. Potom zistíš, že má pršať a chcete to viac v pohode.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1 (bez mini-pamäte)</strong></p>
        <p>„Naplánuj mi víkendový výlet z Prahy bez auta. Skôr príroda než mesto, rozpočet do 3000 Kč na osobu. Potom zmena: má pršať a chceme to pohodovejšie. Uprav plán."</p>
        <p><strong>✔️ Prompt 2 (s mini-pamäťou)</strong></p>
        <p>„Naplánuj mi víkendový výlet z Prahy bez auta. Skôr príroda než mesto, rozpočet do 3000 Kč na osobu. Formát: deň 1 / deň 2 (ráno, obed, poobede, večer). <strong>Po pláne sprav Mini-pamäť (max 5 bodov):</strong> cieľ, priority, obmedzenia, čo je rozhodnuté. Potom príde zmena: má pršať a chceme to pohodovejšie. <strong>Najprv aktualizuj Mini-pamäť</strong> (čo sa mení, čo platí), a až potom uprav plán. Na konci ešte raz vypíš Mini-pamäť (max 5 bodov)."</p>
        <p><strong>Mini-pamäť (príklad):</strong></p>
        <ul>
          <li>Cieľ: víkendový výlet z Prahy bez auta</li>
          <li>Priority: príroda {'>'} mesto, pohodový rytmus</li>
          <li>Obmedzenia: rozpočet do 3000 Kč/os., bez auta</li>
          <li>Riziká: dážď, preplnené miesta</li>
          <li>Rozhodnuté: 2-dňový plán v blokoch ráno/obed/poobede/večer</li>
        </ul>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Po zmene (dážď, pohodovejšie) drží Prompt 2 stále pôvodné dôležité obmedzenia (bez auta, rozpočet)?</p>
        <p>Je pri Prompte 2 jasné, čo sa zmenilo a čo ostáva rovnaké (cez Mini-pamäť)?</p>
        <p>Uletel Prompt 1 pri úprave plánu (zabudol na rozpočet, bez auta, prírodu)?</p>
        <p>Je výstup z Promptu 2 konzistentnejší a ľahšie použiteľný?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 drží smer, lebo Mini-pamäť funguje ako malá kotva: AI sa opiera o to, čo je dôležité.</p>
        <p>Prompt 1 sa pri zmene často "rozleje" a niečo zabudne.</p>
      </ExpectedFinding>

      <MiniTest
        question="Ktor\u00e9 2 prompty najlep\u0161ie pou\u017e\u00edvaj\u00fa mini-pam\u00e4\u0165 tak, aby AI dr\u017eala smer aj pri zmen\u00e1ch? Vyber 2."
        options={[
          { label: "\ud83c\udf15", text: `\u201eUrob mi pl\u00e1n a potom ho uprav, ke\u010f ti poviem zmenu.\u201c` },
          { label: "\u2b50", text: `\u201ePo ka\u017edom kroku sprav Mini-pam\u00e4\u0165 (max 5 bodov). Ke\u010f pr\u00edde zmena, najprv aktualizuj Mini-pam\u00e4\u0165 a a\u017e potom pokra\u010duj.\u201c` },
          { label: "\u2600\ufe0f", text: `\u201ePo ka\u017edej zmene zopakuj cel\u00fd p\u00f4vodn\u00fd prompt a pridaj nov\u00e9 info, aby sa ni\u010d nestratilo.\u201c` },
          { label: "\ud83c\udf11", text: `\u201eNa za\u010diatku definuj cie\u013e a pravidl\u00e1. Potom po zmene sprav checkpoint v 1 vete (cie\u013e + priority) a uprav v\u00fdstup.\u201c` },
        ]}
        correct="\u2b50\ud83c\udf11"
        explanation={`\u2b50 aj \ud83c\udf11 robia kr\u00e1tke, pou\u017eite\u013en\u00e9 kotvy (mini-pam\u00e4\u0165/checkpoint). \ud83c\udf15 je pr\u00edli\u0161 v\u00e1gne a \u2600\ufe0f zbyto\u010dne nafukuje kontext a mie\u0161a star\u00e9 s nov\u00fdm.`}
      />
    </PageShell>
  );
}
