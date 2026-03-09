import { Media } from '@/components/Media'
import type { GridBlock as GridBlockType, Media as MediaType } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'

const CATEGORIES = [
  {
    id: 1,
    name: 'Makeup',
    emoji: '💋',
    href: '/makeup',
    color: 'from-pink-100 to-primary/10',
  },
  {
    id: 2,
    name: 'Skincare',
    emoji: '✨',
    href: '/skincare',
    color: 'from-secondary/30 to-primary/10',
  },
  {
    id: 3,
    name: 'Bath & Body',
    emoji: '🧴',
    href: '/bath-body',
    color: 'from-primary/10 to-secondary/20',
  },
  {
    id: 4,
    name: 'Tools',
    emoji: '💅',
    href: '/tools',
    color: 'from-secondary/20 to-primary/10',
  },
]

export const Grid: React.FC<GridBlockType> = ({
  heading,
  subHeading,
  items,
  spacing,
  gridSettings,
}) => {
  const { margin, padding } = spacing || {}
  const { gap, columns, row, cardRadius, cardHeight } = gridSettings || {}
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className={cn(`m-[${margin}px]`, `p-[${padding}px]`)}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{heading}</h2>
          <p className="text-lg text-foreground/70">{subHeading}</p>
        </div>

        {/* Categories Grid */}
        <div
          className={cn(`grid gird-cols-1 lg:grid-cols-${columns} grid-rows-${row} gap-[${gap}px]`)}
        >
          {items?.map((item) => {
            let image: MediaType | undefined | null = undefined

            if (typeof item.image == 'object' && item.image !== null) {
              image = item.image
            }

            return (
              <div
                key={item.id}
                className={cn(
                  `rounded-[${cardRadius}px]`,
                  `relative group bg-linear-to-br flex flex-col items-center justify-center hover:shadow-lg hover:shadow-primary/20 transition group-hover:scale-105`,
                )}
              >
                {image && (
                  <Media
                    className={cn(
                      `h-[${cardHeight}]px`,
                      'relative w-full object-cover',
                      'overflow-hidden',
                    )}
                    imgClassName="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-50"
                    resource={image as MediaType}
                  />
                )}
                <div className="absolute bottom-10">
                  <h3 className="text-center text-xl font-semibold text-foreground group-hover:text-primary transition">
                    {item.title}
                  </h3>
                  <Link key={item.id} href={item.buttonLink!} className="group">
                    <p className="text-center text-sm text-foreground/60 mt-2 group-hover:text-primary group-hover:animate-pulse transition">
                      {item.buttonText}
                    </p>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
