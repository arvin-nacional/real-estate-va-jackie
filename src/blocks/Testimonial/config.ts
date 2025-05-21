import type { Block } from 'payload'

export const Testimonial: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      options: [
        {
          label: 'Colored',
          value: 'colored',
        },
        {
          label: 'White',
          value: 'white',
        },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Our Services',
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
      defaultValue: 'Our Services',
    },
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        {
          name: 'quote',
          type: 'text',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
