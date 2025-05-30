import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ServicesPreviewBlock } from '@/blocks/ServicesPreview/Component'
import { HeroSectionBlock } from '@/blocks/HeroSection/Component'
import { WhyChooseMeBlock } from '@/blocks/WhyChooseMe/Component'
import { TestimonialBlock } from '@/blocks/Testimonial/Component'
import { SiteHeaderBlock } from '@/blocks/SiteHeader/Component'
import { StoryBLock } from '@/blocks/Story/Component'
import { ExpertiseBlock } from '@/blocks/Expertise/Component'
import { ApproachBlock } from '@/blocks/Approach/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { ServicesDetailBlock } from '@/blocks/ServicesDetail/Component'
import { PricingPackagesBlock } from '@/blocks/PricingPackages/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/Component'
import { AnimatedTestimonialsBlock } from '@/blocks/AnimatedTestimonials/Component'
import { GlowServicesBlock } from '@/blocks/GlowServices/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  servicesPreview: ServicesPreviewBlock,
  heroSection: HeroSectionBlock,
  whyChooseMe: WhyChooseMeBlock,
  testimonial: TestimonialBlock,
  siteHeader: SiteHeaderBlock,
  story: StoryBLock,
  expertise: ExpertiseBlock,
  approach: ApproachBlock,
  faq: FAQBlock,
  servicesDetail: ServicesDetailBlock,
  pricingPackages: PricingPackagesBlock,
  contactSection: ContactSectionBlock,
  animatedTestimonials: AnimatedTestimonialsBlock,
  glowServices: GlowServicesBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
