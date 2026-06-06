<template>
  <figure class="mb-2">
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
      class="mt-6 block px-0 text-left no-underline"
    >
      <h3 class="font-rubik text-base font-bold uppercase tracking-wide text-dojo-text-dark transition-colors hover:text-dojo-orange">
        {{ title }}
      </h3>
    </a>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  href: string
}>()

const imageLink = ref<HTMLElement | null>(null)
const isAnimated = ref(false)

const imgClasses = computed(() =>
  isAnimated.value
    ? 'translate-x-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 motion-reduce:group-hover:scale-100'
    : 'translate-x-[150px] transition-transform duration-[2000ms] ease-[cubic-bezier(0.15,0.3,0.16,0.96)]',
)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!import.meta.client) return

  const el = imageLink.value
  if (!el) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isAnimated.value = true
    return
  }

  const reveal = () => {
    isAnimated.value = true
    observer?.disconnect()
    observer = null
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal()
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
  )

  const rect = el.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    requestAnimationFrame(reveal)
  } else {
    observer.observe(el)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
