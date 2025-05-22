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
  backgroundImage,
  backgroundOverlay = 'dark',
}) => {
  // Generate overlay class based on the selected overlay type
  // const getOverlayClass = () => {
  //   if (!backgroundImage || backgroundOverlay === 'none') return ''

  //   if (backgroundOverlay === 'light') {
  //     return 'after:absolute after:inset-0 after:bg-white/70 after:z-0'
  //   }

  //   return 'after:absolute after:inset-0 after:bg-black/50 after:z-0'
  // }

  const backgroundStyle = backgroundImage
    ? ({
        backgroundImage: `url(${typeof backgroundImage === 'object' && 'url' in backgroundImage ? backgroundImage.url : ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      } as React.CSSProperties)
    : {}

  return (
    <section
      className={`w-full max-sm:py-24 py-12 md:py-24 -mt-[50px] lg:h-screen relative`}
      style={backgroundStyle}
    >
      <div className="container flex justify-center items-center h-full relative z-10">
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
