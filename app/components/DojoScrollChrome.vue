<template>
  <ClientOnly>
    <Teleport to="body">
      <a
        v-show="showHint"
        id="dojo-scroll-hint"
        href="#demos"
        class="pointer-events-auto fixed bottom-[60px] right-[54px] z-[9999] inline-block h-[3.125rem] w-[1.875rem] rounded-[10rem] border-2 no-underline max-[992px]:hidden"
        :class="hintTone === 'light' ? 'border-black/20' : 'border-white/20'"
        aria-label="Scroll down"
        @click.prevent="scrollToDemos"
      >
        <span
          class="pointer-events-none absolute top-0 left-0 bottom-[80px] origin-left translate-y-full -rotate-90 pl-5 font-rubik text-sm font-normal whitespace-nowrap opacity-50"
          :class="hintTone === 'light' ? 'text-ink' : 'text-white'"
        >
          Scroll
        </span>
        <span
          class="absolute top-1/4 left-1/2 block size-1.5 -translate-x-1/2 rounded-full animate-scroll-hint-dot motion-reduce:animate-none"
          :class="hintTone === 'light' ? 'bg-ink' : 'bg-white'"
          aria-hidden="true"
        />
      </a>

      <div
        v-show="showGoTop"
        id="dojo-scroll-gotop"
        class="pointer-events-none fixed bottom-[25px] z-[9999] flex max-[992px]:hidden flex-col items-center"
        :class="isHome ? 'right-[44px]' : 'right-10'"
      >
        <div
          class="relative h-[100px] w-px"
          :class="goTopTone === 'light' ? 'bg-black/10' : 'bg-white/30'"
          aria-hidden="true"
        >
          <div
            class="absolute top-0 left-0 w-px transition-[height] duration-150 ease-linear"
            :class="goTopTone === 'light' ? 'bg-ink' : 'bg-white'"
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
            :class="goTopTone === 'light' ? 'fill-ink' : 'fill-white'"
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

const hintTone = ref<'light' | 'dark'>('dark')
const goTopTone = ref<'light' | 'dark'>('dark')
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

const showHint = computed(() => isHome.value)
const showGoTop = computed(() => isScrolled.value && (isHome.value || isIco.value))

function scrollToDemos() {
  document.querySelector('#demos')?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function updateTone(
  selector: string,
  setter: (tone: 'light' | 'dark') => void,
) {
  const el = document.querySelector<HTMLElement>(selector)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const ys = [rect.top + 8, rect.top + rect.height * 0.5, rect.bottom - 8]
  setter(sampleBackgroundTone(x, ys))
}

function updateRail() {
  isScrolled.value = window.scrollY > 0

  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0

  updateTone('#dojo-scroll-hint', (t) => { hintTone.value = t })
  updateTone('#dojo-scroll-gotop', (t) => { goTopTone.value = t })
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
