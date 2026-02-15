import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function LKP01() {
  const nav = getNavContext("lk-01-uvod");
  return (
    <PageShell title="LAB K \u2013 AI ako syst\u00E9m \uD83E\uDDE9" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>
        Toto je posledný LAB v kurze – a jeho úloha je jednoduchá: <strong>z AI spraviť systém</strong>, nie náhodný návyk.
      </p>
      <p>Nie {"\u201E"}povedz mi odpoveď{"\u201C"}, ale:</p>
      <ul>
        <li><strong>kedy</strong> AI použiť (a kedy radšej nie),</li>
        <li><strong>v akej roli AI</strong> má pracovať,</li>
        <li>aké máš <strong>hranice</strong>,</li>
        <li>aký je tvoj <strong>default postup</strong>,</li>
        <li>a ako <strong>overíš výsledok</strong>.</li>
      </ul>
      <p>✅ Na konci budeš mať hotové 2 veci:</p>
      <ul>
        <li><strong>AI operating model (1-stranový návod na používanie AI)</strong></li>
        <li><strong>osobný checklist</strong> (rýchla kontrola pred použitím AI)</li>
      </ul>
      <p>
        👉 Scenárová linka: vyberieš si <strong>1 reálnu úlohu</strong> (pracovnú alebo osobnú) a na nej si systém krok za krokom otestuješ.
      </p>
      <p>
        V tomto LABe pôjdeme postupne: <strong>inventúra → režim → rola → hranice → workflow → kontrola → (až potom) automatizácia</strong>.
      </p>

      <hr />

      <h2>🧭 Prehľad LABu</h2>
      <p>Počas LABu si poskladáš vlastný „návod na používanie AI", aby bol:</p>
      <ul>
        <li><strong>opakovateľný</strong> (máš default postup, ktorý vieš zopakovať),</li>
        <li><strong>bezpečný</strong> (máš STOP hranice a kontrolu),</li>
        <li><strong>praktický</strong> (zostane ti 1 strana + checklist).</li>
      </ul>
      <p>V každej lekcii spravíš <strong>1 mini-výstup</strong>, ktorý sa na konci poskladá do tvojho operating modelu.</p>
      <p><strong>Výsledok:</strong> 1-stranový operating model + osobný checklist.</p>

      <hr />

      <h2>🎯 Čo budeš vedieť po tomto LABe?</h2>
      <p>Po absolvovaní LAB K budeš vedieť:</p>
      <ul>
        <li>spraviť <strong>inventúru</strong> svojho používania AI (kde pomáha / kde škodí),</li>
        <li>rýchlo určiť správny <strong>režim + rolu</strong> pre konkrétnu úlohu,</li>
        <li>prepínať medzi režimami <strong>Think / Create / Operate</strong>,</li>
        <li>zvoliť správnu <strong>rolu AI</strong> (sparring / editor / operátor / kontrolór),</li>
        <li>nastaviť <strong>hranice a zodpovednosť</strong>,</li>
        <li>používať <strong>default workflow</strong> od myšlienky po výsledok,</li>
        <li>rozoznať <strong>systém vs automatizácia</strong> (kedy automatizovať a kedy nie),</li>
        <li>poskladať finálny výstup: <strong>AI operating model na 1 stranu + osobný checklist</strong>.</li>
      </ul>
    </PageShell>
  );
}
