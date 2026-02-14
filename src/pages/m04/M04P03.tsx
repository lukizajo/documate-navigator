import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest, MiniTask, ExpectedFinding } from "@/components/ContentBlocks";

export default function M04P03() {
  const nav = getNavContext("m04-03-struktura");
  return (
    <PageShell title="2️⃣ Štruktúra kontextu: menej šumu, viac signálu" tldr={[
      "Rozdeľ kontext na Stabilné (platí stále) a Aktuálne (platí teraz)",
      "5 ingrediencií: Priority, Deal-breaker, Zdroje, Kritériá, 1 otázka",
      "Šum = info, ktorá nemení rozhodnutie, len zaberá miesto",
    ]} {...nav}>

      <p>V M2 si skladal prompt zo stavebných blokov (úloha, rola, formát…).</p>
      <p>V M3 riešime niečo iné: <strong>čo z kontextu je signál a čo je šum</strong> — a ako to poskladať tak, aby AI trafila tvoju realitu, nie priemer.</p>

      <h3>🧩 2 košíky kontextu (toto je M3 rozdiel)</h3>
      <p>Keď chceš, aby odpovede boli konzistentné, rozdeľ kontext na dve časti:</p>
      <p><strong>🧱 Stabilné (platí „stále")</strong></p>
      <p>Sem patrí to, čo sa nemení z úlohy na úlohu:</p>
      <ul>
        <li>štýl (stručne / ľudsky / bez žargónu)</li>
        <li>hranice (čo nechcem, citlivosť, súkromie)</li>
        <li>pravidlá presnosti (nevymýšľaj, radšej sa opýtaj)</li>
      </ul>
      <p><strong>Mini príklad:</strong></p>
      <p>„Píš stručne, prakticky. Ak niečo nevieš, povedz 'neviem' alebo polož 1 otázku. Nevymýšľaj fakty."</p>

      <p><strong>🎯 Aktuálne (platí „teraz")</strong></p>
      <p>Sem patrí to, čo sa týka iba tejto jednej úlohy:</p>
      <ul>
        <li>konkrétna situácia</li>
        <li>parametre (rozpočet, čas, preferencie)</li>
        <li>konkrétna požiadavka na výstup</li>
      </ul>
      <p><strong>Mini príklad:</strong></p>
      <p>„Chcem vybrať mobil do 15 000 Kč, fotím v interiéri, nechcem veľký, batéria má vydržať celý deň."</p>
      <p>👉 Pointa: keď to premiešaš do jedného bloku, AI často nevie, čo je pravidlo a čo je detail. Keď to rozdelíš, odpovede sa stabilizujú.</p>

      <h3>🧩 5 "M3 ingrediencií" (čo naozaj mení kvalitu)</h3>
      <p>Tieto veci sú rozdiel medzi „pekne napísané" a „trafilo to presne":</p>
      <p><strong>🎯 Priority</strong></p>
      <p>Čo je najdôležitejšie? (1–3 body)</p>
      <p><strong>Príklad:</strong> „1) fotky večer, 2) batéria, 3) veľkosť"</p>
      <p><strong>🚫 Deal-breaker</strong></p>
      <p>Čomu sa chceš vyhnúť?</p>
      <p><strong>Príklad:</strong> „Nech sa to nezačne sekať po roku."</p>
      <p><strong>📚 Zdroje / režim faktov</strong></p>
      <p>Z čoho môže AI čerpať? A čo má robiť, keď to nevie?</p>
      <p><strong>Príklad:</strong> „Bez webu. Keď si nie si istý, povedz neviem."</p>
      <p><strong>🧪 Kritériá rozhodnutia</strong></p>
      <p>Ako má AI porovnávať možnosti?</p>
      <p><strong>Príklad:</strong> „Pri každej možnosti: prečo áno / prečo nie / riziko."</p>
      <p><strong>❓ 1 otázka na spresnenie</strong></p>
      <p>Ak chýba kľúčový detail, nech sa AI opýta (nie domýšľa).</p>
      <p><strong>Príklad:</strong> „Preferuješ menší displej alebo väčší?"</p>

      <h3>👉 Ako to napísať (kopírovateľná šablóna)</h3>
      <div className="rounded-lg p-4 my-4 border bg-muted/50 text-sm font-mono whitespace-pre-line">
{`🧱 Stabilné:
• Štýl: …
• Pravidlá: … (nevymýšľaj / pýtaj sa / citlivosť)
• Zdroje: … (bez webu / len z textu)

🎯 Aktuálne:
• Situácia: …
• Priority (1–3): …
• Deal-breaker: …
• Úloha: …
• Výstup: … (porovnanie / tabuľka / odrážky)`}
      </div>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>Nekŕm AI detailmi, ktoré <strong>nemenia rozhodnutie</strong> (to je šum).</li>
        <li>Bez „režimu faktov" (zdroje/bez webu/nevymýšľaj) má AI tendenciu dopĺňať si príbeh.</li>
        <li>Priority bez poradia sú slabé. „Dôležité je fotenie aj batéria aj cena" = AI nevie, čo má vyhrať.</li>
      </ul>

      <MiniTask title="šum vs relevantné (A/B)">
        <p><strong>Situácia</strong></p>
        <p>Chceš si vybrať mobil bez toho, aby si strávil večer googlením.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI najprv Prompt 1 a potom Prompt 2. Výsledky si ulož vedľa seba a porovnaj.</p>
        <p><strong>❌ Prompt 1 (veľa textu, ale šum)</strong></p>
        <p>„Odporuč mi mobil do 15 000 Kč. Chcem dobrý foťák a batériu. Môže byť akákoľvek značka. Videl som niekde Samsung a Xiaomi. Neviem, či je lepší AMOLED alebo LCD. Nech to má dosť pamäte a nech sa mi tam zmestia fotky. A chcem, aby vyzeral pekne. Daj mi 3 tipy a napíš k nim plusy a mínusy."</p>
        <p><strong>✔️ Prompt 2 (menej textu, viac signálu)</strong></p>
        <p>„Stabilné: Píš stručne a prakticky. Ak si nie si istý, povedz 'neviem' alebo polož 1 otázku. Bez webu. Aktuálne: Mobil do 15 000 Kč. Fotím najmä deti a jedlo v interiéri, nechcem veľký mobil, batéria má vydržať celý deň. Priority: (1) fotky v horšom svetle, (2) batéria, (3) plynulosť. Deal-breaker: nech sa neseká po roku. Úloha: Navrhni 3 modely. Pri každom: 2× 'prečo áno', 1× 'prečo nie', a 1 riziko. Na konci polož 1 otázku, ktorá mi pomôže výber spresniť."</p>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Spomenul výstup z Promptu 2 priamo moje priority (horšie svetlo, batéria, plynulosť), alebo ostal všeobecný?</p>
        <p>Drží sa Prompt 2 toho, že <strong>bez webu</strong> a keď nevie, tak sa radšej opýta (nehrá sa na všetko-viem)?</p>
        <p>Je pri každom modeli naozaj <strong>2× „prečo áno", 1× „prečo nie" a 1 riziko</strong>, alebo to AI odbila?</p>
        <p>Položila AI na konci 1 otázku, ktorá reálne pomáha rozhodnúť (nie len formálna otázka)?</p>
        <p>Ignoroval Prompt 1 niektoré dôležité veci alebo sa chytil nepodstatností (AMOLED/LCD, "aby vyzeral pekne")?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Prompt 2 dá odporúčania viac na mieru, lebo má priority, deal-breaker a režim faktov — a výber sa z toho robí ľahšie.</p>
        <p>Prompt 1 často prinesie všeobecné tipy a veľa "katalógových" plusov/mínusov.</p>
      </ExpectedFinding>

      <MiniTest
        question={`Ktor\u00e9 2 mo\u017enosti pou\u017e\u00edvaj\u00fa \u201eM3 \u0161trukt\u00faru\u201c spr\u00e1vne (priority + deal-breaker + re\u017eim faktov / ot\u00e1zka) a preto s\u00fa najpredv\u00eddate\u013enej\u0161ie? Vyber 2.`}
        options={[
          { label: "\ud83c\udf15", text: `\u201eOdporu\u010d mi mobil do 15 000 K\u010d. Chcem dobr\u00fd fo\u0165\u00e1k a bat\u00e9riu. Daj 3 tipy.\u201c` },
          { label: "\u2b50", text: `\u201eStabiln\u00e9: p\u00ed\u0161 stru\u010dne. Aktu\u00e1lne: mobil do 15 000 K\u010d. \u00daloha: odporu\u010d 3 tipy.\u201c` },
          { label: "\u2600\ufe0f", text: `\u201eStabiln\u00e9: bez webu, ak si nie si ist\u00fd povedz 'neviem' alebo polo\u017e 1 ot\u00e1zku. Aktu\u00e1lne: mobil do 15 000 K\u010d, fotky v interi\u00e9ri, nechcem ve\u013ek\u00fd, bat\u00e9ria cel\u00fd de\u0148. Priority: (1) ve\u010dern\u00e9 fotky, (2) bat\u00e9ria, (3) plynulos\u0165. Deal-breaker: nech sa nesek\u00e1. \u00daloha: 3 modely + pre\u010do \u00e1no/nie + riziko + 1 ot\u00e1zka.\u201c` },
          { label: "\ud83c\udf11", text: `\u201eMobil do 15 000 K\u010d. Priority: ve\u010dern\u00e9 fotky a bat\u00e9ria. Deal-breaker: nech sa nesek\u00e1. \u00daloha: 3 modely + pre\u010do \u00e1no/nie + riziko. Ak nie\u010do nevie\u0161, polo\u017e 1 ot\u00e1zku.\u201c` },
        ]}
        correct="☀️🌑"
        explanation={`Maj\u00fa priority, deal-breaker a aj pravidlo proti dom\u00fd\u0161\u013eaniu (explicitne alebo formou ot\u00e1zky). \ud83c\udf15 a \u2b50 s\u00fa pr\u00edli\u0161 v\u0161eobecn\u00e9 a nech\u00e1vaj\u00fa ve\u013ea priestoru na \u201epriemer\u201c.`}
      />
    </PageShell>
  );
}
