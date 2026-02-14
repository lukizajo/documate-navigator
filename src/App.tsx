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
import M04Page from "./pages/M04Page";
import M05Page from "./pages/M05Page";
import M06Page from "./pages/M06Page";
import M07Page from "./pages/M07Page";
import M08Page from "./pages/M08Page";
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
            <Route path="/m04-kontext" element={<M04Page />} />
            <Route path="/m05-vyhladavanie" element={<M05Page />} />
            <Route path="/m06-ai-v-praci" element={<M06Page />} />
            <Route path="/m07-osobny-zivot" element={<M07Page />} />
            <Route path="/m08-automatizacia" element={<M08Page />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
