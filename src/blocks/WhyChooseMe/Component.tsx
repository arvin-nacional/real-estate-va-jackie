'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'
import { Media } from '@/components/Media'
import AnimationWrapper from '@/components/AnimationWrapper'
import type { WhyChooseMeBlock as WhyChooseMeBlockType } from '@/payload-types'

// Define the benefit item interface
interface BenefitItem {
  title: string
  description: string
}

export const WhyChooseMeBlock: React.FC<WhyChooseMeBlockType> = ({
  heading,
  subheading,
  image,
  backgroundImage,
  benefits = [],
  backgroundType,
  imagePosition = 'right',
}) => {
  // Determine background class based on backgroundType
  const backgroundClass =
    backgroundType === 'white'
      ? 'bg-white'
      : backgroundType === 'gray'
        ? 'bg-gray-50'
        : backgroundType === 'accent'
          ? 'bg-primary/10'
          : 'bg-white'

  // Create content section and image section as separate elements
  const contentSection = (
    <AnimationWrapper
      className="flex flex-col justify-center space-y-4"
      direction={imagePosition === 'right' ? 'left' : 'right'}
      distance={30}
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {heading || 'Why Choose Me'}
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          {subheading ||
            'With specialized experience in real estate operations, I deliver exceptional support tailored to your business needs.'}
        </p>
      </div>
      <ul className="grid gap-4">
        {benefits &&
          benefits.map((benefit: BenefitItem, index: number) => (
            <AnimationWrapper key={`benefit-${index}`} direction="up" delay={0.1 * (index + 1)}>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </li>
            </AnimationWrapper>
          ))}
      </ul>
    </AnimationWrapper>
  )

  const imageSection = (
    <AnimationWrapper
      className="mx-auto w-full max-w-[500px] lg:max-w-none"
      direction={imagePosition === 'right' ? 'right' : 'left'}
      distance={30}
      delay={0.2}
    >
      {image ? (
        <Media
          resource={image}
          className="w-full rounded-xl object-cover"
          imgClassName="w-full h-[550px] rounded-xl object-cover"
          priority
        />
      ) : (
        <div className="w-full h-[550px] rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
          Real Estate Professional Image
        </div>
      )}
    </AnimationWrapper>
  )

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass} relative`}>
      {/* Background image using Media component */}
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden z-0">
          <Media resource={backgroundImage} className="w-full h-full object-cover" size="100vw" />
          <div className="absolute inset-0 bg-current opacity-50 mix-blend-overlay" />
        </div>
      )}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
