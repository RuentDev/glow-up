'use client'
import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Media as MediaType, Product } from '@/payload-types'
import { cn } from '@/utilities/cn'
import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import { Heart, ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  product: Product | number
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  if (typeof product !== 'object') return
  const rating = 0
  const price = typeof product.priceInUSD === 'number' ? product.priceInUSD : 0
  // const originalPrice = 250.0
  const inStock = typeof product.inventory === 'number' && product.inventory > 0
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
        {rating > 0 && (
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
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          {price > 0 && (
            <span className="text-lg font-bold text-foreground">
              {(price / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'PHP',
              })}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          type="button"
          disabled={!inStock}
          onClick={() => addItem({ product: product.id })}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
