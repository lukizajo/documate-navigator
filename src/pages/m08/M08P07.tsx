import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P07() {
  const nav = getNavContext("m08-07-zivotny-cyklus");
  return (
    <PageShell title="6️⃣ Životný cyklus automatizácie: postav → testuj → uprav → testuj 🔁" {...nav}>

      <p>Keď si predstavíš automatizáciu ako niečo, čo raz nastavíš a už na to nikdy nesiahneš, sklamanie príde rýchlo.</p>
      <p>Prečo? Lebo v reálnom živote sa mení:</p>
      <ul>
        <li>formát emailov,</li>
        <li>názvy položiek a kategórií,</li>
        <li>pravidlá a výnimky,</li>
        <li>aj to, čo považuješ za „správny výsledok".</li>
      </ul>
      <p>Preto automatizácia funguje najlepšie, keď ju berieš ako <strong>cyklus</strong>, nie jednorazový projekt.</p>

      <h3>✅ Základný cyklus (ktorý si zapamätaj)</h3>
      <p><strong>Postav → Otestuj → Uprav → Znovu otestuj → Až potom nasadzuj</strong></p>
      <p>A teraz si to rozoberieme prakticky.</p>

      <h3>1️⃣ Postav „mini-verziu" (najmenší funkčný krok)</h3>
      <p>Najčastejšia chyba je, že ľudia chcú automatizovať „celý proces naraz".</p>
      <p>Správny prístup je opačný:</p>
      <ul>
        <li>vyber <strong>1 krok</strong>, ktorý je jasný a opakovateľný,</li>
        <li>urob z neho mini-verziu, ktorú vieš ľahko otestovať.</li>
      </ul>
      <p>👉 Mini-verzia má byť taká malá, aby si ju vedel(vedela) opraviť za pár minút, nie za víkend.</p>

      <h3>2️⃣ Otestuj na 5–10 reálnych prípadoch</h3>
      <p>Testovanie nie je „funguje mi to raz".</p>
      <p>Otestuj to na:</p>
      <ul>
        <li>bežných prípadoch,</li>
        <li>a aspoň 2–3 hraničných prípadoch (divné názvy, chýbajúce údaje, extrémy).</li>
      </ul>
      <p><strong>Prečo 5–10?</strong></p>
      <p>Lebo už na prvých desiatich prípadoch sa ukážu najčastejšie chyby.</p>

      <h3>3️⃣ Uprav pravidlá a zjednoduš proces</h3>
      <p>Keď nájdeš chybu, nepýtaj sa „ako to opraviť v nástroji". Najprv sa spýtaj:</p>
      <ul>
        <li>Je proces príliš zložitý?</li>
        <li>Nepýtam od systému niečo, čo sám neviem jasne popísať?</li>
        <li>Nemám príliš veľký krok, ktorý by som mal rozbiť?</li>
      </ul>
      <p>Často sa ukáže, že namiesto „opravy automatizácie" potrebuješ:</p>
      <ul>
        <li>zmeniť poradie krokov,</li>
        <li>doplniť pravidlo,</li>
        <li>alebo odstrániť zbytočný krok.</li>
      </ul>

      <h3>4️⃣ Znovu otestuj (až potom to pusti do praxe)</h3>
      <p>Po úprave sa test opakuje.</p>
      <p>Lebo aj malá zmena vie zmeniť správanie celého procesu.</p>
      <p>👉 To je dôvod, prečo sa automatizácie „zrazu rozbijú": niekto niečo zmení, ale už to netestuje.</p>

      <h3>5️⃣ Po nasadení sleduj a maj kontrolu</h3>
      <p>Aj jednoduchá automatizácia by mala mať:</p>
      <ul>
        <li>kontrolný bod (aspoň občas),</li>
        <li>možnosť vypnúť/stopnúť (ak sa deje blbosť),</li>
        <li>a ideálne aj jednoduchý „log" (čo sa spustilo a čo to spravilo).</li>
      </ul>

      <h3>✅ Príklad z osobného života: domáce financie 💳</h3>
      <p>Predstav si, že chceš „zautomatizovať" prehľad výdavkov.</p>
      <ul>
        <li><strong>Mini-verzia:</strong> len pravidlo pre 3 opakované platby (napr. nájom, Netflix, telefón)</li>
        <li><strong>Test:</strong> pozrieš 2 týždne dozadu, či to sedí</li>
        <li><strong>Úprava:</strong> doplníš výnimky (napr. „Telefón" je raz vyšší)</li>
        <li><strong>Znovu test:</strong> pozrieš ďalších 5–10 transakcií</li>
        <li><strong>Nasadenie:</strong> až potom pridávaš ďalšie kategórie a zhrnutia</li>
      </ul>

      <h3>✅ Príklad z práce: opakujúce sa e-maily 📩</h3>
      <p>Chceš si uľahčiť odpovedanie na opakované otázky.</p>
      <ul>
        <li><strong>Mini-verzia:</strong> AI len pripraví draft odpovede na 1 typ otázky</li>
        <li><strong>Test:</strong> 5 posledných e-mailov rovnakého typu</li>
        <li><strong>Úprava:</strong> doplníš, čo AI vždy zabúda (napr. 1 povinná veta)</li>
        <li><strong>Znovu test:</strong> ďalších 5 e-mailov</li>
        <li><strong>Nasadenie:</strong> až potom pridáš ďalší typ otázky</li>
      </ul>

      <MiniTask title="Navrhni mini-verziu a pilot 🔁">
        <p><strong>Zadanie</strong></p>
        <p>Nadviaž na svoj proces „domáce financie" a vyber 1 krok, ktorý by sa dal robiť opakovane.</p>
        <p>Tvoja úloha je navrhnúť:</p>
        <ul>
          <li><strong>mini-verziu</strong> (najmenší funkčný krok)</li>
          <li><strong>pilot test</strong> (5–10 prípadov)</li>
          <li>a <strong>kritérium úspechu</strong> (ako spoznáš, že to funguje)</li>
        </ul>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Vyber 1 krok z procesu (napr. kategorizácia opakovaných platieb).</li>
          <li>Popíš mini-verziu jednou vetou: „Bude to robiť X pre Y prípadov."</li>
          <li>Navrhni pilot: na akých 5–10 prípadoch to otestuješ.</li>
          <li>Napíš 1 vetu: „Úspech je, keď…" (napr. 8/10 správne alebo ušetrím 10 minút).</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna)</strong></p>
        <p><strong>Vybraný krok:</strong> …</p>
        <p><strong>Mini-verzia:</strong> …</p>
        <p><strong>Pilot (5–10 prípadov):</strong> …</p>
        <p><strong>Úspech je, keď:</strong> …</p>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> mám mini-verziu + pilot + kritérium úspechu.</li>
          <li><strong>⭐ Dobré:</strong> pilot obsahuje aj 1–2 „divné" prípady.</li>
          <li><strong>🌟 Výborné:</strong> úspech je merateľný (čas / presnosť / počet opráv).</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
