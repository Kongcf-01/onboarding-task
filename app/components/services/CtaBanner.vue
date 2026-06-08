<template>
  <!-- Anchor at the dark/white seam; banner is vertically centered on the boundary -->
  <div class="relative z-20 h-0">
    <div class="absolute top-0 right-0 left-0 flex justify-center px-6">
      <div class="w-full max-w-[980px] -translate-y-1/2">
        <div
          data-reveal-item
          :class="[revealUp, 'rounded-lg bg-[#01F59C] px-8 py-6']"
        >
          <div class="flex flex-col items-center gap-8 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between min-[768px]:gap-8">
            <h2 class="m-0 w-full max-w-[540px] text-center font-rubik text-2xl font-normal leading-[1.35] tracking-[1.4px] text-[#000E03] min-[768px]:text-left min-[1025px]:text-[32px]">
              Technical Expertise in Cryptocurrencies and Blockchain Development
            </h2>
            <ServicesBtn
              variant="talk"
              href="#"
              label="Let's Talk"
              icon="fas fa-paper-plane"
              class="shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServicesBtn from '~/components/services/Btn.vue'
import { revealUp } from '~/utils/reveal'
</script>
