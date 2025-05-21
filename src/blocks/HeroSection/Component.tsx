'use client'

import React from 'react'
import type { HeroSectionBlock as HeroSectionBlockType } from '@/payload-types'

import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import AnimationWrapper from '@/components/AnimationWrapper'

export const HeroSectionBlock: React.FC<HeroSectionBlockType> = ({
  heading,
  description,
  links,
  image,
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <AnimationWrapper
            className="flex flex-col justify-center space-y-4"
            direction="left"
            distance={30}
          >
            <div className="space-y-2">
              <AnimationWrapper direction="fade" delay={0.1}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-800">
                  {heading}
                </h1>
              </AnimationWrapper>
              <AnimationWrapper direction="fade" delay={0.3}>
                <p className="max-w-[600px] text-gray-600 md:text-xl">{description}</p>
              </AnimationWrapper>
            </div>
            <AnimationWrapper direction="up" delay={0.5}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {Array.isArray(links) && links.length > 0 && (
                  <ul className="flex md:justify-start gap-4">
                    {links.map(({ link }, i) => {
                      return (
                        <li key={i}>
                          <CMSLink {...link} />
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </AnimationWrapper>
          </AnimationWrapper>
          <AnimationWrapper
            className="relative h-[550px] md:h-[550px] rounded-lg overflow-hidden shadow-xl"
            direction="right"
            distance={30}
            delay={0.2}
          >
            {image && typeof image === 'object' && image.url && (
              <Media
                resource={image}
                className="w-full rounded-xl object-cover"
                imgClassName="w-full h-[550px] rounded-xl object-cover"
                priority
              />
            )}
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
