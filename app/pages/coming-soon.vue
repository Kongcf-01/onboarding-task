<template>
  <div class="h-screen max-h-screen overflow-hidden bg-[#111] text-white">
    <DojoHeader variant="default" />
    <ComingSoonHero />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Coming Soon – DojoChain',
  htmlAttrs: { class: 'h-full overflow-hidden' },
  bodyAttrs: { class: 'h-full overflow-hidden bg-[#111]' },
})
</script>
