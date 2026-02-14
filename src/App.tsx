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
import M02Page from "./pages/M02Page";
import M03Page from "./pages/M03Page";
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
            <Route path="/m02-chatboty" element={<M02Page />} />
            <Route path="/m03-promptovanie" element={<M03Page />} />
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
