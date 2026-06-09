<template>
  <div
    ref="pageRef"
    class="fixed top-0 left-0 h-[100svh] w-full max-w-[100vw] overflow-x-hidden overflow-y-hidden overscroll-none bg-[#111] text-white min-[768px]:h-auto min-[768px]:max-w-none min-[768px]:w-auto"
  >
    <DojoHeader variant="default" />
    <ComingSoonHero class="h-full" />
  </div>
</template>

<script setup lang="ts">
const pageRef = ref<HTMLElement | null>(null)
const { apply } = useLockedViewport()

useHead({
  title: 'Coming Soon – DojoChain',
  htmlAttrs: { class: 'overflow-hidden overscroll-none' },
  bodyAttrs: { class: 'overflow-hidden overscroll-none bg-[#111]' },
})

function lockPageMobile() {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

function lockPageDesktop(height: number) {
  const heightPx = `${height}px`
  document.documentElement.style.overflow = 'hidden'
  document.documentElement.style.height = heightPx
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.top = '0'
  document.body.style.left = '0'
  document.body.style.width = '100%'
  document.body.style.height = heightPx
}

function unlockPage() {
  document.documentElement.style.overflow = ''
  document.documentElement.style.height = ''
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.width = ''
  document.body.style.height = ''
}

function applyLayout() {
  if (!pageRef.value) return
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  if (isMobile) {
    pageRef.value.style.width = ''
    pageRef.value.style.height = ''
    unlockPage()
    lockPageMobile()
    return
  }
  const { height } = apply(pageRef.value)
  lockPageDesktop(height)
}

onMounted(() => {
  applyLayout()
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  unlockPage()
})
</script>
