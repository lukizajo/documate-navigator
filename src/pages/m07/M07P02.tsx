import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M07P02() {
  const nav = getNavContext("m07-02-kazdodenne");
  return (
    <PageShell title="1️⃣ AI v každodenných úlohách" {...nav}>

      <p>AI vie v bežnom živote <strong>ušetriť</strong> najviac času na veciach, ktoré sú opakované, „mentálne otravné" a často sa odkladajú. Nie preto, že by to spravila lepšie než ty — ale preto, že ti dá <strong>rýchly prvý návrh</strong>, z ktorého si vyberieš a doladíš.</p>
      <p>Keď AI dáš jasnú úlohu, krátky kontext a povieš, aký výstup chceš, z „odpovedača na otázky" sa stane <strong>praktický pomocník</strong>.</p>

      <h3>🧩 Typické situácie, kde AI reálne pomáha</h3>

      <p>🍝 <strong>{"\u201EDošli mi nápady na jedlo… zase točíme to isté dokola.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> vymyslí nové nápady podľa toho, čo máte radi, čo doma zvykneš variť a koľko na to máš času.</p>
      <p><strong>Výstup:</strong> 5–10 návrhov jedál + rotácia na 3 dni (aby sa neopakovali).</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Došli mi nápady na jedlo. Sme ___ (napr. 2 dospelí + 1 dieťa). Máme radi: ___. Nechceme stále to isté: ___. Čas na varenie: max __ min. Navrhni 10 nápadov na večere, aby sa neopakovali, a vyber z nich plán na 3 dni."</p>

      <p>🛒 <strong>{"\u201EChcem jesť zdravo a potrebujem nákupný zoznam, aby mi nič nechýbalo.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> premení jedlá na kompletný nákupný zoznam a zníži počet „výletov do obchodu".</p>
      <p><strong>Výstup:</strong> nákupný zoznam na 3 dni pre rodinu + rozdelenie podľa kategórií.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Chceme jesť zdravo a viem, čo chceme jesť tieto 3 dni: Deň 1: ___. Deň 2: ___. Deň 3: ___. Sprav mi kompletný nákupný zoznam pre ___ ľudí. Rozdeľ to podľa kategórií a pripíš orientačné množstvá. Cieľ: nech nemusím ísť do obchodu 3×."</p>

      <p>🗓️ <strong>{"\u201EMám milión úloh a na konci dňa som vyčerpaný – neviem, čo skôr.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> pomôže roztriediť úlohy, znížiť chaos a spraviť realistický plán.</p>
      <p><strong>Výstup:</strong> 3 priority, časové bloky, „minimum verzia dňa" + odporúčanie čo odložiť.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Som preťažený a mám tieto úlohy: ___. Mám čas od __ do __. Energie: nízka/stredná/vysoká. Roztrieď úlohy na: dnes nutné / môže počkať / delegovať. Potom mi sprav plán dňa v blokoch. Na konci daj 1 vec, ktorú môžem bez výčitiek vyhodiť."</p>

      <p>🧭 <strong>{"\u201EChcem odporúčanie a plán – výlet, víkend, program – nech to nemusím skladať od nuly.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> navrhne program, alternatívy a praktické detaily (tempo, rozpočet, presuny).</p>
      <p><strong>Výstup:</strong> itinerár + 2 alternatívy + odhad rozpočtu.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Navrhni mi plán na ___ (1 deň / víkend) v ___ (mesto/okolie). Sme ___ (počet ľudí). Máme radi: ___. Tempo: pokojné/aktívne. Rozpočet: ___. Daj itinerár po blokoch + 2 alternatívy (ak prší / ak sme unavení)."</p>

      <p>💬 <strong>{"\u201EViem, čo chcem povedať, ale nechcem sa trápiť formuláciou.\u201C"}</strong></p>
      <p><strong>Ako pomôže AI:</strong> ty dáš obsah, AI to zabalí do jasnej, slušnej správy a vie meniť tón za pár sekúnd.</p>
      <p><strong>Výstup:</strong> 3 tónové verzie (jemná / neutrálna / priama) + krátka verzia.</p>
      <p><strong>Mini-prompt:</strong></p>
      <p>„Napíš správu. Obsah, ktorý tam musí byť: ___. Cieľ: ___. Daj 3 verzie: jemná, neutrálna, priama. Na konci pridaj aj krátku SMS verziu do 250 znakov."</p>

      <h3>🧠 Malé pravidlo, ktoré ti ušetrí polovicu sklamaní</h3>
      <p>Aby AI nebola len „odpovedač", vždy jej daj:</p>
      <ol>
        <li><strong>Úlohu</strong> čo má spraviť</li>
        <li><strong>Kontext</strong> s čím pracuje</li>
        <li><strong>Výstup</strong> v akej forme to chceš</li>
      </ol>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Pri jedle vždy <strong>dopíš obmedzenia</strong> (alergie, „nejem", preferencie), inak bude AI hádať</li>
        <li>Pri výletoch a odporúčaniach si <strong>over praktické veci</strong> (otváracie hodiny, doprava, rezervácie)</li>
        <li>Keď ti AI dá príliš veľa textu, skráť zadanie „max 7 bodov, bez omáčky"</li>
        <li>Citlivé údaje (deti, zdravie, financie, rodinné konflikty) radšej <strong>anonymizuj</strong> alebo rieš bez detailov</li>
      </ul>

      <MiniTask title="Rastlina doma 🪴">
        <p><strong>Zadanie</strong></p>
        <p>Odfotíš aspoň 1 rastlinu, ktorú máš doma (kvet v črepníku, bylinka, čokoľvek). Nahraj fotku do AI a nechaj si poradiť, čo to je a ako sa o to starať.</p>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Odfot rastlinu (ideálne: celá rastlina + detail listu)</li>
          <li>Nahraj fotku do AI a napíš: kde stojí (okno/svetlo), ako často polievaš, či má problém</li>
          <li>Nech AI vráti stručný plán starostlivosti (svetlo, zálievka, substrát, čo nerobiť)</li>
          <li>Vyber 1 odporúčanie a aplikuj ho dnes (napr. presun, zálievka, odstránenie suchých listov)</li>
        </ol>
        <p><strong>Očakávaný výstup</strong></p>
        <ul>
          <li>názov rastliny (alebo 2–3 možnosti, ak si nie je istá)</li>
          <li>5-bodový mini plán starostlivosti</li>
          <li>1 zmena, ktorú spravíš hneď dnes</li>
        </ul>
        <p><strong>💡 Tip:</strong> Ak sa v rastlinách vyznáš, skús vedome overiť, či AI netrafila vedľa. Ak sa nevyznáš, aspoň sa naučíš základy a budeš mať „štartovací plán".</p>
      </MiniTask>
    </PageShell>
  );
}
