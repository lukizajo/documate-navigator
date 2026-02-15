import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-07-format");

export default function LBP07() {
  return (
    <PageShell title="6️⃣ Zmena formátu: z jedného textu sprav email, návod, FAQ" prev={nav.prev} next={nav.next}>
      <p>V praxi často nemáš problém s obsahom. Problém je, že obsah je v <strong>zlom formáte</strong>.</p>
      <p>Ten istý text môže byť:</p>
      <ul>
        <li>super ako <strong>návod</strong>,</li>
        <li>nepoužiteľný ako <strong>email</strong>,</li>
        <li>a úplne mimo ako <strong>FAQ</strong>.</li>
      </ul>
      <p>Preto je zmena formátu jedna z najpraktickejších vecí, ktoré vieš s AI robiť: <strong>nepíšeš nové veci, len zabalíš tie isté informácie do formy, ktorá sa dá použiť hneď.</strong></p>

      <hr />

      <h3>✅ Prečo formát rozhoduje</h3>
      <p>Formát ovplyvňuje, ako čitateľ text spracuje:</p>
      <ul>
        <li><strong>Email</strong> → potrebuje rýchlo pochopiť „o čo ide" a čo sa od neho chce</li>
        <li><strong>Návod</strong> → potrebuje kroky, poradie, výnimky a čo robiť pri probléme</li>
        <li><strong>FAQ</strong> → potrebuje rýchle odpovede bez čítania celého textu</li>
        <li><strong>TL;DR</strong> → potrebuje podstatu v 10 sekundách</li>
      </ul>
      <p>👉 Pointa: <strong>Formát je obal, ktorý rozhoduje o použiteľnosti.</strong></p>

      <hr />

      <h3>🧰 4 formáty, ktoré využiješ najčastejšie</h3>
      <p><strong>1️⃣ Email</strong></p>
      <ul>
        <li><strong>predmet</strong></li>
        <li>1–2 vety kontext</li>
        <li>jasná požiadavka / ďalší krok</li>
        <li>stručnosť</li>
      </ul>
      <p><strong>2️⃣ Návod / postup</strong></p>
      <ul>
        <li>kroky v správnom poradí</li>
        <li>podmienky / výnimky</li>
        <li>sekcia „Ak nastane problém"</li>
      </ul>
      <p><strong>3️⃣ FAQ</strong></p>
      <ul>
        <li>otázka → krátka odpoveď</li>
        <li>3–6 najčastejších otázok</li>
        <li>vhodné na „skenovanie"</li>
      </ul>
      <p><strong>4️⃣ TL;DR</strong></p>
      <ul>
        <li>1–3 vety podstata</li>
        <li>3 kľúčové body</li>
      </ul>

      <hr />

      <h3>🧠 Pravidlá, aby AI pri preformátovaní nevymýšľala</h3>
      <p>Pri zmene formátu je najväčšie riziko, že AI začne dopĺňať nové informácie. Preto jej dáš jasné pravidlá:</p>
      <ul>
        <li><strong>Zachovaj význam a fakty</strong></li>
        <li><strong>Nepridávaj nové informácie ani sľuby</strong></li>
        <li><strong>Zachovaj požiadavku / next step</strong></li>
        <li><strong>Dodrž rozsah</strong> (max počet bodov/viet)</li>
      </ul>

      <hr />

      <h3>🧩 Ďalšie formáty, ktoré môžeš zadať AI (podľa situácie)</h3>
      <p>Ak potrebuješ ten istý obsah zabaliť inak, skús aj tieto formáty:</p>
      <p><strong>✅ Checklist (kontrolný zoznam)</strong></p>
      <ul>
        <li>keď chceš, aby niekto <strong>na nič nezabudol</strong></li>
        <li>typické: onboarding, odovzdanie, príprava pred meetingom</li>
      </ul>
      <p><strong>✅ Šablóna / template</strong></p>
      <ul>
        <li>opakovateľný text s vyplniteľnými miestami</li>
        <li>typické: „správa klientovi", „odpoveď na sťažnosť", „request o podklady"</li>
      </ul>
      <p><strong>✅ Agenda meetingu + výstupy</strong></p>
      <ul>
        <li>agenda: témy + čas + cieľ bodu</li>
        <li>výstup: rozhodnutia + úlohy + termíny (action items)</li>
      </ul>
      <p><strong>✅ Zápis / minutes (meeting notes)</strong></p>
      <ul>
        <li>čo sa povedalo → čo sa dohodlo → kto čo spraví</li>
        <li>AI vie pekne premeniť chaotické poznámky na štruktúru</li>
      </ul>
      <p><strong>✅ One-pager / stručné zhrnutie na 1 stranu</strong></p>
      <ul>
        <li>rýchly dokument pre rozhodovanie (čo/ prečo/ možnosti/ riziká/ next step)</li>
      </ul>
      <p><strong>✅ Porovnanie možností (A vs B)</strong></p>
      <ul>
        <li>tabuľka alebo body: výhody/nevýhody, riziká, odporúčanie</li>
      </ul>
      <p><strong>✅ FAQ v „customer support" štýle</strong></p>
      <ul>
        <li>krátke odpovede + „čo robiť, ak…" + link/ďalší krok</li>
      </ul>
      <p><strong>✅ „Ako to vysvetliť" (ELI5 / pre laika)</strong></p>
      <ul>
        <li>veľmi užitočné pri technických/odborných témach</li>
      </ul>
      <p><strong>✅ Text pre web/landing (sekcie + headline + CTA)</strong></p>
      <ul>
        <li>skôr marketingový, ale aj informačný (napr. oznamy, vysvetlenia)</li>
      </ul>
      <p><strong>✅ SMS/krátka správa vs dlhšia správa</strong></p>
      <ul>
        <li>ten istý obsah v dvoch dĺžkach pre rôzne kanály</li>
      </ul>
      <p>👉 Trik: pri každom formáte AI vždy pripomeň: <strong>„Nepridávaj nové informácie, len preformátuj."</strong></p>

      <hr />

      <MiniTask title="Preformátuj do 3 výstupov">
        <p><strong>Situácia</strong></p>
        <p>Máš jeden text o zmene. Potrebuješ z neho spraviť rôzne výstupy podľa toho, komu a kde to komunikuješ.</p>
        <p><strong>Inštrukcia</strong></p>
        <p>Skopíruj do AI nasledujúci <strong>Text</strong> a potom <strong>Prompt</strong>. Výsledky si ulož vedľa seba a porovnaj.</p>

        <p><strong>Text (vstup do AI)</strong></p>
        <p>„Od budúceho týždňa chceme zjednotiť spôsob, akým posielame požiadavky a otázky, aby sa nestrácali a neriešili duplicitne. Prosím, posielajte nové požiadavky už len cez jeden dohodnutý kanál a vždy doplňte: krátky názov, čo presne potrebujete, dokedy to potrebujete a prípadné prílohy. Ak ide o niečo urgentné, označte to hneď na začiatku. Tento postup nám pomôže vybavovať veci rýchlejšie a prehľadnejšie."</p>

        <p><strong>Prompt</strong></p>
        <p>„Z tohto textu sprav 3 výstupy:</p>
        <ol>
          <li><strong>Email</strong> (s predmetom): 1–2 vety kontext + jasná požiadavka + 4 body, čo má človek doplniť.</li>
          <li><strong>Návod / postup</strong>: 5–7 krokov + sekcia „Ak nastane problém" (2 vety).</li>
          <li><strong>FAQ</strong>: minimálne 4 otázky a stručné odpovede (max 2 vety na odpoveď).</li>
        </ol>
        <p>Pravidlá:</p>
        <ul>
          <li><strong>Nepridávaj nové informácie</strong>, len preformátuj existujúce.</li>
          <li><strong>Zachovaj význam a fakty</strong>.</li>
          <li>Zachovaj požiadavku: posielať cez jeden kanál + doplniť 4 informácie.</li>
          <li>Použi jednoduché slová, bez vaty."</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Zachoval AI vo všetkých formátoch <strong>rovnaké fakty</strong>?</p>
        <p>Nepridala AI <strong>nové informácie</strong> alebo nové pravidlá?</p>
        <p>Je každý formát <strong>na použitie</strong> (nie len „na čítanie")?</p>
        <p>Je <strong>návod</strong> naozaj krokový (nie dlhé odseky)?</p>
        <p>Je <strong>FAQ</strong> naozaj otázka–odpoveď (nie len prepis textu)?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Jedným dobrým promptom vieš získať viac výstupov z rovnakého obsahu. Ty si vyberieš formát podľa situácie (email, návod, FAQ) — bez toho, aby si musel vymýšľať nové texty.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
