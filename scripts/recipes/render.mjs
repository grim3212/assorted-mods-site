// Draws inventory icons the way the game's GUI does: every face is a textured parallelogram
// (orthographic projection keeps affine faces affine), lit by the two GUI lights, back faces
// culled, painter-sorted by depth. Geometry conventions are copied from the decompiled client
// (FaceInfo vertex order, FaceBakery default UVs, ModelPart.Cube layout, ItemTransform order,
// Lighting ITEMS_3D / ITEMS_FLAT, light.glsl).
import { createCanvas } from '@napi-rs/canvas'
import * as M from './math.mjs'

// ---- lighting ----------------------------------------------------------------------------

const DIFFUSE_LIGHT_0 = M.normalize([0.2, 1.0, -0.7])
const DIFFUSE_LIGHT_1 = M.normalize([-0.2, 1.0, 0.7])
const FLAT_POSE = M.mat3Mul(M.rotY(-Math.PI / 8), M.rotX(Math.PI * 3 / 4))
const ITEM_3D_POSE = M.mat3Mul(
  M.scaling3([1, -1, 1]),
  M.mat3Mul(M.rotationYXZ(1.0821041, 3.2375858, 0), M.rotationYXZ(-Math.PI / 8, Math.PI * 3 / 4, 0))
)
const LIGHTS = {
  'flat': [M.mat3Apply(FLAT_POSE, DIFFUSE_LIGHT_0), M.mat3Apply(FLAT_POSE, DIFFUSE_LIGHT_1)],
  '3d': [M.mat3Apply(ITEM_3D_POSE, DIFFUSE_LIGHT_0), M.mat3Apply(ITEM_3D_POSE, DIFFUSE_LIGHT_1)]
}

function lightFactor(lights, normal) {
  const l0 = Math.max(0, M.dot(lights[0], normal))
  const l1 = Math.max(0, M.dot(lights[1], normal))
  return Math.min(1, (l0 + l1) * 0.6 + 0.4)
}

// ---- block model elements ----------------------------------------------------------------

// FaceInfo: which corner (0 = from, 1 = to) each of the four vertices takes, per axis.
const FACE_VERTS = {
  down: [[0, 0, 1], [0, 0, 0], [1, 0, 0], [1, 0, 1]],
  up: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]],
  north: [[1, 1, 0], [1, 0, 0], [0, 0, 0], [0, 1, 0]],
  south: [[0, 1, 1], [0, 0, 1], [1, 0, 1], [1, 1, 1]],
  west: [[0, 1, 0], [0, 0, 0], [0, 0, 1], [0, 1, 1]],
  east: [[1, 1, 1], [1, 0, 1], [1, 0, 0], [1, 1, 0]]
}

const DIRECTIONS = {
  down: [0, -1, 0], up: [0, 1, 0], north: [0, 0, -1], south: [0, 0, 1], west: [-1, 0, 0], east: [1, 0, 0]
}

function defaultUV(from, to, dir) {
  switch (dir) {
    case 'down': return [from[0], 16 - to[2], to[0], 16 - from[2]]
    case 'up': return [from[0], from[2], to[0], to[2]]
    case 'north': return [16 - to[0], 16 - to[1], 16 - from[0], 16 - from[1]]
    case 'south': return [from[0], 16 - to[1], to[0], 16 - from[1]]
    case 'west': return [from[2], 16 - to[1], to[2], 16 - from[1]]
    case 'east': return [16 - to[2], 16 - to[1], 16 - from[2], 16 - from[1]]
  }
  return [0, 0, 16, 16]
}

function elementRotation(rotation) {
  if (!rotation || !rotation.angle) return null
  let matrix
  if (rotation.axis) {
    matrix = M.axisRotation(rotation.axis, M.deg(rotation.angle))
  }
  else {
    return null
  }
  if (rotation.rescale) {
    const factors = [0, 1, 2].map((axis) => {
      const unit = [0, 0, 0]
      unit[axis] = 1
      const t = M.mat3Apply(matrix, unit)
      return 1 / Math.max(Math.abs(t[0]), Math.abs(t[1]), Math.abs(t[2]))
    })
    matrix = M.mat3Mul(matrix, M.scaling3(factors))
  }
  return { origin: (rotation.origin || [8, 8, 8]).map(v => v / 16), matrix }
}

// Turns a model's elements into quads in block space (0..1).
// resolveTexture(name) -> image | null, tintFor(index) -> [r, g, b] | null
export function elementQuads(elements, resolveTexture, tintFor) {
  const quads = []
  for (const element of elements) {
    const from = element.from
    const to = element.to
    const rot = elementRotation(element.rotation)
    for (const [dir, face] of Object.entries(element.faces || {})) {
      const image = resolveTexture(face.texture)
      if (!image) continue
      const uv = face.uv || defaultUV(from, to, dir)
      const shift = ((face.rotation || 0) / 90) | 0
      const verts = []
      const uvs = []
      FACE_VERTS[dir].forEach((sel, i) => {
        let v = [
          (sel[0] ? to[0] : from[0]) / 16,
          (sel[1] ? to[1] : from[1]) / 16,
          (sel[2] ? to[2] : from[2]) / 16
        ]
        if (rot) v = M.add(M.mat3Apply(rot.matrix, M.sub(v, rot.origin)), rot.origin)
        verts.push(v)
        const s = (i + shift) % 4
        const u = (s === 0 || s === 1) ? uv[0] : uv[2]
        const w = (s === 0 || s === 3) ? uv[1] : uv[3]
        uvs.push([u / 16, w / 16])
      })
      const tint = face.tintindex !== undefined && face.tintindex >= 0 ? tintFor(face.tintindex) : null
      quads.push({ verts, uvs, images: [image], tint, direction: DIRECTIONS[dir] })
    }
  }
  return quads
}

// ---- entity (ModelPart) models -------------------------------------------------------------

function cubeQuads(box, texSize, images, partTransform, partMirror) {
  const mirror = box.mirror ?? partMirror ?? false
  const [w, h, d] = box.size
  let [minX, minY, minZ] = box.from
  let maxX = minX + w
  let maxY = minY + h
  let maxZ = minZ + d
  const grow = box.grow || 0
  minX -= grow
  minY -= grow
  minZ -= grow
  maxX += grow
  maxY += grow
  maxZ += grow
  if (mirror) [minX, maxX] = [maxX, minX]
  const t0 = [minX, minY, minZ]
  const t1 = [maxX, minY, minZ]
  const t2 = [maxX, maxY, minZ]
  const t3 = [minX, maxY, minZ]
  const l0 = [minX, minY, maxZ]
  const l1 = [maxX, minY, maxZ]
  const l2 = [maxX, maxY, maxZ]
  const l3 = [minX, maxY, maxZ]
  const [u, v] = box.uv
  const u0 = u
  const u1 = u + d
  const u2 = u + d + w
  const u22 = u + d + w + w
  const u3 = u + d + w + d
  const u4 = u + d + w + d + w
  const v0 = v
  const v1 = v + d
  const v2 = v + d + h
  const polys = [
    [[l1, l0, t0, t1], u1, v0, u2, v1, 'down'],
    [[t2, t3, l3, l2], u2, v1, u22, v0, 'up'],
    [[t0, l0, l3, t3], u0, v1, u1, v2, 'west'],
    [[t1, t0, t3, t2], u1, v1, u2, v2, 'north'],
    [[l1, t1, t2, l2], u2, v1, u3, v2, 'east'],
    [[l0, l1, l2, l3], u3, v1, u4, v2, 'south']
  ]
  const [tw, th] = texSize
  const quads = []
  for (const [vs, pu0, pv0, pu1, pv1, dir] of polys) {
    let verts = vs.map(p => M.affineApply(partTransform, M.scaleVec(p, 1 / 16)))
    let uvs = [[pu1 / tw, pv0 / th], [pu0 / tw, pv0 / th], [pu0 / tw, pv1 / th], [pu1 / tw, pv1 / th]]
    if (mirror) {
      verts = verts.reverse()
      uvs = uvs.reverse()
    }
    quads.push({ verts, uvs, images, tint: null, direction: DIRECTIONS[dir] })
  }
  return quads
}

// Quads for a transcribed entity model, in block space, before any item transform.
export function entityQuads(spec, images) {
  const quads = []
  const walk = (part, parentTransform, parentMirror, order) => {
    if (part.visible === false) return
    let local = M.translation((part.offset || [0, 0, 0]).map(v => v / 16))
    if (part.rotation && part.rotation.some(r => r)) {
      const [rx, ry, rz] = part.rotation.map(M.deg)
      local = M.affineCompose(local, M.linear(M.rotationZYX(rz, ry, rx)))
    }
    const transform = M.affineCompose(parentTransform, local)
    const mirror = part.mirror ?? parentMirror
    for (const box of part.boxes || []) {
      for (const quad of cubeQuads(box, spec.texSize, images, transform, mirror)) {
        quad.order = order.n++
        quads.push(quad)
      }
    }
    for (const child of part.children || []) walk(child, transform, mirror, order)
  }
  const order = { n: 0 }
  for (const part of spec.parts) walk(part, M.affine(), false, order)
  return quads
}

// NeoForge's per-layer `transformation` on an item model: translation, left rotation, scale,
// right rotation, applied in that order.
export function applyTransformation(quads, transformation) {
  if (!transformation) return quads
  const t = transformation.translation || [0, 0, 0]
  const left = transformation.left_rotation ? M.quatToMat3(transformation.left_rotation) : M.IDENTITY3
  const s = transformation.scale || [1, 1, 1]
  const right = transformation.right_rotation ? M.quatToMat3(transformation.right_rotation) : M.IDENTITY3
  const m = M.mat3Mul(left, M.mat3Mul(M.scaling3(s), right))
  const a = M.affine(m, t)
  return quads.map(q => ({ ...q, verts: q.verts.map(v => M.affineApply(a, v)) }))
}

// ---- OBJ meshes ----------------------------------------------------------------------------

export function objQuads(faces, image) {
  return faces
    .filter(f => f.length >= 3)
    .map(f => ({
      verts: f.map(v => v.pos),
      uvs: f.map(v => [v.uv[0], v.uv[1]]),
      images: [image],
      tint: null,
      direction: null
    }))
}

// ---- drawing --------------------------------------------------------------------------------

function snapDirection(n) {
  const ax = Math.abs(n[0])
  const ay = Math.abs(n[1])
  const az = Math.abs(n[2])
  if (ax >= ay && ax >= az) return [Math.sign(n[0]) || 1, 0, 0]
  if (ay >= az) return [0, Math.sign(n[1]) || 1, 0]
  return [0, 0, Math.sign(n[2]) || 1]
}

function geometricNormal(verts) {
  return M.normalize(M.cross(M.sub(verts[1], verts[0]), M.sub(verts[2], verts[0])))
}

// Builds a small canvas holding one face's texture region, shaded and tinted, with a one pixel
// replicated border so neighbouring faces overlap instead of leaving seams.
function faceCanvas(quad, factor) {
  const first = quad.images[0]
  const tw = first.width
  const th = first.height
  const us = quad.uvs.map(uv => uv[0] * tw)
  const vs = quad.uvs.map(uv => uv[1] * th)
  const sx = Math.floor(Math.min(...us) + 1e-4)
  const sy = Math.floor(Math.min(...vs) + 1e-4)
  const sw = Math.max(1, Math.ceil(Math.max(...us) - 1e-4) - sx)
  const sh = Math.max(1, Math.ceil(Math.max(...vs) - 1e-4) - sy)
  const canvas = createCanvas(sw + 2, sh + 2)
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  for (const image of quad.images) {
    const scaleX = image.width / tw
    const scaleY = image.height / th
    const isx = sx * scaleX
    const isy = sy * scaleY
    const isw = sw * scaleX
    const ish = sh * scaleY
    ctx.drawImage(image, isx, isy, isw, ish, 1, 1, sw, sh)
    // Replicated edges and corners.
    ctx.drawImage(image, isx, isy, scaleX, ish, 0, 1, 1, sh)
    ctx.drawImage(image, isx + isw - scaleX, isy, scaleX, ish, sw + 1, 1, 1, sh)
    ctx.drawImage(image, isx, isy, isw, scaleY, 1, 0, sw, 1)
    ctx.drawImage(image, isx, isy + ish - scaleY, isw, scaleY, 1, sh + 1, sw, 1)
    ctx.drawImage(image, isx, isy, scaleX, scaleY, 0, 0, 1, 1)
    ctx.drawImage(image, isx + isw - scaleX, isy, scaleX, scaleY, sw + 1, 0, 1, 1)
    ctx.drawImage(image, isx, isy + ish - scaleY, scaleX, scaleY, 0, sh + 1, 1, 1)
    ctx.drawImage(image, isx + isw - scaleX, isy + ish - scaleY, scaleX, scaleY, sw + 1, sh + 1, 1, 1)
  }
  const tint = quad.tint || [1, 1, 1]
  const mul = [tint[0] * factor, tint[1] * factor, tint[2] * factor]
  if (mul[0] !== 1 || mul[1] !== 1 || mul[2] !== 1) {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const px = data.data
    for (let i = 0; i < px.length; i += 4) {
      px[i] = Math.round(px[i] * mul[0])
      px[i + 1] = Math.round(px[i + 1] * mul[1])
      px[i + 2] = Math.round(px[i + 2] * mul[2])
    }
    ctx.putImageData(data, 0, 0)
  }
  return { canvas, sx, sy }
}

// Maps face-canvas pixels to screen through the three first vertices.
function solveAffine(src, dst) {
  const d1x = src[1][0] - src[0][0]
  const d1y = src[1][1] - src[0][1]
  const d2x = src[2][0] - src[0][0]
  const d2y = src[2][1] - src[0][1]
  const det = d1x * d2y - d2x * d1y
  if (Math.abs(det) < 1e-9) return null
  const D1x = dst[1][0] - dst[0][0]
  const D1y = dst[1][1] - dst[0][1]
  const D2x = dst[2][0] - dst[0][0]
  const D2y = dst[2][1] - dst[0][1]
  // [D1 D2] = Mm * [d1 d2]  =>  Mm = [D1 D2] * inv([d1 d2])
  const ia = d2y / det
  const ib = -d1y / det
  const ic = -d2x / det
  const id = d1x / det
  const a = D1x * ia + D2x * ib
  const c = D1x * ic + D2x * id
  const b = D1y * ia + D2y * ib
  const d = D1y * ic + D2y * id
  const e = dst[0][0] - (a * src[0][0] + c * src[0][1])
  const f = dst[0][1] - (b * src[0][0] + d * src[0][1])
  return [a, b, c, d, e, f]
}

function drawQuad(ctx, quad, points, factor) {
  const face = faceCanvas(quad, factor)
  const tw = quad.images[0].width
  const th = quad.images[0].height
  const src = quad.uvs.map(uv => [uv[0] * tw - face.sx + 1, uv[1] * th - face.sy + 1])
  const affine = solveAffine(src, points)
  if (!affine) return
  // Grow the clip a hair so anti-aliased edges of neighbouring faces overlap.
  const cx = points.reduce((s, p) => s + p[0], 0) / points.length
  const cy = points.reduce((s, p) => s + p[1], 0) / points.length
  ctx.save()
  ctx.beginPath()
  points.forEach((p, i) => {
    const dx = p[0] - cx
    const dy = p[1] - cy
    const len = Math.hypot(dx, dy) || 1
    const x = p[0] + dx / len * 0.35
    const y = p[1] + dy / len * 0.35
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  })
  ctx.closePath()
  ctx.clip()
  ctx.setTransform(...affine)
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(face.canvas, 0, 0)
  ctx.restore()
}

// Renders a 3D layer into ctx: quads in block space, the model's gui ItemTransform, and which
// light set applies. `size` is the pixel size of the slot (16 GUI pixels).
export function drawQuadLayer(ctx, size, quads, gui, light = '3d') {
  const rotation = gui ? M.rotationXYZ(gui.rotation[0], gui.rotation[1], gui.rotation[2]) : M.IDENTITY3
  const scale = gui ? gui.scale : [1, 1, 1]
  const translation = gui ? gui.translation : [0, 0, 0]
  const lights = LIGHTS[light] || LIGHTS['3d']
  const transformed = []
  for (const quad of quads) {
    const verts = quad.verts.map(v => M.add(translation, M.mat3Apply(rotation, M.mulVec(scale, M.sub(v, [0.5, 0.5, 0.5])))))
    const normal = geometricNormal(verts)
    if (!(normal[2] > 1e-6)) continue
    // The GUI shader lights the quad's axis direction (in model space) rotated into view space,
    // where the y axis is flipped by the GUI's scale(16, -16, 16).
    const modelDir = quad.direction || snapDirection(geometricNormal(quad.verts))
    const viewDir = M.mat3Apply(rotation, modelDir)
    const factor = lightFactor(lights, M.normalize([viewDir[0], -viewDir[1], viewDir[2]]))
    const depth = verts.reduce((s, v) => s + v[2], 0) / verts.length
    const points = verts.map(v => [size / 2 + size * v[0], size / 2 - size * v[1]])
    transformed.push({ quad, points, factor, depth, order: quad.order || 0 })
  }
  transformed.sort((a, b) => (Math.abs(a.depth - b.depth) < 1e-6 ? a.order - b.order : a.depth - b.depth))
  for (const t of transformed) drawQuad(ctx, t.quad, t.points, t.factor)
}

// Composites flat texture layers at their native resolution.
export function renderFlat(layers) {
  const width = Math.max(...layers.map(l => l.image.width))
  const height = Math.max(...layers.map(l => l.image.height))
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  for (const layer of layers) {
    if (layer.tint) {
      const tmp = createCanvas(width, height)
      const tctx = tmp.getContext('2d')
      tctx.imageSmoothingEnabled = false
      tctx.drawImage(layer.image, 0, 0, width, height)
      const data = tctx.getImageData(0, 0, width, height)
      const px = data.data
      for (let i = 0; i < px.length; i += 4) {
        px[i] = Math.round(px[i] * layer.tint[0])
        px[i + 1] = Math.round(px[i + 1] * layer.tint[1])
        px[i + 2] = Math.round(px[i + 2] * layer.tint[2])
      }
      tctx.putImageData(data, 0, 0)
      ctx.drawImage(tmp, 0, 0)
    }
    else {
      ctx.drawImage(layer.image, 0, 0, width, height)
    }
  }
  return canvas
}

// Renders a mix of flat and 3D layers into one square icon.
export function renderIcon(layers, size) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  for (const layer of layers) {
    if (layer.kind === 'flat') {
      const flat = renderFlat(layer.layers)
      ctx.drawImage(flat, 0, 0, size, size)
    }
    else {
      drawQuadLayer(ctx, size, layer.quads, layer.gui, layer.light)
    }
  }
  return canvas
}
