import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lh-09-zhrnutie");

export default function LHP09() {
  return (
    <PageShell title="🧾 Zhrnutie LABu" prev={nav.prev} next={nav.next}>
      <p>Najprv si ujasni <strong>účel hudby</strong>: <strong>intro</strong> (identita) vs <strong>pozadie/bed</strong> (atmosféra). Keď je v obsahu hlas, platí: <strong>hlas je šéf</strong>.</p>
      <p>Brief musí mať <strong>MUST HAVE</strong>: <strong>účel + dĺžka + 3 slová mood + energia + 2× NESMIE</strong>. Štýl/nástroje je len <strong>nice to have</strong>.</p>
      <p>Generuj kontrolovane cez <strong>3–1–1</strong>: 3 varianty → vyber 1 → urob 1 iteráciu (meníš iba jednu vec).</p>
      <p>Pri výbere nevyberaj "najkrajšie", ale "najpoužiteľnejšie": <strong>neruší? stabilné? sedí účelu?</strong></p>
      <p>Loop nie je len "opakovať skladbu" — dobrý loop je taký, kde <strong>koniec plynulo nadviaže na začiatok</strong> a <strong>švík nepočuť</strong> (test: pusti 2× za sebou).</p>
      <p>SFX robia veľký rozdiel, ale len keď sú <strong>krátke, jemné a konzistentné</strong>. Vyber si jednu "povahu" (organické/digitálne/kinematické) a nemixuj bez dôvodu. Pri SFX sa oplatí robiť <strong>A/B varianty</strong> (soft vs clear) a vybrať použiteľnejší.</p>
      <p>Z výstupov sprav <strong>sound pack</strong>: music/, sfx/, export/, jasné názvy súborov + verzovanie. Finále drž oddelene.</p>
      <p>Pred publikovaním sprav licenčný checkpoint: <strong>použiť vs zdieľať</strong> nie je to isté. Ulož si LICENSE_NOTE.txt priamo do priečinka.</p>
    </PageShell>
  );
}
