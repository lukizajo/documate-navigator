import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P12() {
  const nav = getNavContext("m08-12-nastroje");
  return (
    <PageShell title="🅱️ Nástroje – mapa možností 🛠️" {...nav}>

      <p>Tento modul je o procesoch, nie o nástrojoch.</p>
      <p>Ale je fajn mať aspoň „mapu", aby si vedel(a), čo hľadať, keď príde čas (napr. v LABe).</p>
      <p>Dôležité: <strong>nástroj ti nevyrieši zlý proces</strong>.</p>
      <p>Najprv proces → až potom výber nástroja.</p>

      <h3>🧭 5 kategórií nástrojov (a čo od nich čakať)</h3>

      <h3>1) Automatizačné platformy (no-code/low-code) ⚙️</h3>
      <p>Používaš, keď chceš spájať aplikácie: email, tabuľky, formuláre, cloud, notifikácie…</p>
      <p><strong>Typické použitie:</strong></p>
      <ul>
        <li>„Keď príde email → ulož prílohu → pošli upozornenie"</li>
        <li>„Keď niekto vyplní formulár → vytvor záznam v tabuľke"</li>
      </ul>
      <p>👉 Hodí sa najmä na <strong>bezAI</strong> automatizácie (pravidlá + presuny).</p>

      <h3>2) AI v automatizácii (AI ako krok v procese) 🤖</h3>
      <p>Toto nie je „iný nástroj", ale skôr spôsob použitia: AI je len jeden krok, napríklad:</p>
      <ul>
        <li>klasifikácia (zatriediť),</li>
        <li>extrakcia (vytiahnuť údaje),</li>
        <li>sumarizácia,</li>
        <li>návrh textu.</li>
      </ul>
      <p>👉 Najčastejšie to sedí na <strong>poloAI</strong>: AI navrhne, človek schváli.</p>

      <h3>3) RPA (robot, ktorý kliká v aplikáciách) 🖱️</h3>
      <p>Používaš, keď musíš automatizovať veci v systémoch, ktoré nemajú dobré integrácie alebo API.</p>
      <p><strong>Typické použitie:</strong></p>
      <ul>
        <li>klik-klak v starom internom systéme,</li>
        <li>prepisovanie údajov medzi dvoma aplikáciami,</li>
        <li>exporty/importy tam, kde to inak nejde.</li>
      </ul>
      <p>👉 Silné, ale krehké: zmena UI vie všetko rozbiť.</p>

      <h3>4) Práca s dátami (tabuľky, databázy, BI) 📊</h3>
      <p>Používaš, keď chceš získať poriadok v dátach a robiť nad nimi prehľad alebo reporty.</p>
      <p><strong>Typické použitie:</strong></p>
      <ul>
        <li>zber dát do tabuľky alebo databázy,</li>
        <li>čistenie dát, kategórie,</li>
        <li>prehľady, grafy, trendovanie.</li>
      </ul>
      <p>👉 Toto je často základ aj pre domáce financie: najprv dáta, potom automatizácia, potom AI.</p>

      <h3>5) Agenti a multi-step systémy 🧭🤖</h3>
      <p>Používaš, keď chceš, aby systém riešil viac krokov „sám" (s jasnými pravidlami a kontrolami).</p>
      <p><strong>Typické použitie:</strong></p>
      <ul>
        <li>zhrnúť info, rozhodnúť podľa pravidiel, pripraviť návrhy, vytvoriť výstupy,</li>
        <li>dohľad + logovanie + schvaľovanie.</li>
      </ul>
      <p>👉 Toto je „vyšší level" — vyžaduje jasný proces, testovanie a bezpečnostné hranice.</p>

      <h3>✅ Ako vybrať kategóriu (rýchla pomôcka)</h3>
      <p>Keď nevieš, čo potrebuješ, polož si 3 otázky:</p>
      <ol>
        <li><strong>Potrebujem len presúvať veci medzi appkami?</strong><br />→ automatizačná platforma (bezAI)</li>
        <li><strong>Potrebujem pochopiť text/dáta a spraviť z toho výstup?</strong><br />→ AI ako krok (poloAI)</li>
        <li><strong>Musím klikať v systéme, ktorý nič neponúka?</strong><br />→ RPA</li>
      </ol>

      <h3>✅ Mini príklad: domáce financie 💳 (bez návodov, len mapovanie)</h3>
      <ul>
        <li>zber transakcií do jedného miesta → „dáta" kategória</li>
        <li>pravidelné kategórie (názov obchodníka → kategória) → bezAI pravidlá</li>
        <li>nejasné transakcie → AI krok (Extract/Evaluate) s kontrolou</li>
        <li>týždenné zhrnutie → AI krok (Explain)</li>
        <li>plné AI-first → až keď máš proces stabilný + kontrolné body</li>
      </ul>

      <MiniTask title="Mapovanie nástrojov bez výberu konkrétnej appky 🗺️">
        <p><strong>Zadanie</strong></p>
        <p>Zober si svoj proces „domáce financie" a vyber 3 kroky.</p>
        <p>Ku každému kroku napíš, do ktorej kategórie nástrojov by spadal:</p>
        <ul>
          <li>automatizačná platforma (bezAI)</li>
          <li>AI krok (poloAI)</li>
          <li>práca s dátami</li>
          <li>RPA (ak by bolo treba)</li>
          <li>agent (len ak dáva zmysel)</li>
        </ul>
        <p><strong>Očakávaný výstup</strong></p>
        <ol>
          <li>Krok: … → kategória: … (1 veta prečo)</li>
          <li>Krok: … → kategória: … (1 veta prečo)</li>
          <li>Krok: … → kategória: … (1 veta prečo)</li>
        </ol>
      </MiniTask>
    </PageShell>
  );
}
