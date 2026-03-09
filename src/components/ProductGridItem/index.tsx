import type { Product } from '@/payload-types'

import { Media } from '@/components/Media'
import clsx from 'clsx'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  product: Partial<Product>
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {
  const { gallery, priceInPHP, title } = product

  let price = priceInPHP
  let comparePrice: number | undefined | null = undefined
  let stock: number | undefined | null = undefined

  const variants = product.variants?.docs

  if (variants && variants.length > 0) {
    const variant = variants[0]
    if (
      variant &&
      typeof variant === 'object' &&
      variant?.priceInPHP &&
      typeof variant.priceInPHP === 'number'
    ) {
      price = variant.priceInPHP
      stock = variant.inventory
      // comparePrice = variant
    }
  }

  const image =
    gallery?.[0]?.image && typeof gallery[0]?.image !== 'string' ? gallery[0]?.image : false

  return (
    <Link className="relative inline-block h-full w-full group" href={`/products/${product.slug}`}>
      {image && (
        <div className="bg-linear-to-br from-secondary/30 to-primary/10 aspect-square flex items-center justify-center relative overflow-hidden">
          <Media
            className={clsx(
              'relative aspect-square object-cover border rounded-2xl bg-primary-foreground',
            )}
            height={80}
            imgClassName={clsx('h-full w-full object-cover rounded-2xl', {
              'transition duration-300 ease-in-out group-hover:scale-102': true,
            })}
            resource={image}
            width={80}
          />

          {/* Stock Badge */}
          {!stock && (
            <div className="absolute top-2 right-2 bg-foreground/20 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-foreground">
              Out of Stock
            </div>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-2 left-2 p-2 bg-background/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
            <Heart className="w-5 h-5 text-primary" />
          </button>
        </div>
      )}

      <div className="p-4 space-y-3">
        {/* <p className="text-xs font-semibold text-primary uppercase tracking-wider">{brand}</p> */}
        <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition">
          {title}
        </h3>

        {/* Rating */}
        {/* {rating && (
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? 'text-primary' : 'text-border'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-foreground/60">({rating})</span>
          </div>
        )} */}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">₱{price?.toLocaleString()}</span>
          {price && (
            <span className="text-sm text-foreground/60 line-through">
              ₱{price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        {/* <Button
          disabled={!inStock}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </Button> */}
      </div>
    </Link>
  )
}
