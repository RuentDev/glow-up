import { CategoryShowcaseBlock as CategoryShowcaseBlockType } from '@/payload-types'
import React from 'react'
import { CategoryShowcase } from './Component.client'

export const CategoryShowcaseBlock: React.FC<CategoryShowcaseBlockType> = (props) => {
  const { heading, subHeading } = props
  return <CategoryShowcase />
}
