import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import BehindResults from "@/components/BehindResults";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import TrustBadge from "@/components/TrustBadge";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <About />
      <BehindResults />
      <Services />
      <Benefits />
      <Testimonials />
      <TrustBadge />
      <FAQ />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
