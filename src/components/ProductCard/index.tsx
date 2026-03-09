'use client'
import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Media as MediaType, Product } from '@/payload-types'
import { cn } from '@/utilities/cn'
import { Heart, ShoppingBag } from 'lucide-react'
import { Price } from '../Price'

interface ProductCardProps {
  product: Product | number
  isSubmiting: boolean
  amount: number
  stock: number
  averageRating: number
  onAddToCart: (product: Product) => void
}

export function ProductCard({
  product,
  amount,
  stock,
  averageRating,
  isSubmiting,
  onAddToCart,
}: ProductCardProps) {
  if (typeof product !== 'object') return
  const inStock = typeof stock === 'number' && stock > 0

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:shadow-primary/10 transition">
      {/* Product Image Area */}
      <div className="bg-linear-to-br from-secondary/30 to-primary/10 aspect-square flex items-center justify-center relative overflow-hidden">
        <Media
          className={cn('relative h-full w-full object-cover', {
            'transition duration-300 ease-in-out group-hover:scale-105': true,
          })}
          height={80}
          imgClassName="h-full w-full object-cover"
          resource={product?.gallery?.[0].image as MediaType}
          width={80}
        />

        {!inStock && <Badge className="absolute top-2 right-2 text-white">Out of Stock</Badge>}

        {/* Wishlist Button */}
        <button className="absolute top-2 left-2 p-2 bg-background/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
          <Heart className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3 flex flex-col justify-between">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider">Brand</p>
        <h3
          className={cn(
            'font-semibold text-foreground text-sm m-0 group-hover:text-primary transition',
            'line-clamp-4 h-15',
          )}
        >
          {product.title}
        </h3>

        {/* Rating */}
        {averageRating > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < averageRating ? 'text-primary' : 'text-border'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-foreground/60">({product.totalRatings || 0})</span>
          </div>
        )}

        <Price
          amount={amount}
          currencyCode="PHP"
          className="text-base text-black dark:text-white"
        />

        {/* Add to Cart Button */}
        <Button
          type="button"
          disabled={!inStock || isSubmiting || amount == 0}
          onClick={() => onAddToCart(product)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
