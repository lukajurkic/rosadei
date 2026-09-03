'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, Ribbon, Layers, Box, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import type { ComponentType } from 'react'

const additionsFiles = [
  'customization-additions_1.webp',
  'customization-additions_2.webp',
  'customization-additions_3.webp',
];

const ribbonsFiles = [
];

const decorativePaperFiles = [
];

const boxesFiles = [
  'customization-boxes_1.webp',
  'customization-boxes_2.webp',
  'customization-boxes_3.webp',
  'customization-boxes_4.webp',
  'customization-boxes_5.webp',
  'customization-boxes_6.webp',
];

type CustomizationCategory = {
  id: string
  title: string
  subtitle: string
  description: string
  icon: ComponentType<{ className?: string }>
  subfolder: string
  files: string[]
}

export function CustomizationOptions() {
  const categories: CustomizationCategory[] = [
    {
      id: 'additions',
      title: 'Dodatci',
      subtitle: 'Bespoke Additions',
      description: 'Posebni detalji i dodaci koji daju personalizirani i jedinstven pečat svakom aranžmanu.',
      icon: Sparkles,
      subfolder: 'additions',
      files: additionsFiles,
    },
    {
      id: 'ribbons',
      title: 'Boje traka',
      subtitle: 'Silk & Satin Ribbons',
      description: 'Svilene, satenske i baršunaste trake u pažljivo odabranim nijansama za savršen finiš.',
      icon: Ribbon,
      subfolder: 'ribbons',
      files: ribbonsFiles,
    },
    {
      id: 'decorative-paper',
      title: 'Papir za zamatanje',
      subtitle: 'Wrapping Paper',
      description: 'Ukrasni papiri i omoti u suptilnim tonovima koji ističu ljepotu cvijeća.',
      icon: Layers,
      subfolder: 'decorative_paper',
      files: decorativePaperFiles,
    },
    {
      id: 'boxes',
      title: 'Box kutije',
      subtitle: 'Flower Boxes',
      description: 'Elegantne kutije u raznim oblicima i dimenzijama za luksuzan dojam.',
      icon: Box,
      subfolder: 'boxes',
      files: boxesFiles,
    },
  ]

  const [activeTab, setActiveTab] = useState<string>('all')
  const [lightboxState, setLightboxState] = useState<{
    categoryTitle: string
    images: { src: string; alt: string }[]
    currentIndex: number
  } | null>(null)

  const openLightbox = (categoryTitle: string, images: { src: string; alt: string }[], index: number) => {
    setLightboxState({ categoryTitle, images, currentIndex: index })
  }

  const closeLightbox = () => {
    setLightboxState(null)
  }

  const nextImage = useCallback(() => {
    if (!lightboxState) return
    setLightboxState((prev) =>
      prev
        ? {
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length,
          }
        : null
    )
  }, [lightboxState])

  const prevImage = useCallback(() => {
    if (!lightboxState) return
    setLightboxState((prev) =>
      prev
        ? {
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
          }
        : null
    )
  }, [lightboxState])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxState, nextImage, prevImage])

  const filteredCategories = activeTab === 'all'
    ? categories
    : categories.filter((c) => c.id === activeTab)

  return (
    <section id="customization" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
            Personalizacija
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-5xl">
            Opcije Personalizacije
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-pretty text-foreground/65">
            Svaki aranžman možete prilagoditi svojim željama. Odaberite trake, pakiranja i posebne dodatke.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-4 py-2 text-xs tracking-wider transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gold text-white shadow-md shadow-amber-900/10 font-medium'
                  : 'bg-white/60 text-foreground/70 hover:bg-white hover:text-foreground border border-rose-200/40'
              }`}
            >
              Sve Opcije
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-4 py-2 text-xs tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-gold text-white shadow-md shadow-amber-900/10 font-medium'
                    : 'bg-white/60 text-foreground/70 hover:bg-white hover:text-foreground border border-rose-200/40'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {filteredCategories.map((category) => {
            const Icon = category.icon
            const imageList = category.files.map((file, idx) => ({
              src: `/images/customization/${category.subfolder}/${file}`,
              alt: `${category.title} opcija ${idx + 1} - Rosa Dei`,
            }))

            return (
              <div
                key={category.id}
                id={category.id}
                className="rounded-3xl border border-rose-200/50 bg-white/40 p-6 shadow-sm shadow-rose-900/5 backdrop-blur-sm sm:p-8"
              >
                {/* Category Card Header */}
                <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-rose-200/40 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-rose-100/60 text-gold shadow-inner">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <span className="text-[0.6rem] tracking-[0.2em] text-foreground/45 uppercase font-medium">
                        {category.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-light text-foreground sm:text-3xl">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <p className="max-w-md text-xs leading-relaxed text-foreground/65 sm:text-right">
                    {category.description}
                  </p>
                </div>

                {/* Category Options Gallery / Placeholders */}
                {imageList.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {imageList.map((img, index) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => openLightbox(category.title, imageList, index)}
                        className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-rose-200/60 bg-rose-50/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-rose-900/10 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="flex size-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md">
                            <ZoomIn className="size-4 text-gold" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-rose-200/80 bg-rose-50/30 px-6 py-10 text-center">
                    <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white/80 text-gold/80 shadow-sm">
                      <Icon className="size-6" />
                    </div>
                    <h4 className="font-serif text-lg font-normal text-foreground/80">
                      Nove opcije dolaze uskoro
                    </h4>
                    <p className="mt-1 max-w-sm text-xs text-foreground/55">
                      Uskoro dodajemo nove nijanse i varijacije za kategoriju {category.title.toLowerCase()}.
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pregled - ${lightboxState.categoryTitle}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Zatvori pregled"
            className="absolute top-4 right-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <X className="size-6" />
          </button>

          {/* Previous Image Button */}
          {lightboxState.images.length > 1 && (
            <button
              type="button"
              onClick={prevImage}
              aria-label="Prethodna slika"
              className="absolute left-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:left-8"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {/* Image Container */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative flex h-[75vh] w-[85vw] max-w-5xl items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={lightboxState.images[lightboxState.currentIndex].src}
                alt={lightboxState.images[lightboxState.currentIndex].alt}
                fill
                sizes="85vw"
                className="object-contain rounded-2xl"
                priority
              />
            </div>
            <div className="mt-4 flex flex-col items-center text-center text-white">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/60 font-medium">
                {lightboxState.categoryTitle}
              </span>
              <p className="mt-1 text-xs text-white/80">
                {`${lightboxState.currentIndex + 1} / ${lightboxState.images.length}`}
              </p>
            </div>
          </div>

          {/* Next Image Button */}
          {lightboxState.images.length > 1 && (
            <button
              type="button"
              onClick={nextImage}
              aria-label="Sljedeća slika"
              className="absolute right-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:right-8"
            >
              <ChevronRight className="size-6" />
            </button>
          )}
        </div>
      )}
    </section>
  )
}
