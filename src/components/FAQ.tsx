import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a consultoria inicial?",
      answer: "A consultoria inicial é gratuita e serve para entendermos suas necessidades, objetivos e o momento atual do seu escritório. Nela, fazemos uma análise da sua presença digital e apresentamos as melhores estratégias para o seu caso específico."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados começam a aparecer entre 30 a 60 dias, dependendo da estratégia implementada. Gestão de tráfego pode gerar leads mais rapidamente, enquanto construção de autoridade e SEO são investimentos de médio prazo com resultados mais duradouros."
    },
    {
      question: "Preciso ter conhecimento técnico em marketing digital?",
      answer: "Não! Essa é justamente nossa função. Cuidamos de toda a parte técnica e estratégica do marketing digital. Você só precisa focar na sua advocacia enquanto nós cuidamos de atrair os clientes certos para você."
    },
    {
      question: "Os serviços respeitam o Código de Ética da OAB?",
      answer: "Absolutamente! Todas as nossas estratégias são 100% alinhadas com o Provimento 205/2021 da OAB e com o Código de Ética. Como sou bacharel em Direito, tenho conhecimento profundo das regras e limitações da publicidade jurídica."
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "O investimento varia de acordo com os serviços contratados e os objetivos do seu escritório. Na consultoria gratuita, apresentamos um plano personalizado com valores transparentes, sem custos ocultos. Temos soluções para diferentes perfis e orçamentos."
    },
    {
      question: "Vocês trabalham com planos personalizados?",
      answer: "Sim! Cada escritório tem necessidades únicas. Por isso, criamos estratégias 100% personalizadas baseadas no seu nicho de atuação, objetivos, orçamento e momento atual. Não trabalhamos com pacotes prontos, mas com soluções sob medida."
    },
    {
      question: "Eu preciso enviar ideias de conteúdo ou vocês criam tudo?",
      answer: "Nós podemos criar todo o conteúdo estratégico para você, desde o planejamento até a execução. Mas se você tiver ideias ou preferir participar ativamente do processo, trabalhamos em conjunto. A escolha é sua!"
    },
    {
      question: "Esse serviço é para advogados iniciantes ou apenas para escritórios grandes?",
      answer: "Atendemos advogados em todos os estágios da carreira! Desde profissionais que estão começando e querem construir sua marca do zero, até escritórios estabelecidos que desejam expandir e consolidar sua autoridade digital."
    },
    {
      question: "Como o posicionamento digital ajuda meu escritório a se diferenciar da concorrência?",
      answer: "O posicionamento digital estratégico torna você referência no seu nicho. Através de conteúdo de valor, presença consistente e comunicação autêntica, você constrói autoridade, gera confiança e fica na mente do seu cliente ideal quando ele precisar de um advogado."
    },
    {
      question: "Eu sou tímido(a) para gravar vídeos. Vocês ajudam com roteiro e direção?",
      answer: "Sim! Oferecemos suporte completo. Criamos roteiros detalhados, orientamos sobre postura e dicção, e ajudamos você a se sentir confortável na frente das câmeras. Muitos clientes começam tímidos e hoje gravam com naturalidade."
    },
    {
      question: "Preciso investir em equipamentos profissionais?",
      answer: "Não necessariamente. Um smartphone atual já produz vídeos e fotos de ótima qualidade. Conforme sua estratégia avança e você sentir necessidade, podemos orientar sobre investimentos em equipamentos mais profissionais."
    },
    {
      question: "Minhas informações e dados do escritório ficam protegidos?",
      answer: "Absolutamente! Trabalhamos com total confidencialidade e sigilo profissional. Todas as informações compartilhadas são tratadas com máxima segurança. Podemos firmar acordos de confidencialidade (NDA) se você preferir."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
