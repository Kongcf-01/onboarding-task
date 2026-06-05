<template>
  <div>
    <!-- Music Revolution -->
    <section
      ref="musicRevSection"
      class="bg-ico-blue-dark py-[120px] text-white"
      :data-anim-ready="splitAnimReady || undefined"
    >
      <div class="mx-auto min-w-0 max-w-[1200px] px-6 xl:max-w-[1234px]">
        <h2 class="mb-4 text-center font-rubik text-[clamp(2rem,4vw,56px)] font-semibold tracking-[1.4px]">
          Music Revolution is here
        </h2>
        <p class="mx-auto mb-0 max-w-[640px] pb-32 text-center font-montserrat text-lg leading-[1.9] text-ico-text-light">
          Streaming platforms such as Spotify, Deezer , and Apple Music take up to 80% of artist's revenue, and while larger artists can accept it, small artists are often unable to make a living from music streaming.
        </p>

        <div class="mt-0 grid min-w-0 grid-cols-1 gap-12 pb-12 max-lg:mt-12 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 xl:grid-cols-[minmax(0,1fr)_128px_minmax(0,1fr)] xl:grid-rows-2 xl:gap-x-0 xl:gap-y-[192px]">
          <div
            class="col-start-1 row-start-2 min-w-0 lg:col-start-1 lg:row-start-1 xl:col-start-1 xl:row-start-1"
            data-reveal-group="about"
          >
            <img
              src="/images/ico-about-icon.svg"
              alt=""
              :class="[revealUp, 'mb-4 block size-16']"
              style="--reveal-delay: 0ms"
              width="64"
              height="64"
              aria-hidden="true"
            />
            <h2 :class="[revealUp, 'mb-5 font-rubik text-[clamp(1.75rem,3vw,48px)] font-semibold leading-[1.2] tracking-[1.4px] text-white xl:mb-6']" style="--reveal-delay: 680ms">
              About DojoChain Platform
            </h2>
            <p :class="[revealUp, 'mb-6 max-w-full font-montserrat text-lg font-normal leading-[1.9em] text-[#dce2f4] xl:box-border xl:min-h-[171px] xl:max-w-[529px]']" style="--reveal-delay: 800ms">
              As music fans, we also endure terrible experiences. Fans are often forced to switch between dozens of streaming services just to listen to artists they like. Music industry fragmentation has resulted from streaming services competing for exclusive deals.
            </p>
            <ul :class="[revealUp, 'mb-8 list-none']" style="--reveal-delay: 920ms">
              <li v-for="item in aboutList" :key="item" class="flex items-center gap-0 py-[0.35rem] font-rubik text-xl font-medium text-[#dce2f4]">
                <i class="fas fa-check w-5 shrink-0 text-center text-sm text-ico-icon-light" aria-hidden="true" />
                <span class="pl-3.5">{{ item }}</span>
              </li>
            </ul>
            <IcoBtn
              href="#"
              :class="revealUp"
              style="--reveal-delay: 1040ms"
            >
              Learn More
            </IcoBtn>
          </div>

          <div
            :class="[revealLeft, 'col-start-1 row-start-3 min-w-0 overflow-hidden rounded-md lg:col-start-1 lg:row-start-2 xl:relative xl:col-start-1 xl:row-start-2 xl:min-h-0 xl:self-stretch']"
            data-reveal-group="tech"
            data-reveal-trigger="tech"
            style="--reveal-delay: 0ms"
          >
            <img
              src="https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/the-technology.jpg"
              alt="The Technology"
              width="900"
              height="1171"
              loading="lazy"
              class="block h-auto w-full rounded-md xl:absolute xl:inset-0 xl:h-full xl:w-full xl:object-cover xl:object-top"
            />
          </div>

          <div
            :class="[revealRight, 'col-start-1 row-start-1 min-w-0 overflow-hidden rounded-md lg:col-start-2 lg:row-start-1 xl:relative xl:col-start-3 xl:row-start-1 xl:min-h-0 xl:self-stretch']"
            data-reveal-group="about"
            data-reveal-trigger="about"
            style="--reveal-delay: 0ms"
          >
            <img
              src="https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/about-cryptoroyal.jpg"
              alt="About DojoChain"
              width="901"
              height="1172"
              loading="lazy"
              class="block h-auto w-full rounded-md xl:absolute xl:inset-0 xl:h-full xl:w-full xl:object-cover xl:object-top"
            />
          </div>

          <div
            class="col-start-1 row-start-4 min-w-0 lg:col-start-2 lg:row-start-2 xl:col-start-3 xl:row-start-2"
            data-reveal-group="tech"
          >
            <img
              src="/images/ico-tech-icon.svg"
              alt=""
              :class="[revealUp, 'mb-4 block size-16']"
              style="--reveal-delay: 0ms"
              width="64"
              height="64"
              aria-hidden="true"
            />
            <h2 :class="[revealUp, 'mb-5 font-rubik text-[clamp(1.75rem,3vw,48px)] font-semibold leading-[1.2] tracking-[1.4px] text-white xl:mb-6']" style="--reveal-delay: 680ms">
              The Technology
            </h2>
            <p :class="[revealUp, 'mb-6 max-w-full font-montserrat text-lg font-normal leading-[1.9em] text-[#dce2f4] xl:box-border xl:min-h-[239.4px] xl:max-w-[529px]']" style="--reveal-delay: 800ms">
              With this system, we are able to store songs permanently and transparently, using cutting-edge low latency IPFS as the storage layer. DojoChain network is controlled by an Ethereum-based logic layer. The Universal Music Registry Number (UMRN) relay will maintain a global recording and tracking system, and the DojoChain API will allow any player to use the service.
            </p>
            <ul :class="[revealUp, 'mb-8 list-none']" style="--reveal-delay: 920ms">
              <li v-for="item in techList" :key="item" class="flex items-center gap-0 py-[0.35rem] font-rubik text-xl font-medium text-[#dce2f4]">
                <i class="fas fa-check w-5 shrink-0 text-center text-sm text-ico-icon-light" aria-hidden="true" />
                <span class="pl-3.5">{{ item }}</span>
              </li>
            </ul>
            <IcoBtn
              href="#"
              :class="revealUp"
              style="--reveal-delay: 1040ms"
            >
              Learn More
            </IcoBtn>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section
      ref="benefitsSection"
      class="bg-ico-blue-section py-[clamp(48px,10vw,120px)] pb-[clamp(40px,8vw,128px)]"
      :data-anim-ready="benefitsAnimReady || undefined"
    >
      <div
        class="mx-auto min-w-0 max-w-[1200px] px-6"
        data-reveal-trigger="benefits"
      >
        <h2
          :class="[revealUp, 'mb-[clamp(1.5rem,4vw,2.5rem)] w-full text-center font-rubik text-[clamp(2rem,8vw,56px)] font-semibold leading-[1.4] tracking-[1.4px] text-white lg:mb-10']"
          data-reveal-group="benefits"
          style="--reveal-delay: 0ms"
        >
          Benefits
        </h2>
        <div class="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div
            v-for="(card, index) in benefits"
            :key="card.title"
            data-reveal-group="benefits"
            :class="[revealUpSlow, 'block min-w-0 w-full cursor-pointer overflow-hidden rounded-md bg-ico-blue-section px-[clamp(20px,5vw,48px)] pt-[clamp(24px,5vw,48px)] pb-[clamp(20px,4vw,32px)] text-white box-border transition-colors duration-200 hover:bg-ico-blue lg:px-12 lg:pt-12 lg:pb-8 hover:[&_.benefit-title]:text-white hover:[&_.benefit-desc]:text-white']"
            :style="{ '--reveal-delay': `${(index + 1) * 400}ms` }"
          >
            <span class="mb-[clamp(0.75rem,2vw,1rem)] block size-[72px] lg:mb-4" aria-hidden="true">
              <img :src="card.icon" alt="" width="72" height="72" class="block size-[72px] object-contain" />
            </span>
            <h3 class="benefit-title mb-[clamp(0.75rem,2vw,1.5rem)] font-rubik text-[clamp(20px,4.5vw,22px)] font-semibold text-white lg:mb-6">
              {{ card.title }}
            </h3>
            <p class="benefit-desc m-0 font-rubik text-[clamp(15px,3.5vw,16px)] leading-normal text-ico-text-light lg:text-base">
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section
      ref="roadmapSection"
      class="bg-white py-[120px] text-[#272727]"
      :data-anim-ready="roadmapAnimReady || undefined"
    >
      <div class="mx-auto max-w-[1200px] px-6">
        <h2 class="mb-0 pb-20 text-center font-rubik text-[56px] font-semibold leading-[1.2] tracking-[1.4px] text-[#272727] max-md:text-[clamp(2rem,8vw,56px)]">
          Roadmap 2021
        </h2>
        <ul class="m-0 mt-12 w-full list-none p-0">
          <li
            v-for="item in roadmap"
            :key="item.title"
            class="timeline-item relative flex items-start pb-[90px] even:flex-row-reverse after:pointer-events-none after:absolute after:top-0 after:bottom-0 after:left-1/2 after:-ml-px after:z-0 after:w-0.5 after:bg-[#f4f4f4] first:after:top-10 last:after:bottom-auto last:after:h-[50px] max-md:grid max-md:grid-cols-[1fr_auto] max-md:grid-rows-[auto_auto] max-md:items-center max-md:gap-0 max-md:pb-20! max-md:after:hidden max-md:[grid-template-areas:'date_icon'_'card_card'] max-md:even:[grid-template-areas:'date_icon'_'card_card']"
          >
            <div
              :class="[revealUpSlow, 'timeline-card relative z-[2] w-[calc(50%-80px)] max-w-[calc(50%-80px)] shrink-0 basis-[calc(50%-80px)] max-md:col-span-2 max-md:mt-5 max-md:w-full max-md:max-w-full max-md:shrink max-md:basis-auto max-md:[grid-area:card]']"
            >
              <div
                class="timeline-card-inner relative rounded-md bg-[#f4f4f4] p-8 after:absolute after:top-[38px] after:right-[-7px] after:z-[1] after:block after:size-[15px] after:rotate-45 after:bg-[#f4f4f4] after:content-[''] [.timeline-item:nth-child(even)_&]:after:right-auto [.timeline-item:nth-child(even)_&]:after:left-[-7px] max-md:after:hidden"
              >
                <div class="relative pb-[30px] text-[#111]">
                  <h3 class="m-0 p-0 font-rubik text-4xl font-semibold leading-[1.2] text-[#111]">
                    {{ item.title }}
                  </h3>
                </div>
                <div class="relative font-montserrat text-xl leading-8 text-[#7a7a7a]">
                  <p class="m-0 font-[inherit] leading-[inherit] text-[inherit]">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="timeline-icon relative z-[3] mt-2.5 mr-[25px] ml-[45px] flex size-[70px] shrink-0 basis-[70px] items-center justify-center [.timeline-item:nth-child(even)_&]:mr-[45px] [.timeline-item:nth-child(even)_&]:ml-[25px] max-md:col-start-2 max-md:row-start-1 max-md:m-0! max-md:ml-0! max-md:mr-0! max-md:[grid-area:icon] max-md:justify-self-end max-md:self-center [.timeline-item:nth-child(even)_&]:max-md:m-0!"
            >
              <span class="pointer-events-none absolute top-1/2 left-1/2 z-[1] size-[50px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#d4d4d4] bg-white" aria-hidden="true" />
              <span class="relative z-[2] size-2.5 shrink-0 rounded-full bg-ico-red" aria-hidden="true" />
            </div>

            <div class="timeline-date mt-3 w-auto shrink-0 basis-auto pl-6 text-left text-[#222] [.timeline-item:nth-child(even)_&]:pr-6 [.timeline-item:nth-child(even)_&]:pl-0 [.timeline-item:nth-child(even)_&]:text-right max-md:col-start-1 max-md:row-start-1 max-md:m-0 max-md:px-0 max-md:pl-0! max-md:pr-0! max-md:self-center max-md:text-left! max-md:[grid-area:date] [.timeline-item:nth-child(even)_&]:max-md:text-left!">
              <span class="-mt-1.5 mb-[-4px] block font-rubik text-[32px] leading-[48px] font-semibold tracking-[0.5px] text-[#111] uppercase">
                {{ item.month }}
              </span>
              <span class="block font-rubik text-2xl leading-8 font-semibold text-[#5f5f5f]">
                {{ item.year }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Token Allocation -->
    <section
      id="token-allocation"
      ref="allocationSection"
      class="bg-ico-bg-light py-[120px] text-[#272727]"
      :data-anim-ready="allocationAnimReady || undefined"
    >
      <div class="mx-auto max-w-[1200px] px-6 max-lg:mx-0 max-lg:w-full max-lg:max-w-none max-lg:px-0 max-lg:box-border">
        <h2 class="mb-0 px-2.5 pb-20 text-center font-rubik text-[56px] font-semibold leading-[1.2] tracking-[1.4px] text-[#272727] max-md:text-[clamp(2rem,8vw,56px)] max-lg:px-2.5">
          Token Allocation
        </h2>

        <div class="flex flex-col gap-12 pb-[130px] max-md:gap-10 max-md:pb-20 lg:gap-20">
          <div
            v-for="(row, rowIndex) in allocationRows"
            :key="rowIndex"
            class="grid grid-cols-1 gap-12 max-md:gap-10 lg:grid-cols-2 lg:gap-12"
            data-reveal-allocation-row
          >
            <div
              v-for="block in row"
              :key="block.title"
              class="m-0 flex flex-col items-stretch gap-5 md:grid md:grid-cols-[8.5rem_minmax(0,1fr)] md:items-center md:gap-x-5 md:gap-y-0 lg:grid-cols-[30%_minmax(0,70%)] lg:items-start lg:gap-x-6"
              data-reveal-allocation
            >
              <IcoProgressCircle :percent="block.percent" />
              <div class="px-2.5">
                <h3 data-allocation-title :class="[revealUp, 'm-0 mb-3 font-rubik text-[32px] font-semibold leading-[1.2] tracking-[1.4px] text-[#111] max-md:text-[clamp(1.35rem,5vw,28px)] md:text-[clamp(1.35rem,4vw,32px)]']">
                  {{ block.title }}
                </h3>
                <p data-allocation-content :class="[revealUp, 'm-0 font-montserrat text-lg leading-8 text-[#7a7a7a] max-md:text-base max-md:leading-[1.6] md:leading-[30px]']">
                  {{ block.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <IcoBtn href="#">Try Demo</IcoBtn>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section
      ref="teamSection"
      class="bg-ico-blue-section py-[120px] text-white"
      :data-anim-ready="teamAnimReady || undefined"
    >
      <div class="mx-auto max-w-[1200px] px-6">
        <h2 class="mb-0 pb-[26px] text-center font-rubik text-[56px] font-semibold tracking-[1.4px] text-white">
          Our Team
        </h2>
        <p class="mx-auto mb-0 max-w-[640px] px-2.5 pb-20 text-center font-montserrat text-lg font-normal leading-[1.9] text-ico-text-light box-border" data-reveal-trigger="team">
          Meet Our Small But Passionate Team
        </p>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3 xl:gap-8']">
          <article
            v-for="(member, index) in team"
            :key="member.name"
            class="group overflow-hidden rounded-md"
          >
            <div
              :class="[revealUp, 'relative overflow-hidden rounded-md after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.35)_35%,transparent_65%)]']"
              data-reveal-group="team"
              :style="{ '--reveal-delay': `${teamCardDelay(index)}ms` }"
            >
              <img
                :src="member.image"
                :alt="member.name"
                class="block aspect-[3/4] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.08] group-focus-within:scale-[1.08]"
                loading="lazy"
              />
              <div class="absolute right-0 bottom-0 left-0 z-[2] overflow-hidden px-[30px] pb-[50px] text-left transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[50px] group-hover:translate-y-0 group-focus-within:translate-y-0">
                <h3 class="mb-1 font-rubik text-[25.88px] font-bold! text-white">
                  {{ member.name }}
                </h3>
                <p class="mb-4 font-rubik text-[15px] font-semibold text-white">
                  {{ member.company }}
                </p>
                <div class="flex items-center gap-5 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100 group-focus-within:opacity-100">
                  <a href="#" class="inline-flex text-xl leading-none text-[#abb8c3] no-underline transition-colors duration-200 hover:text-white" aria-label="Facebook"><i class="fe fe-facebook" aria-hidden="true" /></a>
                  <a href="#" class="inline-flex text-xl leading-none text-[#abb8c3] no-underline transition-colors duration-200 hover:text-white" aria-label="Twitter"><i class="fe fe-twitter" aria-hidden="true" /></a>
                  <a href="#" class="inline-flex text-xl leading-none text-[#abb8c3] no-underline transition-colors duration-200 hover:text-white" aria-label="LinkedIn"><i class="fe fe-linkedin" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Featured In -->
    <section
      ref="featuredSection"
      class="bg-ico-blue-dark py-[120px] text-white"
      :data-anim-ready="featuredAnimReady || undefined"
    >
      <div class="mx-auto max-w-[1200px] px-6" data-reveal-trigger="featured">
        <h2
          :class="[revealUp, 'mb-32 text-center font-rubik text-[56px] font-semibold tracking-[1.4px] text-white max-md:mb-16 max-md:text-[clamp(2rem,8vw,56px)]']"
          data-reveal-group="featured"
          style="--reveal-delay: 0ms"
        >
          Featured In
        </h2>
        <div class="mx-auto max-w-[994px] max-md:max-w-none">
          <div class="flex flex-wrap items-center justify-center">
            <div
              v-for="(src, index) in brands"
              :key="src"
              class="flex w-1/2 max-w-[50%] items-center justify-center max-md:w-1/2 max-md:max-w-[50%] min-[992px]:w-1/4 min-[992px]:max-w-[25%] max-[575px]:w-full max-[575px]:max-w-full"
            >
              <div
                :class="[revealUp, 'inline-flex size-[218.43px] h-[280px] items-center justify-center px-3 py-20 text-center align-top font-rubik text-base text-[#1a1a1a] box-border']"
                data-reveal-group="featured"
                :style="{ '--reveal-delay': `${featuredBrandDelay(index)}ms` }"
              >
                <img :src="src" alt="" loading="lazy" class="mx-auto block h-auto max-h-[120px] w-auto max-w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section
      ref="ctaSection"
      class="bg-ico-blue-section p-0 pt-20 pb-20 max-lg:min-h-[422.4px] max-lg:w-full max-lg:pt-20 max-lg:pb-0 max-lg:box-border"
      :data-anim-ready="ctaAnimReady || undefined"
    >
      <div class="mx-auto max-w-[1200px] px-6 max-lg:mx-0 max-lg:w-full max-lg:max-w-none max-lg:p-5 max-lg:box-border">
        <div :class="[revealUp, 'flex flex-col items-start gap-8 max-lg:w-full max-lg:gap-0 lg:flex-row lg:items-center lg:justify-between lg:gap-12']">
          <h2 class="m-0 pb-2.5 text-left font-rubik text-[clamp(1.5rem,3vw,36px)] font-semibold leading-[1.3] tracking-[1.4px] text-white max-lg:text-4xl max-lg:leading-[1.2]">
            Create better experiences<br />
            with DojoChain
          </h2>
          <div class="w-full max-lg:pt-[30px] lg:w-auto lg:shrink-0">
            <div class="flex flex-wrap items-center gap-3 max-lg:justify-start max-lg:gap-3 max-lg:flex-nowrap lg:flex-nowrap lg:justify-end lg:gap-4">
              <IcoBtn href="#">Try Demo</IcoBtn>
              <IcoBtn href="#token-allocation" variant="light" icon="fab fa-bitcoin">
                Token Distribution
              </IcoBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { revealLeft, revealRight, revealUp, revealUpSlow } from '~/utils/reveal'

const musicRevSection = ref<HTMLElement | null>(null)
const { animReady: splitAnimReady } = useIcoScrollReveal(musicRevSection)

const benefitsSection = ref<HTMLElement | null>(null)
const { animReady: benefitsAnimReady } = useIcoScrollReveal(benefitsSection)

const roadmapSection = ref<HTMLElement | null>(null)
const { animReady: roadmapAnimReady } = useIcoScrollReveal(roadmapSection)

const allocationSection = ref<HTMLElement | null>(null)
const { animReady: allocationAnimReady } = useIcoScrollReveal(allocationSection)

const teamSection = ref<HTMLElement | null>(null)
const { animReady: teamAnimReady } = useIcoScrollReveal(teamSection)

const featuredSection = ref<HTMLElement | null>(null)
const { animReady: featuredAnimReady } = useIcoScrollReveal(featuredSection)

const ctaSection = ref<HTMLElement | null>(null)
const { animReady: ctaAnimReady } = useIcoScrollReveal(ctaSection)

/** Team cards — row 1: 600ms apart; pause; row 2: 700ms apart */
function teamCardDelay(index: number) {
  const firstRowStep = 380
  const secondRowStep = 440
  const rowBreakPause = 250
  if (index < 3) return index * firstRowStep
  return 3 * firstRowStep + rowBreakPause + (index - 3) * secondRowStep
}

/** Featured In — 4 logos then 3, second row slightly slower */
function featuredBrandDelay(index: number) {
  const firstRowCount = 4
  const firstRowStep = 380
  const secondRowStep = 440
  const rowBreakPause = 250
  if (index < firstRowCount) return index * firstRowStep
  return firstRowCount * firstRowStep + rowBreakPause + (index - firstRowCount) * secondRowStep
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur.'

const aboutList = ['Uncensorable', 'Cross-platform', 'Transparent']
const techList = ['Free', 'Cross-platform', 'Risk Free']

const benefits = [
  { icon: '/images/benefits/ico-benefit-free.svg', title: 'Free', desc: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.' },
  { icon: '/images/benefits/ico-benefit-transparent.svg', title: 'Transparent', desc: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.' },
  { icon: '/images/benefits/ico-benefit-democratic.svg', title: 'Democratic', desc: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.' },
  { icon: '/images/benefits/ico-benefit-uncensorable.svg', title: 'Uncensorable', desc: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.' },
  { icon: '/images/benefits/ico-benefit-cross-platform.svg', title: 'Cross-platform', desc: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.' },
  { icon: '/images/benefits/ico-benefit-risk-free.svg', title: 'Risk Free', desc: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.' },
]

const roadmap = [
  { title: 'Early Registration Starts', month: 'March', year: '2021', desc: lorem },
  { title: 'Early Access Sale Starts', month: 'April', year: '2021', desc: lorem },
  { title: 'Public Sale Starts', month: 'April', year: '2021', desc: lorem },
  { title: 'Token Sale Ends', month: 'May', year: '2021', desc: lorem },
  { title: 'Final Report on Token Sale', month: 'May', year: '2021', desc: lorem },
  { title: 'Bonus Tokens Distribution', month: 'June', year: '2021', desc: lorem },
]

const allocations = [
  { percent: 20, title: 'Token Sale', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi.' },
  { percent: 10, title: 'Advisors', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi.' },
  { percent: 40, title: 'Accelerator Program', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi.' },
  { percent: 30, title: 'Early Backers', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi.' },
]

/** Row 1: Token Sale + Advisors; row 2: Accelerator + Early Backers (matches official 2-column layout) */
const allocationRows = [allocations.slice(0, 2), allocations.slice(2, 4)]

const team = [
  { name: 'John Doe', company: 'Google', image: 'https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/mehrad-vosoughi-iUQmEFtfdLw-unsplash-scaled-420x560.jpeg' },
  { name: 'Stephanie Lawrence', company: 'Microsoft', image: 'https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/alex-starnes-PK_t0Lrh7MM-unsplash-420x560.jpeg' },
  { name: 'Michael Doe', company: 'Apple', image: 'https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/roland-samuel-MZ5A24H1JqU-unsplash-scaled-420x560.jpeg' },
  { name: 'Jeniffer Doe', company: 'Microsoft', image: 'https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash-scaled-420x560.jpeg' },
  { name: 'Sunar Doe', company: 'Google', image: 'https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/vicky-hladynets-uyaTT9u6AvI-unsplash-scaled-420x560.jpeg' },
  { name: 'Maria Doe', company: 'Apple', image: 'https://dojochain.fantasythemes.net/wp-content/uploads/2021/06/christina-wocintechchat-com-SJvDxw0azqw-unsplash-1-scaled-420x560.jpeg' },
]

const brands = [
  'https://cryptoroyal.fantasythemes.net/wp-content/uploads/2021/05/brand_7_white.png',
  'https://cryptoroyal.fantasythemes.net/wp-content/uploads/2021/05/brand_6_white.png',
  'https://cryptoroyal.fantasythemes.net/wp-content/uploads/2021/05/brand_4_white.png',
  'https://cryptoroyal.fantasythemes.net/wp-content/uploads/2021/05/brand_3_white.png',
  'https://cryptoroyal.fantasythemes.net/wp-content/uploads/2021/05/brand_2_white.png',
  'https://cryptoroyal.fantasythemes.net/wp-content/uploads/2021/05/brand_5_white.png',
  'https://cryptoroyal.fantasythemes.net/wp-content/uploads/2021/05/brand_1_white.png',
]
</script>
