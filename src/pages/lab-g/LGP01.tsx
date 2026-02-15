import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-01-uvod");

export default function LGP01() {
  return (
    <PageShell title="LAB G – Video s AI 🎬" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>Tento LAB je praktická dráha zameraná na jednu konkrétnu zručnosť: <strong>spraviť krátke video pomocou AI</strong>, ktoré je <em>reálne použiteľné</em> — na Reels/Shorts, do kurzu, do prezentácie alebo na internú komunikáciu.</p>
      <p>Veľa ľudí používa AI video takto:</p>
      <p>„Vygeneruj mi video…" → vznikne niečo efektné → ale potom zistíš, že:</p>
      <ul>
        <li><strong>nie je jasná pointa</strong> (video je „o všetkom"),</li>
        <li>vizuály <strong>neladia</strong> (každý záber je iný štýl),</li>
        <li>titulky sú <strong>zlé / rýchle / nečitateľné</strong>,</li>
        <li>zvuk je „okej", ale video pôsobí <strong>lacno</strong>,</li>
        <li>a hlavne: je to <strong>pekné</strong>, ale <strong>nepublikovateľné</strong>.</li>
      </ul>
      <p>👉 Cieľom LABu nie je naučiť sa <em>jeden nástroj</em>.</p>
      <p>Cieľom je pochopiť <strong>celý proces</strong>: od nápadu a scenára až po hotové video — tak, aby si to vedel spraviť znova, <strong>kontrolovane</strong>, nie náhodou.</p>
      <p>A rovnako ako v celom kurze: <strong>AI asistuje, človek rozhoduje.</strong> ✅</p>

      <h2>🧭 Prehľad LABu</h2>
      <p>V tomto LABe si ukážeme jednoduchý postup, ako prepnúť AI z režimu „sprav mi video" do režimu „pomôž mi spraviť video, ktoré viem reálne použiť":</p>
      <ul>
        <li><strong>pointa pred efektom</strong> (1 myšlienka = 1 video),</li>
        <li><strong>scenár → storyboard → zábery</strong> (aby si vedel, čo ide kde),</li>
        <li><strong>obraz: AI vs stock</strong> (vyberáš zdroj podľa účelu, nie podľa hype),</li>
        <li><strong>hlas + titulky</strong> (aby to fungovalo aj bez zvuku),</li>
        <li><strong>štýl a konzistencia</strong> (aby video držalo spolu),</li>
        <li><strong>etika a práva</strong> (aby si si nenarobil problém s hlasom/obrazom).</li>
      </ul>
      <p>Na konci to spojíš do jedného výstupu: <strong>tvoje vlastné krátke video (15–60 s), pripravené na publikáciu.</strong> 🎓</p>

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <p>Po absolvovaní LAB G budeš vedieť:</p>
      <ul>
        <li>zadefinovať video tak, aby malo <strong>jasný účel a pointu</strong> (jednou vetou),</li>
        <li>spraviť jednoduchý scenár <strong>Hook → jadro → záver</strong>,</li>
        <li>premeniť scenár na <strong>storyboard / shot list</strong> (bez chaosu),</li>
        <li>vybrať správny typ obrazu: <strong>AI generované vs stock</strong>,</li>
        <li>poskladať video tak, aby malo <strong>rytmus</strong>, čitateľné <strong>titulky</strong> a použiteľný zvuk,</li>
        <li>udržať <strong>konzistentný štýl</strong> (aby to nepôsobilo ako „random mix"),</li>
        <li>rozpoznať <strong>etické a právne riziká</strong> pri práci s hlasom a obrazom.</li>
      </ul>
    </PageShell>
  );
}
