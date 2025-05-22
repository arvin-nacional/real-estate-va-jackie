'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { ServicesPreviewBlock as ServicesPreviewBlockType } from '@/payload-types'
import { ServiceCard } from '@/components/ServiceCard'
import AnimationWrapper from '@/components/AnimationWrapper'

export const ServicesPreviewBlock: React.FC<ServicesPreviewBlockType> = ({
  heading,
  subheading,
  services = [],
  buttonText,
  buttonLink,
  backgroundType,
}) => {
  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-gray-50'

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <AnimationWrapper
          className="flex flex-col items-center justify-center space-y-4 text-center"
          direction="fade"
          distance={20}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-400">
              {heading || 'Our Services'}
            </h2>
            <AnimationWrapper delay={0.2} direction="fade">
              <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                {subheading ||
                  'From custom bouquets to decorative pieces, we offer a variety of crochet flower services.'}
              </p>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {services && services.length > 0 ? (
            services.map(
              (service: { title: string; description: string; icon: string }, index: number) => (
                <AnimationWrapper
                  key={`service-${index}`}
                  direction="up"
                  delay={0.1 * (index + 1)}
                  className="h-full"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </AnimationWrapper>
              ),
            )
          ) : (
            <>
              <AnimationWrapper direction="up" delay={0.1} className="h-full">
                <ServiceCard
                  title="Custom Bouquets"
                  description="Handcrafted bouquets for weddings, anniversaries, or any special occasion."
                  icon="Flower"
                />
              </AnimationWrapper>

              <AnimationWrapper direction="up" delay={0.2} className="h-full">
                <ServiceCard
                  title="Home Decor"
                  description="Beautiful crochet flowers to brighten up your living space."
                  icon="Home"
                />
              </AnimationWrapper>

              <AnimationWrapper direction="up" delay={0.3} className="h-full">
                <ServiceCard
                  title="Workshops"
                  description="Learn to crochet your own flowers with our beginner-friendly workshops."
                  icon="BookOpen"
                />
              </AnimationWrapper>
            </>
          )}
        </div>
        <AnimationWrapper className="flex justify-center mt-8" direction="up" delay={0.4}>
          <Link href={buttonLink || '/services'}>
            <Button
              variant="outline"
              className="border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-all duration-300 hover:scale-105 hover:shadow-sm"
            >
              {buttonText || 'View All Services'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </AnimationWrapper>
      </div>
    </section>
  )
}
