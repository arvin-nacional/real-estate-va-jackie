'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import AnimationWrapper from '@/components/AnimationWrapper'

import { ServicesDetailBlock as ServicesDetailBlockProps } from '@/payload-types'

export const ServicesDetailBlock: React.FC<ServicesDetailBlockProps> = ({
  serviceCategories,
  backgroundType,
}) => {
  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-gray-50'

  return (
    <section className={`w-full py-6 md:py-12 lg:py-24 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-8">
          {serviceCategories?.map((category, categoryIndex) => (
            <AnimationWrapper
              key={`category-${categoryIndex}`}
              className="space-y-4"
              direction="fade"
              delay={0.1 * categoryIndex}
            >
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, serviceIndex) => (
                  <AnimationWrapper
                    key={`service-${categoryIndex}-${serviceIndex}`}
                    direction="up"
                    delay={0.1 * (categoryIndex + serviceIndex + 1)}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((featureObj, featureIndex) => (
                            <li
                              key={`feature-${categoryIndex}-${serviceIndex}-${featureIndex}`}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{featureObj.feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimationWrapper>
                ))}
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesDetailBlock
