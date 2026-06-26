export default function Footer() {
  return (
    <footer className="border-t border-mysticMint/10 mt-12">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-arcticPowder mb-4">
          Ready to <span className="text-gradient">automate?</span>
        </h2>
        <p className="text-mysticMint/60 text-lg mb-8 max-w-xl mx-auto">
          Join 40,000+ engineering teams shipping smarter workflows with Armory.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 w-full sm:w-auto glass border border-mysticMint/20 rounded-xl px-5 py-3.5 text-sm text-arcticPowder placeholder:text-mysticMint/40 focus:outline-none focus:border-forsythia/60 transition-colors"
          />
          <button className="bg-forsythia text-oceanicNoir font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-deepSaffron transition-all duration-200 whitespace-nowrap shadow-lg shadow-forsythia/20">
            Get Early Access
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 pb-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-mysticMint/10 pt-8">
        <div className="flex items-center gap-2">
          <img src="/svgs/cube-16-solid.svg" className="w-5 h-5" style={{ filter: 'invert(84%) sepia(49%) saturate(800%) hue-rotate(0deg)' }} alt="" />
          <span className="font-mono font-bold text-forsythia">ARMORY</span>
        </div>

        <div className="flex gap-6 text-sm text-mysticMint/50 flex-wrap justify-center">
          {['Product', 'Docs', 'Blog', 'Changelog', 'Status', 'Privacy', 'Terms'].map(link => (
            <a key={link} href="#" className="hover:text-forsythia transition-colors">{link}</a>
          ))}
        </div>

        <p className="text-xs text-mysticMint/30 font-mono">© 2026 Armory, Inc.</p>
      </div>
    </footer>
  )
}
