import { useEffect, useMemo, useState } from 'react'
import {
  BadgeCheck,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageSquarePlus,
  Phone,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import { SpeedyPipeDetail } from './components/SpeedyPipeDetail'
import { NotificaBelemDetail } from './components/NotificaBelemDetail'
import { EasySSRDetail } from './components/EasySSRDetail'
import { EnvinMonDetail } from './components/EnvinMonDetail'
import { DesafiosView } from './components/DesafiosView'
import { InspecaoDetail } from './components/InspecaoDetail'
import imgINredeAmazoniaLogo from './assets/logo.svg'
import imgViewsEye from './assets/icon-views-eye.svg'
import imgSolutionsBulb from './assets/icon-solutions-bulb.svg'
import imgArrowRight from './assets/icon-arrow-right.svg'
import imgCompanyBuilding from './assets/icon-company-building.svg'
import imgHeroPattern from './assets/background_vitrine.png'
import imgNotificaMain from './assets/notifica-main.png'
import imgEasySsrMain from './assets/easyssr-main.png'
import imgEnvinMonMain from './assets/envinmon-main.png'
import imgSpeedyPipeMain from './assets/speedypipe-main.png'

const imgBenefitVisibility =
  imgViewsEye
const imgBenefitMarket =
  imgCompanyBuilding
const imgBenefitInnovation =
  imgSolutionsBulb
const imgCtaArrow =
  imgArrowRight
type NavItem = {
  label: string
  href: string
  active?: boolean
}

const navigationItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Programas', href: '#programas' },
  { label: 'Editais', href: '#editais' },
  { label: 'Vitrine', href: '#vitrine', active: true },
  { label: 'Desafios', href: '#desafios', active: true },
  { label: 'Rede', href: '#rede' },
]

function LogoMark({
  onClick,
  onLightBackground = false,
}: {
  onClick?: () => void
  onLightBackground?: boolean
}) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[40px] w-[73.39px] items-center justify-center ${onClick ? 'cursor-pointer' : ''}`}
      aria-label="iNREDE Amazônia logo"
    >
      <img
        src={imgINredeAmazoniaLogo}
        alt="Logo iNREDE Amazônia"
        className={`h-[38px] w-[49px] object-contain ${onLightBackground ? 'brightness-0' : ''}`}
      />
    </div>
  )
}

function NavLink({ item, active, onNavigate }: { item: NavItem; active: boolean; onNavigate: () => void }) {
  return (
    <a
      href={item.href}
      aria-current={active ? 'page' : undefined}
      onClick={(e) => {
        e.preventDefault()
        onNavigate()
      }}
      className={[
        'relative flex items-center justify-center rounded-[12.4px] px-[7.371px] py-[4.914px]',
        'text-[12px] font-semibold uppercase tracking-[0.43px] transition-colors duration-200 cursor-pointer',
        active
          ? ' bg-[rgba(255,255,255,0.21)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]'
          : 'text-[#aeb7b7] hover:text-white',
      ].join(' ')}
    >
      {item.label}
    </a>
  )
}

type FilterItem = {
  label: string
  count?: number
  checked?: boolean
}

const areaFilters: FilterItem[] = [
  { label: 'Bioinformática', count: 1, checked: false },
  { label: 'Gestão Pública', count: 1, checked: false },
  { label: 'Recursos Hídricos', count: 1, checked: false },
  { label: 'Metagenômica', count: 1, checked: false },
]

const trlValues = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const

const titularFilters: FilterItem[] = [
  { label: 'ISACI', count: 3, checked: false },
  { label: 'Fundação Guamá', count: 1, checked: false },
]

type CardItem = {
  category: string
  title: string
  description: string
  titular: string
  stack: string
  image: string
  trlLabel: string
}

type SortOrder = 'recent' | 'trl-desc' | 'trl-asc' | 'alphabetical'

const cards: CardItem[] = [
  {
    category: 'COMUNICAÇÃO CIDADÃ • GESTÃO PÚBLICA • PAINEL WEB',
    title: 'Notifica Belém',
    description:
      'Sistema fim a fim para cadastro de cidadãos e broadcast multicanal de mensagens, com dashboard analítico para segmentação e transparência na gestão de interações públicas.',
    titular: 'Fundação Guamá',
    stack: 'Java, JavaScript',
    image: imgNotificaMain,
    trlLabel: 'TRL 4 - Validação em Laboratório',
  },
  {
    category: 'BIOINFORMÁTICA • GENÔMICA • ANÁLISE MICROSSATÉLITES',
    title: 'EasySSR',
    description:
      'Plataforma web intuitiva para identificação, conversão e análise comparativa em lote de microssatélites a partir de arquivos FASTA e GenBank, sem restrição de tamanho.',
    titular: 'ISACI',
    stack: 'Python',
    image: imgEasySsrMain,
    trlLabel: 'TRL 4 - Validação em Laboratório',
  },
  {
    category: 'MONITORAMENTO AMBIENTAL • RECURSOS HÍDRICOS',
    title: 'EnvinMon',
    description:
      'Aplicação web para registro georreferenciado, gestão e visualização de parâmetros físico-químicos da qualidade da água (pH, temperatura, oxigênio dissolvido).',
    titular: 'ISACI',
    stack: 'Python',
    image: imgEnvinMonMain,
    trlLabel: 'TRL 4 - Validação em Laboratório',
  },
  {
    category: 'METAGENÔMICA • SAÚDE PÚBLICA • PIPELINE AUTOMATIZADO',
    title: 'SpeedyPipe4Meta (SP4M)',
    description:
      'Pipeline web automatizado que integra 7 ferramentas para processar dados brutos (raw reads) até a taxonomia, predição funcional e detecção de genes de resistência.',
    titular: 'ISACI',
    stack: 'Python',
    image: imgSpeedyPipeMain,
    trlLabel: 'TRL 4 - Validação em Laboratório',
  },
]

function InfoIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-[15.75px] w-[16.5px] text-[#3d4949]">
      <path
        d="M8 13.5A5.5 5.5 0 1 0 8 2.5a5.5 5.5 0 0 0 0 11ZM8 5.5h.01M8 7.5v3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type BenefitItem = {
  title: string
  description: string
  icon: string
}

const benefitItems: BenefitItem[] = [
  {
    title: 'Maior Visibilidade',
    description:
      'Exponha sua tecnologia para uma rede qualificada de atores institucionais e investidores.',
    icon: imgBenefitVisibility,
  },
  {
    title: 'Conexão com Mercado',
    description:
      'Facilite parcerias estratégicas e transferência de tecnologia para o setor produtivo.',
    icon: imgBenefitMarket,
  },
  {
    title: 'Fomento à Inovação',
    description:
      'Aumente as chances de captação de recursos e apoio para desenvolvimento e escala.',
    icon: imgBenefitInnovation,
  },
]

function BenefitCard({ item }: { item: BenefitItem }) {
  return (
    <div className="flex h-full w-full max-w-none flex-col items-center rounded-[12px] border border-[rgba(188,201,200,0.3)] bg-white p-[20px] shadow-[0_10px_15px_rgba(0,43,43,0.05)] transition-shadow duration-200 hover:shadow-md lg:max-w-[290px]">
      <div className="mb-[14px] flex h-[58px] w-[58px] items-center justify-center">
        <img src={item.icon} alt="" className="h-[48px] w-[48px]" />
      </div>

      <h3 className="mb-[8px] text-center text-[20px] font-semibold leading-[28px] text-[#191c1d]">
        {item.title}
      </h3>

      <p className="m-0 text-center text-[14px] leading-[22px] text-[#3d4949]">
        {item.description}
      </p>
    </div>
  )
}

function CtaSection() {
  return (
    <section className="bg-[#f2f4f4] px-6 py-[52px]">
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <div className="mb-[16px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#008282] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <BadgeCheck aria-hidden="true" className="h-[24px] w-[24px] text-white" strokeWidth={1.8} />
        </div>

        <h2 className="m-0 mb-[16px] max-w-[720px] text-[28px] font-semibold leading-[36px] tracking-[-0.02em] text-[#191c1d]">
          Sua ICT desenvolve uma tecnologia que pode interessar ao mercado?
        </h2>

        <p className="m-0 mb-[28px] max-w-[580px] text-[15px] leading-[24px] text-[#3d4949]">
          Conecte sua inovação com investidores e parceiros estratégicos. Junte-se à Vitrine
          Tecnológica e potencialize o impacto da sua pesquisa.
        </p>

        <button
          type="button"
          className="inline-flex items-center gap-[8px] rounded-[8px] bg-[#008b8b] px-[24px] py-[14px] text-[15px] font-bold text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-[#007a7a] focus:outline-none focus:ring-2 focus:ring-[#008b8b] focus:ring-offset-2"
        >
          <span>Quero cadastrar uma tecnologia</span>
          <img src={imgCtaArrow} alt="" className="h-[16px] w-[16px]" />
        </button>
      </div>
    </section>
  )
}

function Footer({
  activeNav,
  onNavigate,
}: {
  activeNav?: string
  onNavigate?: (label: string) => void
}) {
  const institutionalLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Programas', href: '#programas' },
    { label: 'Editais', href: '#editais' },
    { label: 'Vitrine', href: '#vitrine' },
    { label: 'Desafios', href: '#desafios' },
    { label: 'Rede', href: '#rede' },
    { label: 'Contato', href: '#contato' },
  ]

  const contactRows = [
    {
      icon: MapPin,
      text: 'Av. Exemplo da Silva, 123, Sala 402, Bairro Modelo – Belém/PA, 66000-000.',
    },
    {
      icon: Mail,
      text: 'contato@suempresa.com.br',
    },
    {
      icon: Phone,
      text: '(91) 3210-0000',
    },
  ]

  return (
    <footer className="border-t border-[#d7dbdb] bg-[#f3f4f4] px-6 pb-8 pt-9 text-[#191c1d]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 pb-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="mb-6 text-[15px] font-semibold uppercase tracking-[0.02em] text-[#191c1d]">
              Institucional
            </h3>

            <nav aria-label="Links institucionais" className="space-y-3">
              {institutionalLinks.map(({ label, href }) => (
                <div key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      if (onNavigate && (label === 'Vitrine' || label === 'Desafios')) {
                        e.preventDefault()
                        onNavigate(label)
                      }
                    }}
                    className={[
                      'text-[15px] leading-[24px] transition-colors cursor-pointer',
                      label === activeNav
                        ? 'text-[#008b8b] font-bold hover:text-[#007777]'
                        : 'text-[#191c1d] hover:text-[#008b8b]',
                    ].join(' ')}
                  >
                    {label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div id="contato">
            <h3 className="mb-6 text-[15px] font-semibold uppercase tracking-[0.02em] text-[#191c1d]">
              Contato
            </h3>

            <div className="space-y-4">
              {contactRows.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-[15px] leading-[24px] text-[#191c1d]">
                  <Icon aria-hidden="true" className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#008b8b]" strokeWidth={1.7} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#d7dbdb] pt-5">
          <div className="flex flex-wrap gap-6 text-[13px] font-medium uppercase tracking-[0.02em] text-[#191c1d]">
            <a href="#" className="hover:text-[#008b8b]">
              Privacidade
            </a>
            <a href="#" className="hover:text-[#008b8b]">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder>('recent')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileDrawerTab, setMobileDrawerTab] = useState<'navigation' | 'filters'>('navigation')
  const [areas, setAreas] = useState(() => areaFilters.map((item) => ({ ...item })))
  const [titulars, setTitulars] = useState(() => titularFilters.map((item) => ({ ...item })))
  const [selectedTrl, setSelectedTrl] = useState<number[]>([])
  const [activeNav, setActiveNav] = useState('Vitrine')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [selectedDesafioId, setSelectedDesafioId] = useState<string | null>(null)

  useEffect(() => {
    const updateScrolledState = () => {
      const scrolled = window.scrollY > 80
      setIsScrolled((current) => (current === scrolled ? current : scrolled))
    }

    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolledState)
  }, [])

  const filteredCards = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()
    const activeAreas = areas.filter((item) => item.checked).map((item) => item.label.toLowerCase())
    const activeTitulars = titulars.filter((item) => item.checked).map((item) => item.label.toLowerCase())

    const filtered = cards.filter((card) => {
      const cardText = [
        card.title,
        card.description,
        card.category,
        card.titular,
        card.stack,
        card.trlLabel,
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch = !searchTerm || cardText.includes(searchTerm)

      const matchesArea =
        activeAreas.length === 0 ||
        activeAreas.some((label) => card.category.toLowerCase().includes(label))

      const matchesTitular =
        activeTitulars.length === 0 ||
        activeTitulars.some((label) => card.titular.toLowerCase().includes(label))

      const cardTrl = Number(card.trlLabel.match(/\d+/)?.[0] ?? 0)
      const matchesTrl = selectedTrl.length === 0 || selectedTrl.includes(cardTrl)

      return matchesSearch && matchesArea && matchesTitular && matchesTrl
    })

    if (sortOrder === 'alphabetical') {
      return filtered.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }))
    }

    if (sortOrder === 'trl-desc' || sortOrder === 'trl-asc') {
      const direction = sortOrder === 'trl-desc' ? -1 : 1
      return filtered.sort((a, b) => {
        const aTrl = Number(a.trlLabel.match(/\d+/)?.[0] ?? 0)
        const bTrl = Number(b.trlLabel.match(/\d+/)?.[0] ?? 0)
        return (aTrl - bTrl) * direction
      })
    }

    return filtered
  }, [areas, search, selectedTrl, sortOrder, titulars])

  const toggleArea = (label: string) => {
    setAreas((current) =>
      current.map((item) => (item.label === label ? { ...item, checked: !item.checked } : item)),
    )
  }

  const toggleTitular = (label: string) => {
    setTitulars((current) =>
      current.map((item) => (item.label === label ? { ...item, checked: !item.checked } : item)),
    )
  }

  const toggleTrl = (value: number) => {
    setSelectedTrl((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    )
  }

  const clearFilters = () => {
    setSearch('')
    setAreas(areaFilters.map((item) => ({ ...item, checked: false })))
    setTitulars(titularFilters.map((item) => ({ ...item, checked: false })))
    setSelectedTrl([])
  }

  const handleNavigation = (item: NavItem) => {
    setIsMobileMenuOpen(false)
    setActiveNav(item.label)
    setSelectedTech(null)
    setSelectedDesafioId(null)

    if (item.label === 'Vitrine' || item.label === 'Desafios') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.setTimeout(() => {
      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  return (
    <main className="min-h-screen bg-[#0F2A29] py-0">
      <header
        className={[
          'sticky top-0 z-40 h-[80px] transition-colors duration-300 ease-out motion-reduce:transition-none',
          isScrolled
            ? 'border-transparent bg-transparent'
            : 'border-[#BCC9C8] bg-[#0F2A29]',
        ].join(' ')}
      >
        <nav
          className={[
            'mx-auto flex items-center justify-between transition-all duration-300 ease-out motion-reduce:transition-none',
            isScrolled
              ? 'mt-[10px] h-[60px] w-[calc(100%-2rem)] max-w-[1120px] rounded-full border border-white/15 bg-[rgba(15,42,41,0.82)] px-4 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6'
              : 'h-full w-full max-w-[1440px] px-4 sm:px-6 lg:px-8',
          ].join(' ')}
        >
          <div className="flex items-center justify-start gap-3">
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Fechar navegação' : 'Abrir navegação'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setMobileDrawerTab('navigation')
                setIsMobileMenuOpen((open) => !open)
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
            >
              {isMobileMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
            <LogoMark
              onClick={() => {
                setActiveNav('Vitrine')
                setSelectedTech(null)
                setSelectedDesafioId(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          </div>

          <div className="hidden items-center justify-center gap-3 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                active={activeNav === item.label && (item.label !== 'Vitrine' || !selectedTech)}
                onNavigate={() => handleNavigation(item)}
              />
            ))}
          </div>

          <div className="flex items-center justify-end">
            <a
              href="#contato"
              className="inline-flex h-[25px] items-center justify-center rounded-[12.4px] border border-[#157673] bg-[#157673] px-[24px] py-[10px] text-[12px] font-bold leading-[20px] tracking-[-0.2px] text-white transition-all duration-200 hover:bg-[#1a8a83] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contato
            </a>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Fechar navegação"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 h-full w-full bg-[#0f2a29]/60 backdrop-blur-[2px]"
          />
          <aside
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu do site e filtros"
            className="relative flex h-full w-[min(390px,90vw)] max-w-[420px] flex-col overflow-hidden border-r border-[#d7dbdb] bg-[#f6f8f8] shadow-2xl"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-[#d7dbdb] px-5 py-4">
              <div className="flex items-center gap-3">
                <LogoMark onLightBackground />
              </div>
              <button
                type="button"
                aria-label="Fechar navegação"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#0f2a29] transition-colors hover:bg-[#e5eeee] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006767]"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <div role="tablist" aria-label="Menu do site e filtros" className="grid shrink-0 grid-cols-2 gap-1 border-b border-[#d7dbdb]">
              <button
                id="mobile-navigation-tab"
                type="button"
                role="tab"
                aria-selected={mobileDrawerTab === 'navigation'}
                aria-controls="mobile-navigation-panel"
                onClick={() => setMobileDrawerTab('navigation')}
                className={[
                  'rounded-md px-3 py-2.5 text-sm font-semibold transition-colors',
                  mobileDrawerTab === 'navigation'
                    ? 'bg-[#e6f3f2] text-[#006767]'
                    : 'text-[#3e4949] hover:bg-[#f3f6f6]',
                ].join(' ')}
              >
                Navegar
              </button>
              <button
                id="mobile-filters-tab"
                type="button"
                role="tab"
                aria-selected={mobileDrawerTab === 'filters'}
                aria-controls="mobile-navigation-panel"
                onClick={() => setMobileDrawerTab('filters')}
                className={[
                  'rounded-md px-3 py-2.5 text-sm font-semibold transition-colors',
                  mobileDrawerTab === 'filters'
                    ? 'bg-[#e6f3f2] text-[#006767]'
                    : 'text-[#3e4949] hover:bg-[#f3f6f6]',
                ].join(' ')}
              >
                Filtros
              </button>
            </div>
            <div
              id="mobile-navigation-panel"
              role="tabpanel"
              aria-labelledby={mobileDrawerTab === 'navigation' ? 'mobile-navigation-tab' : 'mobile-filters-tab'}
              className="min-h-0 flex-1 overflow-y-auto px-5 py-4"
            >
              {mobileDrawerTab === 'navigation' ? (
                <nav aria-label="Navegação principal" className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-current={activeNav === item.label ? 'page' : undefined}
                      onClick={(event) => {
                        event.preventDefault()
                        handleNavigation(item)
                      }}
                      className={[
                        'rounded-lg px-4 py-3 text-sm font-semibold uppercase transition-colors',
                        activeNav === item.label
                          ? 'bg-[#dcebea] text-[#006767]'
                          : 'text-[#3e4949] hover:bg-[#e9efef] hover:text-[#006767]',
                      ].join(' ')}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="mobile-sort-order" className="mb-2 block text-[13px] font-bold uppercase tracking-[0.04em] text-[#374151]">
                      Ordenar por
                    </label>
                    <select
                      id="mobile-sort-order"
                      aria-label="Ordenar tecnologias"
                      value={sortOrder}
                      onChange={(event) => setSortOrder(event.target.value as SortOrder)}
                      className="h-11 w-full rounded-lg border border-[#dfe5e5] bg-white px-3 text-sm text-[#374151] focus:border-[#006767] focus:outline-none focus:ring-2 focus:ring-[#006767]/20"
                    >
                      <option value="recent">Mais recentes</option>
                      <option value="trl-desc">TRL (maior p/ menor)</option>
                      <option value="trl-asc">TRL (menor p/ maior)</option>
                      <option value="alphabetical">Ordem alfabética</option>
                    </select>
                  </div>

                  <section className="border-t border-[#d7dbdb] pt-4">
                    <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.04em] text-[#374151]">
                      Área de conhecimento
                    </h3>
                    <div className="space-y-3">
                      {areas.map(({ label, count, checked }) => (
                        <label key={label} className="flex min-h-8 cursor-pointer items-center gap-3 text-sm text-[#374151]">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleArea(label)}
                            className="h-4 w-4 accent-[#008b8b]"
                          />
                          <span className="flex-1">{label}</span>
                          <span className="text-xs text-[#6b7280]">{count}</span>
                        </label>
                      ))}
                    </div>
                  </section>

                  <section className="border-t border-[#d7dbdb] pt-4">
                    <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.04em] text-[#374151]">
                      Nível TRL
                    </h3>
                    <div className="grid grid-cols-5 gap-2">
                      {trlValues.map((value) => {
                        const active = selectedTrl.includes(value)

                        return (
                          <button
                            key={value}
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggleTrl(value)}
                            className={[
                              'flex h-10 w-full items-center justify-center rounded-md text-sm font-semibold transition-colors',
                              active ? 'bg-[#0b8f93] text-white' : 'bg-[#e5e7eb] text-[#374151] hover:bg-[#d8e2e2]',
                            ].join(' ')}
                          >
                            {value}
                          </button>
                        )
                      })}
                    </div>
                  </section>

                  <section className="border-t border-[#d7dbdb] pt-4">
                    <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.04em] text-[#374151]">
                      Titular
                    </h3>
                    <div className="space-y-3">
                      {titulars.map(({ label, count, checked }) => (
                        <label key={label} className="flex min-h-8 cursor-pointer items-center gap-3 text-sm text-[#374151]">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleTitular(label)}
                            className="h-4 w-4 accent-[#008b8b]"
                          />
                          <span className="flex-1">{label}</span>
                          <span className="text-xs text-[#6b7280]">{count}</span>
                        </label>
                      ))}
                    </div>
                  </section>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="w-full cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
                  >
                    Limpar tudo
                  </button>
                </div>
              )}
            </div>
            {mobileDrawerTab === 'filters' && (
              <div className="shrink-0 border-t border-[#d7dbdb] bg-white p-4">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-11 w-full rounded-lg bg-[#006767] text-sm font-semibold text-white transition-colors hover:bg-[#005958] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006767]"
                >
                  Concluir
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      {activeNav === 'Desafios' ? (
        selectedDesafioId === '3' ? (
          <InspecaoDetail
            onBack={() => {
              setSelectedDesafioId(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        ) : (
          <DesafiosView
            onSelectDesafio={(id) => {
              setSelectedDesafioId(id)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        )
      ) : selectedTech === 'Notifica Belém' ? (
        <NotificaBelemDetail
          onBack={() => {
            setSelectedTech(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      ) : selectedTech === 'EasySSR' ? (
        <EasySSRDetail
          onBack={() => {
            setSelectedTech(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      ) : selectedTech === 'EnvinMon' ? (
        <EnvinMonDetail
          onBack={() => {
            setSelectedTech(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      ) : selectedTech === 'SpeedyPipe4Meta (SP4M)' ? (
        <SpeedyPipeDetail
          onBack={() => {
            setSelectedTech(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      ) : (
        <>
          <section id="sobre" className="relative overflow-hidden bg-[linear-gradient(166.11364704562317deg,#002b2b_0%,#004f4f_100%)] py-12 sm:py-16 lg:py-[96px]">
        <div className="absolute inset-0">
          <img
            src={imgHeroPattern}
            alt=""
            className="h-full w-full object-cover object-center opacity-35"
          />
        </div>

        <div className="relative mx-auto flex min-h-[120px] w-full max-w-[1280px] items-center justify-center px-4 sm:min-h-[140px] sm:px-6 lg:min-h-[164px] lg:px-8">
          <h1
            className="m-0 w-full max-w-full text-center text-[34px] font-bold leading-tight text-white sm:text-[48px] lg:text-[75px] lg:leading-[88px]"
            style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
          >
            Vitrine Tecnológica
          </h1>
        </div>
      </section>

      <section className="bg-[#f6f8f8] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-3 rounded-[12px] border border-[#dfe5e5] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)] lg:gap-6">
          <div className="flex w-full min-w-0 flex-1 items-center gap-2 lg:w-auto lg:flex-[1_1_280px]">
            <div className="relative flex h-[40px] min-w-0 flex-1 items-center rounded-[8px] border border-[#dfe5e5] bg-[#f8fafb] lg:max-w-[360px] lg:flex-[1_1_280px]">
              <span className="pointer-events-none absolute left-[12px] top-1/2 -translate-y-1/2">
                <Search aria-hidden="true" className="h-[16px] w-[16px] text-[#64748b]" />
              </span>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar por palavra-chave..."
                className="h-full w-full border-0 bg-transparent pl-[38px] pr-[12px] text-[16px] font-normal text-[#374151] placeholder:text-[#6b7280] focus:outline-none"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              />
            </div>
            <button
              type="button"
              aria-label="Abrir filtros e ordenação"
              onClick={() => {
                setMobileDrawerTab('filters')
                setIsMobileMenuOpen(true)
              }}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dfe5e5] bg-white text-[#006767] transition-colors hover:bg-[#e6f3f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006767] lg:hidden"
            >
              <SlidersHorizontal aria-hidden="true" size={18} />
            </button>
          </div>

          <div className="hidden min-w-[180px] flex-[1_1_180px] items-center justify-center text-[#111827] lg:flex">
            <span
              className="text-[16px] font-normal leading-5"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <span className="font-bold">{filteredCards.length}</span>{' '}
              <span className="font-normal text-[#374151]">tecnologias encontradas</span>
            </span>
          </div>

          <div className="ml-auto hidden items-center gap-3 whitespace-nowrap lg:flex">
            <span
              className="text-[16px] font-normal leading-5 text-[#111827]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Ordenar por:
            </span>
            <div className="relative">
              <select
                aria-label="Ordenar tecnologias"
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value as SortOrder)}
                className="h-[40px] w-[240px] appearance-none rounded-[8px] border border-[#dfe5e5] bg-white py-2 pl-[14px] pr-10 text-[16px] font-normal text-[#374151] transition-colors hover:bg-[#f8fafb] focus:border-[#006767] focus:outline-none focus:ring-2 focus:ring-[#006767]/20"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                <option value="recent">Mais recentes</option>
                <option value="trl-desc">TRL (maior p/ menor)</option>
                <option value="trl-asc">TRL (menor p/ maior)</option>
                <option value="alphabetical">Ordem alfabética</option>
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1/2 h-[10px] w-[10px] -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="vitrine" className="bg-[#f6f8f8] p-6">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(260px,312px)_minmax(0,1fr)]">
          <aside className="hidden w-full min-w-0 rounded-lg bg-white p-5 shadow-[0_0_0_1px_rgba(15,42,41,0.08)] lg:sticky lg:top-20 lg:block lg:self-start">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2
                className="text-[18px] font-semibold leading-7 text-[#111827]"
                style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
              >
                Filtros
              </h2>

              <button
                type="button"
                onClick={clearFilters}
                className="text-center justify-center text-teal-700 text-xs font-medium font-['Manrope'] uppercase leading-4 tracking-tight transition-colors hover:text-teal-900 cursor-pointer"
                style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
              >
                Limpar tudo
              </button>
            </div>

            <div className="space-y-4 border-t border-[#0b8f93] pt-4">
              <div>
                <h3
                  className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#374151]"
                  style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                >
                  Área de conhecimento
                </h3>

                <div className="space-y-3">
                  {areas.map(({ label, count, checked }) => (
                    <label
                      key={label}
                      className="flex cursor-pointer items-center gap-3 text-[14px] font-normal leading-5 text-[#374151]"
                      style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleArea(label)}
                        className="sr-only"
                      />

                      <span
                        className={[
                          'relative inline-flex h-4 w-4 items-center justify-center rounded-[4px] border',
                          checked ? 'border-[#0b8f93] bg-[#0b8f93]' : 'border-[#9ca3af] bg-white',
                        ].join(' ')}
                      >
                        {checked && (
                          <svg viewBox="0 0 16 16" className="h-3 w-3 text-white" fill="none">
                            <path
                              d="M3 8.5L6 11.5L12 5.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>

                      <span>
                        {label} ({count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#0b8f93] pt-4">
                <h3
                  className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#374151]"
                  style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                >
                  Nível trl
                </h3>

                <div className="grid w-[220px] grid-cols-6 gap-2">
                  {trlValues.map((value) => {
                    const active = selectedTrl.includes(value)

                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => toggleTrl(value)}
                        className={[
                          'flex h-8 w-8 items-center justify-center rounded-[6px] text-[13px] font-normal leading-5',
                          active ? 'bg-[#0b8f93] text-white' : 'bg-[#e5e7eb] text-[#374151]',
                        ].join(' ')}
                        style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                      >
                        {value}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="border-t border-[#0b8f93] pt-4">
                <h3
                  className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#374151]"
                  style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                >
                  Titular
                </h3>

                <div className="space-y-3">
                  {titulars.map(({ label, count, checked }) => (
                    <label
                      key={label}
                      className="flex cursor-pointer items-center gap-3 text-[14px] font-normal leading-5 text-[#374151]"
                      style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleTitular(label)}
                        className="sr-only"
                      />

                      <span
                        className={[
                          'relative inline-flex h-4 w-4 items-center justify-center rounded-[4px] border',
                          checked ? 'border-[#0b8f93] bg-[#0b8f93]' : 'border-[#9ca3af] bg-white',
                        ].join(' ')}
                      >
                        {checked && (
                          <svg viewBox="0 0 16 16" className="h-3 w-3 text-white" fill="none">
                            <path
                              d="M3 8.5L6 11.5L12 5.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>

                      <span>
                        {label} ({count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setActiveNav('Desafios')
                setSelectedTech(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="mt-5 flex w-full items-center gap-3 rounded-xl border border-[#006767] bg-[#e6f3f2] px-3 py-3 cursor-pointer hover:bg-[#d8ecea] transition-colors"
            >
              <div className="flex h-7 w-7 items-center justify-center">
                <MessageSquarePlus aria-hidden="true" className="h-6 w-6 text-[#006767]" strokeWidth={1.7} />
              </div>

              <div className="flex flex-col items-start">
                <span
                  className="text-[13px] font-normal leading-5 text-[#374151]"
                  style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                >
                  Não encontrou o que procura?
                </span>
                <span
                  className="text-[13px] font-bold leading-5 text-[#008480]"
                  style={{ fontFamily: '"Hanken Grotesk", "Montserrat", sans-serif' }}
                >
                  Submeta um desafio tecnológico.
                </span>
              </div>
            </div>
          </aside>

          <div className="flex w-full min-w-0 flex-col items-stretch justify-start">
            <div className="grid w-full min-w-0 grid-cols-1 gap-6 xl:grid-cols-2">
              {filteredCards.length === 0 ? (
                <div className="col-span-full flex min-h-[580px] items-center justify-center text-center">
                  <p className="max-w-md text-base leading-6 text-zinc-600">
                    Nenhuma tecnologia encontrada com os filtros selecionados.
                  </p>
                </div>
              ) : filteredCards.map((card) => {
                const handleOpenDetail = () => {
                  setSelectedTech(card.title)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }

                return (
                  <article
                    key={card.title}
                    className="flex min-h-[580px] w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-neutral-300/30 transition-shadow hover:shadow-md"
                  >
                    <div
                      onClick={handleOpenDetail}
                      className="h-48 w-full cursor-pointer overflow-hidden bg-[#e6f3f2]"
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col items-start justify-start p-4">
                      <div className="w-full pb-2">
                        <div className="w-full text-xs font-medium leading-4 text-teal-700">
                          {card.category}
                        </div>
                      </div>

                      <div className="w-full pb-2">
                        <div
                          onClick={handleOpenDetail}
                          className="self-stretch text-2xl font-semibold leading-8 text-zinc-900 cursor-pointer hover:text-teal-700 transition-colors"
                        >
                          {card.title}
                        </div>
                      </div>

                      <div className="w-full pb-4">
                        <div className="self-stretch text-base font-normal leading-6 text-zinc-700">
                          {card.description}
                        </div>
                      </div>

                      <div className="w-full border-t border-gray-100 py-3">
                        <div className="flex w-full items-center justify-between">
                          <div className="text-xs font-medium leading-4 text-black">Titular:</div>
                          <div className="text-xs font-medium leading-4 text-black">{card.titular}</div>
                        </div>
                        <div className="mt-1.5 flex w-full items-center justify-between">
                          <div className="text-xs font-medium leading-4 text-black">Stack:</div>
                          <div className="text-xs font-medium leading-4 text-black">{card.stack}</div>
                        </div>
                      </div>

                      <div className="mt-4 w-full pb-4">
                        <div className="flex w-full items-center justify-between rounded-lg bg-zinc-100 px-3 py-2">
                          <div className="text-xs font-medium leading-4 text-zinc-700">{card.trlLabel}</div>
                          <InfoIcon />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleOpenDetail}
                        className="mt-auto w-full rounded-lg border-2 border-slate-600 px-2 py-2 text-base font-normal leading-6 text-slate-600 transition-colors cursor-pointer hover:border-[#006767] hover:bg-[#006767] hover:text-white"
                      >
                        Ver Detalhes
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      <section id="servicos" className="overflow-hidden bg-[#f8fafa] px-0 py-[48px] sm:px-6 lg:px-10">
        <div
          role="region"
          aria-label="Benefícios"
          tabIndex={0}
          className="hide-scrollbar mx-auto flex w-full max-w-[1280px] snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006767] sm:gap-6 sm:px-0 lg:flex-wrap lg:justify-center lg:gap-[32px] lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {benefitItems.map((item) => (
            <div key={item.title} className="flex w-[78vw] max-w-[500px] shrink-0 snap-start sm:w-[72vw] lg:w-[290px]">
              <BenefitCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <section id="editais">
        <CtaSection />
      </section>
        </>
      )}
      <Footer
        activeNav={activeNav}
        onNavigate={(label) => {
          setActiveNav(label)
          setSelectedTech(null)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
    </main>
  )
}

export default App
