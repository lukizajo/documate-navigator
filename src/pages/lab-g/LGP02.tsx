import { PageShell } from "@/components/PageShell";
import { MiniTask, MiniTest, PromptBlock, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-02-video-nastroj");

export default function LGP02() {
  return (
    <PageShell title="1️⃣ Video ako komunikačný nástroj" prev={nav.prev} next={nav.next}>
      <p>AI vie spraviť video rýchlo. Ale aby bolo <strong>použiteľné</strong>, potrebuješ najprv urobiť jednu vec správne:</p>
      <p>👉 <strong>Video nie je cieľ. Video je komunikačný nástroj.</strong></p>
      <p>A platí jednoduché pravidlo: <strong>1 video = 1 myšlienka.</strong></p>
      <p>Ak máš v hlave tri myšlienky, máš v hlave <strong>tri videá</strong> (alebo chaos 😄).</p>

      <h2>🧩 3 otázky, ktoré rozhodnú o kvalite videa</h2>
      <p>Skôr než otvoríš akýkoľvek nástroj, odpovedz si:</p>
      <p>👥 <strong>Pre koho to je?</strong></p>
      <ul><li>(kolega, zákazník, účastník kurzu, follower na IG…)</li></ul>
      <p>🎯 <strong>Na čo to je?</strong></p>
      <ul><li>chceš <strong>informovať / vysvetliť / presvedčiť / aktivovať</strong>?</li></ul>
      <p>✅ <strong>Čo má človek spraviť po pozretí?</strong></p>
      <ul>
        <li>toto je tvoje <strong>CTA</strong> (call to action).</li>
        <li>Bez CTA video často skončí ako: „ok, zaujímavé… a ďalej?" 😅</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Ak nevieš povedať pointu videa <strong>jednou vetou</strong>, ešte netočíš. Ešte len „vymýšľaš". A to je v pohode — len to nevolaj video 😉</p>

      <h2>🧠 Praktická skratka</h2>
      <ul>
        <li>ak potrebuješ <strong>realitu a dôveru</strong> → skôr <strong>točenie</strong></li>
        <li>ak potrebuješ <strong>rýchlo vysvetliť a vizualizovať</strong> → skôr <strong>AI</strong></li>
        <li>ak potrebuješ oboje → <strong>mix</strong> (ty na kamere + AI b-roll)</li>
      </ul>

      <MiniTask title="Video brief v 3 riadkoch">
        <p><strong>Situácia</strong></p>
        <p>Chceš spraviť krátke video (15–60 s) na IG/LinkedIn/YouTube Shorts, ktoré bude <strong>použiteľné</strong> a nebude „o všetkom". Má to byť jedno video = <strong>jedna myšlienka</strong>.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Najprv si vyplň mini brief (3 riadky). Potom si nechaj AI spraviť 3 varianty a vyber najlepší.</p>
        <p>Vyplň si:</p>
        <ul>
          <li>👥 <strong>Publikum:</strong> …</li>
          <li>🎯 <strong>Pointa (1 veta):</strong> …</li>
          <li>✅ <strong>CTA (čo má spraviť):</strong> …</li>
        </ul>
        <PromptBlock hideLabel>
          <p>„Pomôž mi pripraviť brief pre krátke video (15–60s).<br />
          Téma: [doplníš tému].<br />
          Publikum: [doplníš].<br />
          Cieľ: [informovať / vysvetliť / presvedčiť / aktivovať].<br />
          Vygeneruj 3 varianty mini-briefu v tomto formáte:</p>
          <ol>
            <li>Publikum: …</li>
            <li>Pointa (1 veta): …</li>
            <li>CTA: …</li>
          </ol>
          <p>Pravidlá:</p>
          <ul>
            <li>1 video = 1 myšlienka</li>
            <li>pointa musí byť konkrétna (nie všeobecná)</li>
            <li>CTA musí byť jasné a vykonateľné</li>
            <li>bez vaty, bez dlhých viet."</li>
          </ul>
        </PromptBlock>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je pointa v každom variante naozaj <strong>jedna myšlienka</strong>?</li>
          <li>Vieš to pochopiť do <strong>2 sekúnd</strong>, o čom video je?</li>
          <li>Je CTA <strong>konkrétne a vykonateľné</strong> (komentuj/ulož/skús)?</li>
          <li>Ak by si z toho spravil 3 videá, vieš tie myšlienky rozdeliť?</li>
        </ul>
        <ExpectedFinding>
          <p>Dobré krátke video nevzniká z „peknej animácie", ale z jasného rozhodnutia: <strong>pre koho to je + čo je pointa + čo má človek spraviť ďalej.</strong> Keď toto sedí, AI ti už len pomáha vyrábať rýchlo.</p>
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="👉 Ktorá pointa je najlepšia pre krátke video (15–60 s)?"
        options={[
          { label: "🌕", text: "\u201EAI zmení svet a všetky profesie.\u201C" },
          { label: "⭐", text: "\u201EUkážem ti 1 spôsob, ako použiť AI na rýchlejšie emaily.\u201C" },
          { label: "☀️", text: "\u201EDnes sa pozrieme na umelú inteligenciu a jej históriu.\u201C" },
        ]}
        correct="⭐"
        explanation="je konkrétna, zúžená a má jasnú praktickú hodnotu — ide rovno do použiteľnej pointy."
      />
    </PageShell>
  );
}
