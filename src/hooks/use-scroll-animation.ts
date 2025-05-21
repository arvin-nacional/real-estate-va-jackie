'use client'

import { useEffect, useRef, useState } from 'react'

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade'

interface ScrollAnimationOptions {
  threshold?: number
  direction?: AnimationDirection
  delay?: number
  distance?: number
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    direction = 'up',
    delay = 0,
    distance = 50,
  } = options

  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  // Define animation properties based on direction
  const getAnimationStyles = () => {
    if (!isVisible) {
      let transform = ''
      const opacity = 0
      
      switch (direction) {
        case 'up':
          transform = `translateY(${distance}px)`
          break
        case 'down':
          transform = `translateY(-${distance}px)`
          break
        case 'left':
          transform = `translateX(${distance}px)`
          break
        case 'right':
          transform = `translateX(-${distance}px)`
          break
        case 'fade':
          transform = 'none'
          break
      }

      return {
        opacity,
        transform,
        transition: 'none',
      }
    }

    return {
      opacity: 1,
      transform: 'none',
      transition: `opacity 0.5s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
    }
  }

  return { ref, isVisible, style: getAnimationStyles() }
}
