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
  'bouquets_1.webp',
  'bouquets_2.webp',
  'bouquets_3.webp',
  'bouquets_4.webp',
  'bouquets_5.webp',
  'bouquets_6.webp',
  'bouquets_7.webp',
  'bouquets_8.webp',
  'bouquets_9.webp',
  'bouquets_10.webp',
];

const rosaryFiles = [
  'rosaries_1.webp',
  'rosaries_2.webp',
  'rosaries_3.webp',
  'rosaries_4.webp',
  'rosaries_5.webp',
  'rosaries_6.webp',
  'rosaries_7.webp',
  'rosaries_8.webp',
  'rosaries_9.webp',
  'rosaries_10.webp',
];

const boxBouquetsFiles = [
  'box_bouquets_1.webp',
  'box_bouquets_2.webp',
  'box_bouquets_3.webp',
  'box_bouquets_4.webp',
  'box_bouquets_5.webp',
  'box_bouquets_6.webp',
  'box_bouquets_7.webp',
];

const comboFiles = [
  'combo_1.webp',
  'combo_2.webp',
];

const hairClipAndBowFiles = [
  'hair_clip_and_bow_1.webp',
  'hair_clip_and_bow_2.webp',
  'hair_clip_and_bow_3.webp',
  'hair_clip_and_bow_4.webp',
];

const weddingLapelsFiles = [
  'wedding_lapels_1.webp',
  'wedding_lapels_2.webp',
  'wedding_lapels_3.webp',
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
  {
    id: 'combo',
    title: 'Paketi',
    description:
      'Prekrasne kombinacije buketa, krunica i dodataka u usklađenim paketima.',
    slides: comboFiles.map((file) => ({
      src: `/images/combo/${file}`,
      alt: 'Komplet - Rosa Dei',
    })),
  },
  {
    id: 'hair-clip-and-bow',
    title: 'Kopče i Mašne za kosu',
    description:
      'Ručno rađene kopče i elegantne mašne za svečane prilike.',
    slides: hairClipAndBowFiles.map((file) => ({
      src: `/images/hair_clip_and_bow/${file}`,
      alt: 'Kopče i Mašne za kosu - Rosa Dei',
    })),
  },
  {
    id: 'wedding-lapels',
    title: 'Reveri i Svadbeni Ukrasi',
    description:
      'Personalizirani reveri i cvjetni ukrasi za vjenčanja.',
    slides: weddingLapelsFiles.map((file) => ({
      src: `/images/wedding_lapels/${file}`,
      alt: 'Reveri - Rosa Dei',
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
            className={`object-cover transition-opacity duration-1000 ease-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
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
            className={`h-1.5 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none ${index === currentSlide
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
          <h2 className="mt-4 font-serif text-[2.5rem] leading-tight font-light text-balance sm:text-5xl">
            Iskaži svoju ljubav i pažnju, mi ti u tome pomažemo
          </h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {categories.map((category) => (
            <article key={category.id} id={category.id} className="scroll-mt-28">
              <div className="mb-8 text-center">
                <h3 className="font-serif text-4xl leading-tight font-light sm:text-4xl">
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
