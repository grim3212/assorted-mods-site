<template>
  <div
    v-if="entry"
    class="slot-wrap"
  >
    <button
      ref="button"
      type="button"
      class="slot"
      :class="{ 'slot--open': open }"
      :aria-label="ariaLabel"
      :aria-describedby="tooltipId"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @focus="focused = true"
      @blur="focused = false"
      @click="toggle"
      @keydown.escape.prevent="close"
    >
      <img
        v-if="current && current.icon && !broken"
        :src="current.icon.src"
        alt=""
        class="slot__icon"
        :class="{ pixelated: current.icon.pixelated }"
        loading="lazy"
        decoding="async"
        @error="broken = true"
      >
      <span
        v-else
        class="slot__fallback"
        aria-hidden="true"
      >{{ fallbackText }}</span>
      <span
        v-if="entry.count > 1"
        class="slot__count"
        aria-hidden="true"
      >{{ entry.count }}</span>
      <span
        v-if="isTag || isFluid || isMulti"
        class="slot__badge"
        aria-hidden="true"
      >{{ isTag ? '#' : isFluid ? '~' : '&#8801;' }}</span>
    </button>

    <div
      :id="tooltipId"
      ref="tip"
      role="tooltip"
      class="tip"
      :class="{ 'tip--below': below }"
      :style="{ '--shift': `${shift}px` }"
      :hidden="!open"
    >
      <p class="tip__name">
        {{ current ? current.name : (entry.label || 'Unknown item') }}
      </p>
      <p
        v-if="current"
        class="tip__id"
      >
        <template
          v-for="(part, i) in breakable(current.id)"
          :key="i"
        >
          {{ part }}<wbr>
        </template>
      </p>
      <p
        v-if="isTag"
        class="tip__accepts"
      >
        Accepts any <strong>{{ entry.label }}</strong>: tag
        <span class="tip__tagid">#<template
          v-for="(part, i) in breakable(entry.tag || '')"
          :key="i"
        >{{ part }}<wbr></template></span>
      </p>
      <p
        v-else-if="isFluid"
        class="tip__accepts"
      >
        Accepts <strong>{{ entry.label }}</strong>
      </p>
      <p
        v-else-if="isMulti"
        class="tip__accepts"
      >
        Accepts <strong>{{ entry.label || 'one of several items' }}</strong>
      </p>
      <p
        v-if="entry.count > 1"
        class="tip__accepts"
      >
        Quantity: {{ entry.count }}
      </p>
      <p
        v-if="entry.note"
        class="tip__note"
      >
        {{ entry.note }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { RecipeSlot } from '~/types/recipe'
import { describeSlot } from '~/utils/recipes'

const props = defineProps<{
  entry: RecipeSlot | null
  /** Where the slot sits, read out before its contents, e.g. "Row 1, column 2". */
  label?: string
  output?: boolean
}>()

const tooltipId = useId()
const button = ref<HTMLButtonElement | null>(null)
const tip = ref<HTMLElement | null>(null)

const hover = ref(false)
const focused = ref(false)
const pinned = ref(false)
const broken = ref(false)
const index = ref(0)
const below = ref(false)
const shift = ref(0)

const isTag = computed(() => props.entry?.kind === 'tag')
const isFluid = computed(() => props.entry?.kind === 'fluid')
const isMulti = computed(() => props.entry?.kind === 'items' && (props.entry?.items.length ?? 0) > 1)
const items = computed(() => props.entry?.items ?? [])
const current = computed(() => (items.value.length ? items.value[index.value % items.value.length] ?? null : null))
const open = computed(() => Boolean(props.entry) && (hover.value || focused.value || pinned.value))

const ariaLabel = computed(() => {
  const where = props.output ? 'Result' : props.label || 'Slot'
  return `${where}: ${describeSlot(props.entry)}`
})

// Ids only get to wrap after a namespace or path separator, never inside a word.
function breakable(id: string): string[] {
  return id.split(/(?<=[:/])/)
}

const fallbackText = computed(() => {
  const name = current.value?.name || props.entry?.label || '?'
  const words = name.split(/\s+/).filter(Boolean)
  return words.length > 1 ? words.slice(0, 2).map(w => w[0]).join('').toUpperCase() : name.slice(0, 2).toUpperCase()
})

// Tags cycle through their members like the in-game recipe viewers do, paused while the slot is
// being looked at, and never for people who asked for reduced motion.
let timer: ReturnType<typeof setInterval> | null = null
let reducedMotion = false

function startCycle() {
  stopCycle()
  if (items.value.length < 2 || reducedMotion) return
  timer = setInterval(() => {
    if (!open.value) index.value = (index.value + 1) % items.value.length
  }, 1200)
}

function stopCycle() {
  if (timer) clearInterval(timer)
  timer = null
}

watch(() => current.value?.id, () => {
  broken.value = false
})

watch(() => props.entry, () => {
  index.value = 0
  startCycle()
})

function toggle() {
  pinned.value = !pinned.value
}

function close() {
  pinned.value = false
  hover.value = false
}

// Keep the tooltip on screen: above the slot when there is room, otherwise below, and shifted
// sideways so it never leaves the viewport on narrow screens.
async function place() {
  await nextTick()
  const el = tip.value
  const anchor = button.value
  if (!el || !anchor || !open.value) return
  below.value = false
  shift.value = 0
  await nextTick()
  const slotRect = anchor.getBoundingClientRect()
  const rect = el.getBoundingClientRect()
  if (rect.top < 8 && slotRect.bottom + rect.height + 8 < window.innerHeight) below.value = true
  const margin = 8
  if (rect.left < margin) shift.value = margin - rect.left
  else if (rect.right > window.innerWidth - margin) shift.value = window.innerWidth - margin - rect.right
}

watch(open, (value) => {
  if (value) place()
})

function onDocumentPointer(event: PointerEvent) {
  if (!pinned.value) return
  const target = event.target as Node | null
  if (target && button.value?.contains(target)) return
  pinned.value = false
}

onMounted(() => {
  reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  startCycle()
  document.addEventListener('pointerdown', onDocumentPointer)
})

onBeforeUnmount(() => {
  stopCycle()
  document.removeEventListener('pointerdown', onDocumentPointer)
})
</script>

<style scoped>
/* One GUI slot: an 18x18 frame drawn by the background, so the button itself is invisible and
   only adds the hover/focus highlight the game shows. */
.slot-wrap {
  position: absolute;
  width: calc(18 * var(--px));
  height: calc(18 * var(--px));
}

.slot {
  position: absolute;
  inset: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: help;
  color: #fff;
}

.slot::after {
  content: '';
  position: absolute;
  inset: var(--px);
  background: rgb(255 255 255 / 0);
  pointer-events: none;
}

.slot:hover::after,
.slot--open::after {
  background: rgb(255 255 255 / 0.45);
}

.slot:focus-visible {
  outline: 2px solid var(--color-blue-400);
  outline-offset: 1px;
}

.slot__icon {
  position: absolute;
  left: var(--px);
  top: var(--px);
  width: calc(16 * var(--px));
  height: calc(16 * var(--px));
  object-fit: contain;
  /* The layout's #content img rule adds margins and rounding; slots are exact. */
  margin: 0 !important;
  border-radius: 0 !important;
}

.pixelated {
  image-rendering: pixelated;
}

.slot__fallback {
  position: absolute;
  inset: var(--px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(6 * var(--px));
  font-weight: 700;
  line-height: 1;
  color: #3f3f3f;
}

.slot__count {
  position: absolute;
  right: calc(1 * var(--px));
  bottom: calc(1 * var(--px));
  font-size: calc(7 * var(--px));
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-shadow: calc(0.5 * var(--px)) calc(0.5 * var(--px)) 0 #3f3f3f;
}

.slot__badge {
  position: absolute;
  left: calc(1.5 * var(--px));
  top: calc(0.5 * var(--px));
  font-size: calc(6 * var(--px));
  font-weight: 700;
  line-height: 1;
  color: #ffe08a;
  text-shadow: calc(0.5 * var(--px)) calc(0.5 * var(--px)) 0 #3f3f3f;
}

/* Styled after the game's item tooltip. */
.tip {
  position: absolute;
  z-index: 40;
  left: 50%;
  bottom: calc(100% + 0.4rem);
  transform: translateX(calc(-50% + var(--shift, 0px)));
  width: max-content;
  max-width: min(24rem, calc(100vw - 2rem));
  padding: 0.45rem 0.6rem;
  border: 2px solid rgb(80 0 255 / 0.45);
  border-radius: 0.25rem;
  background: rgb(16 0 16 / 0.95);
  color: var(--color-gray-200);
  font-size: 0.8rem;
  line-height: 1.35;
  text-align: left;
  box-shadow: 0 6px 18px rgb(0 0 0 / 0.5);
  pointer-events: none;
}

.tip--below {
  bottom: auto;
  top: calc(100% + 0.4rem);
}

.tip__name {
  font-weight: 700;
  color: #fff;
}

.tip__id,
.tip__tagid {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.7rem;
  color: var(--color-gray-400);
  word-break: normal;
  overflow-wrap: normal;
}

.tip__accepts {
  margin-top: 0.35rem;
  color: var(--color-gray-300);
}

.tip__note {
  margin-top: 0.35rem;
  color: var(--color-gray-400);
  font-style: italic;
}
</style>
