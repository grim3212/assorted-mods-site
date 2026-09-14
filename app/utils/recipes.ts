import type { RecipeData, RecipeSlot } from '~/types/recipe'

// Wording for a slot in text form (screen readers, summaries).
export function describeSlot(slot: RecipeSlot | null): string {
  if (!slot) return 'empty'
  const count = slot.count > 1 ? `${slot.count} ` : ''
  switch (slot.kind) {
    case 'tag':
      return `${count}any ${slot.label} (tag #${slot.tag}, ${slot.items.length} ${slot.items.length === 1 ? 'item' : 'items'})`
    case 'fluid':
      return `${count}${slot.label}`
    case 'items':
      return `${count}${slot.label || `one of ${slot.items.map(i => i.name).join(', ')}`}`
    case 'unknown':
      return slot.label || 'unknown item'
    default:
      return `${count}${slot.items[0]?.name ?? 'unknown item'}`
  }
}

export function describeResult(slot: RecipeSlot | null): string {
  if (!slot || !slot.items[0]) return 'nothing'
  return `${slot.count > 1 ? slot.count + ' ' : ''}${slot.items[0].name}`
}

// A full sentence-form description of a recipe for people who cannot see the grid.
export function describeRecipe(recipe: RecipeData): string {
  const parts: string[] = [`${recipe.typeLabel} recipe made in a ${recipe.station}.`]
  switch (recipe.type) {
    case 'shaped': {
      const grid = recipe.grid
      if (grid) {
        for (let y = 0; y < grid.height; y++) {
          const row = grid.slots.slice(y * grid.width, (y + 1) * grid.width).map(describeSlot)
          parts.push(`Row ${y + 1}: ${row.join(', ')}.`)
        }
      }
      break
    }
    case 'shapeless':
      parts.push(`Ingredients in any arrangement: ${(recipe.ingredients || []).map(describeSlot).join(', ')}.`)
      break
    case 'cooking':
      parts.push(`Input: ${describeSlot(recipe.input ?? null)}. Takes ${recipe.time} seconds and gives ${recipe.experience} experience.`)
      break
    case 'stonecutting':
      parts.push(`Input: ${describeSlot(recipe.input ?? null)}.`)
      break
    case 'smithing':
      parts.push(`Template: ${describeSlot(recipe.template ?? null)}. Base: ${describeSlot(recipe.base ?? null)}. Addition: ${describeSlot(recipe.addition ?? null)}.`)
      break
    case 'grinding_mill':
      parts.push(`Input: ${describeSlot(recipe.input ?? null)}. Tool: ${describeSlot(recipe.tool ?? null)}. Fuel: ${describeSlot(recipe.fuel ?? null)}. Takes ${recipe.time} seconds and gives ${recipe.experience} experience.`)
      break
    case 'alloy_forge':
      parts.push(`Inputs: ${(recipe.inputs || []).map(describeSlot).join(' and ')}. Fuel: ${describeSlot(recipe.fuel ?? null)}. Gives ${recipe.experience} experience.`)
      break
  }
  parts.push(`Makes ${describeResult(recipe.result)}.`)
  if (recipe.note) parts.push(recipe.note)
  return parts.join(' ')
}
