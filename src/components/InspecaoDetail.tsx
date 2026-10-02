import { useState } from 'react'
import imgHeroInspecao from '../assets/hero-inspecao.png'
import iconBackWhite from '../assets/icon-back-white.svg'
import iconViewsEye from '../assets/icon-views-eye.svg'
import iconSolutionsBulb from '../assets/icon-solutions-bulb.svg'
import iconDownloadPdf from '../assets/icon-download-pdf.svg'
import iconShieldProtection from '../assets/icon-shield-protection.svg'
import iconTealCheck from '../assets/icon-teal-check.svg'
import iconArrowRight from '../assets/icon-arrow-right.svg'

interface InspecaoDetailProps {
  onBack: () => void
  onFilterEletronorte?: () => void
}

const tagsInteresse = [
  'Robótica e Veículos Autônomos',
  'Inteligência Artificial',
  'Visão Computacional',
  'Ensaios Não Destrutivos (END)',
  'Engenharia Mecânica e Metalúrgica',
  'Internet das Coisas Industrial',
  'Sensores Ultrassônicos e Acústicos',
  'Segurança de Ativos Industriais',
]

const requisitos = [
  {
    title: 'Mapeamento de Corrosão e Parede',
    description:
      'Capacidade de detecção micrométrica de perda de espessura de chapas metálicas e fissuras em soldas via ensaios não-destrutivos (ex.: ultrassom Phased Array ou EMAT).',
  },
  {
    title: 'Robótica Autônoma / Crawlers',
    description:
      'Emprego de drones confinados (caged drones) ou veículos rastejadores magnéticos/anfíbios capazes de navegar em superfícies verticais com fluidos presentes.',
  },
  {
    title: 'Gêmeo Digital & Diagnóstico IA',
    description:
      'Algoritmos integrados para renderização tridimensional do tanque com marcação georreferenciada de defeitos e emissão preditiva de laudos conformes à norma API 653.',
  },
  {
    title: 'Certificação Intrínseca (Ex/ATEX)',
    description:
      'Aparatos com conformidade ou rota de homologação à prova de faísca/explosão para operação em áreas classificadas contendo vapores inflamáveis.',
  },
]

const quemProcuramos = [
  'Grupos de Pesquisa e ICTs com excelência em robótica, mecatrônica ou ensaios físicos.',
  'Startups DeepTech e empresas de base tecnológica (TRL 4 a 7).',
  'Consórcios mistos formados por Universidade + Empresa privada.',
]

export function InspecaoDetail({ onBack, onFilterEletronorte }: InspecaoDetailProps) {
  const [showProposalModal, setShowProposalModal] = useState(false)
  const [proposalSubmitted, setProposalSubmitted] = useState(false)
  const [pdfDownloaded, setPdfDownloaded] = useState(false)

  const handleDownloadEdital = () => {
    setPdfDownloaded(true)
    setTimeout(() => setPdfDownloaded(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de Sub-Navegação / Breadcrumbs */}
      <div className="bg-[#004d47] text-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8 text-sm">
          <nav className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <button
              type="button"
              onClick={onBack}
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Desafios Tecnológicos
            </button>
            <span className="text-white/60">&gt;</span>
            <span className="font-semibold text-white truncate max-w-[280px] sm:max-w-none">
              Inspeção Autônoma e Monitoramento de Reservatórios Hídricos
            </span>
          </nav>

          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 font-bold text-white hover:text-white/80 transition-opacity cursor-pointer shrink-0 ml-4"
          >
            <img src={iconBackWhite} alt="" className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">Voltar para a busca</span>
          </button>
        </div>
      </div>

      {/* Hero com Imagem de Fundo e Card Flutuante */}
      <section className="relative min-h-[500px] lg:min-h-[560px] overflow-hidden bg-slate-900">
        <img
          src={imgHeroInspecao}
          alt="Inspeção subaquática autônoma de reservatórios"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/60 pointer-events-none" />

        <div className="relative mx-auto flex min-h-[500px] lg:min-h-[560px] max-w-[1320px] items-center justify-end px-4 py-8 sm:px-6 lg:px-8">
          {/* Card Flutuante com Resumo do Desafio */}
          <div className="w-full max-w-[500px] rounded-[16px] border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-2xl">
            <h1
              className="text-[22px] sm:text-[24px] font-bold text-[#0f172a] leading-[1.25] mb-4"
              style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
            >
              Inspeção Autônoma e Monitoramento de Reservatórios Hídricos
            </h1>

            {/* Pill de Incentivo */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#cbd5e1] bg-[#f9fbfd] px-3.5 py-1 text-xs font-semibold text-[#475569]">
                <span>INCENTIVO:</span>
                <span className="text-[#0d1c2e] font-bold">R$ 250.000</span>
              </span>
            </div>

            {/* Métricas / Estatísticas */}
            <div className="space-y-2.5 mb-6 text-sm text-[#475569]">
              <div className="flex items-center gap-2.5">
                <img src={iconViewsEye} alt="" className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Visualizações:</span>
                <span className="font-semibold text-[#1e293b]">420 acessos</span>
              </div>

              <div className="flex items-center gap-2.5">
                <img src={iconSolutionsBulb} alt="" className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Soluções submetidas:</span>
                <span className="font-semibold text-[#1e293b]">12 propostas</span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-2.5 mb-4">
              <button
                type="button"
                onClick={() => {
                  setProposalSubmitted(false)
                  setShowProposalModal(true)
                }}
                className="w-full rounded-[8px] bg-[#004d47] hover:bg-[#003838] text-white py-3.5 px-4 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Submeter Proposta</span>
                <img src={iconArrowRight} alt="" className="w-3 h-3" />
              </button>

              <button
                type="button"
                onClick={handleDownloadEdital}
                className="w-full rounded-[8px] border border-[#cbd5e1] bg-white hover:bg-slate-50 text-[#334155] py-2.5 px-4 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <img src={iconDownloadPdf} alt="" className="w-4 h-4" />
                <span>{pdfDownloaded ? 'Download iniciado (Edital_Eletronorte.pdf)' : 'Edital (PDF)'}</span>
              </button>
            </div>

            {/* Garantia de PI */}
            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#94a3b8]">
              <img src={iconShieldProtection} alt="" className="w-3.5 h-3.5" />
              <span>Propriedade Intelectual protegida pela iNREDE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal (2 Colunas) */}
      <main className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Coluna Esquerda: Contexto, Tecnologias e Requisitos */}
          <div className="space-y-10">
            {/* Seção 1: Contextualização */}
            <section>
              <h2
                className="text-[24px] font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
              >
                Contextualização
              </h2>
              <div className="space-y-4 text-[16px] text-[#475569] leading-relaxed">
                <p>
                  Buscamos ideias, protótipos funcionais ou tecnologias aplicadas para a inspeção segura, precisa e econômica de tanques de armazenamento aéreos e reservatórios hídricos ou combustíveis industriais sem a necessidade de entrada humana em espaço confinado e preferencialmente sem interrupção de operação (in-service inspection).
                </p>
                <p>
                  As operações na região Norte e bacias hidrográficas amazônicas apresentam desafios logísticos extremos: condições severas de umidade, corrosão acelerada por intempéries tropicais e barreiras de acesso físico. O objetivo central é eliminar o trabalho em altura e atmosfera de risco, reduzindo custos operacionais de parada preventiva e ampliando a confiabilidade estrutural.
                </p>
              </div>
            </section>

            {/* Seção 2: Áreas Temáticas e Tecnologias de Interesse */}
            <section>
              <h2
                className="text-[24px] font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
              >
                Áreas Temáticas e Tecnologias de Interesse
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {tagsInteresse.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium text-[#475569] shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Seção 3: Objetivos Específicos e Requisitos Técnicos */}
            <section>
              <h2
                className="text-[24px] font-bold text-[#0f172a] mb-5"
                style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
              >
                Objetivos Específicos e Requisitos Técnicos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {requisitos.map((req, idx) => (
                  <div
                    key={idx}
                    className="rounded-[12px] border border-[#e2e8f0] bg-white p-6 shadow-xs flex flex-col justify-start"
                  >
                    <h3 className="text-[16px] font-bold text-[#0f172a] mb-2 leading-snug">
                      {req.title}
                    </h3>
                    <p className="text-[14px] text-[#475569] leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Coluna Direita: Sidebar com Perfis e Demandante */}
          <aside className="space-y-6 lg:sticky lg:top-8">
            {/* Card 1: Quem Procuramos? */}
            <div className="rounded-[16px] border border-[#e2e8f0] bg-white p-6 sm:p-7 shadow-xs">
              <h3
                className="text-[18px] font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
              >
                Quem Procuramos?
              </h3>
              <ul className="space-y-3.5">
                {quemProcuramos.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <img src={iconTealCheck} alt="" className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-[13px] sm:text-[14px] text-[#334155] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Sobre o Demandante */}
            <div className="rounded-[16px] border border-[#e2e8f0] bg-white p-6 sm:p-7 shadow-xs">
              <h3
                className="text-[18px] font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
              >
                Sobre o Demandante
              </h3>

              <div className="pb-3 border-b border-[#f1f5f9] mb-3">
                <h4 className="text-[16px] font-bold text-[#1e293b]">Eletronorte</h4>
                <p className="text-[12px] text-[#64748b]">
                  Divisão de Inovação Aberta e Recursos Hídricos
                </p>
              </div>

              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed mb-4">
                Responsável pela geração e transmissão de energia em nove estados brasileiros da Amazônia Legal, impulsionando soluções sustentáveis e seguras para a infraestrutura nacional.
              </p>

              <button
                type="button"
                onClick={onFilterEletronorte || onBack}
                className="text-[13px] font-semibold text-[#004d47] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Ver outros desafios de Eletronorte</span>
                <span>&gt;</span>
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Modal de Submissão de Proposta */}
      {showProposalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto rounded-[16px] bg-white p-6 sm:p-8 shadow-2xl border border-[#e2e8f0]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setShowProposalModal(false)
                setProposalSubmitted(false)
              }}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#004d47] bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                Eletronorte • R$ 250.000
              </span>
            </div>

            <h3 className="text-[22px] font-bold text-[#0f172a] mb-2 leading-snug">
              Submeter Proposta de Solução
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed mb-6">
              Inspeção Autônoma e Monitoramento de Reservatórios Hídricos
            </p>

            {proposalSubmitted ? (
              <div className="rounded-lg bg-[#e6f3f2] border border-[#008480] p-6 text-center my-4">
                <div className="w-12 h-12 bg-[#008480] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-[#0f2a29] mb-1">
                  Proposta registrada com sucesso!
                </h4>
                <p className="text-xs text-[#3e4949] mb-4">
                  O comitê técnico da Eletronorte e a curadoria da iNREDE analisarão a documentação preliminar em até 5 dias úteis.
                </p>
                <button
                  type="button"
                  onClick={() => setShowProposalModal(false)}
                  className="rounded-lg bg-[#004d47] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#003838] cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setProposalSubmitted(true)
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-1.5">
                    Nome do Proponente / Coordenador Técnico
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#004d47] focus:ring-1 focus:ring-[#004d47] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-1.5">
                      Instituição / Empresa / ICT
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nome da organização"
                      className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#004d47] focus:ring-1 focus:ring-[#004d47] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-1.5">
                      E-mail Institucional
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="pesquisador@instituicao.br"
                      className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#004d47] focus:ring-1 focus:ring-[#004d47] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-1.5">
                    Nível de Maturidade da Abordagem Proposta (TRL)
                  </label>
                  <select
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#004d47] focus:ring-1 focus:ring-[#004d47] focus:outline-none cursor-pointer"
                  >
                    <option>TRL 3 - Prova de conceito analítica/experimental</option>
                    <option>TRL 4 - Validação funcional em laboratório</option>
                    <option>TRL 5 - Validação em ambiente relevante</option>
                    <option>TRL 6 - Protótipo demonstrado em ambiente relevante</option>
                    <option>TRL 7 - Demonstração de protótipo em ambiente operacional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-1.5">
                    Resumo Executivo da Solução Técnica
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva a tecnologia, arquitetura de sensores/robótica e como atende aos requisitos de inspeção e certificação..."
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#004d47] focus:ring-1 focus:ring-[#004d47] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#004d47] hover:bg-[#003838] text-white py-3.5 px-4 text-sm font-bold transition-colors cursor-pointer shadow-md"
                  >
                    Enviar Proposta Técnica
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
