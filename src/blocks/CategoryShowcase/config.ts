import { categoryItem } from '@/fields/category-item'
import type { Block } from 'payload'

export const CategoryShowcase: Block = {
  slug: 'categoryShowcase',
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
      name: 'categories',
      type: 'array',
      fields: [categoryItem()],
      maxRows: 10,
    },
  ],
  interfaceName: 'CategoryShowcaseBlock',
  labels: {
    plural: 'CategoryShowcases',
    singular: 'CategoryShowcase',
  },
}
