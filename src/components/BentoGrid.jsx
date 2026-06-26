import { useState, useEffect, useRef } from 'react'

const features = [
  {
    id: 0,
    icon: '/svgs/chart-pie.svg',
    title: 'Visual Pipeline Builder',
    desc: 'Drag-and-drop nodes to orchestrate complex data flows. Connect APIs, databases, and AI models without writing boilerplate.',
    tag: 'No-code',
    span: 'col-span-2',
  },
  {
    id: 1,
    icon: '/svgs/cog-8-tooth.svg',
    title: 'Intelligent Scheduling',
    desc: 'Cron, event-driven, or webhook-based triggers. Armory\'s scheduler adapts to your deployment patterns.',
    tag: 'Automation',
    span: 'col-span-1',
  },
  {
    id: 2,
    icon: '/svgs/arrow-path.svg',
    title: 'Self-Healing Pipelines',
    desc: 'Auto-retry, smart fallbacks, and live error alerting keep your workflows running even when upstream APIs fail.',
    tag: 'Reliability',
    span: 'col-span-1',
  },
  {
    id: 3,
    icon: '/svgs/link.svg',
    title: '500+ Integrations',
    desc: 'Connect to Stripe, Notion, Slack, Postgres, OpenAI, HubSpot, and 490 more out of the box.',
    tag: 'Ecosystem',
    span: 'col-span-2',
  },
]

function BentoCard({ feature, isActive, onClick }) {
  return (
    <div
      className={`glass-light rounded-2xl p-6 cursor-pointer border transition-all duration-300 group ${
        isActive
          ? 'border-forsythia/50 shadow-lg shadow-forsythia/10 scale-[1.01]'
          : 'border-mysticMint/10 hover:border-forsythia/30'
      } ${feature.span}`}
      onClick={() => onClick(feature.id)}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${isActive ? 'bg-forsythia' : 'bg-nocturnalExpedition'}`}>
        <img src={feature.icon} className="w-5 h-5" style={{ filter: isActive ? 'invert(0)' : 'invert(1)' }} alt="" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-mono text-forsythia/70 bg-forsythia/10 px-2 py-0.5 rounded-full">{feature.tag}</span>
      </div>
      <h3 className="text-lg font-bold text-arcticPowder mb-2">{feature.title}</h3>
      <p className="text-sm text-mysticMint/60 leading-relaxed">{feature.desc}</p>
    </div>
  )
}

function AccordionItem({ feature, isOpen, onClick }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? contentRef.current.scrollHeight + 'px' : '0px'
    }
  }, [isOpen])

  return (
    <div className={`glass-light rounded-xl border transition-all duration-300 ${isOpen ? 'border-forsythia/40' : 'border-mysticMint/10'}`}>
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => onClick(feature.id)}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-forsythia' : 'bg-nocturnalExpedition'}`}>
            <img src={feature.icon} className="w-4 h-4" style={{ filter: isOpen ? 'invert(0)' : 'invert(1)' }} alt="" />
          </div>
          <span className="font-semibold text-arcticPowder">{feature.title}</span>
        </div>
        <img
          src="/svgs/chevron-down.svg"
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{ filter: 'invert(1)' }}
          alt=""
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 300ms ease' }}
      >
        <div className="px-5 pb-5 text-sm text-mysticMint/60 leading-relaxed">
          {feature.desc}
        </div>
      </div>
    </div>
  )
}

export default function BentoGrid() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const obs = new ResizeObserver(entries => {
      for (const entry of entries) {
        setIsMobile(entry.contentRect.width < 768)
      }
    })
    obs.observe(document.body)
    setIsMobile(window.innerWidth < 768)
    return () => obs.disconnect()
  }, [])

  const handleSelect = (id) => setActiveIdx(id)

  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-mono text-xs text-forsythia/70 tracking-widest uppercase">Platform Features</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-arcticPowder mt-3 mb-4">
          Everything you need to <span className="text-gradient">ship faster</span>
        </h2>
        <p className="text-mysticMint/60 text-base sm:text-lg max-w-2xl mx-auto">
          Armory bundles everything modern engineering teams need into one beautifully designed platform.
        </p>
      </div>

      {/* Desktop Bento Grid */}
      {!isMobile && (
        <div className="grid grid-cols-3 gap-4">
          {features.map(f => (
            <BentoCard
              key={f.id}
              feature={f}
              isActive={activeIdx === f.id}
              onClick={handleSelect}
            />
          ))}
        </div>
      )}

      {/* Mobile Accordion */}
      {isMobile && (
        <div className="flex flex-col gap-3">
          {features.map(f => (
            <AccordionItem
              key={f.id}
              feature={f}
              isOpen={activeIdx === f.id}
              onClick={handleSelect}
            />
          ))}
        </div>
      )}
    </section>
  )
}
