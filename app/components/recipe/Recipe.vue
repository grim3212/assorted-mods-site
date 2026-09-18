<template>
  <div
    ref="shell"
    class="recipe-shell"
  >
    <figure
      v-if="recipe && layout"
      class="recipe"
      :aria-label="`${recipe.typeLabel} recipe for ${describeResult(recipe.result)}`"
    >
      <figcaption class="recipe__head">
        <span class="recipe__type">{{ recipe.typeLabel }}</span>
        <span class="recipe__station">{{ recipe.station }}</span>
      </figcaption>

      <!-- The real container GUI, cropped to its recipe area, with the slots laid over it at the
           positions the menu uses. -->
      <div
        class="recipe__gui"
        :style="{ '--gui-scale': scale, 'width': `calc(${layout.width} * var(--px))`, 'height': `calc(${layout.height} * var(--px))` }"
        role="group"
        :aria-label="`${recipe.station} slots`"
      >
        <img
          :src="layout.image"
          alt=""
          class="recipe__bg"
          :width="layout.width"
          :height="layout.height"
          loading="lazy"
          decoding="async"
        >
        <RecipeSlot
          v-for="placed in placedSlots"
          :key="placed.key"
          :entry="placed.entry"
          :label="placed.label"
          :output="placed.output"
          :style="{ left: `calc(${placed.x - 1} * var(--px))`, top: `calc(${placed.y - 1} * var(--px))` }"
        />
        <span
          v-if="recipe.type === 'shapeless'"
          class="recipe__shapeless"
          tabindex="0"
          role="img"
          aria-label="Shapeless recipe"
        >
          <span aria-hidden="true">&#8646;</span>
          <span
            class="recipe__shapeless-tip"
            aria-hidden="true"
          >Shapeless Recipe</span>
        </span>
        <p
          v-if="meta.length"
          class="recipe__meta"
        >
          {{ meta.join(' \u00b7 ') }}
        </p>
      </div>
      <p
        v-if="recipe.note"
        class="recipe__note"
      >
        {{ recipe.note }}
      </p>
      <p class="sr-only">
        {{ describeRecipe(recipe) }}
      </p>
    </figure>
    <p
      v-else
      class="recipe recipe--missing"
      role="note"
    >
      The recipe <code>{{ id }}</code> is not available.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import guiLayouts from '~/data/gui.json'
import type { GuiLayout, RecipeData, RecipeSlot } from '~/types/recipe'
import { describeRecipe, describeResult } from '~/utils/recipes'

const props = defineProps<{
  /** Recipe id as the game knows it, e.g. "assortedcore:machine_core". */
  id: string
}>()

// Every exported recipe as a lazy chunk, so a page only loads the ones it shows.
const modules = import.meta.glob<RecipeData>('../../data/recipes/**/*.json', { import: 'default' })

const { data: recipe } = await useAsyncData(`recipe:${props.id}`, async () => {
  const [ns, path] = props.id.includes(':') ? props.id.split(':', 2) : ['minecraft', props.id]
  const loader = modules[`../../data/recipes/${ns}/${path}.json`]
  if (!loader) {
    console.warn(`[recipe] no exported data for ${props.id}; run "yarn recipes"`)
    return null
  }
  return await loader()
})

const layouts = guiLayouts as Record<string, GuiLayout>
const layout = computed<GuiLayout | null>(() => (recipe.value ? layouts[recipe.value.gui] ?? null : null))

// GUI pixels are drawn at an integer scale: 2 by default, 3 once the wrapper has room for it.
const shell = ref<HTMLElement | null>(null)
const scale = ref(2)
let observer: ResizeObserver | null = null

function fit() {
  const l = layout.value
  const width = shell.value?.clientWidth ?? 0
  scale.value = l && width >= l.width * 3 ? 3 : 2
}

onMounted(() => {
  fit()
  if (typeof ResizeObserver !== 'undefined' && shell.value) {
    observer = new ResizeObserver(fit)
    observer.observe(shell.value)
  }
})

watch(layout, fit)

onBeforeUnmount(() => {
  observer?.disconnect()
})

interface PlacedSlot {
  key: string
  entry: RecipeSlot | null
  label: string
  output?: boolean
  x: number
  y: number
}

function at(slots: GuiLayout['slots'], role: string, index = 0): [number, number] {
  const value = slots[role]
  if (!value) return [0, 0]
  const point = Array.isArray(value[0]) ? (value as number[][])[index] : (value as number[])
  return [point?.[0] ?? 0, point?.[1] ?? 0]
}

// Shaped patterns keep their layout in the top-left of the grid; shapeless ones fill it in order.
const craftingSlots = computed<(RecipeSlot | null)[]>(() => {
  const out: (RecipeSlot | null)[] = Array.from({ length: 9 }, () => null)
  const r = recipe.value
  if (!r) return out
  if (r.type === 'shaped' && r.grid) {
    for (let y = 0; y < r.grid.height && y < 3; y++) {
      for (let x = 0; x < r.grid.width && x < 3; x++) {
        out[y * 3 + x] = r.grid.slots[y * r.grid.width + x] ?? null
      }
    }
  }
  else if (r.type === 'shapeless') {
    (r.ingredients || []).slice(0, 9).forEach((slot, i) => {
      out[i] = slot
    })
  }
  return out
})

const placedSlots = computed<PlacedSlot[]>(() => {
  const r = recipe.value
  const l = layout.value
  if (!r || !l) return []
  const place = (key: string, entry: RecipeSlot | null | undefined, label: string, role: string, index = 0, output = false): PlacedSlot => {
    const [x, y] = at(l.slots, role, index)
    return { key, entry: entry ?? null, label, output, x, y }
  }
  const out: PlacedSlot[] = []
  switch (r.type) {
    case 'shaped':
    case 'shapeless':
      craftingSlots.value.forEach((entry, i) => {
        out.push(place(`grid-${i}`, entry, `Row ${Math.floor(i / 3) + 1}, column ${(i % 3) + 1}`, 'grid', i))
      })
      break
    case 'cooking':
      out.push(place('input', r.input, 'Input', 'input'))
      out.push(place('fuel', r.fuel, 'Fuel', 'fuel'))
      break
    case 'stonecutting':
      out.push(place('input', r.input, 'Input', 'input'))
      break
    case 'smithing':
      out.push(place('template', r.template, 'Template', 'template'))
      out.push(place('base', r.base, 'Base item', 'base'))
      out.push(place('addition', r.addition, 'Addition', 'addition'))
      break
    case 'grinding_mill':
      out.push(place('tool', r.tool, 'Tool', 'tool'))
      out.push(place('input', r.input, 'Input', 'input'))
      out.push(place('fuel', r.fuel, 'Fuel', 'fuel'))
      break
    case 'alloy_forge':
      out.push(place('input1', r.inputs?.[0], 'First input', 'input1'))
      out.push(place('input2', r.inputs?.[1], 'Second input', 'input2'))
      out.push(place('fuel', r.fuel, 'Fuel', 'fuel'))
      break
    case 'cuisine_machine':
      out.push(place('machine', r.machine, 'Machine', 'station'))
      out.push(place('input', r.input, 'Input', 'input'))
      break
  }
  out.push(place('result', r.result, 'Result', 'result', 0, true))
  return out.filter(p => p.entry)
})

// Experience, and a time only where it is fixed. A furnace or a mill runs at a speed that depends
// on the machine tier, but a cuisine machine always takes the same number of ticks.
const meta = computed(() => {
  const r = recipe.value
  if (!r) return []
  const out: string[] = []
  if (r.type === 'cuisine_machine' && r.time) out.push(`${r.time} seconds`)
  if (r.experience) out.push(`${r.experience} XP`)
  return out
})
</script>

<style scoped>
/* The shell is what the GUI scale is measured against. It grows in flex rows so a lone recipe
   can use 3x, and shrinks to a grid cell. */
.recipe-shell {
  flex: 1 1 auto;
  max-width: 100%;
}

.recipe {
  display: inline-flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0.5rem 0;
  max-width: 100%;
  color: var(--color-gray-300);
}

.recipe--missing {
  display: block;
  font-size: 0.85rem;
  color: var(--color-amber-300);
}

.recipe__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.6rem;
  font-size: 0.75rem;
  line-height: 1.2;
}

.recipe__type {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-gray-200);
}

.recipe__station {
  color: var(--color-gray-400);
}

.recipe__gui {
  position: relative;
  flex: none;
  --gui-scale: 2;
  --px: calc(var(--gui-scale) * 1px);
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 0.5), 0 4px 14px rgb(0 0 0 / 0.35);
}

.recipe__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  border-radius: inherit;
  /* The layout's #content img rule centres images; this one is a background. */
  margin: 0 !important;
}

.recipe__shapeless {
  position: absolute;
  top: calc(1 * var(--px));
  right: calc(2 * var(--px));
  padding: 0 calc(1 * var(--px));
  font-size: calc(7 * var(--px));
  line-height: 1.1;
  font-weight: 700;
  color: #3f3f3f;
  cursor: help;
  border-radius: 2px;
}

.recipe__shapeless:focus-visible {
  outline: 2px solid var(--color-blue-400);
}

/* The same look as the slot tooltips, shown on hover or keyboard focus. */
.recipe__shapeless-tip {
  position: absolute;
  z-index: 40;
  right: 0;
  bottom: calc(100% + 0.4rem);
  display: none;
  width: max-content;
  padding: 0.35rem 0.6rem;
  border: 2px solid rgb(80 0 255 / 0.45);
  border-radius: 0.25rem;
  background: rgb(16 0 16 / 0.95);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.3;
  box-shadow: 0 6px 18px rgb(0 0 0 / 0.5);
  pointer-events: none;
}

.recipe__shapeless:hover .recipe__shapeless-tip,
.recipe__shapeless:focus-visible .recipe__shapeless-tip {
  display: block;
}

/* XP and time, drawn on the panel the way the game's GUI text is. */
.recipe__meta {
  position: absolute;
  left: calc(5 * var(--px));
  bottom: calc(3 * var(--px));
  margin: 0;
  font-size: calc(6.5 * var(--px));
  line-height: 1;
  font-weight: 600;
  color: #404040;
  white-space: nowrap;
}

.recipe__note {
  max-width: 24rem;
  font-size: 0.8rem;
  line-height: 1.35;
  color: var(--color-gray-400);
}
</style>
