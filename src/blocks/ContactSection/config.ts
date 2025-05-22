import type { Block } from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  interfaceName: 'ContactSectionBlock',
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
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
          required: true,
          defaultValue: 'contact@realestateVA.com',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          required: true,
          defaultValue: '(555) 123-4567',
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Business Hours',
          required: true,
          defaultValue: 'Monday - Friday: 9am - 5pm EST',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
          required: true,
          defaultValue: 'Virtual services available nationwide',
        },
      ],
    },
    {
      name: 'consultation',
      type: 'group',
      label: 'Consultation Section',
      fields: [
        {
          name: 'consultationTitle',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Schedule a Consultation',
        },
        {
          name: 'consultationDescription',
          type: 'textarea',
          label: 'Description',
          required: true,
          defaultValue: 'Book a free 30-minute consultation to discuss your needs and how I can help your real estate business.',
        },
        {
          name: 'calendlyUrl',
          type: 'text',
          label: 'Calendly URL',
          required: true,
          defaultValue: 'https://calendly.com',
        },
        {
          name: 'calendlyButtonText',
          type: 'text',
          label: 'Button Text',
          required: true,
          defaultValue: 'Book a Time Slot',
        },
      ],
    },
    {
      name: 'social',
      type: 'group',
      label: 'Social Media Section',
      fields: [
        {
          name: 'socialTitle',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Follow Me',
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          minRows: 0,
          maxRows: 6,
          fields: [
            {
              name: 'platform',
              type: 'text',
              label: 'Platform Name',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Profile URL',
              required: true,
            },
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              required: true,
              options: [
                {
                  label: 'LinkedIn',
                  value: 'linkedin',
                },
                {
                  label: 'Instagram',
                  value: 'instagram',
                },
                {
                  label: 'Twitter',
                  value: 'twitter',
                },
                {
                  label: 'Facebook',
                  value: 'facebook',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'formSection',
      type: 'group',
      label: 'Form Section',
      fields: [
        {
          name: 'formTitle',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Send a Message',
        },
        {
          name: 'formDescription',
          type: 'text',
          label: 'Description',
          required: true,
          defaultValue: 'Fill out the form below and I\'ll get back to you shortly.',
        },
        {
          name: 'form',
          type: 'relationship',
          label: 'Select Form',
          required: true,
          relationTo: 'forms',
        },
      ],
    },
  ],
}
