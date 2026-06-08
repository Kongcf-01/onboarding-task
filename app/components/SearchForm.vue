<template>
  <form class="search-form relative" role="search" @submit.prevent="submit">
    <label class="m-0 block">
      <span class="sr-only">Search for:</span>
      <input
        v-model="query"
        type="search"
        name="s"
        class="hide-search-cancel box-border min-h-[52px] w-full rounded border border-transparent py-3.5 pl-[15px] font-rubik text-base text-[#232226] outline-none transition-[border-color,background-color] duration-300 placeholder:text-[#8a8a8a] focus:border-[#C82D00]"
        :class="[
          variant === 'page'
            ? 'bg-[rgba(23,22,26,0.04)] pr-[50px]'
            : 'bg-surface-tint focus:border-[#C82D00]',
          variant === 'menu' && query ? 'pr-24' : '',
          variant === 'menu' && !query ? 'pr-12' : '',
        ]"
        :placeholder="variant === 'page' ? 'Search …' : 'Search ...'"
      />
    </label>
    <button
      v-if="variant === 'menu' && query"
      type="button"
      class="absolute top-0 right-12 flex h-[52px] w-10 cursor-pointer items-center justify-center border-0 bg-transparent text-[#C82D00]"
      aria-label="Clear search"
      @click="query = ''"
    >
      <i class="fe fe-x text-base leading-none" aria-hidden="true" />
    </button>
    <button
      type="submit"
      class="search-submit absolute top-0 right-0 flex h-full w-[50px] cursor-pointer items-center justify-center border-0 bg-transparent text-[#232226]"
      aria-label="Search"
    >
      <span class="sr-only">Search</span>
      <i class="fe fe-search text-xl leading-none" aria-hidden="true" />
    </button>
  </form>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    initialQuery?: string
    variant?: 'page' | 'menu'
  }>(),
  { variant: 'page' },
)

const emit = defineEmits<{
  submit: [query: string]
}>()

const query = ref(props.initialQuery ?? '')

watch(
  () => props.initialQuery,
  (value) => {
    query.value = value ?? ''
  },
)

function submit() {
  emit('submit', query.value)
}
</script>
