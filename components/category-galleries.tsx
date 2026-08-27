'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type Category = {
  id: string
  title: string
  description: string
  slides: { src: string; alt: string }[]
}

const bouquetFiles = [
  'bijeli_sa_jednom_zlatnom.jpg',
  'bride_to_be.jpg',
  'dva_crvena_zuti.jpg',
  'krstenje_dva_kom.jpg',
  'plavi_sljokice.jpg',
  'plavi.jpg',
  'rozi_sljokice.jpg',
  'stich_plavo_rozi.jpg',
  'sto_jedna_ruza_plavo_rozi.jpg',
];

const rosaryFiles = [
  `krunica_1.webp`,
  `krunica_2.webp`,
  `krunica_3.webp`,
  `krunica_4.webp`,
  `krunica_5.webp`,
  `krunica_6.jpeg`,
  `krunica_7.jpeg`,
  `krunica_8.jpeg`,
  `krunica_9.jpeg`,
  `krunica_10.jpeg`,
  `krunica_11.jpg`,
];

const boxBouquetsFiles = [
  `rozi_buket_drvo.jpg`,
];

const categories: Category[] = [
  {
    id: 'bouquets',
    title: 'Buketi',
    description: 'Naš prepoznatljivi stil izrade — čvrstoća, kvaliteta, kreativnost i ručna izrada.',
    slides: bouquetFiles.map((file) => ({
      src: `/images/bouquets/${file}`,
      alt: 'Buket - Rosa Dei',
    })),
  },
  {
    id: 'krunice',
    title: 'Krunice',
    description:
      'Pogledajte krunice koje možete već danas naručiti zasebno ili kombinirati u paketu s buketom za predivan poklon za razne prilike. ',
    slides: rosaryFiles.map((file) => ({
      src: `/images/rosaries/${file}`,
      alt: 'Krunica - Rosa Dei',
    })),
  },
  {
    id: 'box-bouquets',
    title: 'Box Buketi',
    description:
      'Naši box buketi, slični kao buketi, ali zanimljiviji i drugačiji. Pogledajte našu ponudu box buketa i naručite svoj danas.',
    slides: boxBouquetsFiles.map((file) => ({
      src: `/images/box_bouquets/${file}`,
      alt: 'Box Buket - Rosa Dei',
    })),
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
            Naši proizvodi
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-5xl">
            Iskaži svoju ljubav i pažnju, mi ti u tome pomažemo
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
