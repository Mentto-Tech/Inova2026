import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('scroll-hidden')
          entry.target.classList.add('scroll-visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    element.classList.add('scroll-hidden')
    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return ref
}

export default useScrollAnimation
