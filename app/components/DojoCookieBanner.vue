<template>
  <ClientOnly>
    <Teleport to="body">
      <div
        v-show="show"
        class="fixed top-auto left-5 bottom-5 z-[999] h-auto w-[calc(100%-40px)] max-w-[380px] rounded-md bg-ico-red p-[2.083vw] font-rubik font-normal text-white transition-[opacity,visibility,bottom] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]"
        :class="show ? 'visible bottom-5 opacity-100' : 'pointer-events-none invisible bottom-0 opacity-0'"
        role="dialog"
        aria-label="Cookie notice"
      >
        <div class="flex flex-col gap-0">
          <div>
            <p class="m-0 mb-[1.1rem] font-rubik text-base font-normal leading-normal text-[#f5cfd5]">
              We use cookies to ensure you get the best experience on our website. For more info check our
              <NuxtLink to="/privacy" class="font-normal text-white no-underline hover:text-[#1a1a1a]">Privacy Policy.</NuxtLink>
            </p>
          </div>
          <div class="flex w-full items-center justify-between gap-6">
            <span
              class="group inline-flex cursor-pointer items-center gap-[0.45rem] border-0 bg-transparent p-0 text-white hover:bg-transparent hover:opacity-100 focus:bg-transparent focus:opacity-100"
              role="button"
              tabindex="0"
              @click="dismiss"
              @keydown.enter="dismiss"
            >
              <span class="font-rubik text-base font-bold text-white">Okay</span>
              <span
                class="inline-flex items-center leading-none text-white transition-transform duration-250 ease-out group-hover:translate-x-[5px] group-focus-visible:translate-x-[5px]"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="block size-[18px]">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </span>
            <button
              type="button"
              class="group relative size-[26px] shrink-0 cursor-pointer border-0 bg-transparent p-0"
              aria-label="Close"
              @click="dismiss"
            >
              <span class="absolute top-1/2 left-0 block h-0.5 w-full -translate-y-1/2 rotate-45 rounded-sm bg-white transition-colors duration-200 group-hover:bg-[#1a1a1a]" />
              <span class="absolute top-1/2 left-0 block h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-sm bg-white transition-colors duration-200 group-hover:bg-[#1a1a1a]" />
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute()

const show = ref(true)

function dismiss() {
  show.value = false
}

watch(
  () => route.path,
  () => {
    show.value = true
  },
)
</script>
