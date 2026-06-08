<template>
  <a
    :href="href"
    v-bind="$attrs"
    class="group relative inline-flex min-h-[52px] origin-center items-center rounded-full py-3.5 pl-6 pr-[60px] text-left font-rubik text-base font-semibold leading-normal tracking-normal no-underline transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.05] max-lg:py-3.5 max-lg:pl-5 max-lg:pr-[52px] max-lg:text-[15px]"
    :class="
      variant === 'talk'
        ? 'bg-[#000E03] text-[#01F59C] hover:bg-white hover:text-[#000E03]'
        : 'bg-[#01F59C] text-[#000E03]'
    "
  >
    <span class="inline-block whitespace-nowrap p-0 text-left">
      <slot>{{ label }}</slot>
    </span>
    <span
      class="absolute top-1/2 right-[15px] size-8 -translate-y-1/2 overflow-hidden rounded-full text-center transition-[background-color,color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      :class="
        variant === 'talk'
          ? 'bg-white/15 text-[#01F59C] group-hover:bg-[rgba(24,42,63,0.12)] group-hover:text-[#000E03]'
          : 'bg-[#01F59C] text-[#000E03] group-hover:bg-[#00CB81] group-hover:text-white'
      "
      aria-hidden="true"
    >
      <span
        class="flex h-16 w-8 flex-col group-hover:transition-transform group-hover:duration-500 group-hover:ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-8"
      >
        <span class="grid size-8 shrink-0 place-items-center">
          <i :class="icon" class="block text-xs leading-none before:block before:leading-none" aria-hidden="true" />
        </span>
        <span class="grid size-8 shrink-0 place-items-center">
          <i
            :class="[icon, variant === 'talk' ? 'group-hover:text-[#000E03]' : 'group-hover:text-white']"
            class="block text-xs leading-none before:block before:leading-none"
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
    variant?: 'talk' | 'mint'
  }>(),
  {
    href: '#',
    label: '',
    icon: 'fas fa-paper-plane',
    variant: 'talk',
  },
)
</script>
