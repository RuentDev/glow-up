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

export function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-lg text-foreground/70">
            An all in one beauty haven for self expression and discovery
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link key={category.id} href={category.href} className="group">
              <div
                className={`bg-gradient-to-br ${category.color} rounded-lg p-8 h-48 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-primary/20 transition group-hover:scale-105`}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition">
                  {category.emoji}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition">
                  {category.name}
                </h3>
                <p className="text-sm text-foreground/60 mt-2">Shop now</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
