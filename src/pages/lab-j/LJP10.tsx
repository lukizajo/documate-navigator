import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function LJP10() {
  const nav = getNavContext("lj-10-zhrnutie");
  return (
    <PageShell title="\uD83E\uDDFE Zhrnutie LABu" prev={nav.prev} next={nav.next}>
      <p>
        Najprv si ujasni, že <strong>AI nie je rozhodovač</strong> — je to analytický parťák.
      </p>
      <p>
        Dobré rozhodnutie začína framingom: cieľ, kritériá, obmedzenia, riziká.
      </p>
      <p>
        Namiesto verdiktu si pýtaj <strong>3 varianty</strong> a porovnaj ich rovnakými kritériami (trade-offs) — a pozri sa aj na <strong>reverzibilitu</strong> (čo vieš najľahšie zvrátiť, ak to nefunguje).
      </p>
      <p>
        Potom sprav {"\u201E"}stress test{"\u201C"}: riziká, predpoklady, čo AI nevie.
      </p>
      <p>
        Pri high-risk sprav mini-kontrolu reality: vyber 2 kritické tvrdenia a over ich.
      </p>
      <p>
        Etiku rieš prakticky: headline test + dopad na ľudí.
      </p>
      <p>
        A keď ide o <strong>Dáta / Ľudí / Právo & bezpečnosť</strong>, platí <strong>hard-stop</strong> a ďalšia ľudská kontrola.
      </p>
      <p>
        Na konci prebehni <strong>checklist pred rozhodnutím</strong> a rozhodnutie napíš tak, aby si ho vedel obhájiť.
      </p>
    </PageShell>
  );
}
