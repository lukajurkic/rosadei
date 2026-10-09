'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState, useRef } from 'react'
import type { CategoryData } from '@/lib/images'
import { useLanguage } from '@/context/LanguageContext'
import { ruzeTranslations } from '../translations'

type CategorySlideshowProps = {
  category: CategoryData
}

export function CategorySlideshow({ category }: CategorySlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const { language } = useLanguage()
  const t = ruzeTranslations[language]
  const total = category.slides.length

  // Touch tracking for swipe gestures on mobile
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const advance = useCallback(() => {
    if (total <= 1) return
    setCurrentSlide((index) => (index + 1) % total)
  }, [total])

  const retreat = useCallback(() => {
    if (total <= 1) return
    setCurrentSlide((index) => (index - 1 + total) % total)
  }, [total])

  // Autoplay timer with pause-on-hover
  useEffect(() => {
    if (total <= 1 || isHovered) return
    const timer = setInterval(advance, 4500)
    return () => clearInterval(timer)
  }, [advance, isHovered, total, currentSlide])

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      advance() // swiped left -> next
    } else if (distance < -minSwipeDistance) {
      retreat() // swiped right -> prev
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  if (total === 0) {
    return (
      <div className="mx-auto flex aspect-[4/3] max-w-2xl items-center justify-center rounded-2xl border border-rose-200/50 bg-rose-50/20 text-xs tracking-wider text-foreground/40 uppercase">
        {t.collections.slideshow.noImages}
      </div>
    )
  }

  return (
    <div
      className="relative mx-auto max-w-2xl select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Clickable Image Container - Advances to next image on click */}
      <button
        type="button"
        onClick={advance}
        aria-label={`${t.collections.slideshow.nextImageAria} ${category.title}`}
        className="relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl border border-rose-200/50 shadow-lg shadow-rose-900/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-rose-900/15 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {category.slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            priority={index === 0}
            className={`object-cover transition-opacity duration-700 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Subtle gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent"
        />

        {/* Slide counter badge - subtle and muted */}
        <span className="absolute bottom-3.5 left-4 text-[0.58rem] tracking-[0.22em] text-white/40 uppercase select-none">
          {`${currentSlide + 1} / ${total}`}
        </span>
      </button>

      {/* Indicator dots */}
      {total > 1 && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {category.slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`${t.collections.slideshow.goToImageAria} ${index + 1} (${category.title})`}
              aria-current={index === currentSlide}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none ${
                index === currentSlide
                  ? 'w-8 bg-gold'
                  : 'w-1.5 bg-foreground/20 hover:bg-foreground/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
