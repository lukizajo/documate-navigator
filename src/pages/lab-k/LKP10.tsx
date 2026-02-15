import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function LKP10() {
  const nav = getNavContext("lk-10-zhrnutie");
  return (
    <PageShell title="\uD83E\uDDFE Zhrnutie LABu" prev={nav.prev} next={nav.next}>
      <p>Najprv sprav <strong>inventúru</strong>: 3 situácie, kde AI používaš + 3 riziká (STOP / s kontrolou).</p>
      <p>Potom zvoľ <strong>režim</strong> (Think/Create/Operate), aby si nemiešal jasno, tvorbu a rutinu.</p>
      <p>Priraď AI <strong>rolu</strong> (sparring/editor/operátor/kontrolór) a drž pravidlo <strong>1 rola = 1 kontext</strong>.</p>
      <p>Nastav <strong>hranice</strong> (Nikdy / S kontrolou / Bez obáv), aby si nedelegoval zodpovednosť.</p>
      <p>Používaj <strong>default workflow (5 krokov)</strong> a na konci sprav <strong>kontrolu kvality</strong>.</p>
      <p>Automatizuj až vtedy, keď to funguje <strong>ručne a stabilne</strong> – inak len zrýchliš chyby.</p>
      <p>Keď cítiš <strong>AI únavu</strong>, zastav iteráciu, prepni rolu a vráť sa k zámeru/kritériám.</p>
    </PageShell>
  );
}
