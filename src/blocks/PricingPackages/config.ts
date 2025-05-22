import type { Block } from 'payload'

export const PricingPackages: Block = {
  slug: 'pricingPackages',
  interfaceName: 'PricingPackagesBlock',
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
      name: 'title',
      type: 'text',
      label: 'Block Title',
      required: true,
      defaultValue: 'Service Packages',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      required: true,
      defaultValue: 'Get Started',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link',
      required: true,
      defaultValue: '/contact',
    },
    {
      name: 'packages',
      type: 'array',
      label: 'Pricing Packages',
      required: true,
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Add your service packages with pricing details',
      },
      defaultValue: [
        {
          title: 'Starter Package',
          description: 'Perfect for individual agents',
          price: '$499',
          interval: '/month',
          features: [
            { feature: '10 hours per week' },
            { feature: 'Listing management' },
            { feature: 'Email & calendar management' },
            { feature: 'Basic social media support' },
          ],
          isPopular: false,
        },
        {
          title: 'Growth Package',
          description: 'For busy agents and small teams',
          price: '$899',
          interval: '/month',
          features: [
            { feature: '20 hours per week' },
            { feature: 'All Starter Package services' },
            { feature: 'Transaction coordination' },
            { feature: 'Full social media management' },
            { feature: 'Email marketing campaigns' },
          ],
          isPopular: true,
        },
        {
          title: 'Premium Package',
          description: 'For established teams and brokerages',
          price: '$1,499',
          interval: '/month',
          features: [
            { feature: '40 hours per week' },
            { feature: 'All Growth Package services' },
            { feature: 'Advanced market research' },
            { feature: 'Content creation & blog management' },
            { feature: 'Team coordination support' },
          ],
          isPopular: false,
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Package Title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Package Description',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
          required: true,
        },
        {
          name: 'interval',
          type: 'text',
          label: 'Interval',
          required: true,
          defaultValue: '/month',
        },
        {
          name: 'isPopular',
          type: 'checkbox',
          label: 'Mark as Most Popular',
          defaultValue: false,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Package Features',
          required: true,
          minRows: 1,
          maxRows: 10,
          admin: {
            description: 'Add features included in this package',
          },
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Feature',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
