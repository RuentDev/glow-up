import type { Access, CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { checkRole } from '../../access/utilities'
import { afterChangeRating, afterDeleteRating } from './hooks/updateProductRating'

const ratingsAccess: Access = ({ req: { user } }) => {
  if (!user) return false
  if (checkRole(['admin'], user)) return true

  return {
    user: {
      equals: user.id,
    },
  }
}

export const Ratings: CollectionConfig = {
  slug: 'ratings',
  access: {
    create: authenticated,
    delete: ratingsAccess,
    read: () => true,
    update: ratingsAccess,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'rating',
  },
  hooks: {
    afterChange: [afterChangeRating],
    afterDelete: [afterDeleteRating],
  },

  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      max: 5,
      min: 1,
      required: true,
    },
    {
      name: 'review',
      type: 'textarea',
    },
  ],
}
