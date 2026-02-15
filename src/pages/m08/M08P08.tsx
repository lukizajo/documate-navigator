import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P08() {
  const nav = getNavContext("m08-08-granularita");
  return (
    <PageShell title={"7️⃣ Granularita a \u201Esweet spot\u201C: ako veľké majú byť kroky"} {...nav}>

      <p>Keď automatizácia nefunguje, často to nie je problém nástroja ani AI.</p>
      <p>Najčastejšie je problém v tom, že krok je buď:</p>
      <ul>
        <li><strong>príliš veľký</strong> (všetko naraz), alebo</li>
        <li><strong>príliš malý</strong> (milión drobností).</li>
      </ul>
      <p>Tomuto hovoríme <strong>granularita</strong> – teda „akú veľkú dávku práce" dáš do jedného kroku.</p>
      <p>Cieľ je nájsť <strong>sweet spot</strong>: krok, ktorý je dosť malý na kontrolu, ale dosť veľký, aby to malo zmysel.</p>

      <h3>🟥 Keď je krok príliš veľký</h3>
      <p>Príliš veľký krok vyzerá napríklad takto:</p>
      <ul>
        <li>„Spracuj mi domáce financie za celý týždeň."</li>
        <li>„Vyrieš všetky e-maily."</li>
        <li>„Urob reporting."</li>
      </ul>
      <p>Problém:</p>
      <ul>
        <li>nevieš presne, čo je vstup a čo výstup,</li>
        <li>veľa výnimiek sa schová „dnu",</li>
        <li>keď sa to pokazí, nevieš kde.</li>
      </ul>
      <p>👉 Veľký krok je <strong>krehký</strong>. Stačí jedna výnimka a celé to spadne.</p>

      <h3>🟦 Keď je krok príliš malý</h3>
      <p>Príliš malý krok vyzerá napríklad takto:</p>
      <ul>
        <li>„Otvoriť aplikáciu."</li>
        <li>„Skopírovať riadok."</li>
        <li>„Kliknúť na export."</li>
      </ul>
      <p>Problém:</p>
      <ul>
        <li>vznikne 20–30 krokov a celý proces sa stane zložitejší než pôvodne,</li>
        <li>veľa „lepidla" medzi krokmi,</li>
        <li>viac miesta na chyby a údržbu.</li>
      </ul>
      <p>👉 Príliš malé kroky <strong>zabijú jednoduchosť</strong>.</p>

      <h3>✅ Ako vyzerá „sweet spot" krok</h3>
      <p>Sweet spot je krok, ktorý má:</p>
      <ol>
        <li><strong>Jasný vstup</strong></li>
        <li><strong>Jasný výstup</strong></li>
        <li>Dá sa otestovať na 5–10 prípadoch</li>
        <li>Trvá pár sekúnd až pár minút (nie hodinu)</li>
        <li>Má zmysel aj samostatne (nie je to len klik)</li>
      </ol>
      <p>💡 Pomôcka:</p>
      <p><strong>1 krok = 1 výsledok</strong>, ktorý vieš skontrolovať.</p>

      <h3>✅ Príklad z osobného života: domáce financie 💳</h3>
      <p><strong>Príliš veľký krok:</strong></p>
      <p>„Zorganizuj mi financie za týždeň."</p>
      <p><strong>Príliš malé kroky:</strong></p>
      <p>„Otvor banku → klikni transakcie → skopíruj riadok → vlož do tabuľky…"</p>
      <p><strong>Sweet spot:</strong></p>
      <ul>
        <li>„Označ opakované platby (nájom, Netflix, telefón) do správnych kategórií."</li>
        <li>„Nájdi 3 najväčšie výdavky za týždeň a napíš 2 zistenia."</li>
      </ul>
      <p>👉 Každý z týchto krokov má jasný vstup, výstup a vieš ho otestovať.</p>

      <h3>✅ Príklad z práce: opakujúce sa e-maily 📩</h3>
      <p><strong>Príliš veľký krok:</strong></p>
      <p>„Vyrieš mi inbox."</p>
      <p><strong>Príliš malé kroky:</strong></p>
      <p>„Otvoriť email → označiť → presunúť…"</p>
      <p><strong>Sweet spot:</strong></p>
      <ul>
        <li>„Zatriediť e-maily do 3 typov: billing / technické / iné."</li>
        <li>„Pripraviť draft odpovede na jeden typ otázky podľa šablóny."</li>
      </ul>

      <h3>✅ Rýchly test na kontrolu granularity (3 otázky)</h3>
      <p>Keď si nie si istý/istá, polož si:</p>
      <ol>
        <li><strong>Viem jasne povedať vstup a výstup?</strong></li>
        <li><strong>Viem to otestovať na 5–10 prípadoch?</strong></li>
        <li><strong>Keď sa to pokazí, viem rýchlo nájsť kde?</strong></li>
      </ol>
      <p>Ak odpoveď nie je „áno", krok je pravdepodobne príliš veľký (alebo príliš malý).</p>

      <MiniTask title="Nájdite sweet spot krok ⚖️">
        <p><strong>Zadanie</strong></p>
        <p>Zober si svoj proces „domáce financie" a vyber 1 krok, ktorý je podľa teba:</p>
        <ul>
          <li>buď <strong>príliš veľký</strong>, alebo</li>
          <li><strong>príliš malý</strong>.</li>
        </ul>
        <p>Tvoj cieľ: prepracovať ho do podoby „sweet spot" kroku.</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Vyber problematický krok (veľký alebo malý).</li>
          <li>Prepíš ho na 1 krok, ktorý má jasný vstup a výstup.</li>
          <li>Napíš, ako by si ho otestoval(a) na 5–10 prípadoch (jedna veta stačí).</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna)</strong></p>
        <p><strong>Pôvodný krok:</strong> … (príliš veľký / príliš malý)</p>
        <p><strong>Nový sweet spot krok:</strong> …</p>
        <p><strong>Ako ho otestujem (5–10 prípadov):</strong> …</p>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> mám nový krok so vstupom a výstupom.</li>
          <li><strong>⭐ Dobré:</strong> viem ho otestovať bez veľkej prípravy.</li>
          <li><strong>🌟 Výborné:</strong> nový krok je použiteľný aj samostatne (má vlastný prínos).</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
