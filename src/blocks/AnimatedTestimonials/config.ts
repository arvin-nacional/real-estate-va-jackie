import type { Block } from 'payload'

export const AnimatedTestimonials: Block = {
  slug: 'animatedTestimonials',
  interfaceName: 'AnimatedTestimonialsBlock',
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
      ],
      admin: {
        description: 'Choose the background style for this testimonials section',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      admin: {
        description: 'Optional heading to display above the testimonials',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      admin: {
        description: 'Optional subheading to display below the heading',
      },
    },
    {
      name: 'autoplay',
      type: 'checkbox',
      label: 'Auto-advance testimonials',
      defaultValue: true,
      admin: {
        description: 'Enable to automatically cycle through testimonials every 5 seconds',
      },
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      admin: {
        description: 'Add testimonials to display in the carousel',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Name',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role or Title',
          admin: {
            description: 'E.g., "CEO at Company" or "Homeowner"',
          },
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Testimonial Quote',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Person Image',
          admin: {
            description: 'Upload an image of the person giving the testimonial',
          },
        },
      ],
    },
  ],
}
