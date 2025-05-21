import type { Block } from 'payload'

export const WhyChooseMe: Block = {
  slug: 'whyChooseMe',
  interfaceName: 'WhyChooseMeBlock',
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
      defaultValue: 'Why Choose Me',
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
      defaultValue:
        'With specialized experience in real estate operations, I deliver exceptional support tailored to your business needs.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Select or upload an image of yourself or your work',
      },
    },
    {
      name: 'imagePosition',
      type: 'select',
      required: true,
      defaultValue: 'right',
      options: [
        {
          label: 'Right Side',
          value: 'right',
        },
        {
          label: 'Left Side',
          value: 'left',
        },
      ],
      admin: {
        description: 'Choose which side the image should appear on',
      },
    },
    {
      name: 'benefits',
      type: 'array',
      admin: {
        description: 'Add benefits that highlight why clients should choose you',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'The title of this benefit',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'A brief description of this benefit',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Why Choose Me Sections',
    singular: 'Why Choose Me Section',
  },
}
