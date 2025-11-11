import { CheckCircle2, TrendingUp, Users, Zap, Shield, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Visibilidade",
      description: "Destaque-se da concorrência e seja encontrado pelos clientes ideais no momento certo."
    },
    {
      icon: Users,
      title: "Captação Qualificada",
      description: "Atraia leads realmente interessados nos seus serviços, aumentando sua taxa de conversão."
    },
    {
      icon: Zap,
      title: "Economia de Tempo",
      description: "Foque no que faz de melhor: advogar. Nós cuidamos de toda sua presença digital."
    },
    {
      icon: Shield,
      title: "Autoridade no Mercado",
      description: "Construa uma imagem sólida e seja reconhecido como referência na sua área de atuação."
    },
    {
      icon: Sparkles,
      title: "Estratégias Personalizadas",
      description: "Soluções sob medida para o seu perfil profissional e objetivos de crescimento."
    },
    {
      icon: CheckCircle2,
      title: "Resultados Mensuráveis",
      description: "Acompanhe o crescimento real do seu escritório com métricas e relatórios detalhados."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por Que <span className="text-primary">Contratar?</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Vantagens exclusivas que vão transformar sua presença digital e alavancar sua carreira jurídica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <benefit.icon className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
