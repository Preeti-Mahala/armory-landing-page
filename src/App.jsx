import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import NodeGraph from './components/NodeGraph'
import Slider from './components/Slider'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-oceanicNoir">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <NodeGraph />
        <Slider />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
