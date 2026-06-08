<template>
  <div class="relative mx-auto max-w-[820px]">
    <!-- Measure every slide once so the stage keeps a stable height like the reference carousel -->
    <div
      class="pointer-events-none invisible absolute left-0 top-0 -z-10 w-full"
      aria-hidden="true"
    >
      <div
        v-for="(testimonial, i) in testimonials"
        :key="`measure-${i}`"
        :ref="(el) => setMeasureRef(el, i)"
        class="w-full"
      >
        <img
          :src="avatarSrc"
          alt=""
          class="mx-auto mb-6 size-20 rounded-full"
          width="64"
          height="64"
          decoding="async"
        />
        <p class="font-montserrat text-lg leading-[1.9] text-[#3a3a3a]">
          {{ testimonial.quote }}
        </p>
        <h5 class="mt-6 font-montserrat text-base font-semibold text-black">
          {{ testimonial.author }}
        </h5>
      </div>
    </div>

    <div
      class="relative cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
      :style="stageHeight ? { height: `${stageHeight}px` } : undefined"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @pointerleave="onPointerCancel"
    >
      <Transition :name="slideTransition">
        <div
          :key="activeIndex"
          class="w-full"
        >
          <img
            :src="avatarSrc"
            :alt="testimonials[activeIndex].author"
            class="mx-auto mb-6 size-20 rounded-full"
            width="64"
            height="64"
            decoding="async"
          />
          <p class="font-montserrat text-lg leading-[1.9] text-[#3a3a3a]">
            {{ testimonials[activeIndex].quote }}
          </p>
          <h5 class="mt-6 font-montserrat text-base font-semibold text-black">
            {{ testimonials[activeIndex].author }}
          </h5>
        </div>
      </Transition>
    </div>

    <div class="mt-20 flex items-center justify-center font-rubik text-base leading-7 text-[#676767]">
      <div class="h-7 w-[1.25ch] shrink-0 overflow-hidden">
        <div
          class="transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
          :style="{ transform: `translateY(-${activeIndex * 28}px)` }"
        >
          <div
            v-for="(_, i) in testimonials"
            :key="i"
            class="flex h-7 w-[1.25ch] items-center justify-center text-[#d00027]"
          >
            <span class="leading-7">{{ i + 1 }}</span>
          </div>
        </div>
      </div>
      <span class="mx-3 block h-px w-8 shrink-0 bg-[#d00027]" aria-hidden="true" />
      <span class="h-7 shrink-0 leading-7 text-[#d00027]">{{ testimonials.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { HomeTestimonial } from '~/utils/homeContent'

const props = defineProps<{
  testimonials: HomeTestimonial[]
}>()

const avatarSrc = '/images/home/envato-avatar.png'

const SWIPE_THRESHOLD = 48

const activeIndex = ref(0)
const direction = ref(1)
const stageHeight = ref<number | null>(null)
const measureRefs = ref<(HTMLElement | null)[]>([])
const pointerStartX = ref<number | null>(null)
const pointerTracking = ref(false)

const slideTransition = computed(() =>
  direction.value > 0 ? 'testimonial-next' : 'testimonial-prev',
)

function setMeasureRef(
  el: Element | ComponentPublicInstance | null,
  index: number,
) {
  measureRefs.value[index] = el instanceof HTMLElement ? el : null
}

function normalizeIndex(index: number) {
  const total = props.testimonials.length
  return ((index % total) + total) % total
}

function goTo(index: number) {
  const next = normalizeIndex(index)
  if (next === activeIndex.value) return

  const current = activeIndex.value
  const total = props.testimonials.length
  const forwardSteps = (next - current + total) % total
  const backwardSteps = (current - next + total) % total

  direction.value = forwardSteps <= backwardSteps ? 1 : -1
  activeIndex.value = next
}

function goToManual(index: number) {
  goTo(index)
  resetAutoplay()
}

function onPointerDown(event: PointerEvent) {
  if (event.pointerType === 'mouse' && event.button !== 0) return

  pointerStartX.value = event.clientX
  pointerTracking.value = true
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
}

function onPointerUp(event: PointerEvent) {
  if (!pointerTracking.value || pointerStartX.value === null) return

  const deltaX = event.clientX - pointerStartX.value

  if (deltaX <= -SWIPE_THRESHOLD) {
    goToManual(activeIndex.value + 1)
  } else if (deltaX >= SWIPE_THRESHOLD) {
    goToManual(activeIndex.value - 1)
  }

  onPointerCancel(event)
}

function onPointerCancel(event?: PointerEvent) {
  if (event?.currentTarget instanceof HTMLElement && event.pointerId !== undefined) {
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  pointerStartX.value = null
  pointerTracking.value = false
}

function measureStageHeight() {
  if (!import.meta.client) return

  const heights = measureRefs.value
    .filter((el): el is HTMLElement => el !== null)
    .map((el) => el.offsetHeight)

  if (!heights.length) return

  stageHeight.value = Math.max(...heights)
}

let autoplayTimer: ReturnType<typeof setInterval> | null = null

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function startAutoplay() {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  stopAutoplay()
  autoplayTimer = setInterval(() => {
    goTo(activeIndex.value + 1)
  }, 6000)
}

function resetAutoplay() {
  startAutoplay()
}

onMounted(async () => {
  await nextTick()
  measureStageHeight()
  window.addEventListener('resize', measureStageHeight, { passive: true })
  startAutoplay()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', measureStageHeight)
  stopAutoplay()
})
</script>
