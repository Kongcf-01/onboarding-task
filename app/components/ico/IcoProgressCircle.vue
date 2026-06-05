<template>
  <div
    ref="rootEl"
    data-progress-circle
    :class="[revealUp, 'relative mx-0 size-40 max-w-full shrink-0 max-md:self-center md:size-[8.5rem] md:justify-self-start md:self-center lg:size-40 lg:justify-self-center lg:self-start']"
  >
    <svg
      viewBox="-10 -10 220 220"
      aria-hidden="true"
      class="size-full -rotate-90 overflow-visible"
    >
      <circle
        cx="100"
        cy="100"
        r="100"
        fill="none"
        stroke="#f3e4e8"
        stroke-width="7"
      />
      <circle
        ref="fillEl"
        cx="100"
        cy="100"
        r="100"
        fill="none"
        class="stroke-ico-red"
        stroke-width="7"
        stroke-linecap="butt"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="initialOffset"
      />
    </svg>
    <span class="absolute inset-0 flex items-center justify-center font-roboto-mono text-2xl font-semibold text-[#7a7a7a]">
      {{ displayLabel }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { revealUp } from '~/utils/reveal'

const props = defineProps<{ percent: number }>()

const rootEl = ref<HTMLElement | null>(null)
const fillEl = ref<SVGCircleElement | null>(null)
const displayedPercent = ref(0)
const hasPlayed = ref(false)

const radius = 100
const circumference = 2 * Math.PI * radius
const initialOffset = circumference
const displayLabel = computed(() => `${Math.round(displayedPercent.value)}%`)

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function runFillAnimation() {
  if (hasPlayed.value || !fillEl.value) return
  hasPlayed.value = true

  const fill = fillEl.value
  const targetOffset = circumference - (props.percent / 100) * circumference
  const duration = 1200

  fill.setAttribute('stroke-dashoffset', String(circumference))

  fill.animate(
    [
      { strokeDashoffset: String(circumference) },
      { strokeDashoffset: String(targetOffset) },
    ],
    { duration, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' },
  )

  const start = performance.now()
  const tick = (now: number) => {
    const t = easeOutCubic(Math.min((now - start) / duration, 1))
    displayedPercent.value = props.percent * t
    if (t < 1) requestAnimationFrame(tick)
    else displayedPercent.value = props.percent
  }
  requestAnimationFrame(tick)
}

function tryStartAnimation() {
  const block = rootEl.value?.closest('[data-reveal-allocation]')
  if (!block?.hasAttribute('data-chart-visible')) return
  if (!rootEl.value?.hasAttribute('data-revealed')) return

  window.setTimeout(runFillAnimation, 80)
}

function finishImmediately() {
  if (hasPlayed.value || !fillEl.value) return
  hasPlayed.value = true
  displayedPercent.value = props.percent
  fillEl.value.setAttribute(
    'stroke-dashoffset',
    String(circumference - (props.percent / 100) * circumference),
  )
}

onMounted(() => {
  if (!import.meta.client) {
    finishImmediately()
    return
  }

  const block = rootEl.value?.closest('[data-reveal-allocation]')
  if (!block) {
    finishImmediately()
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finishImmediately()
    return
  }

  const onAttrChange = () => tryStartAnimation()

  const mo = new MutationObserver(onAttrChange)
  mo.observe(block, { attributes: true, attributeFilter: ['data-chart-visible', 'data-content-visible'] })
  if (rootEl.value) {
    mo.observe(rootEl.value, { attributes: true, attributeFilter: ['data-revealed'] })
  }
  tryStartAnimation()

  onBeforeUnmount(() => mo.disconnect())
})
</script>
