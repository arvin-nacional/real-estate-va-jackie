import type { Block } from 'payload'

export const SiteHeader: Block = {
  slug: 'siteHeader',
  interfaceName: 'SiteHeaderBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'About Our Crochet Flowers',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Each crochet flower is handmade with care and attention to detail. We use only the finest materials to create beautiful, long-lasting pieces that bring joy to any space.',
    },
  ],
}
