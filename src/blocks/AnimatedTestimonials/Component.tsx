'use client'

import React, { useEffect, useState } from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'motion/react'
import type { AnimatedTestimonialsBlock as AnimatedTestimonialsBlockType } from '@/payload-types'
import { Media } from '@/components/Media'

export const AnimatedTestimonialsBlock: React.FC<AnimatedTestimonialsBlockType> = ({
  testimonials,
  heading,
  subheading,
  autoplay = true,
  backgroundType = 'white',
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    if (testimonials && testimonials.length) {
      setActive((prev) => (prev + 1) % testimonials.length)
    }
  }

  const handlePrev = () => {
    if (testimonials && testimonials.length) {
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay && testimonials && testimonials.length > 1) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, testimonials])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  // Exit early if no testimonials
  if (!testimonials || !testimonials.length) {
    return null
  }

  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        {(heading || subheading) && (
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            {heading && (
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="mx-auto max-w-sm px-4 py-8 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
          <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={`testimonial-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      {testimonial.image && (
                        <div className="h-full w-full rounded-3xl overflow-hidden">
                          <Media
                            resource={testimonial.image}
                            className="h-full w-full object-cover object-center"
                            imgClassName="h-full w-full object-cover object-center"
                            size="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }}
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {testimonials[active]?.name || ''}
                </h3>
                <p className="text-sm text-gray-500">{testimonials[active]?.role || ''}</p>
                <motion.p className="mt-8 text-lg text-gray-500">
                  {testimonials[active]?.quote?.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: 'blur(10px)',
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: 'blur(0px)',
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <IconArrowLeft className="h-5 w-5 text-gray-800 transition-transform duration-300 group-hover/button:rotate-12" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <IconArrowRight className="h-5 w-5 text-gray-800 transition-transform duration-300 group-hover/button:-rotate-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
