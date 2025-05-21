'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'
import { Media } from '@/components/Media'
import AnimationWrapper from '@/components/AnimationWrapper'

// Define the benefit item interface
interface BenefitItem {
  title: string
  description: string
}

// Define the WhyChooseMeBlock interface
interface WhyChooseMeBlockType {
  heading?: string
  subheading?: string
  image?: any // Media type
  benefits?: BenefitItem[]
  backgroundType?: 'white' | 'gray' | 'accent'
  imagePosition?: 'left' | 'right'
}

export const WhyChooseMeBlock: React.FC<WhyChooseMeBlockType> = ({
  heading,
  subheading,
  image,
  benefits = [],
  backgroundType,
  imagePosition = 'right',
}) => {
  // Determine background class based on backgroundType
  const backgroundClass = 
    backgroundType === 'white' ? 'bg-white' : 
    backgroundType === 'gray' ? 'bg-gray-50' :
    backgroundType === 'accent' ? 'bg-primary/10' : 'bg-white'

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
          {subheading || 'With specialized experience in real estate operations, I deliver exceptional support tailored to your business needs.'}
        </p>
      </div>
      <ul className="grid gap-4">
        {benefits && benefits.length > 0 ? (
                benefits.map((benefit: BenefitItem, index: number) => (
                  <AnimationWrapper 
                    key={`benefit-${index}`} 
                    direction="up" 
                    delay={0.1 * (index + 1)}
                  >
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  </AnimationWrapper>
                ))
              ) : (
                <>
                  <AnimationWrapper direction="up" delay={0.1}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Real Estate Expertise</h3>
                        <p className="text-sm text-muted-foreground">
                          Specialized knowledge of the real estate industry and its unique requirements.
                        </p>
                      </div>
                    </li>
                  </AnimationWrapper>
                  <AnimationWrapper direction="up" delay={0.2}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Reliable Support</h3>
                        <p className="text-sm text-muted-foreground">
                          Consistent, dependable assistance that you can count on, day in and day out.
                        </p>
                      </div>
                    </li>
                  </AnimationWrapper>
                  <AnimationWrapper direction="up" delay={0.3}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Time-Saving Solutions</h3>
                        <p className="text-sm text-muted-foreground">
                          Efficient processes that free up your time to focus on client relationships and closing deals.
                        </p>
                      </div>
                    </li>
                  </AnimationWrapper>
                  <AnimationWrapper direction="up" delay={0.4}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Customized Service</h3>
                        <p className="text-sm text-muted-foreground">
                          Tailored support packages designed to meet your specific business needs and goals.
                        </p>
                      </div>
                    </li>
                  </AnimationWrapper>
                </>
              )}
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
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
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
