import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-10-prakticka-uloha");

export default function LAP10() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>🧾 Zhrnutie LABu</h2>
      <p>🧠 V tomto LABe si si nastavil jednoduchú, ale silnú zručnosť: používať AI ako partnera v myslení, nie ako autopilota na odpovede.</p>
      <p>🪞 Vidíš, že AI často funguje ako zrkadlo – kvalita výstupu závisí od toho, ako jasne vieš pomenovať cieľ, kontext a obmedzenia.</p>
      <p>🧩 Keď najprv rozložíš problém, pýtaš si varianty a prepínaš perspektívy, znižuješ riziko „prvej peknej odpovede".</p>
      <p>🥊 Sparring partner ti pomáha nájsť slabé miesta, predpoklady a veci, ktoré treba overiť.</p>
      <p>⚠️ Pri dôležitých témach platí: AI asistuje, ale zodpovednosť zostáva na tebe.</p>
      <p>✅ Ak si máš zapamätať jednu vec: najprv myslenie, potom odpoveď — a vždy si pýtaj aspoň jednu alternatívu a jedno riziko.</p>
    </PageShell>
  );
}
