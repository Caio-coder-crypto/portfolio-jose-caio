import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, MessageCircle, Code2, Database, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5585988842142";
  const linkedinLink = "https://linkedin.com/in/caio-oliveira-119992287";
  const githubLink = "https://github.com/Caio-coder-crypto";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <span className="text-primary">&lt;</span>
            <span>Caio</span>
            <span className="text-primary">/&gt;</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-primary transition-colors text-sm">
              Início
            </a>
            <a href="#philosophy" className="hover:text-primary transition-colors text-sm">
              Filosofia
            </a>
            <a href="#stack" className="hover:text-primary transition-colors text-sm">
              Stack
            </a>
            <a href="#cases" className="hover:text-primary transition-colors text-sm">
              Cases
            </a>
            <a href="#services" className="hover:text-primary transition-colors text-sm">
              Serviços
            </a>
            <a href="#contact" className="hover:text-primary transition-colors text-sm">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-up">
            <div className="mb-6 inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary text-sm font-mono">Engenheiro de Soluções</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Engenharia de <span className="text-primary">CRM</span> e Inteligência de Dados.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Arquitetura de ecossistemas de vendas escaláveis via código. Transformo processos manuais em automações auditáveis, integrando CRMs com APIs proprietárias.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Diagnóstico Técnico
              </Button>
            </a>
          </div>

          <div className="animate-slide-in-down hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/IMG_7301(1).jpg"
                alt="Caio Oliveira"
                className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-secondary/10 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">Liberdade Cognitiva</span> através da Automação.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou Caio Oliveira, especialista em automação e estudante de Análise e Desenvolvimento de Sistemas. Minha filosofia é que a tecnologia deve servir para liberar o potencial humano.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Desenvolvo middlewares e scripts personalizados (Google Apps Script/Python) que eliminam o "trabalho robótico" de equipes comerciais. Atuo na intersecção entre Vendas, Lógica de Programação e Business Intelligence, garantindo integridade de dados para tomada de decisão estratégica.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Code2, label: "Código", desc: "Python, GAS, JavaScript" },
                { icon: Database, label: "Dados", desc: "Integridade & Auditoria" },
                { icon: Zap, label: "Automação", desc: "Escalável & Segura" },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 border border-primary/20 bg-primary/5">
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section id="stack" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Stack Tecnológico</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Linguagens",
                items: ["Python", "JavaScript (ES6+)", "Google Apps Script", "SQL"],
              },
              {
                title: "Infraestrutura & Low-Code",
                items: ["Make (Integromat)", "n8n", "Webhooks", "APIs REST"],
              },
              {
                title: "Dados & BI",
                items: ["Looker Studio", "JSON Parsing", "Data Warehousing", "Sheets"],
              },
            ].map((category, idx) => (
              <Card
                key={idx}
                className="p-8 border border-primary/20 hover:border-primary/50 transition-colors animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="text-accent">▸</span>
                      <span className="font-mono text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-secondary/10 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Soluções de Engenharia</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Casos reais de automação complexa que transformaram operações comerciais.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                title: "Orquestrador de Agendas Inteligente",
                tech: "Google Apps Script",
                problem:
                  "Falta de sincronia entre status do CRM e agenda gerava 'no-show' e conflitos de horário.",
                solution:
                  "Sistema backend que escuta webhooks, trata fusos horários (UTC-3) e renderiza eventos no Google Calendar com cores dinâmicas baseadas nas Tags do lead (ex: VIP = Dourado, Frio = Azul), permitindo gestão visual imediata.",
              },
              {
                title: "Gerador de Propostas Server-Side",
                tech: "Document Automation",
                problem: "Vendedores perdiam 20min calculando impostos e formatando PDFs.",
                solution:
                  "Automação via API que intercepta o lead, extrai variáveis complexas (dimensões, material), executa cálculo financeiro via script e renderiza um contrato em PDF instantaneamente. Link injetado no CRM em < 3 segundos.",
              },
              {
                title: "Auditoria Financeira com Trava de Concorrência",
                tech: "LockService & Mutex",
                problem: "Cliques simultâneos de vendedores geravam duplicidade no financeiro.",
                solution:
                  "Algoritmo de fila utilizando LockService (Mutex). O sistema valida timestamps e IDs antes da gravação, impedindo duplicidade na raiz e garantindo integridade do BI.",
              },
              {
                title: "Bot SDR com Processamento de Linguagem Natural",
                tech: "NLP Básico",
                problem: "Triagem manual de agendamentos no WhatsApp consumia tempo de vendedores.",
                solution:
                  "Robô que monitora o chat (Incoming messages). Utilizando String Matching, detecta intenção do cliente (ex: 'agendado', 'confirmar') e move o card automaticamente para a etapa correta do funil.",
              },
              {
                title: "Business Intelligence & Detecção de Gargalos",
                tech: "Data Warehouse",
                problem: "Gestão sem visibilidade dos motivos de perda de leads.",
                solution:
                  "Data Warehouse em nuvem alimentado em tempo real. Dashboard no Looker Studio visualizando 'Aging' (tempo de estagnação) e taxas de conversão reais por vendedor.",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="p-8 border border-primary/20 hover:border-primary/50 transition-colors animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary flex-1">{project.title}</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-mono">
                    {project.tech}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                      O Desafio
                    </h4>
                    <p className="text-muted-foreground text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                      A Engenharia
                    </h4>
                    <p className="text-muted-foreground text-sm">{project.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">O Que Eu Faço</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "Arquitetura de CRM Multi-Plataforma",
                desc: "Design de sistemas integrados que conectam CRMs, ERPs e plataformas de marketing.",
              },
              {
                title: "Sanitização e Migração de Bases",
                desc: "Deduplicação via script, normalização de dados e migração segura entre plataformas.",
              },
              {
                title: "Integrações via API",
                desc: "Conexões robustas entre ERP, CRM e Marketing com tratamento de erros e retry logic.",
              },
              {
                title: "Dashboards de BI",
                desc: "Visualizações em tempo real com previsibilidade de receita e detecção de gargalos.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-6 border border-primary/20 hover:border-primary/50 transition-colors animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/10 border-y border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Pronto para transformar sua operação?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vamos conversar sobre sua arquitetura de vendas e como código pode liberar seu potencial.
            </p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary mb-12">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Diagnóstico Técnico
              </Button>
            </a>

            <div className="flex justify-center gap-6">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Caio Oliveira</h3>
              <p className="text-sm text-secondary-foreground/80">
                Engenheiro de Soluções de CRM & Business Intelligence
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+5585988842142"
                    className="hover:text-primary transition-colors"
                  >
                    (85) 98884-2142
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:josecaiocaio746@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    josecaiocaio746@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Localização</h4>
              <p className="text-sm">Maranguape/Fortaleza, CE</p>
              <p className="text-sm text-secondary-foreground/80">Atuação Remota</p>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
            <p>© 2026 Caio Oliveira - Soluções em CRM & Business Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
