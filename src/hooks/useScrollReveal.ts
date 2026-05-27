import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set('[data-reveal]', { opacity: 1, y: 0 })
      return
    }
    const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]')
    reveals.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      })
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, deps)
}
