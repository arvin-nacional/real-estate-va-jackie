import type { Block } from 'payload'

export const GlowServices: Block = {
  slug: 'glowServices',
  interfaceName: 'GlowServicesBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Our Services',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      defaultValue: 'We offer a comprehensive range of virtual assistance services to help you grow.',
    },
    {
      name: 'enableGlow',
      type: 'checkbox',
      label: 'Enable Glow Effect',
      defaultValue: true,
      admin: {
        description: 'Enable the interactive glowing border effect on service cards',
      },
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      admin: {
        description: 'Add services to display in the grid',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Service Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Service Description',
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          defaultValue: 'clipboard',
          label: 'Service Icon',
          admin: {
            description: 'Select an icon for this service',
          },
          options: [
            {
              label: 'Clipboard Check',
              value: 'clipboard',
            },
            {
              label: 'Pie Chart',
              value: 'chart',
            },
            {
              label: 'Message Square',
              value: 'message',
            },
            {
              label: 'Mail Check',
              value: 'mail',
            },
            {
              label: 'File Text',
              value: 'file',
            },
            {
              label: 'Calendar',
              value: 'calendar',
            },
          ],
        },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'View All Services',
      admin: {
        description: 'Text for the call-to-action button (leave empty to hide)',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link',
      defaultValue: '/services',
      admin: {
        description: 'URL for the call-to-action button',
      },
    },
  ],
}
