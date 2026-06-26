import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-mysticMint/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/svgs/cube-16-solid.svg" alt="Armory" className="w-7 h-7" style={{filter:'invert(84%) sepia(49%) saturate(800%) hue-rotate(0deg)'}} />
          <span className="font-mono font-bold text-lg tracking-tight text-forsythia">ARMORY</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-mysticMint/80">
          <a href="#features" className="hover:text-forsythia transition-colors">Features</a>
          <a href="#performance" className="hover:text-forsythia transition-colors">Performance</a>
          <a href="#pricing" className="hover:text-forsythia transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-forsythia transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-mysticMint/80 hover:text-forsythia transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="text-sm font-semibold bg-forsythia text-oceanicNoir px-5 py-2 rounded-lg hover:bg-deepSaffron transition-all duration-200 shadow-lg shadow-forsythia/20">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-mysticMint" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen
            ? <img src="/svgs/x-mark.svg" className="w-6 h-6" style={{filter:'invert(1)'}} alt="close" />
            : <div className="flex flex-col gap-1"><span className="block w-6 h-0.5 bg-mysticMint"/><span className="block w-6 h-0.5 bg-mysticMint"/><span className="block w-4 h-0.5 bg-mysticMint"/></div>
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-mysticMint/10 px-4 sm:px-6 py-4 flex flex-col gap-4 text-sm text-mysticMint/80">
          <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-forsythia transition-colors">Features</a>
          <a href="#performance" onClick={() => setMenuOpen(false)} className="hover:text-forsythia transition-colors">Performance</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-forsythia transition-colors">Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-forsythia transition-colors">FAQ</a>
          <button className="mt-2 text-sm font-semibold bg-forsythia text-oceanicNoir px-5 py-2.5 rounded-lg">
            Get Started Free
          </button>
        </div>
      )}
    </header>
  )
}
