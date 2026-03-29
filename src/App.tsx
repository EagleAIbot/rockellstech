import './App.css'
import { Header } from './components/Header'
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
