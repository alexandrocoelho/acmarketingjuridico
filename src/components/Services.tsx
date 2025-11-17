import { Megaphone, PenTool, TrendingUp, Camera, CheckCircle, Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de conteúdos personalizados para suas redes sociais com foco em resultados.",
      features: [
        "Análise de mercado e concorrência",
        "Definição de persona e público-alvo",
        "Calendário editorial personalizado"
      ]
    },
    {
      icon: PenTool,
      title: "Produção de Conteúdo",
      description: "Criação de roteiros estratégicos, copys persuasivas e gravação profissional com equipamento próprio.",
      features: [
        "Roteiros para vídeos e reels",
        "Copys para posts e anúncios",
        "Design gráfico profissional"
      ]
    },
    {
      icon: TrendingUp,
      title: "Gestão de Tráfego",
      description: "Anúncios direcionados que capturam leads qualificados no momento certo.",
      features: [
        "Campanhas no Google Ads",
        "Anúncios no Instagram e Facebook",
        "Otimização de conversão"
      ]
    },
    {
      icon: Camera,
      title: "Gravação e Edição",
      description: "Produção audiovisual completa com equipamento profissional e edição de alta qualidade.",
      features: [
        "Gravação com equipamento 4K",
        "Edição profissional de vídeos",
        "Motion graphics e animações"
      ]
    },
    {
      icon: Briefcase,
      title: "Gestão de Escritório",
      description: "Otimização completa da gestão e processos do seu escritório jurídico para máxima eficiência.",
      features: [
        "Automação de processos",
        "Gestão comercial inteligente",
        "Organização de fluxos de trabalho"
      ]
    },
    {
      icon: MapPin,
      title: "Gestão de Google Business Profile",
      description: "Otimização do seu perfil no Google para aparecer nas buscas locais e atrair mais clientes.",
      features: [
        "Otimização completa do perfil",
        "Gestão de avaliações e reputação",
        "Estratégias de SEO local"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Serviços <span className="text-primary">oferecidos</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Soluções completas para posicionar você como autoridade no mercado jurídico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
