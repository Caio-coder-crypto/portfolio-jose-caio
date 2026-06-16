import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap, Users, TrendingUp, Code2, Smartphone } from "lucide-react";

/**
 * Design Philosophy: "Autoridade em CRM & Revenue Intelligence"
 * - Linguagem acessível (CEO, CFO, Dev entendem)
 * - DataHub como case principal (proof of concept)
 * - Foco em ROI e impacto real
 * - Dark mode profissional com verde-limão
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-primary/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="animate-fade-in space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Especialista em CRM & Revenue Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Conecte seus dados. Entenda seu negócio.
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transformo dados fragmentados em decisões de receita. Se você tem CRM, WhatsApp e anúncios rodando separados, você está deixando dinheiro na mesa. Vou mostrar o caminho.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5585988842142&text=Olá!+Cheguei+aqui+através+do+seu+portfólio.&type=phone_number&app_absent=0', '_blank')}>
                Conversar sobre seu projeto
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('datahub-case')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver case de sucesso
              </Button>
              </div>

              <div className="flex gap-8 pt-8 text-sm">
                <div>
                  <p className="font-semibold text-primary">5+</p>
                  <p className="text-muted-foreground">Plataformas integradas</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">100M+</p>
                  <p className="text-muted-foreground">Dados processados</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">3x</p>
                  <p className="text-muted-foreground">ROI médio</p>
                </div>
              </div>
            </div>

            {/* Foto */}
            <div className="animate-slide-in-down order-1 md:order-2 w-full flex justify-center">
              <div className="relative w-full max-w-md" style={{ maxHeight: "500px" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663053457614/oPlSRktRLdoxzdff.jpg"
                alt="Caio Oliveira"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-primary/20"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="py-20 md:py-28 border-b border-primary/10">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Quem sou eu</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Meu nome é <strong>Caio Oliveira</strong>. Sou desenvolvedor e especialista em CRM desde 2020. Começei automatizando processos simples em Google Sheets, depois escalei para sistemas que processam milhões de dados em tempo real.
            </p>

            <p>
              Hoje, meu foco é resolver um problema específico: <strong>empresas com CRM, WhatsApp e anúncios desconectados</strong>. Cada sistema tem seus dados, mas ninguém consegue responder perguntas simples como "De onde vem minha receita?", "Qual canal dá lucro?" ou "Quanto custa cada cliente?".
            </p>

            <p>
              Construí a <strong>DataHub</strong> — uma plataforma de Revenue Intelligence que conecta CRM, WhatsApp Business e Meta/Google Ads, transformando dados em decisões. Hoje, a plataforma processa mais de 100 milhões de dados por mês e ajuda empresas a entender exatamente onde está o dinheiro.
            </p>

            <p>
              <strong>Minha especialidade:</strong> integração de APIs, processamento de dados em tempo real, dashboards de BI, e automações que economizam tempo e dinheiro. Trabalho com Python, Node.js, Google Apps Script, e ferramentas como n8n e Supabase.
            </p>

            <p className="text-muted-foreground italic">
              Se você quer conectar seus dados e finalmente entender seu negócio, é comigo.
            </p>
          </div>
        </div>
      </section>

      {/* CASE PRINCIPAL: DATAHUB */}
      <section id="datahub-case" className="py-20 md:py-28 border-b border-primary/10">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DataHub: Revenue Intelligence Platform</h2>
          <p className="text-muted-foreground mb-12 text-lg">Meu maior projeto. Uma plataforma que conecta CRM, WhatsApp e anúncios em um único dashboard.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Descrição */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">O Problema</h3>
                <p className="text-muted-foreground">
                  Empresas têm CRM (DataCrazy), WhatsApp Business e anúncios (Meta/Google) rodando separados. Ninguém consegue responder: "De onde vem minha receita? Qual canal dá lucro? Quanto custa cada cliente?"
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">A Solução</h3>
                <p className="text-muted-foreground">
                  DataHub conecta as três plataformas em um único dashboard. Mostra receita no período, pipeline em aberto, negócios fechados, taxa de conversão, ticket médio, tempo médio de fechamento, CAC WhatsApp, ROAS por canal, ranking de vendedores, e muito mais — tudo em tempo real.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Impacto</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Clientes entendem exatamente onde está o dinheiro (receita por canal, origem de leads)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Redução de 60% no tempo de análise de dados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Decisões de marketing baseadas em dados reais (ROAS, CAC, ROI por canal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>100M+ dados processados por mês com latência mínima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <a href="https://datahub-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Acessar DataHub agora</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stack Técnico */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">Stack Técnico</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Frontend</p>
                  <p className="text-foreground">HTML + JavaScript (vanilla) + Tailwind CSS + Chart.js</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Backend</p>
                  <p className="text-foreground">Node.js (Vercel Serverless) + Supabase (PostgreSQL)</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Integrações</p>
                  <p className="text-foreground">DataCrazy API, Meta Graph API, Google Ads API, WhatsApp Business</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Dados & BI</p>
                  <p className="text-foreground">Processamento em tempo real, cache inteligente, cálculos derivados</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Deploy</p>
                  <p className="text-foreground">Vercel (CI/CD automático), multi-tenant, kill-switch de inadimplência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas do DataHub */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-primary mb-2">5+</p>
              <p className="text-sm text-muted-foreground">Integrações</p>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-primary mb-2">100M+</p>
              <p className="text-sm text-muted-foreground">Dados/mês</p>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-primary mb-2">15+</p>
              <p className="text-sm text-muted-foreground">Métricas em tempo real</p>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-primary mb-2">1s</p>
              <p className="text-sm text-muted-foreground">Latência média</p>
            </div>
          </div>

          {/* Features principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Visão Geral (Dashboard Principal)</h4>
                <p className="text-sm text-muted-foreground">Receita no período, pipeline, negócios fechados, taxa de conversão em um único lugar</p>
              </div>
            </div>

            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">ROI por Canal</h4>
                <p className="text-sm text-muted-foreground">Origem dos Leads, Funil de Vendas, Gastos & ROI — entenda qual canal dá lucro</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Performance da Equipe</h4>
                <p className="text-sm text-muted-foreground">Ranking de vendedores, produtividade, atendimento e comissões automáticas</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Smartphone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">WhatsApp & Conversas</h4>
                <p className="text-sm text-muted-foreground">CAC WhatsApp, ROAS WhatsApp, histórico de conversas e simulador de receita</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK GERAL */}
      <section className="py-20 md:py-28 border-b border-primary/10">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meu Stack Tecnológico</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Backend & Integrações
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python (automações, processamento de dados)</li>
                <li>• Node.js (APIs, serverless functions)</li>
                <li>• Google Apps Script (automações em Sheets/Gmail)</li>
                <li>• n8n (orquestração de workflows)</li>
                <li>• Webhooks e APIs REST</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Frontend & BI
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• HTML + JavaScript (vanilla)</li>
                <li>• Tailwind CSS (design system)</li>
                <li>• Chart.js (gráficos e dashboards)</li>
                <li>• React (quando necessário)</li>
                <li>• Responsive design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Dados & Banco
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Supabase (PostgreSQL)</li>
                <li>• BigQuery (análise de dados em larga escala)</li>
                <li>• Redis (cache e buffers)</li>
                <li>• Airtable (CRM e automações)</li>
                <li>• DataCrazy (CRM principal)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Plataformas & APIs
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Meta Ads API (Facebook/Instagram)</li>
                <li>• Google Ads API (anúncios)</li>
                <li>• WhatsApp Business API</li>
                <li>• Vercel (deploy e serverless)</li>
                <li>• GitHub (versionamento)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-primary/10">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para conectar seus dados?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Se você tem CRM, WhatsApp e anúncios, vamos conversar sobre como transformar esses dados em decisões de receita.
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5585988842142&text=Olá!+Cheguei+aqui+através+do+seu+portfólio.&type=phone_number&app_absent=0', '_blank')}>
                Conversar no WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('mailto:josecaiocaio746@gmail.com')}>
                Enviar Email
              </Button>
            </div>

          <div className="mt-12 pt-12 border-t border-primary/10 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://api.whatsapp.com/send/?phone=5585988842142&text=Olá!+Cheguei+aqui+através+do+seu+portfólio.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition">
              💬 WhatsApp: +55 85 98884-2142
            </a>
            <a href="mailto:josecaiocaio746@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition">
              📧 josecaiocaio746@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/caio-oliveira-119992287/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/Caio-coder-crypto" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
