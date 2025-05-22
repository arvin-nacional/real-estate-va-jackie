'use client'

import React from 'react'
import AnimationWrapper from '@/components/AnimationWrapper'

import { ApproachBlock as ApproachBlockType } from '@/payload-types'

export const ApproachBlock: React.FC<ApproachBlockType> = ({
  heading,
  subheading,
  steps,
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
          : 'bg-white'

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

        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {steps &&
            steps.map((step, index) => (
              <AnimationWrapper
                key={`step-${index}`}
                className="flex flex-col items-center space-y-2 rounded-3xl border border-gray-200 p-6 text-center hover:shadow-md transition-all duration-300"
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </AnimationWrapper>
            ))}
        </div>
      </div>
    </section>
  )
}
