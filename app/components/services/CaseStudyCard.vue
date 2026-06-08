<template>
  <article
    data-reveal-group="cases-cards"
    :class="[revealUpSlow, 'text-left']"
    :style="revealDelay((index + 1) * 400)"
  >
    <figure class="blog-grid-image m-0 overflow-hidden rounded">
      <a
        ref="imageLink"
        :href="href"
        class="group relative block overflow-hidden bg-[#111]"
      >
        <span
          class="absolute inset-0 z-[1] bg-[#040404] transition-[width,transform] duration-[1600ms,2400ms] ease-[cubic-bezier(0.15,0.3,0.16,0.96)] motion-reduce:hidden"
          :class="isAnimated ? 'w-0 -translate-x-full' : 'w-full translate-x-0'"
          aria-hidden="true"
        />
        <img
          :src="image"
          :alt="title"
          width="1200"
          height="800"
          class="block h-auto w-full motion-reduce:translate-x-0!"
          :class="imgClasses"
          loading="lazy"
        />
      </a>
    </figure>
    <div class="blog-grid-content mb-8 pt-[25px] text-left">
      <h3 class="blog-grid-headline m-0 mb-2 text-xl font-semibold leading-[1.3] text-[#17161A] min-[1600px]:text-[26px]">
        <a :href="href" class="text-[#17161A] no-underline transition-colors hover:text-ico-red">{{ title }}</a>
      </h3>
      <div class="post-details">
        <p class="m-0 font-rubik text-base text-dojo-text-muted">{{ category }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { revealDelay, revealUpSlow } from '~/utils/reveal'
import { useCurtainReveal } from '~/composables/useCurtainReveal'

defineProps<{
  title: string
  image: string
  href: string
  category: string
  index: number
}>()

const imageLink = ref<HTMLElement | null>(null)
const { isAnimated, imgClasses } = useCurtainReveal(imageLink)
</script>
