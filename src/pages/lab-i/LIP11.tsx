import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

const nav = getNavContext("li-11-zhrnutie");

export default function LIP11() {
  return (
    <PageShell title="🧾 Zhrnutie LABu" prev={nav.prev} next={nav.next}>
      <p>Najprv vyber <strong>MVP proces</strong>: opakuje sa, má jasný trigger a jasný výstup. Ak nevieš povedať „hotovo je, keď…", ešte je to príliš veľké.</p>
      <p>Proces si najprv rozkresli do <strong>mapy 6–10 krokov</strong> (každý krok začína slovesom). Keď sa v tom stratíš ty, v nástroji sa stratíš dvojnásobne.</p>
      <p>Rozdeľ kroky na <strong>🟩 pravidlá / 🟨 AI / 🟥 človek</strong>: AI dávaj len tam, kde rieši význam textu. Kroky s dopadom majú mať kontrolu.</p>
      <p>Urob si <strong>Input pack ako kontrakt</strong>: ✅ MUST (bez toho STOP/NEED_REVIEW) + 👍 SHOULD + 🌿 NICE. Nejasné alebo chýbajúce vstupy sú najčastejší dôvod chaosu.</p>
      <p>AI krok píš ako <strong>funkciu</strong>: jasná úloha + presný formát výstupu + fallback (NEED_REVIEW). Najprv štruktúra, až potom text.</p>
      <p>Blueprint je <strong>preklad mapy do logiky automatizácie</strong>: trigger → validácia → AI → vetvenie/kontrola → výstup → log. Najprv nastav brzdy, až potom „vylepšuj".</p>
      <p>Testuj realitu: <strong>5 bežných + 2 hraničné + 1 rozbitý</strong> prípad. Bez logu nemáš dôkazy a nevieš rýchlo opraviť chyby.</p>
      <p>Nastav <strong>brzdy a STOP/GO</strong>: STOP pred dopadom + STOP pri neistote (NEED_REVIEW). Pilot vyhodnoť cez metriky: úspora času, spoľahlivosť, kvalita, cena chyby.</p>
      <p>👉 <strong>Pointa:</strong> najlepšia automatizácia vzniká v krokoch (MVP → mapa → štítky → vstupy → AI špecifikácia → blueprint → testy → brzdy → pilot), nie jedným „naklikám to".</p>
    </PageShell>
  );
}
