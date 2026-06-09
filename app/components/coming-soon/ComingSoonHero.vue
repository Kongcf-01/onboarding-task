<template>
  <ComingSoonDojoSkyBg>
    <div class="box-border w-full min-w-0 max-w-full">
      <div class="flex w-full min-w-0 max-w-full items-stretch">
        <div class="w-full min-w-0 max-w-full min-[768px]:w-[50.359%]">
        <img
          src="/images/coming-soon-logo.png"
          alt="DojoChain"
          width="150"
          height="150"
          class="mb-4 block h-auto w-[90px] max-w-full max-[360px]:w-[80px] min-[441px]:w-[110px] min-[768px]:mb-5 min-[768px]:w-[150px]"
          loading="lazy"
        />

        <div class="hero-title mb-4 min-w-0 max-w-full min-[768px]:mb-6">
          <h2 class="m-0 max-w-full font-montserrat text-[28px] leading-[1.15] font-normal tracking-[0.5px] break-words text-white max-[360px]:text-[26px] min-[400px]:text-[32px] min-[441px]:text-[48px] min-[441px]:tracking-[1.4px] min-[769px]:text-[64px] min-[1025px]:text-[80px]">
            Coming Soon
          </h2>
        </div>

        <p class="m-0 max-w-full font-montserrat text-[14px] font-medium leading-[1.5] tracking-[0.2px] break-words text-pretty text-white min-[400px]:text-[15px] min-[768px]:text-lg min-[768px]:leading-normal min-[768px]:tracking-[1.4px]">
          We’re currently working on our new website! Follow us to get notified when we will go live.
        </p>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 min-[768px]:pt-10">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            href="#"
            class="text-white no-underline transition-colors duration-200 hover:text-ico-red"
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
