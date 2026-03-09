import type { Block } from 'payload'

export const FourItemGrid: Block = {
  slug: 'fourItemGrid',
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
      name: 'products',
      type: 'relationship',
      admin: {
        isSortable: true,
        width: '50%',
      },
      hasMany: true,
      label: 'Products to show',
      maxRows: 4,
      minRows: 1,
      relationTo: 'products',
    },
  ],
  interfaceName: 'FourItemGridBlock',
  labels: {
    plural: 'Four Item Grids',
    singular: 'Four Item Grid',
  },
}
