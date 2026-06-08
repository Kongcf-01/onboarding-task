<template>
  <div class="mb-2">
    <figure class="overflow-hidden">
      <a
        ref="imageLink"
        :href="href"
        class="group relative block w-full overflow-hidden rounded bg-[#111]"
      >
        <span
          class="absolute inset-0 z-[1] bg-[#040404] transition-[width,transform] duration-[1600ms,2400ms] ease-[cubic-bezier(0.15,0.3,0.16,0.96)] motion-reduce:hidden"
          :class="isAnimated ? 'w-0 -translate-x-full' : 'w-full translate-x-0'"
          aria-hidden="true"
        />
        <img
          :src="image"
          :alt="title"
          class="block w-full motion-reduce:translate-x-0!"
          :class="imgClasses"
          loading="lazy"
        />
      </a>
      <a
        :href="href"
        class="block w-full px-0 pt-8 pb-[25px] text-left no-underline text-dojo-orange"
      >
        <h3 class="m-0 font-rubik text-[28px] font-bold uppercase leading-[1.4] text-dojo-orange">
          {{ title }}
        </h3>
      </a>
    </figure>
  </div>
</template>

<script setup lang="ts">
import { useCurtainReveal } from '~/composables/useCurtainReveal'

defineProps<{
  title: string
  image: string
  href: string
}>()

const imageLink = ref<HTMLElement | null>(null)
const { isAnimated, imgClasses } = useCurtainReveal(imageLink)
</script>
