import type { Footer, Logo } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import LogoIcon from '../Logo/index.client'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const logo: Logo = await getCachedGlobal('logo', 1)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'

  const copyrightName = COMPANY_NAME || SITE_NAME || ''

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto py-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <LogoIcon logo={logo} />
            <p className="text-background/80 text-sm">
              Your luxury beauty destination in the Philippines. Premium skincare, makeup, and
              cosmetics from the world's best brands.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-primary transition">
                Facebook
              </a>
              <a href="#" className="hover:text-primary transition">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition">
                TikTok
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h4 className="font-bold text-lg text-primary">Shop</h4>
            <ul className="text-sm text-background/80 space-y-2">
              <li>
                <Link href="/makeup" className="hover:text-primary transition">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/skincare" className="hover:text-primary transition">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/bath-body" className="hover:text-primary transition">
                  Bath & Body
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-primary transition">
                  Tools & Accessories
                </Link>
              </li>
              <li>
                <Link href="/sale" className="hover:text-primary transition">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-3">
            <h4 className="font-bold text-lg text-primary">Help</h4>
            <ul className="text-sm text-background/80 space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary">Contact</h4>
            <div className="text-sm text-background/80 space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>(02) 8830 5000</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:custserv@beautybar.com.ph"
                  className="hover:text-primary transition"
                >
                  custserv@beautybar.com.ph
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Philippines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <p>© 2025 Beauty Bar Philippines. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
