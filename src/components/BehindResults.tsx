import alexandroPhoto from "@/assets/alexandro-photo.jpg";
import { Award, Target, TrendingUp } from "lucide-react";

const BehindResults = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Quem está por trás <span className="text-primary">dos resultados</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-glow">
              <img
                src={alexandroPhoto}
                alt="Alexandro Coelho - Especialista em Marketing Jurídico"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Alexandro Coelho</h3>
              <p className="text-xl text-primary">
                Especialista em Marketing Jurídico e Transformação Digital
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Com formação em Direito e pós-graduação em Direito Digital, Gestão de Marketing Digital, 
              Mídias Sociais e Inteligência Comercial, transformo a presença digital de advogados em 
              verdadeiras máquinas de captação de clientes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha missão é clara: fazer advogados se destacarem no mercado através de estratégias 
              personalizadas que unem tecnologia, marketing e conhecimento jurídico.
            </p>

            <div className="grid gap-4 pt-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Formação Especializada</h4>
                  <p className="text-muted-foreground">Bacharel em Direito com pós em Marketing Digital e Direito Digital</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Foco em Resultados</h4>
                  <p className="text-muted-foreground">Estratégias comprovadas que geram crescimento real e sustentável</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Inovação Constante</h4>
                  <p className="text-muted-foreground">Uso de IA e tecnologias de ponta aplicadas à advocacia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindResults;
