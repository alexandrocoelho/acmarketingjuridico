import { useEffect, useRef, useState } from "react";
import { Briefcase, Lightbulb, Target } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className={`space-y-8 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Conheça o <span className="text-primary">Especialista</span>
          </h2>

          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Olá! Sou <span className="text-foreground font-semibold">Alexandro Coelho</span>, tenho 23 anos e sou bacharel em Direito. 
              Como especialista em Marketing Jurídico e pós-graduando em Direito Digital, Gestão de Marketing Digital, 
              Mídias Sociais e Inteligência Comercial, dedico meu trabalho a criar e valorizar a imagem de advogados 
              que desejam se destacar no mercado.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Meu foco é claro: ajudar advogados a construírem uma imagem de valor e autoridade no ambiente digital, 
              gerando crescimento real e sustentável para suas carreiras. Através de estratégias personalizadas e 
              uso inteligente de tecnologia, transformo a presença digital em uma poderosa ferramenta de captação 
              de clientes e fortalecimento da marca pessoal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-card border border-border space-y-3">
              <Briefcase className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Especialização</h3>
              <p className="text-muted-foreground">Marketing Jurídico e Direito Digital</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border space-y-3">
              <Lightbulb className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Inovação</h3>
              <p className="text-muted-foreground">IA aplicada na Advocacia</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border space-y-3">
              <Target className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">Resultados</h3>
              <p className="text-muted-foreground">Crescimento e Valorização</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
