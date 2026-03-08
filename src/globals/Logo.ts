import type { GlobalConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'

export const Logo: GlobalConfig = {
  slug: 'logo',
  access: {
    read: () => true,
    update: adminOnly,
  },
  fields: [
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Text to display in the top bar',
      },
    },
    {
      name: 'logoType',
      type: 'select',
      defaultValue: 'image',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Text', value: 'text' },
      ],
      admin: {
        description: 'Choose whether to use an image or text as the logo',
      },
    },
    {
      name: 'logoImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Logo image to display in the header',
        condition: (data) => data?.logoType === 'image',
      },
    },
    {
      name: 'logoText',
      type: 'text',
      admin: {
        description: 'Text to use as the logo',
        condition: (data) => data?.logoType === 'text',
      },
    },
  ],
}
