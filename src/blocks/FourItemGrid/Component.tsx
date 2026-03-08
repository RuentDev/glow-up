import type { FourItemGridBlock as FourItemGridBlockProps, Media, Product } from '@/payload-types'

import { GridTileImage } from '@/components/Grid/tile'
import Link from 'next/link'
import type { DefaultDocumentIDType } from 'payload'
import React from 'react'
import { ProductCard } from './ProductCard'

type Props = { item: Product; priority?: boolean; size: 'full' | 'half' }

export const FourItemGridItem: React.FC<Props> = ({ item, size }) => {
  let price = item.priceInUSD

  if (item.enableVariants && item.variants?.docs?.length) {
    const variant = item.variants.docs[0]

    if (variant && typeof variant === 'object' && variant.priceInUSD) {
      price = variant.priceInUSD
    }
  }

  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/products/${item.slug}`}>
        <GridTileImage
          label={{
            amount: price!,
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title,
          }}
          media={item.meta?.image as Media}
        />
      </Link>
    </div>
  )
}

export const FourItemGridBlock: React.FC<
  FourItemGridBlockProps & {
    id?: DefaultDocumentIDType
    className?: string
  }
> = async ({ products }) => {
  if (!products || !products.length) return null

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What's New</h2>
          <p className="text-lg text-foreground/70">Shop the latest products you'll love</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => {
            if (typeof product !== 'object') return
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}
