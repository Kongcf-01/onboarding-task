<template>
  <div>
    <!-- Home Demos -->
    <section id="demos" class="bg-white pt-12 pb-8">
      <div class="mx-auto max-w-[1320px] px-6 text-center">
        <h2 class="font-montserrat text-[clamp(3rem,4vw,3rem)] font-medium tracking-[1.4px] text-dojo-text-dark">
          Home Demos
        </h2>
        <p class="mb-4 font-montserrat text-2xl leading-[2.9] text-dojo-text-muted">
          Get started with a pre-made website
        </p>
      </div>
    </section>

    <section class="bg-white pb-12">
      <div class="mx-auto max-w-[1320px] px-6">
        <div class="grid gap-x-8 lg:grid-cols-2">
          <div class="space-y-2">
            <HomeDemoCard
              v-for="demo in homeDemos.slice(0, 3)"
              :key="demo.title"
              v-bind="demo"
            />
          </div>
          <div class="space-y-2">
            <HomeDemoCard
              v-for="demo in homeDemos.slice(3)"
              :key="demo.title"
              v-bind="demo"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Awesome Features -->
    <section class="bg-dojo-blue pt-12 pb-4">
      <div class="mx-auto max-w-[1320px] px-6 text-center">
        <h2 class="font-montserrat text-[clamp(2rem,4vw,2.875rem)] font-semibold tracking-[1.4px] text-white">
          Awesome Features
        </h2>
      </div>
    </section>

    <section class="bg-dojo-blue pb-8">
      <div class="mx-auto max-w-[720px] px-6 pb-4 text-center">
        <p class="font-montserrat text-lg leading-[1.9] text-[#e9e7e5]">
          Whether you are an experienced WordPress Guru or simply a newbie,
          <strong class="font-semibold text-white">DojoChain</strong> is for you.
        </p>
      </div>
    </section>

    <section class="bg-dojo-blue pt-8 pb-12" data-reveal-trigger="features">
      <div class="mx-auto max-w-[1320px] px-6">
        <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="(feature, i) in homeFeatures"
            :key="feature.title"
            data-reveal-group="features"
            :class="[revealUp, 'text-center']"
            :style="revealDelay(i * 200)"
          >
            <div class="mx-auto mb-5 flex size-16 items-center justify-center text-white [&_svg]:size-16">
              <HomeFeatureIcon :index="i" />
            </div>
            <h3 class="mb-2.5 font-rubik text-2xl font-normal tracking-[1.4px] text-white">
              {{ feature.title }}
            </h3>
            <p class="font-rubik text-[#e9e7e5]">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ICO showcase -->
    <section class="bg-dojo-blue pt-12 pb-0">
      <div class="mx-auto max-w-[900px] px-6">
        <img
          src="/images/home/ico-showcase.jpg"
          alt="ICO demo preview"
          :class="[revealUp, 'w-full overflow-hidden rounded']"
          width="900"
          height="561"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Split sections -->
    <section class="bg-[#f4f4f4] py-12">
      <div class="mx-auto max-w-[1320px] space-y-16 px-6">
        <!-- Elementor -->
        <div class="grid items-center gap-10 lg:grid-cols-2">
          <div :class="[revealUp]">
            <div class="mb-4 text-[#354a60] [&_svg]:size-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                <path d="M462.999 26.001H49c-12.731 0-22.998 10.268-22.998 23v413.998c0 12.732 10.268 23 22.998 23h413.999c12.732 0 22.999-10.268 22.999-23V49.001C485.998 36.269 475.731 26.001 462.999 26.001ZM194.7 358.2h-40.9V153.8h40.9V358.2Zm163.6 0H235.6v-40.9h122.7V358.2Zm0-81.8H235.6v-40.9h122.7v40.9Zm0-81.8H235.6v-40.9h122.7v40.9Z" fill="#D63362" />
              </svg>
            </div>
            <h2 class="font-rubik text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[1.4px] text-dojo-text-dark">
              Elementor Page Builder
            </h2>
            <p class="mt-4 font-montserrat text-lg leading-[1.9] text-dojo-text-muted">
              One of the most user-friendly page builders for WordPress, with a refined interface and a range of extra features, it helps you customize layouts with ease.
            </p>
            <HomeCheckList :items="elementorChecklist" />
          </div>
          <div :class="[revealUp]">
            <img
              src="/images/home/elementor.png"
              alt="Elementor page builder"
              class="w-full rounded-md"
              width="1200"
              height="1416"
              loading="lazy"
            />
          </div>
        </div>

        <!-- WooCommerce -->
        <div class="grid items-center gap-10 lg:grid-cols-2">
          <div :class="[revealUp, 'order-2 lg:order-1']">
            <img
              src="/images/home/shop-presentation.jpg"
              alt="WooCommerce shop"
              class="w-full rounded-md"
              width="1200"
              height="1805"
              loading="lazy"
            />
          </div>
          <div :class="[revealUp, 'order-1 lg:order-2']">
            <div class="mb-4 text-[#0269db] [&_svg]:h-20 [&_svg]:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153" aria-hidden="true">
                <path d="M23.759 0h208.378C245.325 0 256 10.675 256 23.863v79.541c0 13.188-10.675 23.863-23.863 23.863H157.41l10.257 25.118-45.109-25.118H23.863c-13.187 0-23.862-10.675-23.862-23.863V23.863C-.104 10.78 10.57 0 23.759 0z" fill="#9B5C8F" />
                <path d="M14.578 21.75c1.457-1.978 3.642-3.018 6.556-3.226 5.308-.417 8.326 2.08 9.054 7.492 3.226 21.75 6.764 40.17 10.51 55.259l22.79-43.395c2.082-3.955 4.684-6.036 7.806-6.244 4.579-.312 7.388 2.601 8.533 8.741 2.602 13.84 5.932 25.6 9.886 35.59 2.706-26.432 7.285-45.476 13.737-57.235 1.56-2.914 3.85-4.371 6.868-4.58 2.394-.207 4.579.521 6.556 2.082 1.977 1.561 3.018 3.538 3.226 5.932.104 1.873-.208 3.434-1.04 4.995-4.059 7.493-7.39 20.085-10.095 37.567-2.601 16.963-3.538 30.18-2.914 39.65.209 2.6-.208 4.89-1.248 6.868-1.25 2.289-3.122 3.538-5.516 3.746-2.706.208-5.515-1.04-8.221-3.85-9.678-9.887-17.379-24.664-22.998-44.332-6.765 13.32-11.76 23.31-14.986 29.97-6.14 11.76-11.343 17.796-15.714 18.108-2.81.208-5.203-2.186-7.284-7.18-5.307-13.633-11.031-39.962-17.17-78.986-.417-2.706.207-5.1 1.664-6.972z" fill="#FFF" />
              </svg>
            </div>
            <h2 class="font-rubik text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[1.4px] text-dojo-text-dark">
              Boost your revenues with WooCommerce
            </h2>
            <p class="mt-4 font-montserrat text-lg leading-[1.9] text-dojo-text-muted">
              The top WordPress plugin for creating an online store is WooCommerce – the world's largest digital store for free.
            </p>
            <HomeCheckList :items="wooChecklist" />
          </div>
        </div>

        <!-- Customizable -->
        <div class="grid items-center gap-10 lg:grid-cols-2">
          <div :class="[revealUp]">
            <div class="mb-4 text-[#0269db] [&_svg]:size-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                <path d="M464 8H160c-22.1 0-40 17.9-40 40v24H48C25.9 72 8 89.9 8 112v240c0 22.1 17.9 40 40 40h112v48h-16c-22.1 0-40 17.9-40 40v16c0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8v-16c0-22.1-17.9-40-40-40h-16v-48h112c22.1 0 40-17.9 40-40v-56h40c22.1 0 40-17.9 40-40V48C504 25.9 486.1 8 464 8Z" />
              </svg>
            </div>
            <h2 class="font-rubik text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[1.4px] text-dojo-text-dark">
              Highly Customizable
            </h2>
            <p class="mt-4 font-montserrat text-lg leading-[1.9] text-dojo-text-muted">
              Feel free to change the whole color palette, transforming your site into something special and lovely.
            </p>
            <HomeCheckList :items="customizableChecklist" />
          </div>
          <div :class="[revealUp]">
            <img
              src="/images/home/ico-presentation.jpg"
              alt="Highly customizable theme"
              class="w-full rounded-md"
              width="1200"
              height="1624"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-white py-12">
      <div class="mx-auto max-w-[1320px] px-6 text-center">
        <p class="font-rubik text-sm font-medium uppercase tracking-wide text-[#b0b0b0]">
          Testimonials
        </p>
        <h2 class="mb-12 mt-2 font-montserrat text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[1.4px] text-dojo-text-dark">
          <span class="block">What our customers say</span>
          <span class="block">about us</span>
        </h2>

        <HomeTestimonials :testimonials="homeTestimonials" />
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-[#111] py-12">
      <div class="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1fr_auto_1fr]">
        <div>
          <h2 class="mb-8 font-montserrat text-[clamp(2rem,4vw,2.875rem)] font-medium tracking-[1.4px] text-white">
            Have a Question?
          </h2>
          <div class="divide-y divide-[#333] border-[#333]">
            <div v-for="(item, i) in homeFaqItems" :key="item.question" class="border-[#333]">
              <button
                type="button"
                class="flex w-full items-center justify-between gap-4 bg-transparent py-6 text-left font-montserrat text-base font-semibold text-white"
                :aria-expanded="openFaq === i"
                @click="openFaq = openFaq === i ? -1 : i"
              >
                <span>{{ item.question }}</span>
                <span class="shrink-0 text-xl font-semibold text-dojo-orange">
                  <span v-if="openFaq !== i">→</span>
                  <span v-else>↓</span>
                </span>
              </button>
              <div
                v-show="openFaq === i"
                class="pb-6 font-montserrat text-lg leading-[1.9] text-[#bababa]"
              >
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden lg:block" />

        <div class="space-y-8">
          <div :class="[revealUp]">
            <h3 class="font-montserrat text-[2rem] font-medium tracking-[1.4px] text-white">
              Documentation
            </h3>
            <p class="mt-2 font-montserrat text-lg leading-[1.9] text-[#bababa]">
              Well organized and up to date
            </p>
            <HomeBtn
              href="https://dojochain.fantasythemes.net/doc/"
              variant="primary"
              label="Online Documentation"
              class="mt-4"
            />
          </div>
          <div :class="[revealUp]">
            <h3 class="font-montserrat text-[2rem] font-medium tracking-[1.4px] text-white">
              Dedicated Support
            </h3>
            <p class="mt-2 font-montserrat text-lg leading-[1.9] text-[#bababa]">
              Need support ? Submit a ticket. We will be happy to assist you.
            </p>
            <HomeBtn
              href="https://support.fantasythemes.net/"
              variant="primary"
              label="Get Support"
              class="mt-4"
            />
            <p class="mt-4 font-montserrat text-lg leading-[1.9] text-[#bababa]">
              Support Time: <strong class="text-white">Monday – Friday</strong><br />
              Response Time: <strong class="text-white">Maximum 24 hours</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA (reference: section py-12=128px, h2 48px Montserrat, button wrap mb-5 pb-12) -->
    <section class="overflow-hidden bg-black py-32 text-center">
      <div class="mx-auto max-w-[1320px] px-6">
        <div class="mb-12">
          <h2 class="mb-0 text-center font-montserrat text-lg font-normal leading-[1.9] text-white">
            Put Your Content At Its Best
          </h2>
          <h2 class="mb-6 mt-6 text-center font-montserrat text-5xl font-semibold leading-[1.2] tracking-[1.4px] text-white">
            <span class="block">Get started with</span>
            <span class="block">DojoChain now!</span>
          </h2>
        </div>

        <div class="mb-5 pb-12">
          <HomeBtn
            :href="themeForestUrl"
            variant="primary"
            label="Buy Now for $59"
          />
        </div>

        <p class="text-center font-montserrat text-base font-normal text-[#d3d3d3]">
          Made with
          <span class="text-dojo-orange">♥</span>
          by
          <a href="#" class="text-dojo-orange no-underline hover:text-dojo-orange-dark">ThemesDojo</a>.
          Powered by
          <a href="#" class="text-dojo-orange no-underline hover:text-dojo-orange-dark">WordPress</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { revealDelay, revealUp } from '~/utils/reveal'
import {
  customizableChecklist,
  elementorChecklist,
  homeDemos,
  homeFaqItems,
  homeFeatures,
  homeTestimonials,
  themeForestUrl,
  wooChecklist,
} from '~/utils/homeContent'

const openFaq = ref(0)
</script>
