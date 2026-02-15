import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-01-uvod");

export default function LEP01() {
  return (
    <PageShell title="LAB E – Prezentácie s AI 📊" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>Tento LAB je praktická dráha: naučíš sa robiť prezentácie s AI tak, aby boli <strong>jasné, použiteľné a odprezentovateľné</strong> (nie "slidy plné vaty").</p>
      <p>Najčastejšie problémy bez systému:</p>
      <ul>
        <li>slidy sú <strong>príliš textové</strong> (vyzerajú ako dokument),</li>
        <li>chýba <strong>jedna hlavná pointa</strong>,</li>
        <li>výstup je <strong>generický</strong>,</li>
        <li>AI si <strong>domýšľa fakty</strong> alebo rozbije <strong>šablónu</strong>.</li>
      </ul>
      <p>Cieľ: <strong>AI asistuje, ty rozhoduješ</strong> ✅</p>

      <h2>🧭 Prehľad LABu</h2>
      <p>V LABe si prejdeš celý proces od nápadu po hotový deck – a hlavne si ho vyskúšaš na vlastnom výstupe:</p>
      <ul>
        <li>Najprv si nastavíš <strong>jasný cieľ prezentácie</strong> a publikum, aby AI netrafila vedľa.</li>
        <li>Potom si urobíš <strong>jednu hlavnú myšlienku (one message)</strong> a z nej poskladáš jednoduchý príbeh, ktorý dá prezentácii flow.</li>
        <li>Následne vytvoríš <strong>mapu slidov</strong> tak, aby každý slide niesol jednu pointu a nebol preplnený.</li>
        <li>Prevedieš obsah do formy, kde sú slidy stručné a vysvetlenie ide do <strong>speaker notes</strong> (aby prezentácia nebola dokument).</li>
        <li>Vyberieš vhodné vizuály (kedy graf, kedy diagram, kedy nič) a nastavíš <strong>jednotný vizuálny štýl</strong>, aby deck nepôsobil ako zlepenec.</li>
        <li>Ukážeme si, ako pracovať, keď máš <strong>hotovú šablónu</strong> a chceš ju naplniť obsahom bez rozbitia dizajnu – vrátane využitia <strong>konektorov a AI nástrojov</strong>, ktoré to vedia urýchliť.</li>
        <li>Na konci spravíš kontrolu kvality: <strong>deal-breakery, fakty, zdroje, citlivé údaje</strong> – a deck doladíš iteráciami.</li>
      </ul>
      <p>Výsledok: <strong>prezentácia 8–10 slidov + speaker notes + checklist</strong> pripravená na použitie.</p>

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <ul>
        <li>spraviť brief, ktorý zníži generické výstupy</li>
        <li>poskladať prezentáciu okolo jednej pointy a dobrého flow</li>
        <li>písať stručné slidy + kvalitné speaker notes</li>
        <li>vyberať správny typ vizuálu bez chaosu</li>
        <li>naplniť hotovú šablónu obsahom (aj s pomocou konektorov)</li>
        <li>spraviť QA: vata, fakty, zdroje, citlivé údaje</li>
      </ul>
    </PageShell>
  );
}
