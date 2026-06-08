<template>
  <section class="bg-white px-6 pb-32 pt-64 min-[768px]:pt-52" data-reveal-trigger="cases">
    <div class="mx-auto max-w-[1240px] text-center">
      <p
        data-reveal-group="cases"
        :class="[revealUp, 'm-0 font-montserrat text-xl font-normal leading-[1.9] text-[#273832] [--reveal-delay:0ms]']"
      >
        Our featured projects.
      </p>
      <h2
        data-reveal-group="cases"
        :class="[revealUp, 'm-0 mt-2 font-merriweather text-[42px] font-extrabold tracking-[1.4px] text-[#0A1712] min-[1025px]:text-[56px] [--reveal-delay:200ms]']"
      >
        Case Studies
      </h2>

      <div
        class="mx-auto mt-10 grid max-w-[1140px] grid-cols-1 gap-x-[60px] gap-y-12 min-[992px]:grid-cols-2"
        data-reveal-trigger="cases-cards"
      >
        <ServicesCaseStudyCard
          v-for="(study, index) in caseStudies"
          :key="study.title"
          v-bind="study"
          :index="index"
        />
      </div>

      <div
        data-reveal-group="cases-cards"
        :class="[revealUpSlow, 'mt-10']"
        :style="revealDelay((caseStudies.length + 1) * 400)"
      >
        <ServicesBtn variant="mint" href="#" label="View All" icon="fas fa-chevron-right" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServicesBtn from '~/components/services/Btn.vue'
import ServicesCaseStudyCard from '~/components/services/CaseStudyCard.vue'
import { caseStudies } from '~/utils/servicesContent'
import { revealDelay, revealUp, revealUpSlow } from '~/utils/reveal'
</script>
