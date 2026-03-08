import { ImageSliderBlock as ImageSliderBlockType } from '@/payload-types'
import React from 'react'
import { ImageSlider } from './Component.client'

export const ImageSliderBlock: React.FC<ImageSliderBlockType> = async (props) => {
  const { images } = props

  return (
    <div className=" w-full pb-6 pt-1">
      <ImageSlider images={images} />
    </div>
  )
}
