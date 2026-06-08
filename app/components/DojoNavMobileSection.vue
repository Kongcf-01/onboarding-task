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
          :class="itemClass(item)"
          @click="emit('nav-click', $event, item.to, item.nav)"
        ><span>{{ item.label }}</span></a>
        <a
          v-else
          href="#"
          class="flex h-11 min-h-11 w-full items-center py-3 pr-4 pl-[30px] font-rubik text-base font-normal no-underline transition-colors hover:text-ico-burgundy"
          :class="itemClass(item)"
        ><span>{{ item.label }}</span></a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import {
  isNavItemActive,
  type NavId,
  type NavItem,
  type NavSection,
} from '~/utils/navigation'

const props = defineProps<{
  section: NavSection
  expanded: boolean
  activeNav: NavId | null
}>()

function itemClass(item: NavItem) {
  if (item.to && isNavItemActive(item, route.path, props.activeNav)) {
    return 'text-ico-red'
  }
  return 'text-ink-muted'
}

const route = useRoute()

const emit = defineEmits<{
  toggle: []
  'nav-click': [event: MouseEvent, to: string, nav?: NavId]
}>()
</script>
