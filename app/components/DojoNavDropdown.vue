<template>
  <li class="group relative list-none">
    <a
      :href="section.href"
      class="inline-flex min-h-[44.45px] items-center font-rubik text-[13px] font-semibold tracking-wide text-white uppercase no-underline whitespace-nowrap transition-colors duration-200 min-[1270px]:text-sm after:ml-1 after:inline-block after:align-middle after:border-t-4 after:border-r-[3.5px] after:border-l-[3.5px] after:border-r-transparent after:border-l-transparent after:border-t-current after:opacity-70 group-hover:text-ico-red"
    >{{ section.label }}</a>
    <ul
      class="pointer-events-none absolute top-full left-1/2 z-[999] m-0 min-w-[calc(100%+2rem)] -translate-x-1/2 translate-y-[15px] list-none rounded border-t-4 border-ico-red bg-white py-7 pb-6 opacity-0 shadow-[0_0_35px_rgba(0,0,0,0.1)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
    >
      <li
        v-for="(item, index) in section.items"
        :key="item.label"
        class="min-w-[280px] bg-white px-10"
      >
        <a
          :href="item.to ?? '#'"
          class="block py-3.5 pb-3 font-rubik text-[13px] font-medium tracking-wide text-[#101010] uppercase no-underline whitespace-nowrap transition-all hover:text-ico-red"
          :class="[
            index < section.items.length - 1 ? 'border-b border-[#e8e8e8]' : '',
            item.to ? 'menu-button' : '',
            isNavItemActive(item, route.path, activeNav) ? 'text-ico-red' : '',
          ]"
          @click="onItemClick($event, item)"
        >{{ item.label }}</a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { isNavItemActive, type NavId, type NavItem, type NavSection } from '~/utils/navigation'

defineProps<{
  section: NavSection
  activeNav: NavId | null
}>()

const route = useRoute()

const emit = defineEmits<{
  'nav-click': [event: MouseEvent, to: string, nav?: NavId]
}>()

function onItemClick(event: MouseEvent, item: NavItem) {
  if (item.to) emit('nav-click', event, item.to, item.nav)
}
</script>
