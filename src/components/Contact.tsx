import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consultoria sobre Marketing Jurídico.");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Pronto Para <span className="text-primary">Decolar?</span>
        </h2>
        
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Agende uma consultoria gratuita e descubra como podemos transformar sua presença digital
          em uma máquina de captação de clientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-lg px-8 py-6 shadow-glow group"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar no WhatsApp
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
            onClick={() => window.location.href = "mailto:contato@acmarketingjuridico.com.br"}
          >
            <Mail className="mr-2 w-5 h-5" />
            Enviar E-mail
          </Button>
        </div>

        <div className="pt-12 flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="pt-8 text-sm text-muted-foreground">
          <p>© 2024 AC Marketing & Jurídico. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 63.497.711/0001-33</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
