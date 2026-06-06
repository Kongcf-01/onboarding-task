<template>
  <a
    :href="href"
    class="inline-flex min-h-[52px] items-center justify-center rounded-full px-8 py-3.5 font-rubik text-base font-semibold no-underline transition-[background,color] duration-200"
    :class="
      variant === 'light'
        ? 'bg-dojo-cream text-[#182a3f] hover:bg-white hover:text-dojo-orange'
        : 'bg-dojo-orange text-white hover:bg-dojo-orange-dark'
    "
  >
    <slot>{{ label }}</slot>
  </a>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    label?: string
    variant?: 'primary' | 'light'
  }>(),
  {
    href: '#',
    label: '',
    variant: 'primary',
  },
)
</script>
