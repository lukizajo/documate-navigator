import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function Page00() {
  const nav = getNavContext("00-uvod");
  return (
    <PageShell
      title={'M01 – Z čoho je AI „uvarená"? 🍲'}
      tldr={[
        "Modul M01 je základom celého kurzu – buduje správny mentálny model o AI",
        "AI nie je bytosť, ale nástroj – pomáha robiť veci rýchlejšie a prehľadnejšie",
        "Kľúčový princíp: AI asistuje, človek rozhoduje (Human-in-the-loop)",
        "Prejdeme od definície AI cez históriu až po etiku a reguláciu",
      ]}
      {...nav}
    >
      <h2>🧭 Prehľad modulu</h2>

      <h2>🧭 Prehľad modulu</h2>
      <p>
        Umelá inteligencia je dnes všade – v práci, v mobile, v médiách aj v debatách o budúcnosti.
        Často však pod pojmom AI myslíme veľmi rozdielne veci. Tento modul slúži ako pevný základ,
        na ktorom budeme stavať v ďalších častiach kurzu.
      </p>
      <p>
        Cieľom nie je naučiť ťa všetky technické detaily, ale vytvoriť správny mentálny model:
        čo AI je, ako funguje, kde sú jej hranice a ako ju používať zmysluplne a bezpečne.
      </p>

      <p>V tomto module prejdeme od jednoduchého vysvetlenia AI a jej histórie až po dnešnú prax a etiku. Ukážeme si:</p>
      <ul>
        <li>z čoho sa AI model „varí" (dáta → tréning → predikcia tokenu)</li>
        <li>ako pracuje s kontextom a prečo si občas vymýšľa (halucinácie)</li>
        <li>kto stojí za veľkými chatbotmi a aké typy modelov existujú</li>
        <li>prečo platí princíp Human-in-the-loop: AI asistuje, človek schvaľuje</li>
      </ul>
      <p>👉 Vždy s dôrazom na praktické použitie, bezpečnosť a zdravé očakávania.</p>

      <h2>🎯 Čo sa v tomto module naučíš?</h2>
      <p>Po absolvovaní M1 budeš vedieť:</p>
      <ul>
        <li>vysvetliť, čo AI je a čo nie je (bez hype a mýtov)</li>
        <li>pochopiť rozdiel medzi úzkou a generatívnou AI</li>
        <li>orientovať sa v typoch modelov a hlavných hráčoch</li>
        <li>rozumieť základom fungovania AI modelov</li>
        <li>používať AI vedome, kriticky a zodpovedne</li>
      </ul>
    </PageShell>
  );
}
