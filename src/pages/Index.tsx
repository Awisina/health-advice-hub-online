
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Clock, Phone, Mail, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pharmacies from "@/components/Pharmacies";
import AIConsultant from "@/components/AIConsultant";
import PaidConsultations from "@/components/PaidConsultations";
import Advertising from "@/components/Advertising";
import CommissionSettings from "@/components/CommissionSettings";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PaidConsultations />
      <CommissionSettings />
      <Advertising />
      <AIConsultant />
      <Contact />
      <Pharmacies />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
