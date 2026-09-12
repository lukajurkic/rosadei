import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images')

// Supported image extensions to convert
const SUPPORTED_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
  '.tiff',
  '.bmp',
  '.heic',
  '.heif',
])

/**
 * Finds all directories inside IMAGES_DIR that contain images (or can contain images).
 * Recursively discovers leaf or nested directories.
 */
function getImageDirectories(dir, relativePath = '') {
  const results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const subDirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith('.'))
  const hasImages = entries.some((e) => {
    if (!e.isFile() || e.name.startsWith('.')) return false
    return SUPPORTED_EXTENSIONS.has(path.extname(e.name).toLowerCase())
  })

  if (hasImages || subDirs.length === 0) {
    if (relativePath) {
      results.push(relativePath)
    }
  }

  for (const sub of subDirs) {
    const nextRelative = relativePath ? path.join(relativePath, sub.name) : sub.name
    results.push(...getImageDirectories(path.join(dir, sub.name), nextRelative))
  }

  return Array.from(new Set(results))
}

async function processDirectory(relativeFolderPath) {
  const folderPath = path.join(IMAGES_DIR, relativeFolderPath)
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    return null
  }

  const normalizedName = relativeFolderPath.replace(/\\/g, '/')
  console.log(`\n📁 Processing folder: public/images/${normalizedName}`)

  const files = fs.readdirSync(folderPath).filter((file) => {
    if (file.startsWith('.')) return false // skip hidden files
    const ext = path.extname(file).toLowerCase()
    return SUPPORTED_EXTENSIONS.has(ext)
  })

  // Target prefix based on path (e.g. 'customization/additions' -> 'customization-additions', 'bouquets' -> 'bouquets')
  const targetPrefix = relativeFolderPath.replace(/[\\/]/g, '-')
  const exactFormattedPattern = new RegExp(`^${targetPrefix}_(\\d+)\\.webp$`, 'i')

  if (files.length === 0) {
    console.log(`   No supported images found in ${normalizedName}`)
    return { relativeFolderPath, files: [] }
  }

  const formattedMap = new Map() // ID -> filename
  const unformattedFiles = []
  let maxId = 0

  for (const file of files) {
    const match = file.match(exactFormattedPattern)
    if (match) {
      const id = parseInt(match[1], 10)
      formattedMap.set(id, file)
      if (id > maxId) {
        maxId = id
      }
    } else {
      unformattedFiles.push(file)
    }
  }

  console.log(
    `   Found ${formattedMap.size} existing formatted images (${targetPrefix}_1.webp to ${targetPrefix}_${maxId}.webp)`
  )
  if (unformattedFiles.length > 0) {
    console.log(`   Found ${unformattedFiles.length} new/unformatted images to convert and assign new IDs`)
  }

  // Sort unformatted files deterministically
  unformattedFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

  const finalWebpFiles = Array.from(formattedMap.values())
  let currentMaxId = maxId

  for (const file of unformattedFiles) {
    currentMaxId += 1
    const targetFileName = `${targetPrefix}_${currentMaxId}.webp`
    const srcPath = path.join(folderPath, file)
    const targetPath = path.join(folderPath, targetFileName)

    console.log(`   🔄 Converting & Renaming: ${file} ➔ ${targetFileName} (Assigned ID: ${currentMaxId})`)

    // Convert image to WebP format using Sharp
    await sharp(srcPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(targetPath)

    // Delete the original source file if it had a different name/extension
    if (srcPath !== targetPath && fs.existsSync(srcPath)) {
      fs.unlinkSync(srcPath)
    }

    finalWebpFiles.push(targetFileName)
  }

  // Deduplicate and sort final filenames numerically by ID
  const uniqueFiles = Array.from(new Set(finalWebpFiles)).sort((a, b) => {
    const numA = parseInt(a.match(/_(\d+)\.webp$/)?.[1] || '0', 10)
    const numB = parseInt(b.match(/_(\d+)\.webp$/)?.[1] || '0', 10)
    return numA - numB
  })

  console.log(`   ✅ Finished ${normalizedName}: ${uniqueFiles.length} .webp images ready.`)
  return { relativeFolderPath, files: uniqueFiles }
}

async function main() {
  console.log('🖼️  Starting Rosa Dei Image Optimization & Renaming Script...')

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Error: Directory ${IMAGES_DIR} does not exist.`)
    process.exit(1)
  }

  const dirs = getImageDirectories(IMAGES_DIR)

  for (const relDir of dirs) {
    await processDirectory(relDir)
  }

  console.log('\n🎉 Image processing completed successfully! All images are optimized and named.')
  console.log('💡 Note: Next.js components automatically read images from these folders — no code updates needed!')
}

main().catch((err) => {
  console.error('Fatal error during image processing:', err)
  process.exit(1)
})
