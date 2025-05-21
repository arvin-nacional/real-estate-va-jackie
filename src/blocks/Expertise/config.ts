import type { Block } from 'payload'

export const Expertise: Block = {
  slug: 'expertise',
  interfaceName: 'ExpertiseBlock',
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
      defaultValue: 'My Expertise',
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
      defaultValue: 'Specialized skills tailored to the real estate industry.',
    },
    {
      name: 'expertiseCategories',
      type: 'array',
      admin: {
        description: 'Add categories of expertise with their respective skills',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'The title of this expertise category (e.g., "Industry Knowledge", "Technical Skills")',
          },
        },
        {
          name: 'skills',
          type: 'array',
          required: true,
          admin: {
            description: 'List of skills under this category',
          },
          fields: [
            {
              name: 'skill',
              type: 'text',
              required: true,
              admin: {
                description: 'A specific skill or capability',
              },
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Expertise Sections',
    singular: 'Expertise Section',
  },
}
