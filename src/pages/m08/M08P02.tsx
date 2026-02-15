import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { MiniTest } from "@/components/ContentBlocks";

export default function M08P02() {
  const nav = getNavContext("m08-02-co-je-automatizacia");
  return (
    <PageShell title="1️⃣ Čo je automatizácia (a čo automatizácia nie je)" {...nav}>

      <p>V predošlých moduloch sme riešili, <strong>ako AI používať v praxi</strong> – v práci aj doma. Teraz robíme ďalší krok: <strong>ako dostať opakované činnosti do procesu</strong> a postupne z nich spraviť niečo, čo sa dá zjednodušiť, zrýchliť alebo automatizovať.</p>
      <p>Keď povieš „automatizácia", veľa ľudí si predstaví niečo technické, komplikované alebo „pre programátorov". V praxi je to jednoduchšie.</p>
      <p><strong>👉 Automatizácia je postup, ktorý sa vykoná za teba opakovane podľa pravidiel.</strong></p>
      <p>A aby sme sa v tom nestratili, potrebujeme si ujasniť 3 pojmy, ktoré ľudia často miešajú:</p>
      <ul>
        <li><strong>Automatizácia</strong></li>
        <li><strong>AI copilot</strong></li>
        <li><strong>AI agent</strong></li>
      </ul>

      <h3>✅ Automatizácia (aj bez AI)</h3>
      <p><strong>Automatizácia</strong> je, keď sa niečo deje <strong>samo podľa pravidiel</strong>. Dôležité: automatizácia môže byť:</p>
      <ul>
        <li><strong>bez AI</strong> (čisto pravidlá „ak X, tak Y")</li>
        <li><strong>s AI</strong> (AI je súčasť jedného kroku – napr. zhrnutie, triedenie, extrakcia)</li>
      </ul>
      <p><strong>Príklad bez AI (pravidlová automatizácia):</strong></p>
      <ul>
        <li>Keď príde e-mail s predmetom „FAKTÚRA", automaticky sa uloží do priečinka „Faktúry" a pošle sa notifikácia.</li>
      </ul>
      <p><strong>Príklad s AI:</strong></p>
      <ul>
        <li>Keď príde e-mail od zákazníka, AI ho najprv zatriedi (billing / support / feedback) a až potom sa spustí ďalší krok.</li>
      </ul>
      <p>👉 <strong>Automatizácia je o pravidlách a procese</strong>, nie o tom, či tam je AI.</p>

      <h3>✅ AI copilot (AI pomocník)</h3>
      <p><strong>AI copilot</strong> je, keď AI <strong>pomáha človeku</strong>, ale človek je stále „pri volante".</p>
      <p>AI navrhne, zhrnie, pripraví draft… no ty to ešte <strong>skontroluješ a rozhodneš</strong>.</p>
      <p><strong>Príklady:</strong></p>
      <ul>
        <li>AI pripraví odpoveď zákazníkovi, ty ju len upravíš a odošleš.</li>
        <li>AI ti zhrnie meeting, ty doplníš 2 dôležité body a pošleš tímu.</li>
      </ul>
      <p>👉 Copilot je super, keď treba <strong>myslenie, cit, kontext, zodpovednosť</strong> — a zároveň chceš ušetriť čas na rutine.</p>

      <h3>✅ AI agent (AI, ktorá aj koná)</h3>
      <p><strong>AI agent</strong> je, keď AI nielen navrhuje, ale aj <strong>vykonáva kroky</strong> (napríklad cez nástroje, aplikácie, API).</p>
      <p>Zvyčajne má:</p>
      <ul>
        <li>cieľ („spracuj nové leady"),</li>
        <li>kroky („vyber tie správne, doplň údaje, zapíš do CRM, pošli follow-up"),</li>
        <li>schopnosť používať nástroje (mail, kalendár, CRM, tabuľky…).</li>
      </ul>
      <p><strong>Príklad:</strong></p>
      <ul>
        <li>Agent každý deň prejde nové objednávky, skontroluje nezrovnalosti, pripraví report a pošle ho na Slack.</li>
      </ul>
      <p>👉 Agent je už „mini-pracovník". Preto pri ňom viac riešiš <strong>kontrolu, limity, logovanie, bezpečnosť</strong>.</p>

      <h3>🧠 Rýchle zhrnutie rozdielov</h3>
      <ul>
        <li><strong>Automatizácia</strong> = systém robí kroky sám podľa pravidiel (s AI alebo bez AI).</li>
        <li><strong>AI copilot</strong> = AI pomáha, ale ty schvaľuješ a rozhoduješ.</li>
        <li><strong>AI agent</strong> = AI má cieľ a robí viac krokov aj cez nástroje (a preto potrebuje viac kontroly).</li>
      </ul>

      <h3>✅ Mini príklad</h3>
      <p>Predstav si, že každý týždeň riešiš to isté:</p>
      <ul>
        <li>príde žiadosť emailom,</li>
        <li>prečítaš ju,</li>
        <li>prepíšeš údaje do tabuľky,</li>
        <li>odpovieš podľa šablóny.</li>
      </ul>
      <p><strong>AI copilot:</strong> požiadaš AI, aby ti pripravila odpoveď.</p>
      <p><strong>Automatizácia:</strong> email sa zachytí, údaje sa vytiahnu, tabuľka sa doplní, odpoveď sa pripraví a ty len skontroluješ.</p>
      <p><strong>AI agent:</strong> dostane cieľ „vyrieš tieto žiadosti", navrhne kroky, spracuje viac prípadov a pri nejasnostiach sa zastaví a pýta sa.</p>
      <p>A presne o tom bude tento modul: najprv sa naučíme <strong>rozsekať proces</strong>, potom rozhodnúť, kde má zmysel automat, kde copilot a kde manuál.</p>

      <h3>🚫 Čo automatizácia NIE JE</h3>
      <p>Aby sme si to nepomýlili, automatizácia nie je:</p>
      <ul>
        <li><strong>Jednorazové použitie AI</strong><br />Keď raz poprosíš AI o text, sumár alebo nápad, je to <strong>AI copilot</strong>, nie automatizácia. Automatizácia je až vtedy, keď sa to vie spustiť opakovane podľa pravidiel.</li>
        <li><strong>„Naklikám nástroj a bude to fungovať navždy"</strong><br />Procesy sa menia (formát emailu, názov stĺpca, nový formulár…). Automatizácia sa preto vždy ladí a testuje – nie je to „nastav a zabudni".</li>
        <li><strong>„Zrýchlim chaos"</strong><br />Ak nemáš jasné kroky, automatizácia ti nezlepší proces – iba zrýchli chyby a zmätočné výsledky. Najprv musí byť jasné: čo je vstup, čo je výstup, kto rozhoduje a čo je „hotovo".</li>
        <li><strong>Plná autonómia bez kontroly pri rizikových veciach</strong><br />Ak výstup ide k zákazníkovi, pracuješ s citlivými dátami alebo je chyba drahá, automatizácia bez kontroly je riziko. Vtedy je lepší <strong>AI copilot</strong> alebo „poloAI" (AI navrhne, človek schváli).</li>
        <li><strong>Zámienka na to, aby som nemusel rozmýšľať</strong><br />Automatizácia nie je „nech to za mňa vyrieši AI". Automatizácia je práve naopak: musíš mať jasno v procese, pravidlách a hraniciach.</li>
      </ul>
      <p>👉 Krátko: <strong>automatizácia nie je kúzlo ani nástroj – je to premyslený proces, ktorý vieš opakovať.</strong></p>

      <MiniTest
        question="Ktoré tvrdenie najlepšie vystihuje automatizáciu?"
        options={[
          { label: "🌕", text: "\u201EAI odpovedá na otázky používateľa.\u201C" },
          { label: "⭐", text: "\u201ESystém vykonáva kroky sám podľa pravidiel.\u201C" },
          { label: "☀️", text: "\u201EAI navrhne riešenie, ale človek ho musí schváliť.\u201C" },
        ]}
        correct="⭐"
        explanation="Automatizácia je o tom, že proces beží podľa pravidiel bez toho, aby človek riešil každý krok ručne."
      />

      <MiniTest
        question="Ktorá situácia je typický AI copilot?"
        options={[
          { label: "🌕", text: "AI sama odošle e-mail zákazníkovi bez kontroly." },
          { label: "⭐", text: "Skript každý deň stiahne dáta a uloží ich do databázy." },
          { label: "☀️", text: "Excel automaticky prepočíta sumy podľa vzorca." },
        ]}
        correct="🌑"
        explanation="Copilot = AI navrhuje, človek kontroluje a rozhoduje."
      />

      <MiniTest
        question="Ktorá situácia je najbližšie k AI agentovi?"
        options={[
          { label: "🌕", text: "AI zhrnie dokument a čaká na tvoje ďalšie pokyny." },
          { label: "⭐", text: "Automat presunie súbor do priečinka podľa názvu." },
          { label: "☀️", text: "AI má cieľ, sama spraví viac krokov a použije nástroje (napr. CRM + e-mail)." },
        ]}
        correct="☀️"
        explanation="Agent = AI, ktorá koná, robí viackrokové úlohy a používa nástroje."
      />

      <MiniTest
        question="Ktoré tvrdenie je pravdivé o automatizácii v AI kurze?"
        options={[
          { label: "🌕", text: "Automatizácia musí vždy obsahovať AI." },
          { label: "⭐", text: "Automatizácia je len o nástrojoch (Make, Zapier, Power Automate)." },
          { label: "☀️", text: "Automatizácia môže byť aj bez AI – a AI pridávaš len tam, kde dáva zmysel." },
        ]}
        correct="☀️"
        explanation={"Môžeš mať pravidlovú automatizáciu bez AI a AI používať len na kroky typu \u201Etext/obsah/klasifikácia\u201C."}
      />

      <MiniTest
        question="Kedy je najrozumnejšie začať s copilotom a nie s plnou automatizáciou?"
        options={[
          { label: "🌕", text: "Keď je riziko chyby vysoké alebo výstup ide von k zákazníkovi." },
          { label: "⭐", text: "Keď je proces stabilný a chyba nič nespôsobí." },
          { label: "☀️", text: "Keď je to jednorazová úloha." },
        ]}
        correct="🌕"
        explanation={"Pri vyššom riziku chceš \u201Ečloveka v slučke\u201C — copilot ti šetrí čas, ale stále máš kontrolu."}
      />

      <MiniTest
        question={"(Bonus) Ktoré 2 kroky najviac patria do cyklu „vytvor → otestuj → uprav → otestuj\u201C?"}
        options={[
          { label: "🌕", text: "Spustiť pilot na 5–10 reálnych prípadoch a porovnať čas/kvalitu." },
          { label: "⭐", text: "Hneď to nasadiť všetkým používateľom, aby sa to rýchlo ukázalo." },
          { label: "☀️", text: "Upraviť proces podľa chýb z pilotu a test zopakovať." },
        ]}
        correct="🌕☀️"
        explanation={"Pilot + iterácia sú to, čo robí automatizáciu bezpečnou a funkčnou. Bez toho len \u201Etipuješ\u201C, čo bude fungovať."}
      />
    </PageShell>
  );
}
