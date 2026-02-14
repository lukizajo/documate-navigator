import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M04P10() {
  const nav = getNavContext("m04-10-chyby");
  return (
    <PageShell title="9️⃣ Najčastejšie chyby pri práci s kontextom (a čo spraviť namiesto toho)" {...nav}>

      <p>Pri práci s kontextom sa opakujú chyby, ktoré vedú k slabým alebo nepredvídateľným výsledkom. Väčšinou nie je problém „v AI", ale v tom, že AI musí <strong>hádať</strong>, čo je podstatné.</p>

      <h3>👉 Vkladanie celých dokumentov bez štruktúry</h3>
      <p><strong>Prejav:</strong> AI niečo vynechá, pomieša, alebo sa chytí detailu, ktorý nie je dôležitý.</p>
      <p>✅ <strong>Namiesto toho:</strong> rozdeľ text na <strong>chunky</strong> a po každom sprav <strong>Mini-pamäť (3–5 bodov)</strong>.</p>

      <h3>👉 Miešanie dôležitého s nepodstatným (šum)</h3>
      <p><strong>Prejav:</strong> odpoveď je síce dlhá, ale nevieš z nej rozhodnúť.</p>
      <p>✅ <strong>Namiesto toho:</strong> daj <strong>Priority (1–3)</strong> + <strong>Deal-breaker</strong> (čo nesmie nastať).</p>

      <h3>👉 Chýbajúce zdroje alebo dátumy</h3>
      <p><strong>Prejav:</strong> AI znie presvedčivo, ale nevieš, či je to pravda a či je to aktuálne.</p>
      <p>✅ <strong>Namiesto toho:</strong> použi <strong>RAG-light</strong> (vložené zdroje [A]/[B]) + pravidlo <strong>„ak to v zdrojoch nie je, napíš 'nie je uvedené'"</strong> + pýtaj <strong>dátum/rok (ak je dostupný)</strong>.</p>

      <h3>👉 Snaha vyriešiť všetko jedným univerzálnym promptom</h3>
      <p><strong>Prejav:</strong> raz to funguje, raz nie — a nevieš prečo.</p>
      <p>✅ <strong>Namiesto toho:</strong> rozdeľ prompt na:</p>
      <ul>
        <li>🧱 <strong>Stabilné</strong> (systémové pokyny: štýl, pravidlá, "nevymýšľaj", štruktúra)</li>
        <li>🎯 <strong>Aktuálne</strong> (konkrétna úloha, parametre, priority)</li>
      </ul>

      <h3>🔍 Keď vidíš problém: rýchla kontrola</h3>
      <p>Najčastejšie je to jedno z tohto:</p>
      <ul>
        <li><strong>Chýba</strong> (priority, deal-breaker, zdrojový režim, 1 kľúčový detail)</li>
        <li><strong>Šum</strong> (zbytočné detaily prekryli podstatné)</li>
        <li><strong>Konflikt</strong> (stručne vs podrobne, bez webu vs presné fakty…)</li>
      </ul>
      <p>Najrýchlejšia oprava: dopíš <strong>Priority (1–3)</strong> + <strong>Deal-breaker</strong> + pravidlo <strong>„Ak si nie si istý, povedz 'neviem' alebo polož 1 otázku."</strong></p>
    </PageShell>
  );
}
