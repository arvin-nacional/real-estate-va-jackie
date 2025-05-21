'use client'

import React, { HTMLAttributes, ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface AnimationWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  threshold?: number
  distance?: number
  className?: string
  rootMargin?: string
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  distance = 50,
  className = '',
  ...props
}) => {
  const { ref, style } = useScrollAnimation({
    direction,
    delay,
    threshold,
    distance,
  })

  return (
    <div
      // @ts-ignore - adding ref to div
      ref={ref}
      className={className}
      style={{ ...style, ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimationWrapper
