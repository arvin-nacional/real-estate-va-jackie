'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'
import AnimationWrapper from '@/components/AnimationWrapper'

import { ExpertiseBlock as ExpertiseBlockType } from '@/payload-types'

export const ExpertiseBlock: React.FC<ExpertiseBlockType> = ({
  heading,
  subheading,
  expertiseCategories,
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

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {expertiseCategories &&
            expertiseCategories.map((category, index) => (
              <AnimationWrapper
                key={`category-${index}`}
                className="flex flex-col space-y-4"
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills &&
                    category.skills.map((skill, skillIndex) => (
                      <AnimationWrapper
                        key={`skill-${index}-${skillIndex}`}
                        direction="left"
                        delay={0.05 * (skillIndex + 1)}
                      >
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{skill.skill}</span>
                        </li>
                      </AnimationWrapper>
                    ))}
                </ul>
              </AnimationWrapper>
            ))}
        </div>
      </div>
    </section>
  )
}
