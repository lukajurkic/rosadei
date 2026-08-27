'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type Category = {
  id: string
  title: string
  description: string
  slides: { src: string; alt: string }[]
}

const categories: Category[] = [
  {
    id: 'signature-bouquets',
    title: 'Signature Bouquets',
    description:
      'Our house style — loose, garden-gathered stems in blush and peach, tied by hand.',
    slides: [
      {
        src: '/images/signature-1.webp',
        alt: 'Hand-tied bouquet of blush garden roses and ranunculus wrapped in cream paper',
      },
      {
        src: '/images/signature-2.webp',
        alt: 'Asymmetric arrangement of peach roses and white anemones in a matte stone vase',
      },
      {
        src: '/images/signature-3.webp',
        alt: 'Close-up of pale pink peonies lit by soft golden sunlight',
      },
    ],
  },
  {
    id: 'bridal-ceremonial',
    title: 'Bridal & Ceremonial',
    description:
      'Considered florals for the day itself — bouquets, arches, and low table settings.',
    slides: [
      {
        src: '/images/bridal-1.webp',
        alt: 'Bridal bouquet of ivory and blush roses with trailing silk ribbon',
      },
      {
        src: '/images/bridal-2.webp',
        alt: 'Ceremonial floral arch detail with white and peach roses and eucalyptus',
      },
      {
        src: '/images/bridal-3.webp',
        alt: 'Low ceremony centerpiece of blush roses and candles on cream linen',
      },
    ],
  },
  {
    id: 'everlasting-dried',
    title: 'Everlasting Dried Florals',
    description:
      'Preserved and dried compositions in muted earth tones, made to last for seasons.',
    slides: [
      {
        src: '/images/dried-1.webp',
        alt: 'Dried arrangement of pampas grass, bunny tails and preserved rose buds in a ceramic vessel',
      },
      {
        src: '/images/dried-2.webp',
        alt: 'Bundle of dried lavender, hydrangea and wheat tied with linen twine',
      },
      {
        src: '/images/dried-3.webp',
        alt: 'Everlasting dried posy in dusty pink and champagne tones on a plaster ledge',
      },
    ],
  },
]

function CategorySlideshow({ category }: { category: Category }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const total = category.slides.length

  const advance = useCallback(() => {
    setCurrentSlide((index) => (index + 1) % total)
  }, [total])

  useEffect(() => {
    const timer = setInterval(advance, 4000)
    return () => clearInterval(timer)
  }, [advance, currentSlide])

  return (
    <div className="mx-auto max-w-2xl">
      <button
        type="button"
        onClick={advance}
        aria-label={`Show next image in ${category.title}`}
        className="relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl border border-rose-200/50 shadow-lg shadow-rose-900/10 transition-shadow hover:shadow-xl hover:shadow-rose-900/15 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {category.slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent"
        />
        <span className="absolute bottom-4 left-5 text-[0.6rem] tracking-[0.24em] text-white/85 uppercase">
          {`${currentSlide + 1} / ${total}`}
        </span>
      </button>

      <div className="mt-5 flex items-center justify-center gap-2.5">
        {category.slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to image ${index + 1} of ${category.title}`}
            aria-current={index === currentSlide}
            className={`h-1.5 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none ${
              index === currentSlide
                ? 'w-8 bg-gold'
                : 'w-1.5 bg-foreground/20 hover:bg-foreground/40'
            }`}
          />
        ))}
      </div>

    </div>
  )
}

export function CategoryGalleries() {
  return (
    <section
      id="collections"
      className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center sm:mb-20">
          <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
            The Collections
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-5xl">
            Three ways to hold a season
          </h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {categories.map((category) => (
            <article key={category.id} id={category.id} className="scroll-mt-28">
              <div className="mb-8 text-center">
                <h3 className="font-serif text-2xl leading-tight font-light sm:text-4xl">
                  {category.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-pretty text-foreground/65">
                  {category.description}
                </p>
              </div>
              <CategorySlideshow category={category} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
