<template>
  <div ref="pageRoot" class="bg-white" :data-anim-ready="animReady || undefined">
    <DojoHeader variant="default" active-nav="home" />
    <HomeHero />
    <HomeSections />
  </div>
</template>

<script setup lang="ts">
const pageRoot = ref<HTMLElement | null>(null)
const { animReady } = useIcoScrollReveal(pageRoot)
</script>
