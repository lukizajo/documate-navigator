import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lf-01-uvod");

export default function LFP01() {
  return (
    <PageShell title="LAB F – Hlas & audio s AI 🎙️" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>Tento LAB je praktická dráha zameraná na jednu konkrétnu zručnosť: <strong>pracovať s hlasom a audiom cez AI tak, aby výsledok bol použiteľný v praxi</strong> – do podcastu, videa, kurzu, prezentácie, na sociálne siete alebo ako rýchly voiceover k obsahu.</p>
      <p>Veľa ľudí to robí takto:</p>
      <p>„Vygeneruj mi hlas…" → vznikne niečo, čo znie <strong>OK</strong> → ale potom zistíš, že:</p>
      <ul>
        <li>AI zle číta skratky, čísla alebo cudzie slová,</li>
        <li>hlas je raz super a raz &quot;úplne iný&quot; (nekonzistentný štýl),</li>
        <li>nahrávka šumí alebo znie &quot;lacno&quot; a nevieš, čo s tým,</li>
        <li>výsledok je použiteľný len v jednej situácii (a pri formáte na IG sa to rozpadne).</li>
      </ul>
      <p>👉 Cieľom LABu nie je robiť zvukové experimenty ani &quot;hrať sa na štúdio&quot;.</p>
      <p>Cieľom je, aby si vedel spraviť <strong>čistý, zrozumiteľný a konzistentný hlasový výstup</strong> – a vedel ho vylepšovať <strong>kontrolovanými krokmi</strong>, nie náhodou.</p>
      <p>A rovnako ako v celom kurze: <strong>AI asistuje, človek rozhoduje. ✅</strong></p>

      <h2>🧭 Prehľad LABu</h2>
      <p>V tomto LABe si ukážeme jednoduchý postup, ako prepnúť AI z režimu „vygeneruj mi hlas" do režimu „pomôž mi spraviť audio, ktoré viem reálne použiť":</p>
      <ul>
        <li><strong>text pre uši</strong> (scenár pre hlas, nie pre čítanie),</li>
        <li><strong>štýl a konzistencia</strong> (aby každý výstup držal rovnaký &quot;hlas&quot;),</li>
        <li><strong>generovanie v ElevenLabs</strong> (krátke testy, iterácie, export),</li>
        <li><strong>oprava výslovnosti</strong> (fonetika + skratky/čísla – keď AI zle číta),</li>
        <li><strong>čistenie zvuku</strong> (odstránenie šumu, vyrovnanie hlasitosti),</li>
        <li><strong>audiogram / použitie v praxi</strong> (rýchly výstup na sociálne siete),</li>
        <li><strong>etika a dôvera</strong> (aby si si nenarobil problém).</li>
      </ul>
      <p>Na konci to spojíš do jedného výstupu: <strong>krátky hotový voiceover (30–60 s), vyčistený zvuk a 1 jednoduchý audiogram pripravený na použitie.</strong></p>

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <p>Po absolvovaní LABu budeš vedieť:</p>
      <ul>
        <li>prepísať text do formy, ktorá znie prirodzene v audionahrávke,</li>
        <li>nastaviť si jednoduchý &quot;voice style guide&quot;, aby hlas pôsobil konzistentne,</li>
        <li>vygenerovať voiceover v ElevenLabs a robiť krátke iterácie bez chaosu,</li>
        <li>opraviť problémové miesta (cudzie slová, skratky, čísla) tak, aby ich AI čítala správne,</li>
        <li>vyčistiť nahrávku od šumu a zjednotiť hlasitosť tak, aby audio znelo &quot;hotovo&quot;,</li>
        <li>spraviť z audio výstupu rýchly obsah na siete (audiogram) bez zbytočnej driny,</li>
        <li>rozpoznať základné riziká (etika, dôvera, transparentnosť) a používať AI zodpovedne.</li>
      </ul>
    </PageShell>
  );
}
