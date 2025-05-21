import React from 'react'
import type { SiteHeaderBlock as SiteHeaderBlockType } from '@/payload-types'

export const SiteHeaderBlock: React.FC<SiteHeaderBlockType> = (props) => {
  const { heading, description } = props

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">
              {heading}
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
