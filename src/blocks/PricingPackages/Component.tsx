'use client'

import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import AnimationWrapper from '@/components/AnimationWrapper'
// Define interfaces for our component
interface PackageFeature {
  feature: string
}

interface PricingPackage {
  title: string
  description: string
  price: string
  interval: string
  features: string[] | PackageFeature[]
  isPopular: boolean
}

export interface PricingPackagesBlockProps {
  title?: string
  packages?: PricingPackage[]
  backgroundType?: 'white' | 'colored'
  buttonLink?: string
  buttonText?: string
}

// Simple utility function to conditionally join class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const PricingPackagesBlock: React.FC<PricingPackagesBlockProps> = ({
  title = 'Service Packages',
  packages = [],
  backgroundType = 'colored',
  buttonLink = '/contact',
  buttonText = 'Get Started',
}) => {
  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-gray-50'

  // Default packages if none are provided
  const defaultPackages = [
    {
      title: 'Starter Package',
      description: 'Perfect for individual agents',
      price: '$499',
      interval: '/month',
      features: [
        '10 hours per week',
        'Listing management',
        'Email & calendar management',
        'Basic social media support',
      ],
      isPopular: false,
    },
    {
      title: 'Growth Package',
      description: 'For busy agents and small teams',
      price: '$899',
      interval: '/month',
      features: [
        '20 hours per week',
        'All Starter Package services',
        'Transaction coordination',
        'Full social media management',
        'Email marketing campaigns',
      ],
      isPopular: true,
    },
    {
      title: 'Premium Package',
      description: 'For established teams and brokerages',
      price: '$1,499',
      interval: '/month',
      features: [
        '40 hours per week',
        'All Growth Package services',
        'Advanced market research',
        'Content creation & blog management',
        'Team coordination support',
      ],
      isPopular: false,
    },
  ]

  // Use provided packages or default ones
  const packagesToRender = packages && packages.length > 0 ? packages : defaultPackages

  return (
    <section className={`w-full py-6 md:py-12 lg:py-24 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <AnimationWrapper
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
          direction="fade"
          distance={20}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-400 mb-4">
            {title}
          </h2>
        </AnimationWrapper>

        <div className="mx-auto max-w-5xl space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {packagesToRender.map((pkg: PricingPackage, index: number) => (
              <AnimationWrapper
                key={`package-${index}`}
                direction="up"
                delay={0.1 * (index + 1)}
                className="h-full"
              >
                <Card className={cn('flex flex-col h-full', pkg.isPopular ? 'border-primary' : '')}>
                  <CardHeader
                    className={cn(
                      pkg.isPopular ? 'bg-primary text-primary-foreground rounded-t-lg' : '',
                    )}
                  >
                    {pkg.isPopular && (
                      <div className="text-sm font-medium uppercase text-center mb-2">
                        Most Popular
                      </div>
                    )}
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription
                      className={cn(pkg.isPopular ? 'text-primary-foreground/80' : '')}
                    >
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-3xl font-bold mb-4">
                      {pkg.price}
                      <span className="text-base font-normal text-muted-foreground">
                        {pkg.interval}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map(
                        (feature: string | PackageFeature, featureIndex: number) => (
                          <li
                            key={`feature-${index}-${featureIndex}`}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{typeof feature === 'string' ? feature : feature.feature}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={buttonLink}>{buttonText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPackagesBlock
