export default function Hero() {
  const logos = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma', 'Slack', 'GitHub', 'AWS']

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-dot-grid">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #FFC801 0%, #FF9932 40%, transparent 70%)' }} />

      {/* Badge */}
      <div className="relative z-10 flex items-center gap-2 mb-6 glass rounded-full px-4 py-2 text-sm">
        <img src="/svgs/arrow-trending-up.svg" className="w-4 h-4" style={{filter:'invert(84%) sepia(49%) saturate(800%) hue-rotate(0deg)'}} alt="" />
        <span className="text-forsythia font-mono font-medium">Powered by Adaptive AI</span>
        <span className="text-mysticMint/50 ml-1">→ 12× faster automation</span>
      </div>

      {/* Headline */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="text-arcticPowder">Automate Everything.</span>
          <br />
          <span className="text-gradient font-mono">Scale Effortlessly.</span>
        </h1>
        <p className="text-lg md:text-xl text-mysticMint/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Armory is the AI-native data automation platform built for engineering teams who refuse to settle. 
          Connect, orchestrate, and ship — without the overhead.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="flex items-center gap-2 bg-forsythia text-oceanicNoir font-semibold px-8 py-4 rounded-xl text-base hover:bg-deepSaffron transition-all duration-200 shadow-xl shadow-forsythia/30 hover:scale-105">
            <img src="/svgs/link-solid.svg" className="w-4 h-4" style={{filter:'invert(0)'}} alt="" />
            Start Building Free
          </button>
          <button className="flex items-center gap-2 glass border border-mysticMint/20 text-arcticPowder px-8 py-4 rounded-xl text-base hover:border-forsythia/50 transition-all duration-200 hover:scale-105">
            <img src="/svgs/arrow-path.svg" className="w-4 h-4" style={{filter:'invert(1)'}} alt="" />
            Watch Demo
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
          {[
            { value: '12×', label: 'Faster workflows' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '40K+', label: 'Teams onboarded' },
            { value: '< 50ms', label: 'Avg latency' },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-mono text-3xl font-bold text-forsythia">{stat.value}</span>
              <span className="text-sm text-mysticMint/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Cloud Marquee */}
      <div className="relative z-10 w-full overflow-hidden py-4 border-y border-mysticMint/10">
        <p className="text-center text-xs text-mysticMint/40 mb-4 uppercase tracking-widest font-mono">Trusted by teams at</p>
        <div className="flex gap-12 animate-[wave_20s_linear_infinite] whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="inline-flex items-center gap-2 text-mysticMint/30 hover:text-mysticMint/60 transition-colors text-sm font-mono font-medium shrink-0">
              <div className="w-2 h-2 rounded-full bg-forsythia/50" />
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
