
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import AIConsultantPage from "./pages/AIConsultant";
import PaidConsultationsPage from "./pages/PaidConsultations";
import MedicalInstitutionsPage from "./pages/MedicalInstitutions";
import PharmaciesPage from "./pages/Pharmacies";
import AdvertisingPage from "./pages/Advertising";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="health-advice-hub-online">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-consultant" element={<AIConsultantPage />} />
          <Route path="/paid-consultations" element={<PaidConsultationsPage />} />
          <Route path="/institutions" element={<MedicalInstitutionsPage />} />
          <Route path="/pharmacies" element={<PharmaciesPage />} />
          <Route path="/advertising" element={<AdvertisingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
