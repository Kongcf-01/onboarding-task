<template>
  <section
    class="relative overflow-hidden bg-ico-blue bg-[url('/images/ico-hero-bg.jpg')] bg-cover bg-center py-[230px] pb-[90px] max-[991px]:py-[120px] max-[991px]:pb-16 before:pointer-events-none before:absolute before:inset-0 before:bg-ico-blue before:opacity-90 before:mix-blend-multiply before:content-['']"
  >
    <div
      class="relative z-[1] mx-auto w-full max-w-[720px] px-6 max-[991px]:mx-auto max-[991px]:max-w-full max-[991px]:px-5 min-[1200px]:mr-auto min-[1200px]:ml-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] min-[1200px]:max-w-[min(63%,760px)]"
    >
      <div class="mb-10 box-border w-[563.51px] max-w-full p-[10px] max-[991px]:mb-7 max-[991px]:w-full max-[991px]:px-0 max-[991px]:py-[10px]">
        <h2 class="m-0 mb-4 font-rubik text-base font-medium tracking-normal text-white max-[991px]:mb-3">
          Time left to ICO
        </h2>

        <div
          class="box-border inline-flex w-full border border-white/15 bg-black/28 text-white max-[991px]:grid max-[991px]:grid-cols-2"
        >
          <div
            class="box-border flex h-[171.6px] w-[135.88px] flex-[0_0_135.88px] flex-col items-center justify-center border-r border-white/15 px-5 py-[30px] text-center max-[991px]:h-auto max-[991px]:min-h-[120px] max-[991px]:w-auto max-[991px]:flex-none max-[991px]:border-b max-[991px]:border-white/15 max-[991px]:px-3 max-[991px]:py-[1.35rem]"
          >
            <span
              v-if="daysSplit"
              class="flex flex-col items-center justify-center gap-0 leading-none max-[991px]:hidden"
              aria-hidden="true"
            >
              <span class="block font-roboto-mono text-[56px] leading-none font-bold text-white">{{ daysMain }}</span>
              <span class="block font-roboto-mono text-[56px] leading-none font-bold text-white">{{ daysSub }}</span>
            </span>
            <span
              v-else
              class="block font-roboto-mono text-[56px] leading-none font-bold text-white max-[991px]:hidden"
            >{{ daysDisplay }}</span>
            <span
              class="hidden font-roboto-mono leading-none font-bold text-white max-[991px]:block max-[991px]:text-[clamp(1.75rem,9vw,42px)]"
              :aria-label="daysDisplay"
            >{{ daysDisplay }}</span>
            <span class="mt-2 block font-rubik text-base leading-none font-semibold text-white">Days</span>
          </div>
          <div
            class="box-border flex h-[171.6px] w-[135.88px] flex-[0_0_135.88px] flex-col items-center justify-center border-r border-white/15 px-5 py-[30px] text-center max-[991px]:h-auto max-[991px]:min-h-[120px] max-[991px]:w-auto max-[991px]:flex-none max-[991px]:border-r-0 max-[991px]:border-b max-[991px]:border-white/15 max-[991px]:px-3 max-[991px]:py-[1.35rem]"
          >
            <span class="block font-roboto-mono text-[56px] leading-none font-bold text-white max-[991px]:text-[clamp(1.75rem,9vw,42px)]">{{ hours }}</span>
            <span class="mt-2 block font-rubik text-base leading-none font-semibold text-white">Hours</span>
          </div>
          <div
            class="box-border flex h-[171.6px] w-[135.88px] flex-[0_0_135.88px] flex-col items-center justify-center border-r border-white/15 px-5 py-[30px] text-center max-[991px]:h-auto max-[991px]:min-h-[120px] max-[991px]:w-auto max-[991px]:flex-none max-[991px]:border-b-0 max-[991px]:border-white/15 max-[991px]:px-3 max-[991px]:py-[1.35rem]"
          >
            <span class="block font-roboto-mono text-[56px] leading-none font-bold text-white max-[991px]:text-[clamp(1.75rem,9vw,42px)]">{{ minutes }}</span>
            <span class="mt-2 block font-rubik text-base leading-none font-semibold text-white">Minutes</span>
          </div>
          <div
            class="box-border flex h-[171.6px] w-[135.88px] flex-[0_0_135.88px] flex-col items-center justify-center px-5 py-[30px] text-center max-[991px]:h-auto max-[991px]:min-h-[120px] max-[991px]:w-auto max-[991px]:flex-none max-[991px]:border-r-0 max-[991px]:border-b-0 max-[991px]:px-3 max-[991px]:py-[1.35rem]"
          >
            <span class="block font-roboto-mono text-[56px] leading-none font-bold text-white max-[991px]:text-[clamp(1.75rem,9vw,42px)]">{{ seconds }}</span>
            <span class="mt-2 block font-rubik text-base leading-none font-semibold text-white">Seconds</span>
          </div>
        </div>
      </div>

      <h1
        class="m-0 mb-5 max-w-[763.29px] font-rubik text-[clamp(1.65rem,5vw,56px)] leading-[1.2] font-bold tracking-normal text-white uppercase min-[992px]:min-h-[134.4px] min-[992px]:text-[56px] min-[992px]:leading-[1.2] max-[991px]:mb-4 max-[991px]:text-[clamp(1.65rem,7.5vw,36px)] max-[991px]:leading-[1.12]"
      >
        <em class="block not-italic text-ico-red">Music Platform</em>
        <span class="block max-[991px]:hidden">Based on Blockchain</span>
        <span class="hidden max-[991px]:block">Based on</span>
        <span class="hidden max-[991px]:block">Blockchain</span>
      </h1>

      <p
        class="m-0 mb-10 max-w-[578.28px] font-montserrat text-lg leading-[1.4] font-normal text-ico-text-light min-[992px]:min-h-[50.4px] min-[992px]:text-lg min-[992px]:leading-[1.4] max-[991px]:mb-7 max-[991px]:max-w-full max-[991px]:text-[15px] max-[991px]:leading-[1.45]"
      >
        The worlds first decentralised music platform built on Ethereum
      </p>

      <div class="flex flex-wrap items-center gap-5">
        <IcoBtn variant="primary" href="#" icon="fas fa-music">
          Try Demo
        </IcoBtn>
        <IcoBtn variant="light" href="#token-allocation" icon="fab fa-bitcoin">
          Token Distribution
        </IcoBtn>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/** Official ICO due date (unix seconds) */
const ICO_DUE_UNIX = 1_700_168_400

const daysMain = ref('-93')
const daysSub = ref('2')
const daysDisplay = ref('-932')
const daysSplit = ref(true)
const hours = ref('17')
const minutes = ref('43')
const seconds = ref('02')

function pad2(value: number) {
  return String(Math.abs(value)).padStart(2, '0')
}

function updateCountdown() {
  if (!import.meta.client) return

  const remaining = ICO_DUE_UNIX - Math.floor(Date.now() / 1000)
  const daysNum = Math.trunc(remaining / 86_400)
  const hoursNum = Math.trunc(((remaining % 86_400) + 86_400) % 86_400 / 3600)
  const minutesNum = Math.trunc(((remaining % 3600) + 3600) % 3600 / 60)
  const secondsNum = Math.trunc(((remaining % 60) + 60) % 60)

  const daysStr = String(daysNum)
  daysDisplay.value = daysStr
  hours.value = pad2(hoursNum)
  minutes.value = pad2(minutesNum)
  seconds.value = pad2(secondsNum)

  if (window.innerWidth > 991 && daysStr.length > 3) {
    daysMain.value = daysStr.slice(0, -1)
    daysSub.value = daysStr.slice(-1)
    daysSplit.value = true
  } else {
    daysSplit.value = false
  }
}

onMounted(() => {
  updateCountdown()
  const interval = setInterval(updateCountdown, 1000)
  window.addEventListener('resize', updateCountdown, { passive: true })
  onBeforeUnmount(() => {
    clearInterval(interval)
    window.removeEventListener('resize', updateCountdown)
  })
})
</script>
