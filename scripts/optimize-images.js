import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function optimizeImages() {
  const publicDir = path.join(__dirname, '..', 'public')
  const images = [
    'img_gris_gafas.webp',
    'MB_oro.png',
    'MB_plata.png',
    'porte _lateral.png',
  ]

  for (const image of images) {
    const inputPath = path.join(publicDir, image)
    if (fs.existsSync(inputPath)) {
      const name = path.parse(image).name
      const outputPath = path.join(publicDir, `${name}-optimized.webp`)

      try {
        const info = await sharp(inputPath)
          .resize(800, 800, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({
            quality: 85,
            effort: 6,
          })
          .toFile(outputPath)

        console.log(`✅ Optimized ${image} -> ${name}-optimized.webp`)
        console.log(`   Size: ${(info.size / 1024).toFixed(2)}KB`)
      } catch (error) {
        console.error(`❌ Error optimizing ${image}:`, error.message)
      }
    }
  }
}

optimizeImages()
