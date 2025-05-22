import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'
export const HeroSection: Block = {
  slug: 'heroSection',
  interfaceName: 'HeroSectionBlock',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional. If provided, this image will be used as the background for the hero section.',
      },
    },
    {
      name: 'backgroundOverlay',
      type: 'select',
      label: 'Background Overlay',
      defaultValue: 'dark',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Dark',
          value: 'dark',
        },
      ],
      admin: {
        description: 'Choose an overlay for the background image to improve text readability.',
        condition: (data) => Boolean(data?.backgroundImage),
      },
    },
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
