import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Clock, Phone, Mail, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MedicalInstitutions from "@/components/MedicalInstitutions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pharmacies from "@/components/Pharmacies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <MedicalInstitutions />
      <Pharmacies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
