import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { ShiftMarquee } from './sections/shift/ShiftMarquee'
import { ShiftPillarsFive } from './sections/shift/ShiftPillarsFive'
import { ShiftDeepDive } from './sections/shift/ShiftDeepDive'
import { ShiftShipCards } from './sections/shift/ShiftShipCards'
import { ShiftFoundation } from './sections/shift/ShiftFoundation'
import { Story } from './sections/Story'
import { Builds } from './sections/Builds'
import { ShiftAdvantage } from './sections/shift/ShiftAdvantage'
import { ShiftIntegrations } from './sections/shift/ShiftIntegrations'
import { ShiftClose } from './sections/shift/ShiftClose'

export default function App() {
  return (
    <div className="app">
      <div className="shift-bg" aria-hidden />
      <div className="content">
        <Header />
        <main>
          <Hero />
          <ShiftMarquee />
          <ShiftPillarsFive />
          <ShiftDeepDive />
          <ShiftShipCards />
          <Story />
          <ShiftFoundation />
          <Builds />
          <ShiftAdvantage />
          <ShiftIntegrations />
          <ShiftClose />
        </main>
        <Footer />
      </div>
    </div>
  )
}
