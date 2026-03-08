'use client'

import { Menu, Search, X } from 'lucide-react'
import { Cart } from '../Cart'

interface Props {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const RightActions = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <button
        className="p-2 hover:bg-secondary rounded-lg transition hidden md:block"
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-foreground" />
      </button>
      {/* <button
        className="p-2 hover:bg-secondary rounded-lg transition hidden md:block"
        aria-label="Shopping cart"
      >
        <ShoppingBag className="w-5 h-5 text-foreground" />
      </button> */}
      <Cart />
      <button
        className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>
    </div>
  )
}

export default RightActions
