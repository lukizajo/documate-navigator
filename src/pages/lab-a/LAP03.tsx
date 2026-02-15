import { PageShell } from "@/components/PageShell";
import { PromptBlock } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("la-03-otazky");

export default function LAP03() {
  return (
    <PageShell title="LAB A – AI & Myslenie 🧠" prev={nav.prev} next={nav.next}>
      <h2>2️⃣ Otázky sú dôležitejšie než odpovede</h2>
      <p>Keď sa ľudia pýtajú AI, často to vyzerá takto: „Napíš mi…", „Poradíš mi…", „Daj mi riešenie…".</p>
      <p>AI potom spraví to, čo vie najlepšie – vyrobí odpoveď. Lenže ak je otázka nejasná, odpoveď bude síce pekná, ale často nepoužiteľná.</p>
      <p>❓ V praxi je dôležitejšie naučiť sa jednu vec: <strong>pýtať sa tak, aby si najprv získal jasno</strong>.</p>
      <p>Namiesto „daj mi odpoveď" chceš „pomôž mi premýšľať".</p>

      <hr />

      <h3>🧩 Dva typy otázok</h3>
      <p>🚦 <strong>Zatvorená otázka</strong> (AI „zamkne" smer)</p>
      <p>„Je lepšie spraviť A alebo B?"</p>
      <p>🌱 <strong>Otvorená otázka</strong> (AI „odkryje priestor")</p>
      <p>„Aké mám možnosti, aké sú ich plusy/mínusy a čo mi pri rozhodovaní ešte chýba?"</p>
      <p>✅ Otvorená otázka ti dá viac hodnoty, lebo nepredstiera, že už máš všetko potrebné.</p>

      <hr />

      <h3>🎯 Ako vylepšiť otázku v 3 krokoch</h3>
      <p>1️⃣ <strong>Povedz cieľ</strong></p>
      <p>Čo chceš dosiahnuť? (výsledok, nie aktivitu)</p>
      <p>2️⃣ <strong>Povedz obmedzenia</strong></p>
      <p>Čo platí, čo neplatí, čo nemôžeš, čo nechceš?</p>
      <p>3️⃣ <strong>Povedz, ako má AI postupovať</strong></p>
      <p>Najprv otázky → potom varianty → až potom odporúčanie.</p>

      <hr />

      <h3>🧩 Mikropríklad</h3>
      <p><strong>💬 Slabá otázka:</strong></p>
      <p>„Ako si mám lepšie zorganizovať deň?"</p>
      <p><strong>✅ Lepšia otázka:</strong></p>
      <p>„Chcem mať menej chaosu počas dňa a večer pocit, že som spravil dôležité veci. Mám 6 hodín čistého času, z toho 2 hodiny meetingy. Najprv sa ma opýtaj 5 otázok, aby si pochopil moje priority a energiu počas dňa. Potom mi navrhni 3 varianty denného plánu a ku každému povedz riziko, kde sa to môže rozpadnúť."</p>
      <p>🧠 Všimni si, že kľúčové nie je „dlhší prompt". Kľúčové je, že si AI prinútil premýšľať v krokoch.</p>

      <hr />

      <PromptBlock>„Najprv sa ma opýtaj otázky, ktoré potrebuješ, aby si mi vedel dobre poradiť."</PromptBlock>
    </PageShell>
  );
}
