import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lc-01-uvod");

export default function LCP01() {
  return (
    <PageShell title="🅾️ Úvod" prev={nav.prev} next={nav.next}>
      <p>V moduloch sme si vysvetlili, ako AI funguje, prečo vie pôsobiť presvedčivo aj vtedy, keď nemá pravdu, a prečo na zadaní záleží viac než na „magickom nástroji".</p>
      <p>Tento LAB je praktická dráha zameraná na jednu konkrétnu zručnosť: <strong>vytvoriť AI asistenta tak, aby bol stabilný, konzistentný a použiteľný opakovane</strong> (v ChatGPT, Gemini, Claude aj inde).</p>
      <p>V praxi býva rozdiel medzi priemerným a výborným asistentom v troch veciach:</p>
      <ul>
        <li>či má jasne nastavenú <strong>rolu a pravidlá</strong> (nie len „buď užitočný"),</li>
        <li>či vieš z AI spraviť <strong>proces</strong> (špecifikácia → test → úprava), nie jednorazový chat,</li>
        <li>či máš <strong>kontrolu kvality a hranice</strong> (neistota, citlivé údaje, odmietnutie).</li>
      </ul>
      <p>👉 Cieľom LABu nie je, aby AI rozhodovala za teba. Cieľom je, aby si ty vedel rýchlo nastaviť asistenta do použiteľnej podoby – v práci aj v osobnom živote. A platí tu rovnaké pravidlo ako v celom kurze: <strong>AI asistuje, človek rozhoduje.</strong> ✅</p>

      <hr />

      <h2>🧭 Prehľad LABu</h2>
      <p>V tomto LABe si ukážeme jednoduchý postup, ako prepnúť AI z režimu „odpovedaj" do režimu „správaj sa stabilne":</p>
      <ul>
        <li>kedy použiť asistenta a kedy nie,</li>
        <li>špecifikácia asistenta (rola, pravidlá, formát),</li>
        <li>iterácia z praxe (extrakcia pravidiel a upratanie),</li>
        <li>testovanie a debugging,</li>
        <li>hranice, bezpečnosť a práca s neistotou,</li>
        <li>finálny mini-projekt: tvoj vlastný asistent.</li>
      </ul>

      <hr />

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <p>Po absolvovaní tohto LABu budeš vedieť:</p>
      <ul>
        <li>rozoznať, kedy je lepší jednorazový chat a kedy sa oplatí asistent,</li>
        <li>spísať stručný Assistant Spec tak, aby bol prenositeľný medzi nástrojmi,</li>
        <li>vytiahnuť pravidlá z praxe a upratať ich do stabilnej verzie,</li>
        <li>postaviť testovaciu sadu (bežné + hraničné + pokus o zneužitie),</li>
        <li>nastaviť hranice a označovať neistotu tak, aby si znížil riziko halucinácií.</li>
      </ul>
    </PageShell>
  );
}
