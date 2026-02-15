import { PageShell } from "@/components/PageShell";
import { MiniTask, ExpectedFinding } from "@/components/ContentBlocks";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lb-12-prakticka-uloha");

export default function LBP12() {
  return (
    <PageShell title="🎓 Praktická úloha – Komplexný scenár" prev={nav.prev} next={nav.next}>
      <MiniTask title="Komplexný scenár (z celého LABu)">
        <p><strong>Situácia</strong></p>
        <p>Potrebujete niekomu oznámiť zmenu pravidla/organizácie a zároveň získať spoluprácu. Text má byť použiteľný v rôznych situáciách, preto urobíš balík výstupov.</p>
        <p><strong>Zadanie (vstupný text)</strong></p>
        <p>„Od budúceho týždňa chceme zjednotiť spôsob, akým posielame požiadavky a otázky, aby sa nestrácali a neriešili duplicitne. Prosím, posielajte nové požiadavky už len cez jeden dohodnutý kanál a vždy doplňte: krátky názov, čo presne potrebujete, dokedy to potrebujete a prípadné prílohy. Ak ide o niečo urgentné, označte to hneď na začiatku. Tento postup nám pomôže vybavovať veci rýchlejšie a prehľadnejšie."</p>

        <hr />

        <p><strong>Postup (pracuješ v 5 krokoch)</strong></p>

        <p><strong>1) Účel + publikum + formát 🎯</strong></p>
        <p>Napíš AI:</p>
        <ul>
          <li>účel textu (informovať/vysvetliť/požiadať)</li>
          <li>publikum (bežný človek / kolega / komunita…)</li>
          <li>formát (email, návod, FAQ)</li>
        </ul>

        <p><strong>2) Osnova + hierarchia 🧱</strong></p>
        <p>Nech AI navrhne:</p>
        <ul>
          <li>osnovu max 6 bodov</li>
          <li>MUST HAVE vs detail</li>
          <li>3 otázky, čo chýba (čo/kto/dokedy/prvý krok)</li>
        </ul>

        <p><strong>3) Prepis pre laika 🧠</strong></p>
        <p>Nech AI spraví verziu:</p>
        <ul>
          <li>krátke vety</li>
          <li>bežné slová</li>
          <li>max 8 bodov</li>
        </ul>

        <p><strong>4) Zmena tónu 🎛️</strong></p>
        <p>Nech AI spraví 3 verzie (vyber):</p>
        <ul>
          <li>priateľský</li>
          <li>pevný</li>
          <li>formálny</li>
        </ul>
        <p>(bez zmeny významu a bez vyhrážania)</p>

        <p><strong>5) Preformátovanie 🧩🔁</strong></p>
        <p>Z tej istej informácie sprav:</p>
        <ul>
          <li><strong>Email</strong> (s predmetom)</li>
          <li><strong>Návod</strong> (5–7 krokov + „ak nastane problém")</li>
          <li><strong>FAQ</strong> (min 4 otázky)</li>
        </ul>

        <hr />

        <p><strong>⚠️ Kontrola kvality (povinná)</strong></p>
        <p><strong>A) Halucinácie</strong></p>
        <p>Označ, či sú v textoch nejaké:</p>
        <ul>
          <li>nové fakty (čísla, dátumy, pravidlá), ktoré neboli vo vstupe</li>
        </ul>
        <p>Ak áno, vyhoď ich alebo označ ako NEISTÉ.</p>

        <p><strong>B) Bezpečnosť</strong></p>
        <p>Skontroluj, či text neobsahuje citlivé údaje.</p>
        <p>Ak áno, anonymizuj placeholdermi.</p>

        <p><strong>C) Kritik (AI ako auditor)</strong></p>
        <p>Požiadaj AI, aby:</p>
        <ul>
          <li>ohodnotila výsledok scorecardom (jasnosť, konkrétnosť, stručnosť, riziko, použiteľnosť)</li>
          <li>označila 3 konkrétne vety na zlepšenie</li>
        </ul>

        <p><strong>❓ Porovnávacie otázky (ÁNO/NIE)</strong></p>
        <p>Je jasné „čo/kto/dokedy/prvý krok"?</p>
        <p>Je text bez vaty a čitateľný na prvý raz?</p>
        <p>Zostal význam rovnaký vo všetkých verziách tónu?</p>
        <p>Nepribudli nové informácie pri preformátovaní?</p>
        <p>Prešiel text kontrolou bezpečnosti a faktov?</p>
      </MiniTask>

      <ExpectedFinding>
        <p>Komplexný výsledok nevzniká jedným promptom. Vzniká v krokoch: štruktúra → zrozumiteľnosť → tón → formát → kontrola faktov a bezpečnosti → audit kritikom.</p>
      </ExpectedFinding>
    </PageShell>
  );
}
