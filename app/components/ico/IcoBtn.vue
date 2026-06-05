<template>
  <a
    :href="href"
    v-bind="$attrs"
    class="group relative inline-flex min-h-[52px] items-center rounded-full py-3.5 pl-6 pr-[60px] text-left font-rubik text-base font-semibold leading-normal tracking-normal no-underline transition-[background,color] duration-200 max-lg:py-3.5 max-lg:pl-5 max-lg:pr-[52px] max-lg:text-[15px]"
    :class="
      variant === 'light'
        ? 'bg-ico-cream text-[#182a3f] hover:text-ico-red'
        : 'bg-ico-red! text-white! hover:bg-ico-red-hover!'
    "
  >
    <span class="inline-block whitespace-nowrap p-0 text-left">
      <slot>{{ label }}</slot>
    </span>
    <span
      class="btn-icon-holder absolute top-1/2 right-[15px] size-8 -translate-y-1/2 overflow-hidden rounded-full text-center"
      :class="
        variant === 'light'
          ? 'bg-[rgba(24,42,63,0.12)] text-[#182a3f] group-hover:bg-black/20'
          : 'bg-white/15 text-white group-hover:bg-ico-burgundy'
      "
      aria-hidden="true"
    >
      <span
        class="btn-icon-track flex w-8 flex-col transition-none group-hover:-translate-y-8 group-hover:transition-transform group-hover:duration-350 group-hover:ease-[cubic-bezier(0.23,1,0.32,1)]"
        style="height: 64px"
      >
        <span class="grid size-8 shrink-0 place-items-center">
          <i :class="icon" class="btn-fa-icon" aria-hidden="true" />
        </span>
        <span class="grid size-8 shrink-0 place-items-center">
          <i
            :class="[icon, variant === 'light' ? 'group-hover:text-white' : '']"
            class="btn-fa-icon"
            aria-hidden="true"
          />
        </span>
      </span>
    </span>
  </a>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    href?: string
    label?: string
    icon?: string
    variant?: 'primary' | 'light'
  }>(),
  {
    href: '#',
    label: '',
    icon: 'fas fa-music',
    variant: 'primary',
  },
)
</script>
