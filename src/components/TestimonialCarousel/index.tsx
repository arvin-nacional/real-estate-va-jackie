'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { motion, AnimatePresence } from 'framer-motion'

export interface Testimonial {
  quote: string
  author: string
  title: string
  image?: string | Media | null
  id?: string | null
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  // Return empty component if no testimonials are provided
  if (!testimonials || testimonials.length === 0) {
    return null
  }
  const [[page, direction], setPage] = useState([0, 0])
  const [autoplay, setAutoplay] = useState(true)

  // We only display one testimonial at a time in the slider
  const activeIndex = page % testimonials.length

  // Handle wraparound for infinite carousel effect
  const activeTestimonial = testimonials[activeIndex]!

  const paginate = useCallback(
    (newDirection: number) => {
      setAutoplay(false)
      setPage(([prevPage]) => {
        let nextPage
        if (newDirection > 0) {
          // Next - going right
          nextPage = prevPage + 1
        } else {
          // Prev - going left
          nextPage = prevPage - 1
        }

        // Handle wraparound for infinite carousel
        if (nextPage < 0) nextPage = testimonials.length - 1
        if (nextPage >= testimonials.length) nextPage = 0

        return [nextPage, newDirection]
      })
    },
    [testimonials.length],
  )

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      paginate(1) // Auto advance forward
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, paginate])

  // For large screens, show adjacent testimonials for context
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  // Slider variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    }),
  }

  // Generate dot indicators for the carousel
  const dots = testimonials.map((_, index) => ({
    index,
    isActive: index === activeIndex,
  }))

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Quote className="h-12 w-12 text-primary/40 mx-auto mb-4" />
      </div>

      <div className="relative h-[450px] w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          >
            <div className="flex justify-center">
              <Card className="w-full max-w-2xl mx-auto bg-slate-50 mb-12">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="relative w-24 h-24 mb-2">
                    <Image
                      src={
                        typeof activeTestimonial.image === 'string'
                          ? activeTestimonial.image
                          : activeTestimonial.image?.url || '/placeholder.svg'
                      }
                      alt={activeTestimonial.author}
                      fill
                      className="rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                  <p className="text-xl italic leading-relaxed">{activeTestimonial.quote}</p>
                  <div className="pt-4 border-t border-border w-16 mx-auto"></div>
                  <div>
                    <h3 className="font-semibold text-lg">{activeTestimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">{activeTestimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left/Right Controls for large screens */}
        <motion.div
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </motion.div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {dots.map((dot) => (
          <Button
            key={dot.index}
            variant="ghost"
            size="icon"
            className={`h-3 w-3 rounded-full p-0 ${dot.isActive ? 'bg-primary' : 'bg-muted'}`}
            onClick={() => {
              const newDirection = dot.index > activeIndex ? 1 : -1
              setPage([dot.index, newDirection])
              setAutoplay(false)
            }}
          >
            <span className="sr-only">Go to slide {dot.index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
