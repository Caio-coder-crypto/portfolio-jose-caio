import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Code2, Database, BarChart3 } from "lucide-react";

const whatsappLink = "https://wa.me/5585988842142";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden pt-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Texto */}
          <div className="animate-slide-in-up order-2 md:order-1 py-8 md:py-0">
            <div className="mb-6 inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary text-sm font-mono">● disponível para projetos</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-relaxed mb-6">
              Faço automações que resolvem problemas reais no seu CRM.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Caio Oliveira — conecto CRM, WhatsApp, APIs e IA pra acabar com trabalho manual na operação comercial. Dev e analista de dados, foco em DataCrazy, Kommo e integrações via Python/n8n.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary">
                <MessageCircle className="mr-2 h-5 w-5" />
                → Falar sobre seu projeto
              </Button>
            </a>
          </div>

          {/* Imagem */}
          <div className="animate-slide-in-down order-1 md:order-2 w-full flex justify-center">
            <div className="relative w-full max-w-md" style={{ maxHeight: "500px" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/IMG_7301(1).jpg"
                alt="Caio Oliveira"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-contain border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-secondary/10 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Quem sou eu</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou estudante de ADS (Análise e Desenvolvimento de Sistemas) e trabalho com automação de processos comerciais e análise de dados. Comecei configurando CRMs, fui entendendo a lógica por baixo e passei a construir as integrações na mão — Python, Google Apps Script, APIs, webhooks, n8n, o que for necessário.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hoje trabalho principalmente com <strong>DataCrazy</strong> e <strong>Kommo</strong>, mas não me prendo a uma ferramenta só. Também monto dashboards em Looker Studio e BigQuery quando o projeto pede análise de dados, não só automação. Se tem dado entrando e saindo de algum lugar, consigo fazer esse dado trabalhar a favor da operação.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">O que uso no dia a dia</h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "CRM & Operação",
                items: ["DataCrazy CRM", "Kommo (AMO)", "Airtable"],
              },
              {
                title: "IA & Chatbots",
                items: ["OpenAI API (GPT-4, Vision)", "LangChain", "RAG / Pinecone", "Evolution API (WhatsApp)"],
              },
              {
                title: "Backend & Automação",
                items: ["Python", "n8n", "Google Apps Script", "Webhooks / API REST", "Redis"],
              },
              {
                title: "Dados & BI",
                items: ["PostgreSQL / Supabase", "BigQuery", "Looker Studio", "Meta Graph API"],
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

      {/* Credenciais Section */}
      <section id="credenciais" className="py-20 bg-secondary/10 border-y border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-2">Credenciais</h2>
            <p className="text-muted-foreground mb-12 font-mono text-sm">// certificação oficial</p>

            <Card className="p-8 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Foto */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-full max-w-xs rounded-lg overflow-hidden border border-primary/20">
                    <img
                      src="/IMG_7301(1).jpg"
                      alt="Caio - Kommo Partner"
                      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Kommo Partner Certified</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Faço parte do time do <strong>Grupo VAI</strong>, parceiro oficial certificado da Kommo. Na prática, isso significa que os projetos em Kommo que eu implemento seguem a metodologia oficial da plataforma — com acesso a suporte direto, documentação técnica e atualizações em primeira mão.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Não é só "já usei a ferramenta". É um nível de profundidade que só quem tem credencial oficial consegue entregar.
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded-full font-mono">
                    Kommo Partner — via Grupo VAI
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-2">Cases reais</h2>
          <p className="text-muted-foreground mb-12 font-mono text-sm">// o que já rodou em produção</p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Case 1 - Destaque */}
            <Card className="p-8 border-2 border-primary/50 hover:border-primary transition-colors bg-primary/5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                    ★ DESTAQUE — DataCrazy + Meta Graph
                  </div>
                  <h3 className="text-2xl font-bold">Tracker de campanhas direto no CRM (sem UTM manual)</h3>
                </div>
              </div>

              {/* Diagrama SVG */}
              <div className="mb-6 p-4 bg-background rounded-lg border border-primary/10 overflow-x-auto">
                <svg viewBox="0 0 600 120" className="w-full min-w-max" xmlns="http://www.w3.org/2000/svg">
                  {/* Meta */}
                  <rect x="20" y="40" width="100" height="60" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="70" y="75" textAnchor="middle" fill="#c8f04a" fontSize="12" fontFamily="monospace">
                    Meta Graph
                  </text>

                  {/* Seta 1 */}
                  <line x1="120" y1="70" x2="160" y2="70" stroke="#c8f04a" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* Parser */}
                  <rect x="160" y="40" width="100" height="60" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="210" y="75" textAnchor="middle" fill="#c8f04a" fontSize="12" fontFamily="monospace">
                    JSON Parser
                  </text>

                  {/* Seta 2 */}
                  <line x1="260" y1="70" x2="300" y2="70" stroke="#c8f04a" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* CRM */}
                  <rect x="300" y="40" width="100" height="60" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="350" y="75" textAnchor="middle" fill="#c8f04a" fontSize="12" fontFamily="monospace">
                    DataCrazy
                  </text>

                  {/* Seta marker */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#c8f04a" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Problema</h4>
                  <p className="text-muted-foreground text-sm">Ninguém sabia de qual anúncio vinha cada lead no WhatsApp</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">O que foi feito</h4>
                  <p className="text-muted-foreground text-sm">
                    Quando um lead chega via anúncio do Facebook/Instagram, a mensagem carrega dados ocultos — <code>ctwa_clid</code> e <code>sourceId</code>. Montei um fluxo que captura isso e faz 3 chamadas sequenciais na Meta Graph API v19: pega o nome do anúncio, depois a campanha, depois o conjunto. Tudo gravado automaticamente nos campos UTM do lead.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Resultado:</strong> Marketing passou a saber exatamente qual anúncio gerou cada conversa. Zero trabalho manual. Todo lead já chega com utm_content, utm_campanha e utm_medium preenchidos.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["DataCrazy", "Meta Graph API v19", "ctwa_clid", "JSON parsing"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="p-8 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                  DataCrazy — integração
                </div>
                <h3 className="text-2xl font-bold">CRM sincronizado com planilha do cliente em tempo real</h3>
              </div>

              <div className="mb-6 p-4 bg-background rounded-lg border border-primary/10 overflow-x-auto">
                <svg viewBox="0 0 400 100" className="w-full min-w-max" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="25" width="90" height="50" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="65" y="55" textAnchor="middle" fill="#c8f04a" fontSize="11" fontFamily="monospace">
                    DataCrazy
                  </text>

                  <line x1="110" y1="50" x2="150" y2="50" stroke="#c8f04a" strokeWidth="2" markerEnd="url(#arrowhead2)" />

                  <rect x="150" y="25" width="90" height="50" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="195" y="55" textAnchor="middle" fill="#c8f04a" fontSize="11" fontFamily="monospace">
                    Webhook
                  </text>

                  <line x1="240" y1="50" x2="280" y2="50" stroke="#c8f04a" strokeWidth="2" markerEnd="url(#arrowhead2)" />

                  <rect x="280" y="25" width="90" height="50" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="325" y="55" textAnchor="middle" fill="#c8f04a" fontSize="11" fontFamily="monospace">
                    Google Sheets
                  </text>

                  <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#c8f04a" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Problema</h4>
                  <p className="text-muted-foreground text-sm">Vendedor fechava negócio e precisava preencher planilha na mão depois</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">O que foi feito</h4>
                  <p className="text-muted-foreground text-sm">
                    Trigger de etapa no DataCrazy dispara um POST com os dados validados — nome, link, valor, audiência, engajamento — direto pra planilha mestra. Status já cai como "Aguardando Aprovação Cliente".
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Resultado:</strong> Zero preenchimento manual. Zero erro humano. O comercial fecha a conversa e a planilha está atualizada em segundos.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["DataCrazy", "API REST (POST)", "Google Sheets", "Trigger de etapa"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Case 3 */}
            <Card className="p-8 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                  IA + CRM — atendimento
                </div>
                <h3 className="text-2xl font-bold">IA que faz triagem no WhatsApp e agenda reunião sozinha</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Problema</h4>
                  <p className="text-muted-foreground text-sm">Suporte e vendas chegavam junto, a equipe não dava conta de triagem</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">O que foi feito</h4>
                  <p className="text-muted-foreground text-sm">
                    Integrei WhatsApp (via Evolution API) com DataCrazy e OpenAI. A IA lê a mensagem — transcreve áudios também — entende contexto e faz perguntas de SPIN Selling pra descobrir a dor. Se for suporte, avisa a equipe. Se for compra, manda link de agendamento.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Resultado:</strong> Tempo de primeira resposta caiu pra zero. Vendas parou de perder tempo triando e só pega quem já agendou call.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Evolution API", "OpenAI", "DataCrazy", "Cal.com", "SPIN Selling"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Case 4 - Destaque Técnico */}
            <Card className="p-8 border-2 border-primary/50 hover:border-primary transition-colors bg-primary/5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                    ★ n8n + Redis
                  </div>
                  <h3 className="text-2xl font-bold">WhatsApp que não perde contexto quando o cliente manda várias mensagens</h3>
                </div>
              </div>

              <div className="mb-6 p-4 bg-background rounded-lg border border-primary/10 overflow-x-auto">
                <svg viewBox="0 0 500 120" className="w-full min-w-max" xmlns="http://www.w3.org/2000/svg">
                  <text x="50" y="30" fill="#c8f04a" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    Mensagens
                  </text>
                  <rect x="20" y="40" width="60" height="50" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="50" y="70" textAnchor="middle" fill="#c8f04a" fontSize="10" fontFamily="monospace">
                    msg 1
                  </text>

                  <rect x="50" y="50" width="60" height="50" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="80" y="80" textAnchor="middle" fill="#c8f04a" fontSize="10" fontFamily="monospace">
                    msg 2
                  </text>

                  <rect x="80" y="60" width="60" height="50" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="110" y="90" textAnchor="middle" fill="#c8f04a" fontSize="10" fontFamily="monospace">
                    msg 3
                  </text>

                  <line x1="140" y1="85" x2="180" y2="85" stroke="#c8f04a" strokeWidth="2" markerEnd="url(#arrowhead3)" />

                  <rect x="180" y="55" width="80" height="60" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="220" y="85" textAnchor="middle" fill="#c8f04a" fontSize="11" fontFamily="monospace">
                    Redis Buffer
                  </text>

                  <line x1="260" y1="85" x2="300" y2="85" stroke="#c8f04a" strokeWidth="2" markerEnd="url(#arrowhead3)" />

                  <rect x="300" y="55" width="80" height="60" fill="none" stroke="#c8f04a" strokeWidth="2" rx="4" />
                  <text x="340" y="85" textAnchor="middle" fill="#c8f04a" fontSize="11" fontFamily="monospace">
                    OpenAI
                  </text>

                  <defs>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#c8f04a" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Problema</h4>
                  <p className="text-muted-foreground text-sm">"Mensagem pipoca" — cliente manda 5 textos seguidos e a IA respondia cada um separado</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">O que foi feito</h4>
                  <p className="text-muted-foreground text-sm">
                    Buffer de latência em Redis — ele aguarda alguns segundos, agrupa as mensagens do cliente numa janela e manda tudo junto pra IA processar. Adicionei OpenAI Vision pra analisar fotos de imóveis e transcrição de áudio via OpenAI.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Resultado:</strong> IA passou a entender o contexto completo. Qualificação automática com SPIN, recomendação de imóvel por foto e agendamento direto na agenda do corretor — sem humano no meio.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["n8n", "Redis", "OpenAI Vision", "Airtable", "Google Calendar"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Case 5 */}
            <Card className="p-8 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                  DataCrazy — distribuição
                </div>
                <h3 className="text-2xl font-bold">Distribuição justa de leads entre vendedores (sem briga)</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Problema</h4>
                  <p className="text-muted-foreground text-sm">Leads caíam todos pro mesmo vendedor e gerava atrito</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">O que foi feito</h4>
                  <p className="text-muted-foreground text-sm">
                    Round-Robin A/B/C nas automações do CRM, dividindo novos contatos 34/33/33%. Filtros que leem origem (Site, Instagram, FB_Ads) e aplicam tag pra análise de ROI por canal.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Resultado:</strong> Fim das reclamações. Marketing passou a saber qual canal traz cliente de verdade — não só volume.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["DataCrazy", "Lógica condicional", "JSON parsing"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Case 6 */}
            <Card className="p-8 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                  Google Apps Script — backend
                </div>
                <h3 className="text-2xl font-bold">Sistema que impede dois vendedores de agendar o mesmo horário</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Problema</h4>
                  <p className="text-muted-foreground text-sm">Clientes sendo agendados no mesmo slot por vendedores diferentes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">O que foi feito</h4>
                  <p className="text-muted-foreground text-sm">
                    Backend em GAS com lógica de fila (mutex). Antes de confirmar agendamento, valida timestamp e ID do vendedor. Se já existe alguém no slot, bloqueia na hora.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Resultado:</strong> Zero conflito de agenda. Acabou o problema de cliente receber confirmação de dois vendedores e gerar estorno.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Google Apps Script", "Mutex/fila", "Validação de timestamp"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Case 7 */}
            <Card className="p-8 border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono mb-3">
                  Python — automação
                </div>
                <h3 className="text-2xl font-bold">Contrato jurídico gerado em menos de 3 segundos</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Problema</h4>
                  <p className="text-muted-foreground text-sm">Vendedor gastava 20 min calculando imposto e formatando PDF</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">O que foi feito</h4>
                  <p className="text-muted-foreground text-sm">
                    Quando o lead entra na etapa de negociação, script Python intercepta os dados, calcula impostos e variáveis no servidor e devolve o PDF do contrato jurídico com tudo preenchido.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-accent font-mono mb-3">
                  <strong>Resultado:</strong> 20 min de trabalho manual viraram 3 segundos. Vendedor foca em vender.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "API REST", "Geração de PDF"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-secondary/10 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Vamos conversar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Se você tem um projeto de automação, integração ou análise de dados, manda uma mensagem. Vou avaliar e te digo se é algo que consigo fazer.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary text-lg px-8 py-6">
                <MessageCircle className="mr-2 h-6 w-6" />
                → Falar sobre seu projeto
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-primary mb-4">Caio Oliveira</h3>
              <p className="text-muted-foreground text-sm">Dev & Analista de Dados. Automações que resolvem problemas reais.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#stack" className="text-muted-foreground hover:text-primary transition-colors">
                    Stack
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">
                    Cases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-4">Contato</h3>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                WhatsApp: +55 85 98884-2142
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>© 2026 Caio Oliveira. Feito com código, não com IA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
