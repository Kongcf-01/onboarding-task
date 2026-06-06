<template>
  <section
    class="relative flex min-h-screen items-center overflow-visible bg-black bg-[url('/images/home/hero-bg.jpg')] bg-cover bg-center pt-28 pb-20 before:pointer-events-none before:absolute before:inset-0 before:bg-dojo-overlay before:opacity-85 before:content-['']"
  >
    <div class="relative z-[1] mx-auto w-full max-w-[1320px] px-6">
      <div class="mx-auto max-w-[790px] text-center">
        <p class="mb-0 font-montserrat text-base font-medium tracking-[1.2px] text-white">
          <span class="text-dojo-orange">Elementor</span>
          Compatible
        </p>
        <h1
          class="mt-4 font-rubik text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.3] text-white"
        >
          <span class="text-dojo-orange">DojoChain</span><br />
          ICO, Bitcoin and Cryptocurrency Consulting WordPress Theme
        </h1>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <HomeBtn
            :href="themeForestUrl"
            variant="primary"
            label="Buy Now $59"
          />
          <HomeBtn href="#demos" variant="light" label="View Demos" />
        </div>
      </div>

      <div class="mx-auto mt-[90px] grid max-w-[1100px] gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(perk, i) in homeHeroPerks"
          :key="perk.icon"
          :class="[revealUp, 'flex items-center gap-5 text-left']"
          :style="{ '--reveal-delay': `${i * 100}ms` }"
        >
          <span class="shrink-0 text-white [&_svg]:size-[54px]">
            <HomeHeroIcon :name="perk.icon" />
          </span>
          <h3 class="m-0 whitespace-pre-line font-montserrat text-xl font-semibold text-white">
            {{ perk.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { homeHeroPerks, themeForestUrl } from '~/utils/homeContent'
import { revealUp } from '~/utils/reveal'
</script>
