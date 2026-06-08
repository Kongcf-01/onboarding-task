<template>
  <div ref="pageRoot" class="bg-white" :data-anim-ready="animReady || undefined">
    <DojoHeader variant="default" />
    <ServicesOfferSection />
    <div class="bg-white">
      <ServicesCtaBanner />
      <ServicesCaseStudies />
    </div>
    <DojoFooter />
  </div>
</template>

<script setup lang="ts">
const pageRoot = ref<HTMLElement | null>(null)
const { animReady } = useIcoScrollReveal(pageRoot)

useHead({
  title: 'Our Services – DojoChain',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;800&display=swap',
    },
  ],
})
</script>
