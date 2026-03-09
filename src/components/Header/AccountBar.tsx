import { useAuth } from '@/providers/Auth'
import { Link } from '@payloadcms/ui'
import { LogIn, User } from 'lucide-react'
import { Button } from '../ui/button'

export const AccountBar = () => {
  const { user, logout } = useAuth()

  const isLogin = !!user

  return (
    <div className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto h-10 p-4 lg:p-0 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          {isLogin ? (
            <Link href="/account" className="flex items-center gap-2 hover:text-primary transition">
              <User className="w-4 h-4" /> {user.email}
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-foreground hover:text-primary transition flex items-center gap-1"
              >
                <LogIn className="w-4 h-4" />
                Log in
              </Link>

              <Link href="/register" className="text-foreground hover:text-primary transition">
                Register
              </Link>
            </>
          )}
        </div>
        <div className="hidden md:flex items-center gap-6 text-foreground">
          {isLogin ? (
            <>
              <Link href="/orders" className="hover:text-primary transition">
                Orders
              </Link>
              <span className="text-foreground/40">|</span>
              <Button
                variant="link"
                onClick={logout}
                className="hover:text-primary transition font-semibold"
              >
                Logout
              </Button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
