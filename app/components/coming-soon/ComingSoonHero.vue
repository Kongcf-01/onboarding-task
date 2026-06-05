<template>
  <ComingSoonDojoSkyBg>
    <div class="box-border w-full py-[60px]">
      <div class="flex w-full items-stretch">
        <div class="w-full text-left min-[768px]:w-[50.359%]">
          <img
            src="/images/coming-soon-logo.png"
            alt="DojoChain"
            width="150"
            height="150"
            class="mb-5 block h-auto w-[150px] max-w-full"
            loading="lazy"
          />

          <div class="hero-title mb-6">
            <h2 class="m-0 font-montserrat text-[48px] leading-[1.2] font-normal tracking-[1.4px] text-white min-[441px]:text-[64px] min-[769px]:text-[80px]">
              Coming Soon
            </h2>
          </div>

          <h2 class="m-0 font-montserrat text-lg font-medium leading-normal tracking-[1.4px] text-white">
            We’re currently working on our new website! Follow us to get notified when we will go live.
          </h2>

          <div class="flex flex-wrap items-center pt-10">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              href="#"
              class="mr-4 text-white no-underline transition-opacity hover:opacity-75"
              :aria-label="social.label"
            >
              <i :class="social.icon" class="block text-[1.35rem] leading-none" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          class="hidden shrink-0 min-[768px]:block min-[768px]:w-[48.973%]"
          aria-hidden="true"
        />
      </div>
    </div>
  </ComingSoonDojoSkyBg>
</template>

<script setup lang="ts">
const socialLinks = [
  { label: 'Facebook', icon: 'fe fe-facebook' },
  { label: 'Twitter', icon: 'fe fe-twitter' },
  { label: 'Instagram', icon: 'fe fe-instagram' },
  { label: 'LinkedIn', icon: 'fe fe-linkedin' },
  { label: 'YouTube', icon: 'fe fe-youtube' },
]
</script>
