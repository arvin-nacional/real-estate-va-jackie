import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const CallToActionBlock: React.FC<CTABlockProps> = (props) => {
  const { heading, description, links } = props
  // Handle the backgroundType and backgroundImage fields that will be available after PayloadCMS types are regenerated
  // @ts-ignore - Properties will exist once PayloadCMS regenerates types
  const backgroundType = props.backgroundType || 'colored'
  // @ts-ignore - Properties will exist once PayloadCMS regenerates types
  const backgroundImage = props.backgroundImage

  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-gray-50'

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 relative ${backgroundClass}`}>
      {/* Background image overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden z-0">
          <Media resource={backgroundImage} className="w-full h-full object-cover" size="100vw" />
          <div className="absolute inset-0 bg-current opacity-90 mix-blend-overlay" />
        </div>
      )}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-400">
              {heading || 'Ready to Add Some Floral Beauty?'}
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              {description || 'Contact us today to discuss your custom crochet flower needs.'}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            {links && links[0] ? (
              <CMSLink {...links[0].link}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </CMSLink>
            ) : (
              <Link href="/contact">
                <Button className="bg-gray-600 hover:bg-gray-700">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
