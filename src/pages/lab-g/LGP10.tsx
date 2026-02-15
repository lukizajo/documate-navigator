import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("lg-10-zhrnutie");

export default function LGP10() {
  return (
    <PageShell title="🧾 Zhrnutie LABu" prev={nav.prev} next={nav.next}>
      <p><strong>Najprv si ujasni pointu a publikum:</strong> 1 video = <strong>1 myšlienka</strong> + pre koho to je + čo má byť výsledok (pochopenie / akcia). Bez toho AI vyrobí „pekno", ale nie použiteľné.</p>

      <p><strong>Video nie je efekt, video je nástroj:</strong> cieľom nie je wow animácia, ale aby video fungovalo na prvý pohľad (hook), bez zvuku (titulky) a na mobile (safe area).</p>

      <p><strong>Brief je riadenie:</strong> Publikum + pointa (1 veta) + CTA. Ak toto nemáš, všetko ďalšie (scenár, strih, titulky) bude rozbité.</p>

      <p><strong>Scenár píš ako reč, nie ako článok:</strong> štruktúra <strong>Hook → Jadro (2–3 body) → Záver + CTA</strong>. Krátke vety, bežné slová, konkrétne slovesá.</p>

      <p><strong>Shot list je plán jazdy:</strong> rozsekaj scenár na <strong>6–10 záberov</strong> (obraz + voice + dĺžka). Keď nevieš pomenovať záber jednou vetou, ešte nemáš záber.</p>

      <p><strong>AI-first rozhodovanie nie je AI-za-každú-cenu:</strong></p>
      <ul>
        <li><strong>AI</strong> na metafory, vysvetlenie, abstrakt a konzistentný vizuál,</li>
        <li><strong>stock</strong> na rýchly realistický b-roll,</li>
        <li><strong>točenie/screen</strong> na dôveru, presnosť a reálne návody/dôkaz.</li>
      </ul>

      <p><strong>Titulky sú často hlavná vrstva:</strong> max 2 riadky, čitateľné tempo, safe area. Video má fungovať aj bez zvuku.</p>

      <p><strong>Zvuk sa nerieši efektom, ale zrozumiteľnosťou:</strong> hlas vyhráva, hudba je len podklad a hlasitosť nesmie skákať.</p>

      <p><strong>Konzistencia nie je dokonalosť, je to systém:</strong> nastav si „style lock" (min. 2–3 kotvy: titulky + farby/svetlo + prechody/tempo). Lepšie jednoduché pravidlá dodržané stále než veľa pravidiel občas.</p>

      <p><strong>Export je posledný filter kvality:</strong> kontroluj na mobile, nie len v editore. Mini-rutina: <strong>2s (o čom to je?) → 3s (prvá pointa?) → bez zvuku (funguje?)</strong>.</p>

      <p><strong>Etika a práva = STOP/GO:</strong> nepoužívaj tvár/hlas reálnej osoby bez súhlasu, nerob „fake dôkaz reality", rieš licencie (hlavne hudba). Keď hrozí, že to bude pôsobiť ako realita, buď transparentný.</p>

      <p>👉 <strong>Pointa:</strong> najlepšie AI video vzniká v krokoch (brief → scenár → shot list → zdroje obrazu → titulky/zvuk → style lock → export → STOP/GO), nie jedným „sprav mi video".</p>
    </PageShell>
  );
}
