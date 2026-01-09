import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, MessageCircle, Code2, Database, Zap, Brain } from "lucide-react";
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
            <a href="#about" className="hover:text-primary transition-colors text-sm">
              Sobre
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

      {/* Hero Section - CORRIGIDO PARA MOBILE */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        {/* Layout responsivo: column-reverse no mobile, grid no desktop */}
        <div className="container relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Texto */}
          <div className="animate-slide-in-up order-2 md:order-1 py-8 md:py-0">
            <div className="mb-6 inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary text-sm font-mono">Engenheiro de Soluções</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Engenharia de <span className="text-primary">IA Agêntica</span> & Ecossistemas de CRM
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Arquitetura de vendas autônoma. Unifico CRM, RAG e Agentes de IA para eliminar processos manuais e garantir integridade de dados.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Diagnóstico Técnico
              </Button>
            </a>
          </div>

          {/* Imagem - AGORA VISÍVEL NO MOBILE */}
          <div className="animate-slide-in-down order-1 md:order-2 w-full flex justify-center" style={{minHeight: '350px'}}>
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/IMG_7301(1).jpg"
                alt="Caio Oliveira"
                className="relative rounded-2xl shadow-2xl w-full h-full object-cover border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/10 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">O Engenheiro por trás do Código</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou Caio Oliveira, Engenheiro de Soluções especializado em automação complexa. Atuo na convergência entre Engenharia de Software e Estratégia Comercial.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Não apenas configuro ferramentas; eu construo middlewares, APIs proprietárias e arquiteturas multi-agente (n8n/LangChain) que permitem que empresas escalem sem aumentar o headcount. Meu foco é técnico: auditoria de dados, tratamento de concorrência e inteligência artificial aplicada a vendas.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Code2, label: "Código", desc: "Python, GAS, JavaScript" },
                { icon: Brain, label: "IA Agêntica", desc: "LangChain, n8n, RAG" },
                { icon: Database, label: "Dados", desc: "Integridade & Auditoria" },
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

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "AI & Data Engineering",
                items: ["LangChain", "OpenAI Vision", "Supabase (Vector)", "OpenAI API", "Pinecone", "RAG"],
              },
              {
                title: "Database & CRM",
                items: ["Airtable (Automations)", "PostgreSQL", "SQL", "Redis"],
              },
              {
                title: "Backend & Integration",
                items: ["Python", "Google Apps Script", "n8n (Advanced)", "Webhooks"],
              },
              {
                title: "BI & Analytics",
                items: ["Looker Studio", "BigQuery", "Data Warehouse", "JSON Parsing"],
              },
            ].map((category, idx) => (
              <Card
                key={idx}
                className="p-6 border border-primary/20 hover:border-primary/50 transition-colors animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="text-accent">▸</span>
                      <span className="font-mono">{item}</span>
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
            Arquiteturas complexas que transformaram operações comerciais.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* NOVO - DESTAQUE: Multi-Agente com RAG */}
            <Card className="p-8 border-2 border-primary/50 hover:border-primary transition-colors animate-slide-in-up bg-primary/5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                    DESTAQUE
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Ecossistema Imobiliário Multi-Modal & Buffer de Latência</h3>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-mono whitespace-nowrap ml-4">
                  n8n • Redis • OpenAI Vision
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                    O Desafio
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Fragmentação de mensagens no WhatsApp ("mensagem pipoca") prejudicava a compreensão do contexto. Sem capacidade de analisar fotos de propriedades ou sincronizar dados imobiliários em tempo real.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                    A Engenharia
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    <strong>Buffer de Latência (Redis):</strong> Agrupa mensagens sequenciais para processamento contextual. <strong>Multi-Modalidade:</strong> Transcrição de áudio + Visão Computacional para análise de fotos. <strong>CRM Headless:</strong> Sincronização em tempo real com Airtable e agendamento automático via Google Calendar API.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Impacto:</strong> Qualificação automática (SPIN Selling), recomendação visual de propriedades e gestão de agenda sem intervenção humana.
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Stack: n8n • Redis • OpenAI Vision • Airtable (CRM/DB) • Google Calendar • PostgreSQL
                </p>
              </div>
            </Card>

            {/* Outros Cases */}
            {[
              {
                title: "Orquestrador de Agendas & Auditoria",
                tech: "Google Apps Script",
                problem: "Múltiplos vendedores agendavam o mesmo slot, gerando conflitos financeiros.",
                solution:
                  "Sistema backend com algoritmos de fila (Mutex) para impedir duplicidade. Valida timestamps e IDs antes da gravação, garantindo integridade financeira e operacional.",
              },
              {
                title: "Gerador de Propostas Server-Side",
                tech: "Python & API REST",
                problem: "Vendedores perdiam 20min calculando impostos e formatando PDFs.",
                solution:
                  "Automação que intercepta leads na etapa de negociação, calcula impostos e variáveis complexas no servidor e devolve um contrato jurídico pronto em PDF em menos de 3 segundos.",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="p-8 border border-primary/20 hover:border-primary/50 transition-colors animate-slide-in-up"
                style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
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
                desc: "Design de sistemas integrados que conectam CRMs, ERPs e plataformas de marketing com APIs proprietárias.",
              },
              {
                title: "Agentes de IA & Automação Inteligente",
                desc: "Desenvolvimento de multi-agentes (LangChain/n8n) com RAG para atendimento autônomo e decisões baseadas em contexto.",
              },
              {
                title: "Sanitização e Migração de Bases",
                desc: "Deduplicação via script, normalização de dados e migração segura entre plataformas com integridade garantida.",
              },
              {
                title: "Dashboards de BI & Previsibilidade",
                desc: "Visualizações em tempo real com BigQuery e Looker Studio para detecção de gargalos e ROI.",
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
              Vamos conversar sobre sua arquitetura de vendas e como IA agêntica pode liberar seu potencial.
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
                Engenheiro de Soluções de IA Agêntica & CRM
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
            <p>© 2026 Caio Oliveira - Engenharia de IA & CRM</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
