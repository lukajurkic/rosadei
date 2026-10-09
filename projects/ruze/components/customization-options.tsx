'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, Ribbon, Layers, Box, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import type { ComponentType } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { ruzeTranslations } from '../translations'

export type CustomizationImages = {
  additions?: string[]
  ribbons?: string[]
  decorative_paper?: string[]
  boxes?: string[]
}

type CustomizationCategory = {
  id: 'additions' | 'ribbons' | 'decorative-paper' | 'boxes'
  title: string
  subtitle: string
  description: string
  icon: ComponentType<{ className?: string }>
  subfolder: string
  files: string[]
}

type CustomizationOptionsProps = {
  images?: CustomizationImages
}

export function CustomizationOptions({ images = {} }: CustomizationOptionsProps) {
  const { language } = useLanguage()
  const t = ruzeTranslations[language]

  const categories: CustomizationCategory[] = [
    {
      id: 'additions',
      title: t.customizationOptions.categories.additions.title,
      subtitle: t.customizationOptions.categories.additions.subtitle,
      description: t.customizationOptions.categories.additions.description,
      icon: Sparkles,
      subfolder: 'additions',
      files: images.additions || [],
    },
    {
      id: 'ribbons',
      title: t.customizationOptions.categories.ribbons.title,
      subtitle: t.customizationOptions.categories.ribbons.subtitle,
      description: t.customizationOptions.categories.ribbons.description,
      icon: Ribbon,
      subfolder: 'ribbons',
      files: images.ribbons || [],
    },
    {
      id: 'decorative-paper',
      title: t.customizationOptions.categories['decorative-paper'].title,
      subtitle: t.customizationOptions.categories['decorative-paper'].subtitle,
      description: t.customizationOptions.categories['decorative-paper'].description,
      icon: Layers,
      subfolder: 'decorative_paper',
      files: images.decorative_paper || [],
    },
    {
      id: 'boxes',
      title: t.customizationOptions.categories.boxes.title,
      subtitle: t.customizationOptions.categories.boxes.subtitle,
      description: t.customizationOptions.categories.boxes.description,
      icon: Box,
      subfolder: 'boxes',
      files: images.boxes || [],
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
            {t.customizationOptions.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-5xl">
            {t.customizationOptions.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-pretty text-foreground/65">
            {t.customizationOptions.description}
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-4 py-2 text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gold text-white shadow-md shadow-amber-900/10 font-medium'
                  : 'bg-white/60 text-foreground/70 hover:bg-white hover:text-foreground border border-rose-200/40'
              }`}
            >
              {t.customizationOptions.allOptions}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-4 py-2 text-xs tracking-wider transition-all duration-300 cursor-pointer ${
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
              src: `/images/roses/customization/${category.subfolder}/${file}`,
              alt: `${category.title} ${idx + 1} - Rosa Dei`,
            }))

            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-28 rounded-2xl border border-rose-200/50 bg-white/45 p-6 shadow-sm shadow-rose-900/5 backdrop-blur-sm sm:p-8"
              >
                {/* Category Header */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-light text-foreground sm:text-3xl">
                        {category.title}
                      </h3>
                      <p className="text-[0.62rem] tracking-[0.2em] text-foreground/50 uppercase">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="max-w-md text-xs leading-relaxed text-foreground/65 sm:text-right">
                    {category.description}
                  </p>
                </div>

                {/* Images Grid */}
                {category.files.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {category.files.map((file, index) => {
                      const src = `/images/roses/customization/${category.subfolder}/${file}`
                      return (
                        <button
                          key={file}
                          type="button"
                          onClick={() => openLightbox(category.title, imageList, index)}
                          className="group relative aspect-square overflow-hidden rounded-xl border border-rose-200/40 bg-white/60 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-md hover:shadow-rose-900/10 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer"
                        >
                          <Image
                            src={src}
                            alt={`${category.title} ${index + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="flex size-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm">
                              <ZoomIn className="size-4 text-gold" />
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex h-36 items-center justify-center rounded-xl border border-dashed border-rose-200/60 bg-rose-50/15 text-xs tracking-wider text-foreground/40 uppercase">
                    {t.collections.slideshow.noImages}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Zatvori prikaz"
            className="absolute top-4 right-4 z-50 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer"
          >
            <X className="size-5" />
          </button>

          {lightboxState.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                aria-label="Prethodna slika"
                className="absolute left-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer"
              >
                <ChevronLeft className="size-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="Sljedeća slika"
                className="absolute right-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[85vh] max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl sm:max-w-xl">
              <Image
                src={lightboxState.images[lightboxState.currentIndex].src}
                alt={lightboxState.images[lightboxState.currentIndex].alt}
                fill
                sizes="(max-width: 768px) 90vw, 600px"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-xs tracking-widest text-white/70 uppercase">
              {`${lightboxState.categoryTitle} • ${lightboxState.currentIndex + 1} / ${lightboxState.images.length}`}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
