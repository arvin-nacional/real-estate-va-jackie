import { cn } from '@/utilities/ui'
import React from 'react'
import AnimationWrapper from '@/components/AnimationWrapper'
import { Media } from '@/components/Media'

import { StoryBlock as StoryBLockType } from '@/payload-types'
import RichText from '@/components/RichText'

export const StoryBLock: React.FC<StoryBLockType> = ({
  backgroundType,
  heading,
  subheading,
  image,
  richText,
  imagePosition,
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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{heading}</h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">{subheading}</p>
        {richText && <RichText data={richText} enableGutter={false} />}
      </div>
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
