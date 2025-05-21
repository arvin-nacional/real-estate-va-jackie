import React from 'react'

import type { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import AnimationWrapper from '@/components/AnimationWrapper'

export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({
  backgroundType,
  heading,
  subheading,
  testimonials,
}) => {
  const backgroundClass = backgroundType === 'colored' ? 'bg-muted/40' : 'bg-white'
  return (
    <section className={`${backgroundClass} w-full py-12 md:py-24 lg:py-32`}>
      <div className="container px-4 md:px-6">
        <AnimationWrapper direction="up" delay={0.1} threshold={0.1}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-400">
                {heading}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">{subheading}</p>
            </div>
          </div>
        </AnimationWrapper>
        
        {testimonials && testimonials.length > 0 && (
          <AnimationWrapper direction="fade" delay={0.3} threshold={0.1}>
            <TestimonialCarousel testimonials={testimonials} />
          </AnimationWrapper>
        )}
      </div>
    </section>
  )
}
