'use client'
import { Media } from '@/components/Media'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { ImageSliderBlock } from '@/payload-types'
import { Link } from '@payloadcms/ui'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

type Props = {
  images: ImageSliderBlock['images']
}

export const ImageSlider = ({ images }: Props) => {
  if (!images || images.length === 0) return null

  const options = {
    loop: true,
    transitionDuration: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Carousel
      className="relative w-full overflow-hidden bg-background"
      opts={{ ...options }}
      plugins={[Autoplay({ delay: 3500 }), Fade()]} // Add Fade plugin
    >
      <CarouselContent className="relative h-screen flex items-stretch ml-0">
        {images.map((item, index) => {
          const image = item.slide?.image

          if (!image) return null

          return (
            <CarouselItem key={item.id} className="relative h-full w-full pl-0">
              <div className="relative h-full w-full">
                <Media
                  resource={image}
                  fill
                  className="h-full w-full"
                  imgClassName="object-cover"
                  priority={index === 0}
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content Overlay */}
                {(item.slide?.heading || item.slide?.subHeading) && (
                  <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 lg:px-0 flex items-center">
                    <div className="max-w-2xl space-y-4 md:space-y-6 text-white">
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                        {item.slide?.heading}
                      </h2>
                      <p className="text-base md:text-xl text-white/90 max-w-lg">
                        {item.slide?.subHeading}
                      </p>
                      <div className="pt-4">
                        {item.slide?.btnText && !item.slide?.url && (
                          <button className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:shadow-lg hover:shadow-primary/40 transition">
                            {item.slide?.btnText}
                          </button>
                        )}
                        {item.slide?.url && (
                          <Link href={item.slide?.url}>
                            <button className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:shadow-lg hover:shadow-primary/40 transition">
                              {item.slide?.btnText}
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      <div className="absolute right-12 bottom-12 flex gap-2">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  )
}
