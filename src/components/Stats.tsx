import { useEffect, useRef, useState } from "react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { Users, TrendingUp, Award } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const lawyersCount = useCountAnimation(100, 2000, isVisible);
  const projectsCount = useCountAnimation(250, 2000, isVisible);
  const satisfactionCount = useCountAnimation(98, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm">
            <Users className="w-12 h-12 text-primary mx-auto" />
            <div className="text-5xl font-bold text-primary">+{lawyersCount}</div>
            <p className="text-muted-foreground text-lg">Advogados Atendidos</p>
          </div>

          <div className="text-center space-y-3 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm">
            <TrendingUp className="w-12 h-12 text-primary mx-auto" />
            <div className="text-5xl font-bold text-primary">+{projectsCount}</div>
            <p className="text-muted-foreground text-lg">Projetos Entregues</p>
          </div>

          <div className="text-center space-y-3 p-6 rounded-lg bg-secondary/50 backdrop-blur-sm">
            <Award className="w-12 h-12 text-primary mx-auto" />
            <div className="text-5xl font-bold text-primary">{satisfactionCount}%</div>
            <p className="text-muted-foreground text-lg">Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
