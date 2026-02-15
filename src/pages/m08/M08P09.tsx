import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTask } from "@/components/ContentBlocks";

export default function M08P09() {
  const nav = getNavContext("m08-09-mikrosablony");
  return (
    <PageShell title="7️⃣ Praktické mikrošablóny pre AI: 4E v praxi 📋" {...nav}>

      <p>V predošlých lekciách sme si ukázali, že kroky v procese sa často dajú pomenovať ako:</p>
      <ul>
        <li><strong>Extract</strong></li>
        <li><strong>Explain</strong></li>
        <li><strong>Edit</strong></li>
        <li><strong>Evaluate</strong></li>
      </ul>
      <p>Teraz z toho spravíme niečo veľmi praktické:</p>
      <p>👉 ku každému typu dáme jednoduchú mikrošablónu, ktorú môžeš skopírovať a používať ako „prompt kostru".</p>
      <p>Tieto šablóny sú užitočné aj vtedy, keď ešte nič neautomatizuješ.</p>
      <p>Sú to vlastne <strong>stabilné mikro-kroky</strong>, ktoré sa neskôr dajú preniesť aj do automatizácie.</p>

      <h3>1) Extract – „Vytiahni z toho to podstatné" 🧲</h3>
      <p><strong>Kedy použiť</strong></p>
      <p>Keď máš text alebo dáta a chceš z nich dostať jasné položky: sumy, mená, dátumy, témy, transakcie, úlohy.</p>
      <p><strong>Mikrošablóna</strong></p>
      <p>„Z tohto obsahu vytiahni [čo presne].<br />Výstup daj vo formáte: [zoznam / tabuľka / JSON].<br />Ak niečo chýba alebo je nejasné, označ to ako 'NEJASNÉ'."</p>
      <p><strong>Príklad (domáce financie)</strong></p>
      <p>„Z tohto zoznamu transakcií vytiahni: obchodník, suma, dátum a navrhni kategóriu.<br />Výstup daj ako tabuľku. Nejasné položky označ 'NEJASNÉ'."</p>

      <h3>2) Explain – „Vysvetli mi to jednoducho" 🧠</h3>
      <p><strong>Kedy použiť</strong></p>
      <p>Keď chceš z výpisu, reportu alebo súhrnu spraviť rýchle a zrozumiteľné zistenia.</p>
      <p><strong>Mikrošablóna</strong></p>
      <p>„Zhrň to do [počet] bodov.<br />Píš jednoduchým jazykom.<br />Na konci dopíš 1 vetu: 'Najväčší vplyv má…'"</p>
      <p><strong>Príklad (domáce financie)</strong></p>
      <p>„Zhrň moje výdavky za týždeň do 5 bodov.<br />Na konci napíš: 'Najväčší vplyv má…'"</p>

      <h3>3) Edit – „Uprav mi to do použiteľnej formy" ✍️</h3>
      <p><strong>Kedy použiť</strong></p>
      <p>Keď chceš upraviť text, šablónu, pravidlá kategórií, poznámky — aby to bolo konzistentné a jasné.</p>
      <p><strong>Mikrošablóna</strong></p>
      <p>„Preformuluj tento text tak, aby bol: [krátky / vecný / priateľský / formálny].<br />Zachovaj význam.<br />Maximálne [počet] viet."</p>
      <p><strong>Príklad (práca – e-maily)</strong></p>
      <p>„Uprav tento návrh odpovede, aby bol vecný a milý. Max 6 viet.<br />Na konci pridaj 1 otázku na doplnenie údajov."</p>

      <h3>4) Evaluate – „Skontroluj a vyhodnoť" ✅</h3>
      <p><strong>Kedy použiť</strong></p>
      <p>Keď chceš kontrolu kvality: či niečo dáva zmysel, či niečo nechýba, či je niečo podozrivé, alebo čo zlepšiť.</p>
      <p><strong>Mikrošablóna</strong></p>
      <p>„Skontroluj tento výstup podľa kritérií: [1–3 kritériá].<br />Nájdi chyby alebo riziká.<br />Navrhni 3 zlepšenia.<br />Ak si nie si istý, napíš 'NEISTÉ' a prečo."</p>
      <p><strong>Príklad (domáce financie)</strong></p>
      <p>„Skontroluj moje kategórie výdavkov.<br />Kritériá: (1) logická kategória, (2) žiadne veľké nejasné položky.<br />Nájdi 3 podozrivé/nejasné položky a navrhni, čo s nimi."</p>

      <h3>✅ Zhrnutie: kde sa to hodí v procese</h3>
      <ul>
        <li><strong>Extract</strong> – „zober dáta a sprav z nich položky"</li>
        <li><strong>Explain</strong> – „sprav z toho zrozumiteľný obraz"</li>
        <li><strong>Edit</strong> – „uprav, aby sa to dalo použiť"</li>
        <li><strong>Evaluate</strong> – „skontroluj a nájdi problémy"</li>
      </ul>
      <p>A teraz už máš v rukách „lego kocky", ktoré vieš skladať do procesu.</p>

      <MiniTask title="2 mikrošablóny na domáce financie 💳📋">
        <p><strong>Zadanie</strong></p>
        <p>Použi svoj proces „domáce financie" a vyber si <strong>2 kroky</strong>, kde by sa AI hodila.</p>
        <p>Pre každý krok vyber jednu mikrošablónu:</p>
        <ul>
          <li>buď <strong>Extract</strong></li>
          <li>alebo <strong>Explain</strong></li>
          <li>alebo <strong>Edit</strong></li>
          <li>alebo <strong>Evaluate</strong></li>
        </ul>
        <p><strong>Kroky</strong></p>
        <ol>
          <li>Vyber 2 kroky z procesu (napr. kategorizácia + týždenné zhrnutie).</li>
          <li>Ku každému kroku napíš konkrétny prompt podľa mikrošablóny (2–4 vety stačia).</li>
          <li>Napíš, aký má byť výstup (zoznam / tabuľka / 5 bodov / 3 odporúčania…).</li>
        </ol>
        <p><strong>Očakávaný výstup (šablóna)</strong></p>
        <p><strong>Krok 1:</strong> …</p>
        <p><strong>Typ šablóny:</strong> Extract / Explain / Edit / Evaluate</p>
        <p><strong>Prompt:</strong> …</p>
        <p><strong>Výstup:</strong> …</p>
        <p><strong>Krok 2:</strong> …</p>
        <p><strong>Typ šablóny:</strong> Extract / Explain / Edit / Evaluate</p>
        <p><strong>Prompt:</strong> …</p>
        <p><strong>Výstup:</strong> …</p>
        <p><strong>Rubrika (rýchla kontrola)</strong></p>
        <ul>
          <li><strong>✅ Splnené:</strong> mám 2 prompty + jasne popísaný výstup.</li>
          <li><strong>⭐ Dobré:</strong> prompty sú konkrétne (čo presne, aký formát).</li>
          <li><strong>🌟 Výborné:</strong> v promptoch je ošetrené „čo ak je niečo nejasné" (napr. označ NEJASNÉ).</li>
        </ul>
      </MiniTask>
    </PageShell>
  );
}
