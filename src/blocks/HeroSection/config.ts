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
        description:
          'Optional. If provided, this image will be used as the background for the hero section.',
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
      defaultValue: 'Your Dedicated Real Estate Virtual Assistant',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Streamline your real estate business with professional virtual assistance. Save time, reduce stress, and focus on growing your business.',
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
