'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { ruzeTranslations } from '../translations'

type GalleryModalProps = {
  isOpen: boolean
  onClose: () => void
  images?: string[]
}

export function GalleryModal({ isOpen, onClose, images = [] }: GalleryModalProps) {
  const [shuffledFiles, setShuffledFiles] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = ruzeTranslations[language]

  // Shuffle images randomly on open
  useEffect(() => {
    if (isOpen && images.length > 0) {
      const copy = [...images]
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
      }
      setShuffledFiles(copy)
    } else {
      setShuffledFiles(images)
    }
  }, [isOpen, images])

  // Handle ESC key to close modal or lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null)
        } else {
          onClose()
        }
      }
      if (lightboxIndex !== null && shuffledFiles.length > 0) {
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % shuffledFiles.length : 0))
        }
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + shuffledFiles.length) % shuffledFiles.length : 0
          )
        }
      }
    },
    [isOpen, lightboxIndex, shuffledFiles.length, onClose]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.galleryModal.title}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
    >
      {/* Floating Top Bar / Close Button */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/40 pb-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
            <Images className="size-5" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-light text-white sm:text-2xl">
              {t.galleryModal.title}
            </h2>
            <p className="text-xs text-white/60">
              {shuffledFiles.length > 0
                ? `${shuffledFiles.length} ${t.galleryModal.photosSuffix}`
                : t.galleryModal.loading}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={t.galleryModal.closeAria}
          className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer"
        >
          <X className="size-6" />
        </button>
      </div>

      {/* Gallery 4:3 Aspect Grid */}
      <div className="mx-auto max-w-7xl pt-6 pb-12">
        {shuffledFiles.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {shuffledFiles.map((file, index) => {
              const src = `/images/roses/gallery/${file}`
              return (
                <button
                  key={file}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-rose-900/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`${t.galleryModal.itemAlt} ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md">
                      <ZoomIn className="size-5 text-gold" />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-2xl border border-white/10 text-sm text-white/50">
            {t.galleryModal.loading}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox View */}
      {lightboxIndex !== null && shuffledFiles[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label={t.galleryModal.closeAria}
            className="absolute top-4 right-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer"
          >
            <X className="size-6" />
          </button>

          {shuffledFiles.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(
                    (lightboxIndex - 1 + shuffledFiles.length) % shuffledFiles.length
                  )
                }}
                aria-label="Prethodna slika"
                className="absolute left-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer sm:left-8"
              >
                <ChevronLeft className="size-8" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((lightboxIndex + 1) % shuffledFiles.length)
                }}
                aria-label="Sljedeća slika"
                className="absolute right-4 z-50 flex size-14 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none cursor-pointer sm:right-8"
              >
                <ChevronRight className="size-8" />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-[88vw] max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={`/images/roses/gallery/${shuffledFiles[lightboxIndex]}`}
                alt={`${t.galleryModal.itemAlt} ${lightboxIndex + 1}`}
                fill
                sizes="(max-width: 1200px) 90vw, 1024px"
                className="object-contain"
                priority
              />
            </div>

            <p className="mt-4 text-xs tracking-widest text-white/70 uppercase">
              {`${lightboxIndex + 1} / ${shuffledFiles.length}`}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
