'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react'

const galleryFiles = [
  'gallery_1.webp',
  'gallery_2.webp',
  'gallery_3.webp',
  'gallery_4.webp',
  'gallery_5.webp',
  'gallery_6.webp',
  'gallery_7.webp',
  'gallery_8.webp',
  'gallery_9.webp',
  'gallery_10.webp',
  'gallery_11.webp',
  'gallery_12.webp',
  'gallery_13.webp',
  'gallery_14.webp',
  'gallery_19.webp',
  'gallery_20.webp',
  'gallery_21.webp',
  'gallery_22.webp',
  'gallery_23.webp',
  'gallery_24.webp',
  'gallery_25.webp',
  'gallery_26.webp',
  'gallery_27.webp',
  'gallery_28.webp',
  'gallery_29.webp',
  'gallery_30.webp',
];

type GalleryModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [shuffledFiles, setShuffledFiles] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Shuffle images randomly on open
  useEffect(() => {
    if (isOpen && galleryFiles.length > 0) {
      const copy = [...galleryFiles]
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
          ;[copy[i], copy[j]] = [copy[j], copy[i]]
      }
      setShuffledFiles(copy)
    } else {
      setShuffledFiles(galleryFiles)
    }
  }, [isOpen])

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
      aria-label="Galerija radova"
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
              Galerija Radova
            </h2>
            <p className="text-xs text-white/60">
              {shuffledFiles.length > 0
                ? `${shuffledFiles.length} fotografija u našoj ponudi`
                : 'Učitavanje galerije...'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Zatvori galeriju"
          className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          <X className="size-6" />
        </button>
      </div>

      {/* Gallery 4:3 Aspect Grid */}
      <div className="mx-auto max-w-7xl pt-6 pb-12">
        {shuffledFiles.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {shuffledFiles.map((file, index) => {
              const src = `/images/gallery/${file}`
              return (
                <button
                  key={file}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-rose-900/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                >
                  <Image
                    src={src}
                    alt={`Rosa Dei galerija radova ${index + 1}`}
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
          <div className="flex flex-col items-center justify-center py-20 text-center text-white/70">
            <p>Učitavanje galerije radova...</p>
          </div>
        )}
      </div>

      {/* Lightbox Focus View when image is clicked */}
      {lightboxIndex !== null && shuffledFiles.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Uvećani prikaz slike"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 sm:p-8"
        >
          {/* Lightbox Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Zatvori uvećani prikaz"
            className="absolute top-4 right-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <X className="size-6" />
          </button>

          {/* Previous Button */}
          {shuffledFiles.length > 1 && (
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + shuffledFiles.length) % shuffledFiles.length : 0
                )
              }
              aria-label="Prethodna slika"
              className="absolute left-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:left-8"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {/* Image Display */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative flex h-[75vh] w-[85vw] max-w-5xl items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={`/images/gallery/${shuffledFiles[lightboxIndex]}`}
                alt={`Rosa Dei galerija radova - slika ${lightboxIndex + 1}`}
                fill
                sizes="85vw"
                className="object-contain rounded-2xl"
                priority
              />
            </div>
            <p className="mt-4 text-xs tracking-wider font-medium text-white/80">
              {`${lightboxIndex + 1} / ${shuffledFiles.length}`}
            </p>
          </div>

          {/* Next Button */}
          {shuffledFiles.length > 1 && (
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % shuffledFiles.length : 0
                )
              }
              aria-label="Sljedeća slika"
              className="absolute right-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:right-8"
            >
              <ChevronRight className="size-6" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
