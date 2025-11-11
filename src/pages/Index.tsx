import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustBadge from "@/components/TrustBadge";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <TrustBadge />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
