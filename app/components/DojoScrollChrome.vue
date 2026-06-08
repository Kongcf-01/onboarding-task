<template>
  <ClientOnly>
    <Teleport to="body">
      <div
        v-show="showGoTop"
        id="dojo-scroll-gotop"
        class="pointer-events-none fixed bottom-[25px] z-[9999] flex max-[992px]:hidden flex-col items-center"
        :class="isHome ? 'right-[44px]' : 'right-10'"
      >
        <div
          class="relative h-[100px] w-px"
          :class="trackTone === 'light' ? 'bg-black/10' : 'bg-white/30'"
          aria-hidden="true"
        >
          <div
            class="absolute top-0 left-0 w-px transition-[height] duration-150 ease-linear"
            :class="trackTone === 'light' ? 'bg-ink' : 'bg-white'"
            :style="{ height: `${progress}%` }"
          />
        </div>
        <a
          href="#"
          class="pointer-events-auto flex size-[50px] items-center justify-center no-underline"
          aria-label="Back to top"
          @click.prevent="scrollToTop"
        >
          <svg
            class="size-[50px]"
            :class="arrowTone === 'light' ? 'fill-ink' : 'fill-white'"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43" />
          </svg>
        </a>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { sampleBackgroundTone } from '~/composables/useBackgroundTone'

const route = useRoute()

const TRACK_HEIGHT = 100

type UiTone = 'light' | 'dark'

const trackTone = ref<UiTone>('dark')
const arrowTone = ref<UiTone>('dark')
const progress = ref(0)
const isScrolled = ref(false)

const isHome = computed(() => {
  const path = route.path.replace(/\/$/, '') || '/'
  return path === '/'
})

const isIco = computed(() => {
  const path = route.path.replace(/\/$/, '') || '/'
  return path === '/ico'
})

const isOurServices = computed(() => {
  const path = route.path.replace(/\/$/, '') || '/'
  return path === '/our-services'
})

const showGoTop = computed(() => isScrolled.value && (isHome.value || isIco.value || isOurServices.value))

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function getGoTopSamplePoints() {
  const rightOffset = isHome.value ? 44 : 40
  const fallbackBottom = window.innerHeight - 25
  const fallbackTop = fallbackBottom - 50 - TRACK_HEIGHT
  const fallbackX = window.innerWidth - rightOffset - 25

  const el = document.querySelector<HTMLElement>('#dojo-scroll-gotop')
  const rect = el?.getBoundingClientRect()
  const hasLayout = Boolean(rect && rect.height > 0)

  const x = hasLayout ? rect!.left + rect!.width / 2 : fallbackX
  const top = hasLayout ? rect!.top : fallbackTop
  const bottom = hasLayout ? rect!.bottom : fallbackBottom

  return {
    x,
    ys: [
      top + 12,
      top + TRACK_HEIGHT * 0.5,
      top + TRACK_HEIGHT - 12,
      bottom - 25,
    ],
  }
}

function updateGoTopChrome() {
  if (!showGoTop.value) return

  const { x, ys } = getGoTopSamplePoints()
  const tone = sampleBackgroundTone(x, ys, '#dojo-scroll-gotop', { lightIfAny: true })
  trackTone.value = tone
  arrowTone.value = tone
}

function updateRail() {
  isScrolled.value = window.scrollY > 0

  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0

  nextTick(updateGoTopChrome)
}

watch(() => route.path, () => nextTick(updateRail))

onMounted(() => {
  updateRail()
  document.addEventListener('scroll', updateRail, { passive: true, capture: true })
  window.addEventListener('resize', updateRail, { passive: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', updateRail, { capture: true })
  window.removeEventListener('resize', updateRail)
})
</script>
