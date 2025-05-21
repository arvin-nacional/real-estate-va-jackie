import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Story: Block = {
  slug: 'story',
  interfaceName: 'StoryBlock',
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
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'My Story',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
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
  ],
}
