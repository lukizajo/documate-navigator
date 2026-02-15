import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Page00 from "./pages/Page00";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page05 from "./pages/Page05";
import Page06 from "./pages/Page06";
import Page07 from "./pages/Page07";
import Page08 from "./pages/Page08";
import Page09 from "./pages/Page09";
import Page10 from "./pages/Page10";
import M02P01 from "./pages/m02/M02P01";
import M02P02 from "./pages/m02/M02P02";
import M02P03 from "./pages/m02/M02P03";
import M02P04 from "./pages/m02/M02P04";
import M02P05 from "./pages/m02/M02P05";
import M02P06 from "./pages/m02/M02P06";
import M02P07 from "./pages/m02/M02P07";
import M02P08 from "./pages/m02/M02P08";
import M03P01 from "./pages/m03/M03P01";
import M03P02 from "./pages/m03/M03P02";
import M03P03 from "./pages/m03/M03P03";
import M03P04 from "./pages/m03/M03P04";
import M03P05 from "./pages/m03/M03P05";
import M03P06 from "./pages/m03/M03P06";
import M03P07 from "./pages/m03/M03P07";
import M03P08 from "./pages/m03/M03P08";
import M03P09 from "./pages/m03/M03P09";
import M03P10 from "./pages/m03/M03P10";
import M04P01 from "./pages/m04/M04P01";
import M04P02 from "./pages/m04/M04P02";
import M04P03 from "./pages/m04/M04P03";
import M04P04 from "./pages/m04/M04P04";
import M04P05 from "./pages/m04/M04P05";
import M04P06 from "./pages/m04/M04P06";
import M04P07 from "./pages/m04/M04P07";
import M04P08 from "./pages/m04/M04P08";
import M04P09 from "./pages/m04/M04P09";
import M04P10 from "./pages/m04/M04P10";
import M04P11 from "./pages/m04/M04P11";
import M05P01 from "./pages/m05/M05P01";
import M05P02 from "./pages/m05/M05P02";
import M05P03 from "./pages/m05/M05P03";
import M05P04 from "./pages/m05/M05P04";
import M05P05 from "./pages/m05/M05P05";
import M05P06 from "./pages/m05/M05P06";
import M05P07 from "./pages/m05/M05P07";
import M05P08 from "./pages/m05/M05P08";
import M05P09 from "./pages/m05/M05P09";
import M06P01 from "./pages/m06/M06P01";
import M06P02 from "./pages/m06/M06P02";
import M06P03 from "./pages/m06/M06P03";
import M06P04 from "./pages/m06/M06P04";
import M06P05 from "./pages/m06/M06P05";
import M06P06 from "./pages/m06/M06P06";
import M06P07 from "./pages/m06/M06P07";
import M06P08 from "./pages/m06/M06P08";
import M06P09 from "./pages/m06/M06P09";
import M06P10 from "./pages/m06/M06P10";
import M06P11 from "./pages/m06/M06P11";
import M07P01 from "./pages/m07/M07P01";
import M07P02 from "./pages/m07/M07P02";
import M07P03 from "./pages/m07/M07P03";
import M07P04 from "./pages/m07/M07P04";
import M07P05 from "./pages/m07/M07P05";
import M07P06 from "./pages/m07/M07P06";
import M07P07 from "./pages/m07/M07P07";
import M07P08 from "./pages/m07/M07P08";
import M07P09 from "./pages/m07/M07P09";
import M08P01 from "./pages/m08/M08P01";
import M08P02 from "./pages/m08/M08P02";
import M08P03 from "./pages/m08/M08P03";
import M08P04 from "./pages/m08/M08P04";
import M08P05 from "./pages/m08/M08P05";
import M08P06 from "./pages/m08/M08P06";
import M08P07 from "./pages/m08/M08P07";
import M08P08 from "./pages/m08/M08P08";
import M08P09 from "./pages/m08/M08P09";
import M08P10 from "./pages/m08/M08P10";
import M08P11 from "./pages/m08/M08P11";
import M08P12 from "./pages/m08/M08P12";
import M08P13 from "./pages/m08/M08P13";
import M08P14 from "./pages/m08/M08P14";
import LAP01 from "./pages/lab-a/LAP01";
import LAP02 from "./pages/lab-a/LAP02";
import LAP03 from "./pages/lab-a/LAP03";
import LAP04 from "./pages/lab-a/LAP04";
import LAP05 from "./pages/lab-a/LAP05";
import LAP06 from "./pages/lab-a/LAP06";
import LAP07 from "./pages/lab-a/LAP07";
import LAP08 from "./pages/lab-a/LAP08";
import LAP09 from "./pages/lab-a/LAP09";
import LAP10 from "./pages/lab-a/LAP10";
import LBP01 from "./pages/lab-b/LBP01";
import LBP02 from "./pages/lab-b/LBP02";
import LBP03 from "./pages/lab-b/LBP03";
import LBP04 from "./pages/lab-b/LBP04";
import LBP05 from "./pages/lab-b/LBP05";
import LBP06 from "./pages/lab-b/LBP06";
import LBP07 from "./pages/lab-b/LBP07";
import LBP08 from "./pages/lab-b/LBP08";
import LBP09 from "./pages/lab-b/LBP09";
import LBP10 from "./pages/lab-b/LBP10";
import LBP11 from "./pages/lab-b/LBP11";
import LBP12 from "./pages/lab-b/LBP12";
import LCP01 from "./pages/lab-c/LCP01";
import LCP02 from "./pages/lab-c/LCP02";
import LCP03 from "./pages/lab-c/LCP03";
import LCP04 from "./pages/lab-c/LCP04";
import LCP05 from "./pages/lab-c/LCP05";
import LCP06 from "./pages/lab-c/LCP06";
import LCP07 from "./pages/lab-c/LCP07";
import LDP01 from "./pages/lab-d/LDP01";
import LDP02 from "./pages/lab-d/LDP02";
import LDP03 from "./pages/lab-d/LDP03";
import LDP04 from "./pages/lab-d/LDP04";
import LDP05 from "./pages/lab-d/LDP05";
import LDP06 from "./pages/lab-d/LDP06";
import LDP07 from "./pages/lab-d/LDP07";
import LDP08 from "./pages/lab-d/LDP08";
import LDP09 from "./pages/lab-d/LDP09";
import LDP10 from "./pages/lab-d/LDP10";
import LDP11 from "./pages/lab-d/LDP11";
import LEP01 from "./pages/lab-e/LEP01";
import LEP02 from "./pages/lab-e/LEP02";
import LEP03 from "./pages/lab-e/LEP03";
import LEP04 from "./pages/lab-e/LEP04";
import LEP05 from "./pages/lab-e/LEP05";
import LEP06 from "./pages/lab-e/LEP06";
import LEP07 from "./pages/lab-e/LEP07";
import LEP08 from "./pages/lab-e/LEP08";
import LEP09 from "./pages/lab-e/LEP09";
import LEP10 from "./pages/lab-e/LEP10";
import LEP11 from "./pages/lab-e/LEP11";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/00-uvod" replace />} />
            <Route path="/00-uvod" element={<Page00 />} />
            <Route path="/01-co-je-ai" element={<Page01 />} />
            <Route path="/02-prieskum-vyuzivania" element={<Page02 />} />
            <Route path="/03-historia" element={<Page03 />} />
            <Route path="/04-buducnost" element={<Page04 />} />
            <Route path="/05-spolupraca" element={<Page05 />} />
            <Route path="/06-druhy-modelov-slovnik" element={<Page06 />} />
            <Route path="/07-mapa-hracov" element={<Page07 />} />
            <Route path="/08-ako-vznika-model" element={<Page08 />} />
            <Route path="/09-halucinacie-teplota" element={<Page09 />} />
            <Route path="/10-etika-ai-act" element={<Page10 />} />
            <Route path="/m02-01-uvod" element={<M02P01 />} />
            <Route path="/m02-02-preco-porovnavat" element={<M02P02 />} />
            <Route path="/m02-03-hlavni-hraci" element={<M02P03 />} />
            <Route path="/m02-04-ferove-porovnanie" element={<M02P04 />} />
            <Route path="/m02-05-kriteria" element={<M02P05 />} />
            <Route path="/m02-06-toolbox" element={<M02P06 />} />
            <Route path="/m02-07-etika" element={<M02P07 />} />
            <Route path="/m02-08-prakticka-uloha" element={<M02P08 />} />
            <Route path="/m03-01-uvod" element={<M03P01 />} />
            <Route path="/m03-02-uloha" element={<M03P02 />} />
            <Route path="/m03-03-kontext" element={<M03P03 />} />
            <Route path="/m03-04-priklady" element={<M03P04 />} />
            <Route path="/m03-05-rola" element={<M03P05 />} />
            <Route path="/m03-06-format" element={<M03P06 />} />
            <Route path="/m03-07-ton" element={<M03P07 />} />
            <Route path="/m03-08-zlozeny-prompt" element={<M03P08 />} />
            <Route path="/m03-09-reverzne" element={<M03P09 />} />
            <Route path="/m03-10-prakticka-uloha" element={<M03P10 />} />
            <Route path="/m02-chatboty" element={<Navigate to="/m02-01-uvod" replace />} />
            <Route path="/m03-promptovanie" element={<Navigate to="/m03-01-uvod" replace />} />
            <Route path="/m04-01-uvod" element={<M04P01 />} />
            <Route path="/m04-02-kedy-kontext" element={<M04P02 />} />
            <Route path="/m04-03-struktura" element={<M04P03 />} />
            <Route path="/m04-04-chunking" element={<M04P04 />} />
            <Route path="/m04-05-citacie" element={<M04P05 />} />
            <Route path="/m04-06-minimal-disclosure" element={<M04P06 />} />
            <Route path="/m04-07-systemove-pokyny" element={<M04P07 />} />
            <Route path="/m04-08-mini-pamat" element={<M04P08 />} />
            <Route path="/m04-09-rag-light" element={<M04P09 />} />
            <Route path="/m04-10-chyby" element={<M04P10 />} />
            <Route path="/m04-11-prakticka-uloha" element={<M04P11 />} />
            <Route path="/m04-kontext" element={<Navigate to="/m04-01-uvod" replace />} />
            <Route path="/m05-01-uvod" element={<M05P01 />} />
            <Route path="/m05-02-ai-vs-google" element={<M05P02 />} />
            <Route path="/m05-03-ako-sa-pytat" element={<M05P03 />} />
            <Route path="/m05-04-limity" element={<M05P04 />} />
            <Route path="/m05-05-triangulacia" element={<M05P05 />} />
            <Route path="/m05-06-halucinacie" element={<M05P06 />} />
            <Route path="/m05-07-deep-research" element={<M05P07 />} />
            <Route path="/m05-08-web-vs-deep" element={<M05P08 />} />
            <Route path="/m05-09-prakticka-uloha" element={<M05P09 />} />
            <Route path="/m05-vyhladavanie" element={<Navigate to="/m05-01-uvod" replace />} />
            <Route path="/m06-01-uvod" element={<M06P01 />} />
            <Route path="/m06-02-kedy-zmysel" element={<M06P02 />} />
            <Route path="/m06-03-use-casy" element={<M06P03 />} />
            <Route path="/m06-04-top-use-casy" element={<M06P04 />} />
            <Route path="/m06-05-promptovanie" element={<M06P05 />} />
            <Route path="/m06-06-experiment" element={<M06P06 />} />
            <Route path="/m06-07-zavadzanie" element={<M06P07 />} />
            <Route path="/m06-08-bezpecnost" element={<M06P08 />} />
            <Route path="/m06-09-chyby" element={<M06P09 />} />
            <Route path="/m06-10-zhrnutie" element={<M06P10 />} />
            <Route path="/m06-11-prakticka-uloha" element={<M06P11 />} />
            <Route path="/m06-ai-v-praci" element={<Navigate to="/m06-01-uvod" replace />} />
            <Route path="/m07-01-uvod" element={<M07P01 />} />
            <Route path="/m07-02-kazdodenne" element={<M07P02 />} />
            <Route path="/m07-03-ucenie" element={<M07P03 />} />
            <Route path="/m07-04-volny-cas" element={<M07P04 />} />
            <Route path="/m07-05-deti" element={<M07P05 />} />
            <Route path="/m07-06-sukromie" element={<M07P06 />} />
            <Route path="/m07-07-rovnovaha" element={<M07P07 />} />
            <Route path="/m07-08-chyby" element={<M07P08 />} />
            <Route path="/m07-09-prakticka-uloha" element={<M07P09 />} />
            <Route path="/m07-osobny-zivot" element={<Navigate to="/m07-01-uvod" replace />} />
            <Route path="/m08-01-uvod" element={<M08P01 />} />
            <Route path="/m08-02-co-je-automatizacia" element={<M08P02 />} />
            <Route path="/m08-03-procesny-mindset" element={<M08P03 />} />
            <Route path="/m08-04-drob-4e" element={<M08P04 />} />
            <Route path="/m08-05-typy-automatizacii" element={<M08P05 />} />
            <Route path="/m08-06-rozhodovaci-diamant" element={<M08P06 />} />
            <Route path="/m08-07-zivotny-cyklus" element={<M08P07 />} />
            <Route path="/m08-08-granularita" element={<M08P08 />} />
            <Route path="/m08-09-mikrosablony" element={<M08P09 />} />
            <Route path="/m08-10-prilezitosti" element={<M08P10 />} />
            <Route path="/m08-11-chyby-bezpecnost" element={<M08P11 />} />
            <Route path="/m08-12-nastroje" element={<M08P12 />} />
            <Route path="/m08-13-zhrnutie" element={<M08P13 />} />
            <Route path="/m08-14-prakticka-uloha" element={<M08P14 />} />
            <Route path="/m08-automatizacia" element={<Navigate to="/m08-01-uvod" replace />} />
            <Route path="/la-01-uvod" element={<LAP01 />} />
            <Route path="/la-02-zrkadlo" element={<LAP02 />} />
            <Route path="/la-03-otazky" element={<LAP03 />} />
            <Route path="/la-04-rozklad" element={<LAP04 />} />
            <Route path="/la-05-varianty" element={<LAP05 />} />
            <Route path="/la-06-perspektivy" element={<LAP06 />} />
            <Route path="/la-07-sparring" element={<LAP07 />} />
            <Route path="/la-08-low-high" element={<LAP08 />} />
            <Route path="/la-09-checklist" element={<LAP09 />} />
            <Route path="/la-10-prakticka-uloha" element={<LAP10 />} />
            <Route path="/lab-a" element={<Navigate to="/la-01-uvod" replace />} />
            <Route path="/lb-01-uvod" element={<LBP01 />} />
            <Route path="/lb-02-text-nastroj" element={<LBP02 />} />
            <Route path="/lb-03-struktura" element={<LBP03 />} />
            <Route path="/lb-04-jazyk" element={<LBP04 />} />
            <Route path="/lb-05-skracovanie" element={<LBP05 />} />
            <Route path="/lb-06-ton" element={<LBP06 />} />
            <Route path="/lb-07-format" element={<LBP07 />} />
            <Route path="/lb-08-halucinacie" element={<LBP08 />} />
            <Route path="/lb-09-bezpecnost" element={<LBP09 />} />
            <Route path="/lb-10-kritik" element={<LBP10 />} />
            <Route path="/lb-11-zhrnutie" element={<LBP11 />} />
            <Route path="/lb-12-prakticka-uloha" element={<LBP12 />} />
            <Route path="/lab-b" element={<Navigate to="/lb-01-uvod" replace />} />
            <Route path="/lc-01-uvod" element={<LCP01 />} />
            <Route path="/lc-02-kedy-asistent" element={<LCP02 />} />
            <Route path="/lc-03-specifikacia" element={<LCP03 />} />
            <Route path="/lc-04-iteracia" element={<LCP04 />} />
            <Route path="/lc-05-testovanie" element={<LCP05 />} />
            <Route path="/lc-06-hranice" element={<LCP06 />} />
            <Route path="/lc-07-prakticka-uloha" element={<LCP07 />} />
            <Route path="/lab-c" element={<Navigate to="/lc-01-uvod" replace />} />
            <Route path="/ld-01-uvod" element={<LDP01 />} />
            <Route path="/ld-02-rychly-start" element={<LDP02 />} />
            <Route path="/ld-03-typy-obrazkov" element={<LDP03 />} />
            <Route path="/ld-04-styl" element={<LDP04 />} />
            <Route path="/ld-05-promptovanie" element={<LDP05 />} />
            <Route path="/ld-06-iteracie" element={<LDP06 />} />
            <Route path="/ld-07-infografika" element={<LDP07 />} />
            <Route path="/ld-08-referencie" element={<LDP08 />} />
            <Route path="/ld-09-pouzitie" element={<LDP09 />} />
            <Route path="/ld-10-prava-etika" element={<LDP10 />} />
            <Route path="/ld-11-prakticka-uloha" element={<LDP11 />} />
            <Route path="/lab-d" element={<Navigate to="/ld-01-uvod" replace />} />
            <Route path="/le-01-uvod" element={<LEP01 />} />
            <Route path="/le-02-brief" element={<LEP02 />} />
            <Route path="/le-03-typy" element={<LEP03 />} />
            <Route path="/le-04-dokument" element={<LEP04 />} />
            <Route path="/le-05-storyline" element={<LEP05 />} />
            <Route path="/le-06-mapa" element={<LEP06 />} />
            <Route path="/le-07-vizual" element={<LEP07 />} />
            <Route path="/le-08-sablona" element={<LEP08 />} />
            <Route path="/le-09-qa" element={<LEP09 />} />
            <Route path="/le-10-zhrnutie" element={<LEP10 />} />
            <Route path="/le-11-prakticka-uloha" element={<LEP11 />} />
            <Route path="/lab-e" element={<Navigate to="/le-01-uvod" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
