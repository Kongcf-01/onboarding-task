<template>
  <li>
    <button
      type="button"
      class="flex w-full min-h-[58px] cursor-pointer items-center justify-between gap-3 border-0 bg-transparent p-[15px] text-left font-rubik text-lg font-normal text-ink-muted transition-colors hover:text-ico-burgundy"
      :class="expanded ? 'rounded bg-surface-tint' : ''"
      @click="emit('toggle')"
    >
      <span>{{ section.label }}</span>
      <i
        class="fe fe-chevron-down shrink-0 text-base text-ink transition-transform duration-250"
        :class="expanded ? 'rotate-180' : ''"
        aria-hidden="true"
      />
    </button>
    <ul
      v-show="expanded"
      class="m-0 list-none py-0 pr-0 pb-2 pl-[15px]"
    >
      <li v-for="item in section.items" :key="item.label">
        <a
          v-if="item.to"
          :href="item.to"
          class="menu-button flex h-11 min-h-11 w-full items-center py-3 pr-4 pl-[30px] font-rubik text-base font-normal no-underline transition-colors hover:text-ico-burgundy"
          :class="item.nav && activeNav === item.nav ? 'text-ico-red' : 'text-ink-muted'"
          @click="emit('nav-click', $event, item.to, item.nav)"
        ><span>{{ item.label }}</span></a>
        <a
          v-else
          href="#"
          class="flex h-11 min-h-11 w-full items-center py-3 pr-4 pl-[30px] font-rubik text-base font-normal text-ink-muted no-underline transition-colors hover:text-ico-burgundy"
        ><span>{{ item.label }}</span></a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import type { NavId, NavSection } from '~/utils/navigation'

defineProps<{
  section: NavSection
  expanded: boolean
  activeNav: NavId | null
}>()

const emit = defineEmits<{
  toggle: []
  'nav-click': [event: MouseEvent, to: string, nav?: NavId]
}>()
</script>
