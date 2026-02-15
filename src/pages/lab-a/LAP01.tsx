import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-01-uvod");

export default function LAP01() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>V moduloch sme si postavili pevný základ: čo AI je, kde sú jej limity a prečo vie pôsobiť presvedčivo aj vtedy, keď nemá pravdu.</p>
      <p>Tento LAB je prechod do praktickej dráhy – tu už nejde len o to, čo AI „dokáže", ale hlavne <strong>ako s ňou rozmýšľaš</strong>.</p>
      <p>Najväčší rozdiel medzi priemerným a výborným výsledkom nebýva v tom, aký nástroj používaš. Býva v tom, <strong>aké otázky kladieš</strong>, či vieš problém rozložiť a či si vypýtaš varianty, riziká a slabé miesta – nie len jednu peknú odpoveď.</p>
      <p>👉 Cieľom LABu nie je naučiť ťa „magický prompt". Cieľom je vytvoriť mentálny model, vďaka ktorému bude AI pre teba <strong>partner na myslenie</strong> – a nie autopilot.</p>
      <p>A platí tu rovnaké pravidlo ako v celom kurze: <strong>AI asistuje, človek rozhoduje.</strong> ✅</p>

      <hr />

      <h3>🧭 Prehľad LABu</h3>
      <p>V tomto LABe si ukážeme, ako prepnúť komunikáciu s AI z režimu „daj mi odpoveď" do režimu „pomôž mi premýšľať". Pôjdeme prakticky a jednoducho:</p>
      <ul>
        <li>ako si nastaviť správne očakávania (AI ako zrkadlo, nie autorita),</li>
        <li>prečo sú otázky dôležitejšie než odpovede a ako ich vylepšiť,</li>
        <li>ako rozložiť problém skôr, než si vypýtaš riešenie,</li>
        <li>ako si pýtať varianty, perspektívy a „kritika", aby si znížil riziko omylu,</li>
        <li>kedy je to bezpečné a kedy už treba pribrzdiť (zodpovednosť, riziko).</li>
      </ul>

      <hr />

      <h3>🎯 Čo sa v tomto LABe naučíš?</h3>
      <p>Po absolvovaní LAB A budeš vedieť:</p>
      <ul>
        <li>prepnúť AI z „generátora odpovedí" na <strong>sparring partnera</strong> pri premýšľaní,</li>
        <li>formulovať otázky tak, aby si dostal možnosti, riziká a jasné kroky,</li>
        <li>rozložiť nejasnú úlohu na časti a získať kontrolu nad výsledkom,</li>
        <li>používať jednoduchý „mysliaci checklist", ktorý znižuje halucinácie a zvyšuje kvalitu výstupu.</li>
      </ul>
    </PageShell>
  );
}
