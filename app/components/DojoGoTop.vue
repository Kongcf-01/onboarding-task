<template>
  <a
    ref="goTopEl"
    v-show="visible"
    href="#"
    class="fixed right-10 bottom-[25px] z-[999] size-[60px] max-[769px]:!hidden no-underline transition-[opacity,visibility] duration-300"
    :class="visible ? 'visible opacity-100' : 'invisible opacity-0'"
    aria-label="Back to top"
    @click.prevent="scrollToTop"
  >
    <span
      class="absolute top-[-100px] left-1/2 h-[100px] w-px -translate-x-1/2"
      :class="!overLight ? 'bg-white/30' : 'bg-black/10'"
      aria-hidden="true"
    >
      <span
        class="absolute top-0 left-0 w-px"
        :class="!overLight ? 'bg-white' : 'bg-[#111]'"
        :style="{ height: `${progress}%` }"
      />
    </span>
    <svg
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      :class="!overLight ? 'fill-white' : 'fill-[#111]'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      aria-hidden="true"
    >
      <polygon points="25.27,19.53 33.27,27.43 30.87,29.83 25.37,24.33 19.77,29.93 17.27,27.43" />
    </svg>
  </a>
</template>

<script setup lang="ts">
const route = useRoute()

const goTopEl = ref<HTMLElement | null>(null)
const visible = ref(false)
const progress = ref(0)
const overLight = ref(false)

const enabled = computed(() => route.path === '/')

const LIGHT_SECTION_SELECTOR =
  'section[class*="bg-ico-bg-light"], section[class*="bg-white"]'

function backgroundIsLight(bg: string): boolean {
  if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') return false
  const match = bg.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/)
  if (!match) return false
  const r = Number(match[1])
  const g = Number(match[2])
  const b = Number(match[3])
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.82
}

function isOverLightBackground(x: number, y: number): boolean {
  const goTop = goTopEl.value
  if (!goTop) return false

  goTop.style.pointerEvents = 'none'
  const el = document.elementFromPoint(x, y)
  goTop.style.pointerEvents = ''

  if (!el) return false
  if (el.closest(LIGHT_SECTION_SELECTOR)) return true

  let node: Element | null = el
  while (node && node !== document.body) {
    if (node instanceof HTMLElement && node.matches(LIGHT_SECTION_SELECTOR)) {
      return true
    }
    const bg = getComputedStyle(node).backgroundColor
    if (backgroundIsLight(bg)) return true
    node = node.parentElement
  }

  return false
}

function updateGoTopTheme() {
  const goTop = goTopEl.value
  if (!goTop || !visible.value) {
    overLight.value = false
    return
  }

  const rect = goTop.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const sampleYs = [
    rect.top - 95,
    rect.top - 70,
    rect.top - 45,
    rect.top - 20,
    rect.top + rect.height * 0.5,
  ]

  const onLight = sampleYs.map((y) => isOverLightBackground(x, y))
  overLight.value = onLight.every(Boolean)
}

function updateScroll() {
  if (!import.meta.client || !enabled.value) {
    visible.value = false
    overLight.value = false
    return
  }
  if (window.matchMedia('(max-width: 769px)').matches) {
    visible.value = false
    overLight.value = false
    return
  }

  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0
  visible.value = scrollTop > 300
  updateGoTopTheme()
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
  window.addEventListener('resize', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('resize', updateScroll)
})

watch(enabled, () => updateScroll())
</script>
