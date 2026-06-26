import { useState, useRef } from 'react'

const faqs = [
  {
    q: 'How is Armory different from Zapier or Make?',
    a: 'Armory is built for engineering teams, not non-technical users. It offers code-level control, Git-based versioning, real-time observability, and handles millions of events per minute — something Zapier simply cannot do.',
  },
  {
    q: 'Can I self-host Armory?',
    a: 'Yes. Armory offers a self-hosted Community Edition under an open-source license. Enterprise customers also get dedicated VPC deployment options with zero data egress guarantees.',
  },
  {
    q: 'What happens if my pipeline fails mid-run?',
    a: 'Our self-healing engine auto-retries failed steps with configurable exponential backoff. You get real-time Slack/email alerts, and the failed run state is captured so you can replay from the exact failure point.',
  },
  {
    q: 'Is Armory SOC 2 compliant?',
    a: 'Yes. Armory is SOC 2 Type II certified, GDPR-compliant, and supports HIPAA-ready configurations on the Enterprise plan. All data is encrypted at rest (AES-256) and in transit (TLS 1.3).',
  },
  {
    q: 'How does pricing work for high-volume usage?',
    a: 'Each plan includes a base run quota. If you exceed it, we charge per additional 1K runs. Enterprise customers can negotiate custom flat-rate contracts. We never throttle your pipelines unexpectedly.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)

  return (
    <div className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-forsythia/40 shadow-lg shadow-forsythia/5' : 'border-mysticMint/10'}`}>
      <button
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
        onClick={onToggle}
      >
        <span className={`font-semibold text-sm sm:text-base md:text-lg transition-colors text-left pr-3 ${isOpen ? 'text-forsythia' : 'text-arcticPowder'}`}>{item.q}</span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'bg-forsythia rotate-45' : 'bg-nocturnalExpedition'}`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill={isOpen ? '#172B36' : '#D9E8E2'}>
            <path d="M5 1V9M1 5H9" stroke={isOpen ? '#172B36' : '#D9E8E2'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 350ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p className="px-5 md:px-6 pb-5 text-mysticMint/60 text-sm md:text-base leading-relaxed text-left">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-12 sm:mb-14">
        <span className="font-mono text-xs text-forsythia/70 tracking-widest uppercase">FAQ</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-arcticPowder mt-3 mb-4">
          Questions? <span className="text-gradient">Answered.</span>
        </h2>
        <p className="text-mysticMint/60 text-base sm:text-lg">
          Everything you need to know about Armory.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}
      </div>

      <div className="mt-12 text-center glass rounded-2xl p-8 border border-mysticMint/10">
        <p className="text-mysticMint/60 mb-2 text-sm">Still have questions?</p>
        <p className="text-arcticPowder font-semibold text-lg mb-5">Our team typically responds in under 2 hours.</p>
        <button className="bg-forsythia text-oceanicNoir font-semibold px-7 py-3 rounded-xl hover:bg-deepSaffron transition-all duration-200 text-sm shadow-lg shadow-forsythia/20">
          Contact Support
        </button>
      </div>
    </section>
  )
}
