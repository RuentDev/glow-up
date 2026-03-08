'use client'

import { cn } from '@/utilities/cn'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import type { Header, Logo } from 'src/payload-types'
import { CMSLink } from '../Link'
import LogoIcon from '../Logo/index.client'
import { AccountBar } from './AccountBar'
import RightActions from './RightActions'
import TopBar from './TopBar'

type Props = {
  header: Header
  logo: Logo
}

export function HeaderClient({ header, logo }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-background sticky top-0 z-50">
      <TopBar />

      <AccountBar />

      <nav className="max-w-7xl mx-auto py-4 px-4 md:px-0 flex items-center justify-between">
        <LogoIcon logo={logo} />

        {/* Desktop Navigation */}
        {menu.length ? (
          <div className="hidden md:flex items-center gap-8">
            <ul className="hidden gap-4 text-sm md:flex md:items-center">
              {menu.map((item) => (
                <li key={item.id}>
                  <CMSLink
                    {...item.link}
                    className={cn('relative navLink', {
                      active:
                        item.link.url && item.link.url !== '/'
                          ? pathname.includes(item.link.url)
                          : false,
                    })}
                    appearance="nav"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <RightActions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>

      {/* <nav className="flex items-center md:items-end justify-between container pt-2">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-end justify-between">
          <div className="flex w-full items-end gap-6 md:w-1/3">
            <Link className="flex w-full items-center justify-center pt-4 pb-4 md:w-auto" href="/">
              <LogoIcon className="w-6 h-auto" />
            </Link>
            {menu.length ? (
              <ul className="hidden gap-4 text-sm md:flex md:items-center">
                {menu.map((item) => (
                  <li key={item.id}>
                    <CMSLink
                      {...item.link}
                      size={'clear'}
                      className={cn('relative navLink', {
                        active:
                          item.link.url && item.link.url !== '/'
                            ? pathname.includes(item.link.url)
                            : false,
                      })}
                      appearance="nav"
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex justify-end md:w-1/3 gap-4">
            <Suspense fallback={<OpenCartButton />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav> */}
    </header>
  )
}
