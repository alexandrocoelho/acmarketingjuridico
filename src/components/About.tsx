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
            Por Que Escolher um <span className="text-primary">Especialista</span>?
          </h2>

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
