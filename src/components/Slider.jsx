import { useState, useRef } from 'react'

const projects = [
  {
    title: 'E-commerce Order Pipeline',
    tag: 'Retail',
    desc: 'Automated order ingestion, fraud scoring, and fulfillment triggers. 3M orders/day at 0 downtime.',
    metrics: [{ label: 'Orders/day', val: '3M' }, { label: 'Latency', val: '18ms' }],
  },
  {
    title: 'AI Document Classifier',
    tag: 'FinTech',
    desc: 'Real-time classification of loan applications, routing to the correct underwriting team via Slack.',
    metrics: [{ label: 'Accuracy', val: '98.4%' }, { label: 'Time saved', val: '40 hrs/wk' }],
  },
  {
    title: 'Multi-Cloud ETL Sync',
    tag: 'SaaS',
    desc: 'Bi-directional sync between Snowflake, BigQuery, and Redshift. Zero data loss, cross-region replication.',
    metrics: [{ label: 'Tables synced', val: '12K' }, { label: 'Uptime', val: '99.99%' }],
  },
  {
    title: 'Marketing Attribution Engine',
    tag: 'Growth',
    desc: 'Ingests ad spend from 8 platforms, combines with CRM events, and outputs unified multi-touch attribution.',
    metrics: [{ label: 'Ad platforms', val: '8' }, { label: 'Daily events', val: '20M' }],
  },
]

export default function Slider() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)

  const goTo = (idx) => {
    if (idx < 0 || idx >= projects.length) return
    setCurrent(idx)
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${idx * 100}%)`
    }
  }

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-forsythia/70 tracking-widest uppercase">Case Studies</span>
        <h2 className="text-4xl md:text-5xl font-bold text-arcticPowder mt-3 mb-4">
          Proven at <span className="text-gradient">scale</span>
        </h2>
        <p className="text-mysticMint/60 text-lg max-w-xl mx-auto">
          Teams across every industry rely on Armory for their most critical workflows.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        {/* Track */}
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          {projects.map((p, i) => (
            <div key={i} className="min-w-full">
              <div className="glass-light border border-mysticMint/10 rounded-2xl p-8 md:p-12 mx-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-mono text-forsythia bg-forsythia/10 px-3 py-1 rounded-full">{p.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-arcticPowder mt-3">{p.title}</h3>
                  </div>
                  <div className="flex gap-4">
                    {p.metrics.map(m => (
                      <div key={m.label} className="text-center glass rounded-xl px-4 py-3">
                        <div className="font-mono text-xl font-bold text-forsythia">{m.val}</div>
                        <div className="text-xs text-mysticMint/50 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-mysticMint/60 text-lg leading-relaxed max-w-2xl">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-mysticMint/20 hover:border-forsythia/50 transition-all disabled:opacity-30"
        >
          <img src="/svgs/chevron-left.svg" className="w-4 h-4" style={{ filter: 'invert(1)' }} alt="prev" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-forsythia' : 'w-2 h-2 bg-mysticMint/30'}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === projects.length - 1}
          className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-mysticMint/20 hover:border-forsythia/50 transition-all disabled:opacity-30"
        >
          <img src="/svgs/chevron-right.svg" className="w-4 h-4" style={{ filter: 'invert(1)' }} alt="next" />
        </button>
      </div>
    </section>
  )
}
