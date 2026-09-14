// Small 3D helpers that follow JOML's conventions (right-handed rotations, matrices applied to
// column vectors), so the renderer can copy Minecraft's transform order literally.

export function add(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
}

export function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
}

export function scaleVec(a, s) {
  return [a[0] * s, a[1] * s, a[2] * s]
}

export function mulVec(a, b) {
  return [a[0] * b[0], a[1] * b[1], a[2] * b[2]]
}

export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

export function cross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
}

export function length(a) {
  return Math.hypot(a[0], a[1], a[2])
}

export function normalize(a) {
  const l = length(a)
  return l === 0 ? [0, 0, 0] : [a[0] / l, a[1] / l, a[2] / l]
}

// 3x3 matrices as row arrays.
export const IDENTITY3 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

export function rotX(t) {
  const c = Math.cos(t)
  const s = Math.sin(t)
  return [[1, 0, 0], [0, c, -s], [0, s, c]]
}

export function rotY(t) {
  const c = Math.cos(t)
  const s = Math.sin(t)
  return [[c, 0, s], [0, 1, 0], [-s, 0, c]]
}

export function rotZ(t) {
  const c = Math.cos(t)
  const s = Math.sin(t)
  return [[c, -s, 0], [s, c, 0], [0, 0, 1]]
}

export function mat3Mul(a, b) {
  const out = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      out[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j]
    }
  }
  return out
}

export function mat3Apply(m, v) {
  return [
    m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
    m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
    m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2]
  ]
}

export function scaling3(s) {
  return [[s[0], 0, 0], [0, s[1], 0], [0, 0, s[2]]]
}

// JOML Quaternionf.rotationXYZ(x, y, z) is Rx * Ry * Rz.
export function rotationXYZ(x, y, z) {
  return mat3Mul(rotX(x), mat3Mul(rotY(y), rotZ(z)))
}

// JOML rotationZYX(z, y, x) is Rz * Ry * Rx.
export function rotationZYX(z, y, x) {
  return mat3Mul(rotZ(z), mat3Mul(rotY(y), rotX(x)))
}

// JOML Matrix.rotateYXZ(y, x, z) post-multiplies Ry * Rx * Rz.
export function rotationYXZ(y, x, z) {
  return mat3Mul(rotY(y), mat3Mul(rotX(x), rotZ(z)))
}

export function axisRotation(axis, t) {
  return axis === 'x' ? rotX(t) : axis === 'y' ? rotY(t) : rotZ(t)
}

export function quatToMat3([x, y, z, w]) {
  const l = Math.hypot(x, y, z, w) || 1
  x /= l
  y /= l
  z /= l
  w /= l
  return [
    [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
    [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
    [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)]
  ]
}

export function deg(d) {
  return d * Math.PI / 180
}

// An affine transform: p' = m * p + t.
export function affine(m = IDENTITY3, t = [0, 0, 0]) {
  return { m, t }
}

export function affineApply(a, p) {
  return add(mat3Apply(a.m, p), a.t)
}

// outer(inner(p))
export function affineCompose(outer, inner) {
  return { m: mat3Mul(outer.m, inner.m), t: add(mat3Apply(outer.m, inner.t), outer.t) }
}

export function translation(t) {
  return affine(IDENTITY3, t)
}

export function linear(m) {
  return affine(m, [0, 0, 0])
}
