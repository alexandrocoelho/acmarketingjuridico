import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-primary">AC</span>{" "}
              <span className="text-foreground">MARKETING & JURÍDICO</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            Agendar Reunião
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
