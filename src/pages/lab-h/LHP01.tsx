import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-01-uvod");

export default function LHP01() {
  return (
    <PageShell title="LAB H – Hudba & sound design s AI 🎵" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>Tento LAB je praktická dráha, kde si AI vyskúšaš ako nástroj na <strong>hudbu a zvukový dizajn</strong>, ale s jasným cieľom:</p>
      <p>👉 <strong>nevytvárať „hit", ale vytvoriť použiteľné audio podklady</strong> do reálneho obsahu (podcast, video, reels, prezentácia, web).</p>
      <p>Veľa ľudí to spraví na prvý pokus a skončí pri tom, že:</p>
      <ul>
        <li>hudba je „pekná", ale <strong>ruší hlas</strong>,</li>
        <li>každá verzia znie inak (žiadna konzistentnosť),</li>
        <li>nevieš spraviť <strong>správnu dĺžku alebo loop</strong>,</li>
        <li>chýbajú ti malé zvuky (prechody, potvrdenia),</li>
        <li>a pri použití v práci zistíš, že <strong>licencia je nejasná</strong>.</li>
      </ul>
      <p>V tomto LABe pôjdeme opačne: <strong>účel → kontrola → použiteľný výstup</strong>.</p>
      <p>Cieľom je, aby si vedel vyrobiť <strong>audio podklady</strong>, ktoré podporia pointu, neprebijú reč, dajú sa upraviť na dĺžku a loop a vieš ich použiť bez stresu (aj z pohľadu licencie).</p>
      <p>A rovnako ako v celom kurze: <strong>AI asistuje, človek rozhoduje. ✅</strong></p>

      <h2>🧭 Prehľad LABu</h2>
      <p>V tomto LABe si ukážeme jednoduchý postup, ako prepnúť AI z režimu „sprav mi hudbu" do režimu „pomôž mi spraviť audio, ktoré viem reálne použiť":</p>
      <ul>
        <li><strong>účel pred estetikou</strong> (najprv: na čo to je a kde to použijem),</li>
        <li><strong>brief bez teórie</strong> (mood, energia, dĺžka, nástroje/žáner),</li>
        <li><strong>3–1–1 pravidlo</strong> (3 varianty → 1 vyber → 1 vylepši),</li>
        <li><strong>dĺžka a loop</strong> (intro 7–10s, background 20–30s),</li>
        <li><strong>sound design</strong> (SFX na prechody a potvrdenia),</li>
        <li><strong>sound pack</strong> (organizácia, názvy súborov, aby si sa v tom nestratil),</li>
        <li><strong>licencie a etika</strong> (STOP-rule: bez jasnej licencie nepoužívam).</li>
      </ul>
      <p>Na konci to všetko spojíš do jedného výstupu: <strong>tvoj vlastný mini sound pack pripravený na použitie.</strong></p>

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <p>Po absolvovaní LAB H budeš vedieť:</p>
      <ul>
        <li>vybrať, <strong>kedy hudbu použiť a kedy radšej nie</strong> (aby nerušila),</li>
        <li>spraviť jednoduchý <strong>brief</strong>, ktorý AI trafí stabilnejšie,</li>
        <li>vygenerovať viac verzií a vybrať tú najlepšiu <strong>podľa použiteľnosti</strong>, nie podľa "wow",</li>
        <li>spraviť <strong>intro</strong> a <strong>loop background</strong>, ktorý sa "neprezradí",</li>
        <li>pripraviť 2–3 základné <strong>SFX</strong> (transition, confirmation),</li>
        <li>spraviť rýchlu licenčnú kontrolu, aby si vedel, <strong>či to môžeš použiť verejne/komerčne</strong>.</li>
      </ul>
    </PageShell>
  );
}
