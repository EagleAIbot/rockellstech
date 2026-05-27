import { lazy, Suspense } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { StackStrip } from './sections/StackStrip'
import { ProjectsCarousel } from './sections/ProjectsCarousel'
import { VideoBreak } from './sections/VideoBreak'
import { Philosophy } from './sections/Philosophy'
import { Specialisms } from './sections/Specialisms'
import { Meet } from './sections/Meet'
import { Credibility } from './sections/Credibility'
import { ContactStrip } from './sections/ContactStrip'

const ResumeDownload = lazy(() =>
  import('./sections/ResumeDownload').then((m) => ({ default: m.ResumeDownload })),
)
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="rt-app">
      <Header />
      <main className="rt-stack">
        <div className="rt-stack-card" style={{ zIndex: 1 }}>
          <Hero />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 2 }}>
          <StackStrip />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 3 }}>
          <ProjectsCarousel />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 4 }}>
          <VideoBreak />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 5 }}>
          <Philosophy />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 6 }}>
          <Specialisms />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 7 }}>
          <Meet />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 8 }}>
          <Credibility />
        </div>
        <div className="rt-stack-card" style={{ zIndex: 9 }}>
          <Suspense fallback={null}>
            <ResumeDownload />
          </Suspense>
        </div>
        <div className="rt-stack-card" style={{ zIndex: 10 }}>
          <ContactStrip />
        </div>
      </main>
      <Footer />
    </div>
  )
}
