<template>
  <ul class="mt-6 list-none space-y-2.5">
    <li
      v-for="item in items"
      :key="item"
      class="flex items-center"
    >
      <span class="inline-flex size-4 shrink-0 items-center justify-center text-[#0269db]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="size-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M173.898 439.404 7.498 273.004c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
          />
        </svg>
      </span>
      <span class="pl-3.5 font-rubik text-xl font-medium text-dojo-text-dark">{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>
