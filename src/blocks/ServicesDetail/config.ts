import type { Block } from 'payload'

export const ServicesDetail: Block = {
  slug: 'servicesDetail',
  interfaceName: 'ServicesDetailBlock',
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
      name: 'serviceCategories',
      type: 'array',
      label: 'Service Categories',
      required: true,
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Add categories of services (e.g., Core Services, Marketing Services)',
      },
      defaultValue: [
        {
          title: 'Core Services',
          services: [
            {
              title: 'Listing Management',
              features: [
                { feature: 'MLS listing creation and updates' },
                { feature: 'Property description writing' },
                { feature: 'Listing syndication management' },
                { feature: 'Listing performance tracking' },
              ],
            },
            {
              title: 'Transaction Coordination',
              features: [
                { feature: 'Document preparation and management' },
                { feature: 'Timeline and deadline tracking' },
                { feature: 'Coordination with all parties' },
                { feature: 'Closing preparation' },
              ],
            },
            {
              title: 'Client Communication',
              features: [
                { feature: 'Email and phone management' },
                { feature: 'Appointment scheduling' },
                { feature: 'Client follow-up systems' },
                { feature: 'Client gift coordination' },
              ],
            },
          ],
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Category Title',
          required: true,
        },
        {
          name: 'services',
          type: 'array',
          label: 'Services in this Category',
          required: true,
          minRows: 1,
          maxRows: 6,
          admin: {
            description: 'Add services that belong to this category',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Service Title',
              required: true,
            },
            {
              name: 'features',
              type: 'array',
              label: 'Service Features',
              required: true,
              minRows: 1,
              maxRows: 6,
              admin: {
                description: 'Add features or benefits of this service',
              },
              fields: [
                {
                  name: 'feature',
                  type: 'text',
                  label: 'Feature Description',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
