import { GradientButton } from "@/components/ui/gradient-button";
import { FaWhatsapp } from "react-icons/fa";
import { BackgroundPaths } from "@/components/ui/background-paths";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consultoria gratuita.");
    window.open(`https://wa.me/5527999915060?text=${message}`, "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-4 bg-gradient-hero overflow-hidden">
      {/* Animated background paths */}
      <BackgroundPaths />
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(45_90%_60%_/_0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_hsl(45_90%_60%_/_0.05),_transparent_60%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-12 animate-fade-in-up">
          <div className="space-y-8">
            <p className="text-gold text-sm md:text-base font-bold tracking-[0.2em] uppercase">
              Marketing Jurídico
            </p>
            
            {/* Main title with glow effect */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="block">Posicionamento digital</span>
              <span className="block">estratégico para</span>
              <span className="text-gold block mt-2" style={{ textShadow: '0 0 40px hsl(45 90% 60% / 0.4)' }}>
                advogados
              </span>
            </h1>
            
            <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Aumente sua visibilidade, fortaleça sua autoridade e atraia novos clientes com estratégias que realmente funcionam.
            </p>
          </div>

          {/* CTAs with improved spacing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <GradientButton
              onClick={handleWhatsAppClick}
              className="text-lg px-10 py-7"
            >
              Elevar o nível
              <FaWhatsapp className="w-6 h-6" />
            </GradientButton>
            <GradientButton
              onClick={scrollToServices}
              variant="outline"
              className="text-lg px-10 py-7"
            >
              Mais informações
            </GradientButton>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
