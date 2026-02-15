import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("li-01-uvod");

export default function LIP01() {
  return (
    <PageShell title="LAB I – Automatizácia s AI 🔁" prev={nav.prev} next={nav.next}>
      <h2>🅾️ Úvod</h2>
      <p>Tento LAB je praktická dráha zameraná na jednu konkrétnu zručnosť: <strong>postaviť automatizáciu tak, aby bola použiteľná v praxi</strong> — a aby si ju vedel bezpečne rozširovať.</p>
      <p>Veľa ľudí to robí takto:</p>
      <p>„Prepojím pár aplikácií a pridám AI…" → chvíľu to vyzerá OK → a potom zistíš, že:</p>
      <ul>
        <li>automatizácia sa rozpadá na výnimkách (chýbajú vstupy, iné formáty, iný text),</li>
        <li>AI raz trafí a raz si „domyslí",</li>
        <li>nevieš dohľadať, prečo to zlyhalo (žiadny log),</li>
        <li>výsledok je použiteľný len raz, nie opakovane.</li>
      </ul>
      <p>👉 Cieľom LABu nie je „naklikať mega flow" ani zbierať integrácie.</p>
      <p>Cieľom je, aby si vedel spraviť <strong>malý, kontrolovaný a bezpečný pilot</strong>: jasný trigger, jasný výstup, kontrolný bod a testy.</p>
      <p>A rovnako ako v celom kurze: <strong>AI asistuje, človek rozhoduje.</strong> ✅</p>

      <h2>🧭 Prehľad LABu</h2>
      <p>V tomto LABe pôjdeš týmto postupom:</p>
      <ol>
        <li>vyberieš proces vhodný na automatizáciu (a zmenšíš ho na MVP)</li>
        <li>rozkreslíš procesnú mapu</li>
        <li>rozdelíš kroky na „bez AI / s AI / človek"</li>
        <li>pripravíš vstupy a pravidlá</li>
        <li>navrhneš AI krok ako špecifikáciu (prompt + výstup + fallback)</li>
        <li>vytvoríš blueprint automatizácie</li>
        <li>otestuješ to na reálnych prípadoch</li>
        <li>nastavíš brzdy, log a STOP/GO</li>
        <li>vyhodnotíš pilot a rozhodneš ďalší krok</li>
      </ol>
      <p>Na konci to spojíš do jedného výstupu: <strong>MVP automatizácia + balíček stavebných blokov</strong>, ktoré vieš nabudúce znovu použiť.</p>

      <h2>🎯 Čo sa v tomto LABe naučíš?</h2>
      <p>Po absolvovaní LABu budeš vedieť:</p>
      <ul>
        <li>vybrať proces, ktorý sa oplatí automatizovať a udržať ho MVP-malý</li>
        <li>pripraviť proces tak, aby sa dal preniesť do ľubovoľného nástroja</li>
        <li>rozhodnúť, kde má zmysel AI a kde je lepší človek alebo pravidlá</li>
        <li>vytvoriť prompt + formát výstupu + fallback pre AI krok</li>
        <li>nastaviť testovanie, logovanie a brzdy, aby automatizácia nerobila škody</li>
      </ul>
    </PageShell>
  );
}
