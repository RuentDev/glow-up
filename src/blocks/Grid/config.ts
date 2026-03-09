import type { Block } from 'payload'

export const Grid: Block = {
  slug: 'grid',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subHeading',
      type: 'text',
    },
    {
      type: 'group',
      name: 'spacing',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'margin',
              type: 'number',
            },
            {
              name: 'padding',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'gridSettings',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'gap',
              type: 'number',
            },
            {
              name: 'columns',
              type: 'number',
              defaultValue: 4,
            },
            {
              name: 'row',
              type: 'number',
              defaultValue: 1,
            },
            {
              name: 'cardHeight',
              type: 'number',
              defaultValue: 250,
              required: true,
            },
            {
              name: 'cardRadius',
              type: 'number',
              defaultValue: 0,
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      name: 'items',
      fields: [
        {
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                },
                {
                  name: 'buttonLink',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  interfaceName: 'GridBlock',
  labels: {
    plural: 'Grids',
    singular: 'Grid',
  },
}
