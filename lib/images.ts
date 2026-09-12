import fs from 'node:fs'
import path from 'node:path'

const IMAGES_ROOT = path.join(process.cwd(), 'public', 'images')

const SUPPORTED_EXTENSIONS = new Set(['.webp', '.jpg', '.jpeg', '.png', '.avif'])

/**
 * Reads all image filenames from a given subfolder under `public/images/`.
 * Sorts them numerically by ID (e.g. bouquets_1.webp, bouquets_2.webp, bouquets_10.webp).
 */
export function getImagesFromFolder(subfolder: string): string[] {
  const folderPath = path.join(IMAGES_ROOT, subfolder)

  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    return []
  }

  const entries = fs.readdirSync(folderPath)

  const files = entries.filter((file) => {
    if (file.startsWith('.')) return false
    const ext = path.extname(file).toLowerCase()
    return SUPPORTED_EXTENSIONS.has(ext)
  })

  // Sort files numerically if they have trailing IDs like `_1.webp`, `_2.webp`
  return files.sort((a, b) => {
    const numA = parseInt(a.match(/_(\d+)\.[^.]+$/)?.[1] || '0', 10)
    const numB = parseInt(b.match(/_(\d+)\.[^.]+$/)?.[1] || '0', 10)
    if (numA !== numB) {
      return numA - numB
    }
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  })
}

export type CategoryData = {
  id: string
  folder: string
  title: string
  description: string
  alt: string
  slides: { src: string; alt: string }[]
}

export const CATEGORY_DEFINITIONS: Omit<CategoryData, 'slides'>[] = [
  {
    id: 'bouquets',
    folder: 'bouquets',
    title: 'Buketi',
    description: 'Naš prepoznatljivi stil izrade — čvrstoća, kvaliteta, kreativnost i ručna izrada.',
    alt: 'Buket - Rosa Dei',
  },
  {
    id: 'krunice',
    folder: 'rosaries',
    title: 'Krunice',
    description:
      'Pogledajte krunice koje možete već danas naručiti zasebno ili kombinirati u paketu s buketom za predivan poklon za razne prilike.',
    alt: 'Krunica - Rosa Dei',
  },
  {
    id: 'box-bouquets',
    folder: 'box_bouquets',
    title: 'Box Buketi',
    description:
      'Naši box buketi, slični kao buketi, ali zanimljiviji i drugačiji. Pogledajte našu ponudu box buketa i naručite svoj danas.',
    alt: 'Box Buket - Rosa Dei',
  },
  {
    id: 'combo',
    folder: 'combo',
    title: 'Paketi',
    description: 'Prekrasne kombinacije buketa, krunica i dodataka u usklađenim paketima.',
    alt: 'Komplet - Rosa Dei',
  },
  {
    id: 'hair-clip-and-bow',
    folder: 'hair_clip_and_bow',
    title: 'Kopče i Mašne za kosu',
    description: 'Ručno rađene kopče i elegantne mašne za svečane prilike.',
    alt: 'Kopče i Mašne za kosu - Rosa Dei',
  },
  {
    id: 'wedding-lapels',
    folder: 'wedding_lapels',
    title: 'Reveri i Svadbeni Ukrasi',
    description: 'Personalizirani reveri i cvjetni ukrasi za vjenčanja.',
    alt: 'Reveri - Rosa Dei',
  },
]

/**
 * Returns categories with their dynamically scanned image slides from public/images/.
 * Filters out categories that currently have 0 images.
 */
export function getCategoryGalleriesData(): CategoryData[] {
  return CATEGORY_DEFINITIONS.map((cat) => {
    const files = getImagesFromFolder(cat.folder)
    const slides = files.map((file) => ({
      src: `/images/${cat.folder}/${file}`,
      alt: cat.alt,
    }))
    return {
      ...cat,
      slides,
    }
  }).filter((cat) => cat.slides.length > 0)
}
