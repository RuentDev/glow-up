import { sliderImage } from '@/fields/slider-image'
import type { Block } from 'payload'

export const ImageSlider: Block = {
  slug: 'imageSlider',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      fields: [sliderImage()],
      maxRows: 10,
    },
  ],
  interfaceName: 'ImageSliderBlock',
  labels: {
    plural: 'ImageSlider',
    singular: 'ImageSliders',
  },
}
