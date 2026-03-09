'use client'
import { GridTileImage } from '@/components/Grid/tile'
import { ProductCard } from '@/components/ProductCard'
import type { FourItemGridBlock as FourItemGridBlockProps, Media, Product } from '@/payload-types'
import { useCart, useCurrency } from '@payloadcms/plugin-ecommerce/client/react'
import Link from 'next/link'
import type { DefaultDocumentIDType } from 'payload'
import React from 'react'

type Props = { item: Product; priority?: boolean; size: 'full' | 'half' }

export const FourItemGridItem: React.FC<Props> = ({ item, size }) => {
  let price = item.priceInPHP

  if (item.enableVariants && item.variants?.docs?.length) {
    const variant = item.variants.docs[0]

    if (variant && typeof variant === 'object' && variant.priceInPHP) {
      price = variant.priceInPHP
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

export const FourItemGrid: React.FC<
  FourItemGridBlockProps & {
    id?: DefaultDocumentIDType
    className?: string
  }
> = ({ products, heading, subHeading }) => {
  const { addItem, isLoading } = useCart()
  const {} = useCurrency()

  if (!products || !products.length) return null

  const handleAddToCart = (product: Product) => {
    if (!product) return

    console.log(product)
    addItem({ product: product.id }, 1)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{heading}</h2>
          <p className="text-lg text-foreground/70">{subHeading}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => {
            if (typeof product !== 'object') return

            const amount = typeof product.priceInPHP === 'number' ? product.priceInPHP : 0
            const stock = typeof product.inventory === 'number' ? product.inventory : 0
            const rating = product.averageRating || 0

            return (
              <ProductCard
                key={product.id}
                product={product}
                amount={amount}
                stock={stock}
                averageRating={rating}
                onAddToCart={handleAddToCart}
                isSubmiting={isLoading}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
