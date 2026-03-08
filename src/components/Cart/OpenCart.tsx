import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

export function OpenCartButton({
  className,
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <Button
      variant="nav"
      size="clear"
      className="p-2 hover:bg-secondary rounded-lg transition hidden md:block"
      {...rest}
    >
      {/* <span>Cart</span> */}
      <ShoppingBag className="w-5 h-5 text-foreground" />

      {quantity ? (
        <>
          <span>•</span>
          <span>{quantity}</span>
        </>
      ) : null}
    </Button>
  )
}
