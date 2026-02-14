import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";
import { ExpectedFinding } from "@/components/ContentBlocks";

export default function M06P11() {
  const nav = getNavContext("m06-11-prakticka-uloha");
  return (
    <PageShell title="🎓 Praktická úloha – Pracovný e-mail s AI v reálnej situácii" {...nav}>

      <h3>Zadanie</h3>
      <p>Klient sa ozval, že už niekoľko dní čaká na odpoveď k reklamácii a je nahnevaný. Chce rýchlu reakciu, inak bude vec eskalovať.</p>
      <p>Tvoj cieľ:</p>
      <ul>
        <li>👉 pripraviť <strong>profesionálnu, upokojujúcu odpoveď</strong>,</li>
        <li>👉 <strong>bez neoverených sľubov</strong> a <strong>bez citlivých údajov</strong>,</li>
        <li>👉 s vedomím, že <strong>zodpovednosť nesieš ty, nie AI</strong>.</li>
      </ul>

      <p>Použi AI tak, ako by si ju použil v reálnej práci, a priprav <strong>finálny e-mail</strong>, ktorý by si vedel odoslať klientovi.</p>

      <h3>Postup</h3>
      <ol>
        <li>Priprav si zadanie pre AI (prompt), ktorý:
          <ul>
            <li>jasne povie, komu píšeš a prečo,</li>
            <li>nastaví tón (profesionálny, ľudský),</li>
            <li><strong>zakáže domýšľanie faktov a sľubov</strong>.</li>
          </ul>
        </li>
        <li>Nechaj AI vygenerovať návrh e-mailu.</li>
        <li>Sprav <strong>ľudskú kontrolu</strong>:
          <ul>
            <li>fakty (čo viem / čo neviem),</li>
            <li>sľuby (čo môžem / nemôžem garantovať),</li>
            <li>tón (nie obhajoba, nie arogancia).</li>
          </ul>
        </li>
        <li>Uprav text tak, aby si bol ochotný ho <strong>podpísať a odoslať</strong>.</li>
      </ol>

      <h3>Výstup</h3>
      <ul>
        <li>finálna verzia e-mailu (po kontrole),</li>
        <li>1–2 vety odpoveď: <em>„Čo som musel(a) v texte opraviť alebo odstrániť, aby bol bezpečný?"</em></li>
      </ul>

      <h3>❓ Porovnávacie otázky (ÁNO / NIE)</h3>
      <p>Pri hotovom e-maile si odpíš:</p>
      <ul>
        <li>Obsahuje e-mail iba informácie, ktoré mám <strong>reálne potvrdené</strong>?</li>
        <li>Neobsahuje žiadne <strong>konkrétne identifikátory</strong> (mená, ID, interné systémy)?</li>
        <li>Neobsahuje <strong>sľub</strong>, ktorý by som nevedel splniť?</li>
        <li>Vedel(a) by som tento e-mail <strong>obhájiť pred klientom, manažérom aj právnikom</strong>?</li>
        <li>Cítim sa komfortne, že je to podpísané <strong>mojím menom</strong>, nie „AI"?</li>
      </ul>

      <ExpectedFinding>
        <p>AI dokáže rýchlo pripraviť profesionálne znejúci text, ale <strong>nevie, čo máš reálne potvrdené a čo nesmieš sľúbiť</strong>. Finálnu kvalitu neurčuje AI, ale človek, ktorý výstup skontroluje, upraví a pošle. Zodpovedné používanie AI v práci znamená, že <strong>AI píše – ale ty rozhoduješ</strong>.</p>
      </ExpectedFinding>

      <h3>🧠 Vysvetlenie (až po úlohe – pre lektora / záver)</h3>
      <p>V reálnej situácii boli k dispozícii aj:</p>
      <ul>
        <li>meno klienta,</li>
        <li>ID reklamácie,</li>
        <li>presná suma a dátum,</li>
        <li>interné názvy systémov.</li>
      </ul>
      <p>Tieto informácie <strong>neboli potrebné na to, aby AI pomohla s formuláciou e-mailu</strong>.</p>
      <p>Práve ich vynechanie znižuje riziko a zvyšuje bezpečnosť.</p>

      <h3>Rubrika (sebaskóre)</h3>
      <ul>
        <li><strong>1 bod:</strong> mám Prompt A aj B</li>
        <li><strong>2 body:</strong> Prompt B má publikum, cieľ, formát a tón</li>
        <li><strong>3 body:</strong> Prompt B má aj obmedzenia (bez sľubov, bez domýšľania faktov)</li>
        <li><strong>4 body:</strong> urobil som meranie pred/po</li>
        <li><strong>5 bodov:</strong> finálny email je zrozumiteľný, bezpečný a pripravený na odoslanie</li>
      </ul>
    </PageShell>
  );
}
