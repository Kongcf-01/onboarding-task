<template>
  <Teleport to="body">
    <div
      v-if="phase !== 'hidden'"
      class="pointer-events-auto fixed inset-0 z-[100000] overflow-hidden bg-preloader"
      :class="showCurtain ? 'animate-preloader-bg-fade' : ''"
      aria-hidden="true"
    >
      <div
        class="absolute inset-0 z-[2] flex items-center justify-center"
        :class="showCurtain ? 'animate-preloader-circle-fade' : ''"
      >
        <svg
          class="size-24 overflow-visible"
          width="96"
          height="96"
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g fill="none" fill-rule="evenodd" stroke="#fff" stroke-width="2">
            <g
              class="origin-center [transform-box:fill-box]"
              :class="isPlaying ? 'animate-preloader-circle-inner' : 'scale-0 opacity-30'"
            >
              <circle cx="22" cy="22" r="2.5155" />
            </g>
            <g
              class="origin-center [transform-box:fill-box]"
              :class="isPlaying ? 'animate-preloader-circle-outer' : 'scale-0 opacity-0'"
            >
              <circle cx="22" cy="22" r="16.2155" />
            </g>
          </g>
        </svg>
      </div>
      <div class="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div
          class="absolute -left-[5%] -right-[5%] bottom-0 h-[115%] origin-bottom skew-y-[-2.5deg] bg-ico-red will-change-transform"
          :class="showCurtain ? 'animate-preloader-curtain-sweep' : 'translate-y-full'"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { phase, animating, showCurtain, initialDone, playInitialPreloader } = usePageTransition()

const isPlaying = computed(() => phase.value === 'playing' && animating.value)

onMounted(() => {
  if (initialDone.value) {
    phase.value = 'hidden'
    return
  }
  playInitialPreloader()
})
</script>
