import './App.css'
import { lazy, Suspense } from 'react'
import { Header } from './components/Header'

const HeroBackdrop = lazy(async () => {
  const m = await import('./components/HeroBackdrop')
  return { default: m.HeroBackdrop }
})
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Builds } from './sections/Builds'
import { GitHubCTA } from './sections/GitHubCTA'

export default function App() {
  return (
    <div className="app">
      <div className="mesh" aria-hidden />
      <div className="grid-floor" aria-hidden />
      <Suspense fallback={null}>
        <HeroBackdrop />
      </Suspense>
      <div className="content">
        <Header />
        <main>
          <Hero />
          <Story />
          <Builds />
          <GitHubCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
