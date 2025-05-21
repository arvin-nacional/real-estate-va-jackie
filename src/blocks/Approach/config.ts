import type { Block } from 'payload'

export const Approach: Block = {
  slug: 'approach',
  interfaceName: 'ApproachBlock',
  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      required: true,
      defaultValue: 'white',
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
      defaultValue: 'My Approach',
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
      defaultValue: 'How I work with clients to ensure their success.',
    },
    {
      name: 'steps',
      type: 'array',
      admin: {
        description: 'Add steps that outline your approach to working with clients',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'The title of this step (e.g., "Understand", "Customize", "Execute")',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'A brief description of this step',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Approach Sections',
    singular: 'Approach Section',
  },
}
