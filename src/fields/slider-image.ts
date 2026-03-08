import type { Field } from 'payload'

import { deepMerge } from '@/utilities/deepMerge'

type SliderImageType = (options?: { overrides?: Record<string, unknown> }) => Field

export const sliderImage: SliderImageType = ({ overrides = {} } = {}) => {
  const sliderImageResult: Field = {
    name: 'slide',
    type: 'group',
    // admin: {
    //   hideGutter: true,
    // },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            admin: {
              width: '100%',
            },
          },
          {
            name: 'heading',
            type: 'text',
          },
          {
            name: 'subHeading',
            type: 'text',
          },
          {
            name: 'btnText',
            type: 'text',
          },
          {
            name: 'btnType',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: 'Document to link to',
      maxDepth: 1,
      relationTo: ['pages'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]

  sliderImageResult.fields = [...sliderImageResult.fields, ...linkTypes]

  return deepMerge(sliderImageResult, overrides)
}
