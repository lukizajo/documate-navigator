import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask, MiniTest, ExpectedFinding } from "@/components/ContentBlocks";

const nav = getNavContext("li-03-procesna-mapa");

export default function LIP03() {
  return (
    <PageShell title="2️⃣ Procesná mapa" prev={nav.prev} next={nav.next}>
      <p>Procesná mapa nie je dokumentácia. Je to rýchly spôsob, ako zistiť, či je proces pripravený na automatizáciu. Keď sa v mape stratíš ty, v nástroji sa stratíš dvojnásobne. Najväčší prínos mapy je, že odhalí výnimky a miesta, kde musí byť STOP/NEED_REVIEW.</p>
      <p>👉 <strong>Ak to nevieš napísať na papier do 6–10 krokov, ešte to nie je pripravené na automatizáciu.</strong></p>

      <h3>✅ 3 pravidlá mapy</h3>
      <p>1️⃣ <strong>Jedna akcia = jeden krok</strong></p>
      <p>Nie: {"\u201E"}spracujem lead a nastavím follow-up a pošlem…{"\u201C"}</p>
      <p>Áno: {"\u201E"}Zapíšem lead{"\u201C"} → {"\u201E"}Vyberiem kategóriu{"\u201C"} → {"\u201E"}Pošlem email{"\u201C"}</p>
      <p>2️⃣ <strong>Každý krok začína slovesom</strong></p>
      <p>Skontrolujem / Zapíšem / Pošlem / Zastavím… (núti ťa byť konkrétny).</p>
      <p>3️⃣ <strong>Jeden rozhodovací bod stačí (na začiatok)</strong></p>
      <p>Napr. {"\u201E"}ak chýba MUST → STOP/NEED_REVIEW{"\u201C"}.</p>

      <h3>🧩 Mini-šablóna mapy</h3>
      <p>Trigger → Validácia → Spracovanie → Rozhodnutie → Výstup → Log</p>

      <h3>🧠 Mikropríklad mapy (6 krokov)</h3>
      <ol>
        <li>Príde nový podnet (email / formulár / riadok v tabuľke).</li>
        <li>Skontrolujem, či sú vyplnené MUST vstupy.</li>
        <li>Ak chýba MUST → STOP/NEED_REVIEW.</li>
        <li>Zapíšem podnet do cieľového miesta (tabuľka/CRM/ticket).</li>
        <li>Pošlem notifikáciu alebo výstup (email/Teams/Slack).</li>
        <li>Uložím log (čas, status, vstup, výstup).</li>
      </ol>

      <h3>❗ Na čo si dať pozor</h3>
      <ul>
        <li>{"\u201E"}A potom ešte…{"\u201C"} → proces sa rozrastá, vráť sa na MVP.</li>
        <li>Neurčité kroky ({"\u201E"}vyhodnotím{"\u201C"}, {"\u201E"}spracujem{"\u201C"}) → prelož na konkrétnu akciu.</li>
        <li>Skryté rozhodnutia v hlave ({"\u201E"}to je jasné{"\u201C"}) → napíš ich ako pravidlo alebo STOP.</li>
      </ul>

      <h3>🔧 Mini-debugging, keď je mapa chaotická</h3>
      <ol>
        <li>Vyškrtni všetko, čo nie je potrebné pre MVP (nechaj len jadro).</li>
        <li>Spoj administratívne kroky, ktoré nič nemenia na logike (ale nech sú jasné).</li>
        <li>Pridaj 1 rozhodnutie: {"\u201E"}ak chýba MUST → STOP/NEED_REVIEW{"\u201C"}.</li>
      </ol>
      <p>👉 Skús mapu prečítať nahlas. Ak v nej musíš dopĺňať veci z hlavy, mapa nie je hotová.</p>

      <MiniTask>
        <p><strong>Situácia</strong></p>
        <p>Máš vybraný proces a potrebuješ ho rozkresliť tak, aby si ho vedel preniesť do ľubovoľného nástroja.</p>
        <p><strong>Inštrukcia</strong></p>
        <ol>
          <li>Napíš procesnú mapu v <strong>6–10 krokoch</strong>.</li>
          <li>Každý krok začni slovesom (Skontrolujem / Rozdelím / Zapíšem / Pošlem…).</li>
          <li>Označ aspoň <strong>1 miesto rozhodnutia</strong> (napr. {"\u201E"}ak chýba údaj → STOP/NEED_REVIEW{"\u201C"}).</li>
          <li>Ulož si to ako <strong>J2_map_v1</strong>.</li>
        </ol>
        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <ul>
          <li>Je jasné, kde proces začína a kde končí?</li>
          <li>Má každý krok konkrétne sloveso (nie {"\u201E"}nejako spravím{"\u201C"})?</li>
          <li>Je tam aspoň jedno rozhodnutie (áno/nie alebo A/B)?</li>
          <li>Je mapa stále v rámci MVP (nie 20 krokov)?</li>
        </ul>
        <ExpectedFinding>
          Keď máš mapu, prestaneš {"\u201E"}klikať naslepo{"\u201C"} a vieš presne, čo má automatizácia robiť a kde potrebujú byť brzdy.
        </ExpectedFinding>
      </MiniTask>

      <MiniTest
        question="Prečo mapu robíme predtým, než ideme do nástroja?"
        options={[
          { label: "🌕", text: "Lebo sa vyhneme tomu, že budeme \u201Eklikať naslepo\u201C bez jasného triggeru, výstupu a kontrolných bodov." },
          { label: "⭐", text: "Lebo je to povinná dokumentácia." },
          { label: "☀️", text: "Lebo nástroje sú pomalé." }
        ]}
        correct="🌕"
        explanation="Najprv si ujasníš logiku procesu, až potom riešiš nástroj."
      />
    </PageShell>
  );
}
