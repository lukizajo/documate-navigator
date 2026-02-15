import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function LJP01() {
  const nav = getNavContext("lj-01-uvod");
  return (
    <PageShell title="LAB J \u2013 Rozhodovanie s AI \uD83E\uDDE0" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>
        Tento LAB je praktická dráha, kde si AI vyskúšaš ako <strong>pomoc pri rozhodovaní</strong> — nie ako {"\u201E"}rozhodovača{"\u201C"}.
      </p>
      <p>
        Cieľ nie je, aby ti AI povedala verdikt. Cieľ je, aby ti pomohla <strong>rozložiť problém, vymyslieť varianty, odhaliť riziká a donútiť ťa myslieť jasnejšie</strong>.
      </p>
      <p>Veľa ľudí spraví pri rozhodovaní s AI jednu z týchto chýb:</p>
      <ul>
        <li>spýta sa na {"\u201E"}najlepšie riešenie{"\u201C"} bez kontextu,</li>
        <li>zoberie prvú odpoveď ako pravdu,</li>
        <li>nevie porovnať alternatívy (má len {"\u201E"}pocit{"\u201C"}),</li>
        <li>zabudne na riziká, dopady na ľudí a reputáciu,</li>
        <li>alebo použije AI aj tam, kde by mal byť <strong>STOP</strong> (citlivé dáta, právo, HR, bezpečnosť).</li>
      </ul>
      <p>
        V tomto LABe pôjdeme opačne: <strong>rámec → varianty → riziká → kontrola → rozhodnutie</strong>.
      </p>
      <p>A rovnako ako v celom kurze: <strong>AI asistuje, človek rozhoduje. ✅</strong></p>

      <hr />

      <h2>🧭 Prehľad LABu</h2>
      <p>
        V tomto LABe si ukážeme jednoduchý postup, ako prepnúť AI z režimu {"\u201E"}povedz mi čo mám spraviť{"\u201C"} do režimu {"\u201E"}pomôž mi spraviť dobré rozhodnutie{"\u201C"}:
      </p>
      <ul>
        <li><strong>Human-in-the-loop</strong> (AI radí, človek schvaľuje),</li>
        <li><strong>framing</strong> (správne pomenovanie problému),</li>
        <li><strong>varianty</strong> (A/B/C namiesto verdiktu),</li>
        <li><strong>riziká a slepé miesta</strong> (bias, halucinácie, falošná istota),</li>
        <li><strong>mini-kontrola reality</strong> (overovanie pri high-risk),</li>
        <li><strong>etický radar v praxi</strong> (len aplikácia, nie teória),</li>
        <li><strong>hard-stop pravidlá</strong> (kedy AI nepoužiť / eskalovať),</li>
        <li><strong>checklist pred rozhodnutím</strong> (finálny filter).</li>
      </ul>
      <p>
        👉 <strong>Scenárová linka:</strong> v mini-úlohách si vyberieš 1 scenár (pracovný alebo osobný) a budeš ho postupne vylepšovať. Nič neodovzdávaš — dôležité je, aby ti zostali výstupy v chate.
      </p>

      <hr />

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <p>Po absolvovaní LAB J budeš vedieť:</p>
      <ul>
        <li>rozlíšiť, kedy sa AI hodí na rozhodovanie a kedy je riziko,</li>
        <li>zarámovať problém (cieľ, kritériá, obmedzenia, riziká),</li>
        <li>vygenerovať <strong>3 alternatívy</strong> a porovnať ich rovnakými kritériami,</li>
        <li>odhaliť {"\u201E"}presvedčivo zlé{"\u201C"} odpovede a pýtať si slabiny,</li>
        <li>spraviť mini-overenie pri citlivých rozhodnutiach,</li>
        <li>používať <strong>STOP pravidlá</strong> (dáta, právo, HR, reputácia),</li>
        <li>prebehnúť finálny <strong>Before decide</strong> checklist pred rozhodnutím.</li>
      </ul>
    </PageShell>
  );
}
