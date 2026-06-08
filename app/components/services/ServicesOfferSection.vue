<template>
  <section
    class="bg-[#110F1D] px-6 pt-28 pb-48 text-white min-[992px]:pt-32 min-[992px]:pb-56"
    data-reveal-trigger="services"
  >
    <div class="mx-auto max-w-[1240px] text-center">
      <p
        data-reveal-group="services"
        :class="[revealUp, 'm-0 font-montserrat text-xl font-normal leading-[1.9] text-[#E8FFF7] [--reveal-delay:0ms]']"
      >
        What we offer.
      </p>
      <h1
        data-reveal-group="services"
        :class="[revealUp, 'm-0 mt-2 font-merriweather text-[42px] font-extrabold tracking-[1.4px] text-white min-[1025px]:text-[56px] [--reveal-delay:200ms]']"
      >
        Our Services
      </h1>

      <div
        class="mx-auto mt-10 grid max-w-[1140px] grid-cols-1 gap-6 min-[768px]:grid-cols-2 min-[1025px]:grid-cols-3"
        data-reveal-trigger="services-cards"
      >
        <article
          v-for="(card, index) in serviceCards"
          :key="card.title"
          data-reveal-group="services-cards"
          :class="[
            revealUpSlow,
            'group overflow-hidden rounded bg-[#110F1D] px-8 pt-8 pb-6 text-left transition-colors duration-300 hover:bg-[#01F59C]',
          ]"
          :style="revealDelay((index + 1) * 400)"
        >
          <span class="card-icon-wrapper mb-3 block text-[#01F59C] transition-colors duration-300 group-hover:text-[#000E03]">
            <ServicesCardIcon :index="index" />
          </span>
          <h3 class="m-0 mb-4 font-rubik text-[22px] font-semibold text-white transition-colors duration-300 group-hover:text-[#000E03]">
            {{ card.title }}
          </h3>
          <p class="card-description m-0 font-rubik text-base leading-[1.6] text-[#C7EFE0] transition-colors duration-300 group-hover:text-[#48544B]">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServicesCardIcon from '~/components/services/CardIcon.vue'
import { serviceCards } from '~/utils/servicesContent'
import { revealDelay, revealUp, revealUpSlow } from '~/utils/reveal'
</script>
