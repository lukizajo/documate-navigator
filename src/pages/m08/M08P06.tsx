import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P06() {
  const nav = getNavContext("m08-06-rozhodovaci-diamant");
  return (
    <PageShell title="5️⃣ Rozhodovací diamant: riziko × stabilita pravidiel" {...nav}>

      <p>Keď rozmýšľaš nad automatizáciou, najťažšie nie je „ako to spraviť", ale <strong>čo vôbec automatizovať</strong>.</p>
      <p>A aby si sa nerozhodoval pocitom, použijeme jednoduchú pomôcku: <strong>rozhodovací diamant</strong>.</p>
      <p>👉 Diamant má 2 otázky:</p>
      <ol>
        <li><strong>Ako stabilné sú pravidlá?</strong>
          <ul>
            <li>stabilné = proces je stále rovnaký, dá sa presne opísať</li>
            <li>nestabilné = veľa výnimiek, mení sa to podľa situácie</li>
          </ul>
        </li>
        <li><strong>Aký veľký je dopad chyby? (riziko)</strong>
          <ul>
            <li>nízky dopad = keď sa pomýliš, nič vážne sa nestane</li>
            <li>vysoký dopad = chyba bolí (peniaze, zákazník, reputácia, citlivé dáta)</li>
          </ul>
        </li>
      </ol>

      <h3>✅ Ako sa rozhodnúť (jednoduché pravidlo)</h3>
      <p><strong>🟩 Stabilné pravidlá + nízke riziko → bezAI automatizácia</strong></p>
      <ul>
        <li>ide to jasne popísať</li>
        <li>chyba nič zásadné nespôsobí</li>
        <li>typicky rutiny a mechanické kroky</li>
      </ul>

      <p><strong>🟨 Stabilné pravidlá + vyššie riziko → poloAI alebo automat s kontrolou</strong></p>
      <ul>
        <li>pravidlá sú jasné, ale chyba je drahá</li>
        <li>preto chceš kontrolný bod: „AI navrhne / systém spraví → človek schváli"</li>
      </ul>

      <p><strong>🟧 Nestabilné pravidlá + nízke riziko → AI copilot</strong></p>
      <ul>
        <li>veľa výnimiek, potrebuješ úsudok</li>
        <li>AI pomôže, ale človek rozhoduje</li>
        <li>skvelé na texty, sumarizácie, návrhy</li>
      </ul>

      <p><strong>🟥 Nestabilné pravidlá + vysoké riziko → manuál (alebo veľmi opatrný copilot)</strong></p>
      <ul>
        <li>toto je najrizikovejšia zóna</li>
        <li>ak aj použiješ AI, tak len ako „pomocníka", nie ako vykonávateľa</li>
      </ul>

      <h3>🧠 Príklad z práce: odpoveď na opakujúci sa e-mail 📩</h3>
      <ul>
        <li>Ak odpovedáš na internú otázku v tíme a pravidlá sú stabilné → môžeš ísť k automatizácii alebo poloAI.</li>
        <li>Ak odpovedáš zákazníkovi a vec sa často líši podľa kontextu → väčšinou to bude <strong>copilot</strong> alebo <strong>manuál</strong>, lebo riziko je vyššie.</li>
      </ul>
      <p>👉 V praxi: čím viac to ide „von", tým viac chceš kontrolu.</p>

      <h3>🧠 Príklad z osobného života: domáce financie 💳</h3>
      <ul>
        <li>Pravidelné platby (nájom, Spotify) majú stabilné pravidlá a nízky dopad → vhodné na automatizáciu.</li>
        <li>Nejasné transakcie („čo to je za obchodníka?") majú nestabilné pravidlá → skôr copilot.</li>
        <li>Podozrivá platba alebo niečo, čo môže byť podvod → radšej manuál.</li>
      </ul>

      <MiniTask title="Diamant v praxi (na domácich financiách) 💳💎">
        <p><strong>Zadanie</strong></p>
        <p>Vezmi si svoj proces „domáce financie" z mini-úloh (6–8 krokov) a ku každému kroku dopíš:</p>
        <ul>
          <li><strong>Stabilita pravidiel:</strong> stabilné / nestabilné</li>
          <li><strong>Riziko chyby:</strong> nízke / vysoké</li>
          <li>a podľa toho zvoľ: <strong>bezAI / poloAI / copilot / manuál</strong></li>
        </ul>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Ku každému kroku dopíš „stabilita" + „riziko".</li>
          <li>Priraď výsledok podľa diamantu (bezAI / poloAI / copilot / manuál).</li>
          <li>Pridaj 1 vetu: <strong>kde by si dal kontrolný bod</strong> (ak niečo ide „von" alebo má vyššie riziko).</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna)</strong></p>
        <ol>
          <li>Krok: …<br />Stabilita: … | Riziko: … → Výsledok: …</li>
          <li>Krok: …<br />Stabilita: … | Riziko: … → Výsledok: …</li>
        </ol>
        <p><strong>Kontrolný bod:</strong> „Zastavím sa a skontrolujem pri kroku č. …, lebo …"</p>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> každý krok má stabilitu + riziko + výsledok.</li>
          <li><strong>⭐ Dobré:</strong> vieš vysvetliť aspoň 2 kroky, prečo sú copilot/manuál.</li>
          <li><strong>🌟 Výborné:</strong> máš jasne pomenovaný kontrolný bod.</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
