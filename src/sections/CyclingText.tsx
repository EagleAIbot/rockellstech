import { useEffect, useState } from 'react'

const WORDS = ['Ship', 'Scale', 'Run', 'Deliver']

export function CyclingText() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing')

  useEffect(() => {
    const word = WORDS[wordIdx]
    let t: ReturnType<typeof setTimeout>
    if (phase === 'typing') {
      if (displayed.length < word.length) {
        t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 72)
      } else {
        t = setTimeout(() => setPhase('deleting'), 1600)
      }
    } else if (displayed.length > 0) {
      t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 42)
    } else {
      setWordIdx((i) => (i + 1) % WORDS.length)
      setPhase('typing')
    }
    return () => clearTimeout(t)
  }, [displayed, phase, wordIdx])

  return (
    <span className="rt-cycle-word" aria-live="polite">
      {displayed}
      <span className="rt-type-cursor" aria-hidden>
        |
      </span>
    </span>
  )
}
