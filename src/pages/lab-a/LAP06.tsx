import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-06-perspektivy");

export default function LAP06() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>5️⃣ Perspektívy a roly</h2>
      <p>AI ti často odpovie v jednom „štýle" – akoby existoval jeden správny pohľad. Lenže v praxi sa kvalita rozhodnutia zlepší vtedy, keď sa na problém pozrieš z viacerých strán.</p>
      <p>Preto je užitočné pracovať s <strong>perspektívami a rolami</strong>. Nie preto, že AI má „osobnosť", ale preto, že ty ju týmto donútiš prepnúť spôsob uvažovania: raz bude praktická, raz skeptická, raz zjednodušujúca.</p>

      <hr />

      <h3>🧩 Tri roly, ktoré stoja za to používať</h3>
      <p>👤 <strong>Laik</strong></p>
      <p>Vysvetlí jednoducho, bez žargónu. Pomôže ti zistiť, či je to zrozumiteľné.</p>
      <p>🧑‍💼 <strong>Expert</strong></p>
      <p>Pôjde do detailu, dá štruktúru, upozorní na súvislosti a pojmy.</p>
      <p>🕵️ <strong>Kritik (devil's advocate)</strong></p>
      <p>Hľadá slabé miesta, riziká, čo môže zlyhať, čo si si nevšimol.</p>

      <hr />

      <h3>🎯 Kedy ktorú rolu použiť</h3>
      <p>🧠 Keď pripravuješ text pre ľudí → použi <strong>laika</strong> (zistíš, či to nie je „AI-žargón").</p>
      <p>🧩 Keď chceš systém a poriadok → použi <strong>experta</strong> (rozloží ti to do krokov).</p>
      <p>⚠️ Keď ide o dôležité rozhodnutie → použi <strong>kritika</strong> (pomôže ti nezamilovať sa do prvého nápadu).</p>

      <hr />

      <h3>🧩 Mikropríklad</h3>
      <p><strong>💬 Zadanie bez roly:</strong></p>
      <p>„Navrhni mi plán na zlepšenie komunikácie v tíme."</p>
      <p><strong>✅ Zadanie s rolami:</strong></p>
      <p>„Najprv mi navrhni plán ako expert. Potom ho prelož do jednoduchej verzie ako laik (aby tomu rozumel každý). Nakoniec ho skritizuj ako skeptik: čo je na tom slabé, čo môže zlyhať a čo treba doplniť."</p>
      <p>🧠 Výsledok: nie jedna odpoveď, ale tri pohľady – a ty si vyberieš, čo z toho použiješ.</p>

      <hr />

      <PromptBlock>„Správaj sa ako kritik. Napíš 5 dôvodov, prečo sa môžem mýliť, a čo by som mal overiť skôr, než sa rozhodnem."</PromptBlock>
    </PageShell>
  );
}
