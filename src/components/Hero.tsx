import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consultoria gratuita.");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(45_95%_55%_/_0.1),_transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary text-sm md:text-base font-semibold tracking-wider uppercase">
              Marketing Jurídico Estratégico
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforme Sua Imagem{" "}
              <span className="block">Profissional em</span>
              <span className="text-primary block">Autoridade no Mercado</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Especialista em posicionamento digital para advogados que buscam crescimento,
              credibilidade e resultados reais através de estratégias personalizadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-lg px-8 py-6 shadow-glow group"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Conheça os Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
