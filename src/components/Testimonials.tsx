import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Santos",
      role: "Advogado Criminalista",
      content: "O trabalho do Alexandro transformou minha presença digital. Em 3 meses consegui dobrar o número de consultas qualificadas através das redes sociais.",
      rating: 5
    },
    {
      name: "Dra. Mariana Costa",
      role: "Advogada Trabalhista",
      content: "Profissional extremamente dedicado e estratégico. As campanhas de tráfego trouxeram resultados consistentes e clientes realmente interessados nos meus serviços.",
      rating: 5
    },
    {
      name: "Dr. Paulo Mendes",
      role: "Advogado Empresarial",
      content: "Excelente retorno sobre o investimento. O posicionamento como autoridade no LinkedIn me abriu portas para grandes oportunidades e parcerias estratégicas.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Resultados reais de advogados que transformaram sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
