import { useRef, useCallback } from 'react'

// Price matrix: [monthly, annual] in USD
const PRICES = {
  Starter: [29, 23],
  Pro: [79, 63],
  Enterprise: [199, 159],
}

// Currency config: { symbol, multiplier }
const CURRENCIES = {
  USD: { symbol: '$', multiplier: 1 },
  EUR: { symbol: '€', multiplier: 0.9 },
  INR: { symbol: '₹', multiplier: 80 },
}

const PLANS = [
  {
    name: 'Starter',
    desc: 'Perfect for small teams getting started with automation.',
    features: ['5 active pipelines', '10K runs / month', 'Community support', '3 integrations', 'Basic analytics'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Pro',
    desc: 'Everything growing teams need to move fast and scale.',
    features: ['Unlimited pipelines', '500K runs / month', 'Priority support', '100+ integrations', 'Advanced analytics', 'Team collaboration', 'Custom webhooks'],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    desc: 'Dedicated infrastructure for mission-critical workflows.',
    features: ['Unlimited everything', 'Dedicated infrastructure', '24/7 SLA support', '500+ integrations', 'SSO & SAML', 'Audit logs', 'Custom contracts'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  // All price refs per plan — zero re-render approach
  const priceRefs = useRef({})
  const periodRefs = useRef({})
  const billingRef = useRef({ annual: false, currency: 'USD' })
  const annualToggleRef = useRef(null)
  const currencyBtnRefs = useRef({})

  const updatePrices = useCallback(() => {
    const { annual, currency } = billingRef.current
    const { symbol, multiplier } = CURRENCIES[currency]
    PLANS.forEach(plan => {
      const base = PRICES[plan.name][annual ? 1 : 0]
      const price = Math.round(base * multiplier)
      if (priceRefs.current[plan.name]) {
        priceRefs.current[plan.name].textContent = `${symbol}${price}`
      }
      if (periodRefs.current[plan.name]) {
        periodRefs.current[plan.name].textContent = annual ? '/mo, billed annually' : '/month'
      }
    })
  }, [])

  const handleBillingToggle = useCallback(() => {
    billingRef.current.annual = !billingRef.current.annual
    if (annualToggleRef.current) {
      const isAnnual = billingRef.current.annual
      annualToggleRef.current.style.transform = isAnnual ? 'translateX(24px)' : 'translateX(0px)'
      annualToggleRef.current.parentElement.style.background = isAnnual ? '#FFC801' : 'rgba(217,232,226,0.15)'
    }
    updatePrices()
  }, [updatePrices])

  const handleCurrencyChange = useCallback((curr) => {
    billingRef.current.currency = curr
    Object.entries(currencyBtnRefs.current).forEach(([key, el]) => {
      if (!el) return
      el.style.background = key === curr ? '#FFC801' : 'transparent'
      el.style.color = key === curr ? '#172B36' : '#D9E8E2'
    })
    updatePrices()
  }, [updatePrices])

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="font-mono text-xs text-forsythia/70 tracking-widest uppercase">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-bold text-arcticPowder mt-3 mb-4">
          Simple, transparent <span className="text-gradient">pricing</span>
        </h2>
        <p className="text-mysticMint/60 text-lg max-w-xl mx-auto">No surprises. Switch plans or cancel anytime.</p>
      </div>

      {/* Controls: Billing Toggle + Currency Selector */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
        {/* Annual Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-mysticMint/60">Monthly</span>
          <button
            className="relative w-14 h-7 rounded-full transition-colors duration-300"
            style={{ background: 'rgba(217,232,226,0.15)' }}
            onClick={handleBillingToggle}
            aria-label="Toggle annual billing"
          >
            <div
              ref={annualToggleRef}
              className="absolute top-1 left-1 w-5 h-5 rounded-full bg-arcticPowder transition-transform duration-300 shadow"
              style={{ transform: 'translateX(0px)' }}
            />
          </button>
          <span className="text-sm text-mysticMint/60">Annual <span className="text-forsythia font-mono text-xs">-20%</span></span>
        </div>

        {/* Currency Selector */}
        <div className="flex items-center gap-1 glass rounded-xl p-1">
          {Object.keys(CURRENCIES).map(curr => (
            <button
              key={curr}
              ref={el => (currencyBtnRefs.current[curr] = el)}
              onClick={() => handleCurrencyChange(curr)}
              className="px-4 py-1.5 rounded-lg text-sm font-mono font-medium transition-all duration-200"
              style={{
                background: curr === 'USD' ? '#FFC801' : 'transparent',
                color: curr === 'USD' ? '#172B36' : '#D9E8E2',
              }}
            >
              {curr}
            </button>
          ))}
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map(plan => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 ${
              plan.highlight
                ? 'border-2 border-forsythia shadow-2xl shadow-forsythia/20 scale-[1.02]'
                : 'glass-light border border-mysticMint/10 hover:border-forsythia/30'
            }`}
            style={plan.highlight ? { background: 'linear-gradient(135deg, #1a3340 0%, #172B36 100%)' } : {}}
          >
            {plan.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-forsythia text-oceanicNoir text-xs font-mono font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-arcticPowder mb-1">{plan.name}</h3>
              <p className="text-sm text-mysticMint/50">{plan.desc}</p>
            </div>

            {/* Price Display (ref-controlled, zero re-render) */}
            <div>
              <span
                ref={el => (priceRefs.current[plan.name] = el)}
                className="font-mono text-4xl font-bold text-forsythia"
              >
                ${PRICES[plan.name][0]}
              </span>
              <span
                ref={el => (periodRefs.current[plan.name] = el)}
                className="text-sm text-mysticMint/50 ml-2"
              >
                /month
              </span>
            </div>

            {/* Features list */}
            <ul className="flex flex-col gap-2.5 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-mysticMint/70">
                  <div className="w-4 h-4 rounded-full bg-forsythia/20 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-forsythia" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                plan.highlight
                  ? 'bg-forsythia text-oceanicNoir hover:bg-deepSaffron shadow-lg shadow-forsythia/30'
                  : 'glass border border-mysticMint/20 text-arcticPowder hover:border-forsythia/50'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
