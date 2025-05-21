import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'
export const HeroSection: Block = {
  slug: 'heroSection',
  interfaceName: 'HeroSectionBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'About Our Crochet Flowers',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Each crochet flower is handmade with care and attention to detail. We use only the finest materials to create beautiful, long-lasting pieces that bring joy to any space.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
        label: 'Button',
        required: true,
      },
    }),
  ],
}
