<template>
  <section
    ref="sectionRef"
    class="relative box-border flex h-screen max-h-screen w-full items-center overflow-hidden bg-black px-8 py-5 min-[768px]:px-20 min-[768px]:py-[60px] min-[1025px]:px-[120px] min-[1025px]:py-[100px]"
  >
    <div
      class="pointer-events-none absolute inset-0 z-[9] opacity-40 shadow-[inset_0_0_18rem_16rem_#000]"
      aria-hidden="true"
    />
    <div class="relative z-[99] w-full">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

useSkyStars(sectionRef)
</script>
