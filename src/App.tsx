import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { StackMarquee } from './sections/blocks/Marquee'
import { PillarsFive } from './sections/blocks/PillarsFive'
import { DeepDive } from './sections/blocks/DeepDive'
import { ShipCards } from './sections/blocks/ShipCards'
import { Foundation } from './sections/blocks/Foundation'
import { Story } from './sections/Story'
import { Builds } from './sections/Builds'
import { Advantage } from './sections/blocks/Advantage'
import { Integrations } from './sections/blocks/Integrations'
import { CloseSection } from './sections/blocks/Close'

export default function App() {
  return (
    <div className="app">
      <div className="rt-bg" aria-hidden />
      <div className="content">
        <Header />
        <main>
          <Hero />
          <StackMarquee />
          <PillarsFive />
          <DeepDive />
          <ShipCards />
          <Story />
          <Foundation />
          <Builds />
          <Advantage />
          <Integrations />
          <CloseSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
