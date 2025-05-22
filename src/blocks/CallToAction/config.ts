import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      required: true,
      defaultValue: 'colored',
      options: [
        {
          label: 'Colored Background',
          value: 'colored',
        },
        {
          label: 'White Background',
          value: 'white',
        },
      ],
      admin: {
        description: 'Choose the background style for this call to action section',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Ready to Grow Your Business?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Let me handle the administrative tasks while you focus on closing deals and building relationships.',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 1,
        label: 'Button',
        required: true,
      },
    }),
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
