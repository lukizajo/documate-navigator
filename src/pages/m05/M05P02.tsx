import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M05P02() {
  const nav = getNavContext("m05-02-ai-vs-google");
  return (
    <PageShell title="1️⃣ AI vs. klasický vyhľadávač ⚖️" {...nav}>
      <p>Keď niečo hľadáš cez <strong>Google</strong>, zvyčajne dostaneš zoznam stránok a ty si z nich musíš odpoveď „vyskladať".</p>
      <p>Keď to riešiš cez <strong>AI s webovým vyhľadávaním</strong>, AI ti často dá rovno hotový výstup – zhrnutie, porovnanie, odporúčanie alebo plán.</p>
      <p>Predstav si rozdiel medzi knižnicou a rozprávačom príbehu.</p>
      <ul>
        <li><strong>Google je knižnica</strong> – ukáže ti odkazy na zdroje.</li>
        <li><strong>AI je rozprávač</strong> – z dostupných informácií poskladá odpoveď do súvislého textu.</li>
      </ul>

      <p><strong>Rozdiel v skratke:</strong></p>
      <ul>
        <li>Google <strong>indexuje</strong> obsah - „nájde stránky" (ty potom čítaš a rozhoduješ).</li>
        <li>AI <strong>generuje</strong> odpoveď – „poskladá odpoveď" (ty potom kontroluješ, či sedí).</li>
      </ul>
      <p>To znamená, že AI vie byť rýchla a zrozumiteľná, ale nemá prirodzenú potrebu hovoriť pravdu – len dávať zmysluplne znejúce odpovede.</p>

      <h3>👉 Kedy vyhráva AI</h3>
      <p>AI typicky vyhráva vtedy, keď nechceš len nájsť jeden konkrétny web, ale chceš rýchlo dostať použiteľný výstup.</p>
      <ul>
        <li>keď chceš <strong>porovnanie možností</strong> podľa tvojich podmienok</li>
        <li>keď chceš <strong>zhrnutie viacerých zdrojov</strong> do prehľadu</li>
        <li>keď chceš konkrétny <strong>návrh postupu</strong> (kroky, plán, checklist)</li>
        <li>keď <strong>sa nechceš stratiť</strong> v „šume" článkov, reklám a dlhých textov</li>
      </ul>

      <h3>👉 Kedy vyhráva Google</h3>
      <p>Google vyhráva vtedy, keď potrebuješ presný fakt z oficiálneho zdroja alebo úplne aktuálnu informáciu.</p>
      <ul>
        <li><strong>ceny, termíny, otváracie hodiny, dostupnosť</strong></li>
        <li>„kde presne to vybavím" a „čo je <strong>oficiálny postup</strong>"</li>
        <li>veci, kde záleží na presnej formulácii (<strong>pravidlá, podmienky, zákony</strong>)</li>
        <li>keď <strong>chceš vidieť pôvodný zdroj</strong> bez sprostredkovania</li>
      </ul>

      <h3>❗ Na čo si dať pozor</h3>
      <p>AI vie byť rýchla a zrozumiteľná, ale môže pôsobiť presvedčivo aj vtedy, keď sa trafí len „na oko".</p>
      <p><strong>👉 Najčastejšie pasce:</strong></p>
      <ul>
        <li>AI niekedy doplní detail, ktorý nemá overený</li>
        <li>AI môže miešať staršie a novšie informácie</li>
        <li>AI môže zhrnúť veci správne, ale vynechať dôležitú výnimku</li>
      </ul>
      <p><strong>👉 Praktické pravidlo:</strong></p>
      <ul>
        <li>AI použi na rýchly prehľad a návrh riešenia</li>
        <li>Google použi na overenie kľúčových detailov (najmä keď ide o peniaze, zdravie, termíny alebo „oficiálne" veci)</li>
      </ul>
      <p><strong>💡 Tip do praxe:</strong> Používaj AI na orientáciu v téme a Google na overovanie detailov.</p>

      <MiniTask title="Google vs AI">
        <p><strong>Situácia</strong></p>
        <p>Je večer, máš doma pár surovín (vajcia, cestoviny, syr, cesnak, cibuľu, mrazenú zeleninu) a chceš rýchlo vymyslieť večeru a nemáš chuť na mäso.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Najprv použi Google, potom skopíruj prompt do AI (ľubovoľný chatbot). Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>🔎 Google</strong></p>
        <p>Použi Google na vyhľadanie receptu zo surovín, ktoré máš doma. Otvor aspoň 3 výsledky (3 rôzne weby). Skús z toho vyskladať 1 konkrétny recept.</p>
        <p><strong>🧠 Prompt pre AI</strong></p>
        <p>„Navrhni mi 1 jednoduchú večeru do 20 minút. Mám doma: vajcia, cestoviny, syr, cesnak, cibuľu, mrazenú zeleninu. Chcem: bez mäsa, pre 2 porcie. Výstup: suroviny s množstvom, potom postup v 6–8 krokoch."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Dostal si v AI recept, ktorý naozaj používa tvoje suroviny (vajcia, cestoviny, syr, cesnak, cibuľa, mrazená zelenina), alebo si AI niečo „domyslela" navyše?</li>
          <li>Je výsledok z AI použiteľný hneď (jasné množstvá + 6–8 krokov), alebo by si ho musel upravovať?</li>
          <li>Musel si pri Google otvoriť a prečítať viac stránok, aby si našiel recept, ktorý sedí na tvoje suroviny a bez mäsa?</li>
          <li>Našiel si cez Google recept do 20 minút bez toho, aby si musel preskakovať dlhé texty (príbeh, reklamy, „SEO omáčku")?</li>
          <li>Má AI recept jasnú logiku postupu (čo ide kedy na panvicu/hrniec), alebo je to len všeobecný opis?</li>
          <li>Máš z AI výstupu pocit, že ti šetrí čas (1 odpoveď), alebo si aj tak musíš robiť vlastný výber ako pri Google?</li>
        </ul>
      </MiniTask>

      <ExpectedFinding>
        <p>AI ti dá hotový recept okamžite – konkrétne suroviny, množstvá a postup v pár krokoch, takže môžeš rovno variť.</p>
        <p>Pri Google často stráviš viac času výberom a filtrovaním – otváraš viac výsledkov, preskakuješ dlhé texty a až potom si z toho skladáš použiteľný recept.</p>
        <p>Zároveň platí, že AI si občas môže „vymyslieť" surovinu navyše alebo zjednodušiť detail, takže ak ide o niečo dôležité (napr. alergia, diéta), je dobré to skontrolovať.</p>
      </ExpectedFinding>

      <MiniTest
        question={`V ktor\u00FDch 2 situ\u00E1ci\u00E1ch ti AI typicky u\u0161etr\u00ED najviac \u010Dasu oproti Google? Vyber 2.`}
        options={[
          { label: "\uD83C\uDF15", text: `\u201EKo\u013Eko dnes stoj\u00ED dia\u013Eni\u010Dn\u00E1 zn\u00E1mka v \u010CR a kde ju k\u00FApi\u0165?\u201C` },
          { label: "⭐", text: `\u201ENavrhni mi 2 r\u00FDchle ve\u010Dere do 15 min\u00FAt z toho, \u010Do m\u00E1m doma: ry\u017Ea, tuniak, kukurica. Daj aj postup.\u201C` },
          { label: "☀️", text: `\u201EVysvetli mi jednoducho, \u010Do je infl\u00E1cia a pre\u010Do rast\u00FA ceny. Daj mi pr\u00EDklad z be\u017En\u00E9ho \u017Eivota.\u201C` },
          { label: "\uD83C\uDF11", text: `\u201EKedy hr\u00E1 najbli\u017E\u0161ie moja ob\u013E\u00FAben\u00E1 kapela v Prahe a kde k\u00FApi\u0165 l\u00EDstky?\u201C` },
          { label: "\uD83C\uDF20", text: `\u201EChcem n\u00E1pady na dar\u010Dek pre otca (55+), rozpo\u010Det 30 \u20AC, m\u00E1 r\u00E1d turistiku a k\u00E1vu. Daj 10 tipov a ku ka\u017Ed\u00E9mu 1 d\u00F4vod.\u201C` },
        ]}
        correct="⭐🌠"
        explanation="⭐ je tvorba konkrétneho návrhu z podmienok, AI to dá okamžite použiteľne. 🌠 je generovanie nápadov na mieru, AI vyhrá rýchlosťou a variabilitou."
      />
    </PageShell>
  );
}
