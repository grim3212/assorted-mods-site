// Texture loading with the one bit of .mcmeta handling icons need: animated textures are strips
// of frames, and an icon shows the first one.
import { createCanvas, loadImage } from '@napi-rs/canvas'
import { parseId } from './resources.mjs'

export class Textures {
  constructor(res) {
    this.res = res
    this.cache = new Map()
    this.missing = new Set()
  }

  // Accepts 'ns:block/foo' (a texture id) or 'ns:textures/model/foo.png' (a full path).
  static path(textureId) {
    const { ns, path } = parseId(textureId)
    const rel = path.startsWith('textures/') ? path : `textures/${path}`
    return `assets/${ns}/${rel.endsWith('.png') ? rel : rel + '.png'}`
  }

  async load(textureId) {
    if (this.cache.has(textureId)) return this.cache.get(textureId)
    const path = Textures.path(textureId)
    const data = this.res.read(path)
    let image = null
    if (data) {
      image = await loadImage(data)
      const meta = this.res.json(path + '.mcmeta')
      if (meta?.animation && image.height > image.width) {
        // First frame of an animation strip. The frame is square unless the animation says otherwise.
        const frameW = meta.animation.width || image.width
        const frameH = meta.animation.height || image.width
        const canvas = createCanvas(frameW, frameH)
        canvas.getContext('2d').drawImage(image, 0, 0, frameW, frameH, 0, 0, frameW, frameH)
        image = canvas
      }
    }
    else {
      this.missing.add(textureId)
    }
    this.cache.set(textureId, image)
    return image
  }
}
