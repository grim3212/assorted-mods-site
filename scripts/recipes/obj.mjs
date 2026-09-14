// Enough Wavefront OBJ to draw the colorizer slope models: positions, texture coordinates and
// polygon faces. Materials are ignored; the caller supplies the texture.

export function parseObj(text) {
  const positions = []
  const uvs = []
  const faces = []
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const [cmd, ...args] = line.split(/\s+/)
    if (cmd === 'v') positions.push(args.slice(0, 3).map(Number))
    else if (cmd === 'vt') uvs.push(args.slice(0, 2).map(Number))
    else if (cmd === 'f') {
      const verts = args.map((token) => {
        const [p, t] = token.split('/')
        return {
          pos: positions[Number(p) - 1],
          // OBJ has no texture coordinate when the face is untextured; fall back to the corner.
          uv: t ? uvs[Number(t) - 1] : [0, 0]
        }
      })
      faces.push(verts)
    }
  }
  return faces
}
