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
      question: "Posso cancelar os serviços a qualquer momento?",
      answer: "Sim! Trabalhamos com transparência total. Não há fidelidade obrigatória. Nosso objetivo é entregar tanto valor que você queira continuar conosco por escolha, não por contrato."
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
