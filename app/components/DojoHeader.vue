<template>
  <div>
    <!-- Desktop + mobile header -->
    <header
      id="header"
      class="fixed inset-x-0 top-0 z-[100] overflow-visible py-5 transition-all duration-350 ease-out"
      :class="[
        isScrolled
          ? 'bg-[#111] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.35)]'
          : variant === 'ico'
            ? 'bg-transparent py-5 shadow-none min-[992px]:py-10'
            : 'bg-transparent shadow-none',
        variant === 'ico' && !isScrolled
          ? 'after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-ico-blue-dark/20'
          : '',
        variant === 'ico' && isScrolled ? 'shadow-[0_1px_20px_rgba(0,0,0,0.1)]' : '',
        variant === 'ico' && isScrolled ? 'min-[1270px]:[&_.header-inner]:min-h-[110.38px] min-[1270px]:[&_.header-inner]:py-[30.19px]' : '',
      ]"
    >
      <div class="w-full">
        <div
          class="header-inner mx-auto flex min-h-[60px] max-w-[1320px] items-center justify-between gap-4 px-6 max-[991px]:py-4 min-[1270px]:px-6"
        >
          <a href="#" class="shrink-0">
            <img
              src="/images/logo-light.svg"
              alt="DojoChain"
              class="block h-10 w-auto max-w-[min(280px,42vw)] min-[1270px]:h-[50px] min-[1270px]:w-[221.14px] min-[1270px]:max-w-none"
              width="221"
              height="50"
            />
          </a>

          <!-- Mobile: menu + cart -->
          <div class="ml-auto flex shrink-0 items-center gap-1 min-[1270px]:hidden">
            <button
              type="button"
              class="menu-toggle relative z-[110] flex h-11 w-10 cursor-pointer border-0 bg-transparent p-0"
              :aria-expanded="sideMenuOpen"
              aria-label="Toggle menu"
              @click="sideMenuOpen = !sideMenuOpen"
            >
              <span class="absolute top-1/2 left-1/2 w-[22px] -translate-x-1/2 -translate-y-1/2">
                <span
                  class="block h-[3px] w-full bg-white transition-transform duration-400 ease-[cubic-bezier(0,0.995,0.41,0.995)]"
                  :class="sideMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1'"
                />
              </span>
              <span class="absolute top-1/2 left-1/2 w-[22px] -translate-x-1/2 -translate-y-1/2">
                <span
                  class="block h-[3px] w-full bg-white transition-transform duration-400 ease-[cubic-bezier(0,0.995,0.41,0.995)]"
                  :class="sideMenuOpen ? '-translate-y-[3px] rotate-[-45deg]' : 'translate-y-1'"
                />
              </span>
            </button>
            <a
              href="#"
              class="flex items-center gap-0.5 px-1.5 pl-0.5 text-base text-white/90 no-underline transition-colors hover:text-dojo-orange"
              aria-label="Cart"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
              <sup class="text-[10px] font-semibold">0</sup>
            </a>
          </div>

          <!-- Desktop nav -->
          <div class="hidden min-w-0 flex-1 items-center pl-6 min-[1270px]:flex min-[1270px]:justify-between">
            <nav class="mx-auto flex min-w-0 flex-1 items-center justify-center gap-8">
              <ul class="m-0 flex list-none items-center gap-8 p-0">
                <li class="relative list-none">
                  <a
                    href="/"
                    class="menu-button inline-flex min-h-[44.45px] items-center font-rubik text-[13px] font-semibold tracking-wide uppercase no-underline whitespace-nowrap transition-colors duration-200 min-[1270px]:text-sm"
                    :class="desktopLinkClass(activeNavState === 'home')"
                    @click="onNavLinkClick($event, '/', 'home')"
                  >Home</a>
                </li>
                <DojoNavDropdown
                  v-for="section in navSections"
                  :key="section.id"
                  :section="section"
                  :active-nav="activeNavState"
                  @nav-click="onNavLinkClick"
                />
              </ul>

              <a
                href="#"
                class="group relative ml-5 hidden h-[50.38px] w-[143.91px] shrink-0 items-center justify-center rounded-full border border-ico-red p-0.5 no-underline transition-colors hover:border-ico-red-hover hover:bg-ico-red-hover focus-visible:border-ico-red-hover focus-visible:bg-ico-red-hover min-[1270px]:inline-flex"
              >
                <span class="flex h-full w-full items-center justify-center rounded-full font-rubik text-sm font-semibold tracking-wide text-white uppercase transition-colors group-hover:bg-ico-red-hover group-focus-visible:bg-ico-red-hover">
                  Whitepaper
                </span>
              </a>
            </nav>

            <div class="flex shrink-0 items-center">
              <a href="#" class="icon-link flex items-center gap-0.5 px-4 text-base text-white/90 no-underline transition-colors hover:text-ico-red" aria-label="X">
                <i class="fe fe-twitter text-base leading-none" aria-hidden="true" />
              </a>
              <a href="#" class="icon-link flex items-center gap-0.5 px-4 text-base text-white/90 no-underline transition-colors hover:text-ico-red" aria-label="Facebook">
                <i class="fe fe-facebook text-base leading-none" aria-hidden="true" />
              </a>
              <button type="button" class="icon-link flex cursor-pointer items-center gap-0.5 border-0 bg-transparent px-4 text-base text-white/90 transition-colors hover:text-ico-red" aria-label="Search">
                <i class="fe fe-search block h-4 w-[17px] text-base leading-4" aria-hidden="true" />
              </button>
              <a href="#" class="icon-link flex items-center gap-0.5 pr-0 pl-4 text-base text-white/90 no-underline transition-colors hover:text-ico-red" aria-label="Cart">
                <i class="fe fe-shopping-cart block h-4 w-[17px] text-base leading-4" aria-hidden="true" />
                <sup class="text-[10px] font-semibold">0</sup>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile overlay -->
    <div
      class="fixed inset-0 z-[9998] bg-black/55 transition-opacity duration-400"
      :class="sideMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
      @click="sideMenuOpen = false"
    />

    <!-- Mobile side menu -->
    <aside
      id="dojochain-side-menu"
      class="fixed top-0 right-0 z-[9999] h-full w-[325px] max-w-full cursor-auto overflow-y-auto bg-white font-rubik text-base text-ink transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.2,1)]"
      :class="sideMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="min-h-[90px] pt-[50px] pr-[50px] pl-[50px]">
        <button
          type="button"
          class="relative ml-auto mr-[-6px] block size-10 cursor-pointer border-0 bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-px before:w-[22px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:bg-ink after:absolute after:top-1/2 after:left-1/2 after:h-px after:w-[22px] after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:bg-ink"
          aria-label="Close menu"
          @click="sideMenuOpen = false"
        />
      </div>

      <div class="px-[30px] pb-10">
        <ul class="m-0 list-none p-0">
          <li>
            <a
              href="/"
              class="menu-button flex min-h-[58px] w-full items-center p-[15px] font-rubik text-lg font-normal no-underline transition-colors hover:text-ico-burgundy"
              :class="activeNavState === 'home' ? 'text-ico-red' : 'text-ink-muted'"
              @click="onNavLinkClick($event, '/', 'home')"
            ><span>Home</span></a>
          </li>

          <DojoNavMobileSection
            v-for="section in navSections"
            :key="section.id"
            :section="section"
            :expanded="expandedMenus[section.id]"
            :active-nav="activeNavState"
            @toggle="toggleSubmenu(section.id)"
            @nav-click="onNavLinkClick"
          />

          <li>
            <a
              href="#"
              class="flex min-h-[58px] w-full items-center p-[15px] font-rubik text-lg font-normal text-ink-muted no-underline transition-colors hover:text-ico-burgundy"
            ><span>Whitepaper</span></a>
          </li>
        </ul>

        <form class="relative mt-2.5" role="search" @submit.prevent>
          <label class="m-0 block">
            <span class="sr-only">Search for:</span>
            <input
              type="search"
              class="box-border h-[52px] w-full rounded-sm border-0 bg-surface-tint py-3.5 pr-12 pl-[15px] font-rubik text-base text-ink outline-none placeholder:text-[#8a8a8a]"
              placeholder="Search ..."
              name="s"
            />
          </label>
          <button
            type="submit"
            class="absolute top-0 right-0 flex h-[52px] w-12 cursor-pointer items-center justify-center border-0 bg-transparent text-ink"
            aria-label="Search"
          >
            <span class="sr-only">Search</span>
            <i class="fe fe-search text-xl" aria-hidden="true" />
          </button>
        </form>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  createExpandedMenusState,
  navSections,
  type NavId,
  type NavSectionId,
} from '~/utils/navigation'

const props = withDefaults(
  defineProps<{
    activeNav?: 'home' | 'landings' | null
    variant?: 'ico' | 'default'
  }>(),
  { variant: 'ico' },
)

const route = useRoute()
const { navigateWithTransition } = usePageTransition()
const userNavSelection = ref<NavId | null>(null)

const activeNavState = computed<NavId | null>(() => {
  if (props.activeNav) return props.activeNav
  if (route.path === '/ico' || route.path.startsWith('/ico/')) return 'landings'
  if (route.path === '/' && props.variant === 'ico') return 'landings'
  if (userNavSelection.value !== null) return userNavSelection.value
  return null
})

function desktopLinkClass(active: boolean) {
  return active
    ? 'text-ico-red'
    : 'text-white hover:text-ico-red'
}

function selectNav(nav: NavId) {
  userNavSelection.value = nav
}

async function onNavLinkClick(
  event: MouseEvent,
  to: string,
  nav?: NavId,
) {
  event.preventDefault()
  if (nav) selectNav(nav)
  sideMenuOpen.value = false
  await navigateWithTransition(to)
}

watch(() => route.path, () => {
  userNavSelection.value = null
})

const sideMenuOpen = ref(false)
const isScrolled = ref(false)
const expandedMenus = reactive(createExpandedMenusState())

function toggleSubmenu(menu: NavSectionId) {
  expandedMenus[menu] = !expandedMenus[menu]
}

function updateScrollState() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})

watch(sideMenuOpen, (open) => {
  if (!open) {
    for (const section of navSections) {
      expandedMenus[section.id] = false
    }
  } else if (activeNavState.value === 'landings') {
    expandedMenus.landings = true
  }
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
</script>
