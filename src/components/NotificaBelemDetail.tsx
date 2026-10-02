import { useState } from 'react'
import iconArrowBack from '../assets/icon-arrow-back.svg'
import iconVisaoGeral from '../assets/icon-visao-geral.svg'
import iconRecursos from '../assets/icon-recursos.svg'
import iconCheck from '../assets/icon-check.svg'
import iconTitularidade from '../assets/icon-titularidade.svg'
import iconCodigo from '../assets/icon-codigo.svg'
import iconMaturidade from '../assets/icon-maturidade.svg'
import iconLock from '../assets/icon-lock.svg'
import iconContract from '../assets/icon-contract.svg'
import imgNotificaMain from '../assets/notifica-main.png'

interface NotificaBelemDetailProps {
  onBack: () => void
}

const recursos = [
  {
    title: 'Cadastro Descentralizado e Multicanal',
    description:
      'Escolha ativa das vias de comunicação prioritárias por parte do cidadão, respeitando critérios de privacidade e acessibilidade.',
  },
  {
    title: 'Painel e Dashboard Administrativo',
    description:
      'Segmentação geográfica e temática para distribuição direcionada de comunicados por bairros, zonas ou grupos de interesse.',
  },
  {
    title: 'Rastreabilidade e Métricas de Envio',
    description:
      'Painéis analíticos com taxas de entrega, leitura, engajamento e histórico transparente de interações governamentais.',
  },
]

const camposAplicacao = [
  'Administração Pública',
  'Comunicação Social',
  'Serviços Web Governamentais',
  'Cidades Inteligentes',
]

const autores = [
  'Alexandre Carvalho',
  'Carlos Renato Francês',
  'Hugo Kuribayashi',
  'Marcela Souza',
  'Pedro Moreira',
]

export function NotificaBelemDetail({ onBack }: NotificaBelemDetailProps) {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#f6f8f8] py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* Breadcrumb e Ação Voltar */}
        <div className="flex items-center justify-between py-4 mb-4">
          <nav className="flex items-center gap-2 text-[15px] sm:text-[16px]">
            <button
              type="button"
              onClick={onBack}
              className="text-[#3e4949] hover:text-[#006565] transition-colors cursor-pointer"
            >
              Vitrine
            </button>
            <span className="text-[#3e4949] text-[13px] font-normal">&gt;</span>
            <span className="text-[#0d1c2e] font-bold">Detalhes</span>
          </nav>

          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2.5 text-[15px] sm:text-[16px] font-bold text-[#0f2a29] hover:opacity-75 transition-opacity cursor-pointer"
          >
            <img src={iconArrowBack} alt="" className="w-2.5 h-2.5" />
            <span>Voltar para a busca</span>
          </button>
        </div>

        {/* Layout Principal: 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
          {/* Coluna Esquerda: Informações da Tecnologia */}
          <div className="flex flex-col gap-6">
            {/* Header da Tecnologia */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#cbd5e1] bg-white text-[12px] font-semibold text-[#3e4949]">
                  PROCESSO INPI: BR 51 2025 006254-0
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#cbd5e1] bg-white text-[12px] font-semibold text-[#3e4949]">
                  Criação: 23/07/2025
                </span>
              </div>

              <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#0d1c2e] leading-[1.12] mb-3">
                Notifica Belém
              </h1>

              <p className="text-[17px] sm:text-[18px] font-bold text-[#006565] leading-snug mb-3">
                Plataforma de comunicação institucional e broadcast multicanal com segmentação cidadã.
              </p>

              <p className="text-[16px] sm:text-[18px] font-normal text-[#3e4949] leading-relaxed">
                Uma solução tecnológica desenvolvida no ecossistema de inovação da Amazônia para modernizar a gestão de relacionamento e comunicação estratégica entre a administração pública e a sociedade.
              </p>
            </div>

            {/* Imagem Principal */}
            <div className="w-full overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white shadow-sm">
              <img
                src={imgNotificaMain}
                alt="Interface e fluxo do Notifica Belém"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Seção 1: Visão Geral */}
            <section className="rounded-[12px] border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconVisaoGeral} alt="" className="w-5 h-5 shrink-0" />
                <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0d1c2e]">Visão Geral</h2>
              </div>
              <p className="text-[15px] sm:text-[16px] font-normal text-[#3e4949] leading-relaxed mb-4">
                O Notifica Belém é um sistema voltado à gestão de relacionamento entre administração pública, instituições governamentais e cidadãos. A plataforma permite o cadastro simplificado de preferências de contato da população e viabiliza o envio em larga escala (broadcast) de informativos, avisos de utilidade pública, serviços e comunicados emergenciais.
              </p>
              <p className="text-[15px] sm:text-[16px] font-normal text-[#3e4949] leading-relaxed">
                Eliminando ruídos e intermediários na comunicação institucional, o sistema proporciona governança de dados, conformidade com a LGPD e precisão cirúrgica na entrega de mensagens essenciais para a comunidade.
              </p>
            </section>

            {/* Seção 2: Recursos principais */}
            <section className="rounded-[16px] border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-3.5 pb-6 border-b border-[#e2e8f0]">
                <img src={iconRecursos} alt="" className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0f172a]">Recursos principais</h2>
                  <p className="text-[15px] sm:text-[16px] font-normal text-[#6b7280]">
                    Capacidades operacionais e funcionalidades integradas
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {recursos.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[12px] border border-[#e2e8f0] bg-[#f8f9ff] p-4 flex items-start gap-3"
                  >
                    <img src={iconCheck} alt="" className="w-4 h-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#1e293b] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] text-[#475569] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Seção 3: Titularidade */}
            <section className="rounded-[12px] border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconTitularidade} alt="" className="w-5 h-5 shrink-0" />
                <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0d1c2e]">Titularidade</h2>
              </div>
              <div className="mb-4">
                <span className="inline-block rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-4 py-2 text-[13px] font-semibold text-[#0d1c2e]">
                  Fundação Guamá
                </span>
              </div>
              <p className="text-[14px] font-normal text-[#3e4949] leading-relaxed">
                Ativo de software devidamente registrado junto ao Instituto Nacional da Propriedade Industrial (INPI sob nº BR 51 2025 006254-0), sob a governança e coordenação do ecossistema iNREDE Amazônia.
              </p>
            </section>

            {/* Seção 4: Especificações Técnicas e Classificação */}
            <section className="rounded-[16px] border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 pb-6 border-b border-[#e2e8f0]">
                <img src={iconCodigo} alt="" className="w-6 h-6 shrink-0" />
                <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0f172a]">
                  Especificações Técnicas e Classificação
                </h2>
              </div>

              <div className="mt-6 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Linguagens */}
                  <div className="rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] p-4 flex flex-col justify-center">
                    <span className="text-[12px] font-semibold text-black uppercase tracking-wider mb-1">
                      LINGUAGENS
                    </span>
                    <span className="text-[18px] font-semibold text-black mb-1">
                      Java, JavaScript
                    </span>
                    <span className="text-[12px] text-[#475569]">
                      Arquitetura web escalável com suporte a microsserviços e integração com gateways de mensageria.
                    </span>
                  </div>

                  {/* Campos de Aplicação */}
                  <div className="flex flex-col justify-start">
                    <span className="text-[12px] font-semibold text-black uppercase tracking-wider mb-2">
                      CAMPOS DE APLICAÇÃO
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {camposAplicacao.map((campo, index) => (
                        <span
                          key={index}
                          className="inline-block rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#1e293b] shadow-xs"
                        >
                          {campo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Autores Registrados */}
                <div className="pt-2">
                  <span className="text-[12px] font-semibold text-black uppercase tracking-wider mb-2 block">
                    AUTORES REGISTRADOS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {autores.map((autor, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#1e293b] shadow-xs"
                      >
                        {autor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 5: Maturidade Tecnológica */}
            <section className="rounded-[12px] border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconMaturidade} alt="" className="w-5 h-5 shrink-0" />
                <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0d1c2e]">Maturidade Tecnológica</h2>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-[14px] mb-2.5">
                  <span className="font-bold text-[#006565]">
                    TRL 4 - Validação em laboratório
                  </span>
                  <span className="text-[#3e4949] font-medium">4 / 9</span>
                </div>

                {/* Barra de progresso segmentada (4 de 9 preenchida) */}
                <div className="h-3 w-full bg-[#d4e4fc] rounded-full overflow-hidden flex relative">
                  <div
                    className="h-full bg-[#006565] rounded-l-full transition-all duration-500"
                    style={{ width: `${(4 / 9) * 100}%` }}
                  />
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="absolute top-0 bottom-0 w-[1.5px] bg-white pointer-events-none"
                      style={{ left: `${(i / 9) * 100}%` }}
                    />
                  ))}
                </div>

                <p className="mt-4 text-[14px] text-[#3e4949] leading-relaxed">
                  O sistema teve sua arquitetura de cadastro cidadão, segmentação e mensageria em massa (broadcast) validada em ambiente controlado simulando operações municipais. O painel administrativo e os serviços de distribuição de mensagens estão estruturados para suportar fluxos de comunicação institucional e gestão pública.
                </p>
              </div>
            </section>
          </div>

          {/* Coluna Direita: Formulário de Contato / Demonstre Interesse */}
          <aside className="rounded-[12px] border border-[#e2e8f0] bg-white p-6 shadow-xs sm:p-8 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0d1c2e] mb-2">Demonstre Interesse</h3>
            <p className="text-[14px] text-[#3e4949] leading-relaxed mb-6">
              Conecte-se com os pesquisadores para explorar oportunidades de licenciamento, co- desenvolvimento ou investimento.
            </p>

            {submitted ? (
              <div className="rounded-lg bg-[#e6f3f2] border border-[#008480] p-6 text-center">
                <div className="w-12 h-12 bg-[#008480] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-[16px] font-bold text-[#0f2a29] mb-1">
                  Interesse Registrado!
                </h4>
                <p className="text-[13px] text-[#3e4949] mb-4">
                  A equipe de transferência de tecnologia entrará em contato em breve através do e-mail corporativo fornecido.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ nome: '', empresa: '', email: '', mensagem: '' })
                  }}
                  className="text-xs font-semibold text-[#006565] underline hover:opacity-80 cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-gray-800 placeholder:text-[#6b7280] focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    Empresa / Instituição
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Nome da organização"
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-gray-800 placeholder:text-[#6b7280] focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-gray-800 placeholder:text-[#6b7280] focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Como sua organização planeja utilizar ou apoiar esta tecnologia?"
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-gray-800 placeholder:text-[#6b7280] focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#005958] hover:bg-[#004746] text-white text-[14px] font-bold py-3.5 px-4 transition-colors shadow-sm cursor-pointer"
                >
                  Solicitar Contato Comercial
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-[#e2e8f0] space-y-3.5">
              <div className="flex items-start gap-2.5 text-[12px] text-[#3e4949] leading-snug">
                <img src={iconLock} alt="" className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>
                  Seus dados estão protegidos. A iNREDE atua como facilitadora neutra sob acordos de confidencialidade estritos.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-[12px] text-[#3e4949] leading-snug">
                <img src={iconContract} alt="" className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>
                  Ao solicitar contato, você concorda com o{' '}
                  <a href="#termos" className="underline hover:text-[#006565]">
                    Modelo de Parceria iNREDE
                  </a>
                  .
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

