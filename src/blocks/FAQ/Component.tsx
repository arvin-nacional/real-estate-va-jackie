'use client'

import React from 'react'
import AnimationWrapper from '@/components/AnimationWrapper'

interface FAQItem {
  question: string
  answer: string
}

interface FAQBlockProps {
  heading?: string
  subheading?: string
  faqs?: FAQItem[]
  backgroundType?: 'white' | 'gray' | 'accent'
}

export const FAQBlock: React.FC<FAQBlockProps> = ({
  heading,
  subheading,
  faqs,
  backgroundType,
}) => {
  // Determine background class based on backgroundType
  const backgroundClass =
    backgroundType === 'white'
      ? 'bg-white'
      : backgroundType === 'gray'
        ? 'bg-muted/40'
        : backgroundType === 'accent'
          ? 'bg-primary/10'
          : 'bg-muted/40'

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <AnimationWrapper
          className="flex flex-col items-center justify-center space-y-4 text-center"
          direction="up"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{heading}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">{subheading}</p>
          </div>
        </AnimationWrapper>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          {faqs &&
            faqs.map((faq: FAQItem, index: number) => (
              <AnimationWrapper
                key={`faq-${index}`}
                className="space-y-2"
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AnimationWrapper>
            ))}
        </div>
      </div>
    </section>
  )
}
