import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function Page00() {
  const nav = getNavContext("00-uvod");
  return (
    <PageShell
      title="🅾️ Úvod"
      {...nav}
    >
      <h2>🅾️ Úvod</h2>
      <p>
        Umelá inteligencia je dnes všade – v práci, v mobile, v médiách aj v debatách o budúcnosti. Často však pod pojmom AI myslíme veľmi rozdielne veci. Tento modul slúži ako <strong>pevný základ</strong>, na ktorom budeme stavať v ďalších častiach kurzu.
      </p>
      <p>
        Cieľom nie je naučiť ťa všetky technické detaily, ale <strong>vytvoriť správny mentálny model</strong>: čo AI je, ako funguje, kde sú jej hranice a ako ju používať zmysluplne a bezpečne.
      </p>

      <h2>🧭 Prehľad modulu</h2>
      <p>V tomto module prejdeme od jednoduchého vysvetlenia AI a jej histórie až po dnešnú prax a etiku. Ukážeme si:</p>
      <ul>
        <li>z čoho sa AI model „varí" <em>(dáta → tréning → predikcia tokenu)</em>,</li>
        <li>ako pracuje s kontextom a prečo si občas <strong>vymýšľa</strong> (halucinácie),</li>
        <li>kto stojí za veľkými chatbotmi a aké typy modelov existujú,</li>
        <li>prečo platí princíp <strong>Human-in-the-loop</strong>: AI asistuje, človek schvaľuje.</li>
      </ul>
      <p>👉 Vždy s dôrazom na <strong>praktické použitie, bezpečnosť a zdravé očakávania</strong>.</p>

      <h2>🎯 Čo sa v tomto module naučíš?</h2>
      <p>Po absolvovaní M1 budeš vedieť:</p>
      <ul>
        <li>vysvetliť, čo AI je a čo nie je (bez hype a mýtov),</li>
        <li>pochopiť rozdiel medzi úzkou a generatívnou AI,</li>
        <li>orientovať sa v typoch modelov a hlavných hráčoch,</li>
        <li>rozumieť základom fungovania AI modelov,</li>
        <li>používať AI vedome, kriticky a zodpovedne.</li>
      </ul>
    </PageShell>
  );
}
