import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexNoiise from "./pages/IndexNoiise";
import Services from "./pages/Services";
import About from "./pages/About";
import Agences from "./pages/Agences";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
// Service pages
import Ads from "./pages/services/Ads";
import WebCreation from "./pages/services/WebCreation";
import SocialMedia from "./pages/services/SocialMedia";
import Webdesign from "./pages/services/Webdesign";
import Analytics from "./pages/services/Analytics";
import MarketingDigital from "./pages/services/MarketingDigital";
// About pages
import History from "./pages/about/History";
import Awards from "./pages/about/Awards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexNoiise />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ads" element={<Ads />} />
          <Route path="/services/web-creation" element={<WebCreation />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/webdesign" element={<Webdesign />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/marketing-digital" element={<MarketingDigital />} />
          <Route path="/agences" element={<Agences />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/awards" element={<Awards />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
