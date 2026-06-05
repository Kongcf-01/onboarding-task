<template>
  <Teleport to="body">
    <div
      v-show="showCursor"
      class="pointer-events-none fixed top-0 left-0 z-[99999] will-change-transform"
      :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
      aria-hidden="true"
    >
      <span
        class="absolute top-0 left-0 box-border size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] transition-[border-color] duration-150 ease-out"
        :class="onLightBg ? 'border-[rgba(130,140,155,0.65)]' : 'border-white/55'"
      />
      <span
        class="absolute top-0 left-0 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ico-red transition-transform duration-250 ease-[cubic-bezier(0.23,1,0.32,1)]"
        :class="isHovering ? 'scale-[2.5]' : 'scale-100'"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const route = useRoute()

const x = ref(0)
const y = ref(0)
const ready = ref(false)
const hasMoved = ref(false)
const onLightBg = ref(false)
const isHovering = ref(false)
const inSideMenu = ref(false)

const LIGHT_SECTION_SELECTOR =
  'section[class*="bg-ico-bg-light"], section[class*="bg-white"]'

const SIDE_MENU_SELECTOR = '#dojochain-side-menu'

const HOVER_TARGET_SELECTOR =
  'a, button, [role="button"], input, select, textarea, label, .nav-link, .whitepaper-btn, .icon-link, .menu-toggle'

const isIcoHome = computed(() => {
  const path = route.path.replace(/\/$/, '') || '/'
  return path === '/' || path === '/coming-soon'
})

const showCursor = computed(
  () => ready.value && hasMoved.value && isIcoHome.value && !inSideMenu.value,
)

function updateRingTone(clientX: number, clientY: number, target?: EventTarget | null) {
  const el =
    (target as Element | null)
    ?? document.elementFromPoint(clientX, clientY)
  inSideMenu.value = !!el?.closest?.(SIDE_MENU_SELECTOR)
  onLightBg.value = !!el?.closest?.(LIGHT_SECTION_SELECTOR)
  isHovering.value = !!el?.closest?.(HOVER_TARGET_SELECTOR)
}

function onMove(e: MouseEvent) {
  hasMoved.value = true
  x.value = e.clientX
  y.value = e.clientY
  updateRingTone(e.clientX, e.clientY, e.target)
}

function onLeave() {
  hasMoved.value = false
  inSideMenu.value = false
  onLightBg.value = false
  isHovering.value = false
}

function start() {
  if (!import.meta.client) return
  if (!window.matchMedia('(pointer: fine)').matches) return
  if (!isIcoHome.value) return

  ready.value = true
  window.addEventListener('mousemove', onMove, { passive: true })
  document.documentElement.addEventListener('mouseleave', onLeave)
}

function stop() {
  ready.value = false
  hasMoved.value = false
  inSideMenu.value = false
  onLightBg.value = false
  isHovering.value = false
  window.removeEventListener('mousemove', onMove)
  document.documentElement.removeEventListener('mouseleave', onLeave)
}

watch(isIcoHome, (home) => {
  if (home) start()
  else stop()
})

onMounted(() => {
  start()
})

onBeforeUnmount(() => {
  stop()
})
</script>
