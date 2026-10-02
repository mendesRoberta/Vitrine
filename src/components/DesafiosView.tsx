import { useState, useMemo } from 'react'
import imgHeroPattern from '../assets/hero.png'
import imgDesafioNatura from '../assets/desafio-natura.png'
import imgDesafioTextil from '../assets/desafio-textil.png'
import imgDesafioEletronorte from '../assets/desafio-eletronorte.png'
import imgDesafioBiochar from '../assets/desafio-biochar.png'
import iconCompanyBuilding from '../assets/icon-company-building.svg'
import iconCompanyShield from '../assets/icon-company-shield.svg'
import iconCompanyLightning from '../assets/icon-company-lightning.svg'
import iconCompanyLeaf from '../assets/icon-company-leaf.svg'
import iconIncentivo from '../assets/icon-incentivo.svg'
import iconArrowRight from '../assets/icon-arrow-right.svg'

export interface DesafioItem {
  id: string
  company: string
  companyIcon: string
  title: string
  description: string
  incentivo: string
  image: string
  fullDescription?: string
  prazo?: string
  area?: string
}

const desafiosData: DesafioItem[] = [
  {
    id: '1',
    company: 'Natura Inovação Aberta',
    companyIcon: iconCompanyBuilding,
    title: 'Identificação de Compostos Bioativos em Extratos da Floresta',
    description:
      'Buscamos ICTs e grupos de pesquisa com capacidade analítica para isolamento, purificação e caracterização de frações bioativas em óleos…',
    fullDescription:
      'Buscamos ICTs e grupos de pesquisa com capacidade analítica para isolamento, purificação e caracterização de frações bioativas em óleos essenciais e extratos de espécies amazônicas para aplicação cosmética e dermocosmética sustentável.',
    incentivo: 'R$ 120.000',
    image: imgDesafioNatura,
    prazo: '45 dias restantes',
    area: 'Biotecnologia & Química Fina',
  },
  {
    id: '2',
    company: 'Empresa anônima',
    companyIcon: iconCompanyShield,
    title: 'Otimização de Estamparia Digital e Tingimento em Fibras Naturais',
    description:
      'Desenvolvimento de fixadores botânicos e processos físico-químicos de baixa temperatura para tingimento e estamparia eco-eficiente em…',
    fullDescription:
      'Desenvolvimento de fixadores botânicos e processos físico-químicos de baixa temperatura para tingimento e estamparia eco-eficiente em tecidos de fibras vegetais nativas (juta, malva e algodão agroecológico).',
    incentivo: 'R$ 180.000',
    image: imgDesafioTextil,
    prazo: '30 dias restantes',
    area: 'Engenharia Têxtil & Sustentabilidade',
  },
  {
    id: '3',
    company: 'Eletronorte',
    companyIcon: iconCompanyLightning,
    title: 'Inspeção Autônoma e Monitoramento de Reservatórios Hídricos',
    description:
      'Solução robótica ou com sensores integrados para monitoramento batimétrico contínuo e detecção precoce de sedimentação e macrófitas',
    fullDescription:
      'Solução robótica subaquática ou de superfície com sensores integrados para monitoramento batimétrico contínuo, mapeamento de assoreamento e detecção precoce de proliferação de macrófitas em reservatórios hidrelétricos na bacia amazônica.',
    incentivo: 'R$ 250.000',
    image: imgDesafioEletronorte,
    prazo: '60 dias restantes',
    area: 'Robótica, Sensoriamento & Hidrologia',
  },
  {
    id: '4',
    company: 'Cooperativa Agroindustrial Amazônica',
    companyIcon: iconCompanyLeaf,
    title: 'Aproveitamento de Resíduos do Processamento de Açaí e Cacau',
    description:
      'Tecnologias escaláveis para conversão termoquímica de caroços de açaí e cascas de cacau em biocarvão ativado de alta porosidade…',
    fullDescription:
      'Tecnologias escaláveis de pirólise e ativação química/física para conversão de resíduos volumosos (caroço de açaí e casca de cacau) em biocarvão ativado de alta porosidade para remediação de solos e filtração industrial.',
    incentivo: 'R$ 80.000',
    image: imgDesafioBiochar,
    prazo: '20 dias restantes',
    area: 'Economia Circular & Engenharia de Materiais',
  },
  {
    id: '5',
    company: 'Natura Inovação Aberta',
    companyIcon: iconCompanyBuilding,
    title: 'Identificação de Compostos Bioativos em Extratos da Floresta',
    description:
      'Buscamos ICTs e grupos de pesquisa com capacidade analítica para isolamento, purificação e caracterização de frações bioativas em óleos…',
    fullDescription:
      'Buscamos ICTs e grupos de pesquisa com capacidade analítica para isolamento, purificação e caracterização de frações bioativas em óleos essenciais e extratos de espécies amazônicas para aplicação cosmética e dermocosmética sustentável.',
    incentivo: 'R$ 120.000',
    image: imgDesafioNatura,
    prazo: '45 dias restantes',
    area: 'Biotecnologia & Química Fina',
  },
  {
    id: '6',
    company: 'Empresa anônima',
    companyIcon: iconCompanyShield,
    title: 'Otimização de Estamparia Digital e Tingimento em Fibras Naturais',
    description:
      'Desenvolvimento de fixadores botânicos e processos físico-químicos de baixa temperatura para tingimento e estamparia eco-eficiente em…',
    fullDescription:
      'Desenvolvimento de fixadores botânicos e processos físico-químicos de baixa temperatura para tingimento e estamparia eco-eficiente em tecidos de fibras vegetais nativas (juta, malva e algodão agroecológico).',
    incentivo: 'R$ 180.000',
    image: imgDesafioTextil,
    prazo: '30 dias restantes',
    area: 'Engenharia Têxtil & Sustentabilidade',
  },
]

export interface DesafiosViewProps {
  onSelectDesafio?: (id: string) => void
}

export function DesafiosView({ onSelectDesafio }: DesafiosViewProps = {}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedDesafio, setSelectedDesafio] = useState<DesafioItem | null>(null)
  const [showDemandModal, setShowDemandModal] = useState(false)
  const [proposalSubmitted, setProposalSubmitted] = useState(false)
  const [demandSubmitted, setDemandSubmitted] = useState(false)

  const handleOpenDesafio = (desafio: DesafioItem) => {
    if (desafio.id === '3' && onSelectDesafio) {
      onSelectDesafio('3')
      return
    }
    setSelectedDesafio(desafio)
  }

  // Live filter
  const filteredDesafios = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return desafiosData
    return desafiosData.filter(
      (d) =>
        d.title.toLowerCase().includes(term) ||
        d.company.toLowerCase().includes(term) ||
        d.description.toLowerCase().includes(term) ||
        d.incentivo.toLowerCase().includes(term),
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-[#f6f8f8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(166.11364704562317deg,#002b2b_0%,#004f4f_100%)] py-[80px] md:py-[96px]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src={imgHeroPattern}
            alt=""
            className="h-[195.93%] w-full max-w-none object-cover object-left"
          />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <h1
            className="m-0 text-center text-[40px] sm:text-[56px] lg:text-[75px] font-bold leading-[1.12] tracking-[-1.5px] text-white"
            style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
          >
            Desafios Tecnológicos
          </h1>
          <p
            className="mt-4 max-w-[760px] text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white/90"
            style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
          >
            Conectando demandas reais do setor produtivo às competências, patentes e laboratórios de ponta das ICTs da Amazônia.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-[#f6f8f8] pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative flex h-[50px] w-full max-w-[570px] items-center rounded-[8px] border border-[#dfe5e5] bg-white px-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#006565] focus-within:ring-1 focus-within:ring-[#006565] transition-all">
            <svg
              className="mr-3 h-4 w-4 shrink-0 text-gray-400"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M14 14L10.5 10.5M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Procurar por desafio..."
              className="h-full w-full border-0 bg-transparent text-[15px] text-[#374151] placeholder:text-[#6b7280] focus:outline-none"
              style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="ml-2 text-xs font-semibold text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          {searchTerm && (
            <p className="mt-3 text-[14px] text-gray-600">
              {filteredDesafios.length}{' '}
              {filteredDesafios.length === 1 ? 'desafio encontrado' : 'desafios encontrados'} para "{searchTerm}"
            </p>
          )}
        </div>
      </section>

      {/* Grid de Desafios */}
      <section className="bg-[#f6f8f8] py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          {filteredDesafios.length === 0 ? (
            <div className="rounded-xl border border-[#e2e8f0] bg-white p-12 text-center my-8">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Nenhum desafio encontrado</h3>
              <p className="text-gray-500 text-sm mb-4">
                Não encontramos desafios correspondentes à busca "{searchTerm}".
              </p>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="rounded-lg bg-[#006565] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005252] cursor-pointer"
              >
                Ver todos os desafios
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDesafios.map((desafio) => (
                <article
                  key={desafio.id}
                  className="flex flex-col overflow-hidden rounded-[12px] bg-white border border-[#e2e8f0]/80 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Imagem do Desafio */}
                  <div
                    onClick={() => handleOpenDesafio(desafio)}
                    className="h-[190px] w-full overflow-hidden bg-gray-100 cursor-pointer relative"
                  >
                    <img
                      src={desafio.image}
                      alt={desafio.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Empresa Promotora */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <img src={desafio.companyIcon} alt="" className="h-4 w-4 shrink-0 text-[#006565]" />
                      <span className="text-[14px] font-medium text-[#5b5f5f]">
                        {desafio.company}
                      </span>
                    </div>

                    {/* Título do Desafio */}
                    <h3
                      onClick={() => handleOpenDesafio(desafio)}
                      className="text-[18px] font-bold text-[#0d1c2e] leading-[1.3] mb-2.5 cursor-pointer hover:text-[#006565] transition-colors line-clamp-2"
                      style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                    >
                      {desafio.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-[14px] font-normal text-[#3e4949] leading-[1.5] mb-5 flex-1 line-clamp-3">
                      {desafio.description}
                    </p>

                    {/* Pill de Incentivo */}
                    <div className="rounded-[8px] bg-[#eff4ff] p-3 flex items-center gap-3 mb-4">
                      <img src={iconIncentivo} alt="" className="h-4 w-5 shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-[#6e7979] tracking-wider block">
                          INCENTIVO
                        </span>
                        <span className="text-[14px] font-bold text-[#0d1c2e] block">
                          {desafio.incentivo}
                        </span>
                      </div>
                    </div>

                    {/* Botão de Ação */}
                    <button
                      type="button"
                      onClick={() => handleOpenDesafio(desafio)}
                      className="rounded-[8px] bg-[#006565] hover:bg-[#004e4e] text-white py-2.5 px-4 text-[13px] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer w-full mt-auto shadow-xs"
                    >
                      <span>Saiba mais</span>
                      <img src={iconArrowRight} alt="" className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Paginação */}
          <div className="flex items-center justify-center gap-2 py-10 mt-4">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#dfe5e5] bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              &lt;
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#006565] text-white'
                    : 'border border-[#dfe5e5] bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-2 text-gray-400 font-medium">...</span>
            <button
              type="button"
              onClick={() => setCurrentPage(6)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 6
                  ? 'bg-[#006565] text-white'
                  : 'border border-[#dfe5e5] bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              6
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(6, p + 1))}
              disabled={currentPage === 6}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#dfe5e5] bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - Frame 28 */}
      <section className="bg-[#f0f4f4] px-6 py-[60px] border-t border-[#e2e8f0]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* Badge Lâmpada */}
          <div className="mb-4 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#006565] text-white shadow-md">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>

          <h2
            className="m-0 mb-3 max-w-[720px] text-[26px] sm:text-[32px] font-bold leading-[1.25] text-[#0d1c2e]"
            style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
          >
            Sua empresa tem um problema que precisa de uma solução tecnológica?
          </h2>

          <p className="m-0 mb-7 max-w-[620px] text-[15px] sm:text-[16px] leading-[24px] text-[#3e4949]">
            Conecte sua demanda diretamente aos maiores pesquisadores, laboratórios e núcleos de inovação tecnológica da região amazônica.
          </p>

          <button
            type="button"
            onClick={() => {
              setDemandSubmitted(false)
              setShowDemandModal(true)
            }}
            className="inline-flex items-center gap-2.5 rounded-[8px] bg-[#006565] px-6 py-3.5 text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:bg-[#004e4e] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#006565] focus:ring-offset-2 cursor-pointer"
          >
            <span>Cadastre sua demanda</span>
            <img src={iconArrowRight} alt="" className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* Modal de Detalhes do Desafio */}
      {selectedDesafio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="relative w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-[16px] bg-white p-6 sm:p-8 shadow-2xl border border-[#e2e8f0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fechar */}
            <button
              type="button"
              onClick={() => {
                setSelectedDesafio(null)
                setProposalSubmitted(false)
              }}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Imagem do desafio */}
            <div className="h-[200px] w-full overflow-hidden rounded-[12px] mb-5">
              <img
                src={selectedDesafio.image}
                alt={selectedDesafio.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Tags e Empresa */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#cbd5e1] bg-[#f8fafc] text-xs font-semibold text-[#0d1c2e]">
                <img src={selectedDesafio.companyIcon} alt="" className="w-3.5 h-3.5" />
                {selectedDesafio.company}
              </span>
              {selectedDesafio.area && (
                <span className="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-800">
                  {selectedDesafio.area}
                </span>
              )}
              {selectedDesafio.prazo && (
                <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
                  ⏱ {selectedDesafio.prazo}
                </span>
              )}
            </div>

            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0d1c2e] leading-snug mb-3">
              {selectedDesafio.title}
            </h3>

            <div className="rounded-lg bg-[#eff4ff] p-3.5 flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <img src={iconIncentivo} alt="" className="w-5 h-4" />
                <div>
                  <span className="text-[11px] uppercase font-bold text-gray-500 block">
                    VALOR DO INCENTIVO À ICT
                  </span>
                  <span className="text-[18px] font-extrabold text-[#006565] block">
                    {selectedDesafio.incentivo}
                  </span>
                </div>
              </div>
              <span className="text-xs font-medium text-gray-600 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                Fomento Direto
              </span>
            </div>

            <div className="space-y-4 text-[15px] text-[#3e4949] leading-relaxed mb-6">
              <h4 className="text-[16px] font-bold text-[#0d1c2e]">Escopo da Demanda</h4>
              <p>{selectedDesafio.fullDescription || selectedDesafio.description}</p>
            </div>

            {proposalSubmitted ? (
              <div className="rounded-lg bg-[#e6f3f2] border border-[#008480] p-4 text-center">
                <p className="text-sm font-bold text-[#0f2a29] mb-1">
                  ✓ Manifestação de interesse registrada!
                </p>
                <p className="text-xs text-[#3e4949]">
                  O núcleo de transferência de tecnologia da iNREDE fará o contato para alinhamento da proposta.
                </p>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e2e8f0]">
                <button
                  type="button"
                  onClick={() => setProposalSubmitted(true)}
                  className="flex-1 rounded-lg bg-[#006565] hover:bg-[#004e4e] text-white py-3 px-4 text-sm font-bold transition-colors cursor-pointer text-center"
                >
                  Submeter Proposta de Solução
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDesafio(null)}
                  className="rounded-lg border border-[#dfe5e5] px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de Cadastro de Demanda */}
      {showDemandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-[16px] bg-white p-6 sm:p-8 shadow-2xl border border-[#e2e8f0]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowDemandModal(false)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-[22px] font-bold text-[#0d1c2e] mb-2">
              Cadastrar Demanda Tecnológica
            </h3>
            <p className="text-sm text-[#3e4949] leading-relaxed mb-6">
              Apresente o desafio técnico da sua empresa para encontrarmos pesquisadores e tecnologias sob medida na Amazônia.
            </p>

            {demandSubmitted ? (
              <div className="rounded-lg bg-[#e6f3f2] border border-[#008480] p-6 text-center my-4">
                <div className="w-12 h-12 bg-[#008480] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-[#0f2a29] mb-1">
                  Demanda cadastrada com sucesso!
                </h4>
                <p className="text-xs text-[#3e4949] mb-4">
                  Nossa equipe de articulação tecnológica analisará o perfil e entrará em contato em até 48 horas.
                </p>
                <button
                  type="button"
                  onClick={() => setShowDemandModal(false)}
                  className="rounded-lg bg-[#006565] px-4 py-2 text-xs font-bold text-white hover:bg-[#004e4e] cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setDemandSubmitted(true)
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    Nome da Empresa / Organização
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Minha Empresa S.A."
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    E-mail de Contato
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contato@empresa.com"
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    Título do Desafio
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Tratamento e valorização de efluentes industriais"
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0d1c2e] mb-1.5">
                    Descrição do Problema Tecnológico
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva o gargalo produtivo, requisitos técnicos e resultados esperados..."
                    className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#006565] focus:ring-1 focus:ring-[#006565] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#006565] hover:bg-[#004e4e] text-white py-3.5 px-4 text-sm font-bold transition-colors cursor-pointer shadow-sm"
                  >
                    Enviar Demanda para Análise
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
