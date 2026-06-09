<template>
  <section
    ref="sectionRef"
    class="relative box-border flex h-full w-full min-w-0 max-w-full flex-col justify-center overflow-x-hidden overflow-y-hidden bg-black px-5 pt-24 pb-10 max-[360px]:px-4 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-normal min-[768px]:px-20 min-[768px]:py-[60px] min-[768px]:pt-28 min-[768px]:pb-5 min-[1025px]:px-[120px] min-[1025px]:py-[100px]"
  >
    <div
      class="pointer-events-none absolute inset-0 z-[9] opacity-40 shadow-[inset_0_0_8rem_6rem_#000] min-[768px]:shadow-[inset_0_0_18rem_16rem_#000]"
      aria-hidden="true"
    />
    <div class="relative z-[99] w-full min-w-0 max-w-full">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

useSkyStars(sectionRef)
</script>
