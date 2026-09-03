import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images')
const GALLERY_COMPONENT_PATH = path.join(process.cwd(), 'components', 'category-galleries.tsx')
const CUSTOMIZATION_COMPONENT_PATH = path.join(process.cwd(), 'components', 'customization-options.tsx')

// Supported image extensions to convert
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tiff', '.bmp'])

async function processSubfolder(folderName, subfolderName = null) {
  const relativeFolderPath = subfolderName ? path.join(folderName, subfolderName) : folderName
  const folderPath = path.join(IMAGES_DIR, relativeFolderPath)

  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    return null
  }

  const displayName = subfolderName ? `public/images/${folderName}/${subfolderName}` : `public/images/${folderName}`
  console.log(`\n📁 Processing subfolder: ${displayName}`)

  const files = fs.readdirSync(folderPath).filter((file) => {
    if (file.startsWith('.')) return false // skip hidden files
    const ext = path.extname(file).toLowerCase()
    return SUPPORTED_EXTENSIONS.has(ext)
  })

  const targetPrefix = subfolderName ? `${folderName}-${subfolderName}` : folderName
  // Exact pattern for ALREADY formatted WebP files: <targetPrefix>_<number>.webp
  const exactFormattedPattern = new RegExp(`^${targetPrefix}_(\\d+)\\.webp$`, 'i')

  if (files.length === 0) {
    console.log(`   No supported images found in ${relativeFolderPath}`)
    return { folderName, subfolderName, files: [] }
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

  console.log(`   Found ${formattedMap.size} existing formatted images (${targetPrefix}_1.webp to ${targetPrefix}_${maxId}.webp)`)
  console.log(`   Found ${unformattedFiles.length} new/unformatted images to convert and assign new IDs`)

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

    // Delete the original source file if it has a different name/extension
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

  console.log(`   ✅ Finished ${relativeFolderPath}: ${uniqueFiles.length} .webp images ready.`)
  return { folderName, subfolderName, files: uniqueFiles }
}

function updateGalleryComponent(folderResults) {
  if (!fs.existsSync(GALLERY_COMPONENT_PATH)) return

  let content = fs.readFileSync(GALLERY_COMPONENT_PATH, 'utf-8')
  let updated = false

  for (const res of folderResults) {
    if (!res || !res.files || res.subfolderName) continue

    const formatArray = res.files.map((f) => `  '${f}',`).join('\n')

    if (res.folderName === 'bouquets') {
      content = content.replace(
        /const bouquetFiles = \[\s*[\s\S]*?\s*\];/m,
        `const bouquetFiles = [\n${formatArray}\n];`
      )
      updated = true
    } else if (res.folderName === 'rosaries') {
      content = content.replace(
        /const rosaryFiles = \[\s*[\s\S]*?\s*\];/m,
        `const rosaryFiles = [\n${formatArray}\n];`
      )
      updated = true
    } else if (res.folderName === 'box_bouquets') {
      content = content.replace(
        /const boxBouquetsFiles = \[\s*[\s\S]*?\s*\];/m,
        `const boxBouquetsFiles = [\n${formatArray}\n];`
      )
      updated = true
    } else if (res.folderName === 'combo') {
      content = content.replace(
        /const comboFiles = \[\s*[\s\S]*?\s*\];/m,
        `const comboFiles = [\n${formatArray}\n];`
      )
      updated = true
    } else if (res.folderName === 'hair_clip_and_bow') {
      content = content.replace(
        /const hairClipAndBowFiles = \[\s*[\s\S]*?\s*\];/m,
        `const hairClipAndBowFiles = [\n${formatArray}\n];`
      )
      updated = true
    } else if (res.folderName === 'wedding_lapels') {
      content = content.replace(
        /const weddingLapelsFiles = \[\s*[\s\S]*?\s*\];/m,
        `const weddingLapelsFiles = [\n${formatArray}\n];`
      )
      updated = true
    }
  }

  if (updated) {
    fs.writeFileSync(GALLERY_COMPONENT_PATH, content, 'utf-8')
    console.log(`\n✨ Automatically updated components/category-galleries.tsx with clean, deduplicated webp paths.`)
  }
}

function updateCustomizationComponent(folderResults) {
  if (!fs.existsSync(CUSTOMIZATION_COMPONENT_PATH)) return

  let content = fs.readFileSync(CUSTOMIZATION_COMPONENT_PATH, 'utf-8')
  let updated = false

  for (const res of folderResults) {
    if (!res || !res.files || res.folderName !== 'customization') continue

    const formatArray = res.files.length > 0 ? res.files.map((f) => `  '${f}',`).join('\n') : ''

    if (res.subfolderName === 'additions') {
      content = content.replace(
        /const additionsFiles = \[\s*[\s\S]*?\s*\];/m,
        `const additionsFiles = [\n${formatArray}${formatArray ? '\n' : ''}];`
      )
      updated = true
    } else if (res.subfolderName === 'ribbons') {
      content = content.replace(
        /const ribbonsFiles = \[\s*[\s\S]*?\s*\];/m,
        `const ribbonsFiles = [\n${formatArray}${formatArray ? '\n' : ''}];`
      )
      updated = true
    } else if (res.subfolderName === 'decorative_paper') {
      content = content.replace(
        /const decorativePaperFiles = \[\s*[\s\S]*?\s*\];/m,
        `const decorativePaperFiles = [\n${formatArray}${formatArray ? '\n' : ''}];`
      )
      updated = true
    } else if (res.subfolderName === 'boxes') {
      content = content.replace(
        /const boxesFiles = \[\s*[\s\S]*?\s*\];/m,
        `const boxesFiles = [\n${formatArray}${formatArray ? '\n' : ''}];`
      )
      updated = true
    }
  }

  if (updated) {
    fs.writeFileSync(CUSTOMIZATION_COMPONENT_PATH, content, 'utf-8')
    console.log(`\n✨ Automatically updated components/customization-options.tsx with clean, deduplicated webp paths.`)
  }
}

async function main() {
  console.log('🖼️  Starting Rosa Dei Image Optimization & Renaming Script...')

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Error: Directory ${IMAGES_DIR} does not exist.`)
    process.exit(1)
  }

  const entries = fs.readdirSync(IMAGES_DIR)
  const results = []

  for (const entry of entries) {
    const fullPath = path.join(IMAGES_DIR, entry)
    if (fs.statSync(fullPath).isDirectory()) {
      const subEntries = fs.readdirSync(fullPath)
      const subDirs = subEntries.filter((s) => fs.statSync(path.join(fullPath, s)).isDirectory())

      if (subDirs.length > 0) {
        for (const subDir of subDirs) {
          const res = await processSubfolder(entry, subDir)
          if (res) results.push(res)
        }
      } else {
        const res = await processSubfolder(entry)
        if (res) results.push(res)
      }
    }
  }

  updateGalleryComponent(results)
  updateCustomizationComponent(results)

  console.log('\n🎉 Image processing completed successfully!')
}

main().catch((err) => {
  console.error('Fatal error during image processing:', err)
  process.exit(1)
})
