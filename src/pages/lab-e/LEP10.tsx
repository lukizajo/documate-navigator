import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("le-10-zhrnutie");

export default function LEP10() {
  return (
    <PageShell title="🧾 Zhrnutie LABu" prev={nav.prev} next={nav.next}>
      <p><strong>Najprv si ujasni cieľ a publikum:</strong> informovať / presvedčiť / naučiť + pre koho to je + čo má byť výsledok (pochopenie, rozhodnutie, akcia).</p>
      <p><strong>Prezentácia nie je dokument:</strong> na slide patrí pointa a minimum slov, vysvetlenie patrí do speaker notes. Keď musíš čítať slide, je to zle.</p>
      <p><strong>Brief je riadenie:</strong> napíš one message jednou vetou + CTA + obmedzenia + či máš šablónu a že sa nesmie meniť layout/fonty. Bez briefu AI vyrobí generiku.</p>
      <p><strong>Vyber typ prezentácie skôr, než začneš skladať slidy:</strong> informačná = fakty a dopady, presviedčacia = problém a rozhodnutie, návodová = kroky a ukážka.</p>
      <p><strong>Najprv mapa slidov, až potom dizajn:</strong> sprav 8–10 slidov, kde headline je pointa a každý slide nesie len jednu myšlienku. Až potom rieš texty a vizuál.</p>
      <p><strong>Headline má hovoriť výsledok, nie názov kapitoly:</strong> „3 kroky šetria čas" je lepšie než „Plánovanie". Headline má zmysel aj bez toho, aby si niečo vysvetľoval.</p>
      <p><strong>Skracuj kontrolovane:</strong> radšej skráť text a nechaj formát šablóny, než zmenšovať písmo alebo natláčať do boxov. Zachovaj význam, odstráň vatu.</p>
      <p><strong>Vizuál nie je dekorácia:</strong> použi ho len keď zjednoduší pointu (porovnanie, proces, trend). Drž jeden vizuálny svet a nastav si Style DNA s 2 zákazmi.</p>
      <p><strong>Šablóna je svätá, ak je firemná:</strong> AI má dopĺňať obsah do existujúcich boxov, nie meniť dizajn. Keď sa text nezmestí, skráť text, nie šablónu.</p>
      <p><strong>Pri faktoch spomaľ:</strong> všetky čísla, dátumy a „tvrdé tvrdenia" označ na overenie alebo doplň zdroj. Prezentácia pôsobí autoritatívne, preto je riziko vyššie.</p>
      <p><strong>Bezpečnosť:</strong> nedávaj do AI citlivé údaje; anonymizuj a minimalizuj. Najprv sprav obsah bez citlivých detailov, doplň ich až mimo AI.</p>
      <p><strong>Najbezpečnejšia rola AI je kritik:</strong> nech ti označí TOP slabé slidy, povie prečo a navrhne konkrétnu opravu headline + skrátenie + presun do notes — ty rozhoduješ.</p>
      <p>👉 <strong>Pointa:</strong> najlepší deck vzniká v krokoch (brief → typ → storyline → mapa → slidy/notes → vizuál → šablóna → QA/etika → iterácia v2), nie jedným "sprav mi prezentáciu".</p>
    </PageShell>
  );
}
