import { Shield, CheckCircle } from "lucide-react";

const TrustBadge = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-secondary/50 border border-primary/20 rounded-lg p-8 text-center space-y-4">
          <div className="flex justify-center gap-4 items-center">
            <Shield className="w-16 h-16 text-primary" />
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold">
            Empresa Registrada e Certificada
          </h3>
          
          <p className="text-muted-foreground text-lg">
            Trabalhamos com total transparência e segurança. Nossa empresa possui registro oficial
            para prestar serviços de qualidade e conformidade.
          </p>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">CNPJ</p>
            <p className="text-xl font-mono font-semibold text-primary">
              63.497.711/0001-33
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Empresa Regularizada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Serviços Certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Atendimento Profissional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
