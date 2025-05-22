'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'

import { Media } from '../Media'
import { Media as MediaPayload } from '@/payload-types'

export interface Testimonial {
  quote: string
  author: string
  title: string
  image?: string | MediaPayload | null
  id?: string | null
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  // Declare all hooks at the top level
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Handle navigation
  const goToNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === (testimonials?.length ?? 1) - 1 ? 0 : prevIndex + 1,
    )
  }

  const goToPrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (testimonials?.length ?? 1) - 1 : prevIndex - 1,
    )
  }

  // Auto-advance effect
  useEffect(() => {
    if (!testimonials || testimonials.length === 0 || !autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials])

  // Handle empty testimonials after hooks are defined
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  // Get the current testimonial
  const activeTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-[600px] mx-auto my-12">
      <Card className="border bg-background/50 shadow">
        <CardContent className="p-8 pb-12">
          <div className="flex flex-col items-center text-center">
            <Quote className="h-12 w-12 text-primary/40 mb-6" />

            <div className="w-full mb-8 flex-grow">
              <p className="text-lg italic text-muted-foreground py-4">
                &quot;{activeTestimonial?.quote}&quot;
              </p>
            </div>

            <div className="w-full flex flex-col items-center ">
              {activeTestimonial?.image &&
                typeof activeTestimonial.image !== 'string' &&
                'url' in activeTestimonial.image && (
                  <div className="relative h-16 w-16 mx-auto mb-4 overflow-hidden rounded-full">
                    <Media
                      resource={activeTestimonial.image}
                      alt={activeTestimonial.author || ''}
                      className="h-full w-full object-fill"
                    />
                  </div>
                )}
              <h4 className="font-bold">{activeTestimonial?.author}</h4>
              <p className="text-sm text-muted-foreground">{activeTestimonial?.title}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center space-x-1">
            {testimonials.map((_, idx: number) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-4 bg-primary' : 'w-2 bg-muted'}`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(idx)
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={goToNext} aria-label="Next testimonial">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
