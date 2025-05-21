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
      defaultValue: 'Ready to Add Some Floral Beauty?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Contact us today to discuss your custom crochet flower needs.',
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
