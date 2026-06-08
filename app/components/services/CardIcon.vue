<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="icon.viewBox"
    fill="currentColor"
    class="block h-[56px] w-[56px] min-[1025px]:h-[72px] min-[1025px]:w-[72px]"
    aria-hidden="true"
  >
    <path v-for="(d, pathIndex) in icon.paths" :key="pathIndex" :d="d" />
    <polygon v-if="icon.polygon" :points="icon.polygon" />
  </svg>
</template>

<script setup lang="ts">
import { serviceIconConfigs } from '~/utils/serviceIcons'

const props = defineProps<{
  index: number
}>()

const icon = computed(() => serviceIconConfigs[props.index] ?? serviceIconConfigs[0]!)
</script>
