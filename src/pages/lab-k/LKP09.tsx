import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { PromptBlock } from "@/components/ContentBlocks";

export default function LKP09() {
  const nav = getNavContext("lk-09-operating-model");
  return (
    <PageShell title="8\u20E3\uFE0F Fin\u00E1lny v\u00FDstup: M\u00F4j AI operating model" prev={nav.prev} next={nav.next}>
      <p>Toto je výsledok LABu. Krátky. Použiteľný. Opakovateľný.</p>

      <h3>🧩 1-stranové plátno</h3>
      <p>Sekcie píš ako <strong>H3 nadpisy</strong> a pod nimi max <strong>3–5 riadkov</strong>.</p>
      <ul>
        <li>Moje top 3 použitia AI</li>
        <li>3 režimy (Think/Create/Operate) – kedy ktorý</li>
        <li>Moje top roly AI + pravidlo {"\u201E"}1 rola = 1 kontext{"\u201C"}</li>
        <li>Hranice (Nikdy / S kontrolou / Bez obáv)</li>
        <li>Default workflow (5 krokov)</li>
        <li>Kontrola kvality (moje 3 otázky z K5)</li>
        <li>Automatizácia: 1 kandidát + 1 vec, ktorú nie</li>
      </ul>

      <hr />

      <h3>✅ Osobný checklist</h3>
      <ul>
        <li>Mám zvolený režim (Think / Create / Operate)?</li>
        <li>Mám 1 rolu AI (a držím ju)?</li>
        <li>Sú hranice jasné (čo som AI nedal)?</li>
        <li>Je zámer a formát výstupu jasný?</li>
        <li>Prešiel som kontrolu kvality (moje 3 otázky)?</li>
        <li>Je výsledok zrozumiteľný pre človeka bez vysvetľovania?</li>
      </ul>

      <hr />

      <PromptBlock>
        {"\u201E"}Zober moje výstupy z LABu a poskladaj mi AI operating model na 1 stranu.{"\u201C"}
        <br />Použi moje artefakty: <strong>K1–K7</strong> (inventúra, režimy, roly, hranice, workflow, automatizácia, únava).
        <br />Použi presne túto štruktúru (sekcie a nadpisy zachovaj) a píš jednoducho, prakticky, bez hype. Krátke vety. Na začiatok pridaj 1 vetu: prečo používam AI a čo je môj cieľ.
        <br /><br />
        <ul>
          <li>Top 3 použitia AI</li>
          <li>Režimy Think/Create/Operate (kedy ktorý)</li>
          <li>Moje roly AI + pravidlo</li>
          <li>Hranice (Nikdy/S kontrolou/Bez obáv)</li>
          <li>Default workflow (5 krokov)</li>
          <li>Kontrola kvality (moje 3 otázky)</li>
          <li>Automatizácia (1 kandidát + 1 nie)</li>
        </ul>
        <br />
        Každú sekciu napíš stručne (max 3–5 riadkov).
      </PromptBlock>
    </PageShell>
  );
}
