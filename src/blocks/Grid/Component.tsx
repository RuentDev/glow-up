import { GridBlock as GridBlockType } from '@/payload-types'
import React from 'react'
import { Grid } from './Component.client'

export const GridBlock: React.FC<GridBlockType> = async (props) => {
  return <Grid {...props} />
}
