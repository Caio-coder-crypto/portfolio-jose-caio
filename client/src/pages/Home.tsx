import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, MessageCircle } from "lucide-react";
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
          <div className="text-2xl font-bold text-primary">Caio Oliveira</div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-primary transition-colors">
              Início
            </a>
            <a href="#pain-points" className="hover:text-primary transition-colors">
              Desafios
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#methodology" className="hover:text-primary transition-colors">
              Metodologia
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Sua operação de vendas,{" "}
              <span className="text-primary">100% automatizada</span> no Kommo.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Eu desenho e implemento automações de CRM que eliminam tarefas manuais, evitam
              bloqueios e transformam seus leads em clientes recorrentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com Especialista via WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="animate-slide-in-down hidden md:flex justify-center">
            <img
              src="/IMG_7301(1).jpg"
              alt="Caio Oliveira"
              className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-20 bg-secondary/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Seu negócio sofre com isso?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Se você marcou "sim" para qualquer um desses, você não precisa de mais planilhas.
            Você precisa de um processo.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Falta de previsão de vendas.",
              "Medo de fazer disparos em massa e ser bloqueado.",
              "Não saber quais canais de aquisição trazem mais retorno.",
              "Leads duplicados e processos manuais que tomam tempo.",
            ].map((pain, idx) => (
              <Card
                key={idx}
                className="p-6 border-2 border-border hover:border-primary/50 transition-colors animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-foreground font-medium">{pain}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <img
                src="/IMG_6691.jpg"
                alt="Caio em ação"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

            <div className="animate-slide-in-up">
              <h2 className="text-4xl font-bold mb-6">Prazer, sou Caio Oliveira</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou Especialista em Automação e Processos de Vendas focado no Kommo CRM. Minha
                missão é traduzir a complexidade técnica (Python, JS, Webhooks) em resultados
                claros para sua empresa.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Como Gestor de mais de 15 operações ativas, eu não apenas "configuro o CRM",
                mas desenho a arquitetura completa para que sua equipe venda mais, com menos
                esforço manual. Sou graduando em Análise e Desenvolvimento de Sistemas e
                desenvolvedor de soluções de automação avançada.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "+2 Anos", desc: "de Experiência" },
                  { label: "+15", desc: "Operações Ativas" },
                  { label: "Especialista", desc: "Kommo & GAS" },
                  { label: "Desenvolvedor", desc: "Java, Python, JS" },
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="p-6 border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="text-2xl font-bold text-primary mb-2">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-secondary/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">
            O plano de 6 meses para sua Máquina de Vendas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Uma jornada completa de transformação, da organização até a escala segura.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mês 1-2: Fundação",
                items: [
                  "Diagnóstico e Mapeamento",
                  "Estruturação de Funil",
                  "Importação da Base",
                  "Automações Iniciais",
                ],
              },
              {
                title: "Mês 3-4: Escala Segura",
                items: [
                  "Sistema Anti-bloqueio",
                  "Automações Avançadas",
                  "Reativação de Clientes",
                  "Otimização de Performance",
                ],
              },
              {
                title: "Mês 5-6: Otimização",
                items: [
                  "Suporte Técnico 24/7",
                  "Monitoramento Contínuo",
                  "Novas Campanhas",
                  "Escalabilidade",
                ],
              },
            ].map((phase, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-border hover:border-primary transition-colors animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Automações na Prática (Cases)</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Veja como transformei operações reais em máquinas de vendas eficientes.
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Reestruturação e Automação Pós-Venda (Larosy)",
                problem:
                  "A operação do cliente no Kommo estava bagunçada, com leads duplicados e automações quebradas, gerando retrabalho e perda de vendas.",
                solution:
                  "Reestruturei toda a base de leads e criei uma automação que, na 'Venda Ganha', captura os dados do lead, envia para Google Sheets e move o lead para a 'Carteira' sem criar duplicatas.",
                tech: ["Kommo", "Make/Integromat", "Google Sheets", "Webhooks"],
              },
              {
                title: "Sistema de Disparo em Massa Anti-Bloqueio",
                problem:
                  "Clientes com grandes volumes de disparos no WhatsApp (ex: +1.000/dia) estavam sendo bloqueados, parando a operação comercial.",
                solution:
                  "Desenvolvi um sistema de 'Disparo Cadenciado' que usa um balanceador (Round Robin) para distribuir os disparos entre múltiplos números e uma lógica de 'Expediente' que pausa as automações fora do horário comercial.",
                tech: ["Kommo", "Salesbot", "Round Robin", "Controle de Horário"],
              },
              {
                title: "Normalização de Dados com Google Apps Script",
                problem:
                  "Bases de leads exportadas com milhares de linhas, informações de sócios em colunas diferentes e dados duplicados, impossibilitando a análise.",
                solution:
                  "Criei um script em Google Apps Script que unifica leads usando o CNPJ como chave única, agrupa sócios em linhas separadas e deduplica informações.",
                tech: ["Google Apps Script", "JavaScript", "Google Sheets"],
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-border hover:border-primary/50 transition-colors animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problema</h4>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solução</h4>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Vamos otimizar sua operação?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Clique no botão abaixo para um diagnóstico gratuito do seu CRM. Sem compromisso.
            </p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary mb-12">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Caio Oliveira no WhatsApp
              </Button>
            </a>

            <div className="flex justify-center gap-6">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Github className="h-6 w-6 text-primary" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Caio Oliveira</h3>
              <p className="text-sm text-secondary-foreground/80">
                Especialista em Automação de Vendas e CRM Kommo
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
              <p className="text-sm">Maranguape, CE</p>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
            <p>© 2026 Caio Oliveira. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
