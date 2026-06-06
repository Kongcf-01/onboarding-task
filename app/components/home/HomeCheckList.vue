<template>
  <ul class="mt-6 space-y-2.5">
    <li
      v-for="item in items"
      :key="item"
      class="flex items-start gap-3 font-rubik text-xl font-medium text-dojo-text-dark"
    >
      <span class="mt-1 shrink-0 text-[#0269db]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-4" fill="currentColor" aria-hidden="true">
          <path d="M13.485 1.929a1 1 0 0 1 0 1.414l-8.485 8.485a1 1 0 0 1-1.414 0L2.515 9.757a1 1 0 1 1 1.414-1.414l.707.707 7.778-7.778a1 1 0 0 1 1.414 0Z" />
        </svg>
      </span>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>
