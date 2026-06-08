<template>
  <a
    href="#demos"
    class="pointer-events-auto absolute right-[54px] bottom-[60px] z-[10] inline-block h-[3.125rem] w-[1.875rem] rounded-[10rem] border-2 border-white/20 no-underline max-[992px]:hidden"
    aria-label="Scroll down"
    @click.prevent="scrollToDemos"
  >
    <span
      class="pointer-events-none absolute top-0 left-0 bottom-[80px] origin-left translate-y-full -rotate-90 pl-5 font-rubik text-sm font-normal whitespace-nowrap text-white opacity-50"
    >
      Scroll
    </span>
    <span
      class="absolute top-1/4 left-1/2 block size-1.5 -translate-x-1/2 rounded-full bg-white animate-scroll-hint-dot motion-reduce:animate-none"
      aria-hidden="true"
    />
  </a>
</template>

<script setup lang="ts">
function scrollToDemos() {
  document.querySelector('#demos')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
