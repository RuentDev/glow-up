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
      className="relative p-2 hover:bg-transparent rounded-lg transition hidden md:block"
      {...rest}
    >
      {quantity ? (
        <div className="absolute -top-2 right-2 flex items-center justify-center w-4 h-4">
          <span>+</span>
          <span>{quantity}</span>
        </div>
      ) : null}
      <ShoppingBag className="w-10 h-10 text-foreground" width={20} height={20} />
    </Button>
  )
}
