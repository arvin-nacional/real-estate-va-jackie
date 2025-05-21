import type { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      required: true,
      defaultValue: 'gray',
      options: [
        {
          label: 'White Background',
          value: 'white',
        },
        {
          label: 'Gray Background',
          value: 'gray',
        },
        {
          label: 'Accent Background',
          value: 'accent',
        },
      ],
      admin: {
        description: 'Choose the background color for this section',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
      defaultValue: 'Common questions about working with a real estate virtual assistant.',
    },
    {
      name: 'faqs',
      type: 'array',
      admin: {
        description: 'Add frequently asked questions and their answers',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          admin: {
            description: 'The question being asked',
          },
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          admin: {
            description: 'The answer to the question',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'FAQ Sections',
    singular: 'FAQ Section',
  },
}
