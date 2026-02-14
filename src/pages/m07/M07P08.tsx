import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M07P08() {
  const nav = getNavContext("m07-08-chyby");
  return (
    <PageShell title="7️⃣ Na čo si dať pozor" {...nav}>

      <p>Táto časť je taký „bezpečnostný pás" pred praktickou úlohou. Lebo v osobnom živote AI často znie presvedčivo, rýchlo pomôže… a práve preto sa na nej ľahko spraví chyba.</p>

      <h3>❗ Najčastejšie chyby, ktoré ľudia robia</h3>

      <p>🧠 <strong>Beriem AI ako autoritu</strong></p>
      <p>AI vie znieť sebaisto aj vtedy, keď sa mýli.</p>
      <p>✅ Správny prístup: <strong>AI ako návrh, nie verdikt.</strong></p>
      <p>👉 Keď je to dôležité: over si fakty, porovnaj zdroje, spýtaj sa aj inde.</p>

      <p>🧾 <strong>{"\u201EChcem dokonalú odpoveď\u201C a zacyklím sa"}</strong></p>
      <p>AI vie generovať nekonečno možností.</p>
      <p>✅ Správny prístup: <strong>limit iterácií + stop veta + akcia.</strong></p>
      <p>👉 Napr. „max 2–3 kolá a koniec".</p>

      <p>🔐 <strong>Zdieľam príliš veľa osobných údajov</strong></p>
      <p>Najmä: adresy, dokumenty, deti, citlivé konverzácie.</p>
      <p>✅ Správny prístup: <strong>anonymizácia + popis cieľa bez detailov.</strong></p>

      <p>💬 <strong>{"\u201ERiešim citlivé témy (zdravie, financie, vzťahy) tak, že čakám radu\u201C"}</strong></p>
      <p>✅ Správny prístup: použi AI na:</p>
      <ul>
        <li>vysvetlenie pojmov,</li>
        <li>návrh otázok,</li>
        <li>zhrnutie možností,</li>
      </ul>
      <p>nie na rozhodnutie.</p>

      <p>📸 <strong>Verím výstupu z obrázka bez kontroly</strong></p>
      <p>Aj pri fotkách rastlín, jedla, dokumentov – AI môže trafiť vedľa.</p>
      <p>✅ Správny prístup: <strong>ber to ako pravdepodobnosť, nie istotu.</strong></p>
      <p>👉 Pýtaj sa: „Ako si si tým istý? Aké sú alternatívy?"</p>

      <p>🧩 <strong>Pýtam sa všeobecne, preto dostávam všeobecné odpovede</strong></p>
      <p>✅ Správny prístup: daj AI <strong>úlohu + kontext + výstup</strong>.</p>
      <p>👉 To je rozdiel medzi „poradíš?" a „daj mi 5 možností + vyber top 2 s dôvodom".</p>

      <p>🤝 <strong>AI mi nahrádza ľudí</strong></p>
      <p>AI je pohodlná, ale nie je vzťah.</p>
      <p>✅ Správny prístup: AI ako pomocník, ale dôležité rozhovory riešiť s ľuďmi.</p>
    </PageShell>
  );
}
