'use client'

import { ChevronRight, Flower2, Leaf, Ribbon } from 'lucide-react'
import { useState } from 'react'
import type { ComponentType } from 'react'

type Option = {
  name: string
  swatch: string
  descriptor: string
}

type Group = {
  id: string
  title: string
  icon: ComponentType<{ className?: string }>
  options: Option[]
}

const groups: Group[] = [
  {
    id: 'ribbons',
    title: 'Silk Ribbon Finishes',
    icon: Ribbon,
    options: [
      {
        name: 'Dusty Rose Satin',
        swatch: 'linear-gradient(135deg, #e6b6bd 0%, #c98f9b 100%)',
        descriptor:
          'A heavyweight satin with a muted sheen that falls in long, soft tails.',
      },
      {
        name: 'Champagne Gold',
        swatch: 'linear-gradient(135deg, #f3e2b8 0%, #d4af37 100%)',
        descriptor:
          'Warm metallic silk reserved for celebrations and ceremonial pieces.',
      },
      {
        name: 'Ivory Habotai',
        swatch: 'linear-gradient(135deg, #fdf6ee 0%, #e8dbc9 100%)',
        descriptor:
          'Feather-light hand-torn silk with a delicate raw edge, our bridal default.',
      },
      {
        name: 'Sage Velvet',
        swatch: 'linear-gradient(135deg, #cbd6c1 0%, #94a389 100%)',
        descriptor:
          'A deeper, tactile ribbon that grounds pastel arrangements beautifully.',
      },
    ],
  },
  {
    id: 'wrapping',
    title: 'Wrapping Paper Tones',
    icon: Flower2,
    options: [
      {
        name: 'Raw Edge Linen',
        swatch: 'linear-gradient(135deg, #efe6da 0%, #d8c9b6 100%)',
        descriptor:
          'Woven linen wrap with a frayed hem for an unhurried, organic finish.',
      },
      {
        name: 'Blush Kraft',
        swatch: 'linear-gradient(135deg, #f8d5e2 0%, #e3aec2 100%)',
        descriptor:
          'Matte recycled kraft in the softest rose — our most requested wrap.',
      },
      {
        name: 'Warm Sand',
        swatch: 'linear-gradient(135deg, #f6e7d3 0%, #dcc3a3 100%)',
        descriptor:
          'A sunlit neutral that lets peach and apricot stems lead the eye.',
      },
      {
        name: 'Translucent Vellum',
        swatch: 'linear-gradient(135deg, #fefbf6 0%, #eef0ea 100%)',
        descriptor:
          'A whisper-thin frosted sheet that softens the silhouette of every stem.',
      },
    ],
  },
  {
    id: 'accents',
    title: 'Botanical Accents',
    icon: Leaf,
    options: [
      {
        name: 'Dried Lavender Sprig',
        swatch: 'linear-gradient(135deg, #ddd2e8 0%, #a294bd 100%)',
        descriptor:
          'Tucked at the collar for a quiet, lingering scent that lasts weeks.',
      },
      {
        name: 'Eucalyptus Trail',
        swatch: 'linear-gradient(135deg, #d5e0d6 0%, #8fa895 100%)',
        descriptor:
          'Long silvered branches that give the arrangement movement and air.',
      },
      {
        name: 'Bleached Bunny Tails',
        swatch: 'linear-gradient(135deg, #f7f0e2 0%, #e0d2b6 100%)',
        descriptor:
          'Soft dried plumes that add texture without weight or colour.',
      },
      {
        name: 'Pressed Wax Seal',
        swatch: 'linear-gradient(135deg, #f0cfa4 0%, #c08f4c 100%)',
        descriptor:
          'A hand-stamped seal on the card, monogrammed on request.',
      },
    ],
  },
]

function OptionRow({ option }: { option: Option }) {
  const [hoveredOption, setHoveredOption] = useState(false)

  return (
    <li
      className="relative"
      onMouseEnter={() => setHoveredOption(true)}
      onMouseLeave={() => setHoveredOption(false)}
      onFocus={() => setHoveredOption(true)}
      onBlur={() => setHoveredOption(false)}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-3 border-b border-rose-200/50 py-3.5 text-left transition-colors last:border-b-0 hover:text-foreground focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
      >
        <span className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="size-4 shrink-0 rounded-full ring-1 ring-foreground/10"
            style={{ backgroundImage: option.swatch }}
          />
          <span className="text-sm text-foreground/80">{option.name}</span>
        </span>
        <ChevronRight
          className={`size-4 shrink-0 text-foreground/30 transition-transform duration-300 ${
            hoveredOption ? 'translate-x-0.5 text-gold' : ''
          }`}
        />
      </button>

      {hoveredOption ? (
        <div
          role="tooltip"
          className="pointer-events-none absolute -top-2 left-1/2 z-30 w-64 -translate-x-1/2 -translate-y-full rounded-2xl border border-rose-200/50 bg-card/95 p-4 shadow-xl shadow-rose-900/10 backdrop-blur-md"
        >
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 size-9 shrink-0 rounded-full ring-1 ring-foreground/10"
              style={{ backgroundImage: option.swatch }}
            />
            <div>
              <p className="font-serif text-base leading-snug">{option.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-pretty text-foreground/65">
                {option.descriptor}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </li>
  )
}

export function CustomizationOptions() {
  return (
    <section
      id="customization"
      className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
            Bespoke Details
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-5xl">
            Personalize Your Arrangement
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-pretty text-foreground/65">
            Choose bespoke details for a personalized touch — hover any finish to
            preview it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.id}
                className="rounded-2xl border border-rose-200/50 bg-white/45 p-6 shadow-sm shadow-rose-900/5 backdrop-blur-sm sm:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="size-5 text-gold" />
                  <h3 className="font-serif text-xl leading-none font-normal">
                    {group.title}
                  </h3>
                </div>
                <ul>
                  {group.options.map((option) => (
                    <OptionRow key={option.name} option={option} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
