import type { Field } from 'payload'

import { deepMerge } from '@/utilities/deepMerge'

type CategoryItemType = (options?: { overrides?: Record<string, unknown> }) => Field

export const categoryItem: CategoryItemType = ({ overrides = {} } = {}) => {
  const sliderImageResult: Field = {
    name: 'item',
    type: 'group',
    // admin: {
    //   hideGutter: true,
    // },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'icon',
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
            name: 'urlType',
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
        condition: (_, siblingData) => siblingData?.linkType === 'reference',
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
        condition: (_, siblingData) => siblingData?.linkType === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]

  sliderImageResult.fields = [...sliderImageResult.fields, ...linkTypes]

  return deepMerge(sliderImageResult, overrides)
}
